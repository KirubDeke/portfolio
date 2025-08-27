import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  siteUrl: string;
  codeUrl: string;
  technologies: string[];
  techColors: string[];
}

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Blog Site called Curious Life",
      description: "A blog site with commenting and like system.",
      image: "/images/blog.png",
      siteUrl: "https://curious-life.vercel.app/",
      codeUrl: "https://github.com/KirubDeke/curious-life",
      technologies: ["Next.js", "Node.js"],
      techColors: ["bg-blue-600", "bg-purple-600"],
    },
    {
      id: 2,
      title: "Car Rental Web-app",
      description:
        "A Car Rental system with booking system, admin dashboard, and test payment integration.",
      image: "/images/car-rental.png",
      siteUrl: "https://kirub-rental.vercel.app/",
      codeUrl: "https://github.com/KirubDeke/car-rental",
      technologies: ["Next.js", "Node.js", "Chappa"],
      techColors: ["bg-green-600", "bg-red-600", "bg-blue-600"],
    },
    {
      id: 3,
      title: "Gahasu Coffee Processing",
      description:
        "Platform for a coffee washing and processing company showcasing their products and process.",
      image: "/images/gahasu-coffee.png",
      siteUrl: "https://gahasu.vercel.app/",
      codeUrl: "https://github.com/KirubDeke/gahasu-coffee",
      technologies: ["Next.js",],
      techColors: ["bg-yellow-600", "bg-indigo-600"],
    },
  ];

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8 bg-background dark:bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground dark:text-foreground mb-4">
            My Portfolio
          </h2>
          <div className="mx-auto mt-6 mb-6 h-1 w-20 bg-red-500 rounded-full"></div>
          <p className="text-lg text-foreground dark:text-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with
            attention to detail and a focus on user experience.
          </p>
          
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.techColors[index]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 flex justify-between">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-red-500 font-medium transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  View Site
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-red-500 font-medium transition-colors"
                >
                  <FaGithub className="text-base" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <CustomButton className="flex items-center gap-2">
            Explore All Projects <FaArrowRight />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
