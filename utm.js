document.addEventListener('DOMContentLoaded', () => {
    const domain = window.location.hostname;
    const utmSource = 'websnowi';
    const utmMedium = domain;
  
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (event) => {
        const url = new URL(link.href);
        url.searchParams.set('utm_source', utmSource);
        url.searchParams.set('utm_medium', utmMedium);
  
        link.href = url.toString();
      });
    });
  });
  