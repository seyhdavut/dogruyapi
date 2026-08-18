import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border-2 border-slate-100 hover:border-amber-500 transition-all hover:shadow-xl flex flex-col h-full group relative">
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-slate-900 text-amber-400 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 shadow-sm">
            {product.categoryName}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-black text-xl text-slate-900 mb-2 uppercase tracking-tighter line-clamp-2">{product.title}</h3>
        <p className="text-slate-600 text-sm font-medium mb-6 line-clamp-2 flex-grow">{product.description}</p>
        
        <Link 
          to={`/urunler/${product.slug}`}
          className="inline-flex items-center justify-center w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-amber-500 hover:text-slate-900 transition-colors"
        >
          <span>Ürünü İncele</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
