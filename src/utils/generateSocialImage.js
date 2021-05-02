export const generateOgImage = ({
  title,
  cloudName = process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
  imagePublicID = "Wirescript/Banner_Preview_New_nhapv2",
  cloudinaryUrlBase = "https://res.cloudinary.com",
  version = null,
  titleFont = "raleway",
  titleFontWeight = "bold",
  titleExtraConfig = "",
  imageWidth = 1280,
  imageHeight = 669,
  textAreaWidth = 700,
  textLeftOffset = 120,
  titleBottomOffset = 250,
  textColor = "ffffff",
  titleFontSize = 48,
}) => {
  // Ref: https://support.cloudinary.com/hc/en-us/community/posts/200788162-Using-special-characters-in-Text-overlaying-
  const ignoredPunctuations = [","];

  ignoredPunctuations.forEach(item => {
    if (title.includes(item)) {
      title = title.replace(item, encodeURIComponent(item));
    }
  });

  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    "c_fill", // Creates an asset with the exact specified width and height without distorting the asset
    "q_auto", // Delivers an asset with an automatically determined level of quality
    "f_auto", // Must be used for automatic format selection
  ].join(",");

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    "c_fit", // scales asset up/down to fit within the allocated space
    `co_rgb:${textColor}`,
    "g_south_west",
    `x_${textLeftOffset}`,
    `y_${titleBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}_${titleFontWeight}_${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    version,
    imagePublicID,
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
};
