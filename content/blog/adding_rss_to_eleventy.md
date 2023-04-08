---
title: Adding rss feed to eleventy base blog
description: about not needing to do much to make this happen.
date: 2023-04-08
tags:
  - rss
  - eleventy
---

A blog with an RSS feed is coming back into web fashion it seems.  So I'm prepping for the future.  I'm using the eleventy base blog because it is quick and clean and easy to deploy via github to netlify.  I wasn't how to set up an RSS feed.  Took me about an hour to figure out that it all already sorted and there is nothing to be done.

The eleventy base blog already comes with two feeds set up.  You will find them at content/feed/feed.xml and content/feed/feed.json.  The only slightly tricky bit is out finding the urls for the feeds are.  They are defined in the feed.xml and feed.json files and they [site.com]feed/feed.xml and [site.com]feed/feed.json.  Once you have this figured out there is nothing else required!
