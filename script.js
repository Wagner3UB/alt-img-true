const haveImgAlt = document.querySelectorAll("img");

haveImgAlt.forEach(img => {
  console.log(img.hasAttribute("alt"));
});

// Go and check the browser console
