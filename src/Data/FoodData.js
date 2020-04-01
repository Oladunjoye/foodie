export function formatPrice(price) {
  return price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/Images/pizza.png",
    section: "Pizza",
    price: 1500
  },
  {
    name: "Pepperoni Pizza",
    img: "/Images/pizza2.jpeg",
    section: "Pizza",
    price: 1800
  },
  {
    name: "Chicken Pizza",
    img: "/Images/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2000
  },
  {
    img: "/Images/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 2000
  },
  {
    img: "/Images/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3000
  },
  { img: "/Images/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
  {
    img: "/Images/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6000
  },
  {
    img: "/Images/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1200
  }
  
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

