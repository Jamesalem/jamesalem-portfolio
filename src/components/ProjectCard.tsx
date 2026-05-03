import { Project } from '@/types';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">

      {/* IMAGE */}
      <div className="relative w-full h-56 overflow-hidden bg-slate-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-500 text-sm uppercase tracking-[0.18em]">
            No image available
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-400 text-base leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* PROBLEM & SOLUTION */}
        {project.problem && (
          <div className="pt-2 space-y-2 border-t border-slate-700/50">
            <div className="flex gap-2 items-start">
              <span className="text-blue-400 font-semibold text-sm mt-0.5">→</span>
              <p className="text-sm text-slate-400 line-clamp-1">{project.problem}</p>
            </div>
          </div>
        )}

        {/* TECH STACK */}
        <div className="pt-2 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 4 && (
              <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-xs">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* LINKS */}
        <div className="pt-4 flex gap-3 border-t border-slate-700/50 group-hover:border-blue-500/30 transition-colors">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm group/link"
          >
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
          <button className="ml-auto text-slate-400 hover:text-blue-400 transition-colors duration-300">
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}