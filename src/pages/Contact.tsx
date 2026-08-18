import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 min-h-screen border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 border-l-8 border-amber-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">İletişim</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Sorularınız, siparişleriniz veya teknik destek için bize ulaşın. Uzman ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors flex items-start group shadow-sm">
              <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center mr-5 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-sm">Merkez Ofis & Showroom</h3>
                <p className="text-slate-600 font-medium">İpek Mahallesi Kızıltepe / Mardin</p>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors flex items-start group shadow-sm">
              <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center mr-5 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-sm">Telefon & WhatsApp</h3>
                <p className="text-slate-600 font-medium mb-1">Müşteri Temsilcisi: Yusuf İslam Tekin</p>
                <p className="text-slate-600 font-medium">+90 545 775 70 11</p>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors flex items-start group shadow-sm">
              <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center mr-5 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-sm">E-Posta</h3>
                <p className="text-slate-600 font-medium">info@dogruyapi.example.com</p>
                <p className="text-slate-600 font-medium">satis@dogruyapi.example.com</p>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-slate-100 hover:border-amber-500 transition-colors flex items-start group shadow-sm">
              <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center mr-5 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-widest text-sm">Çalışma Saatleri</h3>
                <p className="text-slate-600 font-medium">Pzt - Cuma: 08:30 - 18:00</p>
                <p className="text-slate-600 font-medium">Cumartesi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Quick Contact & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900 p-8 md:p-12 text-white border-t-8 border-amber-500 shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 border-[32px] border-slate-800 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Hızlı İletişim</h2>
                <p className="text-slate-300 mb-8 max-w-lg font-medium leading-relaxed">
                  Fiyat teklifi almak veya ürünlerimiz hakkında detaylı bilgi öğrenmek için tek tıkla WhatsApp üzerinden bize ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton className="w-full sm:w-auto" />
                  <a 
                    href="tel:+905457757011" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-slate-700 hover:border-amber-500 text-white font-bold uppercase tracking-widest px-6 py-4 transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Hemen Ara</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 border-4 border-slate-900 shadow-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                {/* This is a placeholder for a real iframe map */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&h=600" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="relative z-10 bg-slate-900 px-8 py-6 shadow-xl text-center flex flex-col items-center border-b-4 border-amber-500">
                <MapPin className="h-8 w-8 text-amber-500 mb-3" />
                <span className="font-black uppercase tracking-widest text-white">Doğru Yapı Merkez Ofis</span>
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Haritada Görüntülemek İçin Tıklayın</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
