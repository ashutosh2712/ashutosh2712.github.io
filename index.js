const productItems = document.querySelectorAll('.product-item');

productItems.forEach((item) => {
  item.addEventListener('click', () => {
    productItems.forEach((item) => {
      item.classList.remove('selected');
    });
    item.classList.add('selected');
  });
});

// Function to show/hide the options based on the selected product
function showOptions(selectedProductId) {
    const options = document.querySelectorAll('.options');
    options.forEach((option) => {
      option.style.display = 'none';
    });
  
    const selectedProductOptions = document.getElementById(`options${selectedProductId}`);
    if (selectedProductOptions) {
      selectedProductOptions.style.display = 'block';
    }
  }
  
  // Get the radio buttons and add event listeners to each
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener('click', () => {
      const selectedProduct = document.querySelector('input[type="radio"]:checked');
      const selectedProductId = selectedProduct.id.replace('product', '');
      showOptions(selectedProductId);
    });
  });