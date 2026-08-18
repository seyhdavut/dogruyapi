import { useParams, Navigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import { Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/urunler" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/urunler" className="inline-flex items-center text-slate-500 hover:text-amber-600 transition-colors mb-8 font-bold uppercase tracking-widest text-sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Ürünlere Dön
        </Link>

        <div className="bg-white border-2 border-slate-900 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 hidden lg:block z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Gallery (Single image for now) */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full bg-slate-100 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-900 p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover max-h-[600px] shadow-lg border-2 border-slate-900"
              />
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
              <div className="mb-4">
                <Link to={`/urunler?kategori=${product.categoryId}`} className="bg-slate-900 text-amber-400 font-bold text-xs uppercase tracking-widest px-3 py-1.5 hover:bg-slate-800 transition-colors">
                  {product.categoryName}
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">{product.title}</h1>
              
              <div className="mb-10">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">{product.description}</p>
              </div>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-4 h-4 bg-amber-500 inline-block"></span>
                    Teknik Özellikler
                  </h3>
                  <div className="border-t-2 border-slate-900">
                    <ul className="">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-slate-100 py-4 group hover:bg-slate-50 transition-colors px-2">
                          <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1 sm:mb-0">{spec.label}</span>
                          <span className="font-black text-slate-900 sm:text-right">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t-2 border-slate-100">
                <WhatsAppButton productName={product.title} className="flex-1" />
                <a 
                  href="tel:+905457757011" 
                  className="flex-1 inline-flex items-center justify-center gap-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-widest text-sm px-6 py-4 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-100 p-4">
                <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                <span>Stokta Var - Hemen Teslim</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
