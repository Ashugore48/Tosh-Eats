// const apiUrl = "https://api.jsonbin.io/v3/b/64df14519d312622a392fed4";
// const apiUrl = "https://api.jsonbin.io/v3/b/64e04086b89b1e2299d2e67f";
const apiUrl = "https://api.jsonbin.io/v3/b/64e6f8c99d312622a395baf0";

async function fetchRestaurantData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const restaurantList = data.record;
    
    return restaurantList;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return [];
  }
}

export default fetchRestaurantData;









// export const RestaurantList = [
//   {
//     "name": "Spices Delight",
//     "cuisine": "North Indian",
//     "image": "https://source.unsplash.com/800x450/?indian-food",
//     "rating": 4.5,
//     "price": "₹250",
//     "menu": [
//       {
//         "item": "Butter Chicken",
//         "price": "₹300 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Garlic Naan",
//         "price": "₹50 for two",
//         "ETA": "5 minutes"
//       },
//       {
//         "item": "Palak Paneer",
//         "price": "₹280 for two",
//         "ETA": "12 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Koregaon Park"
//   },
//   {
//     "name": "Curry Fusion",
//     "cuisine": "West Indian",
//     "image": "https://source.unsplash.com/800x450/?spicy",
//     "rating": 4.2,
//     "price": "₹350",
//     "menu": [
//       {
//         "item": "Tandoori Sushi Rolls",
//         "price": "₹400 for two",
//         "ETA": "20 minutes"
//       },
//       {
//         "item": "Spicy Paneer Tacos",
//         "price": "₹320 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Masala Quesadilla",
//         "price": "₹280 for two",
//         "ETA": "15 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Deccan"
//   },
// ];
//   {
//     "name": "Royal Biryani House",
//     "cuisine": "South Indian",
//     "image": "https://source.unsplash.com/800x450/?rice",
//     "rating": 4.8,
//     "price": "₹200",
//     "menu": [
//       {
//         "item": "Chicken Dum Biryani",
//         "price": "₹220 for two",
//         "ETA": "25 minutes"
//       },
//       {
//         "item": "Vegetable Biryani",
//         "price": "₹180 for two",
//         "ETA": "20 minutes"
//       },
//       {
//         "item": "Mirchi ka Salan",
//         "price": "₹70 for two",
//         "ETA": "10 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Shivajinagar"
//   },
//   {
//     "name": "Chai & Chaat Corner",
//     "cuisine": "Street Food",
//     "image": "https://source.unsplash.com/800x450/?chaat",
//     "rating": 4.6,
//     "price": "₹100",
//     "menu": [
//       {
//         "item": "Pani Puri",
//         "price": "₹60 for two",
//         "ETA": "5 minutes"
//       },
//       {
//         "item": "Vada Pav",
//         "price": "₹40 for two",
//         "ETA": "3 minutes"
//       },
//       {
//         "item": "Dahi Puri",
//         "price": "₹70 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Camp"
//   },
//   {
//     "name": "Coastal Spice",
//     "cuisine": "South Indian",
//     "image": "https://source.unsplash.com/800x450/?south-indian-food",
//     "rating": 4.4,
//     "price": "₹400",
//     "menu": [
//       {
//         "item": "Masala Dosa",
//         "price": "₹180 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Fish Curry",
//         "price": "₹280 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Medu Vada",
//         "price": "₹120 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Hinjewadi"
//   },
//   {
//     "name": "Sher-E-Punjab",
//     "cuisine": "North Indian",
//     "image": "https://source.unsplash.com/800x450/?punjabi-food",
//     "rating": 4.2,
//     "price": "₹300",
//     "menu": [
//       {
//         "item": "Chole Bhature",
//         "price": "₹250 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Paneer Tikka",
//         "price": "₹320 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Mutton Curry",
//         "price": "₹380 for two",
//         "ETA": "20 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Baner"
//   },
//   {
//     "name": "Café Masala",
//     "cuisine": "Café",
//     "image": "https://source.unsplash.com/800x450/?cafe",
//     "rating": 4.6,
//     "price": "₹200",
//     "menu": [
//       {
//         "item": "Espresso",
//         "price": "₹100 for two",
//         "ETA": "5 minutes"
//       },
//       {
//         "item": "Vegetable Sandwich",
//         "price": "₹120 for two",
//         "ETA": "8 minutes"
//       },
//       {
//         "item": "Chocolate Brownie",
//         "price": "₹80 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kothrud"
//   },
//   {
//     "name": "Mumbai Spice",
//     "cuisine": "West Indian",
//     "image": "https://source.unsplash.com/800x450/?maharashtrian-food",
//     "rating": 4.4,
//     "price": "₹180",
//     "menu": [
//       {
//         "item": "Vada Pav",
//         "price": "₹50 for two",
//         "ETA": "5 minutes"
//       },
//       {
//         "item": "Misal Pav",
//         "price": "₹90 for two",
//         "ETA": "8 minutes"
//       },
//       {
//         "item": "Puran Poli",
//         "price": "₹40 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Shaniwar Wada"
//   },
//   {
//     "name": "Green Leaf Bistro",
//     "cuisine": "West Indian",
//     "image": "https://source.unsplash.com/800x450/?vegetarian-food",
//     "rating": 4.7,
//     "price": "₹280",
//     "menu": [
//       {
//         "item": "Paneer Tikka Salad",
//         "price": "₹180 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Vegetable Biryani",
//         "price": "₹220 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Tofu Wrap",
//         "price": "₹150 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Magarpatta"
//   },
//   {
//     "name": "Flavors of Kerala",
//     "cuisine": "South Indian",
//     "image": "https://source.unsplash.com/800x450/?kerala-food",
//     "rating": 4.5,
//     "price": "₹350",
//     "menu": [
//       {
//         "item": "Appam with Stew",
//         "price": "₹250 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Malabar Fish Curry",
//         "price": "₹320 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Coconut Ladoo",
//         "price": "₹80 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kalyani Nagar"
//   },
//   {
//     "name": "Desi Tadka",
//     "cuisine": "Street Food",
//     "image": "https://source.unsplash.com/800x450/?comfort-food",
//     "rating": 4.3,
//     "price": "₹220",
//     "menu": [
//       {
//         "item": "Dal Makhani",
//         "price": "₹150 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Aloo Paratha",
//         "price": "₹70 for two",
//         "ETA": "8 minutes"
//       },
//       {
//         "item": "Gajar Halwa",
//         "price": "₹80 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Hadapsar"
//   },
//   {
//     "name": "Sizzling Sizzlers",
//     "cuisine": "Street Food",
//     "image": "https://source.unsplash.com/800x450/?sizzlers",
//     "rating": 4.0,
//     "price": "₹400",
//     "menu": [
//       {
//         "item": "Veg Sizzler",
//         "price": "₹350 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Chicken Sizzler",
//         "price": "₹450 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Brownie Sizzler",
//         "price": "₹150 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Wakad"
//   },
//   {
//     "name": "Taste of Rajasthan",
//     "cuisine": "North Indian",
//     "image": "https://source.unsplash.com/800x450/?rajasthani-food",
//     "rating": 4.6,
//     "price": "₹260",
//     "menu": [
//       {
//         "item": "Dal Baati Churma",
//         "price": "₹180 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Gatte ki Sabzi",
//         "price": "₹150 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Mohanthal",
//         "price": "₹70 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Aundh"
//   },
//   {
//     "name": "Del Taco",
//     "cuisine": "Foreign Cuisine",
//     "image": "https://source.unsplash.com/800x450/?mexican-food",
//     "rating": 4.2,
//     "price": "₹380",
//     "menu": [
//       {
//         "item": "Burritos",
//         "price": "₹250 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Quesadillas",
//         "price": "₹220 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Churros",
//         "price": "₹110 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Vitthalwadi"
//   },
//   {
//     "name": "Fusion Bites",
//     "cuisine": "Foreign Cuisine",
//     "image": "https://source.unsplash.com/800x450/?samosa",
//     "rating": 4.3,
//     "price": "₹320",
//     "menu": [
//       {
//         "item": "Sushi Tacos",
//         "price": "₹280 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Pasta Biryani",
//         "price": "₹350 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Chocolate Samosa",
//         "price": "₹90 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kharadi"
//   },
//   {
//     "name": "Fiesta Mexicana",
//     "cuisine": "Foreign Cuisine",
//     "image": "https://source.unsplash.com/800x450/?mexican-food",
//     "rating": 4.7,
//     "price": "₹380",
//     "menu": [
//       {
//         "item": "Burritos",
//         "price": "₹250 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Quesadillas",
//         "price": "₹220 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Churros",
//         "price": "₹110 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Vitthalwadi"
//   },
//   {
//     "name": "Nacho Daddy",
//     "cuisine": "Foreign Cuisine",
//     "image": "https://source.unsplash.com/800x450/?tacos",
//     "rating": 3.2,
//     "price": "₹320",
//     "menu": [
//       {
//         "item": "Sushi Tacos",
//         "price": "₹280 for two",
//         "ETA": "15 minutes"
//       },
//       {
//         "item": "Pasta Biryani",
//         "price": "₹350 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Chocolate Samosa",
//         "price": "₹90 for two",
//         "ETA": "8 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kharadi"
//   },
//   {
//     "name": "Crispy Cravings",
//     "cuisine": "Foreign Cuisine",
//     "image": "https://source.unsplash.com/800x450/?fast-food",
//     "rating": 4.0,
//     "price": "₹150",
//     "menu": [
//       {
//         "item": "Cheeseburger",
//         "price": "₹120 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "French Fries",
//         "price": "₹60 for two",
//         "ETA": "5 minutes"
//       },
//       {
//         "item": "Chocolate Shake",
//         "price": "₹70 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Aundh"
//   },
//   {
//     "name": "Flavors of Gujarat",
//     "cuisine": "North Indian",
//     "image": "https://source.unsplash.com/800x450/?gujarati-food",
//     "rating": 4.5,
//     "price": "₹240",
//     "menu": [
//       {
//         "item": "Dhokla",
//         "price": "₹100 for two",
//         "ETA": "8 minutes"
//       },
//       {
//         "item": "Khandvi",
//         "price": "₹120 for two",
//         "ETA": "6 minutes"
//       },
//       {
//         "item": "Jalebi",
//         "price": "₹80 for two",
//         "ETA": "5 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kondhwa"
//   },
//   {
//     "name": "Aromatic Bites",
//     "cuisine": "Middle Indian",
//     "image": "https://source.unsplash.com/800x450/?middle-eastern-food",
//     "rating": 4.6,
//     "price": "₹280",
//     "menu": [
//       {
//         "item": "Hummus and Pita",
//         "price": "₹150 for two",
//         "ETA": "8 minutes"
//       },
//       {
//         "item": "Falafel Wrap",
//         "price": "₹180 for two",
//         "ETA": "10 minutes"
//       },
//       {
//         "item": "Baklava",
//         "price": "₹100 for two",
//         "ETA": "6 minutes"
//       }
//     ],
//     "city": "Pune",
//     "location": "Kalyani Nagar"
//   }
// ];



















