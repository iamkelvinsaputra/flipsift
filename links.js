/* Every outside link on the site lives here. Fill these in as each one goes live;
   buttons whose link is still empty show their "coming soon" text instead. */
window.FLIPSIFT_LINKS = {
  chrome: '', // Chrome Web Store listing
  monthly: '', // Lemon Squeezy checkout, Pro Monthly
  lifetime: '', // Lemon Squeezy checkout, Pro Lifetime
  etsy: '', // Etsy listing for the Reseller Profit Tracker
  support: 'https://github.com/iamkelvinsaputra/flipsift/issues',
};

document.addEventListener('DOMContentLoaded', () => {
  const L = window.FLIPSIFT_LINKS;
  for (const a of document.querySelectorAll('[data-link]')) {
    const url = L[a.dataset.link];
    if (url) {
      a.href = url;
      if (/^https?:/.test(url) && !url.includes(location.host)) a.rel = 'noopener';
    } else {
      a.removeAttribute('href');
      a.classList.add('soon');
      a.setAttribute('aria-disabled', 'true');
      if (a.dataset.soon) a.textContent = a.dataset.soon;
    }
  }
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
