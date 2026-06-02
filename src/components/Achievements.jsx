import { motion } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

function Achievements() {
  const achievements = [
    {
      title: "Bachelor of Computer Applications",
      description:
        "Successfully completed Bachelor of Computer Applications (BCA) in 2025, building a strong foundation in software development, web technologies, databases, and computer science.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgXNPR-oa6uVF5mpp4i5yJTNZ3Oy1wrtNvm2owp4UyONXx8vWTGhJeYhWVyV1aYluZk-AS4zBb1qCO02BF6ZwUmMxvir9WQ60k8Y6zR40XGrl9mlq4XWMUdqVfpZMSzzHczpyaPb5eLdom[...]",
      icon: <FaAward />,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      tag: "Degree",
      link:
        "https://adarshdubeyportfolio.blogspot.com/2026/06/graduation-milestone-proud-to-share.html",
    },

    {
      title: "Research Poster",
      description:
        "1st Prize Winner at ICAIM 2026. Recognized for innovative research contribution.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEj5YNiR6yqPh6vwWB4lUsIUepgfsFx3I4ljk2_HbOEKNeqoWcVIF_OF41tV0Ywik6ztpF6f0wZ51uGKfbuszmQQtspPjrdj1mYoMqipyhN1IThxIjBLDwG5GgplWfQah9Oo3XODuWI9rre[...]",
      icon: <FaTrophy />,
      color: "from-yellow-400 to-amber-400",
      bgColor: "bg-yellow-50",
      tag: "Winner",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_research-artificialintelligence-agriculture-ugcPost-7427339366248845312-hHjh/?utm_source=social_share_send&utm_medium=member_desktop_web&rc[...]",
    },

    {
      title: "TechAstra-2025",
      description:
        "Secured 2nd position in a tech fest focused on innovation and project development.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhAx5IsYbP2eVI6CNWIV2VStPVoagB3kPsz3VB5UDFsdsqM2EwoHQlzhOJlTOZSGbVfXtGAfJt3hXtLyhM9omUQR58KQnHWQAlWhubqCdhDNgegDEwAsg74yh2mNY8QKucaIxeBvPkWo5C[...]",
      icon: <FaTrophy />,
      color: "from-cyan-400 to-sky-400",
      bgColor: "bg-cyan-50",
      tag: "Tech Fest",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_techastra-runnerup-naviride-activity-7303343108446994433-LsAP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbG4_EBTD[...]",
    },

    {
      title: "Corizo Internship",
      description:
        "Worked as a Web Development Intern and gained experience in building modern web applications.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEjPYx8I6GkNx43LPpx6yezJ8Sej-uxaQ4E-kKkYEsLOqd6TMwzd9Es1x8df4iBZOkkB2ZXOzF32a28bhHDH0zb4mTzYkooHIoJ_6Bu-Jiv3Tw0S2RE1fLGEV_EG8KKB9V4tZv5aAKFNkRl[...]",
      icon: <FaLaptopCode />,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      tag: "Internship",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_certification-in-web-development-activity-7163873917323931649-ABTC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbG4[...]",
    },

    {
      title: "NDLI Business Quiz",
      description:
        "Participated in The Business Quiz organized by NDLI Club and IIT Kharagpur.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhMwAlo6VjCB7deSgCSn9KQzW2sRvrBs0bfkpGwQHeaLXzCJCvm3K6JhrfWlDfeLbPm5FEwGmeAhAE0xcMoYYM8PvtQ_DJSLp86fXM37woIDMCu4kWfWMeVbarrxCk8eH_d9Nc45WDP0Tg[...]",
      icon: <FaCertificate />,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      tag: "Quiz",
      link:
        "https://mittimaimilladenge.blogspot.com/2026/05/participating-in-ndli-business-quiz.html",
    },
  ];

  return (
    <section
      id="achievements"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      {/* SUBTLE BACKGROUND GRADIENT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-semibold text-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            ⚡ Achievements & Milestones
          </motion.div>
          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900">
              My Journey
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Celebrating accomplishments, recognitions, and milestones across education, competitions, and professional experiences
          </p>
        </motion.div>

        {/* ACHIEVEMENT CARDS - RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* First Card - Full Width on Desktop */}
          <motion.a
            key={0}
            href={achievements[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="lg:col-span-2 group"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* IMAGE SECTION */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={achievements[0].image}
                  alt={achievements[0].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* TAG & ICON */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${achievements[0].color} rounded-lg flex items-center justify-center text-white text-xl shadow-md`}
                  >
                    {achievements[0].icon}
                  </motion.div>
                  <div className={`px-4 py-1 bg-gradient-to-r ${achievements[0].color} rounded-full text-white text-xs font-bold`}>
                    {achievements[0].tag}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {achievements[0].title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                  {achievements[0].description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  <span>View Details</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Remaining Cards - Grid Layout */}
          {achievements.slice(1).map((item, index) => (
            <motion.a
              key={index + 1}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* IMAGE SECTION */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* TAG & ICON */}
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white text-lg shadow-md`}
                    >
                      {item.icon}
                    </motion.div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-xs font-bold`}>
                      {item.tag}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-xs sm:text-sm group-hover:text-purple-700 transition-colors">
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6"
        >
          {[
            { label: "Achievements", value: "5" },
            { label: "Awards Won", value: "2" },
            { label: "Tech Fests", value: "1" },
            { label: "Internships", value: "1" },
            { label: "Education", value: "1" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
