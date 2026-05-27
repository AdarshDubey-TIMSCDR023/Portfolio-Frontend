import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaEye, FaCalendarAlt, FaMedal, FaCheckCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import API from "../services/api";

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // FETCH CERTIFICATES
  const getCertificates = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await API.get("/api/certificates");
      setCertificates(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCertificates();
  }, []);

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {[1, 2, 3, 4, 5, 6].map((item, idx) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white border-2 border-black rounded-none overflow-hidden shadow-[6px_6px_0px_#000]"
        >
          <div className="relative h-44 overflow-hidden border-b-2 border-black bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
          </div>
          <div className="p-4 space-y-3">
            <div className="h-6 bg-gray-200 w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-200 w-1/3 animate-pulse" />
            <div className="h-9 bg-gray-200 w-1/2 animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Loading Spinner
  const LoadingSpinner = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-2 border-black border-t-transparent rounded-full"
      />
      <p className="mt-4 text-gray-500 font-mono text-sm">LOADING CERTIFICATES...</p>
    </motion.div>
  );

  return (
    <section
      id="certificates"
      className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden bg-white"
    >
      {/* BACKGROUND WATERMARK */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-5">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-12 rotate-[-25deg] scale-150">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="text-5xl font-black text-black select-none whitespace-nowrap font-mono"
              style={{
                transform: `translateY(${i % 2 === 0 ? "0" : "40px"})`,
              }}
            >
              CERTIFICATES
            </div>
          ))}
        </div>
      </div>

      {/* SIMPLE GRID PATTERN */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 30px),
                           repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 left-8 w-10 h-10 border-2 border-black rotate-45"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-8 w-14 h-14 rounded-full border-2 border-gray-300"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-5 py-1.5 bg-black border border-white text-white font-bold text-sm shadow-[3px_3px_0px_#000] font-mono"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            CERTIFICATES.EXE
          </motion.div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-black">
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              My Certifications
            </span>
          </h2>
          <p className="mt-2 text-gray-500 text-sm font-mono">
            {`>_ VERIFIED CREDENTIALS AND ACHIEVEMENTS`}
          </p>
        </motion.div>

        {/* CERTIFICATE GRID */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LoadingSpinner />
              <LoadingSkeleton />
            </motion.div>
          ) : (
            <motion.div key="certificates" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {certificates.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {certificates.map((certificate, index) => (
                      <motion.a
                        key={certificate._id}
                        href={certificate.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="bg-white border-2 border-black rounded-none overflow-hidden shadow-[6px_6px_0px_#000] hover:shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group block cursor-pointer"
                      >
                        {/* IMAGE SECTION */}
                        <div className="relative h-44 overflow-hidden border-b-2 border-black bg-gray-50">
                          <img
                            src={certificate.imageUrl}
                            alt={certificate.title}
                            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/400x220?text=CERTIFICATE";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          
                          {/* BADGES */}
                          <div className="absolute top-2 left-2 bg-white border border-black px-2 py-0.5">
                            <span className="text-black font-mono text-[9px] font-bold">#{index + 1}</span>
                          </div>
                          <div className="absolute top-2 right-2 bg-black border border-white px-2 py-0.5">
                            <span className="text-white font-mono text-[8px] font-bold">VERIFIED</span>
                          </div>

                          {/* HOVER OVERLAY */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="bg-white border-2 border-black p-2.5 shadow-[4px_4px_0px_#000]">
                              <FaEye className="text-black text-base" />
                            </div>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-base font-black text-black font-mono leading-tight line-clamp-2">
                              {certificate.title}
                            </h3>
                            <div className="w-7 h-7 bg-black border border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                              <FaCertificate className="text-white text-sm" />
                            </div>
                          </div>
                          
                          {certificate.date && (
                            <div className="flex items-center gap-1.5 mt-2 text-gray-500 text-xs font-mono">
                              <FaCalendarAlt className="text-[10px]" />
                              <span>{certificate.date}</span>
                            </div>
                          )}

                          <div className="mt-3 flex items-center gap-1.5 text-[9px] font-black text-gray-500 group-hover:text-black transition-colors duration-200 font-mono">
                            <span>[ VIEW CERTIFICATE ]</span>
                            <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>▸</motion.span>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* STATS SECTION */}


                  {/* STATUS BAR */}
                  <div className="mt-8 p-2 bg-white border border-black flex items-center justify-between text-gray-500 text-xs font-mono">
                    <span>📁 {certificates.length} CERTIFICATES | SIZE: 2.4 MB</span>
                    <span>🖥️ RETROUI v1.0</span>
                    <span>⚡ ACTIVE</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-block p-8 bg-white border-2 border-black shadow-[8px_8px_0px_#000]">
                    <FaCertificate className="text-4xl text-gray-300 mx-auto mb-3" />
                    <p className="text-base font-black text-gray-500 font-mono">NO CERTIFICATES FOUND</p>
                    <p className="mt-1 text-xs text-gray-400 font-mono">CHECK BACK LATER</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}

export default Certificates;