/* =====================================================================
   CAYLÒ'S ORIGINAL FRIED CHICKEN — SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change:
     • company contact details
     • restaurants
     • the menu (and allergens)
     • open jobs

   Every text that is shown to visitors has a Norwegian ("no") and an
   English ("en") version. Fill in both.
   ===================================================================== */

/* ---------- Company details (footer, contact page) ---------- */
const COMPANY = {
  email: "caylos@caylos.no",
  franchiseEmail: "caylos@caylos.no",
  jobsEmail: "caylos@caylos.no",
  phone: "+47 411 96 000",
  address: "Griffenfeldsgate 3, 3045 Drammen",
  orgNumber: "", // add the organisation number here to show it in the footer
  orderUrl: "https://caylosdrammen.agiorder.no/", // "Order now" button on the home page
  socials: {
    instagram: "https://www.instagram.com/caylos.official/",
  },
};

/* ---------- Restaurants ----------
   Copy one { ... } block to add a new restaurant.

   orderUrl: link to online ordering for that restaurant (optional)
   hours: one line per weekday, Monday first.
          ["11:00", "22:00"] = open 11–22
          null               = closed that day
          close after midnight? write e.g. ["12:00", "02:00"]
          leave it as [] to hide opening hours and "open now"
   comingSoon: true  → shows "Opening soon" instead of hours
   features: any of "dinein", "takeaway", "delivery", "drivethru"
   ---------------------------------------------------------------- */
const RESTAURANTS = [
  {
    name: "Caylò's Drammen",
    city: "Drammen",
    address: "Griffenfeldsgate 3, 3045 Drammen",
    phone: "+47 411 96 000",
    orderUrl: "https://caylosdrammen.agiorder.no/",
    features: ["dinein", "takeaway", "delivery"],
    hours: [], // TODO: add real opening hours
  },
];

/* ---------- Allergens ----------
   The 14 allergens Norwegian law requires restaurants to label.
   Used by the allergy filter on the menu page.
   -------------------------------- */
const ALLERGENS = [
  { id: "gluten", no: "Gluten", en: "Gluten" },
  { id: "crustaceans", no: "Skalldyr", en: "Crustaceans" },
  { id: "egg", no: "Egg", en: "Egg" },
  { id: "fish", no: "Fisk", en: "Fish" },
  { id: "peanuts", no: "Peanøtter", en: "Peanuts" },
  { id: "soy", no: "Soya", en: "Soy" },
  { id: "milk", no: "Melk", en: "Milk" },
  { id: "nuts", no: "Nøtter", en: "Tree nuts" },
  { id: "celery", no: "Selleri", en: "Celery" },
  { id: "mustard", no: "Sennep", en: "Mustard" },
  { id: "sesame", no: "Sesam", en: "Sesame" },
  { id: "sulphites", no: "Sulfitt", en: "Sulphites" },
  { id: "lupin", no: "Lupin", en: "Lupin" },
  { id: "molluscs", no: "Bløtdyr", en: "Molluscs" },
];

/* ---------- Allergen codes ----------
   The short codes printed after each dish, like on the old menu:
   "(H, E, M)". Each code points to one of the allergens above.
   A code set to null is unknown: dishes with it are hidden whenever
   any allergy is ticked.
   -------------------------------- */
const ALLERGEN_CODES = {
  H: "gluten", // hvete (wheat)
  E: "egg",
  M: "milk",
  SP: "mustard", // sennep
  N: "nuts",
  S: "soy",
  SS: "sulphites", // svoveldioksid og sulfitter
  I: "celery", // selleri
};

/* ---------- Menu ----------
   Each category has a list of items. The sidebar picture is the first
   dish with a photo; add image: "..." to a category to choose another,
   or it falls back to the category icon (emoji).

   price:     number in NOK (kr)   !! prices are PLACEHOLDERS
   priceFrom: true → shows "fra 69 kr" (for dishes with several sizes)
   allergens: codes from ALLERGEN_CODES, e.g. ["H", "E", "M"]
              []      = contains none of the 14 allergens
              leave it out if unknown → "ask our staff", and the dish is
              hidden whenever any allergy is ticked
   tags:      any of "spicy", "new", "veg"
   image:     photo, e.g. "assets/img/menu/classic-burger.webp"
   emoji:     stand-in picture until there is a photo
   featured:  true → also shown on the home page
   -------------------------------- */
