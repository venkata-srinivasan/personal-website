'use client';

const projects = [
  {
    title: 'Sales Compliance AI',
    description: 'ML models ensuring regulatory adherence and reducing internal fraud for enterprise sales operations.',
    technologies: ['NLP', 'PyTorch', 'Python', 'MLOps'],
    category: 'Enterprise AI',
    gradient: 'from-[#6366f1] to-[#22d3ee]',
  },
  {
    title: 'Computer Vision Research',
    description: 'Advanced CV solutions developed during Georgia Tech research and graduate teaching assistance.',
    technologies: ['OpenCV', 'PyTorch', 'Deep Learning', 'CNN'],
    category: 'Research',
    gradient: 'from-[#22d3ee] to-[#6366f1]',
  },
  {
    title: 'Causal Inference Pipeline',
    description: 'Building causal models to understand and optimize business outcomes beyond correlation.',
    technologies: ['Causal ML', 'DoWhy', 'Python', 'Statistics'],
    category: 'Causality',
    gradient: 'from-[#f59e0b] to-[#6366f1]',
  },
  {
    title: 'NLP for Compliance',
    description: 'Natural language processing systems analyzing communication for compliance and best practices.',
    technologies: ['Transformers', 'BERT', 'spaCy', 'Hugging Face'],
    category: 'NLP',
    gradient: 'from-[#818cf8] to-[#f59e0b]',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0f] data-grid">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <p className="text-center text-[#9ca3af] mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing expertise in AI, ML, and data science
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Category badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                {project.category}
              </span>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#6366f1] transition-colors">
                {project.title}
              </h3>

              <p className="text-[#9ca3af] mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="flex items-center text-[#6366f1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/venkata-srinivasan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
