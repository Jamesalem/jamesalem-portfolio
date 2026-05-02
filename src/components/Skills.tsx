'use client';

import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-slate-50">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-400">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-blue-400/50 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
