import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import dynamic from 'next/dynamic';

const Recipes = dynamic(() => import('@/app/components/Recipes').then(mod => ({ default: mod.Recipes })), { ssr: true });
const Ingredients = dynamic(() => import('@/app/components/Ingredients').then(mod => ({ default: mod.Ingredients })), { ssr: true });
const About = dynamic(() => import('@/app/components/About').then(mod => ({ default: mod.About })), { ssr: true });
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
