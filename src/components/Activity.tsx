'use client';

export default function Activity() {
  return (
    <section id="activity" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-4">Life Dashboard</h2>
        <p className="text-center text-[#9ca3af] mb-16 max-w-2xl mx-auto">
          A glimpse into my fitness journey and music taste - because data scientists track everything!
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strava Card */}
          <div className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FC4C02]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FC4C02]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Strava</h3>
                <p className="text-sm text-[#9ca3af]">No Rest Days!</p>
              </div>
              <a
                href="https://www.strava.com/athletes/132167942"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 rounded-lg bg-[#FC4C02] text-white text-sm font-medium hover:bg-[#e04400] transition-colors"
              >
                Follow
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[#0a0a0f] text-center">
                <div className="text-2xl font-bold text-[#FC4C02]">7</div>
                <div className="text-xs text-[#9ca3af]">Days/Week</div>
              </div>
              <div className="p-4 rounded-lg bg-[#0a0a0f] text-center">
                <div className="text-2xl font-bold text-[#FC4C02]">25+</div>
                <div className="text-xs text-[#9ca3af]">States Hiked</div>
              </div>
              <div className="p-4 rounded-lg bg-[#0a0a0f] text-center">
                <div className="text-2xl font-bold text-[#FC4C02]">7</div>
                <div className="text-xs text-[#9ca3af]">EU Countries</div>
              </div>
            </div>

            {/* Activity Types */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0f]">
                <div className="w-10 h-10 rounded-full bg-[#FC4C02]/20 flex items-center justify-center">
                  <span className="text-lg">🏋️</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Gym Training</div>
                  <div className="text-xs text-[#9ca3af]">Strength & conditioning</div>
                </div>
                <div className="text-xs text-[#FC4C02]">Daily</div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0f]">
                <div className="w-10 h-10 rounded-full bg-[#FC4C02]/20 flex items-center justify-center">
                  <span className="text-lg">🧘</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Yoga</div>
                  <div className="text-xs text-[#9ca3af]">Flexibility & mindfulness</div>
                </div>
                <div className="text-xs text-[#FC4C02]">Regular</div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0f]">
                <div className="w-10 h-10 rounded-full bg-[#FC4C02]/20 flex items-center justify-center">
                  <span className="text-lg">🥾</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Hiking</div>
                  <div className="text-xs text-[#9ca3af]">Nature exploration</div>
                </div>
                <div className="text-xs text-[#FC4C02]">Weekends</div>
              </div>
            </div>

            {/* Challenge CTA */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#FC4C02]/10 to-[#FC4C02]/5 border border-[#FC4C02]/20">
              <p className="text-sm text-center">
                <span className="text-[#FC4C02] font-medium">Challenge me!</span>
                <span className="text-[#9ca3af]"> Connect on Apple Fitness for friendly competition</span>
              </p>
            </div>
          </div>

          {/* Spotify Card */}
          <div className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1DB954]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Spotify</h3>
                <p className="text-sm text-[#9ca3af]">Eclectic taste across genres</p>
              </div>
              <a
                href="https://open.spotify.com/user/1ih9dpfd3x6kpbhm413bv9g20"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 rounded-lg bg-[#1DB954] text-white text-sm font-medium hover:bg-[#1ed760] transition-colors"
              >
                Follow
              </a>
            </div>

            {/* Featured Artist */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#1DB954]/10 to-transparent border border-[#1DB954]/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#f59e0b] flex items-center justify-center text-2xl font-bold">
                  AR
                </div>
                <div>
                  <div className="text-xs text-[#1DB954] uppercase tracking-wider mb-1">Favorite Artist</div>
                  <div className="text-lg font-bold">AR Rahman</div>
                  <div className="text-sm text-[#9ca3af]">The Mozart of Madras</div>
                </div>
              </div>
            </div>

            {/* Genre Tags */}
            <div className="mb-6">
              <div className="text-sm text-[#9ca3af] mb-3">Genres I love</div>
              <div className="flex flex-wrap gap-2">
                {['Indian Classical', 'Electronic', 'Hip-Hop', 'Rock', 'Tamil', 'Bollywood', 'Pop', 'Indie'].map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Music Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[#0a0a0f]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎧</span>
                  <span className="text-xs text-[#9ca3af]">Listening Style</span>
                </div>
                <div className="text-sm font-medium">Deep Focus & Workout</div>
              </div>
              <div className="p-4 rounded-lg bg-[#0a0a0f]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-xs text-[#9ca3af]">Music From</span>
                </div>
                <div className="text-sm font-medium">Across eras & borders</div>
              </div>
            </div>

            {/* Spotify CTA */}
            <a
              href="https://open.spotify.com/user/1ih9dpfd3x6kpbhm413bv9g20"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-gradient-to-r from-[#1DB954]/10 to-[#1DB954]/5 border border-[#1DB954]/20 hover:border-[#1DB954]/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Check out my playlists</div>
                    <div className="text-xs text-[#9ca3af]">Follow for workout & focus music</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#1DB954] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Additional Platforms Row */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* YouTube Card */}
          <a
            href="https://www.youtube.com/channel/UCo7fv3jXqQGLbIDc3CbzSXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF0000]/20 flex items-center justify-center group-hover:bg-[#FF0000]/30 transition-colors">
                <svg className="w-6 h-6 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold group-hover:text-[#FF0000] transition-colors">YouTube</div>
                <div className="text-sm text-[#9ca3af]">Tech content & tutorials</div>
              </div>
              <svg className="w-5 h-5 ml-auto text-[#9ca3af] group-hover:text-[#FF0000] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Medium Card */}
          <a
            href="https://medium.com/@mailmeversus"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold group-hover:text-white transition-colors">Medium</div>
                <div className="text-sm text-[#9ca3af]">Data science articles</div>
              </div>
              <svg className="w-5 h-5 ml-auto text-[#9ca3af] group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/venkata-srinivasan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#6e5494]/20 flex items-center justify-center group-hover:bg-[#6e5494]/30 transition-colors">
                <svg className="w-6 h-6 text-[#6e5494]" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold group-hover:text-[#6e5494] transition-colors">GitHub</div>
                <div className="text-sm text-[#9ca3af]">Open source projects</div>
              </div>
              <svg className="w-5 h-5 ml-auto text-[#9ca3af] group-hover:text-[#6e5494] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Kaggle Card */}
          <a
            href="https://www.kaggle.com/mailmeverus"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#12121a] border border-[#1e1e2e] card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#20BEFF]/20 flex items-center justify-center group-hover:bg-[#20BEFF]/30 transition-colors">
                <svg className="w-6 h-6 text-[#20BEFF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.339"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold group-hover:text-[#20BEFF] transition-colors">Kaggle</div>
                <div className="text-sm text-[#9ca3af]">Competitions & notebooks</div>
              </div>
              <svg className="w-5 h-5 ml-auto text-[#9ca3af] group-hover:text-[#20BEFF] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
