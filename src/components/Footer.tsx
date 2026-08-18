import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 text-slate-900">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded-sm font-black text-slate-900 text-lg italic">D</div>
              <span className="font-bold text-xl tracking-tighter uppercase">DOĞRU<span className="text-amber-500">YAPI</span></span>
            </Link>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              İnşaat malzemeleri ve donanımlarında güvenilir çözüm ortağınız. Yüksek kaliteli ürünler ve profesyonel hizmet için bizi tercih edin.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:border-l md:border-slate-100 md:pl-8">
            <h3 className="text-slate-900 font-black mb-6 uppercase tracking-widest text-sm">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 font-medium text-sm text-slate-600">
              <li><Link to="/kurumsal" className="hover:text-amber-500 transition-colors uppercase tracking-wider">Hakkımızda</Link></li>
              <li><Link to="/urunler" className="hover:text-amber-500 transition-colors uppercase tracking-wider">Tüm Ürünler</Link></li>
              <li><Link to="/iletisim" className="hover:text-amber-500 transition-colors uppercase tracking-wider">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 md:border-l md:border-slate-100 md:pl-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-2">Merkez Ofis</p>
                <div className="flex items-start text-sm text-slate-600 font-medium">
                  <MapPin className="h-4 w-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>Sanayi Mahallesi, İnşaatçılar Sitesi No: 42<br />Merkez / Türkiye</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-2">Telefon</p>
                  <div className="flex items-center text-sm font-bold text-slate-900">
                    <Phone className="h-4 w-4 text-amber-500 mr-2 shrink-0" />
                    <a href="tel:+905551234567" className="hover:text-amber-500 transition-colors">+90 (555) 123 45 67</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-2">E-Posta</p>
                  <div className="flex items-center text-sm font-bold text-slate-900">
                    <Mail className="h-4 w-4 text-amber-500 mr-2 shrink-0" />
                    <a href="mailto:info@dogruyapi.example.com" className="hover:text-amber-500 transition-colors">info@dogruyapi.example.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Doğru Yapı İnşaat Malzemeleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
