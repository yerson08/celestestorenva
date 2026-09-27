
"use strict";

var LOGO_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADwAPADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDBooor3j5QKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFooooAKK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asbGZnWO5uY4WZMbgHYLkZ44zU3ifT7vS/EV/Y3sjyzRXDgzNz5w3HEme+7rn3p3hJWbxXo4UEn7fBwP+uimqv7tybe/bzLOoafo+n+JNT0m6kvhHaTzwRzqycshYKWXb0JAzg8ZrCXJAJ64rs/ENvqmqeMPEWlWdnG0E+qTTNP5AGxY3kO4vj7uCeM88d64xTuUH1GaVN3QVFZ6C0UUVZAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJjkHuKDyckkn1NLRQAlGKWigAooooABlSdpIz1wcUgAHSlooASjFLRQAlFLRQAnbGTj0paKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==";


/* ================= estado ================= */
var state = {
  catalog: null,
  view: "home",
  category: "todos",
  selectedProductId: null,
  selectedColor: null,
  canvasStickers: [],
  selectedCanvasId: null,
  isAdmin: false,
  adminOpen: false,
  adminStatus: "",
  drag: null
};

var PALETTE = [
  {name:"Blanco",hex:"#FFFFFF"},{name:"Negro",hex:"#1A1A1A"},{name:"Gris Jaspe",hex:"#B7B7AC"},
  {name:"Crudo",hex:"#E8DFC8"},{name:"Rojo",hex:"#B5342E"},{name:"Vino",hex:"#6E2142"},
  {name:"Rosa",hex:"#D68CA8"},{name:"Naranja",hex:"#CE6A2E"},{name:"Amarillo",hex:"#D69A00"},
  {name:"Verde Militar",hex:"#4B5320"},{name:"Verde Menta",hex:"#7FA98C"},{name:"Azul Cielo",hex:"#5B8FB0"},
  {name:"Azul Marino",hex:"#1F3352"},{name:"Acero",hex:"#8C9196"}
];

var CATEGORIES = [
  {id:"todos", label:"Todos"},
  {id:"camisa", label:"Camisas"},
  {id:"buso", label:"Busos"},
  {id:"vaso", label:"Vasos"},
  {id:"bolso", label:"Bolsos"}
];

