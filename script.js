const projects = [
 {title:"The Glasshouse Villa",category:"Residential",place:"Indira Nagar, Bengaluru",desc:"A light-filled home with generous proportions, natural stone and warm metallic details.",img:"https://images.unsplash.com/photo-1648881806148-e5c51179c826?auto=format&fit=crop&w=900&q=85"},
 {title:"Apex Tech Headquarters",category:"Office",place:"Koramangala, Bengaluru",desc:"A contemporary executive environment with tactile timber and collaborative zones.",img:"https://images.pexels.com/photos/8082233/pexels-photo-8082233.jpeg?auto=compress&cs=tinysrgb&w=900"},
 {title:"Aura Botanical Cafe",category:"Commercial",place:"Indira Nagar, Bengaluru",desc:"A welcoming hospitality mood with earthy finishes and intimate seating.",img:"https://images.unsplash.com/photo-1583354608715-177553a4035e?auto=format&fit=crop&w=900&q=85"},
 {title:"Minimalist Penthouse",category:"Residential",place:"Whitefield, Bengaluru",desc:"A calm urban retreat inspired by restrained forms and warm natural materials.",img:"https://images.unsplash.com/photo-1688647063090-36f36f692d95?auto=format&fit=crop&w=900&q=85"},
 {title:"Nexus Creative Studio",category:"Office",place:"MG Road, Bengaluru",desc:"An open, flexible workplace with considered collaboration spaces.",img:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"},
 {title:"Lumière Lounge",category:"Commercial",place:"Bengaluru",desc:"An atmospheric lounge direction with layered lighting and rich surfaces.",img:"https://images.unsplash.com/photo-1502920764203-b859c2384716?auto=format&fit=crop&w=900&q=85"},
 {title:"Serenity Bedroom Suite",category:"Residential",place:"Bengaluru",desc:"A restful bedroom palette with soft textures and ambient light.",img:"https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?auto=format&fit=crop&w=900&q=85"},
 {title:"Vanguard Law Chambers",category:"Office",place:"Lavelle Road, Bengaluru",desc:"A composed professional interior with tailored joinery and warm lighting.",img:"https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=900"},
 {title:"Verdant Dining",category:"Commercial",place:"Indira Nagar, Bengaluru",desc:"A contemporary dining concept with natural textures and botanical character.",img:"https://images.unsplash.com/photo-1651440204216-548382747b40?auto=format&fit=crop&w=900&q=85"},
 {title:"Contemporary Haven",category:"Residential",place:"Sarjapur Road, Bengaluru",desc:"An open-plan living concept with a clean architectural focal point.",img:"https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?auto=format&fit=crop&w=900&q=85"},
 {title:"Fintech Innovation Hub",category:"Office",place:"Outer Ring Road, Bengaluru",desc:"A focused boardroom environment with integrated technology.",img:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"},
 {title:"Velvet & Stone Bistro",category:"Commercial",place:"Bengaluru",desc:"A warm bistro direction balancing rich colour, stone and brass accents.",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85"}
];
const grid=document.getElementById('portfolioGrid');
function renderProjects(filter='All'){
 grid.innerHTML=projects.filter(p=>filter==='All'||p.category===filter).map(p=>`<article class="portfolio-item"><img src="${p.img}" alt="${p.title} — ${p.category} interior inspiration" loading="lazy"><div class="portfolio-overlay"><span>${p.category.toUpperCase()} · ${p.place.toUpperCase()}</span><h3>${p.title}</h3><p>${p.desc}</p></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProjects(btn.dataset.filter)}));
document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.getElementById('mainNav');document.getElementById('menuToggle').addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Assistant: guided, local-first helper. It does not claim to be a live generative AI service.
const panel=document.getElementById('chatPanel'),launch=document.getElementById('chatLaunch'),messages=document.getElementById('chatMessages');
launch.addEventListener('click',()=>{panel.classList.add('open');panel.setAttribute('aria-hidden','false')});
document.getElementById('chatClose').addEventListener('click',()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true')});
function addMessage(text,who='bot'){const el=document.createElement('div');el.className=who==='user'?'user-message':'bot-message';el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}
function assistantReply(q){
 const s=q.toLowerCase();
 if(s.includes('estimate'))return '__KOUSR_ESTIMATE_CTA__';
 if(s.includes('budget')||s.includes('cost')||s.includes('price'))return 'Project costs depend on area, scope, materials and finish level. Please use the consultation form to share your project details and budget so the KOUSR team can discuss a suitable estimate.';
 if(s.includes('process')||s.includes('step'))return 'Our process has seven stages: discovery and site audit; concept and moodboards; 3D visualisation; material and finish selection; BOQ and project agreement; site execution; and finishing and handover.';
 if(s.includes('address')||s.includes('studio')||s.includes('location'))return 'Our studio is at 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038. Call +91 8148287909 or use the WhatsApp link on this page.';
 if(s.includes('office'))return 'We plan executive offices and workspaces, with attention to ergonomics, acoustics, collaboration, lighting and brand character.';
 if(s.includes('commercial')||s.includes('cafe')||s.includes('retail'))return 'We work on commercial and hospitality concepts including cafes, retail outlets and dining spaces, balancing customer experience, brand atmosphere and spatial efficiency.';
 if(s.includes('residential')||s.includes('home')||s.includes('villa')||s.includes('apartment'))return 'Our residential design scope includes villas, apartments and penthouses, with space planning, custom furniture and joinery, lighting, material curation and turnkey execution.';
 return 'Thanks for sharing that. I can help with an initial project brief. Please tell me whether this is a home, office or commercial space, its location and approximate area. You can also submit the consultation form for the KOUSR team to follow up.';
}
function sendChat(q){if(!q.trim())return;addMessage(q,'user');setTimeout(()=>{const reply=assistantReply(q);if(reply==='__KOUSR_ESTIMATE_CTA__'){const el=document.createElement('div');el.className='bot-message';el.append('Thank you for showing interest in our Interiors Design, please fill the form to ');const link=document.createElement('a');link.href='#contact';link.textContent='Book a free design consultation';link.className='assistant-contact-link';el.append(link);el.append('. We shall get back to you with further discussions on Design and Budget Estimates');const arrow=document.createElement('a');arrow.href='#contact';arrow.textContent='→';arrow.setAttribute('aria-label','Go to the consultation form');arrow.className='assistant-arrow-link';el.append(arrow);messages.appendChild(el);messages.scrollTop=messages.scrollHeight;}else addMessage(reply)},250)}
document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatInput');sendChat(input.value);input.value=''});
document.querySelectorAll('.quick-questions button').forEach(b=>b.addEventListener('click',()=>sendChat(b.dataset.question)));
