import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { categories } from '../data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 flex items-center justify-center rounded-sm font-black text-slate-900 text-xl italic">D</div>
            <span className="text-2xl font-bold tracking-tighter uppercase">DOĞRU<span className="text-amber-500">YAPI</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest items-center">
            <Link to="/" className={`pb-1 ${isActive('/') ? 'border-b-2 border-amber-500 text-white' : 'hover:text-amber-500 text-slate-300'}`}>Anasayfa</Link>
            <Link to="/kurumsal" className={`pb-1 ${isActive('/kurumsal') ? 'border-b-2 border-amber-500 text-white' : 'hover:text-amber-500 text-slate-300'}`}>Kurumsal</Link>
            
            {/* Products Dropdown */}
            <div className="relative group"
                 onMouseEnter={() => setIsDropdownOpen(true)}
                 onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className={`flex items-center gap-1 pb-1 ${location.pathname.startsWith('/urunler') ? 'border-b-2 border-amber-500 text-white' : 'hover:text-amber-500 text-slate-300'}`}>
                <span>Ürünler</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-slate-800 text-white shadow-xl rounded-sm overflow-hidden transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                <div className="py-2 flex flex-col">
                  <Link to="/urunler" className="px-4 py-2 hover:bg-slate-700 hover:text-amber-400 font-bold tracking-wider border-b border-slate-700">
                    Tüm Ürünler
                  </Link>
                  {categories.map(cat => (
                    <Link key={cat.id} to={`/urunler?kategori=${cat.id}`} className="px-4 py-2 text-xs tracking-wider hover:bg-slate-700 hover:text-amber-400">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/iletisim" className={`pb-1 ${isActive('/iletisim') ? 'border-b-2 border-amber-500 text-white' : 'hover:text-amber-500 text-slate-300'}`}>İletişim</Link>
          </nav>

          {/* Customer Line */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xs text-slate-400 uppercase tracking-widest">Müşteri Hattı:</span>
            <span className="font-bold text-amber-500 tracking-wider">+90 (555) 123 45 67</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 uppercase tracking-widest text-sm">
          <div className="px-2 pt-2 pb-3 flex flex-col gap-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-sm ${isActive('/') ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-700 hover:text-amber-400 text-slate-300'}`}>Anasayfa</Link>
            <Link to="/kurumsal" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-sm ${isActive('/kurumsal') ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-700 hover:text-amber-400 text-slate-300'}`}>Kurumsal</Link>
            <div className="px-3 py-2 text-slate-500 font-bold">Kategoriler</div>
            <Link to="/urunler" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-amber-400">Tüm Ürünler</Link>
            {categories.map(cat => (
              <Link key={cat.id} to={`/urunler?kategori=${cat.id}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-amber-400">
                {cat.name}
              </Link>
            ))}
            <Link to="/iletisim" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-sm mt-2 ${isActive('/iletisim') ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-700 hover:text-amber-400 text-slate-300'}`}>İletişim</Link>
          </div>
        </div>
      )}
    </header>
  );
}
