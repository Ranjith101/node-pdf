// const express = require("express");
// const puppeteer = require("puppeteer");
// const cors = require("cors");
// const pdf = require("html-pdf");

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(cors());
// // Serve static files from the 'images' directory
// app.use(express.static("images"));

// app.post("/screenshot", async (req, res) => {
//   const url = req.body.url;

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the URL and wait for 4 minutes (240,000 milliseconds)
//   await page.goto(url, { waitUntil: "load" });
//   // await page.waitForTimeout(4 * 60 * 1000); // 5 minutes
//   // Set the viewport height to a very large value
//   await page.setViewport({ width: 1200, height: 12000 });
//   await autoScroll(page);
//   // Capture a screenshot of the entire page
//   const screenshotPath = `screenshot.png`; // You can customize the file path and name
//   const getInnerHTMLProperty = await page.evaluate(
//     () => document.documentElement.innerHTML
//   );
//   await page.screenshot({ path: screenshotPath, fullPage: true });
//   // const pdfPath = `page.pdf`;
//   // await page.pdf({ pageRanges:'1-8', format: 'A4',margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },printBackground: true,scale:1  });
//   var options = {
//     margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
//     printBackground: true,
//     format: "A3",
//     scale: 2,
//   };
//   const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
//   let cleanHtml = getInnerHTMLProperty;
//   while (SCRIPT_REGEX.test(cleanHtml)) {
//     cleanHtml = cleanHtml.replace(SCRIPT_REGEX, "");
//   }

//   pdf
//     .create(cleanHtml, options)
//     .toFile("./performance-report.pdf", function (err, pdfRes) {
//       if (err) return console.log(err);
//       console.log(pdfRes);
//       res.setHeader("Content-Type", "application/pdf");
//       res.json({ path: screenshotPath, pdfPath: pdfRes.filename });
//     });

//   await browser.close();
//   console.log("browser closed");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Function to scroll to the bottom of the page
// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve, reject) => {
//       let totalHeight = 0;
//       const distance = 100; // Adjust as needed
//       const interval = 100; // Adjust as needed
//       const timer = setInterval(() => {
//         const scrollHeight = document.body.scrollHeight;
//         window.scrollBy(0, distance);
//         totalHeight += distance;
//         if (totalHeight >= scrollHeight) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, interval);
//     });
//   });
// }

// const express = require('express');
// const puppeteer = require('puppeteer');
// const cors = require('cors');
// const pdf = require("html-pdf");
// const app = express();
// const port = 3000; // You can use any port you prefer

// app.use(cors());
// app.use(express.json());

// // app.post('/generate-pdf', async (req, res) => {
// //   try {
// //     const { VesselId, enginedetailid, engineperformanceid } = req.body;

// //     // Construct the Angular route with the query parameters
// //     const url = `http://localhost:4200/#/PerformanceReportScreenshot?VesselId=${VesselId}&enginedetailid=${enginedetailid}&engineperformanceid=${engineperformanceid}`;

// //     // Launch a headless Chromium browser
// //     const browser = await puppeteer.launch();
// //     const page = await browser.newPage();

// //     // Navigate to the Angular route and wait for the page to load
// //     await page.goto(url, { waitUntil: 'networkidle2' });

// //     // Generate a PDF of the page
// //     var options = {
// //       margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
// //       printBackground: true,
// //       format: "A3",
// //       scale: 2,
// //     };
// //     const getInnerHTMLProperty = await page.evaluate(
// //       () => document.documentElement.innerHTML
// //     );
// //     const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
// //     let cleanHtml = getInnerHTMLProperty;
// //     while (SCRIPT_REGEX.test(cleanHtml)) {
// //       cleanHtml = cleanHtml.replace(SCRIPT_REGEX, "");
// //     }

