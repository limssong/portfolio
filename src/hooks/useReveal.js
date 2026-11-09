import { useEffect, useRef, useState } from 'react';

// mode: 'scroll' (IntersectionObserver로 화면에 들어올 때 트리거) | 'mount' (마운트 후 트리거)
// triggerDelay: isVisible을 true로 바꾸기 전 대기 시간(ms). 요소가 처음부터 이미
// 화면 안에 있어도(히어로처럼) 숨긴 상태가 한 프레임 이상 먼저 그려지도록 보장해
// fade-up 전환이 실제로 눈에 보이게 만든다.
const useReveal = ({ threshold = 0.15, mode = 'scroll', triggerDelay = 80 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    const reveal = () => {
      timeoutId = setTimeout(() => setIsVisible(true), triggerDelay);
    };

    if (mode === 'mount') {
      reveal();
      return () => clearTimeout(timeoutId);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [threshold, mode, triggerDelay]);

  return [ref, isVisible];
};

export default useReveal;
