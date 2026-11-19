// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minQuantity(array) {
  let invName = array[0].name;
  let invQuantity = array[0].quantity;
  for (const inv of array) {
      if (invQuantity > inv.quantity) {
        invName = inv.name
        invQuantity = inv.quantity
      }
  }
  console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${invName} ซึ่งมี ${invQuantity} ชิ้น`);
}

minQuantity(inventory);
