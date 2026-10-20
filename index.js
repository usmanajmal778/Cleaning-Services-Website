
// SETTINGS
const WHATSAPP_NUMBER = "27713343117";
const BRAND = "1st Matchless Cleaning Services 999";

// SERVICE ICONS
const ICONS = {
  bed: '<rect x="6" y="28" width="52" height="14" rx="3"/><path d="M10 42v8M54 42v8M6 28l4-10h44l4 10"/>',
  car: '<path d="M8 40l4-14a4 4 0 0 1 4-3h32a4 4 0 0 1 4 3l4 14v10H8z"/><circle cx="19" cy="50" r="4"/><circle cx="45" cy="50" r="4"/>',
  shoe: '<path d="M6 44V30l10 3 8-12 8 6 18 4c5 1 8 4 8 9v4z"/><path d="M6 50h52"/>',
  blanket: '<path d="M8 20h48v26H8z"/><path d="M8 28h48M8 36h48"/>',
  spark: '<path d="M32 8l5 15 15 5-15 5-5 15-5-15-15-5 15-5z"/>'
};

// SERVICES AND PRICES
// These details are used for the contact form dropdown.
// Service cards themselves are now inside index.html.
const SERVICES = [
  {
    name: 'Mattress Cover Cleaning',
    desc: 'Hygienic, thorough cleaning that leaves your mattress cover fresh.',
    price: 'R350',
    show: 'R350',
    label: 'Price',
    img: 'image.png',
    icon: 'bed'
  },
  {
    name: 'Double / King Mattress Cleaning',
    desc: 'Dust, stains and odours removed from larger double and king mattresses.',
    price: 'R500–R1,200',
    show: 'R500–R1,200',
    label: 'Price range',
    img: 'image.png',
    icon: 'bed'
  },
  {
    name: 'Deep Mattress Cleaning',
    desc: 'Intensive treatment for queen or king mattresses with heavy stains.',
    price: 'R1,500*',
    show: 'R1,500*',
    label: 'Price',
    img: 'image.png',
    icon: 'bed'
  },
  {
    name: 'Blanket Washing',
    desc: 'Soft, fresh and spotless blankets, washed with care.',
    price: 'R40–R132',
    show: 'R40–R132',
    label: 'Price range',
    img: 'image.png',
    icon: 'blanket'
  },
  {
    name: 'White Shoe Cleaning',
    desc: 'A bright, crisp finish. We remove dirt, scuffs and yellowing.',
    price: 'R30',
    show: 'R30',
    label: 'Per pair',
    img: 'image.png',
    icon: 'shoe'
  },
  {
    name: 'Coloured Shoe Cleaning',
    desc: 'Gentle cleaning that keeps your colours vibrant and fresh.',
    price: 'R25',
    show: 'R25',
    label: 'Per pair',
    img: 'image.png',
    icon: 'shoe'
  },
  {
    name: 'Shoe Cleaning with Chemical Treatment',
    desc: 'Extra chemical treatment for stubborn dirt and stains.',
    price: 'R35',
    show: 'R35',
    label: 'Per pair',
    img: 'image.png',
    icon: 'shoe'
  },
  {
    name: 'Yellowed Shoes Restoration',
    desc: 'Bring yellowed shoes back to a clean, fresh look.',
    price: 'R65',
    show: 'R65',
    label: 'Per pair',
    img: 'image.png',
    icon: 'shoe'
  },
  {
    name: 'Shoe Covers',
    desc: 'Shoe covers to keep your shoes protected and looking good.',
    price: 'R25',
    show: 'R25',
    label: 'Per pair',
    img: 'image.png',
    icon: 'shoe'
  },
  {
    name: 'Car Seat Cleaning / Car Valet',
    desc: 'Complete seat and interior valet so your car feels brand new again.',
    price: 'R400',
    show: 'R400',
    label: 'Price',
    img: 'image.png',
    icon: 'car'
  },
  {
    name: 'General Cleaning',
    desc: 'Mattress, carpet, car seat, dustbin and general cleaning. Tell us what you need.',
    price: 'Quote on request',
    show: 'On Request',
    label: 'Custom',
    img: 'image.png',
    icon: 'spark',
    quote: true
  }
];

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;


