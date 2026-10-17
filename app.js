/**
 * Murtuza’s Table • Artisan Homemade Kitchen & Delivery
 * Main JavaScript Controller
 */

// ===================================================================
// 1. Menu Database (High-Res Curated Food Photography & Artisanal Recipes)
// ===================================================================
const MENU_DATA = [
  {
    id: "dish-1",
    name: "Ammi's Special Dum Biryani",
    category: "signature",
    diet: "nonveg",
    tag: "Bestseller",
    tagClass: "badge-bestseller",
    rating: 4.98,
    reviewsCount: 184,
    prepTime: "30-40 mins",
    servings: "Serves 1-2",
    summary: "Aged long-grain basmati layered with tender farm chicken marinated overnight in whole yogurt, saffron strands, and slow-dum sealed over dying coals.",
    ingredients: "Farm Chicken, Aged Basmati Rice, Desi Ghee, Saffron, Hand-ground Garam Masala, Crispy Fried Onions, Fresh Mint & Coriander",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Single Portion (1 Person)", price: 680 },
      { name: "Duo Sharing (2 Persons)", price: 1250 },
      { name: "Family Handi (4-5 Persons)", price: 2400 }
    ],
    pantryTags: ["Coal Dum", "Desi Ghee", "Saffron Scented"]
  },
  {
    id: "dish-2",
    name: "Slow Handi Chicken Korma",
    category: "signature",
    diet: "nonveg",
    tag: "Ammi's Secret",
    tagClass: "badge-chef",
    rating: 4.95,
    reviewsCount: 142,
    prepTime: "25-35 mins",
    servings: "Serves 1-2",
    summary: "Silky, caramelized onion and cashew-yogurt gravy infused with green cardamom, mace, and a drop of kewra water. Simmered until oil floats gracefully on top.",
    ingredients: "Chicken Thighs, Caramelized Onions, Hand-pounded Cashew Paste, Kewra, Desi Ghee, Cloves, Black Peppercorns",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Standard Bowl (1-2 Persons)", price: 750 },
      { name: "Large Deghi Pot (3-4 Persons)", price: 1450 }
    ],
    pantryTags: ["Slow Simmered", "Cashew Gravy", "Mild Fragrant"]
  },
  {
    id: "dish-3",
    name: "Tender Mutton Shami Kebabs (4 Pcs)",
    category: "chai",
    diet: "nonveg",
    tag: "Melt-In-Mouth",
    tagClass: "badge-bestseller",
    rating: 4.99,
    reviewsCount: 210,
    prepTime: "20 mins",
    servings: "4 Kebabs",
    summary: "Silky fiber mutton slow boiled with split Bengal gram and whole roasted spices, hand-shredded (sil-batta style) and shallow-fried in golden butter.",
    ingredients: "Hand-shredded Mutton, Chana Daal, Ginger, Garlic, Fresh Mint, Green Chillies, Whisked Egg, Butter",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Pack of 4 Fresh Fried", price: 620 },
      { name: "Pack of 8 (Party Box)", price: 1180 }
    ],
    pantryTags: ["Hand Shredded", "Zero Fillers", "High Protein"]
  },
  {
    id: "dish-4",
    name: "Comfort Yellow Daal Tadka & Zeera Rice",
    category: "comfort",
    diet: "veg",
    tag: "Comfort Classic",
    tagClass: "badge-chef",
    rating: 4.92,
    reviewsCount: 96,
    prepTime: "20-25 mins",
    servings: "Serves 1-2",
    summary: "Golden yellow Moong & Masoor lentils simmered with turmeric and garlic, finished with a sizzling crackle of cumin seeds, dried whole button chilies, and desi ghee.",
    ingredients: "Organic Moong & Masoor Daal, Pure Desi Ghee, Cumin Seeds, Whole Red Chillies, Fresh Garlic, Curry Leaves",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Daal Bowl with Steamed Rice", price: 490 },
      { name: "Daal Only (Family Bowl)", price: 420 }
    ],
    pantryTags: ["Pure Desi Ghee Tadka", "Light & Cleansing", "Vegetarian"]
  },
  {
    id: "dish-5",
    name: "Executive Lunch Tiffin Thali",
    category: "tiffin",
    diet: "nonveg",
    tag: "Daily Value",
    tagClass: "badge-bestseller",
    rating: 4.96,
    reviewsCount: 312,
    prepTime: "30 mins",
    servings: "Complete Meal For 1",
    summary: "A wholesome 4-compartment hot dabba: Today's Chef Chicken Curry, Slow Dal, 2 Hot Tawa Phulkas, Steamed Rice, Mint Raita, and fresh onion kachumber.",
    ingredients: "Chicken Salan, Lentil of the day, Whole Wheat Chapatis, Basmati, Yogurt Raita, Cucumber, Onion",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Non-Veg Thali (Chicken + Dal + Roti)", price: 580 },
      { name: "Pure Veg Thali (Paneer + Dal + Roti)", price: 520 }
    ],
    pantryTags: ["Complete Balanced Meal", "Thermal Packed", "Office Favorite"]
  },
  {
    id: "dish-6",
    name: "Palak Paneer Desi Ghar Style",
    category: "comfort",
    diet: "veg",
    tag: "Farm Fresh",
    tagClass: "badge-chef",
    rating: 4.89,
    reviewsCount: 88,
    prepTime: "25-30 mins",
    servings: "Serves 1-2",
    summary: "Tender mountain spinach hand-blanched and slow simmered with roasted cumin, ginger batons, and soft cubes of fresh dairy paneer.",
    ingredients: "Fresh Spinach, Homemade Paneer Cubes, Fenugreek Leaves, Butter, Garlic, Ginger, Fresh Cream",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Single Bowl (1-2 Persons)", price: 560 },
      { name: "Family Handi (3-4 Persons)", price: 980 }
    ],
    pantryTags: ["Iron Rich", "Soft Paneer", "No Food Color"]
  },
  {
    id: "dish-7",
    name: "Crispy Layered Laccha Parathas (2 Pcs)",
    category: "breads",
    diet: "veg",
    tag: "Fresh From Tawa",
    tagClass: "badge-bestseller",
    rating: 4.97,
    reviewsCount: 230,
    prepTime: "15 mins",
    servings: "2 Big Parathas",
    summary: "Multi-layered whole wheat spiral dough kneaded with milk and rolled thin. Shallow toasted on a cast iron tawa until crisp and golden brown.",
    ingredients: "Stone Ground Atta, Clarified Butter, Pure Milk, Sea Salt",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Pair of 2 Parathas", price: 190 },
      { name: "Stack of 4 Parathas", price: 360 }
    ],
    pantryTags: ["Flaky Layers", "Cast Iron Tawa", "Pure Atta"]
  },
  {
    id: "dish-8",
    name: "Zafrani Shahi Kheer Pot",
    category: "desserts",
    diet: "sweet",
    tag: "Royal Sweet",
    tagClass: "badge-chef",
    rating: 4.99,
    reviewsCount: 165,
    prepTime: "Immediate",
    servings: "Serves 2-3",
    summary: "Slow simmered for 4 hours with farm full-cream milk, coarse broken Basmati rice, and Iranian saffron strands, garnished with slivered almonds and silver leaf.",
    ingredients: "Full Fat Buffalo Milk, Fragrant Basmati, Green Cardamom, Kashmiri Saffron, Almonds, Pistachios",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Clay Matka Cup (1-2 Persons)", price: 340 },
      { name: "Large Matka Bowl (3-4 Persons)", price: 650 }
    ],
    pantryTags: ["Earthen Clay Pot", "Real Saffron", "Slow Simmered"]
  },
  {
    id: "dish-9",
    name: "Artisan Sea Salt Fudgy Brownies (Box of 2)",
    category: "desserts",
    diet: "sweet",
    tag: "Bakery Special",
    tagClass: "badge-bestseller",
    rating: 4.98,
    reviewsCount: 178,
    prepTime: "Immediate",
    servings: "2 Large Squares",
    summary: "Crinkly shiny top, dense gooey chocolate center made with 70% dark Belgian cocoa and finished with flaky Maldon sea salt and roasted walnut pieces.",
    ingredients: "Dark Cocoa, Pure Butter, Farm Eggs, Brown Sugar, Flaky Sea Salt, Roasted Walnuts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Box of 2 Brownie Squares", price: 420 },
      { name: "Box of 4 Brownie Squares", price: 780 }
    ],
    pantryTags: ["70% Dark Cocoa", "Gooey Center", "Handcrafted Daily"]
  },
  {
    id: "dish-10",
    name: "Crunchy Aloo-Keema Chai Samosas (3 Pcs)",
    category: "chai",
    diet: "nonveg",
    tag: "Evening Chai",
    tagClass: "badge-bestseller",
    rating: 4.93,
    reviewsCount: 195,
    prepTime: "15-20 mins",
    servings: "3 Crispy Samosas",
    summary: "Ultra thin crisp patti crust stuffed with a spiced mixture of minced beef, potatoes, crushed coriander seeds, and fresh green mint. Served with tangy Imli chutney.",
    ingredients: "Minced Beef, Potato cubes, Roasted Coriander, Cumin, Mint, Green Chillies, Handcrafted Pastry Sheet",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Plate of 3 Samosas + Imli Chutney", price: 320 },
      { name: "Family Plate of 6 Samosas", price: 590 }
    ],
    pantryTags: ["Thin Crispy Patti", "House Tamarind Dip", "Fried Fresh"]
  },
  {
    id: "dish-11",
    name: "Warm Khoya Gulab Jamun (4 Pcs)",
    category: "desserts",
    diet: "sweet",
    tag: "Sweet Classic",
    tagClass: "badge-chef",
    rating: 4.94,
    reviewsCount: 130,
    prepTime: "Immediate",
    servings: "4 Soft Jamuns",
    summary: "Hand-rolled pure khoya dumplings fried gently to a deep mahagony brown and soaked in hot rose water and cardamom perfumed nectar.",
    ingredients: "Fresh Khoya, Fine Semolina, Saffron, Rose Water, Green Cardamom, Sugar Nectar",
    image: "https://images.unsplash.com/photo-1605197584547-c9342b450700?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Cup of 4 Jamuns", price: 290 },
      { name: "Box of 8 Jamuns", price: 540 }
    ],
    pantryTags: ["Real Khoya", "Rose Water Nectar", "Serve Warm"]
  },
  {
    id: "dish-12",
    name: "Slow Braised Sunday Nihari",
    category: "signature",
    diet: "nonveg",
    tag: "Chef Masterpiece",
    tagClass: "badge-chef",
    rating: 4.99,
    reviewsCount: 245,
    prepTime: "40 mins",
    servings: "Serves 2-3",
    summary: "A slow 8-hour braise of tender beef shanks in rich, velvety bone marrow gravy spiced with mace, star anise, and sonth. Garnished with ginger matchsticks & lemons.",
    ingredients: "Beef Shank & Marrow Bones, Wheat Flour Roux, Star Anise, Dried Ginger, Fennel Seeds, Lemon & Green Chilies",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=700&auto=format&fit=crop&q=80",
    portions: [
      { name: "Nihari Bowl with Nalli (1-2 Persons)", price: 920 },
      { name: "Big Handi with 2 Nallis (3-4 Persons)", price: 1750 }
    ],
    pantryTags: ["8-Hour Braise", "Rich Bone Marrow", "Traditional Pot"]
  }
];

