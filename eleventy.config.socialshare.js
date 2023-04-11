const Image = require("@11ty/eleventy-img");
const path = require("path");


async function shareImageShortcode(src) {
  // src might be small.png - taken from frontmatter
  const { url } = this.page;
  // url might be /blog/hello-world/
  const imageSrc = "./content/blog/" + src;
	// const imageSrc = "./blog/fourthpost/IMG_6055.png"
  let metadata = await Image(imageSrc, {
    widths: [600],
    formats: ["jpeg"],
    urlPath: "/content/blog/",
    //outputDir: "./content/blog/",
		outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
  });

  const data = metadata.jpeg[0];
  // data.url might be /blog/hello-world/xfO_genLg4-600.jpeg
  // note the filename is a content hash-width combination
	console.log("here is the data url");
	console.log(data.url);
  return data.url;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode(
    "shareImageUri",
    shareImageShortcode
  );

  return {
    markdownTemplateEngine: "njk",
  };
};
