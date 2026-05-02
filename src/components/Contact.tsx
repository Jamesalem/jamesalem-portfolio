export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-slate-50">Let's Collaborate</h2>

        <p className="text-slate-400 mb-8 text-lg">
          I'm open to discussing interesting projects, opportunities in scalable systems development, 
          and innovative solutions. Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:jamesalemgroup@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 font-medium rounded-lg transition transform hover:scale-105"
          >
            Send Email
          </a>
          <a
            href="https://github.com/Jamesalem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 font-medium rounded-lg transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/iyanuoluwa-akeju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 font-medium rounded-lg transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Iyanuoluwa Akeju. All rights reserved.
        </p>
      </div>
    </section>
  );
}