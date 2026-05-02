import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 rounded-xl transition duration-300 hover:bg-slate-900">
      <h3 className="text-xl font-semibold mb-3 text-slate-50 group-hover:text-blue-400 transition">
        {project.title}
      </h3>

      <p className="text-slate-400 mb-4 text-sm">{project.description}</p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700 hover:border-blue-500/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 text-sm pt-4 border-t border-slate-800">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition font-medium"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition font-medium"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}