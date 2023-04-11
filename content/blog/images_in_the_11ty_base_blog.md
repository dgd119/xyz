---
title: images in the eleventy base blog
description: a simple way to work with images in the 11ty base blog
date: 2023-04-11
shareimage: "https://res.cloudinary.com/duso4dmpb/image/upload/c_thumb,w_200,g_face/v1681126644/IMG_6055_q2dimd.png"
shareimage2: "IMG_6232.JPG"
tags:
  - 11ty
---

As far as I can tell the eleventy base blog looks great across most devices.  Even the [post with the image of the possum](https://eleventy-base-blog.netlify.app/blog/fourthpost/).

The base blog image is 350px so my first thought was simply to resize my images to this width and all would be fine.  The [11ty image plugin](https://www.11ty.dev/docs/plugins/image/) comes as a working feature of the base blog, so this resizing is fairly easy to do.

The possum post has this code to display the possum image.

```diff-js
{% raw %} {% image "./possum.png", "A possum parent and two possum kids hanging from the iconic red balloon" %} {% endraw %}
```
This calls the image shortcode which generates a possum image and returns the html code to display it.  The image shortcode will accept a width, but as the possum image is already a good size there is no need to pass a width and the shortcode defaults to creating an image of the orginal width.  This works nicely for the possum image!

If you image is larger you will need to pass a width.  To create a 350px width image from a larger image for example you could use the following:

```diff-js
{% raw %} {% image "./purpleFlowers.png", "some purple flowers", [350] %} {% endraw %}
```

But it turns out 350px is not the ideal image width for the base blog.  It works well for the possum image because it has a transparent background and looks ok off-centre.  But a regular 350px image will be off centre and look small on most devices.  Instead I created an 800px image.

```diff-js
{% raw %} {% image "./purpleFlowers.png", "some purple flowers", [800] %} {% endraw %}
``````
This will be too big on some devices so I set a max width in the css.

```diff-js
img {
  max-width: 100%;
  height: auto;
}
``````
Here is the image:

{% image "IMG_6232.JPG", "some purple flowers", [800] %}

This seems to be working ok so far for my modest image requirements.
