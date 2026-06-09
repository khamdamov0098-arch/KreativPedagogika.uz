/* KreativPedagogika — icons.js (minimal, dropdown-safe) */
const KP_ICONS = {
  home:       '<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  'book-open':'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/>',
  'pen-line': '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  target:     '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  library:    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5z"/><path d="M12 6v7"/><path d="M8 8.5v4"/><path d="M16 8.5v4"/>',
  chart:      '<path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>',
  user:       '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'file-edit':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 13l-2 5 5-2 5-5-5 2z"/>',
  graduation: '<path d="M22 10v6"/><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/>',
  pin:        '<path d="M12 17v5"/><path d="M5 7a7 7 0 0 1 14 0c0 5-7 10-7 10S5 12 5 7z"/><circle cx="12" cy="7" r="2"/>',
  alert:      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  download:   '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  close:      '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
  video:      '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  puzzle:     '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>',
  clipboard:  '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
};

const EMOJI_MAP = {
  '📚':'book-open','✍️':'pen-line','🎯':'target','📖':'library',
  '📊':'chart','👤':'user','🏠':'home','📝':'file-edit',
  '🎓':'graduation','📌':'pin','⚠️':'alert','⬇':'download',
  '✕':'close','📹':'video','🎲':'puzzle','📋':'clipboard',
};

function kpIcon(name, size) {
  const path = KP_ICONS[name]; if (!path) return '';
  const s = size || 20;
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}
window.lllIcon = kpIcon;

document.addEventListener('DOMContentLoaded', function() {
  // dm-icon larni almashtir
  document.querySelectorAll('.dm-icon').forEach(el => {
    const name = EMOJI_MAP[el.textContent.trim()];
    if (name) el.innerHTML = kpIcon(name, 18);
  });

  // page-header h1 dagi emoji
  document.querySelectorAll('.page-header h1').forEach(el => {
    const txt = el.textContent.trim();
    for (const [emoji, name] of Object.entries(EMOJI_MAP)) {
      if (txt.startsWith(emoji)) {
        el.innerHTML = `<span style="display:inline-flex;align-items:center;gap:.6rem">${kpIcon(name,28)} ${txt.slice(emoji.length).trim()}</span>`;
        break;
      }
    }
  });

  // mobile-menu emoji linklar
  document.querySelectorAll('.mobile-menu > a').forEach(el => {
    const txt = el.textContent.trim();
    for (const [emoji, name] of Object.entries(EMOJI_MAP)) {
      if (txt.startsWith(emoji)) {
        el.innerHTML = `${kpIcon(name,18)} ${txt.slice(emoji.length).trim()}`;
        break;
      }
    }
  });

  // header-nav standalone linklar (dropdown emas)
  document.querySelectorAll('.header-nav > a').forEach(el => {
    const txt = el.textContent.trim();
    for (const [emoji, name] of Object.entries(EMOJI_MAP)) {
      if (txt.startsWith(emoji)) {
        el.innerHTML = `${kpIcon(name,17)} ${txt.slice(emoji.length).trim()}`;
        break;
      }
    }
  });

  // info-box pin/alert
  document.querySelectorAll('.info-box, .warn-box').forEach(el => {
    if (el.dataset.icoDone) return;
    const txt = el.textContent.trim();
    if (txt.startsWith('📌')) {
      el.innerHTML = `<span>${kpIcon('pin',18)}</span><span>${txt.slice(2).trim()}</span>`;
      el.dataset.icoDone = '1';
    } else if (txt.startsWith('⚠️')) {
      el.innerHTML = `<span>${kpIcon('alert',18)}</span><span>${txt.slice(2).trim()}</span>`;
      el.dataset.icoDone = '1';
    }
  });

  // hero-badge emoji
  document.querySelectorAll('.hero-badge').forEach(el => {
    const txt = el.textContent.trim();
    for (const [emoji, name] of Object.entries(EMOJI_MAP)) {
      if (txt.startsWith(emoji)) {
        el.innerHTML = `${kpIcon(name,16)} ${txt.slice(emoji.length).trim()}`;
        break;
      }
    }
  });

  // stage-icon
  document.querySelectorAll('.stage-icon').forEach(el => {
    const name = EMOJI_MAP[el.textContent.trim()];
    if (name) el.innerHTML = kpIcon(name, 28);
  });

  // modal download/close
  document.querySelectorAll('.modal-dl-btn').forEach(el => {
    if (el.textContent.includes('⬇')) el.innerHTML = kpIcon('download',16) + ' Yuklab olish';
  });
  document.querySelectorAll('.modal-close').forEach(el => {
    if (el.textContent.includes('✕')) el.innerHTML = kpIcon('close',18);
  });

  // topic-item emoji
  document.querySelectorAll('.topic-item').forEach(el => {
    const txt = el.textContent.trim();
    for (const [emoji, name] of Object.entries(EMOJI_MAP)) {
      if (txt.startsWith(emoji)) {
        el.innerHTML = `${kpIcon(name,15)} ${txt.slice(emoji.length).trim()}`;
        break;
      }
    }
  });
});
