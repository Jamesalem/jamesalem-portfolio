export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-50">About Me</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a full-stack engineer with 5+ years of experience building secure, scalable applications. 
            With a background in science and continuous education in compliance and system security, 
            I design solutions that prioritize data integrity, user privacy, and regulatory adherence. 
            I excel at translating complex requirements into robust, maintainable systems.
          </p>
        </div>

        <div className="space-y-4 text-slate-300">
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">✓</span>
            <span>5+ years full-stack development</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">✓</span>
            <span>Security & compliance-focused architecture</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">✓</span>
            <span>SaaS & scalable system design</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">✓</span>
            <span>Team leadership & mentorship</span>
          </div>
        </div>
      </div>
    </section>
  );
}