'use client';

const experiences = [
  {
    title: 'Senior Data Scientist',
    company: 'Asurion LLC',
    location: 'Nashville, TN',
    period: 'Present',
    description: 'Leading the sales compliance data science team, developing and implementing models for regulatory adherence, fraud reduction, and compliance risk minimization.',
    technologies: ['NLP', 'Causal Modeling', 'Python', 'Machine Learning'],
    logo: '/logos/asurion.png',
  },
];

const education = [
  {
    degree: 'Master of Science in Electrical and Computer Engineering',
    school: 'Georgia Institute of Technology',
    specialization: 'Digital Signal Processing & Computer Vision',
    note: 'Graduate Teaching Assistant for Computer Vision and Machine Learning courses',
    logo: '/logos/gatech.png',
  },
  {
    degree: 'Bachelor of Technology (Honors) in Electronics and Communication Engineering',
    school: 'National Institute of Technology Tiruchirappalli',
    specialization: 'Electronics and Communication',
    note: '',
    logo: '/logos/nitt.png',
  },
];

const interests = [
  { icon: '🏋️', title: 'Fitness', description: 'Gym, yoga, and hiking enthusiast - no rest days!' },
  { icon: '🌍', title: 'Travel', description: 'Solo explored 7 European countries and 25 U.S. states' },
  { icon: '🎵', title: 'Music', description: 'AR Rahman admirer with eclectic Spotify tastes' },
  { icon: '🧠', title: 'Psychology', description: 'Fascinated by Huberman podcasts' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-4">About Me</h2>
        <p className="text-center text-[#9ca3af] mb-16 max-w-2xl mx-auto">
          A passionate AI practitioner who thrives on challenges and continuous learning.
        </p>

        {/* Experience Section */}
        <div id="experience" className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#22d3ee] flex items-center justify-center text-sm">
              💼
            </span>
            Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-[#6366f1]">{exp.company}</p>
                    <p className="text-sm text-[#9ca3af]">{exp.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#6366f1]/20 text-[#818cf8] text-sm font-medium self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#9ca3af] mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#6366f1] flex items-center justify-center text-sm">
              🎓
            </span>
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-[#6366f1] mb-1">{edu.school}</p>
                <p className="text-sm text-[#9ca3af] mb-3">Specialization: {edu.specialization}</p>
                {edu.note && (
                  <p className="text-sm text-[#22d3ee] italic">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#6366f1] flex items-center justify-center text-sm">
              ✨
            </span>
            Beyond Data Science
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover text-center"
              >
                <div className="text-3xl mb-3">{interest.icon}</div>
                <h4 className="font-semibold mb-2">{interest.title}</h4>
                <p className="text-sm text-[#9ca3af]">{interest.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#12121a] to-[#1a1a2e] border border-[#1e1e2e]">
            <p className="text-[#9ca3af] leading-relaxed">
              I love thinking outside the box and thrive on competition.
              My diverse interests have led me to excel at activities like dancing, skating, and skiing.
              In my social circles, I'm often relied upon for financial advice and trip planning.
              I admire <span className="text-[#f59e0b]">AR Rahman</span>, <span className="text-[#22d3ee]">Novak Djokovic</span>,
              and <span className="text-[#6366f1]">Lewis Hamilton</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