/* ================= utilidades ================= */
function qs(sel, root){ return (root||document).querySelector(sel); }
function qsa(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function el(tag, attrs, children){
  var node = document.createElement(tag);
  attrs = attrs || {};
  for (var k in attrs){
    if (k === "class") node.className = attrs[k];
    else if (k === "html") node.innerHTML = attrs[k];
    else if (k === "text") node.textContent = attrs[k];
    else if (k.indexOf("on") === 0) { }
    else node.setAttribute(k, attrs[k]);
  }
  children = children || [];
  for (var i=0;i<children.length;i++){ if (children[i]) node.appendChild(children[i]); }
  return node;
}
function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }
function shade(hex, percent){
  hex = (hex || "#888888").replace("#","");
  if (hex.length === 3){ hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]; }
  var num = parseInt(hex, 16);
  if (isNaN(num)) num = 0x888888;
  var amt = Math.round(2.55 * percent);
  var r = clamp((num >> 16) + amt, 0, 255);
  var g = clamp(((num >> 8) & 0x00FF) + amt, 0, 255);
  var b = clamp((num & 0x0000FF) + amt, 0, 255);
  return "#" + (0x1000000 + r*0x10000 + g*0x100 + b).toString(16).slice(1);
}
function isLight(hex){
  hex = (hex||"#888888").replace("#","");
  if (hex.length === 3){ hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]; }
  var num = parseInt(hex,16);
  if (isNaN(num)) return false;
  var r=(num>>16)&255, g=(num>>8)&255, b=num&255;
  var lum = (0.299*r + 0.587*g + 0.114*b);
  return lum > 205;
}
function uid(prefix){ return prefix + "-" + Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

/* ================= figuras de productos (SVG) ================= */
function buildProductSVG(shape, colorHex){
  var c = colorHex || "#CCCCCC";
  var dark = shade(c, isLight(c) ? -18 : -22);
  var darker = shade(c, isLight(c) ? -30 : -35);
  var light = shade(c, 14);
  var bgVar = "var(--surface)";
  var s = "";
  if (shape === "camisa"){
    s += "<svg viewBox='0 0 240 260' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>";
    s += "<polygon points='90,40 150,40 185,70 165,95 165,235 75,235 75,95 55,70' fill='"+c+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "<ellipse cx='120' cy='44' rx='17' ry='9' fill='"+bgVar+"'/>";
    s += "<rect x='68' y='108' width='104' height='96' rx='6' fill='none' stroke='"+darker+"' stroke-width='1.2' stroke-dasharray='5 5' opacity='0.55'/>";
    s += "</svg>";
  } else if (shape === "buso"){
    s += "<svg viewBox='0 0 240 260' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>";
    s += "<polygon points='90,90 150,90 190,120 168,145 168,235 72,235 72,145 50,120' fill='"+c+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "<ellipse cx='120' cy='72' rx='50' ry='33' fill='"+c+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "<ellipse cx='120' cy='90' rx='19' ry='12' fill='"+bgVar+"'/>";
    s += "<line x1='112' y1='92' x2='112' y2='114' stroke='"+darker+"' stroke-width='3' stroke-linecap='round'/>";
    s += "<line x1='128' y1='92' x2='128' y2='114' stroke='"+darker+"' stroke-width='3' stroke-linecap='round'/>";
    s += "<circle cx='112' cy='115' r='3' fill='"+darker+"'/><circle cx='128' cy='115' r='3' fill='"+darker+"'/>";
    s += "<rect x='48' y='138' width='20' height='15' rx='4' fill='"+dark+"'/>";
    s += "<rect x='172' y='138' width='20' height='15' rx='4' fill='"+dark+"'/>";
    s += "<rect x='94' y='178' width='52' height='34' rx='7' fill='none' stroke='"+darker+"' stroke-width='2'/>";
    s += "<rect x='72' y='150' width='96' height='84' rx='5' fill='none' stroke='"+darker+"' stroke-width='1.2' stroke-dasharray='5 5' opacity='0.5'/>";
    s += "</svg>";
  } else if (shape === "vaso"){
    s += "<svg viewBox='0 0 240 260' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>";
    s += "<polygon points='72,58 168,58 152,232 88,232' fill='"+c+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "<ellipse cx='120' cy='230' rx='32' ry='6' fill='"+dark+"' opacity='0.6'/>";
    s += "<rect x='84' y='96' width='72' height='108' rx='4' fill='none' stroke='"+darker+"' stroke-width='1.2' stroke-dasharray='5 5' opacity='0.5'/>";
    s += "<ellipse cx='120' cy='58' rx='48' ry='9' fill='"+light+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "</svg>";
  } else {
    s += "<svg viewBox='0 0 240 260' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>";
    s += "<path d='M80,95 C80,42 102,42 104,95' fill='none' stroke='"+darker+"' stroke-width='9' stroke-linecap='round'/>";
    s += "<path d='M136,95 C136,42 158,42 160,95' fill='none' stroke='"+darker+"' stroke-width='9' stroke-linecap='round'/>";
    s += "<rect x='55' y='95' width='130' height='140' rx='10' fill='"+c+"' stroke='"+darker+"' stroke-width='2'/>";
    s += "<rect x='72' y='120' width='96' height='96' rx='4' fill='none' stroke='"+darker+"' stroke-width='1.2' stroke-dasharray='5 5' opacity='0.5'/>";
    s += "</svg>";
  }
  return s;
}

/* ================= stickers integrados ================= */
function starPointsStr(cx,cy,spikes,outerR,innerR){
  var rot = Math.PI/2*3, step = Math.PI/spikes, pts=[];
  var x,y;
  for (var i=0;i<spikes;i++){
    x = cx + Math.cos(rot)*outerR; y = cy + Math.sin(rot)*outerR;
    pts.push(x.toFixed(1)+","+y.toFixed(1)); rot += step;
    x = cx + Math.cos(rot)*innerR; y = cy + Math.sin(rot)*innerR;
    pts.push(x.toFixed(1)+","+y.toFixed(1)); rot += step;
  }
  return pts.join(" ");
}
function builtinStickerSVGMarkup(kind){
  var ink = "#20201C";
  if (kind === "estrella"){
    return "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><polygon points='"+starPointsStr(50,52,5,46,19)+"' fill='"+ink+"'/></svg>";
  }
  if (kind === "rayo"){
    return "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><polygon points='58,2 20,56 46,56 40,98 82,42 54,42' fill='"+ink+"'/></svg>";
  }
  if (kind === "corazon"){
    return "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><path d='M50 32 C 36 8, 0 16, 0 42 C 0 66, 50 92, 50 92 C 50 92, 100 66, 100 42 C 100 16, 64 8, 50 32 Z' fill='"+ink+"'/></svg>";
  }
  return "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='44' fill='"+ink+"'/><circle cx='50' cy='50' r='44' fill='none' stroke='#F5F2EA' stroke-width='4'/></svg>";
}
function builtinStickerDataUrl(kind){
  return "data:image/svg+xml;utf8," + encodeURIComponent(builtinStickerSVGMarkup(kind));
}
function stickerSrc(sticker){
  if (sticker.builtin) return builtinStickerDataUrl(sticker.builtin);
  return sticker.image;
}

/* ================= iconos ui ================= */
function regMarkSVG(size){
  size = size || 20;
  return "<svg width='"+size+"' height='"+size+"' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>"
  + "<circle cx='20' cy='20' r='16' fill='none' stroke='currentColor' stroke-width='2'/>"
  + "<circle cx='20' cy='20' r='5' fill='none' stroke='currentColor' stroke-width='2'/>"
  + "<line x1='20' y1='0' x2='20' y2='10' stroke='currentColor' stroke-width='2'/>"
  + "<line x1='20' y1='30' x2='20' y2='40' stroke='currentColor' stroke-width='2'/>"
  + "<line x1='0' y1='20' x2='10' y2='20' stroke='currentColor' stroke-width='2'/>"
  + "<line x1='30' y1='20' x2='40' y2='20' stroke='currentColor' stroke-width='2'/>"
  + "</svg>";
}

/* ================= acceso de administrador y guardado local ================= */
/* Cambia esta contraseña por la que tú quieras usar para entrar al panel. */
var ADMIN_PASSWORD = "celeste2026";
var CATALOG_STORAGE_KEY = "celesteStoreCatalog";

function useCapabilities(){
  /* Versión independiente: no depende de ninguna plataforma externa. */
  return Promise.resolve();
}

function loadCatalogFromStorage(){
  try {
    var raw = window.localStorage.getItem(CATALOG_STORAGE_KEY);
    if (raw){
      var parsed = JSON.parse(raw);
      if (parsed && parsed.products && parsed.stickers) return parsed;
    }
  } catch(e){ /* localStorage no disponible: seguimos con el catálogo por defecto */ }
  return null;
}

function publishCatalog(){
  /* Aquí "publicar" guarda el catálogo en este navegador (localStorage). */
  try {
    window.localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(state.catalog));
    state.adminStatus = "Guardado en este navegador.";
  } catch(e){
    state.adminStatus = "No se pudo guardar (almacenamiento no disponible).";
  }
  renderAdminStatus();
  return Promise.resolve();
}
function renderAdminStatus(){
  var s = qs("#admin-status-text");
  if (s) s.textContent = state.adminStatus;
}

