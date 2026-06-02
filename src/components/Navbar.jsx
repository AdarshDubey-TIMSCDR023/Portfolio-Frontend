import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [active, setActive] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  // ================= ACTIVE SECTION =================

  useEffect(() => {

    const handleScroll = () => {

      const sections =
        document.querySelectorAll(
          "section[id]"
        );

      const scrollY =
        window.pageYOffset;

      sections.forEach(
        (section) => {

          const sectionHeight =
            section.offsetHeight;

          const sectionTop =
            section.offsetTop - 110;

          const sectionId =
            section.getAttribute(
              "id"
            );

          if (
            scrollY >= sectionTop &&
            scrollY <
              sectionTop +
                sectionHeight
          ) {

            setActive(sectionId);

          }

        }
      );

      setScrolled(
        window.scrollY > 15
      );

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  // ================= BODY LOCK =================

  useEffect(() => {

    document.body.style.overflow =
      menuOpen
        ? "hidden"
        : "unset";

    return () => {

      document.body.style.overflow =
        "unset";

    };

  }, [menuOpen]);

  // ================= NAVIGATION =================

  const handleNavClick = (
    e,
    id
  ) => {

    e.preventDefault();

    const section =
      document.getElementById(id);

    if (section) {

      const navbarHeight = 85;

      const sectionPosition =
        section.offsetTop -
        navbarHeight;

      window.scrollTo({

        top: sectionPosition,

        behavior: "smooth",

      });

      setActive(id);

      setMenuOpen(false);

    }

  };

  // ================= NAV LINKS =================

const navLinks = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Achievements",
    id: "achievements",
  },
  {
    name: "Certificates",
    id: "certificates",
  },
  {
    name: "Resume",
    id: "resume",
  },
];

  return (
    <>

      {/* ================= NAVBAR ================= */}

      <motion.nav

        initial={{
          y: -80,
          opacity: 0,
        }}

        animate={{
          y: 0,
          opacity: 1,
        }}

        transition={{
          duration: 0.6,
        }}

        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] xl:w-[88%] border-[3px] border-black rounded-[22px] px-4 sm:px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f3eb]/95 backdrop-blur-xl shadow-[8px_8px_0px_#000]"
            : "bg-[#f7f3eb] shadow-[6px_6px_0px_#000]"
        }`}

      >

        {/* FLOATING BALL */}

        <motion.div

          animate={{
            y: [0, -3, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="hidden lg:block absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 border-[2px] border-black rounded-full"

        />

        <div className="flex items-center justify-between gap-3">

          {/* ================= LOGO ================= */}

          <motion.button

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={(e) =>
              handleNavClick(
                e,
                "home"
              )
            }

            className="relative"

          >

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-black">

              Adarsh.D

            </h1>

            <motion.div

              animate={{
                width: [
                  "0%",
                  "100%",
                  "0%",
                ],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}

              className="h-[2px] bg-yellow-300 border border-black mt-1"

            />

          </motion.button>

          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden lg:flex items-center gap-2 bg-white border-[3px] border-black rounded-2xl px-2 py-2 shadow-[3px_3px_0px_#000]">

            {
              navLinks.map(
                (link, index) => (

                  <motion.button

                    key={link.id}

                    whileHover={{
                      y: -2,
                      rotate:
                        index % 2 === 0
                          ? -1
                          : 1,
                    }}

                    whileTap={{
                      scale: 0.95,
                    }}

                    onClick={(e) =>
                      handleNavClick(
                        e,
                        link.id
                      )
                    }

                    className={`px-3 py-2 rounded-xl text-sm font-black transition-all duration-300 ${
                      active ===
                      link.id
                        ? "bg-yellow-300 border-[3px] border-black shadow-[3px_3px_0px_#000]"
                        : "hover:bg-pink-100"
                    }`}

                  >

                    {link.name}

                  </motion.button>

                )
              )
            }

          </div>

          {/* ================= CONTACT BUTTON ================= */}

          <motion.button

            whileHover={{
              y: -2,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={(e) =>
              handleNavClick(
                e,
                "contact"
              )
            }

            className="hidden lg:flex px-4 py-2.5 bg-yellow-300 border-[3px] border-black rounded-2xl font-black text-sm shadow-[3px_3px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"

          >

            Let's Talk

          </motion.button>

          {/* ================= MOBILE BUTTON ================= */}

          <motion.button

            whileTap={{
              scale: 0.9,
            }}

            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }

            className="lg:hidden w-11 h-11 bg-yellow-300 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_#000]"

          >

            {
              menuOpen
                ? (
                  <HiX className="text-2xl text-black" />
                )
                : (
                  <HiMenuAlt3 className="text-2xl text-black" />
                )
            }

          </motion.button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>

          {
            menuOpen && (

              <motion.div

                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: -10,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -10,
                }}

                transition={{
                  duration: 0.22,
                }}

                className="lg:hidden mt-4"

              >

                <div className="relative bg-[#f7f3eb] border-[3px] border-black rounded-[24px] p-3 shadow-[8px_8px_0px_#000] overflow-hidden">

                  {/* FLOATING SHAPES */}

                  <motion.div

                    animate={{
                      rotate: [
                        0,
                        12,
                        0,
                      ],
                    }}

                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}

                    className="absolute top-2 right-2 w-4 h-4 bg-pink-300 border-[2px] border-black rotate-12"

                  />

                  <motion.div

                    animate={{
                      y: [0, -3, 0],
                    }}

                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}

                    className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-300 border-[2px] border-black rounded-full"

                  />

                  {/* MENU ITEMS */}

                  <div className="flex flex-col gap-2 relative z-10">

                    {
                      navLinks.map(
                        (
                          link,
                          index
                        ) => (

                          <motion.button

                            key={link.id}

                            initial={{
                              opacity: 0,
                              x: -15,
                            }}

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              delay:
                                index *
                                0.04,
                            }}

                            whileTap={{
                              scale: 0.97,
                            }}

                            onClick={(e) =>
                              handleNavClick(
                                e,
                                link.id
                              )
                            }

                            className={`w-full text-left px-4 py-3 rounded-[18px] border-[3px] border-black text-[15px] font-black transition-all duration-300 ${
                              active ===
                              link.id
                                ? "bg-yellow-300 shadow-[3px_3px_0px_#000]"
                                : "bg-white hover:bg-pink-100"
                            }`}

                          >

                            {link.name}

                          </motion.button>

                        )
                      )
                    }

                    {/* CONTACT */}

                    <motion.button

                      initial={{
                        opacity: 0,
                        x: -15,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay: 0.25,
                      }}

                      whileTap={{
                        scale: 0.97,
                      }}

                      onClick={(e) =>
                        handleNavClick(
                          e,
                          "contact"
                        )
                      }

                      className="mt-1 px-4 py-3 bg-yellow-300 border-[3px] border-black rounded-[18px] text-[15px] font-black shadow-[3px_3px_0px_#000]"

                    >

                      Let's Talk

                    </motion.button>

                  </div>

                </div>

              </motion.div>

            )
          }

        </AnimatePresence>

      </motion.nav>

      {/* ================= SPACER ================= */}

      <div className="h-[80px]" />

    </>
  );
}

export default Navbar;
