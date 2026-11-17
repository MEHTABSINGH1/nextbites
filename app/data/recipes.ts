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
  ingredients: string[];
  steps: string[];
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
    ingredients: [
      "1 ball pizza dough (250 g)",
      "120 ml passata",
      "125 g fresh mozzarella, torn",
      "A handful of fresh basil leaves",
      "1 tbsp olive oil",
      "Pinch of salt",
    ],
    steps: [
      "Heat the oven to its highest setting with a tray or pizza stone inside.",
      "Stretch the dough into a thin 30 cm round on a floured surface.",
      "Season the passata with salt and spread it thinly over the base.",
      "Scatter the mozzarella on top and drizzle with olive oil.",
      "Bake for 8–10 minutes until the crust is blistered and golden.",
      "Finish with fresh basil and serve straight away.",
    ],
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
    ingredients: [
      "600 g boneless chicken thighs, cubed",
      "150 g plain yogurt",
      "2 tbsp tikka masala spice blend",
      "1 onion, finely chopped",
      "3 garlic cloves and a thumb of ginger, grated",
      "400 g tin chopped tomatoes",
      "120 ml double cream",
      "2 tbsp butter or oil",
    ],
    steps: [
      "Marinate the chicken in yogurt and half the spice blend for at least 20 minutes.",
      "Sear the chicken in a hot pan until charred at the edges, then set aside.",
      "Melt the butter and soften the onion, garlic and ginger for 5 minutes.",
      "Stir in the remaining spices, then add the tomatoes and simmer for 10 minutes.",
      "Return the chicken, pour in the cream and simmer until cooked through.",
      "Serve with rice or warm naan.",
    ],
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
    ingredients: [
      "400 g skirt or flank steak",
      "1 tsp each cumin, chilli powder and salt",
      "9 small corn tortillas",
      "1 white onion, finely diced",
      "A bunch of coriander, chopped",
      "2 limes, cut into wedges",
    ],
    steps: [
      "Rub the steak with the cumin, chilli powder and salt.",
      "Sear in a very hot pan for 3–4 minutes per side, then rest for 5 minutes.",
      "Slice the steak thinly against the grain and chop into small pieces.",
      "Warm the tortillas in a dry pan until soft and lightly toasted.",
      "Fill each tortilla with beef, onion and coriander.",
      "Serve with lime wedges for squeezing over.",
    ],
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
    ingredients: [
      "1 litre chicken or vegetable stock",
      "3 tbsp white miso paste",
      "1 tbsp soy sauce",
      "2 garlic cloves and a thumb of ginger, grated",
      "2 portions fresh ramen noodles",
      "2 eggs",
      "2 spring onions, sliced",
      "1 tsp sesame oil",
    ],
    steps: [
      "Boil the eggs for 6½ minutes, cool them in iced water, then peel.",
      "Fry the garlic and ginger in sesame oil for 1 minute.",
      "Add the stock and soy sauce and simmer for 15 minutes.",
      "Take the pan off the heat and whisk in the miso until smooth.",
      "Cook the noodles according to the packet, then drain.",
      "Divide the noodles between bowls, ladle over the broth, and top with halved eggs and spring onions.",
    ],
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
    ingredients: [
      "4 ripe tomatoes, cut into wedges",
      "1 cucumber, thickly sliced",
      "½ red onion, thinly sliced",
      "A handful of kalamata olives",
      "200 g block of feta",
      "1 tsp dried oregano",
      "3 tbsp extra virgin olive oil",
    ],
    steps: [
      "Combine the tomatoes, cucumber, onion and olives in a wide bowl.",
      "Season lightly with salt and toss gently.",
      "Lay the block of feta on top.",
      "Sprinkle with oregano and drizzle generously with olive oil.",
      "Serve with crusty bread to mop up the juices.",
    ],
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
    ingredients: [
      "200 g plain flour",
      "2 tsp baking powder",
      "1 tbsp sugar",
      "Pinch of salt",
      "300 ml buttermilk",
      "1 egg",
      "30 g melted butter, plus extra for the pan",
      "Maple syrup, to serve",
    ],
    steps: [
      "Whisk the flour, baking powder, sugar and salt in a large bowl.",
      "In a jug, whisk the buttermilk, egg and melted butter.",
      "Pour the wet ingredients into the dry and stir until just combined; a few lumps are fine.",
      "Heat a buttered pan over medium heat and add ladlefuls of batter.",
      "Flip when bubbles appear on the surface, then cook for 1 more minute.",
      "Stack and serve warm with maple syrup.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
