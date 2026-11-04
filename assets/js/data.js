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
   Each category has an icon (shown in the sidebar) and a list of items.
   price: number in NOK (kr)
   tags:  any of "spicy", "new", "veg"
   emoji: shown as a picture until you add a real photo
   image: optional — path to a photo, e.g. "assets/img/burger.jpg"
   featured: true → also shown on the home page
   -------------------------------- */
const MENU = [
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
        featured: true,
      },
      {
        name: { no: "Hot Wings (8 stk)", en: "Hot Wings (8 pcs)" },
        desc: { no: "Sprø vinger dynket i chilisaus.", en: "Crispy wings tossed in chilli sauce." },
        price: 99,
        emoji: "🔥",
        tags: ["spicy"],
        featured: true,
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
    id: "burgers",
    icon: "🍔",
    name: { no: "Burgere", en: "Burgers" },
    desc: { no: "Servert i brioche med sprø kyllingfilet.", en: "Served in brioche with a crispy chicken fillet." },
    items: [
      {
        name: { no: "Caylò's Classic", en: "Caylò's Classic" },
        desc: { no: "Sprø filet, salat, tomat, pickles og husets majones.", en: "Crispy fillet, lettuce, tomato, pickles and house mayo." },
        price: 129,
        emoji: "🍔",
        featured: true,
      },
      {
        name: { no: "Fire Burger", en: "Fire Burger" },
        desc: { no: "Sterk filet, jalapeños, pepperjack og chilimajones.", en: "Spicy fillet, jalapeños, pepper jack and chilli mayo." },
        price: 139,
        emoji: "🌶️",
        tags: ["spicy", "new"],
        featured: true,
      },
      {
        name: { no: "Dobbel Crunch", en: "Double Crunch" },
        desc: { no: "To filéter, dobbel ost, bacon og BBQ-saus.", en: "Two fillets, double cheese, bacon and BBQ sauce." },
        price: 159,
        emoji: "🍔",
      },
      {
        name: { no: "Grønn Crunch", en: "Green Crunch" },
        desc: { no: "Plantebasert filet med salat og urtedressing.", en: "Plant-based fillet with lettuce and herb dressing." },
        price: 129,
        emoji: "🥬",
        tags: ["veg"],
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
        featured: true,
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