/* ================= render principal ================= */
function render(){
  var app = qs("#app");
  app.innerHTML = "";
  app.appendChild(buildHeader());
  if (state.view === "home"){
    app.appendChild(buildHome());
  } else if (state.view === "designer"){
    app.appendChild(buildDesigner());
  }
  app.appendChild(buildFab());
  if (state.adminOpen){
    app.appendChild(buildAdminSheet());
  }
}

function buildHeader(){
  var h = el("header", {class:"top"});
  var wrap = el("div", {class:"wrap brand"});
  var mark = el("img", {class:"mark", src: LOGO_DATA_URL, alt:"Celeste Store"});
  var namebox = el("div", {});
  namebox.appendChild(el("div", {class:"name disp", text:"CELESTE STORE"}));
  namebox.appendChild(el("div", {class:"tag", text:"Estampados personalizados"}));
  wrap.appendChild(mark); wrap.appendChild(namebox);
  h.appendChild(wrap);
  return h;
}

function buildFab(){
  var b = el("button", {class:"fab", "aria-label":"Panel de administrador", text:"🛠"});
  b.addEventListener("click", function(){
    if (!state.isAdmin){
      var pass = window.prompt("Contraseña de administrador:");
      if (pass === null) return;
      if (pass !== ADMIN_PASSWORD){ window.alert("Contraseña incorrecta."); return; }
      state.isAdmin = true;
    }
    state.adminOpen = true; state.adminStatus=""; render();
  });
  return b;
}

/* ---- home ---- */
function buildHome(){
  var frag = document.createDocumentFragment();
  var wrap1 = el("div", {class:"wrap hero"});
  var stamp = el("div", {class:"stamp"});
  stamp.appendChild(el("span", {class:"dot"}));
  stamp.appendChild(document.createTextNode("HECHO A TU MEDIDA"));
  wrap1.appendChild(stamp);
  wrap1.appendChild(el("h1", {class:"disp", text:"CREA TU ESTILO"}));
  wrap1.appendChild(el("p", {text:"Elige una prenda o accesorio, escoge el color y acomoda tus propios stickers como quieras."}));
  frag.appendChild(wrap1);

  var wrap2 = el("div", {class:"wrap"});
  var tabs = el("div", {class:"tabs"});
  CATEGORIES.forEach(function(c){
    var t = el("button", {class:"tab" + (state.category === c.id ? " active" : ""), text:c.label});
    t.addEventListener("click", function(){ state.category = c.id; render(); });
    tabs.appendChild(t);
  });
  wrap2.appendChild(tabs);

  var products = state.catalog.products.filter(function(p){
    return state.category === "todos" || p.category === state.category;
  });
  var grid = el("div", {class:"grid"});
  if (products.length === 0){
    grid.appendChild(el("div", {class:"empty", text:"Aún no hay productos en esta categoría."}));
  } else {
    products.forEach(function(p){ grid.appendChild(buildProductCard(p)); });
  }
  wrap2.appendChild(grid);
  frag.appendChild(wrap2);
  return frag;
}

