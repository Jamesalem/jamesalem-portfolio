'use client';

import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-slate-50">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-lg transition group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-400 transition">
                {exp.title}
              </h3>
              <p className="text-sm text-slate-400">{exp.duration}</p>
            </div>
            <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
            <p className="text-slate-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
