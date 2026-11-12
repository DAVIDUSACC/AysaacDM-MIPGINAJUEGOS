// Datos: [título, categoría, portada, id de video, SO, CPU, GPU, RAM (GB), espacio (GB), buscar en Steam]
const IMG = "images/gallery/Juegos/";
const RAW = [
  ["Dark Souls I Remastered","accion","Dark 1.png","S4gwkJKU63k","Windows 7 SP1 (64-bit)","Intel Core i5-2300 / AMD FX-6300","GTX 460 1 GB / Radeon HD 6870 1 GB",6,8,1],
  ["Dark Souls II Scholar of the First Sin","accion","Dark Soul II.jpg","_riIW-CKqHk","Windows 7 SP1 / 8.1 (64-bit)","Intel Core i3-2100 / AMD A8-3870","GTX 465 / Radeon HD 6870",4,23,1],
  ["DMC Devil May Cry","accion","DMC.jpg","QWwDKBHIXuE","Windows Vista / 7 / 8","Core 2 Duo 2.4 GHz / Athlon X2 2.8 GHz","GeForce 8800 GTS / Radeon HD 3850",2,9,1],
  ["Watch Dogs","accion","Watch Dogs.jpg","jDEZok-iDpg","Windows Vista SP2 / 7 SP1 / 8 (64-bit)","Core 2 Quad Q8400 / Phenom II X4 940","GTX 460 / Radeon HD 5770",6,25,1],
  ["Sparking Zero","anime","Sparking.jpg","KvfzRCbNzaQ","Windows 10 (64-bit)","Intel Core i5-9600K / Ryzen 5 2600","RTX 2060 / Radeon RX 5700",16,50,1],
  ["One Piece Pirate Warriors 4","anime","One Piece.jpg","ZaFao-4OPz0","Windows 10 (64-bit)","Intel Core i5-3450 / Ryzen 3 1300X","GTX 660 2 GB / Radeon HD 7870 2 GB",8,25,1],
  ["NARUTO Ultimate Ninja STORM Connections","anime","NARUTO CONNNECTION.jpg","ELdUimZAKRw","Windows 7 (64-bit) o superior","Intel Core i3-530 / Phenom II X4 940","1 GB VRAM compatible con DirectX 10",4,40,1],
  ["Need For Speed Payback","carreras","Need for Speed Payback.jpg","hz4gmTfh8qs","Windows 7 / 8.1 / 10 (64-bit)","Intel i3-6300 / AMD FX-8150","GTX 750 Ti / Radeon HD 7850 2 GB",6,30,1],
  ["Need For Speed Most Wanted","carreras","Wanted Most.png","jyvSn9PcbjI","Windows XP (32-bit)","Pentium 4 1.4 GHz o equivalente","64 MB compatible con DirectX 9.0c",0.25,3,1],
  ["PRO EVOLUTION SOCCER 2013","deportes","PES2013.jpg","YQBJc6xtZ7s","Windows XP / Vista / 7","Intel Pentium IV 2.4 GHz","GeForce 6600 / Radeon X1300",1,8,1],
  ["FIFA 18","deportes","FF 18.jpg","hKkwrOUuesc","Windows 7 / 8.1 / 10 (64-bit)","Intel Core i3-2100 / Phenom II X4 965","GTX 460 / Radeon R7 260",8,50,1],
  ["FIFA 17","deportes","FIFA 17.png","GuDiaIpCKlc","Windows 7 / 8.1 / 10 (64-bit)","Intel Core i5-3550K / AMD FX-8150","GTX 660 / Radeon R9 270",8,50,1],
  ["Schedule I","aventura","ScheduleOne.png","QebjsWxHUNE","Windows 10 (64-bit)","6 núcleos a 3.5 GHz o similar","RTX 3060 / Radeon RX 6700",16,8,1],
  ["Five Nights at Freddy's: Secret of the Mimic","terror","Themimic.png","eQWWmkOiyJk","Windows 10 (64-bit)","Intel Core i5-8400 / Ryzen 5 1500X","GTX 1070 / Radeon RX Vega 56",16,20,1],
  ["Five Nights at Freddy's 2","terror","Fnaf Two.png","BKmQodN9JxU","Windows XP / Vista / 7 / 8","Pentium 4 2 GHz / Athlon","1 GB de VRAM",1,0.25,1],
  ["Five Nights at Freddy's","terror","Fnaf 111.png","Zkbb5Ae6PUQ","Windows XP / Vista / 7","Pentium 4 2 GHz / equivalente","1 GB de VRAM",1,0.25,1],
  ["Hello Neighbor Fredbear Mod","terror","Hello.png","xM3cNROPk_g","Windows 10","Intel Core i7","GTX 1060",8,5,0],
  ["Chaves Nightmares","terror","Portada Chaves Nightmares Tutorial.png","OWZouzxcSBg","Windows 7 / 10 / 11","Doble núcleo 2.0 GHz","Integrada compatible con DirectX 9.0",2,1,0],
  ["The Witcher 3: Wild Hunt","aventura","WIWI.png","YZ1cgWrRvB8","Windows 7 / 8 / 10 (64-bit)","Intel Core i7-3770 / AMD FX-8350","GTX 770 / Radeon R9 290",8,40,1],
  ["Poppy Playtime","terror","PO.png","lc-afSa7T_Q","Por confirmar","Por confirmar","Por confirmar",0,0,1],
  ["Uncharted 4","accion","Uncha.png","zYc_GRiYPDU","Windows 10 (64-bit)","Intel Core i7-4770 / Ryzen 5 1500X","GTX 1060 6 GB / RX 570 4 GB",16,126,1],
  ["God of War","accion","God of war.png","aD1RVe-7BcU","Windows 10 (64-bit)","Intel Core i5-6600K / Ryzen 5 2400G","GTX 960 / Radeon R9 290X",8,70,1],
  ["Spider-Man 2","accion","Spider man 2.jpg","6_sUkpKZAJE","Windows 10 / 11 (64-bit)","Intel Core i3-8100 / Ryzen 3 3100","GTX 1650 / Radeon RX 5500 XT",16,140,1],
  ["Spider-Man: Miles Morales","accion","Miles Morales.jpg","RDIRr7aKFV4","Windows 10 (64-bit)","Intel Core i3-4160 / equivalente AMD","GTX 950 2 GB / RX 470 4 GB",8,75,1],
  ["The Last of Us Parte I","accion","thelast.png","SP2pu2-E5iY","Windows 10 (64-bit)","Intel Core i7-4770K / Ryzen 5 1500X","GTX 970 4 GB / RX 470 4 GB",16,100,1],
  ["Call of Duty: Black Ops II","accion","BO2.png","lJNsv940MEc","Windows Vista SP2 / 7","Intel Core 2 Duo E8200 / Phenom X3 8750","GeForce 8800 GT 512 MB / Radeon HD 3870",2,0,1],
  ["Grand Theft Auto IV","accion","Gta 4.png","Q7-R24AKPnU","Windows XP SP3 / Vista SP1","Core 2 Duo 1.8 GHz / Athlon X2 64 2.4 GHz","GeForce 7900 256 MB / Radeon X1900",1.5,16,1],
  ["Grand Theft Auto V","accion","GTA V.png","x8QksO8FFbA","Windows 7 / 8 / 10 (64-bit)","Core 2 Quad Q6600 / Phenom 9850","GeForce 9800 GT 1 GB / Radeon HD 4870",4,72,1],
  ["Injustice 2","accion","Injus.webp","ZrdoLpiKttA","Windows 7 / 10 (64-bit)","Intel Core i3-2100 / AMD FX-6300","GTX 780 / Radeon R9 290",8,60,1],
  ["Mortal Kombat XL","accion","MK XL.jpg","lbAFfzWpcL4","Windows 7 / 8 (64-bit)","Intel Core i7-3770 / AMD FX-8350","GTX 660 / Radeon HD 7950",8,40,1],
  ["Mortal Kombat 9 Komplete Edition","accion","MK9.webp","AWJG5EyeAgQ","Windows 7 / 8 (64-bit)","Intel Core i5-750 / Phenom II X4 965","GTX 560 / Radeon HD 6950",4,10,1],
  ["Grand Theft Auto: San Andreas","accion","GTA SANDRI.jpeg","k7CGiXMUijY","Windows 2000 / XP","Pentium 4 / Athlon XP","128 MB de VRAM",0.4,4.7,1],
  ["Cuphead","accion","cup.png","Y2ePEMEddlQ","Windows 7 / 8 / 10","Intel Core i3-2100 / Athlon II X4 640","GT 240 1 GB / Radeon HD 5570 1 GB",4,15,1],
  ["Hollow Knight: Silksong","aventura","Hollow.png","v2HTF9mJuIM","Windows 10 (64-bit)","Intel Core i5-3470","GTX 1050 2 GB / Radeon R9 380 2 GB",8,8,1],
  ["The Forest","terror","thefore.png","zpbExv3RAlw","Windows 7","Procesador de 4 núcleos","GeForce GTX 560",4,5,1],
  ["Los Simpsons: Hit & Run","aventura","simp.jpg","eVb5gvxaLbs","Windows 98 / ME / 2000 / XP","Pentium III 1 GHz","64 MB 3D compatible con DirectX 8.1",0.25,2.2,1],
  ["Dragon Ball Xenoverse","anime","XENOVERSEEE1.jpg","-KepyLrRb-I","Windows Vista / 7 (64-bit)","Core 2 Duo 2.4 GHz / Athlon X2 5200+","GeForce 8800 / Radeon HD 3870 512 MB",2,10,1],
  ["Dragon Ball Xenoverse 2","anime","xenoversee2.jpg","_yi1lsTfALY","Windows 10 / 11 (64-bit)","Intel Core i5-4460 / Ryzen 3 1200","GTX 750 Ti / Radeon HD 7850",8,17,1],
  ["Dragon Ball Z: Kakarot","anime","Kakarot.png","2BkRnjzjzXs","Windows 10 (64-bit)","Intel Core i5-2400 / Phenom II X6 1100T","GTX 750 Ti / Radeon HD 7950",8,40,1],
  ["Dragon Ball FighterZ","anime","fght.png","g8d5e7popHY","Windows 10","Intel Core i5-3470 / Ryzen 3 1200","GT 640 2 GB / Radeon HD 7950 3 GB",6,30,1],
  ["Demon Slayer","anime","Demo.png","LftC0isSQis","Windows 10","Intel Core i5-3470 / Ryzen 3 1200","GT 640 2 GB / Radeon HD 7950 3 GB",6,30,1]
];