// ===================================================================
// 2. Application State Management
// ===================================================================
const State = {
  currentCategory: "all",
  currentDiet: "all",
  searchQuery: "",
  sortBy: "popular",
  cart: [],
  activePromo: null,
  activeDishForModal: null,
  deliveryThreshold: 1500, // Rs 1500 for free delivery
  baseDeliveryFee: 150
};

// Available Coupons
const COUPONS = {
  "HOMELOVE": { type: "percent", value: 15, label: "15% OFF (Ammi's Blessing)" },
  "FIRSTBITE": { type: "fixed", value: 200, label: "Rs 200 OFF (Welcome Gift)" },
  "FREEDEL": { type: "shipping", value: 0, label: "Free Insulated Delivery" }
};

// ===================================================================
// 3. Initialization & DOM Bindings
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  updateCategoryCounts();
  renderDishes();
  renderCart();
  setupEventListeners();
  setupFAQAccordion();
});

// ===================================================================
// 4. Rendering Dishes Grid
// ===================================================================
function updateCategoryCounts() {
  const counts = {
    all: MENU_DATA.length,
    signature: 0,
    comfort: 0,
    tiffin: 0,
    breads: 0,
    desserts: 0,
    chai: 0
  };

  MENU_DATA.forEach(dish => {
    if (counts[dish.category] !== undefined) {
      counts[dish.category]++;
    }
  });

  for (const cat in counts) {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  }
}

