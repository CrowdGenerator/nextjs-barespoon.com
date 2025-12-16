export function Footer() {
  return (
    <footer className="bg-bear-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
             <div className="text-2xl font-bold mb-4">🐻 BareSpoon</div>
            <p className="text-bear-200 mb-4">
              Great food with things bears like. Discover nature's best ingredients 
              through delicious, bear-inspired recipes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-bear-200">
              <li><a href="#recipes" className="hover:text-white transition-colors">Recipes</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-bear-200">
              Have a bear-approved recipe? Share it with us!
            </p>
            <p className="text-bear-200 mt-2">
              hello@barespoon.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-bear-800 mt-8 pt-8 text-center text-bear-300">
          <p>&copy; 2025 BareSpoon. All rights reserved. Made with ❤️ and honey.</p>
        </div>
      </div>
    </footer>
  );
}
