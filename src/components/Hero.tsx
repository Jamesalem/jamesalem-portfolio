export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto px-6 pt-20 pb-20 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: "1s" }} />

      <div className="space-y-8 text-center md:text-left md:max-w-3xl animate-fade-in-up">
        {/* Main Heading */}
        <div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Iyanuoluwa</span>
            <br />
            <span className="text-slate-50">Akeju</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
        </div>

        {/* Subheading */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
            Full-Stack Engineer | Systems Architect | Security Expert
          </h2>

          <p className="max-w-2xl text-slate-300 text-lg md:text-xl leading-relaxed">
            I architect and build production-grade applications with emphasis on <span className="text-blue-300 font-semibold">scalability</span>, <span className="text-blue-300 font-semibold">security</span>, and <span className="text-blue-300 font-semibold">compliance</span>. 
            Designing systems that prioritize data integrity and user trust.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 relative"
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:static md:transform-none pt-12 md:pt-4">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}