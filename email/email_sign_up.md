---
layout: layouts/base.njk
eleventyNavigation:
  key: email sign up
  order: 3
---
# Contact

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
