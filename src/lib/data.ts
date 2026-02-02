export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  details: string[];
  color: 'emerald' | 'blue' | 'purple';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  visualType?: 'neural' | 'bars' | 'none';
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface CreativeTool {
  name: string;
  level: number;
  type: string;
}

export interface Certification {
  name: string;
  detail: string;
  year: string;
}

export const experiences: Experience[] = [
  {
    id: 'fractal',
    role: 'Engineer (Grade 9)',
    company: 'Fractal',
    period: 'July 2024 – Present',
    highlights: ['Promoted during tenure', 'Recipient of STAR Awards'],
    details: [
      'I architected ETL pipelines on Databricks processing 10TB+ daily, implementing data transformations and ML workflows',
      'I led Azure DevOps CI/CD automation, reducing deployment time by 40% and ensuring smooth collaboration',
      'I designed RESTful APIs using FastAPI serving 1M+ requests/day with optimized performance and secure data handling',
      'I created interactive data visualizations using Highcharts and D3.js for real-time dashboards and decision-making',
      'Tech Stack: python • fastapi • react.js • typescript • databricks • azure • postgresql'
    ],
    color: 'emerald'
  },
  {
    id: 'corestrat',
    role: 'Software Engineer Intern',
    company: 'Corestrat',
    period: 'January 2024 – April 2024',
    highlights: ['Delivered AlgoPivot & ID.AI', 'Built Windows trading executable'],
    details: [
      'I developed AlgoPivot: an algorithmic trading automation platform with real-time insights and data visualization',
      'I engineered ID.AI: an intelligent decision software with CV-based identity verification and analytics',
      'I packaged a Windows executable for institutional trading desks, ensuring smooth backend-frontend integration',
      'Tech Stack: python • opencv • pandas • windows sdk • javascript'
    ],
    color: 'blue'
  },
  {
    id: 'codeclause',
    role: 'AI Intern',
    company: 'CodeClause',
    period: 'September 2023 – October 2023',
    highlights: ['Road Lane Analysis System'],
    details: [
      'I implemented real-time lane detection using OpenCV and computer vision techniques',
      'I achieved 92% accuracy in lane-keeping assistance, contributing to improved road safety measures',
      'Tech Stack: python • opencv • numpy • computer vision'
    ],
    color: 'purple'
  }
];

export const projects: Project[] = [
  {
    id: 'rag-agent',
    title: 'Autonomous Research Agent',
    description: 'RAG pipeline using LangChain and vector databases. Autonomously researches, retrieves context, and synthesizes comprehensive reports.',
    tech: ['python', 'langchain', 'pinecone', 'openai api', 'fastapi'],
    featured: true,
    visualType: 'neural'
  },
  {
    id: 'sentiment-analysis',
    title: 'Financial Sentiment Classifier',
    description: 'ML ensemble for real-time market sentiment analysis on Twitter data using multiple classification algorithms.',
    tech: ['scikit-learn', 'nltk', 'pandas', 'python'],
    featured: true,
    visualType: 'bars',
    metrics: [
      { label: 'SVM', value: '76%' },
      { label: 'Logistic Regression', value: '75%' },
      { label: 'Random Forest', value: '74%' },
      { label: 'Naive Bayes', value: '73%' }
    ]
  },
  {
    id: 'SIDOC',
    title: 'SIDOC — Analysis Platform',
    description: 'Sidoc is a data visualization and analytics web application designed to help users analyze complex datasets through interactive charts and global maps. The platform enables intuitive exploration of trends, comparisons, and performance metrics across regions. It focuses on delivering clear insights through a scalable and user-friendly interface built for enterprise use.',
    tech: ['FastApi', 'react', 'D3.js', 'ChartJS'],
    featured: false,
    visualType: 'none'
  },
  {
    id: 'bistro-buddy',
    title: 'Bistro Buddy',
    description: 'Built Bistro Buddy, a PetPooja-like restaurant management web app with a modern, responsive UI.',
    tech: ['React', 'JavaScript', 'MUI', 'Python'],
    featured: false,
    visualType: 'none'
  }
];

export const skillsData = {
  technical: [
    { name: 'Python', level: 95, category: 'Engineering' },
    { name: 'SQL', level: 90, category: 'Engineering' },
    { name: 'TypeScript', level: 88, category: 'Engineering' },
    { name: 'React/Next.js', level: 92, category: 'Engineering' },
    { name: 'FastAPI', level: 85, category: 'Engineering' },
    { name: 'Azure/Databricks', level: 80, category: 'Cloud' }
  ] as Skill[],
aiStack: [
  'Large Language Models (LLMs)',
  'LangChain',
  'LangGraph',
  'Retrieval-Augmented Generation (RAG)',
  'Google Gemini API',
  'Prompt Engineering',
  'Vector Databases (FAISS / Chroma)',
  'Embedding Models',
  'scikit-learn',
  'Machine Learning Fundamentals',
  'Natural Language Processing (NLP)',
  'Pandas',
  'NumPy',
  'OpenCV (Basics)'
],
  creative: [
    { name: 'CorelDRAW', level: 90, type: 'Vector Design' },
    { name: 'Adobe Photoshop', level: 85, type: 'Raster Graphics' },
    { name: 'Figma', level: 80, type: 'UI/UX Design' }
  ] as CreativeTool[],
  certifications: [
    { name: 'Building Generative AI (GEN AI) applications', detail: 'Fractal Analytics Academy', year: '2025' },
    { name: 'Data analyst (Qlik)', detail: 'Fractal', year: '2025' },
    { name: 'Design Thinking for Data Professionals', detail: 'Fractal', year: '2024' },
    { name: 'Google Data Analytics', detail: 'Google', year: '2023' }
  ] as Certification[]
};

export const entrepreneurshipData = {
  company: 'New Graphic Arts',
  role: 'Founder & Brand Strategist',
  narrative: 'Parallel to my engineering career, I founded New Graphic Arts—specializing in corporate gifting and brand identity. This duality gives me a unique edge in UI/UX: I understand both the technical constraints of implementation and the visual narrative of design.',
  metrics: [
    { label: 'Years', value: '5+' },
    { label: 'Brands', value: '50+' },
    { label: 'Services', value: 'Corporate Gifting' }
  ],
  services: ['Brand Management', 'Corporate Gifting', 'Visual Identity'],
  brandColors: [
    { name: 'Emerald Wave', gradient: 'from-emerald-400 to-teal-500', hex: '#34D399' },
    { name: 'Ocean Blue', gradient: 'from-blue-400 to-cyan-500', hex: '#60A5FA' },
    { name: 'Purple Haze', gradient: 'from-purple-400 to-pink-500', hex: '#A78BFA' },
    { name: 'Sunset Glow', gradient: 'from-orange-400 to-rose-500', hex: '#FB923C' }
  ]
};

export const contactData = {
  email: 'Akshayaakshaya2000@gmail.com',
  linkedin: 'https://linkedin.com/in/akshaya-agarwal-13',
  github: 'https://github.com/akshaya-agarwal',
  location: 'Lucknow, Uttar Pradesh, India'
};
