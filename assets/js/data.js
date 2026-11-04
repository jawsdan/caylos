/* =====================================================================
   CAYLOS' FRIED CHICKEN — SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change:
     • company contact details
     • restaurants
     • the menu
     • open jobs

   Every text that is shown to visitors has a Norwegian ("no") and an
   English ("en") version. Fill in both.
   ===================================================================== */

/* ---------- Company details (footer, contact page) ---------- */
const COMPANY = {
  email: "post@caylos.no",
  franchiseEmail: "franchise@caylos.no",
  jobsEmail: "jobb@caylos.no",
  phone: "+47 22 00 00 00",
  address: "Storgata 1, 0155 Oslo",
  orgNumber: "000 000 000",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
};

/* ---------- Restaurants ----------
   Copy one { ... } block to add a new restaurant.

   hours: one line per weekday, Monday first.
          ["11:00", "22:00"] = open 11–22
          null               = closed that day
          close after midnight? write e.g. ["12:00", "02:00"]
   comingSoon: true  → shows "Opening soon" instead of hours
   features: any of "dinein", "takeaway", "delivery", "drivethru"
   ---------------------------------------------------------------- */
const RESTAURANTS = [
  {
    name: "Caylò's Grønland",
    city: "Oslo",
    address: "Grønlandsleiret 10, 0190 Oslo",
    phone: "+47 22 00 00 01",
    features: ["dinein", "takeaway", "delivery"],
    hours: [
      ["11:00", "23:00"], // Monday
      ["11:00", "23:00"], // Tuesday
      ["11:00", "23:00"], // Wednesday
      ["11:00", "23:00"], // Thursday
      ["11:00", "02:00"], // Friday
      ["12:00", "02:00"], // Saturday
      ["12:00", "22:00"], // Sunday
    ],
  },
  {
    name: "Caylò's Majorstuen",
    city: "Oslo",
    address: "Bogstadveien 50, 0366 Oslo",
    phone: "+47 22 00 00 02",
    features: ["dinein", "takeaway"],
    hours: [
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "23:00"],
      ["12:00", "23:00"],
      null,
    ],
  },
  {
    name: "Caylò's Bergen Sentrum",
    city: "Bergen",
    address: "Torgallmenningen 5, 5014 Bergen",
    phone: "+47 55 00 00 01",
    features: ["dinein", "takeaway", "delivery"],
    hours: [
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "22:00"],
      ["11:00", "01:00"],
      ["12:00", "01:00"],
      ["13:00", "21:00"],
    ],
  },
  {
    name: "Caylò's Trondheim",
    city: "Trondheim",
    address: "Nordre gate 20, 7011 Trondheim",
    phone: "",
    features: ["dinein", "takeaway"],
    comingSoon: true,
    hours: [],
  },
];

/* ---------- Menu ----------
   Each category has a list of items. The sidebar picture is the first
   dish with a photo; add image: "..." to a category to choose another,
   or it falls back to the category icon (emoji).
   price: number in NOK (kr)
   tags:  any of "spicy", "new", "veg"
   emoji: shown as a picture until you add a real photo
   image: optional — path to a photo, e.g. "assets/img/burger.jpg"
   featured: true → also shown on the home page
   -------------------------------- */
