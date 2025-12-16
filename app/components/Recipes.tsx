export function Recipes() {
  const recipes = [
    {
      title: "Honey Glazed Salmon",
      description: "Fresh salmon drizzled with wild honey and herbs - a bear's dream come true!",
      ingredients: ["Salmon fillet", "Wild honey", "Fresh herbs", "Lemon"],
      time: "25 mins"
    },
    {
      title: "Berry Blast Smoothie",
      description: "A refreshing blend of berries that bears forage for in the wild.",
      ingredients: ["Mixed berries", "Yogurt", "Honey", "Banana"],
      time: "5 mins"
    },
    {
      title: "Forest Mushroom Risotto",
      description: "Creamy risotto with wild mushrooms - perfect for bear-like comfort food.",
      ingredients: ["Arborio rice", "Wild mushrooms", "Vegetable broth", "Parmesan"],
      time: "40 mins"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-bear-900 mb-12">
          Bear-Inspired Recipes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-bear-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-bear-800 mb-4">{recipe.title}</h3>
              <p className="text-bear-700 mb-4">{recipe.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-bear-800 mb-2">Key Ingredients:</h4>
                <ul className="text-sm text-bear-600">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>• {ing}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-bear-600">⏱️ {recipe.time}</span>
                <button className="bg-bear-600 hover:bg-bear-700 text-white px-4 py-2 rounded transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