const CATS = { accion:"Acción", terror:"Terror", anime:"Anime", carreras:"Carreras", deportes:"Deportes", aventura:"Aventura y rol" };
const GAMES = RAW.map(([title,cat,img,vid,os,cpu,gpu,ram,disk,store],i) => ({
  i,title,cat,img:IMG+img,vid,os,cpu,gpu,ram,disk,store:!!store,
  yt:"https://www.youtube.com/watch?v="+vid,
  thumb:"https://img.youtube.com/vi/"+vid+"/hqdefault.jpg",
  steam:"https://store.steampowered.com/search/?term="+encodeURIComponent(title)
}));

const $ = id => document.getElementById(id);
const grid = $("gamesGrid"), input = $("searchInput"), ramSel = $("ramSelect"), sortSel = $("sortSelect");
const catBox = $("categories"), countEl = $("resultCount"), empty = $("emptyState"), ramNote = $("ramNote");
const modal = $("modal");
let category = "all";

const fmtGB = n => n < 1 ? Math.round(n*1024) + " MB" : (Number.isInteger(n) ? n : n.toFixed(1).replace(/\.0$/,"")) + " GB";
const imgFallback = (el, g) => { el.onerror = () => { el.onerror = null; el.src = g.thumb; }; };

/* Hero */
const feat = GAMES[0];
$("featured").href = feat.yt;
$("featuredImg").src = feat.img; imgFallback($("featuredImg"), feat);
$("featuredTitle").textContent = feat.title;
$("statGames").textContent = GAMES.length;
$("statCats").textContent = Object.keys(CATS).length;
$("statVideos").textContent = GAMES.length;

