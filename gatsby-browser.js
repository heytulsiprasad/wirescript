require("./src/styles/global.css");
require("prismjs/themes/prism.css");

exports.shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  getSavedScrollPosition,
}) => {
  const state = routerProps.location.state;

  if (state && state.yPos) {
    console.log("🔫🔫🔫");
    window.scrollTo(0, state.yPos);
  }

  return false;
};
