/* Style reminder: Lumbung Senja — rustic-editorial, hangat, asimetris, dengan aksen Kunyit Aqiqah #E88B19. */
import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Menu, Phone, Sparkles, X } from "lucide-react";

const heroImage = "/manus-storage/juragankambing-hero_647c54d4.png";
const processImage = "https://images.unsplash.com/photo-1533318087102-b3ad366ed041?auto=format&fit=crop&w=1200&q=85";
const menuImage = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85";
const logoImage = "/manus-storage/juragankambing-logo_436ddf41.png";
const whatsappUrl = "https://wa.me/628118204142?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20paket%20aqiqah.";

const benefits = [
  { number: "01", title: "Sesuai syariat", copy: "Hewan dipilih sehat dan cukup umur. Setiap tahap kami jaga dengan amanah." },
  { number: "02", title: "Bisa menyaksikan", copy: "Dapatkan kabar proses yang jelas, dari pemilihan hewan hingga siap dibagikan." },
  { number: "03", title: "Menu siap berbagi", copy: "Masakan hangat, porsi rapi, dan pilihan menu yang disukai keluarga." },
];

const packages = [
  { name: "Aqiqah 1 ekor Hemat", price: "Rp 1.700.000", detail: "160 tusuk sate & 40 bungkus gulai", accent: "olive", items: ["Kambing sehat sesuai syariat", "Masakan olahan kambing", "Nasi box siap dibagikan"] },
  { name: "Aqiqah 1 ekor Standar", price: "Rp 1.900.000", detail: "240 tusuk sate & 60 bungkus gulai", accent: "orange", items: ["Kambing sehat sesuai syariat", "Porsi sate dan gulai lebih banyak", "Dokumentasi proses"] },
  { name: "Aqiqah 1 ekor Super", price: "Rp 2.200.000", detail: "320 tusuk sate & 80 bungkus gulai", accent: "clay", items: ["Kambing pilihan lebih besar", "Menu siap dibagikan", "Kemasan rapi untuk keluarga"] },
  { name: "Aqiqah 1 ekor Istimewa", price: "Rp 2.500.000", detail: "400 tusuk sate & 100 bungkus gulai", accent: "terracotta", items: ["Porsi paling lengkap", "Kambing sehat sesuai syariat", "Pendampingan pemesanan"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><span>JURAGANKAMBING / AQIQAH YANG TERASA DEKAT</span><span className="announcement-location">Pamulang · Tangerang Selatan</span></div>
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="JuraganKambing beranda" onClick={closeMenu}>
          <span className="brand-seal" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21"/><path d="M16 18c-4-5-5-9-2-12 4 1 7 4 8 8m10 4c4-5 5-9 2-12-4 1-7 4-8 8M16 25c2-4 5-6 8-6s6 2 8 6v7c-2 3-5 5-8 5s-6-2-8-5z"/><circle cx="21" cy="27" r="1.4"/><circle cx="27" cy="27" r="1.4"/><path d="M22 32c1.3 1 2.7 1 4 0"/></svg></span>
          <span><strong>juragan</strong><em>kambing</em></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigasi utama">
          <a href="#kenapa" onClick={closeMenu}>Kenapa kami</a>
          <a href="#paket" onClick={closeMenu}>Paket aqiqah</a>
          <a href="#proses" onClick={closeMenu}>Cara kerja</a>
          <a href="#kontak" onClick={closeMenu}>Kontak</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>Tanya paket <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="beranda">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={13} /> Aqiqah mudah · proses amanah</p>
            <h1>Syukuran lebih tenang, <span>karena setiap prosesnya kami jaga.</span></h1>
            <p className="hero-lede">Layanan aqiqah praktis untuk keluarga di Tangerang Selatan dan sekitarnya. Kambing sehat, masakan hangat, siap dibagikan.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi via WhatsApp <ArrowUpRight size={17} /></a><a className="text-link" href="#paket">Lihat pilihan paket <ChevronDown size={16} /></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>A</span><span>K</span></div><p><strong>Pelayanan dekat dan jelas.</strong><br />Dari keluarga, untuk keluarga.</p></div>
          </div>
          <div className="hero-visual"><img src={heroImage} alt="Kambing sehat di area peternakan JuraganKambing" /><div className="hero-stamp"><span>Sehat</span><strong>&amp;</strong><span>Terjaga</span></div><div className="hero-caption"><span>01 / 04</span><span>Peternakan pilihan kami</span></div></div>
        </section>

        <div className="address-ribbon"><span className="ribbon-label">INFO</span><span>Alamat kami: Vila Pamulang, Jl. Srikandi 3 DC4 No.16, Pondok Benda, Pamulang.</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi kami <ArrowUpRight size={15} /></a></div>

        <section className="intro-section section-pad" id="kenapa">
          <div className="section-kicker">01 — Dikerjakan dengan amanah</div>
          <div className="intro-grid"><div><h2>Bukan sekadar <em>pesan kambing.</em></h2></div><div className="intro-copy"><p>Aqiqah adalah momen syukur yang ingin dikenang dengan tenang. Kami membantu menyiapkan semuanya dengan proses yang rapi, pilihan menu yang akrab, dan komunikasi yang mudah dipahami.</p><a className="text-link dark" href="#proses">Kenali proses kami <ArrowUpRight size={16} /></a></div></div>
          <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.number}><span className="benefit-number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.copy}</p></article>)}</div>
        </section>

        <section className="story-section section-pad" id="proses"><div className="story-image"><img src={processImage} alt="Peternak memeriksa kambing di kandang yang bersih" /><span className="image-label">Dari kandang yang kami jaga</span></div><div className="story-copy"><div className="section-kicker">02 — Dari hewan hingga hidangan</div><h2>Proses yang terlihat, <em>hati yang lega.</em></h2><p>Kami percaya rasa percaya tumbuh dari detail. Karena itu kami terbuka soal pemilihan hewan, waktu pengerjaan, pilihan masakan, hingga pengiriman.</p><ol className="process-list"><li><span>01</span><div><strong>Pilih paket</strong><p>Ceritakan kebutuhan acara dan jumlah penerima.</p></div></li><li><span>02</span><div><strong>Kami siapkan</strong><p>Hewan dan dapur kami persiapkan dengan standar yang jelas.</p></div></li><li><span>03</span><div><strong>Siap dibagikan</strong><p>Paket datang rapi, hangat, dan siap menjadi berkah.</p></div></li></ol></div></section>

        <section className="menu-feature section-pad"><div className="menu-feature-copy"><div className="section-kicker">03 — Menu yang mengundang pulang</div><h2>Masakan hangat untuk <em>momen berbagi.</em></h2><p>Olahan kambing yang akrab di lidah, dirapikan dalam paket yang praktis untuk dibagikan ke keluarga, tetangga, dan orang-orang tersayang.</p><a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Tanya pilihan menu <ArrowUpRight size={17} /></a></div><div className="menu-feature-image"><img src={menuImage} alt="Paket hidangan aqiqah siap dibagikan" /><span className="vertical-note">Dimasak hangat · dikemas rapi</span></div></section>

        <section className="packages-section section-pad" id="paket"><div className="packages-heading"><div><div className="section-kicker">04 — Daftar harga aqiqah</div><h2>Pilih paket yang <em>paling pas.</em></h2></div><p>Kami siapkan pilihan paket untuk kebutuhan berbagi yang berbeda. Semua harga dapat dikonsultasikan sebelum pemesanan.</p></div><div className="packages-grid">{packages.map((pkg, index) => <article className={`package-card ${pkg.accent}`} key={pkg.name}><div className="package-visual"><span>01 / {String(index + 1).padStart(2, "0")}</span><strong>Aqiqah<br />{index === 0 ? "Hemat" : index === 1 ? "Standar" : index === 2 ? "Super" : "Istimewa"}</strong></div><div className="package-top"><span className="package-tag">{pkg.accent === "orange" ? "Paling dipilih" : "Aqiqah 1 ekor"}</span><span className="package-arrow"><ArrowUpRight size={19} /></span></div><h3>{pkg.name.replace("Aqiqah 1 ekor ", "")}</h3><div className="package-price">{pkg.price}</div><p className="package-detail">{pkg.detail}</p><ul>{pkg.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer">Pesan sekarang <ArrowUpRight size={15} /></a></article>)}</div></section>

        <section className="closing-section section-pad" id="kontak"><div className="closing-card"><div><div className="section-kicker">05 — Kita bicarakan</div><h2>Siap menyiapkan<br /><em>momen syukur?</em></h2></div><div className="closing-actions"><p>Jangan ragu bertanya. Kami siap membantu dari pilihan kambing sampai paket yang paling pas untuk keluarga.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Mulai ngobrol <ArrowUpRight size={17} /></a><a className="phone-link" href="tel:+628118204142"><Phone size={16} /> 0811 820 4142</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-seal" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21"/><path d="M16 18c-4-5-5-9-2-12 4 1 7 4 8 8m10 4c4-5 5-9 2-12-4 1-7 4-8 8M16 25c2-4 5-6 8-6s6 2 8 6v7c-2 3-5 5-8 5s-6-2-8-5z"/><circle cx="21" cy="27" r="1.4"/><circle cx="27" cy="27" r="1.4"/><path d="M22 32c1.3 1 2.7 1 4 0"/></svg></span><span><strong>juragan</strong><em>kambing</em></span></div><p>Aqiqah mudah, proses amanah.<br />Pamulang · Tangerang Selatan</p><div className="footer-links"><a href="#beranda">Kembali ke atas <ArrowUpRight size={15} /></a><span>© 2026 JuraganKambing</span></div></footer>
    </div>
  );
}
