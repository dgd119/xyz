---
layout: layouts/base.njk
eleventyNavigation:
  key: Email Sign Up
  order: 3
---
# Email Sign Up

sign up for regular indie web emails

<form
  action="
    https://buttondown.email/api/emails/embed-subscribe/devansxyz
  "
  method="post"
  target="popupwindow"
  class="embeddable-buttondown-form"
>
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    placeholder="you@example.com"
  />
  <input type="hidden" value="1" name="embed" />
  <input type="submit" value="Subscribe" />
  <p>
    <a href="https://buttondown.email" target="_blank">
        Powered by Buttondown.
    </a>
  </p>
</form>
