import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('kategori');

  const filteredProducts = currentCategory 
    ? products.filter(p => p.categoryId === currentCategory)
    : products;

  return (
    <div className="bg-slate-50 min-h-screen py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Ürünlerimiz</h1>
          <p className="text-slate-600 text-lg font-medium">İhtiyacınıza uygun en kaliteli yapı malzemeleri.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white p-8 border-2 border-slate-100 shadow-xl sticky top-24 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <h3 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-sm border-l-4 border-amber-500 pl-3">Kategoriler</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSearchParams({})}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest transition-colors ${!currentCategory ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:bg-slate-50 font-bold border border-transparent hover:border-slate-200'}`}
                  >
                    Tüm Ürünler
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSearchParams({ kategori: cat.id })}
                      className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest transition-colors ${currentCategory === cat.id ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:bg-slate-50 font-bold border border-transparent hover:border-slate-200'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center border-4 border-dashed border-slate-200">
                <p className="text-slate-500 font-bold uppercase tracking-widest">Bu kategoride ürün bulunamadı.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
