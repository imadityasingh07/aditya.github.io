import React from 'react';
import { ExternalLink, Github, Database, Server, Globe, Calculator, Cloud, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Features admin dashboard for inventory management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "JWT"],
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment gateway integration",
        "Admin dashboard",
        "Order tracking system"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      githubLink: "#",
      category: "Full Stack",
      color: "from-blue-500 to-blue-600",
      type: "mern"
    },
    {
      title: "Social Media Dashboard",
      description: "Modern social media management platform with real-time messaging, post scheduling, analytics, and user engagement tracking.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Chart.js"],
      features: [
        "Real-time messaging system",
        "Post creation & scheduling",
        "Analytics dashboard",
        "User profile management",
        "Friend/Follow system",
        "Notification system"
      ],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      githubLink: "#",
      category: "Full Stack",
      color: "from-purple-500 to-purple-600",
      type: "mern"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with team workspaces, task assignment, progress tracking, and deadline management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Material-UI"],
      features: [
        "Team collaboration tools",
        "Task assignment & tracking",
        "Project timeline management",
        "File sharing system",
        "Progress reporting",
        "Email notifications"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      githubLink: "#",
      category: "Full Stack",
      color: "from-green-500 to-green-600",
      type: "mern"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editor, comment system, user profiles, and content management features.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Quill.js", "Cloudinary"],
      features: [
        "Rich text editor",
        "Comment & like system",
        "User authentication",
        "Image upload & optimization",
        "SEO optimization",
        "Content categorization"
      ],
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      githubLink: "#",
      category: "Full Stack",
      color: "from-orange-500 to-orange-600",
      type: "mern"
    },
    {
      title: "Advanced Calculator",
      description: "Feature-rich calculator application with scientific functions, history tracking, and multiple calculation modes including basic, scientific, and programmer modes.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      features: [
        "Basic arithmetic operations",
        "Scientific calculations",
        "Programmer mode (Binary/Hex)",
        "Calculation history",
        "Memory functions",
        "Keyboard shortcuts"
      ],
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "/calculator",
      githubLink: "#",
      category: "Utility App",
      color: "from-cyan-500 to-cyan-600",
      type: "utility"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with current conditions, 7-day forecast, weather maps, and location-based weather alerts.",
      technologies: ["React", "Weather API", "Geolocation", "Chart.js"],
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Hourly weather updates",
        "Location-based weather",
        "Weather maps & radar",
        "Severe weather alerts"
      ],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "/weather",
      githubLink: "#",
      category: "Utility App",
      color: "from-sky-500 to-sky-600",
      type: "utility"
    },
    {
      title: "Love Calculator",
      description: "Fun interactive love compatibility calculator that analyzes names and provides compatibility scores with detailed relationship insights.",
      technologies: ["React", "JavaScript", "CSS Animations", "Local Storage"],
      features: [
        "Name compatibility analysis",
        "Love percentage calculation",
        "Relationship insights",
        "Animated results",
        "Share results feature",
        "History of calculations"
      ],
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "/love-calculator",
      githubLink: "#",
      category: "Fun App",
      color: "from-pink-500 to-pink-600",
      type: "utility"
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const categories = ["All", "Full Stack", "Utility App", "Fun App"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const techIcons = {
    "MongoDB": <Database className="w-5 h-5" />,
    "Express.js": <Server className="w-5 h-5" />,
    "React": <Globe className="w-5 h-5" />,
    "Node.js": <Server className="w-5 h-5" />,
    "JavaScript": <Calculator className="w-5 h-5" />,
    "Weather API": <Cloud className="w-5 h-5" />
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing full-stack MERN applications and interactive utility tools with modern features
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:-translate-y-0.5 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}>
                  {project.category}
                </div>
                {project.type === "utility" && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    {project.title.includes("Calculator") && <Calculator className="w-5 h-5 text-cyan-600" />}
                    {project.title.includes("Weather") && <Cloud className="w-5 h-5 text-sky-600" />}
                    {project.title.includes("Love") && <Heart className="w-5 h-5 text-pink-600" />}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {techIcons[tech] && <span className="mr-1">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink}
                    className={`flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Portfolio Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.filter(p => p.type === 'mern').length}</div>
              <div className="text-gray-600">MERN Stack Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{projects.filter(p => p.type === 'utility').length}</div>
              <div className="text-gray-600">Utility Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
          </div>
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MERN Stack Expertise</h3>
            <p className="text-lg mb-6 opacity-90">
              Specialized in building modern, scalable web applications using the complete MERN technology stack
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Database className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">MongoDB</h4>
                <p className="text-sm opacity-80">NoSQL Database</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Server className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">Express.js</h4>
                <p className="text-sm opacity-80">Backend Framework</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">React</h4>
                <p className="text-sm opacity-80">Frontend Library</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Server className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">Node.js</h4>
                <p className="text-sm opacity-80">Runtime Environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;