function getFilteredDishes() {
  return MENU_DATA.filter(dish => {
    // Category match
    const matchesCategory = State.currentCategory === "all" || dish.category === State.currentCategory;
    
    // Diet match
    const matchesDiet = State.currentDiet === "all" || dish.diet === State.currentDiet;

    // Search query match (Title, description, ingredients)
    const q = State.searchQuery.trim().toLowerCase();
    const matchesSearch = !q || (
      dish.name.toLowerCase().includes(q) ||
      dish.summary.toLowerCase().includes(q) ||
      dish.ingredients.toLowerCase().includes(q) ||
      dish.pantryTags.some(tag => tag.toLowerCase().includes(q))
    );

    return matchesCategory && matchesDiet && matchesSearch;
  }).sort((a, b) => {
    if (State.sortBy === "price-low") {
      return a.portions[0].price - b.portions[0].price;
    } else if (State.sortBy === "price-high") {
      return b.portions[0].price - a.portions[0].price;
    } else if (State.sortBy === "prep-time") {
      return parseInt(a.prepTime) - parseInt(b.prepTime);
    } else {
      // Popular (rating & reviews)
      return b.rating * b.reviewsCount - a.rating * a.reviewsCount;
    }
  });
}

function renderDishes() {
  const grid = document.getElementById("dishesGrid");
  const emptyState = document.getElementById("emptyState");
  const filtered = getFilteredDishes();

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = filtered.map(dish => {
    const basePortion = dish.portions[0];
    const dietIcon = dish.diet === "veg" 
      ? `<span class="dish-diet-icon veg" title="Pure Veg"><i class="fa-solid fa-seedling"></i></span>`
      : dish.diet === "sweet"
      ? `<span class="dish-diet-icon sweet" title="Artisan Sweet"><i class="fa-solid fa-ice-cream"></i></span>`
      : `<span class="dish-diet-icon nonveg" title="Halal Meat"><i class="fa-solid fa-drumstick-bite"></i></span>`;

    return `
      <article class="dish-card" data-id="${dish.id}">
        <div class="dish-media">
          <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" />
          <span class="dish-badge-tag ${dish.tagClass}">
            <i class="fa-solid fa-award"></i> ${dish.tag}
          </span>
          ${dietIcon}
          <button class="dish-quick-view-btn" onclick="openQuickView('${dish.id}')">
            <i class="fa-regular fa-eye"></i> Quick View & Options
          </button>
        </div>

        <div class="dish-info">
          <div class="dish-meta-row">
            <div class="dish-rating">
              <i class="fa-solid fa-star"></i>
              <span>${dish.rating}</span>
              <small>(${dish.reviewsCount})</small>
            </div>
            <div class="dish-time">
              <i class="fa-regular fa-clock"></i>
              <span>${dish.prepTime}</span>
            </div>
          </div>

          <h3 class="dish-name" onclick="openQuickView('${dish.id}')">${dish.name}</h3>
          <p class="dish-summary">${dish.summary}</p>

          <div class="dish-pantry-notes">
            ${dish.pantryTags.map(t => `<span class="pantry-tag"><i class="fa-solid fa-check-circle"></i> ${t}</span>`).join("")}
          </div>

          <div class="dish-card-footer">
            <div class="dish-price-group">
              <span class="price-servings">${basePortion.name.split("(")[0]}</span>
              <span class="dish-price-val">Rs ${basePortion.price.toLocaleString()}</span>
            </div>
            <button class="btn-add-tiffin" onclick="addBaseDishToCart('${dish.id}')">
              <i class="fa-solid fa-plus"></i>
              <span>Add to Tiffin</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ===================================================================
// 5. Quick View & Customization Modal
// ===================================================================
let currentModalQty = 1;
let selectedPortionIndex = 0;

function openQuickView(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  State.activeDishForModal = dish;
  currentModalQty = 1;
  selectedPortionIndex = 0;

  document.getElementById("qvTitle").textContent = dish.name;
  document.getElementById("qvImage").src = dish.image;
  document.getElementById("qvImage").alt = dish.name;
  document.getElementById("qvCategory").textContent = dish.category.toUpperCase();
  document.getElementById("qvRating").textContent = `${dish.rating} (${dish.reviewsCount} reviews)`;
  document.getElementById("qvServings").textContent = dish.servings;
  document.getElementById("qvPrep").textContent = dish.prepTime;
  document.getElementById("qvDescription").textContent = dish.summary;
  document.getElementById("qvIngredients").textContent = dish.ingredients;
  document.getElementById("qvQtyVal").textContent = currentModalQty;
  document.getElementById("qvSpecialNotes").value = "";

  const dietBadge = document.getElementById("qvDietBadge");
  if (dietBadge) {
    dietBadge.textContent = dish.diet === "veg" ? "🌱 Pure Vegetarian" : (dish.diet === "sweet" ? "🍯 Sweet Delight" : "🍗 100% Halal Chicken/Mutton");
    dietBadge.style.color = dish.diet === "veg" ? "#2E7D32" : (dish.diet === "sweet" ? "#E29B38" : "#C62828");
  }

  // Render Portions
  const portionsContainer = document.getElementById("qvPortionOptions");
  if (portionsContainer) {
    portionsContainer.innerHTML = dish.portions.map((portion, idx) => `
      <button type="button" class="portion-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" onclick="selectPortion(${idx})">
        ${portion.name} - <strong>Rs ${portion.price.toLocaleString()}</strong>
      </button>
    `).join("");
  }

  updateQuickViewPrice();
  document.getElementById("quickViewOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function selectPortion(idx) {
  selectedPortionIndex = idx;
  const btns = document.querySelectorAll("#qvPortionOptions .portion-btn");
  btns.forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
  updateQuickViewPrice();
}

function updateQuickViewPrice() {
  if (!State.activeDishForModal) return;
  const portion = State.activeDishForModal.portions[selectedPortionIndex];
  const total = portion.price * currentModalQty;
  document.getElementById("qvPriceDisplay").textContent = `Rs ${total.toLocaleString()}`;
}

function closeQuickView() {
  document.getElementById("quickViewOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================================================
// 6. Cart Management (Add, Remove, Quantity, Promo, Persistence)
// ===================================================================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("murtuza_table_cart");
    if (saved) {
      State.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    State.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("murtuza_table_cart", JSON.stringify(State.cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
}

function addBaseDishToCart(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  const defaultPortion = dish.portions[0];
  addToCartInternal(dish, defaultPortion, "Medium", "", 1);
  showToast(`Added "${dish.name}" to your tiffin!`, "success");
}

function addToCartInternal(dish, portion, spice, notes, quantity) {
  const cartItemId = `${dish.id}-${portion.name.replace(/\s+/g, '_')}-${spice}`;
  const existing = State.cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += quantity;
    if (notes && !existing.notes) existing.notes = notes;
  } else {
    State.cart.push({
      cartItemId,
      dishId: dish.id,
      name: dish.name,
      image: dish.image,
      portionName: portion.name,
      price: portion.price,
      spice: spice,
      notes: notes,
      quantity: quantity
    });
  }

  saveCartToStorage();
  renderCart();
}

function updateCartItemQty(cartItemId, delta) {
  const item = State.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    State.cart = State.cart.filter(i => i.cartItemId !== cartItemId);
  }

  saveCartToStorage();
  renderCart();
}

function removeCartItem(cartItemId) {
  State.cart = State.cart.filter(i => i.cartItemId !== cartItemId);
  saveCartToStorage();
  renderCart();
  showToast("Item removed from tiffin.", "info");
}

function getCartCalculations() {
  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);

  let discount = 0;
  let deliveryFee = State.baseDeliveryFee;

  // Free delivery rule: order >= 1500 or specific coupon
  if (subtotal >= State.deliveryThreshold && subtotal > 0) {
    deliveryFee = 0;
  }

  if (State.activePromo) {
    if (State.activePromo.type === "percent") {
      discount = Math.round((subtotal * State.activePromo.value) / 100);
    } else if (State.activePromo.type === "fixed") {
      discount = Math.min(subtotal, State.activePromo.value);
    } else if (State.activePromo.type === "shipping") {
      deliveryFee = 0;
    }
  }

  const grandTotal = Math.max(0, subtotal - discount + (subtotal > 0 ? deliveryFee : 0));

  return { subtotal, totalItems, discount, deliveryFee, grandTotal };
}

function renderCart() {
  const { subtotal, totalItems, discount, deliveryFee, grandTotal } = getCartCalculations();

  // Badges & counts
  document.getElementById("cartCountBadge").textContent = totalItems;
  document.getElementById("cartTotalItemsCount").textContent = totalItems;
  document.getElementById("cartHeaderTotal").textContent = `Rs ${subtotal.toLocaleString()}`;

  // Mobile Sticky Float
  const mobileFloat = document.getElementById("mobileCartFloat");
  if (mobileFloat) {
    if (totalItems > 0) {
      mobileFloat.classList.add("has-items", "show");
      document.getElementById("mobileCartCount").textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in basket`;
      document.getElementById("mobileCartTotal").textContent = `Rs ${grandTotal.toLocaleString()}`;
    } else {
      mobileFloat.classList.remove("has-items", "show");
    }
  }

  // Delivery Progress Bar
  const progressPercentEl = document.getElementById("progressPercent");
  const progressMsgEl = document.getElementById("progressMessage");
  const progressBar = document.getElementById("deliveryProgressBar");

  if (subtotal >= State.deliveryThreshold) {
    progressPercentEl.textContent = "100%";
    progressMsgEl.innerHTML = `<i class="fa-solid fa-gift"></i> Congratulations! You've unlocked <strong>FREE Delivery!</strong>`;
    progressBar.style.width = "100%";
  } else if (subtotal === 0) {
    progressPercentEl.textContent = "0%";
    progressMsgEl.innerHTML = `<i class="fa-solid fa-truck"></i> Add Rs ${State.deliveryThreshold.toLocaleString()} for <strong>Free Delivery!</strong>`;
    progressBar.style.width = "0%";
  } else {
    const diff = State.deliveryThreshold - subtotal;
    const pct = Math.round((subtotal / State.deliveryThreshold) * 100);
    progressPercentEl.textContent = `${pct}%`;
    progressMsgEl.innerHTML = `<i class="fa-solid fa-truck"></i> Add Rs ${diff.toLocaleString()} more for <strong>Free Delivery!</strong>`;
    progressBar.style.width = `${pct}%`;
  }

  // List of items
  const itemsContainer = document.getElementById("cartItemsList");
  const emptyView = document.getElementById("emptyCartView");
  const cartFooter = document.getElementById("cartFooter");

  if (State.cart.length === 0) {
    itemsContainer.innerHTML = "";
    emptyView.classList.add("active");
    cartFooter.style.display = "none";
    return;
  }

  emptyView.classList.remove("active");
  cartFooter.style.display = "block";

  itemsContainer.innerHTML = State.cart.map(item => `
    <div class="cart-item-row" data-id="${item.cartItemId}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-variant">${item.portionName}</span>
        <span class="cart-item-spice">Spice: ${item.spice}</span>
        ${item.notes ? `<span class="cart-item-spice" style="color:var(--text-muted);"><i class="fa-solid fa-note-sticky"></i> ${item.notes}</span>` : ''}
        <div class="cart-item-price">Rs ${(item.price * item.quantity).toLocaleString()}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <div class="cart-qty-pill">
          <button onclick="updateCartItemQty('${item.cartItemId}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItemQty('${item.cartItemId}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  `).join("");

  // Summary breakdown
  document.getElementById("summarySubtotal").textContent = `Rs ${subtotal.toLocaleString()}`;
  document.getElementById("summaryDelivery").textContent = deliveryFee === 0 ? "FREE" : `Rs ${deliveryFee.toLocaleString()}`;
  document.getElementById("summaryGrandTotal").textContent = `Rs ${grandTotal.toLocaleString()}`;

  const discountRow = document.getElementById("summaryDiscountRow");
  if (discount > 0 && State.activePromo) {
    discountRow.style.display = "flex";
    document.getElementById("discountName").textContent = State.activePromo.label;
    document.getElementById("summaryDiscount").textContent = `-Rs ${discount.toLocaleString()}`;
  } else {
    discountRow.style.display = "none";
  }

  // Update checkout preview in checkout modal if open
  document.getElementById("coItemsSummary").textContent = `${totalItems} dish${totalItems === 1 ? '' : 'es'}`;
  document.getElementById("coGrandTotal").textContent = `Rs ${grandTotal.toLocaleString()}`;
}

