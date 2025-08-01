 const products = {
      massage: [
        {
          image: "ProductImages/Kings_Elite_MassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Mechanical/Engineering Industrial Flooring",
          link: "Kings_Elite_Massage_Chair.html"
        },
        {
          image: "ProductImages/Dream_Relax_FullBodyMassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Pharmacy/Food Industrial Flooring with Covering",
          link: "Dream_Relax_FullBody.html"
        },
        {
          image: "ProductImages/Legacy_MassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Polyurethane Base Chemical Resistant Flooring",
          link: "Legacy_Massage_Chair.html"
        },
        {
          image: "ProductImages/Highland_MassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Anti-Static(ESD) Flooring",
          link: "Highland_Massage_Chair.html"
        },
        {
          image: "ProductImages/Imperial_MassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Anti-Skid Flooring",
          link: "Imperial_Massage_Chair.html"
        },
        {
          image: "ProductImages/Maestro_FullBodyMassageChair/img1.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Car Parking Anti-Skid Flooring",
          link: "Maestro_Full_Body.html"
        },
      ],
      leg: [
        {
          image: "ProductImages/Reflex_Swing_ProLegMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Conventional Brick Bat Coba",
          link: "Reflex_Swing_ProLegMassager.html"
        },
        {
          image: "ProductImages/Reflex_Swing_U_ComfortFootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Membrane Waterproofing ",
          link: "Reflex_Swing_U_ComfortFootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Expansion Joint Treatment",
          link: "Leg_And_FootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Basement Waterproofing",
          link: "Leg_And_FootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Injection Grouting",
          link: "Leg_And_FootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Protective Wall Coating",
          link: "Leg_And_FootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "UGWT/OHWT Treatment",
          link: "Leg_And_FootMassager.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/img1.webp",
          subtitle: "Waterproofing",
          title: "Toilet Block PU Grouting",
          link: "Leg_And_FootMassager.html"
        }
      ],
    };

function showProducts(category, element) {
      document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
      if (element) element.classList.add('active');

      const container = document.getElementById('productContainer');
      container.innerHTML = "";

      products[category].forEach(product => {
        const card = `
          <div class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
              <div class="title">${product.title}</div>
              <a href="${product.link}" class="read-more">Read More</a>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    }

// Read URL query string and set default tab
    window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category') || 'massage';
      const tabButton = Array.from(document.querySelectorAll('.tab-buttons button'))
        .find(btn => btn.textContent.toLowerCase().includes(category));
      showProducts(category, tabButton);
    };
