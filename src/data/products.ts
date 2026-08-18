export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  image: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  // Pimapen & Pencere Sistemleri
  {
    id: "p1",
    slug: "super-elit-70mm-pvc-pencere",
    title: "Süper Elit 70mm PVC Pencere",
    description: "Yüksek ısı ve ses yalıtımı sağlayan, estetik ve dayanıklı 70mm profil sistemli PVC pencere.",
    categoryId: "pimapen-pencere",
    categoryName: "Pimapen & Pencere Sistemleri",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fceb8d12?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Profil Genişliği", value: "70 mm" },
      { label: "Odacık Sayısı", value: "5 Odacıklı" },
      { label: "Cam Tipi", value: "Çift Cam / Isıcam Sinerji" },
      { label: "Isı Yalıtım Değeri (Uf)", value: "1.3 W/m²K" }
    ]
  },
  {
    id: "p2",
    slug: "isi-camli-surme-kapi-sistemi",
    title: "Isı Camlı Sürme Kapı Sistemi",
    description: "Geniş açıklıklar için ideal, mekanınıza ferahlık katan yüksek yalıtımlı sürme kapı sistemi.",
    categoryId: "pimapen-pencere",
    categoryName: "Pimapen & Pencere Sistemleri",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Sistem", value: "Paralel Sürme (Hebe-Schiebe)" },
      { label: "Cam Tipi", value: "Temperli Isıcam" },
      { label: "Profil Rengi", value: "Antrasit Gri / Beyaz / Altınmeşe" },
      { label: "Kilit Sistemi", value: "Çok Noktalı Güvenlik Kilidi" }
    ]
  },
  
  // Çelik Kapılar
  {
    id: "c1",
    slug: "asos-serisi-villa-kapisi",
    title: "Asos Serisi Villa Kapısı",
    description: "Dış etkenlere karşı ekstra dayanıklı, kompozit kaplamalı lüks villa ve müstakil ev kapısı.",
    categoryId: "celik-kapilar",
    categoryName: "Çelik Kapılar",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Dış Yüzey", value: "Kompakt Lamine / Kompozit" },
      { label: "İç Gövde", value: "2mm Güçlendirilmiş Çelik" },
      { label: "Kilit", value: "Monoblok 3 Yönlü Kilit" },
      { label: "Güvenlik Seviyesi", value: "Sınıf 4 (Yüksek Güvenlik)" }
    ]
  },
  {
    id: "c2",
    slug: "mekanik-kilitli-daire-kapisi",
    title: "Mekanik Kilitli Daire Kapısı",
    description: "Apartman daireleri için şık tasarımlı, ahşap görünümlü ve yüksek güvenlikli çelik kapı.",
    categoryId: "celik-kapilar",
    categoryName: "Çelik Kapılar",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Yüzey", value: "Ceviz / Meşe Ahşap Kaplama" },
      { label: "Sac Kalınlığı", value: "1.5 mm DKP Sac" },
      { label: "Kilit", value: "Kale Kilit Sistemleri" },
      { label: "Yalıtım", value: "Taş Yünü Isı ve Ses Yalıtımı" }
    ]
  },

  // Hırdavat & Nalburiye
  {
    id: "h1",
    slug: "pro-seri-darbeli-matkap",
    title: "Pro-Seri Darbeli Matkap 850W",
    description: "Profesyonel kullanıma uygun, beton ve duvar delme işlemleri için yüksek performanslı darbeli matkap.",
    categoryId: "hirdavat",
    categoryName: "Hırdavat & Nalburiye",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Güç", value: "850 Watt" },
      { label: "Mandren", value: "13 mm Anahtarsız" },
      { label: "Devir Hızı", value: "0-3000 dev/dk" },
      { label: "Darbe Oranı", value: "48000 darbe/dk" }
    ]
  },
  {
    id: "h2",
    slug: "paslanmaz-celik-kapi-kolu-seti",
    title: "Paslanmaz Çelik Kapı Kolu Seti",
    description: "İç mekan kapıları için paslanmaz çelikten üretilmiş, uzun ömürlü ve şık rozetli kapı kolu takımı.",
    categoryId: "hirdavat",
    categoryName: "Hırdavat & Nalburiye",
    image: "https://images.unsplash.com/photo-1577732297126-c2ba6eeefb19?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Malzeme", value: "304 Kalite Paslanmaz Çelik" },
      { label: "Tip", value: "Rozetli (Yuvarlak)" },
      { label: "Yüzey", value: "Mat / Satine" },
      { label: "Kullanım Alanı", value: "Oda, WC ve Dış Kapılar" }
    ]
  },
  {
    id: "h3",
    slug: "silikon-mastik-cesitleri",
    title: "Profesyonel Silikon ve Mastik Serisi",
    description: "Pencere montajı, banyo ve mutfak sızdırmazlık işlemleri için anti-bakteriyel %100 silikon.",
    categoryId: "hirdavat",
    categoryName: "Hırdavat & Nalburiye",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400",
    specs: [
      { label: "Kürlenme", value: "Asetik" },
      { label: "Özellik", value: "Küf Önleyici (Anti-bakteriyel)" },
      { label: "Hacim", value: "280 ml / 310 ml" },
      { label: "Renk Seçenekleri", value: "Şeffaf, Beyaz, Siyah" }
    ]
  }
];

export const categories = [
  { id: "pimapen-pencere", name: "Pimapen & Pencere Sistemleri" },
  { id: "celik-kapilar", name: "Çelik Kapılar" },
  { id: "hirdavat", name: "Hırdavat & Nalburiye" }
];
