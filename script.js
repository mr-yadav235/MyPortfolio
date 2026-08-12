// Theme persistence
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'light') themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  themeToggle.textContent = current === 'light' ? '☀️' : '🌙';
});

// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const experienceList = document.getElementById('experienceList');
const projectsGrid = document.getElementById('projectsGrid');
const skillsList = document.getElementById('skillsList');

// ✅ Real Experience Data
const experience = [
  {
    role: 'Lead Software Engineer',
    company: 'Expleo Group (Client: Mashreq Bank)',
    period: 'Jul 2024 – Aug 2025',
    bullets: [
      'Managed APIs using IBM API Connect with end-to-end security.',
      'Automated deployments via Azure DevOps.',
      'Built Agentic AI Log Chatbot with Node.js, OpenAI, and Elasticsearch.',
      'Implemented Visa Fraud Alert APIs and custom governance rules.'
    ]
  },
  {
    role: 'System Analyst',
    company: 'Ujjivan Small Finance Bank',
    period: 'Oct 2021 – Jun 2024',
    bullets: [
      'Led Hybrid Encryption implementation across all APIs.',
      'Developed OpenAPI specs for API Connect.',
      'Implemented JWT, SSL, OAuth, and Crypto security.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Harjai Computers (Client: PNB MetLife)',
    period: 'Oct 2020 – Oct 2021',
    bullets: [
      'Backups and updates of API Gateway appliances.',
      'Maintained Swagger docs and API lifecycle management.'
    ]
  },
  {
    role: 'Consultant',
    company: 'Mindcraft Software',
    period: 'Mar 2020 – Sep 2020',
    bullets: [
      'Created OpenAPI documentation and enforced API security practices.'
    ]
  },
  {
    role: 'Junior Software Developer',
    company: 'Cateina Technologies',
    period: 'Aug 2018 – Feb 2020',
    bullets: [
      'Set up API Connect & DataPower for ICICI Bank, NSE, Indian Port Association.',
      'Implemented JWT/OAuth, CI/CD pipelines, and HA architectures.'
    ]
  },
  {
    role: 'Trainee Engineer',
    company: 'Synoris Information System (Client: Alinma Bank)',
    period: 'Mar 2018 – Jul 2018',
    bullets: [
      'Developed microservices with Spring Boot & Node.js.',
      'Built APIs secured with JWT/OAuth.'
    ]
  }
];

// ✅ Projects with Logos
const projects = [
  {
    title: 'Mashreq Bank',
    description: 'AI-powered log chatbot, Visa APIs for fraud alerts, and automated housekeeping pipelines.',
    logo: 'assets/mashreq.png'
  },
  {
    title: 'Ujjivan Small Finance Bank',
    description: 'Hybrid encryption across APIs with dynamic key rotation, ensuring CISO compliance.',
    logo: 'assets/ujjivan.png'
  },
  {
    title: 'PNB MetLife',
    description: 'Maintained API Gateway, Swagger docs, and lifecycle versioning.',
    logo: 'assets/pnbmetlife.png'
  },
  {
    title: 'ICICI Bank',
    description: 'Deployed API Connect/DataPower, OAuth security, and CI/CD pipelines.',
    logo: 'assets/icici.png'
  },
  {
    title: 'National Stock Exchange',
    description: 'Developed secure APIs, managed lifecycle, and automated deployment pipelines.',
    logo: 'assets/nse.jpg'
  },
  {
    title: 'Indian Port Association',
    description: 'Built scalable API platforms on OpenShift with Kubernetes and load balancing.',
    logo: 'assets/ipa.jpg'
  },
  {
    title: 'Alinma Bank',
    description: 'Developed Spring Boot microservices, OpenAPI specs, and JWT/OAuth-secured APIs.',
    logo: 'assets/alinma.png'
  }
];


// ✅ Skills List
const skills = [
  'IBM API Connect & DataPower',
  'Node.js Development',
  'Kubernetes Orchestration',
  'Docker Containerization',
  'GatewayScript & XSLT',
  'Java Programming',
  'Jenkins Automation',
  'Git & Azure DevOps',
  'Red Hat OpenShift',
  'API Security (JWT, OAuth, SSL, Hybrid Encryption)'
];

// Render experience
experience.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${item.role}</strong> · ${item.company} <span style="color:var(--muted)">(${item.period})</span>
    <ul style="margin:8px 0 0 18px; color:var(--muted)">
      ${item.bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>`;
  experienceList.appendChild(li);
});

// Render projects
projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card project-card';
  card.innerHTML = `
    <img src="${p.logo}" alt="${p.title} Logo" class="project-logo">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
  `;
  projectsGrid.appendChild(card);
});

// Render skills
skills.forEach(s => {
  const li = document.createElement('li');
  li.textContent = s;
  skillsList.appendChild(li);
});
