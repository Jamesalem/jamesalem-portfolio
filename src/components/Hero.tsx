export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-20">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Iyanuoluwa Akeju
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300">
          Full-Stack Engineer | Scalable Systems | Security-First Design
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
          I architect and build production-grade applications with emphasis on scalability, security, and compliance. 
          Experienced in designing systems that prioritize data integrity and user trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 font-medium rounded-lg transition transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 font-medium rounded-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}