//export const RestaurantList = [
//   {
//     "name": "Italian Delights",
//     "cuisine": "Italian",
//     "image": "https://source.unsplash.com/800x450/?pizza",
//     "rating": 4.5,
//     "price": "₹350",
//     "menu": ["Pizza", "Pasta", "Lasagna", "Tiramisu"],
//     "city": "Pune",
//     "location": "Koregaon Park"
//   },
//   {
//     "name": "Spice Garden",
//     "cuisine": "Indian",
//     "image": "https://source.unsplash.com/800x450/?curry",
//     "rating": 4.0,
//     "price": "₹200",
//     "menu": ["Curry", "Biryani", "Naan", "Samosa"],
//     "city": "Pune",
//     "location": "Deccan"
//   },
//   {
//     "name": "Sushi Paradise",
//     "cuisine": "Japanese",
//     "image": "https://source.unsplash.com/800x450/?sushi",
//     "rating": 4.8,
//     "price": "₹500",
//     "menu": ["Sushi", "Sashimi", "Ramen", "Tempura"],
//     "city": "Pune",
//     "location": "Shivajinagar"
//   },
//   {
//     "name": "Mama's Kitchen",
//     "cuisine": "American",
//     "image": "https://source.unsplash.com/800x450/?burger",
//     "rating": 4.2,
//     "price": "₹250",
//     "menu": ["Burger", "Fries", "Hot Dog", "Apple Pie"],
//     "city": "Pune",
//     "location": "Magarpatta"
//   },
//   {
//     "name": "La Cantina",
//     "cuisine": "Mexican",
//     "image": "https://source.unsplash.com/800x450/?mexicanfood",
//     "rating": 3.9,
//     "price": "₹150",
//     "menu": ["Taco", "Burrito", "Quesadilla", "Churro"],
//     "city": "Pune",
//     "location": "Hadapsar"
//   },
//   {
//     "name": "Burger Junction",
//     "cuisine": "Fast Food",
//     "image": "https://source.unsplash.com/800x450/?fast%20food",
//     "rating": 4.5,
//     "price": "₹200",
//     "menu": ["Burger", "Fries", "Chicken Nuggets", "Milkshake"],
//     "city": "Pune",
//     "location": "Kothrud"
//   },
//   {
//     "name": "Sizzling Steaks",
//     "cuisine": "Steakhouse",
//     "image": "https://source.unsplash.com/800x450/?steak",
//     "rating": 4.8,
//     "price": "₹600",
//     "menu": ["Ribeye Steak", "Filet Mignon", "T-bone Steak", "Porterhouse Steak"],
//     "city": "Pune",
//     "location": "Kalyani Nagar"
//   },
//   {
//     "name": "Caffeine Connection",
//     "cuisine": "Cafe",
//     "image": "https://source.unsplash.com/800x450/?coffee",
//     "rating": 4.4,
//     "price": "₹150",
//     "menu": ["Coffee", "Espresso", "Latte", "Cappuccino"],
//     "city": "Pune",
//     "location": "Viman Nagar"
//   },
//   {
//     "name": "Seafood Delish",
//     "cuisine": "Seafood",
//     "image": "https://source.unsplash.com/800x450/?seafood",
//     "rating": 4.7,
//     "price": "₹450",
//     "menu": ["Shrimp Scampi", "Grilled Salmon", "Lobster Bisque"],
//     "city": "Pune",
//     "location": "Bund Garden"
//   },
//   {
//     "name": "Pasta Passion",
//     "cuisine": "Italian",
//     "image": "https://source.unsplash.com/800x450/?pasta",
//     "rating": 4.2,
//     "price": "₹300",
//     "menu": ["Pasta Carbonara", "Fettuccine Alfredo", "Spaghetti Bolognese"],
//     "city": "Pune",
//     "location": "Karve Nagar"
//   },
//   {
//     "name": "Veggie Delight",
//     "cuisine": "Vegetarian",
//     "image": "https://source.unsplash.com/800x450/?vegetables",
//     "rating": 4.6,
//     "price": "₹200",
//     "menu": ["Vegetable Stir-Fry", "Veggie Burger", "Stuffed Bell Peppers"],
//     "city": "Pune",
//     "location": "Camp"
//   },
//   {
//     "name": "Rolling Sushi",
//     "cuisine": "Japanese",
//     "image": "https://source.unsplash.com/800x450/?sushi",
//     "rating": 4.5,
//     "price": "₹550",
//     "menu": ["Sushi Rolls", "Nigiri Sushi", "Sushi Platter"],
//     "city": "Pune",
//     "location": "Bavdhan"
//   },
// {
//     "name": "Thai Temptations",
//     "cuisine": "Thai",
//     "image": "https://source.unsplash.com/800x450/?thai",
//     "rating": 4.3,
//     "price": "₹400",
//     "menu": ["Pad Thai", "Green Curry", "Tom Yum Soup"],
//     "city": "Pune",
//     "location": "Wakad"
//   },
//   {
//     "name": "Flavors of India",
//     "cuisine": "Indian",
//     "image": "https://source.unsplash.com/800x450/?indianfood",
//     "rating": 4.6,
//     "price": "₹250",
//     "menu": ["Butter Chicken", "Paneer Tikka", "Dal Makhani"],
//     "city": "Pune",
//     "location": "Aundh"
//   },
//   {
//     "name": "Mediterranean Oasis",
//     "cuisine": "Mediterranean",
//     "image": "https://source.unsplash.com/800x450/?mediterranean",
//     "rating": 4.7,
//     "price": "₹350",
//     "menu": ["Hummus", "Falafel", "Shawarma"],
//     "city": "Pune",
//     "location": "Baner"
//   },
// {
//     "name": "Cheese Haven",
//     "cuisine": "American",
//     "image": "https://source.unsplash.com/800x450/?cheeseburger",
//     "rating": 4.4,
//     "price": "₹300",
//     "menu": ["Cheeseburger", "Mac and Cheese", "Grilled Cheese"],
//     "city": "Pune",
//     "location": "Koregaon Park"
//   },
//   {
//     "name": "Green Leaf Bistro",
//     "cuisine": "Vegetarian",
//     "image": "https://source.unsplash.com/800x450/?salad",
//     "rating": 4.8,
//     "price": "₹250",
//     "menu": ["Fresh Salad", "Vegetable Wrap", "Quinoa Bowl"],
//     "city": "Pune",
//     "location": "Magarpatta"
//   },
//   {
//     "name": "Tandoori Fusion",
//     "cuisine": "Indian",
//     "image": "https://source.unsplash.com/800x450/?tandoori",
//     "rating": 4.5,
//     "price": "₹400",
//     "menu": ["Tandoori Chicken", "Naan Platter", "Kebabs"],
//     "city": "Pune",
//     "location": "Viman Nagar"
//   },
//   {
//     "name": "Sweets and Treats",
//     "cuisine": "Desserts",
//     "image": "https://source.unsplash.com/800x450/?desserts",
//     "rating": 4.3,
//     "price": "₹150",
//     "menu": ["Ice Cream Sundae", "Chocolate Cake", "Fruit Parfait"],
//     "city": "Pune",
//     "location": "Deccan"
//   },
//   {
//     "name": "Steaming Dimsums",
//     "cuisine": "Chinese",
//     "image": "https://source.unsplash.com/800x450/?dimsum",
//     "rating": 4.2,
//     "price": "₹300",
//     "menu": ["Pork Dumplings", "Shrimp Siu Mai", "Vegetable Buns"],
//     "city": "Pune",
//     "location": "Shivajinagar"
//   },
// {
//     "name": "Greek Delights",
//     "cuisine": "Mediterranean",
//     "image": "https://source.unsplash.com/800x450/?greekfood",
//     "rating": 4.6,
//     "price": "₹350",
//     "menu": ["Gyro", "Moussaka", "Greek Salad"],
//     "city": "Pune",
//     "location": "Kalyani Nagar"
//   },
//   {
//     "name": "Fiesta Mexicana",
//     "cuisine": "Mexican",
//     "image": "https://source.unsplash.com/800x450/?mexican",
//     "rating": 4.4,
//     "price": "₹300",
//     "menu": ["Enchiladas", "Guacamole", "Chimichanga"],
//     "city": "Pune",
//     "location": "Hadapsar"
//   },
//   {
//     "name": "Sizzlin' BBQ",
//     "cuisine": "Barbecue",
//     "image": "https://source.unsplash.com/800x450/?bbq",
//     "rating": 4.7,
//     "price": "₹450",
//     "menu": ["Smoked Ribs", "Pulled Pork", "Brisket"],
//     "city": "Pune",
//     "location": "Wakad"
//   },
//   {
//     "name": "Noodle Nirvana",
//     "cuisine": "Asian",
//     "image": "https://source.unsplash.com/800x450/?noodles",
//     "rating": 4.5,
//     "price": "₹250",
//     "menu": ["Pad Thai", "Chow Mein", "Ramen"],
//     "city": "Pune",
//     "location": "Baner"
//   },
//   {
//     "name": "Crispy Crust Pizzeria",
//     "cuisine": "Italian",
//     "image": "https://source.unsplash.com/800x450/?pizza",
//     "rating": 4.3,
//     "price": "₹400",
//     "menu": ["Margherita Pizza", "Pepperoni Pizza", "Calzone"],
//     "city": "Pune",
//     "location": "Kothrud"
//   },
//   {
//     "name": "Coastal Catch",
//     "cuisine": "Seafood",
//     "image": "https://source.unsplash.com/800x450/?seafood",
//     "rating": 4.8,
//     "price": "₹500",
//     "menu": ["Fish Curry", "Prawn Masala", "Crab Fry"],
//     "city": "Pune",
//     "location": "Bund Garden"
//   },
//   {
//     "name": "Savory Szechuan",
//     "cuisine": "Chinese",
//     "image": "https://source.unsplash.com/800x450/?chinesefood",
//     "rating": 4.2,
//     "price": "₹350",
//     "menu": ["Kung Pao Chicken", "Mapo Tofu", "Egg Fried Rice"],
//     "city": "Pune",
//     "location": "Aundh"
//   },
//   {
//     "name": "French Flair",
//     "cuisine": "French",
//     "image": "https://source.unsplash.com/800x450/?frenchfood",
//     "rating": 4.6,
//     "price": "₹500",
//     "menu": ["Croissant", "Coq au Vin", "Creme Brulee"],
//     "city": "Pune",
//     "location": "Camp"
//   },
//   {
//     "name": "Thai Elegance",
//     "cuisine": "Thai",
//     "image": "https://source.unsplash.com/800x450/?thaifood",
//     "rating": 4.4,
//     "price": "₹400",
//     "menu": ["Tom Kha Gai", "Massaman Curry", "Sticky Rice"],
//     "city": "Pune",
//     "location": "Magarpatta"
//   },
//   {
//     "name": "Bollywood Bites",
//     "cuisine": "Indian",
//     "image": "https://source.unsplash.com/800x450/?curry",
//     "rating": 4.7,
//     "price": "₹300",
//     "menu": [{
//       "itme" : "Paneer Masala",
//       "price" : "₹350 for two",
//       "ETA" : "10 mins"
//     }, {
//       "itme" : "Aloo Paratha",
//       "price" : "₹200 for two",
//       "ETA" : "4 mins"
//     }, {
//       "itme" : "Paneer Tikka",
//       "price" : "₹350 for two",
//       "ETA" : "15 mins"
//     },{
//       "itme" : "kaju Curry",
//       "price" : "₹270 for two",
//       "ETA" : "20 mins"
//     },{
//       "itme" : "Bhendi Masala",
//       "price" : "₹150 for two",
//       "ETA" : "8 mins"
//     }],
//     "city": "Pune",
//     "location": "Viman Nagar"
//   },
//   {
//     "name": "Sizzling Sizzlers",
//     "cuisine": "International",
//     "image": "https://source.unsplash.com/800x450/?sizzlers",
//     "rating": 4.5,
//     "price": "₹450",
//     "menu": ["Chicken Sizzler", "Vegetable Sizzler", "Seafood Sizzler"],
//     "city": "Pune",
//     "location": "Koregaon Park"
//   },
//   {
//     "name": "Mango Tango",
//     "cuisine": "Fruit Delights",
//     "image": "https://source.unsplash.com/800x450/?fruits",
//     "rating": 4.2,
//     "price": "₹200",
//     "menu": ["Mango Smoothie", "Mango Sorbet", "Mango Parfait"],
//     "city": "Pune",
//     "location": "Deccan"
//   },
// ];

