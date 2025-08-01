// Why Choose Section
const cards = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => {
  observer.observe(card);
});


// Services Section

const data = [
  {
    image: 'images/Polyurethane_Flooring.webp',
    title: 'Epoxy / Polyurethane Flooring',
    description: 'Epoxy and polyurethane flooring are high-performance coatings used in industrial and commercial spaces for their durability, chemical resistance, and smooth finish.'
  },
  {
    image: 'images/waterproofing.webp',
    title: 'Waterproofing',
    description: 'Waterproofing is the process of making surfaces resistant to water penetration, protecting structures like terraces, basements, and walls from leaks and damage.'
  },

];

const gallery = document.getElementById('product-gallery');

data.forEach(item => {
  const card = document.createElement('div');
  card.className = 'hover-card';

  // Encode category name in URL to pass it to product.html
  const encodedCategory = encodeURIComponent(item.title);

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="hover-content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="product.html?category=${encodedCategory}"><button>Learn More</button></a>
    </div>
  `;

  gallery.appendChild(card);
});


// About Section

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const elements = document.querySelectorAll('.animate-left, .animate-right');
elements.forEach((el) => observer1.observe(el));
