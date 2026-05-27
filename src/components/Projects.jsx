import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaHeart, FaSpinner } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // FETCH PROJECTS
  const getProjects = async () => {
    try {
      setLoading(true);
      // Simulate minimum loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await API.get("/api/projects");
      setProjects(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16 md:mt-20">
      {[1, 2, 3, 4, 5, 6].map((item, idx) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white border-[3px] sm:border-[4px] border-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000]"
        >
          {/* Image Skeleton */}
          <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden border-b-[3px] sm:border-b-[4px] border-black bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent shimmer" />
            <div className="absolute top-3 left-3 bg-black/50 rounded-lg px-2 py-1">
              <div className="w-8 h-3 bg-gray-400/50 rounded" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="p-5 sm:p-6 space-y-4">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-11/12 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-10/12 animate-pulse" />
            </div>

            {/* Tech Stack Skeleton */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <div className="w-16 h-7 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-20 h-7 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-14 h-7 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-24 h-7 bg-gray-200 rounded-full animate-pulse" />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-3 sm:gap-4 pt-4">
              <div className="flex-1 h-11 bg-gray-200 rounded-xl animate-pulse" />
              <div className="flex-1 h-11 bg-gray-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-600 font-mono text-sm"
      >
        Loading projects...
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
      />
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden bg-white"
    >
      {/* ANIMATED BACKGROUND ORBS - LIGHTER FOR WHITE BACKGROUND */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-gray-200/50 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-gray-200/50 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gray-300/30 blur-3xl"
      />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-8 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_#000]"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [10, -5, 10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-8 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 border-[3px] border-black rounded-full shadow-[5px_5px_0px_#000]"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] right-[5%] w-10 h-10 bg-gray-200 border-[3px] border-black rotate-12 rounded-lg shadow-[3px_3px_0px_#000] hidden md:block"
      />

      {/* BACKGROUND WATERMARK - PROJECTS TEXT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-16 rotate-[-25deg] scale-150">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 select-none whitespace-nowrap"
              style={{
                opacity: 0.4,
                letterSpacing: "15px",
                transform: `translateY(${i % 2 === 0 ? "0" : "50px"})`,
              }}
            >
              PROJECTS
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gray-200 border-[3px] border-black rounded-full text-black font-black text-sm sm:text-base shadow-[4px_4px_0px_#000]"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            My Projects
          </motion.div>
          <h2 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of full-stack applications built with modern technologies
            and scalable backend systems.
          </p>
        </motion.div>

        {/* LOADING STATE */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingSpinner />
              <LoadingSkeleton />
            </motion.div>
          ) : (
            /* PROJECT GRID */
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {projects.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16 md:mt-20">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project._id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className="bg-white border-[3px] sm:border-[4px] border-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000] sm:shadow-[10px_10px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group"
                      >
                        {/* IMAGE SECTION */}
                        <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden border-b-[3px] sm:border-b-[4px] border-black">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/400x300?text=Project+Image";
                            }}
                          />
                          {/* OVERLAY GRADIENT */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* PROJECT NUMBER BADGE */}
                          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/30 rounded-lg px-2 py-1">
                            <span className="text-white font-mono text-[10px] font-bold">
                              {(index + 1).toString().padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 sm:p-6">
                          <h3 className="text-2xl sm:text-3xl font-black text-black">
                            {project.title}
                          </h3>
                          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            {project.description}
                          </p>

                          {/* TECH STACK */}
                          <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
                            {project.techStack.slice(0, 4).map((tech, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ y: -3, scale: 1.05 }}
                                className="px-2.5 sm:px-4 py-1 sm:py-2 bg-gray-100 border-[2px] sm:border-[3px] border-black rounded-full text-black font-black text-[10px] sm:text-xs shadow-[2px_2px_0px_#000]"
                              >
                                {tech}
                              </motion.div>
                            ))}
                            {project.techStack.length > 4 && (
                              <div className="px-2.5 sm:px-4 py-1 sm:py-2 bg-gray-200 border-[2px] border-black rounded-full text-black font-black text-[10px] sm:text-xs shadow-[2px_2px_0px_#000]">
                                +{project.techStack.length - 4}
                              </div>
                            )}
                          </div>

                          {/* BUTTONS */}
                          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 px-3 sm:px-5 py-2.5 sm:py-3 bg-white border-[2px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl text-black font-bold text-sm sm:text-base shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                              <FaGithub className="text-sm sm:text-base" />
                              <span className="hidden xs:inline">GitHub</span>
                            </motion.a>
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 px-3 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-gray-300 to-gray-400 border-[2px] sm:border-[3px] border-black rounded-xl sm:rounded-2xl text-black font-bold text-sm sm:text-base shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                              <FaExternalLinkAlt className="text-sm sm:text-base" />
                              <span className="hidden xs:inline">Live Demo</span>
                            </motion.a>
                          </div>

                          {/* HOVER INDICATOR */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                            className="mt-3 flex items-center justify-center gap-1 text-[9px] text-gray-400"
                          >
                            <FaHeart className="text-[8px]" />
                            <span>Hover to explore</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* VIEW MORE BUTTON */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                  >
                    <motion.a
                      href="#contact"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-[3px] border-black rounded-2xl text-black font-black text-sm sm:text-base shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                    >
                      Have a Project in Mind?
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </>
              ) : (
                /* EMPTY STATE */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="inline-block p-8 bg-gray-100 border-[4px] border-black rounded-3xl shadow-[10px_10px_0px_#000]">
                    <p className="text-xl font-black text-gray-600">No projects found</p>
                    <p className="mt-2 text-gray-500">Check back later for updates!</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add shimmer animation CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}

export default Projects;