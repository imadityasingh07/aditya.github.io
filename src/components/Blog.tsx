import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable MERN Applications: Best Practices and Architecture",
      excerpt: "Learn how to structure your MERN stack applications for scalability, maintainability, and performance. Covering folder structure, state management, and deployment strategies.",
      content: "In this comprehensive guide, we'll explore the essential practices for building robust MERN stack applications. From setting up a proper folder structure to implementing efficient state management with Redux, we'll cover everything you need to know to create production-ready applications.",
      author: "Aditya Kumar Singh",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "MERN Stack",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Architecture"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      title: "Authentication and Authorization in MERN Stack Applications",
      excerpt: "Implementing secure user authentication using JWT tokens, bcrypt for password hashing, and role-based access control in your MERN applications.",
      content: "Security is paramount in modern web applications. This article walks through implementing robust authentication and authorization systems using JSON Web Tokens, secure password hashing, and implementing role-based access control.",
      author: "Aditya Kumar Singh",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      tags: ["JWT", "Authentication", "Security", "Node.js"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "State Management in React: Redux vs Context API",
      excerpt: "A detailed comparison of Redux and Context API for state management in React applications, with practical examples and use cases.",
      content: "Choosing the right state management solution is crucial for React applications. We'll compare Redux and Context API, examining their strengths, weaknesses, and ideal use cases with practical examples.",
      author: "Aditya Kumar Singh",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "React",
      tags: ["React", "Redux", "Context API", "State Management"],
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Optimizing MongoDB Performance in Production",
      excerpt: "Essential techniques for optimizing MongoDB performance, including indexing strategies, query optimization, and database design patterns.",
      content: "MongoDB performance optimization is critical for production applications. Learn about indexing strategies, query optimization techniques, and database design patterns that will make your applications faster and more efficient.",
      author: "Aditya Kumar Singh",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Database",
      tags: ["MongoDB", "Performance", "Database", "Optimization"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Deploying MERN Applications to AWS: A Complete Guide",
      excerpt: "Step-by-step guide to deploying your MERN stack applications to AWS using EC2, S3, and MongoDB Atlas for a production-ready setup.",
      content: "Deployment is often the most challenging part of web development. This comprehensive guide covers deploying MERN applications to AWS, including setting up EC2 instances, configuring S3 for static assets, and connecting to MongoDB Atlas.",
      author: "Aditya Kumar Singh",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["AWS", "Deployment", "EC2", "S3", "MongoDB Atlas"],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      title: "Building Real-time Features with Socket.io in MERN Stack",
      excerpt: "Learn how to implement real-time features like chat systems, notifications, and live updates using Socket.io in your MERN applications.",
      content: "Real-time features are essential for modern web applications. This tutorial covers implementing WebSocket connections using Socket.io, building chat systems, and creating live notification systems in MERN stack applications.",
      author: "Aditya Kumar Singh",
      date: "2023-12-15",
      readTime: "10 min read",
      category: "Real-time",
      tags: ["Socket.io", "WebSockets", "Real-time", "Chat"],
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categories = ["All", "MERN Stack", "React", "Security", "Database", "DevOps", "Real-time"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in MERN stack development and modern web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4 text-blue-100">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-sm text-gray-500">{post.tags.length} tags</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Statistics</h3>
            <p className="text-gray-600">Sharing knowledge and insights with the developer community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{blogPosts.length}</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {Array.from(new Set(blogPosts.flatMap(post => post.tags))).length}
              </div>
              <div className="text-gray-600">Unique Tags</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {Math.round(blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / blogPosts.length)}
              </div>
              <div className="text-gray-600">Avg. Read Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;