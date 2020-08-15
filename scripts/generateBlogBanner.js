const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const YAML = require("yaml");
const glob = require("glob");

// Takes the screenshot in headless mode (default is true)
const takeScreenshot = async (url, destination) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.setViewport({ width: 1200, height: 630 });
  await page.screenshot({
    path: destination,
    type: "png",
    clip: {
      x: 0,
      y: 0,
      width: 1200,
      height: 630,
    },
  });

  await browser.close();
};

const getArticleFiles = () => {
  return glob.sync(path.join(process.cwd(), "content", "blog", "**", "*.md"));
};

const parseFiles = async file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, content) => {
      if (err) return err;

      const frontmatter = content.split("---")[1];
      const data = YAML.parse(frontmatter);

      return resolve({
        ...data,
        file,
        directory: path.dirname(file),
      });
    });
  });
};

const baseUrl = `http://localhost:8000`;

const main = async () => {
  const files = await Promise.all(getArticleFiles().map(parseFiles));

  files.forEach(async file => {
    const destinationFile = path.join(file.directory, "banner.png");
    const slug = await file.directory.split("/").splice(-2, 2).join("/");

    if (!fs.existsSync(destinationFile)) {
      await takeScreenshot(`${baseUrl}/${slug}/og_image`, destinationFile);
      console.log(`Created ${destinationFile}`);
    }
  });
};

main();
