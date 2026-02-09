

// --- DATA ARRAYS ---
const SKILLS = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const PROJECTS = [
  {
    id: '1',
    title: 'Smart Expense Tracker',
    description: 'A robust web-based financial management tool built with React and high-performance local storage state sync. Features interactive D3.js charts for budget visualization.',
    tags: ['React', 'D3.js', 'Vite'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Precision Weather Engine',
    description: 'Hyper-local weather forecasting application utilizing OpenWeatherMap API with high-precision geolocation tracking and dynamic atmospheric background rendering.',
    tags: ['JavaScript', 'API', 'GIS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Elite Developer Framework',
    description: 'A custom-built static site generator optimized for developer portfolios, implementing advanced lazy loading, smooth scroll engines, and SEO orchestration.',
    tags: ['Node.js', 'SEO', 'CLI'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Cloud Dashboard Pro',
    description: 'Enterprise-grade monitoring suite for AWS infrastructure. Leverages real-time data streams and custom-built alerting modules for high availability monitoring.',
    tags: ['AWS', 'React', 'Go'],
    image: 'https://i.pinimg.com/1200x/41/ab/2f/41ab2f915958700e65c21a1c23aff614.jpg',
  },
  {
    id: '5',
    title: 'AI Content Orchestrator',
    description: 'Integration of LLMs into editorial workflows. Automates draft generation, fact-checking, and cross-platform publishing through a unified dashboard.',
    tags: ['Python', 'OpenAI', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
];

const INITIAL_RECOMMENDATIONS = [
  {
    id: '1',
    name: "Anita Choudhary",
    title: "Team Lead, Tech Solutions Ltd.",
    text: "Samuel is an exceptionally diligent developer who consistently takes initiative on critical architecture decisions. His proactive approach to learning is a massive asset.",
    date: 'Oct 2023',
    avatar: 'https://i.pravatar.cc/150?u=anita'
  },
  {
    id: '2',
    name: "Michael Zhang",
    title: "Project Manager, CloudNet Inc.",
    text: "Beyond his obvious technical mastery, Samuel's communication and team-centric mindset were pivotal in our cloud migration project success.",
    date: 'Jan 2024',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: '3',
    name: "David Wilson",
    title: "CEO, InnovateX (Client)",
    text: "Working with Samuel was a seamless experience. He translated our complex business requirements into a scalable platform faster than anticipated.",
    date: 'Mar 2024',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
];

// --- APP STATE ---
let recommendations = [...INITIAL_RECOMMENDATIONS];
let chatMessages = [
  { role: 'model', text: "Hi! I'm Samuel's AI assistant. Ask me anything about his projects, skills, or professional experience!" }
];

// --- RENDER FUNCTIONS ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = SKILLS.map(skill => `
        <div class="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-100 transition-all duration-500 flex flex-col items-center gap-5 text-center cursor-default hover:-translate-y-2">
            <div class="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                <img src="${skill.icon}" alt="${skill.name}" class="w-full h-full object-contain" />
            </div>
            <span class="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">${skill.name}</span>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = PROJECTS.map(project => `
        <article class="card-hover flex flex-col overflow-hidden bg-white border border-slate-50 rounded-[2.5rem] shadow-sm group">
            <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-blue-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="p-10 flex-1 flex flex-col">
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `<span class="px-3.5 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100">${tag}</span>`).join('')}
                </div>
                <h3 class="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">${project.title}</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-8 flex-1">${project.description}</p>
                <button class="text-sm font-black text-slate-900 flex items-center gap-2 group/btn hover:text-blue-600 transition-colors">
                    <span>View Case Study</span>
                    <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
            </div>
        </article>
    `).join('');
}

function renderRecommendations() {
    const container = document.getElementById('recommendations-container');
    container.innerHTML = recommendations.map(rec => `
        <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative group animate-in">
            <div class="absolute top-8 right-10 text-slate-100 group-hover:text-blue-50 transition-colors">
                <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.356 14 14.017 12.661 14.017 11V5H20.017V11H17.017V14H19.017C20.1216 14 21.017 14.8954 21.017 16V21H14.017ZM3.017 21V18C3.017 16.8954 3.91243 16 5.017 16H8.017V14H6.017C4.356 14 3.017 12.661 3.017 11V5H9.017V11H6.017V14H8.017C9.12157 14 10.017 14.8954 10.017 16V21H3.017Z" /></svg>
            </div>
            <div class="flex items-center gap-4 mb-8">
                <img src="${rec.avatar}" alt="${rec.name}" class="w-14 h-14 rounded-full border-2 border-slate-100 shadow-sm object-cover" />
                <div>
                    <h4 class="font-black text-slate-900">${rec.name}</h4>
                    <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">${rec.title}</p>
                </div>
            </div>
            <p class="text-slate-600 italic text-lg leading-relaxed mb-6 relative z-10">"${rec.text}"</p>
            <div class="text-right">
                <span class="text-[10px] font-black text-slate-300 uppercase tracking-widest">${rec.date}</span>
            </div>
        </div>
    `).join('');
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages');
    container.innerHTML = chatMessages.map(msg => `
        <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
            <div class="max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-slate-900 text-white rounded-br-none' 
                : 'bg-white text-slate-600 border border-slate-100 rounded-bl-none'
            }">
                ${msg.text}
            </div>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

// --- UI UTILS ---
function showModal(message) {
    const overlay = document.getElementById('modal-overlay');
    const msgEl = document.getElementById('modal-message');
    msgEl.innerText = message;
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    setTimeout(() => overlay.classList.add('show'), 10);
}

function hideModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
    }, 300);
}

// --- EVENT HANDLERS ---

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOpenIcon = document.getElementById('mobile-open-icon');
const mobileCloseIcon = document.getElementById('mobile-close-icon');

function setMobileMenuOpen(isOpen) {
    if (!mobileMenuButton || !mobileMenu || !mobileOpenIcon || !mobileCloseIcon) return;
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileOpenIcon.classList.toggle('hidden', isOpen);
    mobileCloseIcon.classList.toggle('hidden', !isOpen);
}

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        setMobileMenuOpen(!isOpen);
    });

    mobileMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMobileMenuOpen(false);
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setMobileMenuOpen(false);
});

// Scroll & Header Logic
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    const sections = document.querySelectorAll('.section-observe');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'border-blue-600');
        link.classList.add('text-slate-500', 'border-transparent');
        if (link.dataset.section === current) {
            link.classList.add('text-blue-600', 'border-blue-600');
            link.classList.remove('text-slate-500', 'border-transparent');
        }
    });
});

// Chat Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotWindow = document.getElementById('chatbot-window');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
    chatbotWindow.classList.toggle('flex');
    chatbotWindow.classList.toggle('animate-in');
    renderChatMessages();
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
    chatbotWindow.classList.remove('show');
});

async function handleChatSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatMessages.push({ role: 'user', text });
    chatInput.value = '';
    renderChatMessages();

    const container = document.getElementById('chat-messages');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'flex justify-start';
    typingIndicator.innerHTML = '<div class="bg-white p-4 rounded-2xl border border-slate-100 flex gap-1.5 typing-dots"><div></div><div></div><div></div></div>';
    container.appendChild(typingIndicator);
    container.scrollTop = container.scrollHeight;

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: chatMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            config: {
                systemInstruction: `Identity: John Doe's AI Assistant. Tone: Professional, warm, and highly engineering-focused.
                Background: 3 years experience, expert in React, Node, and AWS. 
                Projects: Expense Tracker (React/D3), Weather Engine (API/Geolocation), Dev Framework (Node/SEO), Cloud Dashboard (AWS/React), AI Content (Python/LLM).
                Goal: Persuade recruiters by highlighting John's ability to solve complex architectural challenges.`,
                temperature: 0.8,
            }
        });
        chatMessages.push({ role: 'model', text: response.text });
    } catch (e) {
        chatMessages.push({ role: 'model', text: "I'm experiencing a high load right now, but I can tell you John's React skills are top-notch! Try asking again in a moment." });
    } finally {
        container.removeChild(typingIndicator);
        renderChatMessages();
    }
}

chatSend.addEventListener('click', handleChatSend);
chatInput.addEventListener('keydown', (e) => e.key === 'Enter' && handleChatSend());

// Recommendation Form
const recForm = document.getElementById('recommendation-form');
recForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rec-name').value;
    const title = document.getElementById('rec-title').value;
    const text = document.getElementById('rec-text').value;

    const newRec = {
        id: Date.now().toString(),
        name,
        title,
        text,
        date: 'Just Now',
        avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`
    };

    recommendations.unshift(newRec);
    renderRecommendations();
    recForm.reset();
    showModal('thank you for submitting');
});

document.getElementById('modal-close').addEventListener('click', hideModal);

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderRecommendations();
});
