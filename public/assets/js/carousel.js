document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(async (carousel) => {
    const folder = carousel.dataset.folder;
    console.log(folder);

    const basePath = `/assets/carousel/${folder}/`;

    const totalImages = 7; // Adjust based on max expected images
    let images = [];
    let autoPlayInterval;

    //support for jpg images only
    for (let i = 1; i <= totalImages; i++) {
      const url = `${basePath}img${i}.jpg`;
      const exists = await imageExists(url);
      if (exists) images.push(url);

      // Uncomment the following block if you want to support multiple image formats
      // const extensions = ["jpg", "jpeg", "png", "webp"];
      // for (let i = 1; i <= totalImages; i++) {
      //   for (let ext of extensions) {
      //     const url = `${basePath}img${i}.${ext}`;
      //     const exists = await imageExists(url);
      //     if (exists) {
      //       images.push(url);
      //       break;
      //     }
      //   }
      // }
    }
    if (images.length === 0) return;

    // Add images to DOM
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("carousel-image");
      if (index === 0) img.classList.add("active");
      carousel.appendChild(img);
    });

    // Add carousel controls
    const controls = document.createElement("div");
    controls.className = "carousel-controls";

    const prev = document.createElement("button");
    const prevIcon = document.createElement("img");
    prevIcon.src = "/assets/icons/back.png"; 
    prevIcon.width = 24;
    prevIcon.height = 24;
    prev.appendChild(prevIcon);

    const next = document.createElement("button");
    const nextIcon = document.createElement("img");
    nextIcon.src = "/assets/icons/next.png";
    nextIcon.width = 24;
    nextIcon.height = 24;
    next.appendChild(nextIcon);

    controls.appendChild(prev);
    controls.appendChild(next);
    carousel.appendChild(controls);

    const imgEls = carousel.querySelectorAll("img.carousel-image");
    let current = 0;

    function show(index) {
      imgEls.forEach((img, i) => img.classList.toggle("active", i === index));
    }

    prev.onclick = () => {
      current = (current - 1 + imgEls.length) % imgEls.length;
      show(current);
    };

    next.onclick = () => {
      current = (current + 1) % imgEls.length;
      show(current);
    };

    // Start auto-advancing every 2 seconds
    autoPlayInterval = setInterval(() => {
      next.click();
    }, 3000);
  });
});

function imageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}
