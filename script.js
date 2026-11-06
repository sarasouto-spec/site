document.getElementById("year")?.replaceChildren(String(new Date().getFullYear()));
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.querySelectorAll("[data-cover]").forEach(slot=>{const file=slot.dataset.cover;const img=new Image();img.src=(location.pathname.includes("/livros/")?"../assets/":"assets/")+file;img.alt="Capa oficial";img.onload=()=>{slot.textContent="";slot.appendChild(img);};});