// Open/Close Cart Drawer
function openCart() {
  document.getElementById("cartOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
  document.body.style.overflow = "";
}

function closeCartAndScrollMenu() {
  closeCart();
  const menuSec = document.getElementById("menu");
  if (menuSec) menuSec.scrollIntoView({ behavior: "smooth" });
}

// ===================================================================
// 7. Checkout & WhatsApp Ordering System
// ===================================================================
function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast("Your tiffin is empty! Please add some dishes first.", "error");
    return;
  }
  closeCart();
  document.getElementById("checkoutOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const slot = document.getElementById("deliverySlot").value;
  const payment = document.getElementById("paymentMethod").value;
  const notes = document.getElementById("deliveryNotes").value.trim();

  if (!name || !phone || !address) {
    showToast("Please fill in all required delivery details.", "error");
    return;
  }

  const { subtotal, discount, deliveryFee, grandTotal } = getCartCalculations();
  const orderId = "MT-" + Math.floor(100000 + Math.random() * 900000);

  // Generate Receipt Content
  const receiptHTML = `
    <div class="receipt-header">
      <div>
        <strong>Order #${orderId}</strong>
        <div style="font-size:0.75rem; color:var(--text-muted);">${new Date().toLocaleString()}</div>
      </div>
      <span class="badge-pill" style="font-size:0.75rem;"><i class="fa-solid fa-fire"></i> Cooking Soon</span>
    </div>
    <div style="margin-bottom:12px;">
      <div class="receipt-row"><span>Customer:</span> <strong>${name} (${phone})</strong></div>
      <div class="receipt-row"><span>Address:</span> <span>${address}</span></div>
      <div class="receipt-row"><span>Time Slot:</span> <strong>${slot}</strong></div>
      <div class="receipt-row"><span>Payment:</span> <span>${payment}</span></div>
      ${notes ? `<div class="receipt-row"><span>Landmark:</span> <span>${notes}</span></div>` : ''}
    </div>
    <div style="border-top:1px dashed var(--border-subtle); padding-top:8px; margin-bottom:8px;">
      ${State.cart.map(item => `
        <div class="receipt-row">
          <span>${item.quantity}x ${item.name} (${item.portionName}) [${item.spice}]</span>
          <strong>Rs ${(item.price * item.quantity).toLocaleString()}</strong>
        </div>
      `).join("")}
    </div>
    <div style="border-top:1px solid var(--border-medium); padding-top:8px;">
      <div class="receipt-row"><span>Subtotal:</span> <span>Rs ${subtotal.toLocaleString()}</span></div>
      ${discount > 0 ? `<div class="receipt-row" style="color:#2E7D32;"><span>Discount:</span> <span>-Rs ${discount.toLocaleString()}</span></div>` : ''}
      <div class="receipt-row"><span>Delivery:</span> <span>${deliveryFee === 0 ? 'FREE' : 'Rs ' + deliveryFee.toLocaleString()}</span></div>
      <div class="receipt-row" style="font-size:1.05rem; font-weight:700; color:var(--text-heading); margin-top:4px;">
        <span>Payable Total:</span> <strong>Rs ${grandTotal.toLocaleString()}</strong>
      </div>
    </div>
  `;

  document.getElementById("receiptContent").innerHTML = receiptHTML;

  // Generate WhatsApp Message text link
  const waMessage = formatWhatsAppOrderMessage(orderId, name, phone, address, slot, payment, notes, grandTotal);
  const waUrl = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;
  document.getElementById("whatsappReceiptLink").href = waUrl;

  // Clear cart & close checkout
  closeCheckoutModal();
  State.cart = [];
  State.activePromo = null;
  saveCartToStorage();
  renderCart();

  // Open success modal
  document.getElementById("successOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function sendWhatsAppOrderDirect() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const slot = document.getElementById("deliverySlot").value;
  const payment = document.getElementById("paymentMethod").value;
  const notes = document.getElementById("deliveryNotes").value.trim();

  if (!name || !phone || !address) {
    showToast("Please enter your name, phone, and address first!", "error");
    return;
  }

  const { grandTotal } = getCartCalculations();
  const orderId = "MT-" + Math.floor(100000 + Math.random() * 900000);
  const waMessage = formatWhatsAppOrderMessage(orderId, name, phone, address, slot, payment, notes, grandTotal);
  const waUrl = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;
  
  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");

  // Also submit form locally
  handleCheckoutSubmit(new Event("submit"));
}

function formatWhatsAppOrderMessage(orderId, name, phone, address, slot, payment, notes, total) {
  let msg = `✨ *NEW ORDER: ${orderId}* ✨\n`;
  msg += `*Murtuza's Table - Fresh Homemade Kitchen*\n\n`;
  msg += `👤 *Customer:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  msg += `📍 *Delivery Address:* ${address}\n`;
  msg += `⏰ *Slot:* ${slot}\n`;
  msg += `💳 *Payment Method:* ${payment}\n`;
  if (notes) msg += `📝 *Notes/Landmark:* ${notes}\n`;
  msg += `\n*🍽️ ORDERED DISHES:*\n`;

  State.cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.quantity}x ${item.name}\n   • ${item.portionName} | Spice: ${item.spice}\n   • Rs ${(item.price * item.quantity).toLocaleString()}\n`;
    if (item.notes) msg += `   • Special note: "${item.notes}"\n`;
  });

  const { subtotal, discount, deliveryFee } = getCartCalculations();
  msg += `\n-------------------------\n`;
  msg += `Subtotal: Rs ${subtotal.toLocaleString()}\n`;
  if (discount > 0) msg += `Discount (${State.activePromo?.label || 'Code'}): -Rs ${discount.toLocaleString()}\n`;
  msg += `Delivery Fee: ${deliveryFee === 0 ? 'FREE' : 'Rs ' + deliveryFee.toLocaleString()}\n`;
  msg += `*Grand Total: Rs ${total.toLocaleString()}*\n`;
  msg += `-------------------------\n`;
  msg += `Please confirm my order ticket and let me know the preparation time! ❤️🍲`;

  return msg;
}