/* Categorías */
catBox.innerHTML = '<button class="cat-btn active" type="button" data-category="all">Todos</button>' +
  Object.entries(CATS).map(([k,v]) => `<button class="cat-btn" type="button" data-category="${k}">${v}</button>`).join("");
catBox.addEventListener("click", e => {
  const b = e.target.closest(".cat-btn"); if (!b) return;
  catBox.querySelectorAll(".cat-btn").forEach(x => x.classList.toggle("active", x === b));
  category = b.dataset.category; render();
});

/* Tarjetas */
const cardEls = GAMES.map(g => {
  const el = document.createElement("button");
  el.type = "button"; el.className = "game-card";
  el.innerHTML = `
    <div class="thumb"><img alt="Portada de ${g.title.replace(/"/g,"&quot;")}" loading="lazy"><span class="tag">${CATS[g.cat]}</span><span class="badge" hidden></span></div>
    <div class="info"><h3></h3>
      <p class="meta"><span><i class="fa-solid fa-memory"></i>${g.ram ? fmtGB(g.ram) + " RAM" : "RAM por confirmar"}</span><span><i class="fa-solid fa-hard-drive"></i>${g.disk ? fmtGB(g.disk) : "—"}</span></p>
    </div>`;
  el.querySelector("h3").textContent = g.title;
  const im = el.querySelector("img"); imgFallback(im, g); im.src = g.img;
  el.addEventListener("click", () => openModal(g));
  g.el = el; return el;
});
grid.append(...cardEls);

