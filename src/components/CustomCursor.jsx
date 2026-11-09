import { useEffect, useRef, useState } from 'react';

// 마우스가 있는 데스크톱(포인터 fine)에서만 활성화되고, 터치 기기에서는 렌더링하지 않음
const CustomCursor = () => {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFine);
    if (!isFine) return;

    const handleMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const handleOver = (e) => {
      if (e.target.closest('[data-cursor="view"]')) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest('[data-cursor="view"]')) setHovering(false);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    document.body.classList.add('custom-cursor-active');

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={dotRef} className={`custom-cursor ${hovering ? 'custom-cursor--hover' : ''}`}>
      <span className="custom-cursor-label">View</span>
    </div>
  );
};

export default CustomCursor;
