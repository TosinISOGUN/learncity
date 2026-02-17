export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  school: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: string;
  format: string;
  outcomes: string[];
  curriculum: { week: string; title: string; topics: string[] }[];
  instructor: { name: string; role: string; bio: string };
}

export const programs: Program[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    shortDescription: "Build complete web applications from frontend to backend with modern technologies.",
    description: "Learn to build complete web applications from start to finish — combining frontend design, backend logic, and database management into one powerful skill set. This comprehensive program takes you from zero to deployment-ready.",
    school: "School of Engineering",
    category: "Engineering",
    level: "Beginner",
    duration: "7 Months",
    price: "₦650,000",
    format: "Physical / Virtual",
    outcomes: [
      "Build full-stack web applications with React and Node.js",
      "Design and manage databases with SQL and NoSQL",
      "Deploy applications to cloud platforms",
      "Implement authentication and authorization",
      "Work with REST APIs and GraphQL",
    ],
    curriculum: [
      { week: "Weeks 1-4", title: "HTML, CSS & JavaScript Foundations", topics: ["Semantic HTML", "CSS Grid & Flexbox", "JavaScript ES6+", "DOM Manipulation"] },
      { week: "Weeks 5-8", title: "Frontend with React", topics: ["Components & Props", "State Management", "React Router", "API Integration"] },
      { week: "Weeks 9-12", title: "Backend with Node.js", topics: ["Express.js", "RESTful APIs", "Authentication", "Middleware"] },
      { week: "Weeks 13-16", title: "Databases & Deployment", topics: ["PostgreSQL", "MongoDB", "Docker Basics", "Cloud Deployment"] },
      { week: "Weeks 17-20", title: "Capstone Project", topics: ["Project Planning", "Full Stack Build", "Testing", "Portfolio Presentation"] },
    ],
    instructor: { name: "David Okonkwo", role: "Senior Software Engineer", bio: "10+ years building scalable web applications at top tech companies across Africa and Europe." },
  },
  {
    id: "product-design",
    title: "Product Design",
    shortDescription: "Master UI/UX design thinking and create beautiful, user-centered digital products.",
    description: "Dive into the world of product design where creativity meets problem-solving. Learn design thinking, wireframing, prototyping, and user testing to create digital products people love.",
    school: "School of Design",
    category: "Design",
    level: "Beginner",
    duration: "4 Months",
    price: "₦350,000",
    format: "Physical / Virtual",
    outcomes: [
      "Apply design thinking methodology",
      "Create wireframes and high-fidelity prototypes in Figma",
      "Conduct user research and usability testing",
      "Build a professional design portfolio",
      "Collaborate with developers effectively",
    ],
    curriculum: [
      { week: "Weeks 1-2", title: "Design Thinking & Research", topics: ["User Research", "Empathy Mapping", "Problem Definition", "Ideation"] },
      { week: "Weeks 3-6", title: "UI Design in Figma", topics: ["Figma Fundamentals", "Design Systems", "Typography & Color", "Responsive Design"] },
      { week: "Weeks 7-10", title: "UX & Prototyping", topics: ["Information Architecture", "User Flows", "Interactive Prototyping", "Micro-interactions"] },
      { week: "Weeks 11-16", title: "Portfolio & Capstone", topics: ["Case Study Writing", "Usability Testing", "Final Project", "Portfolio Review"] },
    ],
    instructor: { name: "Amara Nwosu", role: "Lead Product Designer", bio: "Designed for 50+ startups and enterprises. Passionate about making tech accessible through great design." },
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    shortDescription: "Turn raw data into actionable insights using Excel, SQL, Python, and visualization tools.",
    description: "Learn to collect, clean, analyze, and visualize data to drive business decisions. From spreadsheets to Python, master the tools that make data speak.",
    school: "School of Data",
    category: "Data",
    level: "Beginner",
    duration: "4 Months",
    price: "₦350,000",
    format: "Physical / Virtual",
    outcomes: [
      "Analyze datasets using Excel, SQL, and Python",
      "Create dashboards with Power BI and Tableau",
      "Clean and transform messy data",
      "Present data-driven recommendations",
      "Understand statistical fundamentals",
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "Excel & Spreadsheets", topics: ["Advanced Formulas", "Pivot Tables", "Data Cleaning", "Charts"] },
      { week: "Weeks 4-7", title: "SQL & Databases", topics: ["SQL Queries", "Joins & Subqueries", "Database Design", "Data Warehousing"] },
      { week: "Weeks 8-12", title: "Python for Data", topics: ["Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Automation"] },
      { week: "Weeks 13-16", title: "BI Tools & Capstone", topics: ["Power BI", "Tableau", "Storytelling with Data", "Final Project"] },
    ],
    instructor: { name: "Chidi Eze", role: "Data Analytics Lead", bio: "Former data analyst at a Big 4 firm. Now helping the next generation unlock the power of data." },
  },
  {
    id: "cybersecurity-professional",
    title: "Cybersecurity Professional",
    shortDescription: "Protect digital systems and networks with industry-standard security practices.",
    description: "Build expertise in securing digital infrastructure. From network security to ethical hacking, this comprehensive path prepares you for a career defending the digital world.",
    school: "School of Cybersecurity",
    category: "Security",
    level: "Intermediate",
    duration: "11 Months",
    price: "₦850,000",
    format: "Physical / Virtual",
    outcomes: [
      "Identify and mitigate security vulnerabilities",
      "Perform penetration testing",
      "Implement security frameworks and policies",
      "Prepare for CompTIA Security+ certification",
      "Respond to and manage security incidents",
    ],
    curriculum: [
      { week: "Months 1-2", title: "IT & Networking Foundations", topics: ["Operating Systems", "Networking Basics", "TCP/IP", "Linux Administration"] },
      { week: "Months 3-5", title: "Security Fundamentals", topics: ["Cryptography", "Access Control", "Security Policies", "Risk Management"] },
      { week: "Months 6-8", title: "Ethical Hacking & Pen Testing", topics: ["Vulnerability Assessment", "Penetration Testing", "Web App Security", "Social Engineering"] },
      { week: "Months 9-11", title: "Advanced Security & Certification", topics: ["Incident Response", "Digital Forensics", "Cloud Security", "Cert Prep"] },
    ],
    instructor: { name: "Tunde Bakare", role: "Cybersecurity Consultant", bio: "CISSP-certified professional with experience securing enterprise systems across financial institutions." },
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    shortDescription: "Create stunning, responsive web interfaces with HTML, CSS, JavaScript, and React.",
    description: "Master the art of building beautiful, responsive, and interactive user interfaces. Learn modern frontend technologies and frameworks used by top companies worldwide.",
    school: "School of Engineering",
    category: "Engineering",
    level: "Beginner",
    duration: "3 Months",
    price: "₦250,000",
    format: "Physical / Virtual",
    outcomes: [
      "Build responsive websites from scratch",
      "Master React and component architecture",
      "Implement animations and interactions",
      "Work with APIs and state management",
      "Deploy projects to the web",
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "HTML & CSS Mastery", topics: ["Semantic HTML", "CSS Grid & Flexbox", "Responsive Design", "Animations"] },
      { week: "Weeks 4-6", title: "JavaScript Deep Dive", topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "Error Handling"] },
      { week: "Weeks 7-10", title: "React Development", topics: ["Components", "Hooks", "Routing", "State Management"] },
      { week: "Weeks 11-12", title: "Portfolio Project", topics: ["Project Planning", "Build & Deploy", "Code Review", "Presentation"] },
    ],
    instructor: { name: "Kemi Adeyemi", role: "Frontend Engineer", bio: "Frontend specialist who has mentored 200+ developers. Loves making the web beautiful and accessible." },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Master SEO, social media, content marketing, and paid advertising strategies.",
    description: "Learn to grow brands and businesses online using proven digital marketing strategies. From SEO to paid ads, master the channels that drive real results.",
    school: "School of Creative Media",
    category: "Marketing",
    level: "Beginner",
    duration: "3 Months",
    price: "₦200,000",
    format: "Physical / Virtual",
    outcomes: [
      "Create and execute digital marketing strategies",
      "Run effective Google and Meta ad campaigns",
      "Optimize content for search engines",
      "Analyze campaign performance with analytics tools",
      "Build and manage social media presence",
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "Marketing Foundations", topics: ["Digital Strategy", "Brand Positioning", "Customer Personas", "Content Planning"] },
      { week: "Weeks 4-6", title: "SEO & Content Marketing", topics: ["Keyword Research", "On-page SEO", "Content Creation", "Email Marketing"] },
      { week: "Weeks 7-9", title: "Paid Advertising", topics: ["Google Ads", "Meta Ads", "Campaign Optimization", "Budget Management"] },
      { week: "Weeks 10-12", title: "Analytics & Strategy", topics: ["Google Analytics", "Reporting", "A/B Testing", "Final Campaign"] },
    ],
    instructor: { name: "Funke Olawale", role: "Marketing Director", bio: "Managed multi-million dollar ad budgets. Now teaching the next generation of digital marketers." },
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDescription: "Lead projects with confidence using Agile, Scrum, and modern PM tools.",
    description: "Develop the skills to plan, execute, and deliver projects on time and within budget. Learn industry-standard methodologies and tools used by project managers worldwide.",
    school: "School of Management",
    category: "Management",
    level: "Beginner",
    duration: "3 Months",
    price: "₦250,000",
    format: "Physical / Virtual",
    outcomes: [
      "Apply Agile and Scrum methodologies",
      "Use Jira, Trello, and project management tools",
      "Manage stakeholders and communicate effectively",
      "Create project plans and risk assessments",
      "Prepare for PMP/CAPM certification",
    ],
    curriculum: [
      { week: "Weeks 1-3", title: "PM Fundamentals", topics: ["Project Lifecycle", "Stakeholder Management", "Scope & Requirements", "PM Tools"] },
      { week: "Weeks 4-6", title: "Agile & Scrum", topics: ["Scrum Framework", "Sprint Planning", "User Stories", "Retrospectives"] },
      { week: "Weeks 7-9", title: "Execution & Monitoring", topics: ["Risk Management", "Budget Tracking", "Quality Assurance", "Team Leadership"] },
      { week: "Weeks 10-12", title: "Capstone & Certification", topics: ["Real Project Simulation", "Stakeholder Presentation", "Cert Prep", "Portfolio"] },
    ],
    instructor: { name: "Emeka Onu", role: "Senior Project Manager", bio: "PMP-certified with 8+ years managing tech projects across startups and enterprises." },
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    shortDescription: "Explore machine learning, deep learning, and AI applications with Python.",
    description: "Enter the world of AI and machine learning. Learn to build intelligent systems that can learn from data, make predictions, and solve complex problems.",
    school: "School of Data",
    category: "Data",
    level: "Intermediate",
    duration: "6 Months",
    price: "₦550,000",
    format: "Physical / Virtual",
    outcomes: [
      "Build machine learning models with Python",
      "Understand neural networks and deep learning",
      "Work with NLP and computer vision",
      "Deploy AI models to production",
      "Evaluate and improve model performance",
    ],
    curriculum: [
      { week: "Months 1-2", title: "Python & Math Foundations", topics: ["Python for ML", "Linear Algebra", "Statistics", "Data Preprocessing"] },
      { week: "Month 3", title: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"] },
      { week: "Month 4", title: "Deep Learning", topics: ["Neural Networks", "CNNs", "RNNs", "Transfer Learning"] },
      { week: "Months 5-6", title: "Applied AI & Capstone", topics: ["NLP", "Computer Vision", "Model Deployment", "Capstone Project"] },
    ],
    instructor: { name: "Dr. Ngozi Uche", role: "AI Research Scientist", bio: "PhD in Machine Learning. Published researcher and passionate educator in the AI space." },
  },
];

export const schools = [
  { name: "School of Design & Products", tagline: "Where creativity meets problem-solving.", category: "Design" },
  { name: "School of Data & AI", tagline: "Turning data into decisions, and algorithms into impact.", category: "Data" },
  { name: "School of Engineering", tagline: "Building systems that power the digital world.", category: "Engineering" },
  { name: "School of Cybersecurity", tagline: "Defending the digital frontier.", category: "Security" },
  { name: "School of Management", tagline: "Where leadership meets execution.", category: "Management" },
  { name: "School of Creative Media", tagline: "Create. Communicate. Captivate.", category: "Marketing" },
];

export const categories = ["All", "Engineering", "Design", "Data", "Security", "Marketing", "Management"];
export const levels = ["All", "Beginner", "Intermediate", "Advanced"];
