import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import FloatingCartButton from './components/FloatingCartButton';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#1e3a78' }}>
      {/* Fixed global elements */}
      <Navbar />
      <CartDrawer />
      <FloatingCartButton />

      {/* Page content */}
      <main>
        <Hero />
        <MenuSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
