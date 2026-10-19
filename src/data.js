export const profile = {
  name: 'Srii Akhillessh Gaddam',
  short: 'Akhil',
  headline: 'Data Engineer · ETL Pipeline Developer · GCP & AWS',
  location: 'Detroit, MI — Open to Relocation / Remote',
  authorization: 'OPT through 2029',
  summary:
    'Data Engineer with 4+ years designing, building, and scaling production batch and streaming ETL/ELT pipelines on GCP and AWS using Python, SQL, Apache Spark, Databricks, Kafka, BigQuery, Snowflake, and Airflow. Experienced in lakehouse design with Delta Lake, Databricks Workflows, and Unity Catalog, plus data modeling, CDC, and incremental processing.'
}

export const contact = {
  phone: '+1 (646) 875-2400',
  phoneHref: 'tel:+16468752400',
  email: 'sriiakhillesshg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/srii-akhiilessh-gaddam/',
  github: 'https://github.com/sriiakhillesshg'
}

// Hero carousel — the "featured" billboard slides
export const featured = [
  {
    kicker: 'NOW STREAMING',
    title: 'The Data Engineer',
    meta: ['2022 – Present', '4+ Years', 'GCP · AWS'],
    blurb:
      'Batch and streaming pipelines, lakehouses, and the SQL that keeps them honest. Cut a daily ETL run from 2 hours to 30 minutes through Spark optimization.',
    art: ['#0b3d91', '#1fb6ff', '#081b3a'],
    glyph: 'ETL',
    open: 'exp-0'
  },
  {
    kicker: 'ORIGINAL SERIES',
    title: 'Client Analytics on GCP',
    meta: ['OneMagnify', 'May 2025 – Present', 'BigQuery'],
    blurb:
      '15–20 SQL-first pipelines delivering ~40 GB of curated data a day to three client analytics teams. Pipeline success rate raised from 96% to 99%.',
    art: ['#5b1a8c', '#d65bff', '#1e0833'],
    glyph: 'GCP',
    open: 'exp-0'
  },
  {
    kicker: 'AWARD WINNER',
    title: 'rACTor: Self-Drive',
    meta: ['1st Place', 'IGVC 2026', 'ROS2'],
    blurb:
      'Fused LiDAR and camera streams on an autonomous vehicle and streamed sensor data to the cloud to train YOLO models. The team took first place with a perfect score.',
    art: ['#8a1c1c', '#ff8a3d', '#2a0a06'],
    glyph: '1ST',
    open: 'proj-1'
  },
  {
    kicker: 'BASED ON TRUE EVENTS',
    title: 'The Lakehouse',
    meta: ['LTIMindtree', '2022 – 2024', 'Databricks'],
    blurb:
      'A Databricks lakehouse on Delta Lake with Unity Catalog governance, Kafka CDC, and ~80 GB of data processed daily for client reporting.',
    art: ['#0d5c4a', '#2fe0a8', '#04201a'],
    glyph: 'Δ',
    open: 'exp-1'
  }
]

// "Studio" tiles — skill domains
export const studios = [
  {
    id: 'cloud',
    name: 'Cloud',
    sub: 'GCP · AWS · Snowflake',
    art: ['#0063e5', '#0a1f4d'],
    tags: ['GCP', 'BigQuery', 'Cloud Composer', 'Dataflow', 'Cloud Run', 'AWS', 'S3', 'Redshift', 'Lambda', 'CloudWatch', 'Snowflake', 'SQL Server']
  },
  {
    id: 'spark',
    name: 'Big Data',
    sub: 'Spark · Databricks · Kafka',
    art: ['#e8452c', '#3d0f08'],
    tags: ['Apache Spark', 'PySpark', 'Spark SQL', 'Databricks', 'Delta Lake', 'Unity Catalog', 'Databricks Workflows', 'Apache Kafka', 'Spark Streaming', 'Google Cloud Dataflow', 'Event-Driven Processing']
  },
  {
    id: 'eng',
    name: 'Data Eng',
    sub: 'ETL · Modeling · CDC',
    art: ['#f5b800', '#3d2e00'],
    tags: ['ETL/ELT', 'Batch & Streaming', 'CDC', 'Incremental Loads', 'Dimensional Modeling', 'Data Architecture', 'Data Warehousing', 'Lakehouse Architecture', 'Partitioning & Clustering', 'Query Optimization', 'Performance Tuning', 'Source-to-Target Reconciliation']
  },
  {
    id: 'ops',
    name: 'DataOps',
    sub: 'Airflow · Terraform · CI/CD',
    art: ['#18a058', '#062b17'],
    tags: ['Apache Airflow', 'Cloud Composer', 'Dataform', 'Terraform', 'GitHub Actions', 'CI/CD', 'Git', 'Code Reviews', 'Data Lineage', 'RBAC', 'Data Quality Monitoring', 'Alerting', 'Root Cause Analysis', 'Agile/Scrum']
  },
  {
    id: 'ai',
    name: 'AI & Code',
    sub: 'Python · RAG · FastAPI',
    art: ['#8e44ff', '#1d0b3d'],
    tags: ['Python', 'SQL', 'pandas', 'RAG Pipelines', 'Semantic Search', 'ChromaDB', 'Embeddings', 'FastAPI', 'REST APIs', 'Dashboards', 'ML Data Pipelines']
  }
]

