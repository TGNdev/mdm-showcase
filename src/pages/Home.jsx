import { use } from "react";
import { getProjects } from "../js/firebase";

const projectsPromise = getProjects();

const Home = () => {
  const projects = use(projectsPromise);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-gray-400">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">
                {project.name || project.title || "Untitled Project"}
              </h2>
              {project.description && (
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;