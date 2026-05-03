'use client';

import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-300 rounded-full text-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