function render() {
  const q = input.value.trim().toLowerCase();
  const ram = +ramSel.value;
  let list = GAMES.filter(g => (category === "all" || g.cat === category) && g.title.toLowerCase().includes(q));
  if (ram) list = list.filter(g => g.ram && g.ram <= ram);

  const s = sortSel.value;
  if (s === "az") list.sort((a,b) => a.title.localeCompare(b.title, "es"));
  else if (s === "ram") list.sort((a,b) => (a.ram||99) - (b.ram||99));
  else if (s === "disk") list.sort((a,b) => (a.disk||999) - (b.disk||999));
  else list.sort((a,b) => a.i - b.i);

  const visible = new Set(list);
  GAMES.forEach(g => {
    g.el.hidden = !visible.has(g);
    const badge = g.el.querySelector(".badge");
    if (ram && g.ram) { badge.hidden = false; badge.className = "badge ok"; badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tu PC'; }
    else badge.hidden = true;
  });
  list.forEach(g => grid.appendChild(g.el));

  countEl.textContent = list.length === GAMES.length ? GAMES.length + " juegos" : list.length + " de " + GAMES.length + " juegos";
  empty.hidden = list.length !== 0;
  ramNote.hidden = !ram;
  if (ram) ramNote.textContent = `Mostrando juegos cuyo requisito mínimo de RAM es de ${ram} GB o menos. Revisa también CPU y tarjeta gráfica en cada ficha.`;
}

input.addEventListener("input", render);
ramSel.addEventListener("change", render);
sortSel.addEventListener("change", render);
$("resetFilters").addEventListener("click", () => {
  input.value = ""; ramSel.value = "0"; sortSel.value = "default";
  catBox.querySelector('[data-category="all"]').click();
});

/* Modal */
function openModal(g) {
  const mImg = $("mImg"); imgFallback(mImg, g); mImg.src = g.img; mImg.alt = "Portada de " + g.title;
  $("mTag").textContent = CATS[g.cat];
  $("mTitle").textContent = g.title;
  $("mMeta").innerHTML = `<span><i class="fa-solid fa-language"></i>Español</span><span><i class="fa-solid fa-hard-drive"></i>${g.disk ? fmtGB(g.disk) + " de espacio" : "Espacio por confirmar"}</span>`;
  const rows = [["SO",g.os],["CPU",g.cpu],["GPU",g.gpu],["RAM",g.ram ? fmtGB(g.ram) : "Por confirmar"],["Espacio",g.disk ? fmtGB(g.disk) : "Por confirmar"]];
  const ul = $("mReq"); ul.innerHTML = "";
  rows.forEach(([k,v]) => { const li = document.createElement("li"); const s = document.createElement("strong"); s.textContent = k; li.append(s, document.createTextNode(v)); ul.appendChild(li); });

  const fit = $("mFit"), ram = +ramSel.value;
  if (ram && g.ram) {
    fit.hidden = false;
    const ok = g.ram <= ram;
    fit.className = "fit " + (ok ? "ok" : "no");
    fit.textContent = ok ? `Con ${ram} GB de RAM cumples el mínimo de memoria.` : `Necesitas al menos ${fmtGB(g.ram)} de RAM; tienes ${ram} GB.`;
  } else fit.hidden = true;

  $("mVideo").href = g.yt;
  const store = $("mStore"); store.hidden = !g.store; store.href = g.steam;
  modal.showModal();
}
$("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* Navegación activa */
const links = document.querySelectorAll(".navbar nav a[href^='#']");
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  links.forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

render();