const MENU = [
  {
    id: "burgers",
    icon: "🍔",
    name: { no: "Burgere", en: "Burgers" },
    desc: { no: "Servert i brioche med sprø kyllingfilet.", en: "Served in brioche with a crispy chicken fillet." },
    items: [
      {
        name: { no: "Classic Chicken Burger", en: "Classic Chicken Burger" },
        desc: { no: "Sprø kyllingfilet, cheddar, salat, tomat og majones.", en: "Crispy chicken fillet, cheddar, lettuce, tomato and mayo." },
        price: 119,
        image: "assets/img/menu/classic-burger.webp",
        featured: true,
      },
      {
        name: { no: "BBQ Onion Ring Burger", en: "BBQ Onion Ring Burger" },
        desc: { no: "Sprø filet, cheddar, løkringer, BBQ-saus, pickles og rødløk.", en: "Crispy fillet, cheddar, onion rings, BBQ sauce, pickles and red onion." },
        price: 139,
        image: "assets/img/menu/bbq-onion-burger.webp",
        featured: true,
      },
      {
        name: { no: "Coleslaw Crunch Burger", en: "Coleslaw Crunch Burger" },
        desc: { no: "Sprø filet, cheddar, coleslaw, rødløk og husets saus.", en: "Crispy fillet, cheddar, coleslaw, red onion and house sauce." },
        price: 129,
        image: "assets/img/menu/coleslaw-burger.webp",
        featured: true,
      },
      {
        name: { no: "Nacho Burger", en: "Nacho Burger" },
        desc: { no: "Sprø filet, tortillachips, salsa, tomat, salat og hvitløksdressing.", en: "Crispy fillet, tortilla chips, salsa, tomato, lettuce and garlic dressing." },
        price: 135,
        image: "assets/img/menu/nacho-burger.webp",
        tags: ["new"],
      },
      {
        name: { no: "Jalapeño Burger", en: "Jalapeño Burger" },
        desc: { no: "Sprø filet, cheddar, jalapeños, rødløk, salat og burgerdressing.", en: "Crispy fillet, cheddar, jalapeños, red onion, lettuce and burger dressing." },
        price: 135,
        image: "assets/img/menu/jalapeno-burger.webp",
        tags: ["spicy"],
        featured: true,
      },
    ],
  },
  {
    id: "subs",
    icon: "🥖",
    name: { no: "Baguetter", en: "Subs" },
    desc: { no: "Fersk baguette med rikelig fyll.", en: "Fresh baguette with plenty of filling." },
    items: [
      {
        name: { no: "Chicken Sub", en: "Chicken Sub" },
        desc: { no: "Baguette med to sprø kyllingfileter, cheddar, salat, tomat og majones.", en: "Baguette with two crispy chicken fillets, cheddar, lettuce, tomato and mayo." },
        price: 139,
        image: "assets/img/menu/chicken-sub.webp",
        featured: true,
      },
      {
        name: { no: "Halloumi Sub", en: "Halloumi Sub" },
        desc: { no: "Baguette med grillet halloumi, syltet rødløk, tomat, salat og dressing.", en: "Baguette with grilled halloumi, pickled red onion, tomato, lettuce and dressing." },
        price: 135,
        image: "assets/img/menu/halloumi-sub.webp",
        tags: ["veg"],
      },
      {
        name: { no: "Caprese Sub", en: "Caprese Sub" },
        desc: { no: "Baguette med mozzarella, tomat, fersk basilikum og pesto.", en: "Baguette with mozzarella, tomato, fresh basil and pesto." },
        price: 125,
        image: "assets/img/menu/caprese-sub.webp",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "meals",
    icon: "🍽️",
    name: { no: "Menyer", en: "Meals" },
    desc: { no: "Alle menyer kommer med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Every meal comes with fries, a 0.5 l soft drink and 2 chicken pieces." },
    items: [
      {
        name: { no: "Classic Chicken Burger Meny", en: "Classic Chicken Burger Meal" },
        desc: { no: "Classic Chicken Burger med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Classic Chicken Burger with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 189,
        image: "assets/img/menu/classic-burger-meal.webp",
      },
      {
        name: { no: "BBQ Onion Ring Burger Meny", en: "BBQ Onion Ring Burger Meal" },
        desc: { no: "BBQ Onion Ring Burger med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "BBQ Onion Ring Burger with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 209,
        image: "assets/img/menu/bbq-onion-burger-meal.webp",
      },
      {
        name: { no: "Coleslaw Crunch Burger Meny", en: "Coleslaw Crunch Burger Meal" },
        desc: { no: "Coleslaw Crunch Burger med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Coleslaw Crunch Burger with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 199,
        image: "assets/img/menu/coleslaw-burger-meal.webp",
      },
      {
        name: { no: "Nacho Burger Meny", en: "Nacho Burger Meal" },
        desc: { no: "Nacho Burger med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Nacho Burger with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 205,
        image: "assets/img/menu/nacho-burger-meal.webp",
      },
      {
        name: { no: "Jalapeño Burger Meny", en: "Jalapeño Burger Meal" },
        desc: { no: "Jalapeño Burger med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Jalapeño Burger with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 205,
        image: "assets/img/menu/jalapeno-burger-meal.webp",
      },
      {
        name: { no: "Chicken Sub Meny", en: "Chicken Sub Meal" },
        desc: { no: "Chicken Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Chicken Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 209,
        image: "assets/img/menu/chicken-sub-meal.webp",
      },
      {
        name: { no: "Halloumi Sub Meny", en: "Halloumi Sub Meal" },
        desc: { no: "Halloumi Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Halloumi Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 205,
        image: "assets/img/menu/halloumi-sub-meal.webp",
      },
      {
        name: { no: "Caprese Sub Meny", en: "Caprese Sub Meal" },
        desc: { no: "Caprese Sub med pommes frites, 0,5 l brus og 2 kyllingbiter.", en: "Caprese Sub with fries, a 0.5 l soft drink and 2 chicken pieces." },
        price: 195,
        image: "assets/img/menu/caprese-sub-meal.webp",
      },
    ],
  },
  {
    id: "chicken",
    icon: "🍗",
    name: { no: "Kylling", en: "Chicken" },
    desc: { no: "Sprø, saftig og stekt ferdig hver dag.", en: "Crispy, juicy and freshly fried every day." },
    items: [
      {
        name: { no: "Originale kyllingbiter", en: "Original Chicken Pieces" },
        desc: { no: "3 biter kylling med ben i vår hemmelige krydderblanding.", en: "3 bone-in pieces in our secret spice blend." },
        price: 109,
        emoji: "🍗",
      },
      {
        name: { no: "Hot Wings (8 stk)", en: "Hot Wings (8 pcs)" },
        desc: { no: "Sprø vinger dynket i chilisaus.", en: "Crispy wings tossed in chilli sauce." },
        price: 99,
        emoji: "🔥",
        tags: ["spicy"],
      },
      {
        name: { no: "Tenders (5 stk)", en: "Tenders (5 pcs)" },
        desc: { no: "Benfri kyllingfilet i sprø panering. Velg dipp.", en: "Boneless chicken fillet in a crunchy coating. Choose a dip." },
        price: 95,
        emoji: "🍗",
      },
      {
        name: { no: "Popcorn-kylling", en: "Popcorn Chicken" },
        desc: { no: "Små, sprø biter – perfekt å dele.", en: "Bite-sized crispy pieces – perfect for sharing." },
        price: 69,
        emoji: "🍿",
      },
    ],
  },
  {
    id: "buckets",
    icon: "🪣",
    name: { no: "Bøtter og deling", en: "Buckets & Sharing" },
    desc: { no: "For gjengen, familien eller en sulten deg.", en: "For the crew, the family, or a very hungry you." },
    items: [
      {
        name: { no: "Familiebøtte", en: "Family Bucket" },
        desc: { no: "10 biter kylling, 2 store pommes frites og 2 dipper.", en: "10 chicken pieces, 2 large fries and 2 dips." },
        price: 349,
        emoji: "🪣",
      },
      {
        name: { no: "Mix-bøtte", en: "Mix Bucket" },
        desc: { no: "6 biter, 6 vinger og 6 tenders.", en: "6 pieces, 6 wings and 6 tenders." },
        price: 399,
        emoji: "🪣",
      },
    ],
  },
  {
    id: "sides",
    icon: "🍟",
    name: { no: "Tilbehør", en: "Sides" },
    items: [
      { name: { no: "Pommes frites", en: "Fries" }, desc: { no: "Sprø og saltet.", en: "Crispy and salted." }, price: 39, emoji: "🍟", tags: ["veg"] },
      { name: { no: "Coleslaw", en: "Coleslaw" }, desc: { no: "Kremet og frisk.", en: "Creamy and fresh." }, price: 35, emoji: "🥗", tags: ["veg"] },
      { name: { no: "Mac & cheese", en: "Mac & Cheese" }, desc: { no: "Ostete og deilig.", en: "Cheesy and comforting." }, price: 49, emoji: "🧀", tags: ["veg"] },
      { name: { no: "Maiskolbe", en: "Corn on the Cob" }, desc: { no: "Med smør.", en: "With butter." }, price: 35, emoji: "🌽", tags: ["veg"] },
    ],
  },
  {
    id: "dips",
    icon: "🥣",
    name: { no: "Dipp og sauser", en: "Dips & Sauces" },
    items: [
      { name: { no: "Husets majones", en: "House Mayo" }, desc: { no: "", en: "" }, price: 15, emoji: "🥣", tags: ["veg"] },
      { name: { no: "Chilimajones", en: "Chilli Mayo" }, desc: { no: "", en: "" }, price: 15, emoji: "🌶️", tags: ["spicy", "veg"] },
      { name: { no: "Honning-sennep", en: "Honey Mustard" }, desc: { no: "", en: "" }, price: 15, emoji: "🍯", tags: ["veg"] },
      { name: { no: "BBQ", en: "BBQ" }, desc: { no: "", en: "" }, price: 15, emoji: "🥫", tags: ["veg"] },
    ],
  },
  {
    id: "drinks",
    icon: "🥤",
    name: { no: "Drikke", en: "Drinks" },
    items: [
      { name: { no: "Brus 0,5 l", en: "Soft drink 0.5 l" }, desc: { no: "Spør etter utvalget.", en: "Ask for the selection." }, price: 39, emoji: "🥤" },
      { name: { no: "Hjemmelaget lemonade", en: "Homemade Lemonade" }, desc: { no: "Frisk og søt.", en: "Fresh and sweet." }, price: 45, emoji: "🍋" },
      { name: { no: "Vann", en: "Water" }, desc: { no: "", en: "" }, price: 29, emoji: "💧" },
    ],
  },
  {
    id: "desserts",
    icon: "🍦",
    name: { no: "Dessert", en: "Desserts" },
    items: [
      { name: { no: "Soft ice", en: "Soft Serve" }, desc: { no: "Med sjokolade- eller karamellsaus.", en: "With chocolate or caramel sauce." }, price: 35, emoji: "🍦", tags: ["veg"] },
      { name: { no: "Churros", en: "Churros" }, desc: { no: "Med kanelsukker og sjokoladedipp.", en: "With cinnamon sugar and chocolate dip." }, price: 45, emoji: "🥨", tags: ["veg", "new"] },
    ],
  },
];

/* ---------- Open jobs (Work at Caylò's page) ----------
   Leave the list empty [] if you have no open positions. */
const JOBS = [
  {
    title: { no: "Restaurantmedarbeider", en: "Crew Member" },
    location: { no: "Alle restauranter", en: "All restaurants" },
    type: { no: "Deltid / heltid", en: "Part-time / full-time" },
  },
  {
    title: { no: "Skiftleder", en: "Shift Manager" },
    location: { no: "Oslo", en: "Oslo" },
    type: { no: "Heltid", en: "Full-time" },
  },
  {
    title: { no: "Restaurantsjef", en: "Restaurant Manager" },
    location: { no: "Trondheim (ny restaurant)", en: "Trondheim (new restaurant)" },
    type: { no: "Heltid", en: "Full-time" },
  },
];
