import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Recipes } from '@/app/components/Recipes';
import { Ingredients } from '@/app/components/Ingredients';
import { About } from '@/app/components/About';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Recipes />
        <Ingredients />
        <About />
      </main>
      <Footer />
    </div>
  );
}
