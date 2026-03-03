const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    // 환경 변수 누락 시 콘솔에만 경고
    console.warn(
      'Google Analytics: REACT_APP_GA_MEASUREMENT_ID 가 설정되어 있지 않습니다.'
    );
    return;
  }

  if (typeof window === 'undefined') return;

  // 이미 초기화된 경우 중복 실행 방지
  if (window.dataLayer && window.gtag) return;

  // gtag 스크립트 추가
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
};

export const trackPageView = (pagePath) => {
  if (typeof window === 'undefined') return;
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'page_view', {
    page_path: pagePath || window.location.pathname + window.location.search + window.location.hash,
  });
};

