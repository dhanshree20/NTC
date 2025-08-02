 const products = {
      massage: [
        {
          image: "images/All_Services_Images/Mechanical_Engineering_Industrial_Flooring.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Mechanical/Engineering Industrial Flooring",
          link: "Mechanical_Engineering_Industrial_Flooring.html"
        },
        {
          image: "images/All_Services_Images/Pharmacy_Food_Industrial_Flooring.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Pharmacy/Food Industrial Flooring with Covering",
          link: "Pharmacy_Food_Industrial_Flooring.html"
        },
        {
          image: "images/All_Services_Images/Polyurethane_Base_Chemical_Resistant.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Polyurethane Base Chemical Resistant Flooring",
          link: "Polyurethane_Base_Chemical_Resistant.html"
        },
        {
          image: "images/All_Services_Images/Anti_Static.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Anti-Static(ESD) Flooring",
          link: "Anti_Static.html"
        },
        {
          image: "images/All_Services_Images/Anti_Skid.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Anti-Skid Flooring",
          link: "Anti_Skid.html"
        },
        {
          image: "images/All_Services_Images/Car_Parking_Anti-Skid.webp",
          subtitle: "Industrial(PU/Epoxy) Flooring",
          title: "Car Parking Anti-Skid Flooring",
          link: "Car_Parking_Anti-Skid.html"
        },
      ],
      leg: [
        {
          image: "images/All_Services_Images/Conventional_Brick_Bat_Coba_Terraces_Balconies.webp",
          subtitle: "Waterproofing",
          title: "Conventional Brick Bat Coba For Terraces and Balconies",
          link: "Conventional_Brick_Bat_Coba_Terraces_Balconies.html"
        },
        {
          image: "images/All_Services_Images/Conventional_Brick_Bat_Coba_Toilet_Block.webp",
          subtitle: "Waterproofing",
          title: "Conventional Brick Bat Coba For Toilet Block",
          link: "Conventional_Brick_Bat_Coba_Toilet_Block.html"
        },
        {
          image: "images/All_Services_Images/Bitumen_Membrane_Waterproofing.webp",
          subtitle: "Waterproofing",
          title: "Bitumen Membrane Waterproofing ",
          link: "Bitumen_Membrane_Waterproofing.html"
        },
        {
          image: "images/All_Services_Images/Polyurethane_Membrane_Waterproofing.webp",
          subtitle: "Waterproofing",
          title: "Polyurethane Membrane Waterproofing",
          link: "Polyurethane_Membrane_Waterproofing.html"
        },
        {
          image: "images/All_Services_Images/Chemical_Membrane_Waterproofing.webp",
          subtitle: "Waterproofing",
          title: "Chemical Membrane Waterproofing ",
          link: "Chemical_Membrane_Waterproofing.html"
        },
        {
          image: "images/All_Services_Images/Expansion_Joint_Treatment.webp",
          subtitle: "Waterproofing",
          title: "Expansion Joint Treatment",
          link: "Expansion_Joint_Treatment.html"
        },
        {
          image: "images/All_Services_Images/Basement_Waterproofing.webp",
          subtitle: "Waterproofing",
          title: "Basement Waterproofing",
          link: "Basement_Waterproofing.html"
        },
        {
          image: "images/All_Services_Images/Injection_Grouting.webp",
          subtitle: "Waterproofing",
          title: "Injection Grouting",
          link: "Injection_Grouting.html"
        },
        {
          image: "images/All_Services_Images/Protective_Wall_Coating.webp",
          subtitle: "Waterproofing",
          title: "Protective Wall Coating",
          link: "Protective_Wall_Coating.html"
        },
        {
          image: "images/All_Services_Images/UGWT_OHWT_Treatment.webp",
          subtitle: "Waterproofing",
          title: "UGWT/OHWT Treatment",
          link: "UGWT_OHWT_Treatment.html"
        },
        {
          image: "images/All_Services_Images/Toilet_Block_PU_Grouting.webp",
          subtitle: "Waterproofing",
          title: "Toilet Block PU Grouting",
          link: "Toilet_Block_PU_Grouting.html"
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




window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "massage";

  if (category === "massage") {
    const epoxyBtn = document.getElementById("epoxyTab");
    if (epoxyBtn) {
      epoxyBtn.click();
      epoxyBtn.scrollIntoView({ behavior: "smooth" });
    }
  } else if (category === "leg") {
    const waterproofBtn = document.getElementById("waterproofingTab");
    if (waterproofBtn) {
      waterproofBtn.click();
      waterproofBtn.scrollIntoView({ behavior: "smooth" });
    }
  }
});

