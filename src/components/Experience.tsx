'use client';

import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Building scalable systems and leading teams through innovation and technical excellence.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-6 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-12 w-1 h-full bg-gradient-to-b from-blue-500/50 via-blue-500/25 to-transparent rounded-full" />

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="ml-0 md:ml-32 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-[-53px] top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-slate-950 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/75 transition-all duration-300" />

                {/* Experience Card */}
                <div className="glass p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <span className="inline-flex px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/30 w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-base group-hover:text-slate-200 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Hover Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
