import getShareImage from "@jlengstorf/get-share-image";

const socialImage = getShareImage({
  title: "Deploy a Node.js App to DigitalOcean with SSL",
  tagline: "#devops #nodejs #ssl",
  cloudName: "jlengstorf",
  imagePublicID: "lwj/blog-post-card",
  titleFont: "futura",
  taglineFont: "futura",
  textColor: "232129",
});

export default socialImage;
