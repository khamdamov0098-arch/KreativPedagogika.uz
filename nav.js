// KreativPedagogika.uz — nav.js
var KP_SCRIPT = 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbxk4yDLmR2jPx6vF54o1fZ0CQkeDknJpd4X_7tiP5Hr3dQGMNbcx_ywdpSWj1YLS7LMrw/exec/exec';
const KP_USER_KEY  = 'kp_user';
const KP_USERS_KEY = 'kp_users';

function normalizePhone(raw) {
  let tel = String(raw || '').replace(/[\s\-\(\)]/g, '');
  if (/^998\d{9}$/.test(tel)) tel = '+' + tel;
  if (/^8\d{9}$/.test(tel))   tel = '+998' + tel.slice(1);
  if (/^\d{9}$/.test(tel))    tel = '+998' + tel;
  return tel;
}
function getLocalUsers() {
  try { return JSON.parse(localStorage.getItem(KP_USERS_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveLocalUser(tel, name) {
  const u = getLocalUsers(); u[tel] = { name, telefon: tel };
  localStorage.setItem(KP_USERS_KEY, JSON.stringify(u));
}
function findLocalUser(tel) { return getLocalUsers()[tel] || null; }

// ===== DROPDOWN — global funksiya, inline onclick ishlatadi =====
function toggleDropdown(btn, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const dd   = btn.parentElement;
  const menu = dd.querySelector('.dropdown-menu');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  // Hammasini yop
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  // Agar yopiq edi — och
  if (!isOpen) {
    menu.classList.add('open');
    dd.classList.add('active');
  }
}
// Tashqariga bosilganda yopish
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  }
});
window.toggleDropdown = toggleDropdown;

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-menu a').forEach(link =>
      link.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) mobileMenu.classList.remove('open');
    });
  }

  renderNavUser();

  // Active nav link
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a, .mobile-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0];
    if (href === cur || (cur === '' && href === 'index.html'))
      a.classList.add('active');
  });
});

function renderHeroButtons() {
  const loginBtn   = document.getElementById('heroLoginBtn');
  const primaryBtn = document.getElementById('heroPrimaryBtn');
  if (!loginBtn && !primaryBtn) return;
  const raw = localStorage.getItem(KP_USER_KEY);
  if (raw) {
    if (loginBtn)   loginBtn.style.display = 'none';
    if (primaryBtn) { primaryBtn.href = 'maruzalar.html'; primaryBtn.textContent = "O'qishni davom ettirish →"; }
  } else {
    if (loginBtn)   loginBtn.style.display = '';
    if (primaryBtn) { primaryBtn.href = 'register.html'; primaryBtn.textContent = "O'qishni boshlash →"; }
  }
}
function navUserInitial(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
}
function renderNavUser() {
  const navUser    = document.getElementById('navUserBlock');
  const mobileUser = document.getElementById('mobileUserBlock');
  const raw = localStorage.getItem(KP_USER_KEY);
  if (raw) {
    const u = JSON.parse(raw);
    const ini = navUserInitial(u.name);
    if (navUser) navUser.innerHTML = `<div class="nav-user">
      <div class="nav-user-avatar">${ini}</div>
      <div class="nav-user-info">
        <div class="nav-user-name">${u.name}</div>
        <div class="nav-user-group">${u.telefon||''}</div>
      </div>
      <button class="btn-nav-logout" onclick="navLogout()">Chiqish</button>
    </div>`;
    if (mobileUser) mobileUser.innerHTML = `<div style="padding:.75rem 1rem .5rem;display:flex;align-items:center;justify-content:space-between;gap:.75rem;">
      <div style="font-weight:800;color:var(--navy);font-size:.95rem;">${u.name}</div>
      <button class="btn-nav-logout" onclick="navLogout()">Chiqish</button>
    </div>`;
  } else {
    if (navUser)    navUser.innerHTML = `<a href="login.html" class="btn-login">Kirish →</a>`;
    if (mobileUser) mobileUser.innerHTML = `<a href="login.html" class="btn-login" style="display:block;margin:.6rem .25rem;text-align:center;">Kirish →</a>`;
  }
  renderHeroButtons();
}
function navLogout() {
  localStorage.removeItem(KP_USER_KEY);
  window.location.href = 'index.html';
}
function requireAuth() {
  const raw = localStorage.getItem(KP_USER_KEY);
  if (!raw) { window.location.href = 'login.html?next=' + encodeURIComponent(window.location.href); return null; }
  return JSON.parse(raw);
}
function openPDF(url, title) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const fullUrl  = url.startsWith('http') ? url : window.location.origin + '/' + url;
  if (isMobile) { window.open(fullUrl, '_blank'); return; }
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) { window.open(fullUrl, '_blank'); return; }
  document.getElementById('modalTitle').textContent = title;
  const dlBtn = document.getElementById('modalDlBtn');
  if (dlBtn) { dlBtn.href = fullUrl; dlBtn.download = title + '.pdf'; }
  document.getElementById('modalFrame').src = fullUrl;
  overlay.classList.add('open');
}
function closePDF(e) {
  const overlay = document.getElementById('modalOverlay');
  if (!e || e.target === overlay || e.currentTarget.classList.contains('modal-close')) {
    overlay.classList.remove('open');
    const frame = document.getElementById('modalFrame');
    if (frame) frame.src = '';
  }
}
function showToast(msg, type) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' '+type : '');
  setTimeout(() => t.classList.remove('show'), 3500);
}
window.normalizePhone = normalizePhone;
window.saveLocalUser  = saveLocalUser;
window.findLocalUser  = findLocalUser;
window.openPDF        = openPDF;
window.closePDF       = closePDF;
window.showToast      = showToast;
window.navLogout      = navLogout;
window.requireAuth    = requireAuth;
window.renderNavUser  = renderNavUser;
