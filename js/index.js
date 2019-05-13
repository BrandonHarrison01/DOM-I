const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navi = document.querySelectorAll('header nav a');
navi[0].textContent = siteContent['nav']['nav-item-1'];
navi[1].textContent = siteContent['nav']['nav-item-2'];
navi[2].textContent = siteContent['nav']['nav-item-3'];
navi[3].textContent = siteContent['nav']['nav-item-4'];
navi[4].textContent = siteContent['nav']['nav-item-5'];
navi[5].textContent = siteContent['nav']['nav-item-6'];
console.log(navi)

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', 'img/header-img.png');

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

const titleHead = document.querySelector(".cta-text h1");
titleHead.textContent = siteContent["cta"]["h1"];

const titleButton = document.querySelector(".cta-text button");
titleButton.textContent = siteContent['cta']['button'];

const featuresHead = document.querySelectorAll(".text-content h4");
featuresHead[0].textContent = siteContent['main-content']['features-h4'];
featuresHead[1].textContent = siteContent['main-content']['about-h4'];

const featuresBody = document.querySelectorAll(".text-content p");
featuresBody[0].textContent = siteContent['main-content']['features-content'];
featuresBody[1].textContent = siteContent['main-content']['about-content'];

