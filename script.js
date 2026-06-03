/* ============================================
   PROMOÇÕES DO DIA — INTERAÇÕES
   ============================================ */

(function () {
  'use strict';

  const cfg = window.SITE_CONFIG || {};

  // ----------------------------------------------------
  // 1) Aplicar textos do config
  // ----------------------------------------------------
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function applyConfig() {
    setText('tituloPrincipal', cfg.textos?.titulo);
    setText('subtitulo',       cfg.textos?.subtitulo);
    setText('ctaTexto',        cfg.textos?.botaoCta);
    setText('seloTexto',       cfg.textos?.selo);
    setText('rodapeTexto',     cfg.textos?.rodape);

    // Links
    const link = cfg.whatsappLink || '#';
    ['ctaPrincipal', 'ctaSecundario', 'ctaFlutuante'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('href', link);
    });

    // Fundo
    if (cfg.imagens?.fundo) {
      const bg = document.querySelector('.bg-image');
      if (bg) bg.style.backgroundImage = `url('${cfg.imagens.fundo}')`;
    }
  }

  // ----------------------------------------------------
  // 2) Renderizar marketplaces
  // ----------------------------------------------------
  function renderMarketplaces() {
    const container = document.getElementById('marketplaces');
    if (!container) return;
    const list = cfg.marketplaces || [];

    container.innerHTML = list.map((m, i) => {
      const safeName = String(m.nome || '').replace(/[<>&"]/g, '');
      const file     = String(m.arquivo || '').trim();
      const base     = file.replace(/\.(png|svg|jpe?g|webp)$/i, '');
      return `
        <div class="mk" title="${safeName}" data-mk="${i}" data-base="${base}" data-name="${safeName}">
          <span class="mk-fallback">${safeName}</span>
        </div>
      `;
    }).join('');

    // Para cada marketplace, tenta PNG → SVG → JPG → texto (fallback gracioso)
    container.querySelectorAll('.mk').forEach(cell => {
      const base = cell.dataset.base;
      const name = cell.dataset.name;
      if (!base) return;
      const candidates = [`assets/marketplaces/${base}.png`, `assets/marketplaces/${base}.svg`, `assets/marketplaces/${base}.jpg`, `assets/marketplaces/${base}.webp`];
      tryLoad(candidates, 0, cell, name);
    });
  }

  function tryLoad(list, idx, cell, name) {
    if (idx >= list.length) return; // mantém o fallback de texto
    const test = new Image();
    test.onload = () => {
      cell.innerHTML = `<img src="${list[idx]}" alt="${name}" loading="lazy" />`;
    };
    test.onerror = () => tryLoad(list, idx + 1, cell, name);
    test.src = list[idx];
  }

  // ----------------------------------------------------
  // 3) Pop-up social proof
  // ----------------------------------------------------
  function startPopupLoop() {
    const popup = document.getElementById('popup');
    const nameEl = document.getElementById('popupNome');
    const tempoEl = document.getElementById('popupTempo');
    if (!popup || !nameEl || !tempoEl) return;

    const nomes = (cfg.nomesPopup && cfg.nomesPopup.length) ? cfg.nomesPopup : ['Visitante'];
    const tempos = ['há instantes', 'há 1 min', 'há 2 min', 'há 3 min', 'há 5 min'];

    let lastIndex = -1;
    function pickName() {
      if (nomes.length === 1) return nomes[0];
      let i;
      do { i = Math.floor(Math.random() * nomes.length); } while (i === lastIndex);
      lastIndex = i;
      return nomes[i];
    }

    function show() {
      nameEl.textContent = pickName();
      tempoEl.textContent = tempos[Math.floor(Math.random() * tempos.length)];
      popup.classList.add('visible');
      setTimeout(() => popup.classList.remove('visible'), 4200);
    }

    // Primeira aparição depois de 3.5s, depois a cada 7–11s
    setTimeout(() => {
      show();
      function loop() {
        const next = 7000 + Math.random() * 4000;
        setTimeout(() => { show(); loop(); }, next);
      }
      loop();
    }, 3500);
  }

  // ----------------------------------------------------
  // 4) Meta Pixel (carrega só se houver ID)
  // ----------------------------------------------------
  function loadMetaPixel() {
    const id = (cfg.metaPixelId || '').trim();
    if (!id) return;

    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', id);
    fbq('track', 'PageView');

    // Track clique no CTA
    ['ctaPrincipal', 'ctaSecundario', 'ctaFlutuante'].forEach(elId => {
      const el = document.getElementById(elId);
      if (el) el.addEventListener('click', () => {
        try { fbq('track', 'Lead', { source: elId }); } catch (e) {}
      });
    });

    // <noscript> fallback img
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1" alt="" />`;
    document.body.appendChild(noscript);
  }

  // ----------------------------------------------------
  // Init
  // ----------------------------------------------------
  function init() {
    applyConfig();
    renderMarketplaces();
    startPopupLoop();
    loadMetaPixel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
