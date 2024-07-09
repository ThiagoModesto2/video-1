document.addEventListener("DOMContentLoaded", function () {
  const domain = "https://store-ml.vercel.app/";

  // Processando os links <a>
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("#")) {
      link.setAttribute("href", domain + href);
    }
  });

  // Processando as imagens <img>
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !src.startsWith("http")) {
      img.setAttribute("src", domain + src);
    }
  });

  // Processando os links <link>
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

window.onload = function () {
  var links = document.getElementsByTagName("a");
  var queryParams = document.location.search.replace("?", "").toString();
  for (var i = 0, n = links.length; i < n; i++) {
    var href = links[i].href.trim();
    if (href && !href.startsWith("javascript")) {
      href += (href.indexOf("?") > 0 ? "&" : "?") + queryParams;
      links[i].href = href;
    }
  }
};
