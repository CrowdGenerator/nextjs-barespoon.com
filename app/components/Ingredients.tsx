export function Ingredients() {
  const ingredients = [
    {
      name: "Wild Honey",
      description: "Nature's sweetest treat that bears can't resist raiding beehives for.",
      icon: "🍯",
      uses: ["Sweetener", "Glaze", "Marinade"]
    },
    {
      name: "Fresh Berries",
      description: "Blueberries, raspberries, and strawberries - perfect for snacking or baking.",
      icon: "🫐",
      uses: ["Smoothies", "Desserts", "Salads"]
    },
    {
      name: "Salmon",
      description: "Rich, fatty fish that provides essential omega-3s and protein.",
      icon: "🐟",
      uses: ["Grilled", "Baked", "Smoked"]
    },
    {
      name: "Wild Mushrooms",
      description: "Earthy, meaty mushrooms that grow in forest floors.",
      icon: "🍄",
      uses: ["Soups", "Risotto", "Stuffing"]
    },
    {
      name: "Nuts & Seeds",
      description: "Protein-packed snacks that bears love to forage for.",
      icon: "🥜",
      uses: ["Snacks", "Baking", "Toppings"]
    },
    {
      name: "Root Vegetables",
      description: "Carrots, potatoes, and beets that grow underground.",
      icon: "🥕",
      uses: ["Roasting", "Soups", "Mashed"]
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-bear-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-bear-900 mb-12">
          Ingredients Bears Love
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ing, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{ing.icon}</div>
              <h3 className="text-xl font-semibold text-bear-800 mb-2">{ing.name}</h3>
              <p className="text-bear-700 mb-4">{ing.description}</p>
              <div>
                <h4 className="font-semibold text-bear-800 mb-2">Common Uses:</h4>
                <div className="flex flex-wrap gap-2">
                  {ing.uses.map((use, i) => (
                    <span key={i} className="bg-bear-100 text-bear-700 px-2 py-1 rounded text-sm">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
