/* =============================================
   PORTFOLIO — MAIN JS
   ============================================= */

// ── Works filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards  = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    workCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Contact form (mailto fallback) ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('name')?.value    || '';
    const email   = document.getElementById('email')?.value   || '';
    const subject = document.getElementById('subject')?.value || 'Portfolio Contact';
    const message = document.getElementById('message')?.value || '';

    const mailtoLink =
      `mailto:hello@yourname.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
  });
}
