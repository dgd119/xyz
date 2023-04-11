---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact
  order: 3
---
# Contact

<form class="form" name="contact" action="/success" method="POST" data-netlify="true">
  <div class="form__section">
    <label class="form__label" for="yourName">Name</label>
    <input class="form__input" name="name" type="text" id="yourName" required="true">
  </div>
  <div class="form__section">
    <label class="form__label" for="yourEmail">Email</label>
    <input class="form__input" name="email" type="email"  id="yourEmail" required="true">
  </div>
  <div class="form__section">
    <label class="form__label" for="message">Message</label>
    <textarea class="form__input" name="message" id="message" rows="4" required="true"></textarea>
  </div>
    <button class="form__button" type="submit">Let's talk</button>
</form>