function buildProductCard(p){
  var card = el("button", {class:"card"});
  var thumb = el("div", {class:"thumb"});
  if (p.image){
    thumb.appendChild(el("img", {src:p.image, alt:p.name}));
  } else {
    thumb.innerHTML = buildProductSVG(p.shape, p.colors[0] ? p.colors[0].hex : "#CCCCCC");
    qsa("svg", thumb).forEach(function(svg){ svg.style.position="absolute"; svg.style.inset="12%"; svg.style.width="76%"; svg.style.height="76%"; });
  }
  card.appendChild(thumb);
  var body = el("div", {class:"body"});
  body.appendChild(el("h3", {text:p.name}));
  var colors = el("div", {class:"colors"});
  p.colors.slice(0,6).forEach(function(c){ colors.appendChild(el("span", {style:"background:"+c.hex})); });
  body.appendChild(colors);
  body.appendChild(el("div", {class:"cta", text:"Diseñar →"}));
  card.appendChild(body);
  card.addEventListener("click", function(){
    state.selectedProductId = p.id;
    state.selectedColor = p.colors[0] ? p.colors[0].hex : "#CCCCCC";
    state.canvasStickers = [];
    state.selectedCanvasId = null;
    state.view = "designer";
    render();
  });
  return card;
}

/* ---- designer ---- */
function currentProduct(){
  return state.catalog.products.filter(function(p){ return p.id === state.selectedProductId; })[0] || null;
}

function buildDesigner(){
  var p = currentProduct();
  var frag = document.createDocumentFragment();
  var wrap = el("div", {class:"wrap designer"});
  var back = el("button", {class:"backbtn", text:"← Volver al catálogo"});
  back.addEventListener("click", function(){ state.view = "home"; state.selectedCanvasId=null; render(); });
  wrap.appendChild(back);

  if (!p){
    wrap.appendChild(el("div", {class:"empty", text:"Producto no encontrado."}));
    frag.appendChild(wrap);
    return frag;
  }

  wrap.appendChild(el("h2", {class:"disp", text:p.name.toUpperCase()}));

  wrap.appendChild(el("div", {class:"section-label", text:"Color"}));
  var sw = el("div", {class:"swatches"});
  p.colors.forEach(function(c){
    var b = el("button", {class:"swatch" + (state.selectedColor === c.hex ? " active" : ""), style:"background:"+c.hex, "aria-label":c.name, title:c.name});
    b.addEventListener("click", function(){ state.selectedColor = c.hex; updateCanvasColor(); qsa(".swatch", wrap).forEach(function(s){s.classList.remove("active");}); b.classList.add("active"); });
    sw.appendChild(b);
  });
  wrap.appendChild(sw);

  var canvasWrap = el("div", {class:"canvas-wrap"});
  var canvas = el("div", {class:"canvas", id:"product-canvas"});
  var base = el("div", {id:"product-base", style:"position:absolute; inset:0;"});
  if (p.image){
    base.appendChild(el("img", {src:p.image, style:"position:absolute; inset:0; width:100%; height:100%; object-fit:contain;"}));
  } else {
    base.innerHTML = buildProductSVG(p.shape, state.selectedColor);
  }
  canvas.appendChild(base);
  var stickerLayer = el("div", {id:"sticker-layer", style:"position:absolute; inset:0;"});
  canvas.appendChild(stickerLayer);
  canvasWrap.appendChild(canvas);
  wrap.appendChild(canvasWrap);

  wrap.appendChild(el("div", {class:"section-label", text:"Toca un sticker para añadirlo"}));
  var tray = el("div", {class:"tray"});
  state.catalog.stickers.forEach(function(s){
    var it = el("button", {class:"tray-item"});
    it.appendChild(el("img", {src:stickerSrc(s), alt:s.name}));
    it.addEventListener("click", function(){ addStickerToCanvas(s); });
    tray.appendChild(it);
  });
  if (state.catalog.stickers.length === 0){
    wrap.appendChild(el("div", {class:"empty", text:"Aún no hay stickers disponibles."}));
  } else {
    wrap.appendChild(tray);
  }

  wrap.appendChild(el("div", {id:"selbar-holder"}));

  var dlBar = el("div", {class:"dl-bar"});
  var dlBtn = el("button", {class:"dl-btn", text:"Descargar mi diseño"});
  dlBtn.addEventListener("click", downloadDesign);
  dlBar.appendChild(dlBtn);

  frag.appendChild(wrap);
  frag.appendChild(dlBar);

  setTimeout(function(){ renderStickerLayer(); renderSelbar(); }, 0);
  return frag;
}

function updateCanvasColor(){
  var p = currentProduct();
  if (!p || p.image) return;
  var base = qs("#product-base");
  if (base) base.innerHTML = buildProductSVG(p.shape, state.selectedColor);
}