// NAVBAR SCROLL
const navbar = document.getElementById('navbar');

if (navbar) {
  const onScroll = () =>
    navbar.classList.toggle('scrolled', window.scrollY > 60);

  window.addEventListener('scroll', onScroll);
  onScroll();
}


// MOBILE MENU
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}


// ANIMATED BUBBLES
const bubbles = document.getElementById('bubbles');

if (bubbles) {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement('span');
    const s = Math.random() * 60 + 16;

    b.style.width = b.style.height = s + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.animationDuration = (Math.random() * 9 + 8) + 's';
    b.style.animationDelay = (Math.random() * 8) + 's';

    bubbles.appendChild(b);
  }
}


// SERVICE CARDS
// Cards are written directly in index.html.
// Do not generate them again here, or they will be duplicated.


// BUILD CONTACT FORM SERVICE OPTIONS
const service = document.getElementById('service');

if (service) {
  const addOpt = (name, price) => {
    // Avoid adding duplicate options if the script runs again.
    if ([...service.options].some(option => option.value === name)) return;

    const o = new Option(name, name);
    o.dataset.price = price;
    service.add(o);
  };

  SERVICES.forEach(s => addOpt(s.name, s.price));
  addOpt('Cleaning Chemicals', 'R20');
  addOpt('General Enquiry', '');
}


// SCROLL REVEAL
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 100);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('active');
  });
}


// BEFORE / AFTER SLIDER
const baRange = document.getElementById('baRange');
const baBefore = document.getElementById('baBefore');
const baLine = document.getElementById('baLine');

if (baRange && baBefore && baLine) {
  baRange.addEventListener('input', () => {
    baBefore.style.clipPath = `inset(0 ${100 - baRange.value}% 0 0)`;
    baLine.style.left = baRange.value + '%';
  });
}


// PRICE DISPLAY IN CONTACT FORM
const priceNote = document.getElementById('priceNote');
const priceVal = document.getElementById('priceVal');

if (service && priceNote && priceVal) {
  service.addEventListener('change', () => {
    const selected = service.selectedOptions[0];
    const p = selected ? selected.dataset.price : '';

    if (p) {
      priceVal.textContent = p;
      priceNote.classList.add('show');
    } else {
      priceNote.classList.remove('show');
    }
  });
}


// TOAST MESSAGE
const toast = document.getElementById('toast');

const showToast = (message) => {
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
};


// CONTACT FORM VALIDATION AND WHATSAPP
const form = document.getElementById('contactForm');

if (form) {
  const setInvalid = (el, bad) => {
    const field = el.closest('.field');
    if (field) field.classList.toggle('invalid', bad);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    if (!name || !phone || !service || !message) {
      showToast('Please check the contact form fields.');
      return;
    }

    const checks = [
      [name, name.value.trim().length < 2],
      [phone, !/^[+\d][\d\s\-()]{6,}$/.test(phone.value.trim())],
      [service, service.value === ''],
      [message, message.value.trim().length < 5]
    ];

    let ok = true;

    checks.forEach(([el, bad]) => {
      setInvalid(el, bad);
      if (bad) ok = false;
    });

    if (!ok) {
      showToast('Please fix the highlighted fields.');
      return;
    }

    const selected = service.selectedOptions[0];
    const price = selected ? selected.dataset.price : '';

    const text =
      `Hello ${BRAND},

Name: ${name.value.trim()}
Phone: ${phone.value.trim()}
Service: ${service.value}${price ? ' (' + price + ')' : ''}

Message: ${message.value.trim()}`;

    window.open(waLink(text), '_blank');
    showToast('Thank you! Opening WhatsApp...');

    form.reset();

    if (priceNote) {
      priceNote.classList.remove('show');
    }
  });

  form.querySelectorAll('input,select,textarea').forEach(el => {
    el.addEventListener('input', () => {
      const field = el.closest('.field');
      if (field) field.classList.remove('invalid');
    });
  });
}