export const experience = [
  {
    id: 'exp-0',
    role: 'Data Engineer (Contract)',
    org: 'OneMagnify',
    focus: 'GCP Data Engineering, Client Analytics',
    dates: 'May 2025 – Present',
    location: 'United States',
    progress: 0.55,
    art: ['#5b1a8c', '#d65bff'],
    glyph: 'OM',
    stack: ['BigQuery', 'Dataform', 'Cloud Composer', 'Airflow', 'Dataflow', 'Cloud Run', 'Python', 'GitHub Actions'],
    stats: [['15–20', 'pipelines'], ['~40 GB', 'per day'], ['96→99%', 'success rate']],
    points: [
      'Designed, built, and maintained <b>15–20 SQL-first batch pipelines on GCP</b> using BigQuery, Dataform, Cloud Composer/Airflow, and Dataflow, delivering ~40 GB of curated data daily to 3 client analytics teams.',
      '<b>Automated end-to-end client data delivery</b>, from ingestion and validation through BigQuery and dashboards, reducing manual effort and accelerating report availability.',
      'Modeled <b>dimensional, analytics-ready datasets</b> in BigQuery and Dataform with reusable, version-controlled transformation layers, giving BI, analytics, and ML teams one source of truth.',
      'Optimized complex BigQuery SQL using <b>partition pruning and clustering</b>, cutting query runtime by 25% and bytes scanned by 30%.',
      'Orchestrated dependencies, scheduling, retries, and failure alerts in <b>Cloud Composer (Airflow) DAGs</b>, keeping daily client deliveries on schedule.',
      'Built <b>3 API integrations</b> as Python services on Cloud Run plus Dataflow ingestion jobs, consolidating third-party data into one trusted BigQuery environment.',
      'Owned automated data validation and cleansing pipelines, tracing failures to root cause and raising success rates from <b>96% to 99%</b> over three months.',
      'Partnered with data scientists to build GCP data integrations that <b>feed AI/ML models</b>, moving models from experimentation into production.',
      'Translated stakeholder requirements into <b>8 documented, curated datasets and 3 dashboards</b>.',
      'Shipped through Git, pull requests, code reviews, and GitHub Actions CI/CD; turned recurring ad-hoc requests into <b>4 reusable data assets</b>, saving ~5 team hours weekly.'
    ]
  },
  {
    id: 'exp-1',
    role: 'Data Engineer',
    org: 'LTIMindtree',
    focus: 'AWS & Databricks Data Engineering',
    dates: 'Aug 2022 – Jul 2024',
    location: 'India',
    progress: 1,
    art: ['#0d5c4a', '#2fe0a8'],
    glyph: 'LTI',
    stack: ['PySpark', 'Databricks', 'Delta Lake', 'Unity Catalog', 'Kafka', 'S3', 'Redshift', 'Snowflake', 'Terraform', 'CloudWatch'],
    stats: [['75%', 'faster ETL'], ['~80 GB', 'per day'], ['15', 'pipelines']],
    points: [
      'Built and maintained <b>12 batch and 3 streaming ETL/ELT pipelines on AWS</b> with Python, SQL, PySpark, Spark SQL, Databricks, Kafka, S3, Redshift, and Lambda, processing ~80 GB daily.',
      'Reduced daily ETL runtime by <b>75% (2 hours → 30 minutes)</b> through incremental processing and optimized Spark joins and partitioning.',
      'Designed a scalable <b>Databricks lakehouse on Delta Lake</b>, orchestrated with Databricks Workflows and governed with Unity Catalog.',
      'Implemented <b>change data capture (CDC)</b> from Kafka event streams into Delta Lake tables for near-real-time reporting.',
      'Loaded curated datasets into <b>Amazon Redshift and Snowflake</b>, giving enterprise reporting teams query-ready data.',
      'Provisioned infrastructure with <b>Terraform</b>, cutting environment setup from 2 business days to 4 hours.',
      'Implemented <b>CloudWatch monitoring, alerting, and data-quality checks</b>, reducing average incident resolution from 90 to 60 minutes.',
      'Built <b>GitHub Actions CI/CD</b> for 5 data applications, cutting deployment time from 45 to 15 minutes.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Data Miner Intern',
    org: 'ADP',
    focus: 'ETL & Data Migration',
    dates: 'Jan 2022 – Jul 2022',
    location: 'Hyderabad, India',
    progress: 1,
    art: ['#b3121f', '#ff5a5f'],
    glyph: 'ADP',
    stack: ['SQL Server', 'Python', 'pandas', 'ADP Lyric HCM'],
    stats: [['~80K', 'records'], ['4', 'clients'], ['100%', 'reconciled']],
    points: [
      'Built <b>SQL Server and Python (pandas) ETL workflows</b> to migrate ~80K employee records across 4 clients into ADP Lyric HCM.',
      'Transformed SQL Server staging tables into Lyric import files, using pandas to split and merge source datasets to the target format.',
      "Mapped employee, position, and work-agreement records to Lyric's <b>position-management data model</b>, including multi-agreement employees.",
      'Developed <b>data-quality and validation checks</b> (special-character cleanup, source-to-target reconciliation) for accurate payroll loads.'
    ]
  }
]

export const projects = [
  {
    id: 'proj-0',
    title: 'LTU Sky Chatbot',
    sub: 'Hybrid RAG Data Pipeline',
    org: 'Lawrence Technological University',
    badge: 'ORIGINAL',
    art: ['#1f3fbf', '#7fd3ff'],
    glyph: 'RAG',
    stack: ['Playwright', 'ChromaDB', 'BM25', 'FastAPI', 'Next.js', 'Ollama'],
    stats: [['530', 'Q&A pairs'], ['2', 'retrievers'], ['RRF', 'fusion']],
    points: [
      'Built a <b>data ingestion pipeline</b> that scrapes LTU faculty and admissions web data with Playwright and indexes it in a <b>ChromaDB</b> vector store and a <b>BM25</b> keyword index.',
      'Implemented <b>hybrid retrieval</b> combining BM25 and semantic search with Reciprocal Rank Fusion, beating either approach alone.',
      'Served through a <b>FastAPI</b> backend and Next.js frontend with local LLMs (Ollama phi3/mistral), keeping university data on-premises; built <b>530 Q&A pairs</b> for evaluation.'
    ]
  },
  {
    id: 'proj-1',
    title: 'rACTor',
    sub: 'Autonomous Vehicle · ROS2',
    org: '1st Place, IGVC 2026 (Self-Drive)',
    badge: '1ST PLACE',
    art: ['#8a1c1c', '#ff8a3d'],
    glyph: 'AV',
    stack: ['ROS2', 'Python', 'YOLO', 'LiDAR VLP-16', 'Nav2', 'RViz', 'Raspberry Pi 5'],
    stats: [['1st', 'IGVC 2026'], ['100%', 'perfect score'], ['1000s', 'simulations']],
    points: [
      'Built a <b>ROS2 Python package</b> fusing time-synchronized LiDAR and camera streams (YOLO detection + VLP-16 point-cloud filtering) across a split Raspberry Pi 5 and laptop setup.',
      'Built a <b>real-time data pipeline</b> from the vehicle to the cloud, streaming sensor data to build training datasets for YOLO path and obstacle detection.',
      'Tuned obstacle avoidance and path tracking with <b>Nav2 and RViz</b> over thousands of simulations; team won <b>1st place at IGVC 2026</b> with a perfect score.'
    ]
  }
]

export const highlights = [
  { value: '75%', label: 'Faster daily ETL', note: '2 hrs → 30 min · LTIMindtree', art: ['#0063e5', '#00b4ff'] },
  { value: '99%', label: 'Pipeline success', note: 'up from 96% · OneMagnify', art: ['#18a058', '#7be0a8'] },
  { value: '~120 GB', label: 'Curated data / day', note: 'across GCP and AWS roles', art: ['#8e44ff', '#d0a2ff'] },
  { value: '30%', label: 'Fewer bytes scanned', note: 'BigQuery partition pruning', art: ['#f5b800', '#ffe27a'] },
  { value: '4 hrs', label: 'Env setup', note: 'down from 2 days · Terraform', art: ['#e8452c', '#ff9a7a'] },
  { value: '15 min', label: 'Deploy time', note: 'down from 45 · GitHub Actions', art: ['#0d5c4a', '#2fe0a8'] }
]

export const education = [
  { deg: 'Master of Science, Computer Science', inst: 'Lawrence Technological University', loc: 'Southfield, MI', dates: '2024 – 2026', gpa: '3.6', art: ['#0b3d91', '#4f8bff'], glyph: 'M.S.' },
  { deg: 'B.Tech, Computer Science & Engineering', inst: 'Sreenidhi Institute of Science and Technology', loc: 'Telangana, India', dates: '2018 – 2022', gpa: '3.5', art: ['#5b1a8c', '#b46bff'], glyph: 'B.Tech' }
]

export const certifications = [
  { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks', art: ['#e8452c', '#ff9a7a'], glyph: 'DBX' },
  { name: 'AWS Certified Data Engineer – Associate', issuer: 'Amazon Web Services', art: ['#f59e0b', '#232f3e'], glyph: 'AWS' }
]