function addStickerToCanvas(sticker){
  var item = {
    id: uid("cs"),
    src: stickerSrc(sticker),
    x: 50, y: 50, size: 26
  };
  state.canvasStickers.push(item);
  state.selectedCanvasId = item.id;
  renderStickerLayer();
  renderSelbar();
}

function renderStickerLayer(){
  var layer = qs("#sticker-layer");
  if (!layer) return;
  layer.innerHTML = "";
  state.canvasStickers.forEach(function(s){
    var wrapEl = el("div", {
      class: "sticker-el" + (state.selectedCanvasId === s.id ? " selected" : ""),
      "data-id": s.id,
      style: "left:" + s.x + "%; top:" + s.y + "%; width:" + s.size + "%; aspect-ratio:1/1; transform:translate(-50%,-50%);"
    });
    wrapEl.appendChild(el("img", {src:s.src, alt:""}));
    if (state.selectedCanvasId === s.id){
      var del = el("button", {class:"sticker-del", text:"✕"});
      del.addEventListener("pointerdown", function(ev){ ev.stopPropagation(); });
      del.addEventListener("click", function(ev){
        ev.stopPropagation();
        state.canvasStickers = state.canvasStickers.filter(function(x){ return x.id !== s.id; });
        state.selectedCanvasId = null;
        renderStickerLayer(); renderSelbar();
      });
      wrapEl.appendChild(del);
      var rs = el("div", {class:"sticker-resize"});
      rs.addEventListener("pointerdown", function(ev){ startResize(ev, s.id); });
      wrapEl.appendChild(rs);
    }
    wrapEl.addEventListener("pointerdown", function(ev){ selectCanvasSticker(s.id); startDrag(ev, s.id); });
    layer.appendChild(wrapEl);
  });
}

function selectCanvasSticker(id){
  if (state.selectedCanvasId !== id){
    state.selectedCanvasId = id;
    renderStickerLayer();
    renderSelbar();
  }
}

function startDrag(ev, id){
  ev.preventDefault();
  var canvas = qs("#product-canvas");
  var rect = canvas.getBoundingClientRect();
  var s = state.canvasStickers.filter(function(x){ return x.id === id; })[0];
  if (!s) return;
  var startX = ev.clientX, startY = ev.clientY;
  var startPctX = s.x, startPctY = s.y;
  function move(e){
    var dx = e.clientX - startX, dy = e.clientY - startY;
    var pctDx = (dx / rect.width) * 100, pctDy = (dy / rect.height) * 100;
    s.x = clamp(startPctX + pctDx, 0, 100);
    s.y = clamp(startPctY + pctDy, 0, 100);
    var node = qs(".sticker-el[data-id=\"" + id + "\"]");
    if (node){ node.style.left = s.x + "%"; node.style.top = s.y + "%"; }
  }
  function up(){
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
  }
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}

function startResize(ev, id){
  ev.preventDefault(); ev.stopPropagation();
  var canvas = qs("#product-canvas");
  var rect = canvas.getBoundingClientRect();
  var s = state.canvasStickers.filter(function(x){ return x.id === id; })[0];
  if (!s) return;
  var startX = ev.clientX;
  var startSize = s.size;
  function move(e){
    var dx = e.clientX - startX;
    var pctDx = (dx / rect.width) * 100;
    s.size = clamp(startSize + pctDx, 8, 75);
    var node = qs(".sticker-el[data-id=\"" + id + "\"]");
    if (node){ node.style.width = s.size + "%"; }
    var slider = qs("#sel-size-slider");
    if (slider) slider.value = String(Math.round(s.size));
  }
  function up(){
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
  }
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
}

function renderSelbar(){
  var holder = qs("#selbar-holder");
  if (!holder) return;
  holder.innerHTML = "";
  var s = state.canvasStickers.filter(function(x){ return x.id === state.selectedCanvasId; })[0];
  if (!s) return;
  var bar = el("div", {class:"selbar"});
  var row = el("div", {class:"row"});
  row.appendChild(el("span", {style:"font-size:12px; font-weight:700; opacity:.7;", text:"Tamaño"}));
  var slider = el("input", {type:"range", min:"8", max:"75", value:String(Math.round(s.size)), id:"sel-size-slider"});
  slider.addEventListener("input", function(){
    s.size = parseFloat(slider.value);
    var node = qs(".sticker-el[data-id=\"" + s.id + "\"]");
    if (node) node.style.width = s.size + "%";
  });
  row.appendChild(slider);
  bar.appendChild(row);
  var rowb = el("div", {class:"rowbtns"});
  var front = el("button", {class:"pillbtn", text:"Traer al frente"});
  front.addEventListener("click", function(){
    state.canvasStickers = state.canvasStickers.filter(function(x){ return x.id !== s.id; });
    state.canvasStickers.push(s);
    renderStickerLayer();
  });
  var del = el("button", {class:"pillbtn danger", text:"Eliminar"});
  del.addEventListener("click", function(){
    state.canvasStickers = state.canvasStickers.filter(function(x){ return x.id !== s.id; });
    state.selectedCanvasId = null;
    renderStickerLayer(); renderSelbar();
  });
  var done = el("button", {class:"pillbtn", text:"Listo"});
  done.addEventListener("click", function(){ state.selectedCanvasId = null; renderStickerLayer(); renderSelbar(); });
  rowb.appendChild(front); rowb.appendChild(done); rowb.appendChild(del);
  bar.appendChild(rowb);
  holder.appendChild(bar);
}

