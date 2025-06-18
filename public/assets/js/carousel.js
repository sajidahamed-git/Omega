document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(async (carousel) => {
    const folder = carousel.dataset.folder;
    const images = await loadImages(folder);

    if (images.length === 0) return;

    const imgElements = images.map((src, index) =>
      createCarouselImage(src, index === 0)
    );

    imgElements.forEach((img) => carousel.appendChild(img));

    const { prevBtn, nextBtn } = createCarouselControls(carousel);
    const total = imgElements.length;
    let current = 0;

    function show(index) {
      imgElements.forEach((img, i) =>
        img.classList.toggle("active", i === index)
      );
    }

    prevBtn.onclick = () => {
      current = (current - 1 + total) % total;
      show(current);
    };

    nextBtn.onclick = () => {
      current = (current + 1) % total;
      show(current);
    };

    setInterval(() => nextBtn.click(), 3000);
  });
});

async function loadImages(folder) {
  const manifestUrl = `/assets/carousel/${folder}/images.json`;
  // const images = [];

  try {
    const res = await fetch(manifestUrl);
    const filenames = await res.json();
    return filenames.map((name) => `/assets/carousel/${folder}/${name}`);
  } catch (err) {
    console.error("Could not load image list:", err);
    return [];
  }
}

function createCarouselImage(src, isActive = false) {
  const img = document.createElement("img");
  img.src = src;
  img.className = "carousel-image";
  if (isActive) img.classList.add("active");
  return img;
}

function createCarouselControls(carousel) {
  const controls = document.createElement("div");
  controls.className = "carousel-controls";

  const prev = createIconButton("/assets/icons/back.png");
  const next = createIconButton("/assets/icons/next.png");

  controls.appendChild(prev);
  controls.appendChild(next);
  carousel.appendChild(controls);

  return { prevBtn: prev, nextBtn: next };
}

function createIconButton(iconSrc) {
  const btn = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = iconSrc;
  icon.width = 24;
  icon.height = 24;
  btn.appendChild(icon);
  return btn;
}

function imageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}
