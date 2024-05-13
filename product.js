const products = {
  product_id: 1,
  product_name: "figure",
  quantity_in_stock: 1,
  unit_price: 9000,
  product_description: {
    product_band: "kadokawa",
    size_or_quantity: 30,
    taste_or_scent: null,
    colour: "red",
    additional_description: null,
  },
};

console.log(products.product_id);
console.log(products.product_name);
console.log(products.quantity_in_stock);
console.log(products.unit_price);
console.log(products.product_description.product_band);
console.log(products.product_description.size_or_quantity);
console.log(products.product_description.taste_or_scent);
console.log(products.product_description.colour);
console.log(products.product_description.additional_description);
