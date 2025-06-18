const fs = require("fs");
const path = require("path");

const carouselPath = path.join(__dirname, "/assets/carousel");
const validExtensions = /\.(jpg|jpeg|png|webp)$/i;

fs.readdir(carouselPath, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error("Error reading carousel directory:", err);
    return;
  }

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const folderName = entry.name;
      const folderPath = path.join(carouselPath, folderName);

      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(`Error reading folder ${folderName}:`, err);
          return;
        }

        const imageFiles = files.filter(file => validExtensions.test(file));
        const jsonPath = path.join(folderPath, "images.json");

        fs.writeFile(jsonPath, JSON.stringify(imageFiles, null, 2), (err) => {
          if (err) {
            console.error(`Error writing images.json for ${folderName}:`, err);
          } else {
            console.log(`✅ Created images.json in ${folderName} with ${imageFiles.length} images.`);
          }
        });
      });
    }
  });
});