// ===================================================================
// 8. Tiffin Subscription Modal & Inquiry
// ===================================================================
function openTiffinModal(planName) {
  document.getElementById("tiffinModalTitle").textContent = `${planName} Inquiry`;
  document.getElementById("tiffinModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeTiffinModal() {
  document.getElementById("tiffinModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function handleTiffinInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById("tiffinName").value.trim();
  const phone = document.getElementById("tiffinPhone").value.trim();
  const area = document.getElementById("tiffinArea").value.trim();
  const diet = document.getElementById("tiffinDiet").value.trim();
  const title = document.getElementById("tiffinModalTitle").textContent;

  let msg = `🥗 *DAILY TIFFIN INQUIRY* 🥗\n`;
  msg += `Hi Murtuza's Table, I would like to subscribe to the *${title}*.\n\n`;
  msg += `👤 Name: ${name}\n`;
  msg += `📞 WhatsApp: ${phone}\n`;
  msg += `📍 Delivery Area / Office: ${area}\n`;
  if (diet) msg += `🍽️ Preferences: ${diet}\n`;
  msg += `\nPlease share the starting date, payment details, and this week's full lunch schedule!`;

  const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
  closeTiffinModal();
  showToast("Inquiry generated! Redirecting to WhatsApp...", "success");
}

// ===================================================================
// 9. Event Listeners & Interactive Filters
// ===================================================================
function setupEventListeners() {
  // Category tabs
  const catTabs = document.getElementById("categoryTabs");
  if (catTabs) {
    catTabs.addEventListener("click", e => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      State.currentCategory = btn.dataset.category;
      renderDishes();
    });
  }

  // Diet toggles
  document.querySelectorAll(".diet-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".diet-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      State.currentDiet = pill.dataset.diet;
      renderDishes();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("sortBySelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      State.sortBy = e.target.value;
      renderDishes();
    });
  }

  // Search input
  const quickSearch = document.getElementById("quickSearchInput");
  if (quickSearch) {
    quickSearch.addEventListener("input", e => {
      State.searchQuery = e.target.value;
      renderDishes();
    });
  }

  // Reset filters button
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      State.currentCategory = "all";
      State.currentDiet = "all";
      State.searchQuery = "";
      if (quickSearch) quickSearch.value = "";
      document.querySelectorAll(".category-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
      document.querySelectorAll(".diet-pill").forEach(p => p.classList.toggle("active", p.dataset.diet === "all"));
      renderDishes();
    });
  }

  // Cart Drawer open/close
  document.getElementById("openCartBtn").addEventListener("click", openCart);
  document.getElementById("closeCartBtn").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);

  // Mobile cart trigger
  const mobileCartTrigger = document.getElementById("mobileCartTrigger");
  if (mobileCartTrigger) mobileCartTrigger.addEventListener("click", openCart);

  // Quick View Modal Quantity Controls
  document.getElementById("qvQtyMinus").addEventListener("click", () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      document.getElementById("qvQtyVal").textContent = currentModalQty;
      updateQuickViewPrice();
    }
  });

  document.getElementById("qvQtyPlus").addEventListener("click", () => {
    if (currentModalQty < 20) {
      currentModalQty++;
      document.getElementById("qvQtyVal").textContent = currentModalQty;
      updateQuickViewPrice();
    }
  });

  // Quick view add to cart
  document.getElementById("qvAddToCartBtn").addEventListener("click", () => {
    if (!State.activeDishForModal) return;
    const selectedPortion = State.activeDishForModal.portions[selectedPortionIndex];
    const spice = document.querySelector('input[name="qvSpice"]:checked')?.value || "Medium";
    const notes = document.getElementById("qvSpecialNotes").value.trim();

    addToCartInternal(State.activeDishForModal, selectedPortion, spice, notes, currentModalQty);
    closeQuickView();
    showToast(`Added ${currentModalQty}x "${State.activeDishForModal.name}" to your tiffin!`, "success");
    openCart();
  });

  // Quick View Close
  document.getElementById("closeQuickViewBtn").addEventListener("click", closeQuickView);
  document.getElementById("quickViewOverlay").addEventListener("click", e => {
    if (e.target.id === "quickViewOverlay") closeQuickView();
  });

  // Checkout Modal triggers
  document.getElementById("openCheckoutModalBtn").addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutBtn").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutOverlay").addEventListener("click", e => {
    if (e.target.id === "checkoutOverlay") closeCheckoutModal();
  });

  // Checkout form submit
  document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);
  document.getElementById("whatsappOrderBtn").addEventListener("click", sendWhatsAppOrderDirect);

  // Success Modal close
  document.getElementById("closeSuccessBtn").addEventListener("click", () => {
    document.getElementById("successOverlay").classList.remove("active");
    document.body.style.overflow = "";
  });

  // Tiffin Modal Close
  document.getElementById("closeTiffinModalBtn").addEventListener("click", closeTiffinModal);
  document.getElementById("tiffinModalOverlay").addEventListener("click", e => {
    if (e.target.id === "tiffinModalOverlay") closeTiffinModal();
  });
  document.getElementById("tiffinInquiryForm").addEventListener("submit", handleTiffinInquirySubmit);

  // Coupon Application
  document.getElementById("applyCouponBtn").addEventListener("click", handleCouponApply);

  // Newsletter form
  const nlForm = document.getElementById("newsletterForm");
  if (nlForm) {
    nlForm.addEventListener("submit", e => {
      e.preventDefault();
      showToast("Subscribed! You'll receive Sunday special notices on WhatsApp.", "success");
      nlForm.reset();
    });
  }

  // Mobile menu button
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      if (nav.style.display === "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "100%";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#FBF9F5";
        nav.style.padding = "20px";
        nav.style.borderBottom = "1px solid #E8E2D9";
        nav.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
      }
    });
  }
}

