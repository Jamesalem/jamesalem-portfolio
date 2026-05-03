export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto space-y-12 animate-fade-in-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto">
          I'm open to discussing interesting projects, opportunities in scalable systems development, 
          and innovative solutions. Whether you have a question or want to work together, feel free to reach out.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="mailto:jamesalemgroup@gmail.com"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>

          <a
            href="https://github.com/Jamesalem"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 relative"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/iyanuoluwa-akeju"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 relative"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.746 0-9.637h3.554v1.36c.425-.654 1.187-1.586 2.882-1.586 2.105 0 3.681 1.376 3.681 4.338v5.525zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.915-1.71 1.144 0 1.915.755 1.915 1.71 0 .951-.771 1.71-1.915 1.71zm1.586 11.597H3.751V9.67h3.172v10.782zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Social Links Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700/50">
          <div className="text-center space-y-2 group cursor-default">
            <p className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">5+</p>
            <p className="text-slate-400 text-sm">Years Experience</p>
          </div>
          <div className="text-center space-y-2 group cursor-default">
            <p className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">50+</p>
            <p className="text-slate-400 text-sm">Projects Completed</p>
          </div>
          <div className="text-center space-y-2 group cursor-default">
            <p className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">24/7</p>
            <p className="text-slate-400 text-sm">Support Available</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-slate-700/50">
          <p className="text-slate-500 text-sm">
            © 2026 Iyanuoluwa Akeju. All rights reserved. | Design & Development
          </p>
        </div>
      </div>
    </section>
  );
}