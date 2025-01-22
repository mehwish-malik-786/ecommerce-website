
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ProductCard from './components/ProductCard'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg?height=300&width=300' },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


  