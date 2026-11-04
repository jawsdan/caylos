# Caylos' Fried Chicken – website

A simple website with no build step. Open `index.html` in a browser, or upload the whole folder to any web host (GitHub Pages, Netlify, one.com, etc.).

## Pages
- **Home** – `index.html`
- **Restaurants** – `restaurants.html` (search, filter by city, opening hours, "open now")
- **Menu** – `menu.html`
- **More** – `about.html`, `jobs.html`, `contact.html`, `franchise.html`

Language: the **NO / EN** button in the top bar switches between Norwegian and English. The choice is remembered.

## How to edit content

| What | File |
|---|---|
| Restaurants, menu, open jobs, email/phone/address | `assets/js/data.js` |
| All other text (headings, buttons, page text) in Norwegian and English | `assets/js/i18n.js` |
| Colours and layout | `assets/css/style.css` |

**Add a restaurant:** in `data.js`, copy one `{ ... }` block in `RESTAURANTS` and change name, city, address, phone and hours.

**Add a menu item:** in `data.js`, copy one item in the right `MENU` category. Write `name` and `desc` in both `no` and `en`. Add `featured: true` to also show it on the home page. Add `image: "assets/img/yourphoto.jpg"` to use a photo instead of the emoji.

The example restaurants, prices, addresses and contact details are placeholders – replace them with your real ones.

## Forms
The contact, job and franchise forms open the visitor's email app with the message filled in, sent to the addresses in `COMPANY` in `data.js`. No server needed.

## Hosting (GitHub Pages)
The site is published automatically to **https://jawsdan.github.io/caylos/** every time `main` is updated (see `.github/workflows/pages.yml`).

One-time setup: on GitHub go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
