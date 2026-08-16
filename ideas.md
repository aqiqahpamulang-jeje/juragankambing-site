# Arah Desain JuraganKambing

## Tiga pendekatan awal

### Theme Name: Lumbung Senja
**Very Brief Intro:** Identitas hangat yang memadukan nuansa lumbung pedesaan, fotografi peternakan, dan aksen oranye kunyit yang ramah. Arah ini terasa akrab, jujur, dan cocok untuk keluarga yang mencari layanan aqiqah terpercaya.
**Probability:** 0.047

### Theme Name: Kebun Pagi
**Very Brief Intro:** Sistem editorial yang ringan dengan bidang putih tulang, hijau daun, serta komposisi seperti majalah agrikultur modern. Arah ini menekankan transparansi, kualitas bahan, dan proses yang rapi.
**Probability:** 0.083

### Theme Name: Pasar Kurban
**Very Brief Intro:** Bahasa visual yang lebih berani dan kontras, mengambil energi papan harga pasar, label kemasan, dan aksen merah cabai. Arah ini lebih komersial, langsung, dan berorientasi konversi.
**Probability:** 0.016

## Pendekatan terpilih: Lumbung Senja

### Design Movement
Kontemporer rustic editorial: kehangatan desain kemasan UMKM premium bertemu struktur landing page editorial yang rapi, dengan tekstur kertas, garis bingkai tipis, dan foto dokumenter yang terasa nyata.

### Core Principles
1. **Hangat namun tepercaya:** warna bumi, ruang bernapas, dan microcopy yang menenangkan.
2. **Proses terlihat:** layanan dijelaskan sebagai perjalanan dari pemilihan hewan hingga distribusi.
3. **Keluarga sebagai pusat:** visual dan CTA mengutamakan kemudahan, rasa syukur, dan kepastian.
4. **Bukan katalog generik:** susunan asimetris, label kecil, dan detail kemasan menjadi pembeda.

### Color Philosophy
Warna dasar memakai putih tulang dan arang lembut agar halaman terasa bersih tanpa menjadi steril. Hijau zaitun memberi sinyal alam dan perawatan, sementara oranye kunyit menjadi warna milik brand untuk menandai CTA, harga, dan momen penting. Aksen merah bata hanya dipakai sebagai penekanan editorial agar halaman tetap hangat, bukan meriah berlebihan.

### Layout Paradigm
Struktur halaman memakai alur editorial asimetris: hero dua kolom dengan kartu informasi yang menumpuk, pita alamat yang melintas, lalu section proses dengan marker vertikal. Konten tidak selalu dipusatkan; beberapa elemen sengaja menempel ke tepi viewport untuk memberi rasa seperti halaman majalah dan kemasan premium.

### Signature Elements
- Label kecil berbentuk kapsul persegi dengan tulisan uppercase dan garis bingkai.
- Motif garis kontur/lumbung berupa tekstur grain halus di bidang warna.
- Kartu harga dengan sudut potong diagonal kecil, seolah potongan label kemasan.

### Interaction Philosophy
Interaksi harus terasa seperti membuka paket yang rapi: hover mengangkat kartu sedikit, CTA memberi respons fisik singkat, dan anchor navigation bergerak halus. Menu mobile membuka panel bersih dari kanan, sementara semua tindakan kontak mengarah ke WhatsApp atau telepon nyata tanpa form backend.

### Animation
Animasi masuk memakai stagger 40–70ms untuk headline, label, dan kartu; hanya transform dan opacity yang dianimasikan. Hover kartu bergerak maksimal 4px dan menaikkan shadow. Pita alamat bergerak sangat halus secara horizontal hanya pada desktop. Semua motion dimatikan atau diperlambat sesuai prefers-reduced-motion.

### Typography System
Display memakai **DM Serif Display** untuk headline besar agar terasa editorial dan berkarakter. Body memakai **Plus Jakarta Sans** untuk keterbacaan dan kesan digital yang modern. Label memakai Plus Jakarta Sans 10–11px dengan letter spacing lebar; heading section 42–56px desktop, 34px mobile; body 16–18px dengan line-height lapang.

### Brand Essence
**Aqiqah yang terasa dekat: hewan sehat, proses jelas, menu siap berbagi — untuk keluarga yang ingin menunaikan syukur tanpa repot.** Personality: hangat, teliti, membumi.

### Brand Voice
Headline berbicara langsung, tenang, dan penuh kepastian; CTA terasa mengundang konsultasi, bukan memaksa transaksi. Microcopy menyebut detail proses agar orang tua merasa aman.

Contoh headline: “Syukuran lebih tenang, karena setiap prosesnya kami jaga.”
Contoh CTA: “Tanya paket aqiqah”

### Wordmark & Logo
Wordmark berupa “juragankambing” lowercase dengan bentuk huruf yang membulat, dipasangkan dengan ikon kepala kambing geometris sederhana di dalam lingkaran segel. Ikon dibuat tebal dan mudah terbaca pada header maupun favicon; bukan sekadar teks brand dalam font biasa.

### Signature Brand Color
**Kunyit Aqiqah — #E88B19**, oranye hangat yang mengingatkan pada bumbu dapur, kemasan makanan, dan momen berbagi. Warna ini menjadi penanda utama CTA dan highlight harga.

## Keputusan implementasi
Website akan berupa satu halaman statis React yang aman untuk GitHub Pages dan Cloudflare Pages. Fitur dinamis dibatasi pada menu mobile, smooth scrolling, sticky header, dan tombol kontak eksternal sehingga tidak membutuhkan backend, database, atau environment variable tambahan.
