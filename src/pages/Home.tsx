import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Truck, Wrench } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-50 flex flex-col lg:flex-row min-h-[600px] border-b border-slate-200">
        <div className="lg:w-5/12 bg-white p-12 lg:p-20 flex flex-col justify-center gap-6 relative border-r border-slate-200">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
            Güvenilir <br/>Yapılar İçin <br/> <span className="text-amber-600">Doğru Malzeme</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium mt-4">
            Pimapen sistemleri, çelik kapılar ve endüstriyel hırdavat ürünlerinde 20 yıllık tecrübeyle projenize değer katıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/urunler" className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-800 shadow-xl text-center">
              Ürünleri İncele
            </Link>
            <Link to="/iletisim" className="border-2 border-slate-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-100 text-slate-900 text-center">
              İletişime Geç
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
            <div>
              <p className="text-3xl font-black text-slate-900">1500+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Ürün Çeşidi</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">20+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Yıllık Tecrübe</p>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 relative bg-slate-200 grid grid-cols-2 grid-rows-2 gap-2 p-2">
           <div className="relative group overflow-hidden bg-slate-800 row-span-2">
             <img src="https://images.unsplash.com/photo-1541888086225-ee825c1106e2?auto=format&fit=crop&q=80&w=1000&h=1200" alt="Construction" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
             <div className="absolute bottom-6 left-6 z-20">
               <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-slate-900/80 px-2 py-1">Profesyonel</span>
               <h3 className="text-2xl font-bold text-white mt-2">Endüstriyel Çözümler</h3>
             </div>
           </div>
           <div className="relative group overflow-hidden bg-slate-700">
             <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=600" alt="Doors" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
           </div>
           <div className="bg-amber-500 flex flex-col justify-center p-8 gap-4 text-slate-900">
             <h4 className="text-xl font-black uppercase italic tracking-tight">Özel Teklif Alın</h4>
             <p className="text-sm font-medium">Büyük hacimli inşaat projeleriniz için toptan fiyatlandırma ve lojistik desteği sağlıyoruz.</p>
             <div className="h-1 w-12 bg-slate-900"></div>
           </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wider">Garantili Ürünler</h3>
              <p className="text-slate-600 font-medium">Tüm ürünlerimiz uluslararası kalite standartlarına uygun ve üretici garantisi altındadır.</p>
            </div>
            <div className="p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wider">Hızlı Teslimat</h3>
              <p className="text-slate-600 font-medium">Geniş stok ağımız sayesinde siparişlerinizi projenizin hızına uygun teslim ediyoruz.</p>
            </div>
            <div className="p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wider">Uzman Destek</h3>
              <p className="text-slate-600 font-medium">Projeniz için en doğru malzemeyi seçmenize yardımcı olacak uzman teknik ekibimiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter border-l-4 border-amber-500 pl-4">Öne Çıkan Ürünler</h2>
              <p className="text-slate-600 font-medium max-w-2xl mt-4">En çok tercih edilen yapı malzemeleri ve donanım ürünlerimiz.</p>
            </div>
            <Link to="/urunler" className="hidden sm:flex items-center text-slate-900 font-bold uppercase tracking-widest hover:text-amber-600 transition-colors group">
              Tümünü Gör 
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 sm:hidden">
            <Link to="/urunler" className="flex items-center justify-center w-full border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest py-4 hover:bg-slate-900 hover:text-white transition-colors">
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-20 transform translate-x-16 -translate-y-16 rotate-45"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter">Geniş Ürün Yelpazesi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, index) => {
              const bgs = [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600",
                "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=600",
                "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800&h=600"
              ];
              return (
                <Link 
                  key={cat.id} 
                  to={`/urunler?kategori=${cat.id}`}
                  className="group relative overflow-hidden aspect-[4/3] flex items-center justify-center border-2 border-slate-800 hover:border-amber-500 transition-colors"
                >
                  <img src={bgs[index]} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60 transition-all group-hover:scale-105 duration-700" />
                  <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors"></div>
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-amber-500 m-4 transition-colors"></div>
                  <h3 className="relative z-10 text-2xl font-black uppercase tracking-widest px-6 text-center group-hover:text-amber-400 transition-colors">{cat.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
