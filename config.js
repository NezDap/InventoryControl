// config.js
// Isi dengan URL dan anon public key dari Supabase Project Settings → API
// Catatan: ini adalah ANON KEY (boleh dipublish). Jangan pernah publish SERVICE_ROLE key.

window.APP_CONFIG = {
  SUPABASE_URL: "https://xyopwzkyxiwjxpzhprmz.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_lpKkKrRFFvegxxgwyCILvg_AGyOvikz",
  // Agar login tetap memakai "User ID" seperti versi GAS, kita konversi ke email internal:
  // email = `${userId}@${EMAIL_DOMAIN}`
  EMAIL_DOMAIN: "inv.local"
};
