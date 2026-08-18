export const channels = [
  {
    id: 'CH.01',
    name: 'Generative & Agentic AI',
    tags: ['LLMs', 'RAG', 'Agentic AI', 'Prompt Engineering', 'Embeddings', 'Function Calling', 'Tool Calling']
  },
  {
    id: 'CH.02',
    name: 'AI Frameworks & Platforms',
    tags: ['LangChain', 'LlamaIndex', 'Hugging Face', 'PyTorch', 'OpenAI API', 'Azure OpenAI', 'Anthropic Claude']
  },
  {
    id: 'CH.03',
    name: 'Vector Search',
    tags: ['FAISS', 'Pinecone', 'Chroma']
  },
  {
    id: 'CH.04',
    name: 'Data Engineering',
    tags: ['Apache Spark', 'PySpark', 'Databricks', 'ETL/ELT', 'Data Pipelines']
  },
  {
    id: 'CH.05',
    name: 'Backend & APIs',
    tags: ['FastAPI', 'Flask', 'REST APIs', 'Webhooks', 'JSON']
  },
  {
    id: 'CH.06',
    name: 'Databases',
    tags: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Cassandra']
  },
  {
    id: 'CH.07',
    name: 'Cloud & DevOps',
    tags: ['AWS', 'Microsoft Azure', 'Docker', 'Git', 'GitHub Actions', 'Jenkins', 'CI/CD']
  },
  {
    id: 'CH.08',
    name: 'Languages',
    tags: ['Python', 'SQL', 'Java', 'JavaScript', 'Bash']
  }
]

export const experience = [
  {
    ts: 'T · 2025.03 → 2025.09',
    role: 'AI Engineer Intern',
    org: 'Auto-Owners Insurance',
    location: 'United States',
    points: [
      'Developed <strong>LLM-powered AI solutions</strong> for insurance workflows — retrieval and summarization of policy, claims, and internal knowledge documents so users could locate information faster.',
      'Built <strong>RAG pipelines</strong> end to end: document ingestion, chunking, embedding generation, vector retrieval, context construction, and LLM response generation.',
      'Developed Python-based AI services and <strong>REST APIs</strong> to integrate LLM capabilities with internal applications and structured enterprise data, including prompt templates and structured outputs.',
      'Evaluated responses for <strong>retrieval accuracy, hallucination rate, contextual relevance, latency, and consistency</strong>, and iterated on prompts and retrieval strategy from those results.'
    ]
  },
  {
    ts: 'T · 2022.02 → 2024.06',
    role: 'Data Engineer — First Citizens Bank',
    org: 'LTI Mindtree',
    location: 'United States',
    points: [
      'Built and maintained <strong>ETL/ELT pipelines</strong> for banking datasets using Python, SQL, PySpark, and Databricks across customer, account, transaction, and operational data.',
      'Implemented cleansing, transformation, reconciliation, and <strong>data-quality validation</strong> to catch missing records, duplicates, schema drift, and transaction-level discrepancies.',
      'Optimized SQL/Spark transformations for large banking datasets, supporting batch scheduling, incremental loads, dependency management, monitoring, and failure recovery.',
      'Partnered with engineering, analytics, and business teams to integrate data across banking systems while preserving <strong>lineage, auditability, and access controls</strong> on sensitive financial data.'
    ]
  },
  {
    ts: 'T · 2020 → 2022',
    role: 'Freelance Software & Automation Developer',
    org: 'Independent',
    location: 'Remote',
    points: [
      'Designed and built responsive <strong>business websites and web apps</strong> — backend services, databases, forms, and admin tooling — from client requirements.',
      'Integrated <strong>payment gateways and third-party APIs</strong>: payment workflows, transaction-status handling, webhooks, and customer notifications.',
      'Built automation for <strong>lead collection, form processing, customer communication, reporting, and marketing operations</strong>, cutting repetitive manual work.',
      'Set up analytics and tracking to measure <strong>traffic, visitor behavior, conversions, and campaign performance</strong>.'
    ]
  }
]

export const modules = [
  {
    id: 'MOD_01 // AGENTIC',
    title: 'Multi-Agent AI Travel Assistant',
    points: [
      'Agentic assistant managing the full travel workflow — requirements to itinerary to service coordination.',
      'Specialized agents for itinerary planning, destination research, flight search, hotel selection, car rentals, and scheduling.',
      'Agents compare dates, routes, prices, and combinations to generate multiple plans by budget and preference.',
      'External APIs and LLM tool-calling let agents coordinate, hold trip context, and pull live information.'
    ],
    stack: ['LangChain', 'Tool Calling', 'Multi-Agent', 'External APIs']
  },
  {
    id: 'MOD_02 // RAG',
    title: 'LTU AI Student Support Chatbot',
    points: [
      'RAG assistant for Lawrence Technological University, built for current university use.',
      'Retrieval pipeline over university knowledge sources for academics, services, procedures, and student concerns.',
      'Document ingestion, chunking, embeddings, vector search, and prompt engineering to reduce hallucinations.'
    ],
    stack: ['RAG', 'Vector Search', 'Prompt Engineering']
  },
  {
    id: 'MOD_03 // ENTERPRISE',
    title: 'Enterprise Knowledge Assistant',
    points: [
      'RAG assistant for natural-language queries over internal documents and knowledge repositories.',
      'Semantic chunking, embeddings, similarity search, context retrieval, and response generation via Python + LangChain.',
      'Source-aware responses, prompt guardrails, and retrieval filtering for grounded, reliable answers.',
      'Exposed through FastAPI endpoints and containerized with Docker.'
    ],
    stack: ['LangChain', 'FastAPI', 'Docker', 'Guardrails']
  }
]

export const education = [
  { deg: 'M.S. Computer Science', inst: 'Lawrence Technological University', loc: 'MICHIGAN, UNITED STATES' },
  { deg: 'B.Tech', inst: 'Sreenidhi Institute of Science and Technology', loc: 'INDIA' }
]

export const contact = {
  phone: '(646) 875-2400',
  phoneHref: 'tel:+16468752400',
  email: '[email protected]',
  linkedin: 'linkedin.com/in/your-handle',
  github: 'github.com/your-handle'
}
