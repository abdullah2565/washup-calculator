const products = [
    {
      id: 1,
      name: "Bath Towel",
      weight: "0.500",
      image: "https://washup.com.pk/assets/images/Bath_Towel.png",
      price: 70,
      services: {
        wash: 15,
        iron: 10,
        fold: 5,
        hang: null,
      },
    },
    {
      id: 2,
      name: "Hand Towel",
      weight: "0.200",
      image: "https://washup.com.pk/assets/images/Single_bed.png",
      price: 28,
      services: {
        wash: 10,
        iron: 5,
        fold: 5,
        hang: null,
      },
    },
    {
      id: 3,
      name: "Single Bedsheet",
      weight: "0.250",
      image: "https://washup.com.pk/assets/images/Bath_Towel.png",
      price: 35,
      services: {
        wash: 20,
        iron: 15,
        fold: 10,
        hang: null,
      },
    },
    {
      id: 4,
      name: "Double Bedsheet",
      weight: "0.500",
      image: "https://washup.com.pk/assets/images/Double_Bed.png",
      price: 70,
      services: {
        wash: 25,
        iron: 20,
        fold: 10,
        hang: null,
      },
    },
    {
      id: 5,
      name: "Pillow Cover",
      weight: "0.100",
      image: "https://washup.com.pk/assets/images/Pillow_Cover.png",
      price: 14,
      services: {
        wash: 5,
        iron: 3,
        fold: 2,
        hang: null,
      },
    },
    {
      id: 6,
      name: "Duvet Cover",
      weight: "1.000",
      image: "https://washup.com.pk/assets/images/Duvet_Cover.png",
      price: 140,
      services: {
        wash: 30,
        iron: 25,
        fold: 15,
        hang: null,
      },
    },
    {
      id: 7,
      name: "Kameez",
      weight: "0.250",
      image: "https://washup.com.pk/assets/images/Kameez.png",
      price: 35,
      services: {
        wash: 10,
        iron: 8,
        fold: 5,
        hang: 7,
      },
    },
    {
      id: 8,
      name: "Shalwar",
      weight: "0.250",
      image: "https://washup.com.pk/assets/images/Shalwar.png",
      price: 35,
      services: {
        wash: 10,
        iron: 8,
        fold: 5,
        hang: 7,
      },
    },
    {
      id: 9,
      name: "Shirts",
      weight: "0.200",
      image: "https://washup.com.pk/assets/images/Tshirt_button.png",
      price: 28,
      services: {
        wash: 8,
        iron: 5,
        fold: 3,
        hang: 6,
      },
    },
    {
      id: 10,
      name: "Jeans",
      weight: "0.250",
      image: "https://washup.com.pk/assets/images/Jeans_pants.png",
      price: 35,
      services: {
        wash: 10,
        iron: 7,
        fold: 5,
        hang: 8,
      },
    },
    {
      id: 11,
      name: "Shorts",
      weight: "0.125",
      image: "https://washup.com.pk/assets/images/Shorts.png",
      price: 17,
      services: {
        wash: 5,
        iron: 3,
        fold: 2,
        hang: 3,
      },
    },
    {
      id: 12,
      name: "Bath Mats",
      weight: "0.250",
      image: "https://washup.com.pk/assets/images/Bath_Mats.png",
      price: 35,
      services: {
        wash: 20,
        iron: 15,
        fold: 10,
        hang: null,
      },
    },
    {
      id: 13,
      name: "Bath Robe",
      weight: "1.000",
      image: "https://washup.com.pk/assets/images/Bath_robe.png",
      price: 140,
      services: {
        wash: 30,
        iron: 25,
        fold: 15,
        hang: null,
      },
    },
    {
      id: 14,
      name: "Blanket Comforter",
      weight: "3.000",
      image: "https://washup.com.pk/assets/images/Blanket_comfter.png",
      price: 420,
      services: {
        wash: 50,
        iron: 40,
        fold: 20,
        hang: null,
      },
    },
    {
      id: 15,
      name: "Dupatta",
      weight: "0.125",
      image: "https://washup.com.pk/assets/images/Dupatta.png",
      price: 17,
      services: {
        wash: 5,
        iron: 3,
        fold: 2,
        hang: 3,
      },
    },
    {
      id: 16,
      name: "2 Piece",
      weight: "1",
      image: "https://washup.com.pk/assets/images/2-piece.png",
      price: 110,
      services: {
        wash: 15,
        iron: 10,
        fold: 8,
        hang: 10,
      },
    },
    {
      id: 17,
      name: "3 Piece",
      weight: "1",
      image: "https://washup.com.pk/assets/images/3-piece.png",
      price: 150,
      services: {
        wash: 20,
        iron: 12,
        fold: 10,
        hang: 12,
      },
    },
  ];
  products.forEach(product => {
    console.log(`Services for ${product.name}:`);
    console.log(`Wash: ${product.services.wash}`);
    console.log(`Iron: ${product.services.iron}`);
    console.log(`Fold: ${product.services.fold}`);
    console.log(`Hang: ${product.services.hang}`);
    console.log('----------------------');
  });
  let selectedItems = [];
  let subtotal = 0;
  let deliveryCharge = 100;
  
  const calculatorItem = document.querySelector(".calculator_item");
  const priceDiv = document.querySelector(".price_div");
  const service = document.querySelector(".service");
  const deliveryChargeElement = document.getElementById("deliveryCharge");
  const grand_total = document.getElementById("grand_total");
  const totalElement = document.getElementById("total");
  
  // Update the grand total and delivery charge
  function updateTotals() {
    deliveryCharge = subtotal > 700 ? 0 : 100;
    const total = subtotal + deliveryCharge;
    deliveryChargeElement.textContent = deliveryCharge;
    grand_total.textContent = total;
  }
  
  // Update the .price_div with selected item details
  function updatePriceDiv() {
    priceDiv.innerHTML = ""; // Clear previous content
    selectedItems.forEach((item) => {
      const itemDetails = document.createElement("div");
      itemDetails.classList.add("price-item");
      itemDetails.innerHTML = `
            <div class="text_div">
                <div class="heading">${item.name}</div>
                <div class="price">${item.price}/kg</div>
            </div>
        `;
      priceDiv.appendChild(itemDetails);
    });
  
    const subtotalDiv = document.createElement("div");
    subtotalDiv.classList.add("text_div");
    subtotalDiv.innerHTML = `
        <div class="heading">Subtotal</div>
        <div class="price" id="subtotal">${subtotal}</div>
    `;
    priceDiv.appendChild(subtotalDiv);
  
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("text_div");
    totalDiv.innerHTML = `
        <div class="heading">Total</div>
        <div class="price" id="total">${subtotal + deliveryCharge}</div>
    `;
    priceDiv.appendChild(totalDiv);
  
    const deliveryChargeDiv = document.createElement("div");
    deliveryChargeDiv.classList.add("text_div");
    deliveryChargeDiv.innerHTML = `
        <div class="heading">Delivery Charge</div>
        <div class="price" id="deliveryCharge">${deliveryCharge}</div>
    `;
    priceDiv.appendChild(deliveryChargeDiv);
  }
  
  products.forEach((item) => {
    calculatorItem.innerHTML += `
          <div class="calculator-item-box" data-id="${item.id}">
              <div class="cib-img">
                  <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cib-body">
                  <h5>${item.name}</h5>
              </div>
          </div>
      `;
  });
  
  
  document.querySelectorAll(".cib-img img").forEach((img, index) => {
    img.addEventListener("click", () => {
      const clickedItem = products[index];
      let selectedItem = selectedItems.find((item) => item.id === clickedItem.id);
      
      if (!selectedItem) {
        selectedItem = {
          ...clickedItem,
          quantity: 1,
          totalPrice: clickedItem.price,
          selectedServices: [],
        };
        selectedItems.push(selectedItem);
        subtotal += selectedItem.totalPrice;
        updateTotals();
        updatePriceDiv(); 
  
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item_div");
        itemDiv.setAttribute("data-id", selectedItem.id);
  
        itemDiv.innerHTML = `
        <div class="name"><p>${selectedItem.name}</p></div>
        <div class="weight"><p>${selectedItem.weight}</p></div>
        <div class="quantity">
            <button class="minus" aria-label="Decrease"><i class="fa-solid fa-angle-down" style="color: #000000;"></i></button>
            <input type="number" class="input-box" value="${selectedItem.quantity}" min="1" />
            <button class="plus" aria-label="Increase"><i class="fa-solid fa-angle-up" style="color: #000000;"></i></button>
        </div>
        <div class="dropdown">
          <div class="dropdown-btn" onclick="toggleDropdown(event)">
            <span class="selected-items">Select Service</span>
            <span>&#9662;</span>
          </div>
          <div class="dropdown-content" id="dropdownContent">
            <label><input type="checkbox" onclick="updateSelection(event)" value="Iron" ${selectedItem.services.iron === null ? 'disabled' : ''}> Iron</label>
            <label><input type="checkbox" onclick="updateSelection(event)" value="Wash" ${selectedItem.services.wash === null ? 'disabled' : ''} checked> Wash</label>
            <label><input type="checkbox" onclick="updateSelection(event)" value="Hang" ${selectedItem.services.hang === null ? 'disabled' : ''}> Hang</label>
            <label><input type="checkbox" onclick="updateSelection(event)" value="Fold" ${selectedItem.services.fold === null ? 'disabled' : ''} checked> Fold</label>
          </div>
        </div>
        <div class="delete"><i class="fa-solid fa-trash-can"></i></div>
      `;
      
      service.appendChild(itemDiv);
  
        itemDiv
          .querySelector(".minus")
          .addEventListener("click", () => updateQuantity(selectedItem.id, -1));
        itemDiv
          .querySelector(".plus")
          .addEventListener("click", () => updateQuantity(selectedItem.id, 1));
        itemDiv
          .querySelector(".delete")
          .addEventListener("click", () => deleteItem(selectedItem.id));
        itemDiv
          .querySelector(".input-box")
          .addEventListener("input", (e) =>
            updateQuantity(
              selectedItem.id,
              parseInt(e.target.value) - selectedItem.quantity
            )
          );
      } 
    });
  });
  
  function updateSelection(event) {
    const checkboxes = document.querySelectorAll('#dropdownContent input[type="checkbox"]');
    const selectedServices = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    if (!selectedServices.length) {
      alert("Please select at least one service.");
      return;
    }
  
    const itemDiv = event.target.closest('.item_div');
    const itemId = itemDiv.getAttribute("data-id");
    const item = selectedItems.find(item => item.id == itemId);
  
    item.selectedServices = selectedServices;
    item.totalServicePrice = 0;
  
    item.selectedServices.forEach(service => {
      const serviceObj = products.find(p => p.name === service);
      item.totalServicePrice += serviceObj ? serviceObj.services[service] : 0;
    });
  
    item.totalPrice = item.price * item.quantity + item.totalServicePrice;
    subtotal = selectedItems.reduce((acc, item) => acc + item.totalPrice, 0);
  
    document.querySelector(
      `.item_div[data-id="${itemId}"] .selected-items`
    ).textContent = item.selectedServices.join(', ') || "Select Service";
  
    updateTotals();
    updatePriceDiv();
  }
  
  function toggleDropdown(event) {
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
      document.getElementById("dropdownContent").style.display = "none";
    }
  }
  
  function updateQuantity(itemId, quantityChange) {
    const item = selectedItems.find((i) => i.id === itemId);
    console.log(item);
    if (item) {
      const newQuantity = item.quantity + quantityChange;
      if (newQuantity > 0) {
        subtotal -= item.totalPrice;
  
        item.quantity = newQuantity;
  
        item.weight = (parseFloat(item.weight) / (item.quantity - quantityChange)) * newQuantity;
  
        item.totalServicePrice = item.selectedServices.reduce((acc, service) => {
          const serviceCost = item.services[service] || 0; 
          return acc + serviceCost;
        }, 0);
  
  
        item.totalPrice = item.price * newQuantity + item.totalServicePrice;
  
        subtotal += item.totalPrice;
  
        document.querySelector(
          `.item_div[data-id="${itemId}"] .weight p`
        ).textContent = item.weight;
        document.querySelector(
          `.item_div[data-id="${itemId}"] .input-box`
        ).value = item.quantity;
  
  
        updateTotals();
        updatePriceDiv();
      }
    }
  }
  
  
  
  function deleteItem(itemId) {
    const itemIndex = selectedItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const item = selectedItems[itemIndex];
      subtotal -= item.totalPrice;
      selectedItems.splice(itemIndex, 1);
      updateTotals();
      updatePriceDiv();
      document.querySelector(`.item_div[data-id="${itemId}"]`).remove();
    }
  }
  
  