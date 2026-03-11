const ctaButton = document.getElementById('cta-button');
const productCards = document.querySelectorAll('.product-card');

ctaButton.addEventListener('click', () => {
  const section = document.getElementById('products');
  section.scrollIntoView({ behavior: 'smooth' });
});

productCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.2s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
