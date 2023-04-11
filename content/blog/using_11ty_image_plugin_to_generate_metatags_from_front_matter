---
title: Using 11ty image plugibn to generate metatags from front matter
description: how to generate open graph image metatags for 11ty base blog using the 11ty image plugin
date: 2018-04-11
postimage: "./IMG_6252.JPG" 
tags:
  - second 11ty
 
---
The 11ty base blog comes with the image plugin up and running as described a [previous post](https://davidevans.xyz/blog/images_in_the_11ty_base_blog/).  With a few
hacks you can use it to generate metatags.  I wanted to do this in order to generate social share previews in mastadon.  I'm sure there are other reasons why it might be useful too.  Here's what you need to do.

## Add some frontmatter to the blog post
```js
---
postimage: "this.png"
---
```

## tweak the code in the existing eleventy.config.images.js file to create a new shortcode.  

The new shortcode wil take an image as input and generate a new image like the exisitng code.  But it will return different info so it needs tweaking slightly.  Here's what I ended up with


```js
const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image2", async function imageShortcode(src) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let formats = ["jpeg"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let metadata = await eleventyImage(file, {
			widths: [600],
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		});
			const data = metadata.jpeg[0];

		
		 return data.url;
	});
};
```

## check for front matter in the base.njk template and use the shortcode if a postimage exists.


```
{% if postimage %}
    <meta property="og:image" content="{% image2 postimage %}" />
  {% endif %}
```

]That's all there is to it. Big thanks to [TJAddison](https://tjaddison.com/blog/2022/08/processing-images-linked-from-frontmatter-with-eleventy-img-to-use-in-meta-tags/) for pointing me in the right direction.  It would have taken me even longer if I'd not found this helpful post..
