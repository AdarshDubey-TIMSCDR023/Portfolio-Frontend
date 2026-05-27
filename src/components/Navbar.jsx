import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen]);

  // ACTIVE SECTION
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, isMobile]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Resume", href: "#resume", id: "resume" },
  ];

  // Responsive nav classes
  const getNavClasses = () => {
    const baseClasses = "fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300";
    const widthClasses = "w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%]";
    const paddingClasses = "px-3 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4";
    const borderRadiusClasses = "rounded-2xl sm:rounded-3xl";
    const borderClasses = "border-2 sm:border-[3px] border-black";
    
    const bgClasses = scrolled
      ? "bg-[#f5f1eb]/95 backdrop-blur-2xl shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] lg:shadow-[10px_10px_0px_#000]"
      : "bg-[#f5f1eb]/90 backdrop-blur-xl shadow-[5px_5px_0px_#000] sm:shadow-[6px_6px_0px_#000] lg:shadow-[8px_8px_0px_#000]";
    
    return `${baseClasses} ${widthClasses} ${paddingClasses} ${borderRadiusClasses} ${borderClasses} ${bgClasses}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={getNavClasses()}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* LOGO */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-black whitespace-nowrap"
          >
            Adarsh.D
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/80 backdrop-blur-md border-2 sm:border-[3px] border-black rounded-xl md:rounded-2xl px-2 md:px-3 py-1.5 md:py-2 shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000]">
            {navLinks.map((link) => (
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={link.id}
                href={link.href}
                className={`px-2 xl:px-4 2xl:px-5 py-1.5 xl:py-2 rounded-xl font-bold text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                  active === link.id
                    ? "bg-yellow-300 text-black border-2 border-black shadow-[2px_2px_0px_#000]"
                    : "text-black hover:bg-yellow-100"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* DESKTOP LET'S TALK BUTTON */}
          <div className="hidden lg:flex">
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 xl:px-6 py-2 xl:py-3 bg-yellow-300 border-2 sm:border-[3px] border-black text-black font-black rounded-xl xl:rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition duration-200 text-sm xl:text-base whitespace-nowrap"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* MOBILE & TABLET MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300 border-2 sm:border-[3px] border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] cursor-pointer z-50 relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <HiX className="text-2xl sm:text-3xl text-black" />
            ) : (
              <HiMenuAlt3 className="text-2xl sm:text-3xl text-black" />
            )}
          </motion.button>
        </div>

        {/* MOBILE & TABLET DROPDOWN MENU - FIXED VISIBILITY */}
        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className={`mt-4 sm:mt-6 ${
                  isMobile
                    ? "bg-[#f5f1eb] border-2 sm:border-[3px] border-black rounded-2xl shadow-[8px_8px_0px_#000] p-4"
                    : "bg-[#f5f1eb] border-2 sm:border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_#000] p-5"
                }`}
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer ${
                          active === link.id
                            ? "bg-yellow-300 border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_#000]"
                            : "bg-white border-2 sm:border-[3px] border-black hover:bg-yellow-50 hover:translate-x-1"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}

                  {/* MOBILE & TABLET LET'S TALK BUTTON */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-2"
                  >
                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 sm:px-6 py-3 sm:py-4 bg-yellow-300 border-2 sm:border-[3px] border-black text-black font-black rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_#000] text-center text-base sm:text-lg cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition duration-200"
                    >
                      Let's Talk
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[72px] sm:h-[80px] lg:h-[88px]" />
    </>
  );
}

export default Navbar;