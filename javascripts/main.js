// Filter fish that are "on sale"

// Add fish to "Basket"
const moveTheCart = (e) => {
  let fishCard = $(e.target).closest('.fish')
  $('#snagged').append(fishCard);
};

$('button.add').click(moveTheCart);