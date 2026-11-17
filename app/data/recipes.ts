export type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  servings: number;
  difficulty: Difficulty;
  emoji: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 30,
    servings: 2,
    difficulty: "Medium",
    emoji: "🍕",
    description: "Crisp crust, bright tomato sauce, fresh mozzarella and basil.",
  },
  {
    id: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    minutes: 45,
    servings: 4,
    difficulty: "Medium",
    emoji: "🍛",
    description: "Charred, spiced chicken simmered in a creamy tomato gravy.",
  },
  {
    id: "beef-tacos",
    title: "Street-Style Beef Tacos",
    cuisine: "Mexican",
    minutes: 25,
    servings: 3,
    difficulty: "Easy",
    emoji: "🌮",
    description: "Seared beef, onion, coriander and lime on warm corn tortillas.",
  },
  {
    id: "miso-ramen",
    title: "Miso Ramen",
    cuisine: "Japanese",
    minutes: 60,
    servings: 2,
    difficulty: "Hard",
    emoji: "🍜",
    description: "Rich miso broth with noodles, soft egg and scallions.",
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    cuisine: "Greek",
    minutes: 15,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥗",
    description: "Tomato, cucumber, olives and feta with oregano and olive oil.",
  },
  {
    id: "pancakes",
    title: "Fluffy Pancakes",
    cuisine: "American",
    minutes: 20,
    servings: 4,
    difficulty: "Easy",
    emoji: "🥞",
    description: "Thick, golden buttermilk pancakes for a slow weekend morning.",
  },
];
