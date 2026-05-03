export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-50">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          </div>

          <p className="text-slate-300 leading-relaxed text-lg">
            I'm a full-stack engineer with <span className="text-blue-300 font-semibold">5+ years</span> of experience building secure, scalable applications. 
            With a background in science and continuous education in <span className="text-blue-300 font-semibold">compliance</span> and <span className="text-blue-300 font-semibold">system security</span>, 
            I design solutions that prioritize data integrity, user privacy, and regulatory adherence. 
            I excel at translating complex requirements into robust, maintainable systems.
          </p>

          <p className="text-slate-400 leading-relaxed text-base">
            My passion lies in creating technology that not only works seamlessly but also protects and empowers users. 
            I believe in clean code, thoughtful architecture, and continuous learning.
          </p>
        </div>

        {/* Stats/Highlights */}
        <div className="space-y-4 animate-slide-in-right">
          {[
            { icon: "🛡️", title: "Security-First", desc: "5+ years full-stack development" },
            { icon: "🏗️", title: "Scalable Systems", desc: "Architecture & compliance-focused design" },
            { icon: "☁️", title: "SaaS Expert", desc: "Scalable system design & optimization" },
            { icon: "👥", title: "Team Leader", desc: "Team leadership & mentorship" },
            { icon: "🔍", title: "Problem Solver", desc: "Complex technical challenges" },
            { icon: "📈", title: "Growth Minded", desc: "Continuous learning & innovation" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:translate-y-[-4px] cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}