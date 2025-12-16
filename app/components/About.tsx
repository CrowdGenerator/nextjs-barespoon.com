export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bear-900 mb-6">
            Why Bear-Inspired Cooking?
          </h2>
          <p className="text-xl text-bear-700 max-w-3xl mx-auto">
            Bears have been foraging and eating the best of nature for millions of years. 
            Their diet consists of nutrient-rich foods that keep them strong and healthy. 
            By cooking with bear-favorite ingredients, you're tapping into ancestral wisdom!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-bear-800 mb-4">
              Nature's Wisdom in Every Bite
            </h3>
            <ul className="space-y-3 text-bear-700">
              <li className="flex items-start">
                <span className="text-bear-600 mr-2">🐻</span>
                <span>Rich in antioxidants from berries and honey</span>
              </li>
              <li className="flex items-start">
                <span className="text-bear-600 mr-2">🐻</span>
                <span>Omega-3 fatty acids from fresh fish</span>
              </li>
              <li className="flex items-start">
                <span className="text-bear-600 mr-2">🐻</span>
                <span>Natural, whole-food ingredients</span>
              </li>
              <li className="flex items-start">
                <span className="text-bear-600 mr-2">🐻</span>
                <span>Sustainable and seasonal eating</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-bear-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-bear-800 mb-4">
              Fun Bear Facts
            </h3>
             <div className="space-y-4 text-bear-800">
              <p><strong>Honey Hunters:</strong> Bears can smell honey from miles away!</p>
              <p><strong>Berry Experts:</strong> Bears eat up to 200,000 berries in a single day during season.</p>
              <p><strong>Fish Masters:</strong> Bears catch salmon with incredible precision.</p>
              <p><strong>Nut Lovers:</strong> Bears have strong jaws perfect for cracking nuts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
