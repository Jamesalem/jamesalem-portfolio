import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Showcase of production-grade applications with emphasis on scalability, security, and user experience.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}