/* ---- descarga ---- */
function downloadDesign(){
  var canvas = qs("#product-canvas");
  if (!canvas) return;
  if (typeof html2canvas === "undefined"){
    window.alert("No se pudo cargar la herramienta de descarga (revisa tu conexión a internet e inténtalo de nuevo).");
    return;
  }
  html2canvas(canvas, {backgroundColor: null, useCORS:true, scale:2}).then(function(cv){
    var dataUrl = cv.toDataURL("image/png");
    try {
      var a = document.createElement("a");
      a.href = dataUrl;
      a.download = "mi-diseno-celeste-store.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch(e){
      showImageFallback(dataUrl);
    }
  }).catch(function(){});
}
function showImageFallback(dataUrl){
  var back = el("div", {class:"imgmodal-backdrop"});
  var box = el("div", {class:"imgmodal"});
  box.appendChild(el("img", {src:dataUrl, alt:"Tu diseño"}));
  box.appendChild(el("p", {text:"Mantén presionada la imagen y elige \"Guardar imagen\" para descargarla."}));
  var close = el("button", {text:"Cerrar"});
  close.addEventListener("click", function(){ back.remove(); });
  box.appendChild(close);
  back.addEventListener("click", function(e){ if (e.target === back) back.remove(); });
  back.appendChild(box);
  document.body.appendChild(back);
}

/* ================= panel admin ================= */
function buildAdminSheet(){
  var backdrop = el("div", {class:"sheet-backdrop"});
  backdrop.addEventListener("click", function(e){ if (e.target === backdrop){ state.adminOpen = false; render(); } });
  var sheet = el("div", {class:"sheet"});
  sheet.appendChild(el("div", {class:"sheet-handle"}));
  sheet.appendChild(el("h2", {class:"disp", text:"PANEL DE ADMINISTRADOR"}));
  sheet.appendChild(el("div", {class:"status", id:"admin-status-text", text: state.adminStatus || "Los cambios se guardan en este navegador al agregar o eliminar algo."}));

  sheet.appendChild(el("div", {class:"section-label", text:"Agregar producto"}));
  sheet.appendChild(buildProductForm());

  sheet.appendChild(el("div", {class:"divider"}));

  sheet.appendChild(el("div", {class:"section-label", text:"Agregar sticker"}));
  sheet.appendChild(buildStickerForm());

  sheet.appendChild(el("div", {class:"divider"}));
  var closeBtn = el("button", {class:"pillbtn", text:"Cerrar panel", style:"width:100%;"});
  closeBtn.addEventListener("click", function(){ state.adminOpen = false; render(); });
  sheet.appendChild(closeBtn);

  backdrop.appendChild(sheet);
  return backdrop;
}

function resizeImageFile(file, maxDim, mime, quality, cb){
  var reader = new FileReader();
  reader.onload = function(e){
    var img = new Image();
    img.onload = function(){
      var w = img.width, h = img.height;
      var scale = Math.min(1, maxDim / Math.max(w,h));
      var cw = Math.max(1, Math.round(w*scale)), ch = Math.max(1, Math.round(h*scale));
      var c = document.createElement("canvas");
      c.width = cw; c.height = ch;
      var ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0, cw, ch);
      cb(c.toDataURL(mime, quality));
    };
    img.onerror = function(){ cb(null); };
    img.src = e.target.result;
  };
  reader.onerror = function(){ cb(null); };
  reader.readAsDataURL(file);
}

