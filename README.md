# Caylò's Fried Chicken – website

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
| Colours and layout | `assets/css/style.css` (colours are at the top) |
| Logo and favicon | `assets/img/` (`logo.png` is used on the site; `logo-3color.svg/.png` are the 3-colour version from the .ai file) |

**Add a restaurant:** in `data.js`, copy one `{ ... }` block in `RESTAURANTS` and change name, city, address, phone and hours.

**Add a menu category:** copy a whole category block in `MENU`. Its `icon` is the emoji shown in the menu sidebar.

**Add a menu item:** in `data.js`, copy one item in the right `MENU` category. Write `name` and `desc` in both `no` and `en`. Add `featured: true` to also show it on the home page. Add `image: "assets/img/menu/yourphoto.webp"` to use a photo instead of the emoji. Menu photos are stored as WebP, 960×600 px (16:10), around 30–50 KB each.

The example restaurants, prices, addresses and contact details are placeholders – replace them with your real ones.

## Forms
The contact, job and franchise forms open the visitor's email app with the message filled in, sent to the addresses in `COMPANY` in `data.js`. No server needed.

## Hosting (GitHub Pages)
The site is live at **https://jawsdan.github.io/caylos/**.

GitHub Pages is set to *Deploy from a branch* (Settings → Pages). Every push to the chosen branch republishes the site within a minute or two. After merging into `main`, switch the branch there to `main` / `(root)`.

## After changing a file
Each page loads the CSS and JS files with a version tag, like `style.css?v=3`. When you change `style.css`, `data.js`, `i18n.js` or `main.js`, raise that number in all the `.html` files (for example to `?v=4`). Visitors' browsers then fetch the new files straight away instead of showing an old copy.