// FAQ ACCORDION FUNCTION
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active");

      const question = faq.querySelector(".faq-question");
      if (question) {
        question.setAttribute("aria-expanded", "false");
      }
    });

    // Open the clicked item if it was closed
    if (!isOpen) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});


// MATCHLESS PREMIUM SCROLL ANIMATIONS
(() => {
  const initPremiumAnimations = () => {
    const selectors = [
      ".head",
      "#serviceGrid .card",
      ".note",
      ".addon",
      ".cta-bar",
      ".ba",
      ".why-item",
      ".promise-grid > div",
      ".g-item",
      ".step",
      ".faq-item",
      ".info-card",
      ".form-box",
      ".final",
      ".footer-cta-inner",
      ".footer-grid > *"
    ];

    const elements = [...document.querySelectorAll(selectors.join(","))];

    // Replace the old reveal class with the premium animation class.
    elements.forEach((el) => {
      el.classList.remove("reveal", "active");
      el.classList.add("motion-reveal");
    });

    // Stagger cards separately within each group.
    const groups = [
      "#serviceGrid .card",
      ".why-item",
      ".g-item",
      ".step",
      ".faq-item",
      ".footer-grid > *"
    ];

    groups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.style.transitionDelay = `${(index % 4) * 100}ms`;
      });
    });

    document.querySelectorAll(".info-card").forEach((el, index) => {
      el.classList.add(index % 2 ? "motion-right" : "motion-left");
    });

    document.querySelectorAll(".promise-grid > div").forEach((el, index) => {
      el.classList.add(index % 2 ? "motion-right" : "motion-left");
    });

    // Show everything immediately if reduced motion is preferred.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((el) => el.classList.add("motion-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("motion-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -45px 0px"
    });

    elements.forEach((el) => observer.observe(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPremiumAnimations, {
      once: true
    });
  } else {
    initPremiumAnimations();
  }
})();



(function () {
  var slides = document.querySelectorAll('#heroSlides .slide');
  var texts  = document.querySelectorAll('#heroTexts .slide-text');
  var dotsBox = document.getElementById('heroDots');
  var dots   = document.querySelectorAll('#heroDots button');
  var count  = document.getElementById('heroCount');
  var prev   = document.getElementById('heroPrev');
  var next   = document.getElementById('heroNext');
  if (!slides.length) return;
 
  var DELAY = 4000;              // 4 second  (3000 likhein to 3 second)
  var current = 0, timer = null;
 
  if (dotsBox) dotsBox.style.setProperty('--delay', DELAY + 'ms');
 
  // Sab images pehle se load kar lein taake change ke waqt khali na dikhe
  slides.forEach(function (s) {
    var m = /url\(["']?(.*?)["']?\)/.exec(s.style.backgroundImage);
    if (m) { var im = new Image(); im.src = m[1]; }
  });
 
  function pad(n) { return (n < 10 ? '0' : '') + n; }
 
  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle('active', n === current); });
    texts.forEach(function (t, n)  { t.classList.toggle('active', n === current); });
    dots.forEach(function (d, n) {
      d.classList.remove('active', 'done');
      void d.offsetWidth;                       // progress bar dobara shuru
      if (n < current) d.classList.add('done');
      if (n === current) d.classList.add('active');
    });
    if (count) count.textContent = pad(current + 1) + ' / ' + pad(slides.length);
  }
 
  function stop()  { if (timer) { clearInterval(timer); timer = null; } }
  function start() { stop(); timer = setInterval(function () { show(current + 1); }, DELAY); }
  function go(i)   { show(i); start(); }
 
  dots.forEach(function (d, n) { d.addEventListener('click', function () { go(n); }); });
  if (prev) prev.addEventListener('click', function () { go(current - 1); });
  if (next) next.addEventListener('click', function () { go(current + 1); });
 
  // Tab chhupa ho to slider ruk jaye
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else { show(current); start(); }
  });
 
  // Mobile swipe
  var hero = document.getElementById('home'), x0 = null;
  if (hero) {
    hero.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) go(dx < 0 ? current + 1 : current - 1);
      x0 = null;
    }, { passive: true });
  }
 
  show(0);
  start();
})();
 