export function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-bear-100 to-bear-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-bear-900 mb-6">
          Great Food with Things Bears Like
        </h1>
        <p className="text-xl md:text-2xl text-bear-700 mb-8 max-w-3xl mx-auto">
          Discover delicious recipes using honey, berries, fish, and other ingredients that bears absolutely love. 
          Because if it's good enough for bears, it's good enough for you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#recipes" className="bg-bear-600 hover:bg-bear-700 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore Recipes
          </a>
           <a href="#ingredients" className="border-2 border-bear-600 text-bear-800 hover:bg-bear-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Bear Favorites
          </a>
        </div>
      </div>
    </section>
  );
}
