import { Check } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 border-l-8 border-amber-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Hakkımızda</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Doğru Yapı, çeyrek asrı aşkın süredir inşaat sektöründe güvenin ve kalitenin adresi olmaya devam etmektedir. 
            Müşteri memnuniyetini merkeze alan yaklaşımımızla sektörün öncü tedarikçilerinden biriyiz.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative overflow-hidden shadow-2xl aspect-[4/3] border-4 border-slate-900 bg-slate-100">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200&h=900" 
              alt="İnşaat Projesi" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest border-b-2 border-slate-200 pb-4">Vizyonumuz & Misyonumuz</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              Yenilikçi teknolojileri ve sürdürülebilir malzemeleri yakından takip ederek, projelerinizin 
              dayanıklılığını ve estetiğini artırmak en büyük hedefimizdir. Her ölçekteki inşaat projesine 
              değer katan çözümler sunuyoruz.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Yüksek kalite standartlarında ürün tedariği",
                "Projeye özel teknik danışmanlık hizmeti",
                "Zamanında teslimat ve lojistik desteği",
                "Sürdürülebilir ve çevre dostu malzeme seçenekleri"
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-white p-4 border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 bg-amber-500 flex items-center justify-center shrink-0 mr-4">
                    <Check className="h-4 w-4 text-slate-900 font-bold" />
                  </div>
                  <span className="text-slate-700 font-bold uppercase tracking-widest text-xs mt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900 p-10 md:p-16 text-white text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 border-[32px] border-slate-800 rounded-full opacity-50"></div>
          
          <div className="relative z-10 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-800 pb-8 sm:pb-0">
            <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tighter">20+</div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Yıllık Tecrübe</div>
          </div>
          <div className="relative z-10 border-b-2 md:border-b-0 md:border-r-2 border-slate-800 pb-8 sm:pb-0">
            <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tighter">5000+</div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Tamamlanan Proje</div>
          </div>
          <div className="relative z-10 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-800 pb-8 sm:pb-0">
            <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tighter">50+</div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Uzman Personel</div>
          </div>
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tighter">100%</div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Müşteri Memnuniyeti</div>
          </div>
        </div>

        {/* Certificates placeholder */}
        <div className="text-center max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-widest">Belgelerimiz & Sertifikalarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using placeholders for certificates */}
            <div className="bg-white p-8 border-2 border-slate-200 hover:border-amber-500 hover:bg-slate-900 hover:text-amber-500 transition-colors flex items-center justify-center aspect-square group">
              <span className="font-bold text-slate-400 group-hover:text-amber-500 uppercase tracking-widest">ISO 9001</span>
            </div>
            <div className="bg-white p-8 border-2 border-slate-200 hover:border-amber-500 hover:bg-slate-900 hover:text-amber-500 transition-colors flex items-center justify-center aspect-square group">
              <span className="font-bold text-slate-400 group-hover:text-amber-500 uppercase tracking-widest">TSE Sertifikası</span>
            </div>
            <div className="bg-white p-8 border-2 border-slate-200 hover:border-amber-500 hover:bg-slate-900 hover:text-amber-500 transition-colors flex items-center justify-center aspect-square group">
              <span className="font-bold text-slate-400 group-hover:text-amber-500 uppercase tracking-widest">CE Belgesi</span>
            </div>
            <div className="bg-white p-8 border-2 border-slate-200 hover:border-amber-500 hover:bg-slate-900 hover:text-amber-500 transition-colors flex items-center justify-center aspect-square group">
              <span className="font-bold text-slate-400 group-hover:text-amber-500 uppercase tracking-widest">OHSAS 18001</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
