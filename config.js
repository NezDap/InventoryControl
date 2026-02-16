// config.js
// Isi nilai SUPABASE_URL dan SUPABASE_ANON_KEY dari Supabase Dashboard:
// Project Settings -> API (atau Settings -> API Keys + Data API)

window.APP_CONFIG = {
  // Contoh: "https://abcd1234.supabase.co"
  SUPABASE_URL: "https://rblgdzpkblhznegnpfou.supabase.co",
  // Pakai PUBLISHABLE/ANON key. Biasanya prefix: sb_publishable_...
  SUPABASE_ANON_KEY: "sb_publishable_RGBCOPDW-yp7TfjzXFM6jA_QGQlagql",
  // Kalau login pakai ID tanpa @, email akan jadi: <ID> + suffix ini
  ID_EMAIL_SUFFIX: "@tabungan.local",
  // Dipakai untuk rata-rata net bulanan (forecast)
  AVG_MONTHS_FOR_FORECAST: 3
};