function buildProductForm(){
  var form = el("form", {});
  var fName = el("div", {class:"field"});
  fName.appendChild(el("label", {text:"Nombre"}));
  var nameInput = el("input", {type:"text", required:"required", placeholder:"Ej. Camiseta Oversize"});
  fName.appendChild(nameInput);
  form.appendChild(fName);

  var fCat = el("div", {class:"field"});
  fCat.appendChild(el("label", {text:"Tipo de producto"}));
  var catSelect = el("select", {});
  [["camisa","Camisa"],["buso","Buso"],["vaso","Vaso"],["bolso","Bolso"]].forEach(function(o){
    catSelect.appendChild(el("option", {value:o[0], text:o[1]}));
  });
  fCat.appendChild(catSelect);
  form.appendChild(fCat);

  var fColors = el("div", {class:"field"});
  fColors.appendChild(el("label", {text:"Colores disponibles"}));
  var pal = el("div", {class:"palette"});
  var checkboxes = [];
  PALETTE.forEach(function(c, i){
    var chip = el("label", {class:"pal-chip"});
    var cb = el("input", {type:"checkbox", value:c.hex, "data-name":c.name});
    if (i === 0) cb.checked = true;
    chip.appendChild(cb);
    chip.appendChild(el("span", {class:"sw", style:"background:"+c.hex, title:c.name}));
    pal.appendChild(chip);
    checkboxes.push(cb);
  });
  fColors.appendChild(pal);
  form.appendChild(fColors);

  var fImg = el("div", {class:"field"});
  fImg.appendChild(el("label", {text:"Imagen personalizada (opcional)"}));
  var fileInput = el("input", {type:"file", accept:"image/*"});
  var preview = el("img", {class:"preview-img", style:"display:none;"});
  var imgData = null;
  fileInput.addEventListener("change", function(){
    var file = fileInput.files[0];
    if (!file){ imgData = null; preview.style.display="none"; return; }
    resizeImageFile(file, 700, "image/jpeg", 0.85, function(dataUrl){
      imgData = dataUrl;
      if (dataUrl){ preview.src = dataUrl; preview.style.display="block"; }
    });
  });
  fImg.appendChild(fileInput);
  fImg.appendChild(preview);
  form.appendChild(fImg);

  var submit = el("button", {class:"submitbtn", type:"submit", text:"Agregar producto"});
  form.appendChild(submit);

  var list = el("div", {class:"catlist"});
  refreshProductList(list);
  form.appendChild(list);

  form.addEventListener("submit", function(ev){
    ev.preventDefault();
    var chosen = checkboxes.filter(function(cb){ return cb.checked; }).map(function(cb){
      return {name: cb.getAttribute("data-name"), hex: cb.value};
    });
    if (chosen.length === 0){ chosen = [{name:"Base", hex:"#CCCCCC"}]; }
    var product = {
      id: uid("prod"), name: nameInput.value.trim() || "Producto sin nombre",
      category: catSelect.value, shape: catSelect.value, builtin:false,
      image: imgData, colors: chosen
    };
    state.catalog.products.push(product);
    nameInput.value = "";
    fileInput.value = "";
    preview.style.display = "none";
    imgData = null;
    refreshProductList(list);
    publishCatalog();
  });

  return form;
}

function refreshProductList(list){
  list.innerHTML = "";
  var custom = state.catalog.products.filter(function(p){ return !p.builtin; });
  if (custom.length === 0){
    list.appendChild(el("div", {style:"font-size:12.5px; opacity:.55; padding:6px 0;", text:"Sin productos personalizados todavía."}));
    return;
  }
  custom.forEach(function(p){
    var row = el("div", {class:"row2"});
    if (p.image){ row.appendChild(el("img", {src:p.image})); }
    else { var mini = el("div", {class:"mini"}); mini.innerHTML = buildProductSVG(p.shape, p.colors[0]?p.colors[0].hex:"#CCCCCC"); row.appendChild(mini); }
    row.appendChild(el("div", {class:"nm", text:p.name}));
    var del = el("button", {text:"✕"});
    del.addEventListener("click", function(){
      state.catalog.products = state.catalog.products.filter(function(x){ return x.id !== p.id; });
      refreshProductList(list);
      publishCatalog();
    });
    row.appendChild(del);
    list.appendChild(row);
  });
}

function buildStickerForm(){
  var form = el("form", {});
  var fName = el("div", {class:"field"});
  fName.appendChild(el("label", {text:"Nombre del sticker"}));
  var nameInput = el("input", {type:"text", required:"required", placeholder:"Ej. Logo tienda"});
  fName.appendChild(nameInput);
  form.appendChild(fName);

  var fImg = el("div", {class:"field"});
  fImg.appendChild(el("label", {text:"Imagen (PNG con fondo transparente da mejor resultado)"}));
  var fileInput = el("input", {type:"file", accept:"image/*", required:"required"});
  var preview = el("img", {class:"preview-img", style:"display:none;"});
  var imgData = null;
  fileInput.addEventListener("change", function(){
    var file = fileInput.files[0];
    if (!file){ imgData = null; preview.style.display="none"; return; }
    resizeImageFile(file, 500, "image/png", 0.92, function(dataUrl){
      imgData = dataUrl;
      if (dataUrl){ preview.src = dataUrl; preview.style.display="block"; }
    });
  });
  fImg.appendChild(fileInput);
  fImg.appendChild(preview);
  form.appendChild(fImg);

  var submit = el("button", {class:"submitbtn", type:"submit", text:"Agregar sticker"});
  form.appendChild(submit);

  var list = el("div", {class:"catlist"});
  refreshStickerList(list);
  form.appendChild(list);

  form.addEventListener("submit", function(ev){
    ev.preventDefault();
    if (!imgData){ return; }
    var sticker = { id: uid("stk"), name: nameInput.value.trim() || "Sticker", builtin:false, image: imgData };
    state.catalog.stickers.push(sticker);
    nameInput.value = "";
    fileInput.value = "";
    preview.style.display = "none";
    imgData = null;
    refreshStickerList(list);
    publishCatalog();
  });

  return form;
}