// //     pdf.create(cleanHtml, options).toFile("./performance-report.pdf", function (err, pdfRes) {
// //       if (err) {
// //         console.error(err);
// //         res.status(500).send('An error occurred while generating the PDF.');
// //       } else {
// //         // Send the generated PDF path as a response
// //         res.json({ pdfPath: pdfRes.filename });
// //       }
// //       // Close the browser
// //       browser.close();
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('An error occurred while generating the PDF.');
// //   }
// // });

// app.post('/generate-pdf', async (req, res) => {
//   try {
//     const { VesselId, enginedetailid, engineperformanceid } = req.body;

//     // Construct the Angular route with the query parameters
//     const url = `http://localhost:4200/#/PerformanceReportScreenshot?VesselId=${VesselId}&enginedetailid=${enginedetailid}&engineperformanceid=${engineperformanceid}`;

//     // Launch a headless Chromium browser
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Navigate to the Angular route and wait for the page to load
//     await page.goto(url, { waitUntil: 'networkidle2' });

//     // Generate a PDF of the page
//     var options = {
//       margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
//       printBackground: true,
//       format: "A3",
//       scale: 2,
//     };
//     const getInnerHTMLProperty = await page.evaluate(
//       () => document.documentElement.innerHTML
//     );
//     const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
//     let cleanHtml = getInnerHTMLProperty;
//     while (SCRIPT_REGEX.test(cleanHtml)) {
//       cleanHtml = cleanHtml.replace(SCRIPT_REGEX, "");
//     }

//     pdf.create(cleanHtml, options).toFile("./performance-report.pdf", function (err, pdfRes) {
//       if (err) {
//         console.error(err);
//         res.status(500).send('An error occurred while generating the PDF.');
//       } else {
//         // Introduce a delay of 2 seconds before sending the response
//         setTimeout(() => {
//           // Send the generated PDF path as a response
//           res.json({ pdfPath: pdfRes.filename });
//           // Close the browser
//           browser.close();
//         }, 2 * 60 * 1000); // 2000 milliseconds (2 seconds) delay
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while generating the PDF.');
//   }
// });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const pdf = require("html-pdf");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// Serve static files from the 'images' directory
app.use(express.static("images"));

app.post("/generate-pdf", async (req, res) => {
  // const url = req.body.url;
  const { VesselId, enginedetailid, engineperformanceid } = req.body;
  const url = `http://localhost:4200/#/PerformanceReportScreenshot?VesselId=${VesselId}&enginedetailid=${enginedetailid}&engineperformanceid=${engineperformanceid}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.waitForSelector("body", { visible: true });
  // Navigate to the URL and wait for 4 minutes (240,000 milliseconds)
  await page.goto(url, { waitUntil: "load" });
  // await page.waitForTimeout(4 * 60 * 1000); // 5 minutes
  // Set the viewport height to a very large value
  await page.setViewport({ width: 1200, height: 12000 });
  await autoScroll(page);
  // Capture a screenshot of the entire page
  const screenshotPath = `screenshot.png`; // You can customize the file path and name
  const getInnerHTMLProperty = await page.evaluate(
    () => document.documentElement.innerHTML
  );
  console.log(getInnerHTMLProperty)
  await page.screenshot({ path: screenshotPath, fullPage: true });
  // const pdfPath = `page.pdf`;
  // await page.pdf({ pageRanges:'1-8', format: 'A4',margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },printBackground: true,scale:1  });
  var options = {
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A3",
    scale: 2,
  };
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  let cleanHtml = getInnerHTMLProperty;
  while (SCRIPT_REGEX.test(cleanHtml)) {
    cleanHtml = cleanHtml.replace(SCRIPT_REGEX, "");
  }

  pdf
    .create(cleanHtml, options)
    .toFile("./performance-report.pdf", function (err, pdfRes) {
      if (err) return console.log(err);
      console.log(pdfRes);
      res.setHeader("Content-Type", "application/pdf");
      res.json({ path: screenshotPath, pdfPath: pdfRes.filename });
    });

  await browser.close();
  console.log("browser closed");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to scroll to the bottom of the page
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100; // Adjust as needed
      const interval = 100; // Adjust as needed
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, interval);
    });
  });
}
