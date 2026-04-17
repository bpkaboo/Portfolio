import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

      {/* HERO */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Bp 👋
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Frontend Developer | React Learner
        </p>

        {/* SCROLL BUTTON */}
        <motion.button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 bg-white text-black rounded-full"
        >
          View My Work 👇
        </motion.button>

        {/* RESUME BUTTONS */}
        <div className="flex gap-4 mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            View Resume
          </a>

          <a
            href="/Resume.pdf"
            download
            className="px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a computer science student passionate about building modern web applications.
          I love learning new technologies and turning ideas into reality.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* PROJECT 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl w-80"
          >
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              React + Tailwind modern portfolio.
            </p>

            <div className="flex gap-4 mt-4 justify-center">
              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-full"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white rounded-full"
              >
                Code
              </a>
            </div>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl w-80"
          >
            <h3 className="text-xl font-bold">Todo App</h3>
            <p className="text-gray-400 mt-2">
              Task manager using React.
            </p>

            <div className="flex gap-4 mt-4 justify-center">
              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-full"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white rounded-full"
              >
                Code
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">your@email.com</p>
      </section>

    </div>
  );
}

export default App;