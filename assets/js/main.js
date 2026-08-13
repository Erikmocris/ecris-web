const b=document.querySelector('.menu-btn'),m=document.querySelector('.menu');b?.addEventListener('click',()=>m.classList.toggle('open'));document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));

// Mantener el logo exactamente como fue entregado: sin filtros, placas ni deformaciones.
document.querySelectorAll('img.logo-img,.site-footer-modern img,.foot img').forEach(img=>{img.style.width='128px';img.style.height='auto';img.style.maxHeight='54px';img.style.objectFit='contain';img.style.filter='none';img.style.background='transparent';img.style.padding='0';img.style.borderRadius='0';const a=img.closest('a');if(a){a.style.background='transparent';a.style.padding='0';a.style.boxShadow='none';a.style.borderRadius='0';}});

const svg=(path)=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
const icons={
check:svg('<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>'),
shield:svg('<path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>'),
target:svg('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M22 12h-3"/>'),
doc:svg('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
chart:svg('<path d="M4 20V10M10 20V5M16 20v-8M22 20H2"/>'),
folder:svg('<path d="M3 7h7l2 2h9v10H3z"/>'),
helmet:svg('<path d="M4 15a8 8 0 0 1 16 0M3 15h18M9 7v5M15 7v5"/>'),
users:svg('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M14 20v-1.5a4.5 4.5 0 0 1 7 0V20"/>'),
leaf:svg('<path d="M20 4C12 4 5 8 5 14c0 3 2 5 5 5 6 0 10-7 10-15Z"/><path d="M5 20c2-5 6-8 11-10"/>'),
calendar:svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>')
};

const setIcon=(el,key)=>{if(!el)return;el.innerHTML=icons[key]||icons.check;el.classList.add('svg-icon');};
const micros=[...document.querySelectorAll('.micro-benefits b')];['shield','target','doc','chart'].forEach((k,i)=>setIcon(micros[i],k));
const services=[...document.querySelectorAll('.service-icon')];['shield','leaf','users','doc'].forEach((k,i)=>setIcon(services[i],k));
const values=[...document.querySelectorAll('.value-item>span')];['target','folder','helmet','chart'].forEach((k,i)=>setIcon(values[i],k));
const results=[...document.querySelectorAll('.result>span')];['users','shield','calendar','check'].forEach((k,i)=>setIcon(results[i],k));

const leadForm=document.querySelector('#leadForm');leadForm?.addEventListener('submit',(e)=>{e.preventDefault();const f=new FormData(leadForm);const msg=`Hola ECRIS, quiero solicitar información.\n\nNombre: ${f.get('Nombre')}\nEmpresa: ${f.get('Empresa')}\nEmail: ${f.get('Email')}\nTeléfono: ${f.get('Telefono')||'-'}\nServicio: ${f.get('Servicio')}\nMensaje: ${f.get('Mensaje')||'-'}`;window.open(`https://wa.me/56946656213?text=${encodeURIComponent(msg)}`,'_blank','noopener');});