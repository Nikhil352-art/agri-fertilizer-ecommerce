// Data structures and sample data
  const products = [
    {
      id: 'p1',
      name: 'Organic Nitrogen Fertilizer',
      description: 'High-quality nitrogen fertilizer suitable for all soil types. Enhances plant growth and yield.',
      price: 34.99,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17bfcf32-f4a3-4a10-aa2c-7ad69accb2cf.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c68ea851-5aa7-4b3a-88dd-8fd2b0641ca1.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dac8876e-827b-494a-a2ce-b5a3bbfcbf74.png'
      ],
      category: 'fertilizers',
      brand: 'AgriGrow',
      rating: 4.7,
      reviews: ['r1','r2','r3','r4'],
      stock: 25,
      variants: [
        { id: 'v1', name: '5kg Bag', price: 34.99, stock: 10 },
        { id: 'v2', name: '10kg Bag', price: 59.99, stock: 15 },
      ],
      tags: ['nitrogen', 'organic','eco-friendly']
    },
    {
      id: 'p2',
      name: 'Phosphorus Enriched Fertilizer',
      description: 'Boost phosphorus levels for stronger root development and higher crop yield.',
      price: 40.00,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ddc3e635-eca9-4def-aaed-bae4d2246cc1.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dcaea77-45b2-4127-8fac-3760886e49e9.png'
      ],
      category: 'fertilizers',
      brand: 'FieldSmart',
      rating: 4.3,
      reviews: ['r5','r6','r7'],
      stock: 12,
      variants: [{ id: 'v3', name: 'Bulk 20kg', price: 40.00, stock: 12 }],
      tags: ['phosphorus', 'bulk']
    },
    {
      id: 'p3',
      name: 'Precision Sprayer Tool',
      description: 'Ergonomic and efficient sprayer tool for precise application of fertilizers and pesticides.',
      price: 85.50,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1eceb2bb-d094-4506-9610-f6e005974837.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3abf5cbc-e610-424b-a4ce-64be7a0f0a88.png'
      ],
      category: 'tools',
      brand: 'AgriTools',
      rating: 4.8,
      reviews: ['r8','r9'],
      stock: 30,
      variants: [{ id: 'v4', name: 'Standard', price: 85.50, stock: 30 }],
      tags: ['sprayer', 'tool']
    },
    {
      id: 'p4',
      name: 'Durable Garden Shovel',
      description: 'High-quality shovel with durable steel blade and ergonomic handle for easy digging and planting.',
      price: 27.99,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5479d69-eb63-48f3-9612-c67a70b91655.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e07f34f-3e06-4bcc-89c4-c158c14da87a.png'
      ],
      category: 'tools',
      brand: 'FieldSmart',
      rating: 4.1,
      reviews: ['r10'],
      stock: 50,
      variants: [{ id: 'v5', name: 'One Size', price: 27.99, stock: 50 }],
      tags: ['shovel', 'tool', 'garden']
    },
    {
      id: 'p5',
      name: 'Tomato Seeds - Heirloom',
      description: 'Premium heirloom tomato seeds known for rich flavor and high yield.',
      price: 9.99,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b9fd5b9-2bc8-43f0-86b4-f4d3f17e05fe.png',
      ],
      category: 'seeds',
      brand: 'GreenSeed',
      rating: 4.5,
      reviews: ['r11','r12'],
      stock: 150,
      variants: [{ id: 'v6', name: 'Packet of 100 seeds', price: 9.99, stock: 150 }],
      tags: ['tomato', 'seeds', 'heirloom']
    },
    {
      id: 'p6',
      name: 'Corn Seeds - Hybrid',
      description: 'High-yield corn hybrid seeds resistant to common pests and diseases.',
      price: 12.00,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca4a9a9c-9081-4fe4-b029-db8da1aaeb12.png',
      ],
      category: 'seeds',
      brand: 'GreenSeed',
      rating: 4.0,
      reviews: ['r13'],
      stock: 120,
      variants: [{ id: 'v7', name: 'Packet of 200 seeds', price: 12.00, stock: 120 }],
      tags: ['corn', 'seeds', 'hybrid']
    },
  ];

  const reviews = [
    { id: 'r1', productId: 'p1', userId: 'u1', rating: 5, comment: 'Great fertilizer, my plants grew healthier!', helpful: 4, verified: true, createdAt: '2023-03-01' },
    { id: 'r2', productId: 'p1', userId: 'u2', rating: 4, comment: 'Good quality but a bit pricey.', helpful: 2, verified: false, createdAt: '2023-02-15' },
    { id: 'r3', productId: 'p1', userId: 'u3', rating: 5, comment: 'Highly recommend for organic farming.', helpful: 5, verified: true, createdAt: '2023-01-25' },
    { id: 'r4', productId: 'p1', userId: 'u4', rating: 4, comment: 'Effective and easy to use.', helpful: 3, verified: true, createdAt: '2023-02-28' },
    { id: 'r5', productId: 'p2', userId: 'u5', rating: 4, comment: 'Really helped boost my crops.', helpful: 1, verified: true, createdAt: '2023-03-05' },
    { id: 'r6', productId: 'p2', userId: 'u6', rating: 5, comment: 'Excellent phosphorus content.', helpful: 2, verified: false, createdAt: '2023-03-10' },
    { id: 'r7', productId: 'p2', userId: 'u3', rating: 3, comment: 'Good but not as advertised.', helpful: 0, verified: false, createdAt: '2023-02-21' },
    { id: 'r8', productId: 'p3', userId: 'u1', rating: 5, comment: 'The sprayer makes application super easy.', helpful: 7, verified: true, createdAt: '2023-04-01' },
    { id: 'r9', productId: 'p3', userId: 'u7', rating: 4, comment: 'Good tool but could be more durable.', helpful: 3, verified: true, createdAt: '2023-03-20' },
    { id: 'r10', productId: 'p4', userId: 'u8', rating: 4, comment: 'Shovel is light and easy to handle.', helpful: 2, verified: true, createdAt: '2023-02-28' },
    { id: 'r11', productId: 'p5', userId: 'u9', rating: 5, comment: 'Awesome seeds, excellent germination rate!', helpful: 4, verified: true, createdAt: '2023-04-05' },
    { id: 'r12', productId: 'p5', userId: 'u10', rating: 4, comment: 'Good flavor, quite satisfied.', helpful: 2, verified: false, createdAt: '2023-03-22' },
    { id: 'r13', productId: 'p6', userId: 'u11', rating: 4, comment: 'Decent seeds, still waiting for yield.', helpful: 1, verified: false, createdAt: '2023-03-18' }
  ];

  const users = [
    {
      id: 'u1',
      email: 'alice@example.com',
      name: 'Alice Farmer',
      addresses: [
        { id: 'a1', street: '123 Farm Lane', city: 'AgriCity', state: 'AgriState', zip: '12345', country: 'Agriland' }
      ],
      paymentMethods: [
        { id: 'pm1', type: 'Visa', last4: '1234', expiry: '2025-07' }
      ],
      wishlist: [],
      orderHistory: []
    }
  ];

  // Cart store
  let cart = [];

  // Store filters and state
  let filters = {
    categories: ['fertilizers', 'tools', 'seeds'],
    priceMin: null,
    priceMax: null,
    minRating: 0,
    brands: [],
  };
  let filteredProducts = [];
  let currentPage = 1;
  const pageSize = 8;
  let currentSort = 'default';

  // DOM refs
  const productGrid = document.getElementById('product-grid');
  const productsCount = document.getElementById('products-count');
  const pagination = document.getElementById('pagination');
  const cartCount = document.getElementById('cart-count');
  const cartButton = document.getElementById('cart-button');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const checkoutButton = document.getElementById('checkout-button');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const filtersSidebar = document.getElementById('filters-sidebar');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');

  // Utility: format price as currency
  function formatPrice(value) {
    return `INR ${value.toFixed(2)}`;
  }

  // Utility: calculate average rating for product
  function calculateAvgRating(product) {
    const productReviews = reviews.filter(r => r.productId === product.id);
    if (productReviews.length === 0) return 0;
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / productReviews.length);
  }

  // Build brand filters dynamically
  function buildBrandFilters() {
    const brandFiltersContainer = document.getElementById('brand-filters');
    const brandsSet = new Set(products.map(p => p.brand));
    const brands = Array.from(brandsSet).sort();
    brandFiltersContainer.innerHTML = '';
    brands.forEach(brand => {
      const id = `filter-brand-${brand.toLowerCase().replace(/\s+/g,'-')}`;
      const checked = filters.brands.length === 0 || filters.brands.includes(brand);
      const div = document.createElement('div');
      div.className = 'filter-item';
      div.innerHTML = `
        <input type="checkbox" id="${id}" value="${brand}" ${checked ? 'checked' : ''} />
        <label for="${id}">${brand}</label>
      `;
      brandFiltersContainer.appendChild(div);
    });
  }

  // Apply filters to product list
  function applyFilters() {
    let result = products.slice();

    // Categories filter
    if(filters.categories.length > 0){
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceMin != null) {
      result = result.filter(p => {
        // use cheapest variant or product price
        const mins = p.variants ? p.variants.map(v => v.price) : [p.price];
        const minPrice = Math.min(...mins);
        return minPrice >= filters.priceMin;
      });
    }
    if (filters.priceMax != null) {
      result = result.filter(p => {
        const maxs = p.variants ? p.variants.map(v => v.price) : [p.price];
        const maxPrice = Math.max(...maxs);
        return maxPrice <= filters.priceMax;
      });
    }

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter(p => calculateAvgRating(p) >= filters.minRating);
    }

    // Brands filter
    if (filters.brands.length > 0) {
      result = result.filter(p => filters.brands.includes(p.brand));
    }

    // Search filter
    const query = searchInput.value.trim().toLowerCase();
    if(query.length>0) {
      result = result.filter(p => {
        return p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
      });
    }

    filteredProducts = result;
    currentPage = 1;
    renderProducts();
    renderPagination();
    updateProductsCount();
  }

  // Update text count for filtered products
  function updateProductsCount() {
    const count = filteredProducts.length;
    productsCount.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
  }

  // Sorting products
  function sortProducts() {
    switch(currentSort) {
      case 'price-asc':
        filteredProducts.sort((a,b) => {
          const aPrice = a.variants ? Math.min(...a.variants.map(v => v.price)) : a.price;
          const bPrice = b.variants ? Math.min(...b.variants.map(v => v.price)) : b.price;
          return aPrice - bPrice;
        });
        break;
      case 'price-desc':
        filteredProducts.sort((a,b) => {
          const aPrice = a.variants ? Math.max(...a.variants.map(v => v.price)) : a.price;
          const bPrice = b.variants ? Math.max(...b.variants.map(v => v.price)) : b.price;
          return bPrice - aPrice;
        });
        break;
      case 'rating-desc':
        filteredProducts.sort((a,b) => calculateAvgRating(b) - calculateAvgRating(a));
        break;
      case 'rating-asc':
        filteredProducts.sort((a,b) => calculateAvgRating(a) - calculateAvgRating(b));
        break;
      default:
        // keep initial order or sort by name asc
        filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
    }
  }

  // Render products grid
  function renderProducts() {
    sortProducts();
    productGrid.innerHTML = '';
    if(filteredProducts.length === 0) {
      productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#6b7280;">No products match the filters or search.</p>';
      return;
    }
    const start = (currentPage-1)*pageSize;
    const end = start + pageSize;
    const pageProducts = filteredProducts.slice(start, end);
    
    pageProducts.forEach(product => {
      const avgRating = calculateAvgRating(product);
      const reviewCount = reviews.filter(r => r.productId === product.id).length;
      // Use featured variant or first variant or product price
      const priceDisplay = product.variants && product.variants.length > 0 ? formatPrice(product.variants[0].price) : formatPrice(product.price);
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-label', `${product.name}, ${priceDisplay}`);
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${product.images[0]}" alt="${product.name} image" loading="lazy" />
          <div class="product-actions">
            <button class="icon-button btn-quick-view" aria-label="Quick view of ${product.name}" data-product-id="${product.id}">
              <span class="material-icons">visibility</span>
            </button>
            <button class="icon-button btn-add-wishlist" aria-label="Add ${product.name} to wishlist" data-product-id="${product.id}">
              <span class="material-icons">favorite_border</span>
            </button>
          </div>
        </div>
        <div class="product-content">
          <div class="product-category">${product.category}</div>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-brand">${product.brand}</div>
          <div class="product-price">${priceDisplay}</div>
          <div class="product-rating" aria-label="Rating ${avgRating.toFixed(1)} out of 5 stars">
            ${renderStars(avgRating)}
            <span class="reviews-count">(${reviewCount})</span>
          </div>
          <button class="add-to-cart-btn" aria-label="Add ${product.name} to cart" data-product-id="${product.id}" style="margin-top:8px;">Add to Cart</button>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Render star rating html
  function renderStars(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    for(let i=1; i<=5; i++) {
      if(i <= fullStars) {
        html += '<span class="material-icons star-icon" aria-hidden="true">star</span>';
      } else if (i === fullStars + 1 && halfStar) {
        html += '<span class="material-icons star-icon" aria-hidden="true">star_half</span>';
      } else {
        html += '<span class="material-icons star-icon" aria-hidden="true">star_border</span>';
      }
    }
    return html;
  }

  // Pagination render
  function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    if(totalPages <= 1) return;

    function createPageBtn(page, text = null) {
      const btn = document.createElement('button');
      btn.textContent = text || page;
      btn.disabled = (page === currentPage);
      btn.className = (page === currentPage) ? 'active-page' : '';
      btn.addEventListener('click', () => {
        currentPage = page;
        renderProducts();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      btn.setAttribute('aria-label', `Go to page ${page}`);
      return btn;
    }
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹ Prev';
    prevBtn.disabled = currentPage === 1;
    prevBtn.setAttribute('aria-label', 'Previous page');
    prevBtn.addEventListener('click', () => {
      if(currentPage > 1) {
        currentPage--;
        renderProducts();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    pagination.appendChild(prevBtn);

    // Pages - show max 5 pages with current in center if possible
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, totalPages);
    if(endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    for(let i = startPage; i <= endPage; i++){
      pagination.appendChild(createPageBtn(i));
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next ›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.setAttribute('aria-label', 'Next page');
    nextBtn.addEventListener('click', () => {
      if(currentPage < totalPages) {
        currentPage++;
        renderProducts();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    pagination.appendChild(nextBtn);
  }

  // Add item to cart
  function addToCart(productId, variantId = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if(!product) return;
    let variant = null;
    if(variantId && product.variants) {
      variant = product.variants.find(v => v.id === variantId);
      if(!variant) variant = null;
    }
    const priceToUse = variant ? variant.price : product.price;

    const existingIndex = cart.findIndex(item => item.productId === productId && item.variantId === (variantId || null));
    if(existingIndex !== -1) {
      // Update quantity with stock check
      const existingItem = cart[existingIndex];
      const newQty = existingItem.quantity + quantity;
      const stockLimit = variant ? variant.stock : product.stock;
      if(newQty <= stockLimit) {
        cart[existingIndex].quantity = newQty;
      } else {
        alert(`Maximum stock limit (${stockLimit}) reached for ${product.name}`);
        return;
      }
    } else {
      const stockLimit = variant ? variant.stock : product.stock;
      if(quantity > stockLimit){
        alert(`Only ${stockLimit} units are available in stock for ${product.name}`);
        return;
      }
      cart.push({
        id: crypto.randomUUID(),
        productId,
        variantId: variantId || null,
        quantity,
        price: priceToUse,
        addedAt: new Date().toISOString()
      });
    }
    renderCart();
    updateCartCount();
    showCartNotification(product.name);
  }

  // Remove item from cart
  function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    renderCart();
    updateCartCount();
  }

  // Update cart quantity
  function updateCartQuantity(itemId, newQty) {
    if(newQty < 1) return;
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if(itemIndex === -1) return;
    const item = cart[itemIndex];
    const product = products.find(p => p.id === item.productId);
    if(!product) return;
    const variant = item.variantId ? product.variants.find(v => v.id === item.variantId) : null;
    const stockLimit = variant ? variant.stock : product.stock;
    if(newQty > stockLimit) {
      alert(`Cannot add more than ${stockLimit} units in stock for ${product.name}`);
      return;
    }
    cart[itemIndex].quantity = newQty;
    renderCart();
    updateCartCount();
  }

  // Render cart sidebar
  function renderCart() {
    cartItemsList.innerHTML = '';
    if(cart.length === 0){
      cartItemsList.innerHTML = '<p style="text-align:center; color:#6b7280; margin-top:32px;">Your cart is empty.</p>';
      cartTotalPrice.textContent = formatPrice(0);
      checkoutButton.disabled = true;
      return;
    }

    let total = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if(!product) return;
      const variant = item.variantId ? product.variants.find(v => v.id === item.variantId) : null;
      const imageUrl = product.images[0];
      const variantText = variant ? variant.name : '';
      const price = item.price * item.quantity;
      total += price;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <div class="cart-item-image">
          <img src="${imageUrl}" alt="${product.name} image" width="64" height="64" loading="lazy" />
        </div>
        <div class="cart-item-content">
          <div class="cart-item-title">${product.name}</div>
          <div class="cart-item-variant">${variantText}</div>
          <div class="cart-item-price">${formatPrice(price)}</div>
          <div class="cart-item-qty-controls" aria-label="Quantity controls for ${product.name}">
            <button class="cart-qty-button btn-decrease" aria-label="Decrease quantity" data-id="${item.id}">–</button>
            <div class="cart-qty-display" aria-live="polite" aria-atomic="true">${item.quantity}</div>
            <button class="cart-qty-button btn-increase" aria-label="Increase quantity" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" aria-label="Remove ${product.name} from cart" data-id="${item.id}">&times;</button>
      `;
      cartItemsList.appendChild(itemDiv);
    });
    cartTotalPrice.textContent = formatPrice(total);
    checkoutButton.disabled = false;
  }

  // Update cart count in header
  function updateCartCount() {
    const totalItems = cart.reduce((acc,item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
    if(totalItems === 0){
      cartCount.style.display = 'none';
    } else {
      cartCount.style.display = 'inline-block';
    }
  }

  // Show cart notification for product added
  function showCartNotification(productName) {
    // Simple alert or advanced toast can be implemented, here simple alert for demonstration
    // To be replaced with toast notification in production
    //alert(`${productName} added to cart.`);
  }

  // Toggle cart sidebar visibility
  function toggleCartSidebar() {
    const expanded = cartButton.getAttribute('aria-expanded') === 'true';
    if(expanded) {
      cartSidebar.setAttribute('hidden', 'true');
      cartButton.setAttribute('aria-expanded', 'false');
    } else {
      cartSidebar.removeAttribute('hidden');
      cartButton.setAttribute('aria-expanded', 'true');
      cartSidebar.focus();
    }
  }

  // Clear filters and reset inputs
  function clearFilters() {
    // Reset filters object
    filters = {
      categories: ['fertilizers', 'tools', 'seeds'],
      priceMin: null,
      priceMax: null,
      minRating: 0,
      brands: [],
    };
    // Reset form inputs
    document.querySelectorAll('#filters-sidebar input[type="checkbox"]').forEach(cb => {
      if(cb.value==='fertilizers' || cb.value==='tools' || cb.value==='seeds'){
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    });
    const brandInputs = document.querySelectorAll('#brand-filters input[type="checkbox"]');
    brandInputs.forEach(cb => cb.checked = true);
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    document.getElementById('rating-filter').value = '0';
    searchInput.value = '';
    filters.brands = [];
    filters.minRating = 0;
    updateFiltersFromInputs();
    applyFilters();
  }

  // Update filters object from UI inputs
  function updateFiltersFromInputs() {
    // Categories
    const categoryInputs = document.querySelectorAll('#filters-sidebar input[type="checkbox"]:checked');
    filters.categories = Array.from(categoryInputs).filter(i => ['fertilizers','tools','seeds'].includes(i.value)).map(i => i.value);

    // Brands
    const brandInputs = document.querySelectorAll('#brand-filters input[type="checkbox"]:checked');
    filters.brands = Array.from(brandInputs).map(i => i.value);

    // Price
    let minVal = parseFloat(document.getElementById('price-min').value.trim());
    let maxVal = parseFloat(document.getElementById('price-max').value.trim());
    filters.priceMin = isNaN(minVal) ? null : minVal;
    filters.priceMax = isNaN(maxVal) ? null : maxVal;

    // Rating
    const ratingVal = parseInt(document.getElementById('rating-filter').value, 10);
    filters.minRating = isNaN(ratingVal) ? 0 : ratingVal;
  }

  // Event Handlers
  function setupEventListeners() {
    // Navigation category links
    document.querySelectorAll('nav.main-nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        // Activate clicked, deactivate others
        document.querySelectorAll('nav.main-nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const cat = link.dataset.category;
        if(cat === 'all') {
          filters.categories = ['fertilizers', 'tools', 'seeds'];
        } else {
          filters.categories = [cat];
        }
        // Reflect checkboxes
        document.getElementById('filter-cat-fertilizers').checked = filters.categories.includes('fertilizers');
        document.getElementById('filter-cat-tools').checked = filters.categories.includes('tools');
        document.getElementById('filter-cat-seeds').checked = filters.categories.includes('seeds');
        applyFilters();
      });
    });

    // Filters checkbox inputs updates
    filtersSidebar.addEventListener('change', (e) => {
      if(e.target && e.target.matches('input[type="checkbox"]')) {
        updateFiltersFromInputs();
        applyFilters();
      }
    });

    // Price inputs
    document.getElementById('price-min').addEventListener('input', e => {
      updateFiltersFromInputs();
      applyFilters();
    });
    document.getElementById('price-max').addEventListener('input', e => {
      updateFiltersFromInputs();
      applyFilters();
    });

    // Rating filter dropdown
    document.getElementById('rating-filter').addEventListener('change', e => {
      updateFiltersFromInputs();
      applyFilters();
    });

    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
      clearFilters();
    });

    // Search input debounced
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        applyFilters();
      }, 400);
    });

    // Sort select
    sortSelect.addEventListener('change', e => {
      currentSort = e.target.value;
      renderProducts();
      renderPagination();
    });

    // Add to cart buttons & quick-view & wishlist
    productGrid.addEventListener('click', e => {
      const target = e.target.closest('button');
      if(!target) return;

      const productId = target.dataset.productId;
      if(!productId) return;

      if(target.classList.contains('add-to-cart-btn')) {
        addToCart(productId);
      } else if(target.classList.contains('btn-quick-view')) {
        // Show quick view modal
        openProductModal(productId);
      } else if(target.classList.contains('btn-add-wishlist')) {
        toggleWishlist(productId, target);
      }
    });

    // Cart button toggle
    cartButton.addEventListener('click', e => {
      toggleCartSidebar();
    });

    // Cart remove and qty buttons
    cartItemsList.addEventListener('click', e => {
      const target = e.target;
      const itemId = target.dataset.id;
      if(!itemId) return;

      if(target.classList.contains('cart-item-remove')) {
        removeFromCart(itemId);
      } else if(target.classList.contains('btn-increase')) {
        const item = cart.find(i => i.id === itemId);
        if(item) updateCartQuantity(itemId, item.quantity + 1);
      } else if(target.classList.contains('btn-decrease')) {
        const item = cart.find(i => i.id === itemId);
        if(item && item.quantity > 1) updateCartQuantity(itemId, item.quantity - 1);
      }
    });

    // Modal close
    modalBackdrop.addEventListener('click', e => {
      if(e.target === modalBackdrop) closeModal();
    });
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if((e.key === 'Escape' || e.key === 'Esc') && modalBackdrop.classList.contains('show')) {
        closeModal();
      }
      if(e.key === 'Escape' && checkoutOverlay.classList.contains('show')) {
        closeCheckout();
      }
    });

    // Checkout button
    checkoutButton.addEventListener('click', () => {
      openCheckout();
    });

    // Checkout overlay buttons
    document.getElementById('checkout-back-btn').addEventListener('click', onCheckoutBack);
    document.getElementById('checkout-next-btn').addEventListener('click', onCheckoutNext);
    document.getElementById('checkout-form').addEventListener('submit', onCheckoutSubmit);
  }

  // Wishlist state
  let wishlist = new Set();

  // Toggle wishlist for a product
  function toggleWishlist(productId, btn) {
    if(wishlist.has(productId)){
      wishlist.delete(productId);
      btn.querySelector('span.material-icons').textContent = 'favorite_border';
      btn.classList.remove('wishlist-active');
    } else {
      wishlist.add(productId);
      btn.querySelector('span.material-icons').textContent = 'favorite';
      btn.classList.add('wishlist-active');
    }
  }

  // Modal functions
  function openModal(contentHtml, title = '') {
    modalBackdrop.innerHTML = `
      <div class="modal" role="document" tabindex="0" aria-labelledby="modal-title">
        <button type="button" class="modal-close-button" aria-label="Close modal">&times;</button>
        ${title ? `<h2 id="modal-title">${title}</h2>` : ''}
        <div class="modal-content">${contentHtml}</div>
      </div>
    `;
    modalBackdrop.classList.add('show');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    const modalCloseBtn = modalBackdrop.querySelector('.modal-close-button');
    modalCloseBtn.focus();
    modalCloseBtn.addEventListener('click', closeModal);
    trapFocus(modalBackdrop.querySelector('.modal'));
  }
  function closeModal() {
    modalBackdrop.classList.remove('show');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    modalBackdrop.innerHTML = '';
  }

  // Trap focus in modal
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    element.addEventListener('keydown', (e) => {
      if(e.key !== 'Tab') return;
      if(e.shiftKey) { // Shift + Tab
        if(document.activeElement === firstFocusable){
          lastFocusable.focus();
          e.preventDefault();
        }
      } else { // Tab
        if(document.activeElement === lastFocusable){
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });
  }

  // Open product quick view modal
  function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    let selectedVariantId = product.variants && product.variants.length > 0 ? product.variants[0].id : null;
    let quantity = 1;
    let selectedImage = product.images[0];

    // Build variant buttons
    const variantsHtml = (product.variants && product.variants.length > 0) ? product.variants.map(v => {
      return `<button type="button" class="variant-button ${v.id === selectedVariantId ? 'selected' : ''}" data-variant-id="${v.id}">${v.name}</button>`;
    }).join('') : '';

    // Build Reviews HTML
    const productReviews = reviews.filter(r => r.productId === product.id);
    let reviewsHtml = '';
    if(productReviews.length > 0){
      reviewsHtml = productReviews.map(r => {
        const stars = renderStars(r.rating);
        const userName = users.find(u => u.id === r.userId)?.name || 'Anonymous';
        return `
          <div class="review-item">
            <div class="review-header">
              <div class="reviewer-name">${userName}</div>
              <div class="review-rating" aria-label="Rating: ${r.rating} stars">${stars}</div>
              <time datetime="${r.createdAt}" class="review-date">${new Date(r.createdAt).toLocaleDateString()}</time>
            </div>
            <p class="review-comment">${r.comment}</p>
          </div>
        `;
      }).join('');
    } else {
      reviewsHtml = '<p>No reviews yet.</p>';
    }

    const modalHtml = `
      <div class="modal-product-content">
        <div class="modal-product-images" aria-label="Product images for ${product.name}">
          <img src="${selectedImage}" alt="${product.name}" class="modal-main-image" id="modal-main-image" tabindex="0" />
          <div class="modal-thumbnails" role="list">
            ${product.images.map((img, i) => `
              <img src="${img}" alt="${product.name} thumbnail ${i+1}" class="modal-thumbnail ${img === selectedImage ? 'active' : ''}" role="listitem" tabindex="0" />
            `).join('')}
          </div>
        </div>
        <div class="modal-product-details">
          <h3 class="modal-product-title">${product.name}</h3>
          <div class="modal-product-price" id="modal-price">${formatPrice(product.price)}</div>
          <p class="modal-product-description">${product.description}</p>
          ${product.variants && product.variants.length > 0 ? `
            <div class="modal-product-variants" role="radiogroup" aria-label="Select a variant">
              ${variantsHtml}
            </div>
          ` : ''}
          <div class="modal-product-actions">
            <div class="quantity-selector" aria-label="Select quantity">
              <button type="button" class="qty-btn" id="qty-decrease" aria-label="Decrease quantity">–</button>
              <div class="qty-display" id="qty-display" aria-live="polite" aria-atomic="true">1</div>
              <button type="button" class="qty-btn" id="qty-increase" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="add-to-cart-btn" id="modal-add-to-cart" aria-label="Add to cart">Add to Cart</button>
          </div>
          <section class="reviews-section" aria-label="Product reviews">
            <h4 class="reviews-title">Reviews</h4>
            ${reviewsHtml}
          </section>
        </div>
      </div>
    `;

    openModal(modalHtml, product.name);

    // Modal element references
    const modalEl = modalBackdrop.querySelector('.modal');
    const mainImage = modalEl.querySelector('#modal-main-image');
    const thumbnails = Array.from(modalEl.querySelectorAll('.modal-thumbnail'));
    const variantButtons = Array.from(modalEl.querySelectorAll('.variant-button'));
    const priceEl = modalEl.querySelector('#modal-price');
    const qtyDisplay = modalEl.querySelector('#qty-display');
    const qtyDecreaseBtn = modalEl.querySelector('#qty-decrease');
    const qtyIncreaseBtn = modalEl.querySelector('#qty-increase');
    const addToCartBtn = modalEl.querySelector('#modal-add-to-cart');

    // Thumbnail click change main image
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        selectedImage = thumb.src;
        mainImage.src = selectedImage;
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      thumb.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          thumb.click();
        }
      });
    });

    // Variant select
    variantButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedVariantId = button.dataset.variantId;
        variantButtons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
        const variant = product.variants.find(v => v.id === selectedVariantId);
        if(variant) priceEl.textContent = formatPrice(variant.price);
        quantity = 1;
        qtyDisplay.textContent = '1';
      });
    });

    // Quantity buttons
    qtyDecreaseBtn.addEventListener('click', () => {
      if(quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });
    qtyIncreaseBtn.addEventListener('click', () => {
      // Check stock limit
      const variant = product.variants && selectedVariantId ? product.variants.find(v => v.id === selectedVariantId) : null;
      const stockLimit = variant ? variant.stock : product.stock;
      if(quantity < stockLimit) {
        quantity++;
        qtyDisplay.textContent = quantity;
      } else {
        alert(`Maximum stock limit (${stockLimit}) reached`);
      }
    });

    // Add to cart from modal
    addToCartBtn.addEventListener('click', () => {
      addToCart(product.id, selectedVariantId, quantity);
      closeModal();
    });
  }

  // On page load initialize everything
  function init() {
    buildBrandFilters();
    applyFilters();
    setupEventListeners();
    renderCart();
    updateCartCount();
  }

  // Initialize app
  init();

  // ------------ Checkout Flow --------------
  const checkoutOverlay = document.getElementById('checkout-overlay');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutBackBtn = document.getElementById('checkout-back-btn');
  const checkoutNextBtn = document.getElementById('checkout-next-btn');
  const checkoutSteps = Array.from(document.querySelectorAll('.checkout-stepper .step'));
  let checkoutCurrentStep = 1;
  let checkoutData = {
    shippingAddress: {},
    paymentInfo: {}
  };

  function openCheckout() {
    if(cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    checkoutCurrentStep = 1;
    renderCheckoutStep();
    checkoutOverlay.classList.add('show');
    checkoutOverlay.setAttribute('aria-hidden', 'false');
    checkoutBackBtn.disabled = true;
    checkoutNextBtn.textContent = 'Next';
    checkoutOverlay.focus();
  }

  function closeCheckout() {
    checkoutOverlay.classList.remove('show');
    checkoutOverlay.setAttribute('aria-hidden', 'true');
    checkoutForm.innerHTML = '';
  }

  function renderCheckoutStep() {
    checkoutSteps.forEach(step => {
      step.classList.remove('active','completed');
      const stepNum = parseInt(step.dataset.step, 10);
      if(stepNum < checkoutCurrentStep) step.classList.add('completed');
      else if(stepNum === checkoutCurrentStep) step.classList.add('active');
    });
    checkoutForm.innerHTML = '';
    if(checkoutCurrentStep === 1) {
      renderCartReviewStep();
    } else if(checkoutCurrentStep === 2) {
      renderShippingStep();
    } else if(checkoutCurrentStep === 3) {
      renderPaymentStep();
    } else if(checkoutCurrentStep === 4) {
      renderConfirmStep();
    }
  }

  function renderCartReviewStep() {
    if(cart.length === 0){
      checkoutForm.innerHTML = '<p>Your cart is empty.</p>';
      checkoutNextBtn.disabled = true;
      return;
    }
    checkoutNextBtn.disabled = false;
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.margin = '0 0 24px 0';
    let total = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if(!product) return;
      const variant = item.variantId ? product.variants.find(v => v.id === item.variantId) : null;
      const variantName = variant ? variant.name : '';
      const price = item.price * item.quantity;
      total += price;

      const li = document.createElement('li');
      li.style.marginBottom = '12px';
      li.innerHTML = `
        <strong>${product.name}</strong> ${variantName ? ` (${variantName})` : ''} - Qty: ${item.quantity} - ${formatPrice(price)}
      `;
      ul.appendChild(li);
    });

    const totalDiv = document.createElement('div');
    totalDiv.style.fontWeight = '700';
    totalDiv.style.fontSize = '16px';
    totalDiv.textContent = `Total: ${formatPrice(total)}`;

    checkoutForm.appendChild(ul);
    checkoutForm.appendChild(totalDiv);
  }

  function renderShippingStep() {
    checkoutNextBtn.disabled = false;

    checkoutForm.innerHTML = `
      <div class="form-group">
        <label for="shipping-name">Full Name</label>
        <input type="text" id="shipping-name" name="shippingName" value="${checkoutData.shippingAddress.name || ''}" required/>
        <div class="error-message" id="error-shipping-name"></div>
      </div>
      <div class="form-group">
        <label for="shipping-street">Street Address</label>
        <input type="text" id="shipping-street" name="shippingStreet" value="${checkoutData.shippingAddress.street || ''}" required/>
        <div class="error-message" id="error-shipping-street"></div>
      </div>
      <div class="form-group">
        <label for="shipping-city">City</label>
        <input type="text" id="shipping-city" name="shippingCity" value="${checkoutData.shippingAddress.city || ''}" required/>
        <div class="error-message" id="error-shipping-city"></div>
      </div>
      <div class="form-group">
        <label for="shipping-state">State/Province</label>
        <input type="text" id="shipping-state" name="shippingState" value="${checkoutData.shippingAddress.state || ''}" required/>
        <div class="error-message" id="error-shipping-state"></div>
      </div>
      <div class="form-group">
        <label for="shipping-zip">Postal Code</label>
        <input type="text" id="shipping-zip" name="shippingZip" value="${checkoutData.shippingAddress.zip || ''}" required/>
        <div class="error-message" id="error-shipping-zip"></div>
      </div>
      <div class="form-group">
        <label for="shipping-country">Country</label>
        <input type="text" id="shipping-country" name="shippingCountry" value="${checkoutData.shippingAddress.country || ''}" required/>
        <div class="error-message" id="error-shipping-country"></div>
      </div>
    `;
  }

  function renderPaymentStep() {
    checkoutNextBtn.disabled = false;
    checkoutForm.innerHTML = `
      <div class="form-group">
        <label for="payment-card-number">Card Number</label>
        <input type="text" id="payment-card-number" name="paymentCardNumber" maxlength="19" autocomplete="cc-number" value="${checkoutData.paymentInfo.cardNumber || ''}" required/>
        <div class="error-message" id="error-payment-card-number"></div>
      </div>
      <div class="form-group">
        <label for="payment-card-expiry">Expiry Date (MM/YY)</label>
        <input type="text" id="payment-card-expiry" name="paymentCardExpiry" maxlength="5" autocomplete="cc-exp" value="${checkoutData.paymentInfo.expiry || ''}" required/>
        <div class="error-message" id="error-payment-card-expiry"></div>
      </div>
      <div class="form-group">
        <label for="payment-card-cvv">CVV</label>
        <input type="password" id="payment-card-cvv" name="paymentCardCvv" maxlength="4" autocomplete="cc-csc" value="${checkoutData.paymentInfo.cvv || ''}" required/>
        <div class="error-message" id="error-payment-card-cvv"></div>
      </div>
      <div class="form-group">
        <label for="payment-name">Name on Card</label>
        <input type="text" id="payment-name" name="paymentName" value="${checkoutData.paymentInfo.name || ''}" required/>
        <div class="error-message" id="error-payment-name"></div>
      </div>
    `;
  }

  function renderConfirmStep() {
    checkoutNextBtn.disabled = false;
    checkoutNextBtn.textContent = 'Place Order';
    // Summary
    const shipping = checkoutData.shippingAddress;
    const payment = checkoutData.paymentInfo;
    const total = cart.reduce((acc,item) => acc + item.price*item.quantity, 0);
    checkoutForm.innerHTML = `
      <h3>Confirm Your Order</h3>
      <div>
        <strong>Shipping to:</strong><br/>
        ${shipping.name || ''}<br/>
        ${shipping.street || ''}<br/>
        ${shipping.city || ''}, ${shipping.state || ''}, ${shipping.zip || ''}<br/>
        ${shipping.country || ''}
      </div>
      <div style="margin-top: 16px;">
        <strong>Payment Details:</strong><br/>
        Card ending: **** **** **** ${payment.cardNumber ? payment.cardNumber.slice(-4) : '****'}<br/>
        Name on card: ${payment.name || ''}
      </div>
      <div style="margin-top: 20px; font-weight: 700;">Total: ${formatPrice(total)}</div>
    `;
  }

  function onCheckoutBack() {
    if(checkoutCurrentStep > 1){
      if(checkoutCurrentStep === 4) {
        checkoutNextBtn.textContent = 'Next';
      }
      checkoutCurrentStep--;
      renderCheckoutStep();
      checkoutBackBtn.disabled = checkoutCurrentStep === 1;
    }
  }

  function onCheckoutNext(e) {
    e.preventDefault();
    if(checkoutCurrentStep === 4) {
      // Place order
      placeOrder();
      return;
    }
    const isValid = validateCheckoutStep();
    if(!isValid) return;
    checkoutCurrentStep++;
    if(checkoutCurrentStep === 4) {
      checkoutNextBtn.textContent = 'Place Order';
    }
    renderCheckoutStep();
    checkoutBackBtn.disabled = checkoutCurrentStep === 1;
  }

  function validateCheckoutStep() {
    let valid = true;
    if(checkoutCurrentStep === 2) {
      // Validate shipping form
      const name = checkoutForm['shippingName'].value.trim();
      const street = checkoutForm['shippingStreet'].value.trim();
      const city = checkoutForm['shippingCity'].value.trim();
      const state = checkoutForm['shippingState'].value.trim();
      const zip = checkoutForm['shippingZip'].value.trim();
      const country = checkoutForm['shippingCountry'].value.trim();

      clearCheckoutErrors();
      if(!name){ showError('shipping-name','Full Name is required'); valid = false; }
      if(!street){ showError('shipping-street','Street Address is required'); valid = false; }
      if(!city){ showError('shipping-city','City is required'); valid = false; }
      if(!state){ showError('shipping-state','State/Province is required'); valid = false; }
      if(!zip){ showError('shipping-zip','Postal Code is required'); valid = false; }
      if(!country){ showError('shipping-country','Country is required'); valid = false; }
      if(valid) {
        checkoutData.shippingAddress = { name, street, city, state, zip, country };
      }
    } else if (checkoutCurrentStep === 3) {
      // Validate payment form
      const cardNumber = checkoutForm['paymentCardNumber'].value.trim().replaceAll(/\D/g,'');
      const expiry = checkoutForm['paymentCardExpiry'].value.trim();
      const cvv = checkoutForm['paymentCardCvv'].value.trim();
      const name = checkoutForm['paymentName'].value.trim();

      clearCheckoutErrors();
      if(!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) { showError('payment-card-number','Enter a valid card number'); valid = false; }
      if(!expiry || !/^((0[1-9])|(1[0-2]))\/?([0-9]{2})$/.test(expiry)) { showError('payment-card-expiry','Enter a valid expiry date in MM/YY'); valid = false; }
      if(!cvv || cvv.length < 3 || cvv.length > 4) { showError('payment-card-cvv','Enter a valid CVV'); valid = false; }
      if(!name) { showError('payment-name','Name on card is required'); valid = false; }
      if(valid) {
        checkoutData.paymentInfo = { cardNumber, expiry, cvv, name };
      }
    }
    return valid;
  }

  function clearCheckoutErrors() {
    checkoutForm.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  }

  function showError(id, msg) {
    const el = checkoutForm.querySelector(`#error-${id}`);
    if(el) el.textContent = msg;
  }

  function onCheckoutSubmit(e) {
    e.preventDefault();
    onCheckoutNext(e);
  }

  function placeOrder() {
    // Simulate order placement and confirmation
    alert('Thank you for your order! Your products will be shipped soon.');
    cart = [];
    renderCart();
    updateCartCount();
    closeCheckout();
    cartSidebar.setAttribute('hidden', 'true');
    cartButton.setAttribute('aria-expanded', 'false');
  }
