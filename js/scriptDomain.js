document.addEventListener("DOMContentLoaded", function () {
  const domain = "https://store-ml.vercel.app/";

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("#")) {
      link.setAttribute("href", domain + href);
    }
  });

  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !src.startsWith("http")) {
      img.setAttribute("src", domain + src);
    }
  });

  const linkElements = document.querySelectorAll(
    'link[rel="stylesheet"], link[rel="preload"], link[rel="shortcut icon"]'
  );
  linkElements.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("#")) {
      link.setAttribute("href", domain + href);
    }
  });
});
