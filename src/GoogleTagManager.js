import React, { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_ANALYTICS_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', import.meta.env.VITE_ANALYTICS_ID);

    return () => {
      // Clean up the script if necessary
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