function refreshStickerList(list){
  list.innerHTML = "";
  var custom = state.catalog.stickers.filter(function(s){ return !s.builtin; });
  if (custom.length === 0){
    list.appendChild(el("div", {style:"font-size:12.5px; opacity:.55; padding:6px 0;", text:"Sin stickers personalizados todavía."}));
    return;
  }
  custom.forEach(function(s){
    var row = el("div", {class:"row2"});
    row.appendChild(el("img", {src:stickerSrc(s)}));
    row.appendChild(el("div", {class:"nm", text:s.name}));
    var del = el("button", {text:"✕"});
    del.addEventListener("click", function(){
      state.catalog.stickers = state.catalog.stickers.filter(function(x){ return x.id !== s.id; });
      refreshStickerList(list);
      publishCatalog();
    });
    row.appendChild(del);
    list.appendChild(row);
  });
}

/* ================= arranque ================= */
/* Los productos "de fábrica" viven cada uno en su propio archivo dentro de la
   carpeta products/ (products/camiseta.json, products/buso.json, etc.). Para
   agregar uno nuevo de forma manual: crea el archivo con el mismo formato y
   súmalo a PRODUCT_FILES. Para agregar productos desde la tienda misma, usa
   el panel de administrador (🛠) — esos se guardan en este navegador. */
var PRODUCT_FILES = ["products/camiseta.json", "products/buso.json", "products/vaso.json", "products/bolso.json"];

var DEFAULT_STICKERS = [
  {"id":"s-estrella","name":"Estrella","builtin":"estrella"},
  {"id":"s-rayo","name":"Rayo","builtin":"rayo"},
  {"id":"s-corazon","name":"Corazón","builtin":"corazon"},
  {"id":"s-circulo","name":"Círculo","builtin":"circulo"}
];

/* Copia de respaldo de los mismos 4 productos, usada solo si el navegador no
   puede leer los archivos de products/ (por ejemplo al abrir el HTML con
   doble clic en vez de servirlo desde un servidor web). */
var FALLBACK_PRODUCTS = [
  {"id":"p-camisa","name":"Camiseta Básica","category":"camisa","shape":"camisa","builtin":true,"image":null,"colors":[{"name":"Blanco","hex":"#FFFFFF"},{"name":"Negro","hex":"#1A1A1A"},{"name":"Gris Jaspe","hex":"#B7B7AC"},{"name":"Rojo","hex":"#B5342E"},{"name":"Azul Marino","hex":"#1F3352"}]},
  {"id":"p-buso","name":"Buso con Capota","category":"buso","shape":"buso","builtin":true,"image":null,"colors":[{"name":"Negro","hex":"#1A1A1A"},{"name":"Gris Jaspe","hex":"#B7B7AC"},{"name":"Vino","hex":"#6E2142"},{"name":"Verde Militar","hex":"#4B5320"}]},
  {"id":"p-vaso","name":"Vaso Térmico","category":"vaso","shape":"vaso","builtin":true,"image":null,"colors":[{"name":"Blanco","hex":"#FFFFFF"},{"name":"Negro","hex":"#1A1A1A"},{"name":"Acero","hex":"#8C9196"},{"name":"Amarillo","hex":"#D69A00"}]},
  {"id":"p-bolso","name":"Bolso Tote","category":"bolso","shape":"bolso","builtin":true,"image":null,"colors":[{"name":"Crudo","hex":"#E8DFC8"},{"name":"Negro","hex":"#1A1A1A"},{"name":"Azul Marino","hex":"#1F3352"}]}
];

function loadSeedCatalog(){
  if (typeof fetch !== "function"){
    return Promise.resolve({products: FALLBACK_PRODUCTS.slice(), stickers: DEFAULT_STICKERS.slice()});
  }
  var fetches = PRODUCT_FILES.map(function(path){
    return fetch(path).then(function(r){
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }).catch(function(){ return null; });
  });
  return Promise.all(fetches).then(function(results){
    var products = results.filter(function(p){ return p && p.id; });
    if (products.length === 0){ products = FALLBACK_PRODUCTS.slice(); }
    return { products: products, stickers: DEFAULT_STICKERS.slice() };
  });
}

function boot(){
  var saved = loadCatalogFromStorage();
  if (saved){
    state.catalog = saved;
    useCapabilities().then(function(){ render(); }).catch(function(){ render(); });
    return;
  }
  loadSeedCatalog().then(function(catalog){
    state.catalog = catalog;
    useCapabilities().then(function(){ render(); }).catch(function(){ render(); });
  });
}
if (document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