const MENU = [
  {
    id: "fried-chicken",
    icon: "🍗",
    name: { no: "Fritert kylling", en: "Fried Chicken" },
    desc: { no: "Sprø, saftig og stekt fersk hver dag.", en: "Crispy, juicy and freshly fried every day." },
    items: [
      {
        name: { no: "Sprø kyllingstrimler", en: "Crispy Tenders" },
        desc: { no: "Velg 3, 6, 10 eller 15 stk.", en: "Choose 3, 6, 10 or 15 pcs." },
        price: 69,
        priceFrom: true,
        allergens: ["H"],
        emoji: "🍗",
      },
      {
        name: { no: "Vinger", en: "Wings" },
        desc: { no: "Velg 6, 10, 15 eller 30 stk.", en: "Choose 6, 10, 15 or 30 pcs." },
        price: 79,
        priceFrom: true,
        allergens: ["H"],
        emoji: "🍗",
      },
      {
        name: { no: "Overlår", en: "Thighs" },
        desc: { no: "Velg 2, 3 eller 5 stk.", en: "Choose 2, 3 or 5 pcs." },
        price: 69,
        priceFrom: true,
        allergens: ["H"],
        emoji: "🍗",
      },
      {
        name: { no: "Klubber", en: "Clubs" },
        desc: { no: "Velg 2, 3 eller 5 stk.", en: "Choose 2, 3 or 5 pcs." },
        price: 59,
        priceFrom: true,
        allergens: ["H"],
        emoji: "🍗",
      },
    ],
  },
  {
    id: "burgers",
    icon: "🍔",
    name: { no: "Burgere", en: "Burgers" },
    desc: { no: "Burgere og baguetter med sprø kyllingfilet.", en: "Burgers and subs with a crispy chicken fillet." },
    items: [
      {
        name: { no: "Spiced Up", en: "Spiced Up" },
        desc: { no: "Kyllingfilet, salat, rødløk, jalapeños, chilimajones og cheddar.", en: "Chicken fillet, lettuce, red onion, jalapeños, chilli mayo and cheddar." },
        price: 159,
        image: "assets/img/menu/jalapeno-burger.webp",
        tags: ["spicy"],
        featured: true,
      },
      {
        name: { no: "El Dorado", en: "El Dorado" },
        desc: { no: "Kyllingfilet, coleslaw, rødløk, golden honey og cheddar.", en: "Chicken fillet, coleslaw, red onion, golden honey and cheddar." },
        price: 159,
        allergens: ["H", "E", "M", "SP"],
        image: "assets/img/menu/coleslaw-burger.webp",
        featured: true,
      },
      {
        name: { no: "Salsa Chick", en: "Salsa Chick" },
        desc: { no: "Kyllingfilet, salat, tomat, salsa, rømmedressing og nachos.", en: "Chicken fillet, lettuce, tomato, salsa, sour cream dressing and nachos." },
        price: 159,
        allergens: ["H", "M"],
        image: "assets/img/menu/nacho-burger.webp",
        featured: true,
      },
      {
        name: { no: "Cay's Classic", en: "Cay's Classic" },
        desc: { no: "Kyllingfilet, salat, tomat, ost og majones.", en: "Chicken fillet, lettuce, tomato, cheese and mayo." },
        price: 149,
        allergens: ["H", "E", "M"],
        image: "assets/img/menu/classic-burger.webp",
        featured: true,
      },
      {
        name: { no: "Halloumi Sub", en: "Halloumi Sub" },
        desc: { no: "Grillet halloumi, salat, tomat, chilimajones og syltet rødløk.", en: "Grilled halloumi, lettuce, tomato, chilli mayo and pickled red onion." },
        price: 159,
        allergens: ["H", "M", "E", "SS"],
        image: "assets/img/menu/halloumi-sub.webp",
        tags: ["veg"],
      },
      {
        name: { no: "Mozzarella Sub", en: "Mozzarella Sub" },
        desc: { no: "Mozzarella, pesto, tomat og ruccola.", en: "Mozzarella, pesto, tomato and rocket." },
        price: 149,
        allergens: ["H", "E", "N"],
        image: "assets/img/menu/caprese-sub.webp",
        tags: ["veg"],
      },
      {
        name: { no: "Cay's Sub", en: "Cay's Sub" },
        desc: { no: "Kyllingfilet, salat, tomat, majones og cheddar.", en: "Chicken fillet, lettuce, tomato, mayo and cheddar." },
        price: 159,
        allergens: ["H", "E", "M"],
        image: "assets/img/menu/chicken-sub.webp",
        featured: true,
      },
      {
        name: { no: "Chicken BBQ", en: "Chicken BBQ" },
        desc: { no: "Kyllingfilet, salat, BBQ-saus, pickles og rødløk.", en: "Chicken fillet, lettuce, BBQ sauce, pickles and red onion." },
        price: 159,
        allergens: ["H", "SP", "S", "I", "SS"],
        image: "assets/img/menu/bbq-onion-burger.webp",
      },
    ],
  },
  {
    id: "burger-meals",
    icon: "🍽️",
    name: { no: "Burgermenyer", en: "Burger Meals" },
    desc: { no: "Alle menyer kommer med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Every meal comes with fries, a 0.5 l soft drink and 2 chicken pieces." },
    items: [
      {
        name: { no: "Spiced Up meny", en: "Spiced Up Meal" },
        desc: { no: "Spiced Up med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Spiced Up with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        image: "assets/img/menu/jalapeno-burger-meal.webp",
      },
      {
        name: { no: "El Dorado meny", en: "El Dorado Meal" },
        desc: { no: "El Dorado med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "El Dorado with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        allergens: ["H", "E", "M", "SP"],
        image: "assets/img/menu/coleslaw-burger-meal.webp",
      },
      {
        name: { no: "Salsa Chick meny", en: "Salsa Chick Meal" },
        desc: { no: "Salsa Chick med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Salsa Chick with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        allergens: ["H", "M"],
        image: "assets/img/menu/nacho-burger-meal.webp",
      },
      {
        name: { no: "Cay's Classic meny", en: "Cay's Classic Meal" },
        desc: { no: "Cay's Classic med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Cay's Classic with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 219,
        allergens: ["H", "E", "M"],
        image: "assets/img/menu/classic-burger-meal.webp",
      },
      {
        name: { no: "Halloumi Sub meny", en: "Halloumi Sub Meal" },
        desc: { no: "Halloumi Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Halloumi Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        allergens: ["H", "M", "E", "SS"],
        image: "assets/img/menu/halloumi-sub-meal.webp",
      },
      {
        name: { no: "Mozzarella Sub meny", en: "Mozzarella Sub Meal" },
        desc: { no: "Mozzarella Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Mozzarella Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 219,
        allergens: ["H", "E", "N"],
        image: "assets/img/menu/caprese-sub-meal.webp",
      },
      {
        name: { no: "Cay's Sub meny", en: "Cay's Sub Meal" },
        desc: { no: "Cay's Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Cay's Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        allergens: ["H", "E", "M"],
        image: "assets/img/menu/chicken-sub-meal.webp",
      },
      {
        name: { no: "Chicken BBQ meny", en: "Chicken BBQ Meal" },
        desc: { no: "Chicken BBQ med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Chicken BBQ with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 229,
        allergens: ["H", "SP", "S", "I", "SS"],
        image: "assets/img/menu/bbq-onion-burger-meal.webp",
      },
    ],
  },
  {
    id: "chicken-meals",
    icon: "🪣",
    name: { no: "Kyllingmenyer", en: "Chicken Meals" },
    desc: { no: "Bokser og pakker til én eller hele gjengen.", en: "Boxes and packs for one or the whole crew." },
    items: [
      {
        name: { no: "Small Box", en: "Small Box" },
        desc: { no: "1 klubbe, 1 overlår, pommes frites og saus.", en: "1 club, 1 thigh, fries and sauce." },
        price: 129,
        allergens: ["H"],
        emoji: "📦",
      },
      {
        name: { no: "Medium Box", en: "Medium Box" },
        desc: { no: "1 klubbe, 1 overlår, 2 vinger, pommes frites og saus.", en: "1 club, 1 thigh, 2 wings, fries and sauce." },
        price: 169,
        allergens: ["H"],
        emoji: "📦",
      },
      {
        name: { no: "Large Box", en: "Large Box" },
        desc: { no: "2 klubber, 1 overlår, 3 vinger, 2 kyllingstrimler, pommes frites og saus.", en: "2 clubs, 1 thigh, 3 wings, 2 tenders, fries and sauce." },
        price: 229,
        allergens: ["H"],
        emoji: "📦",
      },
      {
        name: { no: "Duo Pack", en: "Duo Pack" },
        desc: { no: "4 klubber, 2 overlår, 6 vinger, 4 kyllingstrimler, 2 pommes frites og 2 sauser.", en: "4 clubs, 2 thighs, 6 wings, 4 tenders, 2 fries and 2 sauces." },
        price: 399,
        allergens: ["H"],
        emoji: "🪣",
      },
      {
        name: { no: "Family Pack", en: "Family Pack" },
        desc: { no: "4 klubber, 4 overlår, 10 vinger, 6 kyllingstrimler, 3 pommes frites og 3 sauser.", en: "4 clubs, 4 thighs, 10 wings, 6 tenders, 3 fries and 3 sauces." },
        price: 549,
        allergens: ["H"],
        emoji: "🪣",
      },
      {
        name: { no: "Party Pack", en: "Party Pack" },
        desc: { no: "6 klubber, 6 overlår, 15 vinger, 10 kyllingstrimler, 4 pommes frites og 4 sauser.", en: "6 clubs, 6 thighs, 15 wings, 10 tenders, 4 fries and 4 sauces." },
        price: 799,
        allergens: ["H"],
        emoji: "🪣",
      },
    ],
  },
  {
    id: "junior",
    icon: "🧒",
    name: { no: "Juniormeny", en: "Junior Menu" },
    items: [
      {
        name: { no: "Juniormeny", en: "Junior Menu" },
        desc: { no: "2 kyllingstrimler, pommes frites og en juiceboks.", en: "2 tenders, fries and a juice box." },
        price: 89,
        allergens: ["H"],
        emoji: "🧃",
      },
    ],
  },
  {
    id: "sides",
    icon: "🍟",
    name: { no: "Tilbehør", en: "Sides" },
    items: [
      {
        name: { no: "Løkringer", en: "Onion Rings" },
        desc: { no: "", en: "" },
        price: 49,
        emoji: "🧅",
      },
      {
        name: { no: "Coleslaw", en: "Coleslaw" },
        desc: { no: "", en: "" },
        price: 39,
        emoji: "🥗",
      },
      {
        name: { no: "Søtpotetfries", en: "Sweet Potato Fries" },
        desc: { no: "", en: "" },
        price: 49,
        emoji: "🍠",
      },
      {
        name: { no: "Pommes frites", en: "Fries" },
        desc: { no: "", en: "" },
        price: 39,
        emoji: "🍟",
      },
      {
        name: { no: "Dirty Fries", en: "Dirty Fries" },
        desc: { no: "", en: "" },
        price: 69,
        emoji: "🍟",
      },
      {
        name: { no: "Mozzarellasticks", en: "Mozzarella Sticks" },
        desc: { no: "", en: "" },
        price: 59,
        emoji: "🧀",
      },
    ],
  },
  {
    id: "sauces",
    icon: "🥣",
    name: { no: "Sauser", en: "Sauces" },
    items: [
      {
        name: { no: "Chilimajones", en: "Chilli Mayo" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🌶️",
        tags: ["spicy"],
      },
      {
        name: { no: "BBQ", en: "BBQ" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🥫",
      },
      {
        name: { no: "Golden Honey Dip", en: "Golden Honey Dip" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🍯",
      },
      {
        name: { no: "Majones", en: "Mayo" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🥣",
      },
      {
        name: { no: "Sweet Chili Dip", en: "Sweet Chilli Dip" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🌶️",
      },
      {
        name: { no: "Hvitløksdipp", en: "Garlic Dip" },
        desc: { no: "", en: "" },
        price: 15,
        emoji: "🧄",
      },
      {
        name: { no: "Cheddarsaus", en: "Cheddar Sauce" },
        desc: { no: "", en: "" },
        price: 20,
        emoji: "🧀",
      },
    ],
  },
  {
    id: "drinks",
    icon: "🥤",
    name: { no: "Drikke", en: "Drinks" },
    items: [
      {
        name: { no: "Cola", en: "Cola" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Cola Zero", en: "Cola Zero" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Fanta", en: "Fanta" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Fanta Exotic", en: "Fanta Exotic" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Sprite", en: "Sprite" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Mountain Dew", en: "Mountain Dew" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "MER", en: "MER" },
        desc: { no: "", en: "" },
        price: 39,
        allergens: [],
        emoji: "🥤",
      },
      {
        name: { no: "Bonaqua", en: "Bonaqua" },
        desc: { no: "", en: "" },
        price: 35,
        allergens: [],
        emoji: "💧",
      },
    ],
  },
  {
    id: "desserts",
    icon: "🍨",
    name: { no: "Dessert", en: "Dessert" },
    desc: { no: "Kremete milkshakes.", en: "Creamy milkshakes." },
    items: [
      {
        name: { no: "Vaniljemilkshake", en: "Vanilla Milkshake" },
        desc: { no: "", en: "" },
        price: 59,
        allergens: ["M"],
        emoji: "🥛",
      },
      {
        name: { no: "Jordbærmilkshake", en: "Strawberry Milkshake" },
        desc: { no: "", en: "" },
        price: 59,
        allergens: ["M"],
        emoji: "🍓",
      },
      {
        name: { no: "Sjokolademilkshake", en: "Chocolate Milkshake" },
        desc: { no: "", en: "" },
        price: 59,
        allergens: ["M"],
        emoji: "🍫",
      },
      {
        name: { no: "Karamellmilkshake", en: "Caramel Milkshake" },
        desc: { no: "", en: "" },
        price: 59,
        allergens: ["M"],
        emoji: "🍮",
      },
    ],
  },
];

/* ---------- Open jobs (Work at Caylò's page) ----------
   Leave the list empty [] if you have no open positions. */
const JOBS = [
  {
    title: { no: "Restaurantmedarbeider", en: "Crew Member" },
    location: { no: "Drammen", en: "Drammen" },
    type: { no: "Deltid / heltid", en: "Part-time / full-time" },
  },
  {
    title: { no: "Skiftleder", en: "Shift Manager" },
    location: { no: "Drammen", en: "Drammen" },
    type: { no: "Heltid", en: "Full-time" },
  },
];
