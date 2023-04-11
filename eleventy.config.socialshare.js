const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

async function shareImageShortcode(src) {
  // src might be small.png - taken from frontmatter
  const { url } = this.page;
  // url might be /blog/hello-world/
  const imageSrc = "." + url + src;
	//const imageSrc = "./blog/fourthpost/IMG_6055.png"
  let metadata = await Image(imageSrc, {
    widths: [600],
    formats: ["jpeg"],
    urlPath: url,
		outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
    //outputDir: `./_site/${url}`,
  });

  const data = metadata.jpeg[0];
  // data.url might be /blog/hello-world/xfO_genLg4-600.jpeg
  // note the filename is a content hash-width combination
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
