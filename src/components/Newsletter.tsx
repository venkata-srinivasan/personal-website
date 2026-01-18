'use client';

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-[#0a0a0f] to-[#22d3ee]/10"></div>

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#22d3ee]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[#1e1e2e] mb-6">
          <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="text-sm text-[#9ca3af]">Data Science Newsletter</span>
        </div>

        <h2 className="section-title mb-4">Stay Ahead in AI & Data Science</h2>

        <p className="text-lg text-[#9ca3af] mb-8 max-w-2xl mx-auto leading-relaxed">
          Get exclusive insights on machine learning, NLP, computer vision, and the latest trends
          in data science delivered to your inbox. Join a community of data professionals.
        </p>

        {/* What you'll get */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
          <div className="p-4 rounded-lg bg-[#12121a] border border-[#1e1e2e]">
            <div className="w-10 h-10 rounded-lg bg-[#6366f1]/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">AI Insights</h4>
            <p className="text-sm text-[#9ca3af]">Deep dives into cutting-edge AI techniques</p>
          </div>

          <div className="p-4 rounded-lg bg-[#12121a] border border-[#1e1e2e]">
            <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-[#22d3ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Code Examples</h4>
            <p className="text-sm text-[#9ca3af]">Practical implementations you can use</p>
          </div>

          <div className="p-4 rounded-lg bg-[#12121a] border border-[#1e1e2e]">
            <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Career Growth</h4>
            <p className="text-sm text-[#9ca3af]">Tips for advancing in data science</p>
          </div>
        </div>

        {/* Substack Embed */}
        <div className="max-w-lg mx-auto mb-6">
          <iframe
            src="https://mailmeversus.substack.com/embed"
            width="100%"
            height="150"
            style={{ border: 'none', background: 'transparent' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        {/* Alternative CTA */}
        <a
          href="https://mailmeversus.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 btn-primary text-lg px-8 py-4"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
          Subscribe on Substack
        </a>

        <p className="mt-4 text-sm text-[#9ca3af]">
          No spam. Unsubscribe anytime.
        </p>

        {/* Also read on Medium */}
        <div className="mt-8 pt-8 border-t border-[#1e1e2e]">
          <p className="text-sm text-[#9ca3af] mb-4">Also follow my writings on</p>
          <a
            href="https://medium.com/@mailmeversus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#12121a] border border-[#1e1e2e] hover:border-white/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span className="font-medium">Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
}
