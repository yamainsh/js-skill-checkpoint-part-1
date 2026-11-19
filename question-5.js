// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let sums = 0;
  let discountedPrice = 0;
  for (const inv of products) {
    sums = sums + (inv.price * inv.quantity);
  }
  if (promotionCode === "SALE50") {
    discountedPrice = sums - (sums * 0.50)
  } else if (promotionCode === "SALE20") {
    discountedPrice = sums - (sums * 0.20)
  } else {
    discountedPrice = sums
  }
  return discountedPrice 
}

console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