// ===================================================================
// 10. Coupon System Handler
// ===================================================================
function handleCouponApply() {
  const input = document.getElementById("couponInput");
  const msgEl = document.getElementById("promoMessage");
  const code = input.value.trim().toUpperCase();

  if (!code) {
    msgEl.className = "promo-message error";
    msgEl.textContent = "Please enter a promo code.";
    return;
  }

  if (COUPONS[code]) {
    State.activePromo = COUPONS[code];
    msgEl.className = "promo-message success";
    msgEl.textContent = `Applied: ${COUPONS[code].label}!`;
    renderCart();
    showToast(`Promo ${code} applied successfully!`, "success");
  } else {
    msgEl.className = "promo-message error";
    msgEl.textContent = "Invalid code. Try 'HOMELOVE' or 'FIRSTBITE'.";
  }
}

// ===================================================================
// 11. FAQ Accordion Interaction
// ===================================================================
function setupFAQAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const q = item.querySelector(".faq-question");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

// Quick filter jump from footer
function filterCategoryFromFooter(catName) {
  State.currentCategory = catName;
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === catName);
  });
  renderDishes();
}

// ===================================================================
// 12. Elegant Toast Notification System
// ===================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : ""}`;
  
  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check"></i>' 
    : '<i class="fa-solid fa-bell"></i>';

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideToastOut 0.3s forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
