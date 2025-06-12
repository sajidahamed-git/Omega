import * as pdfjsLib from '/assets/js/pdf/pdfjs-dist/build/pdf.mjs';

// Correct way to set the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/pdf/pdfjs-dist/build/pdf.worker.mjs';

// Correct path to PDF file
const url = 'assets/downloaded/dummy.pdf';

const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

pdfjsLib.getDocument(url).promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    page.render(renderContext);
  });
});
