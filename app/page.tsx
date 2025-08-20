"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Github, Linkedin, Twitter, Mail, Rss, Sun, Moon } from "lucide-react"

function FloatingSocialLinks({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg opacity-100 transition-colors`}
      style={{
        backgroundColor: isDarkMode ? "white" : "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/bhoomika-254"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhoomikaramchandani/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/bhoomikacodes"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://hashnode.com/@bhoomika19"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
          </svg>
        </a>
        <a
          href="mailto:bhoomikaramchandani2@gmail.com"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDarkMode ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-300"
          }`}
        >
          <Rss className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

function ProfileHeader({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="mb-24">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden bg-gray-100 h-40 w-40">
            <img src="/profile-picture.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-2xl">
          <h1
            className={`font-montserrat font-black text-5xl lg:text-6xl mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            {"hey! i'm bhoomika"}
          </h1>
          <p className={`text-xl leading-relaxed mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            {"I build and experiment with AI agents."}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/bhoomikaramchandani/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full border transition-colors`}
              style={{
                backgroundColor: isDarkMode ? "#3F3F3F" : "transparent",
                borderColor: isDarkMode ? "#3F3F3F" : "#d1d5db",
              }}
            >
              <Linkedin
                className={`w-5 h-5 transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              />
            </a>
            <a
              href="https://github.com/bhoomika-254"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full border transition-colors`}
              style={{
                backgroundColor: isDarkMode ? "#3F3F3F" : "transparent",
                borderColor: isDarkMode ? "#3F3F3F" : "#d1d5db",
              }}
            >
              <Github
                className={`w-5 h-5 transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              />
            </a>
            <a
              href="mailto:bhoomikaramchandani2@gmail.com"
              className={`p-3 rounded-full border transition-colors`}
              style={{
                backgroundColor: isDarkMode ? "#3F3F3F" : "transparent",
                borderColor: isDarkMode ? "#3F3F3F" : "#d1d5db",
              }}
            >
              <Mail
                className={`w-5 h-5 transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "work", "skills"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`min-h-screen transition-colors`} style={{ backgroundColor: isDarkMode ? "#111111" : "white" }}>
      <FloatingSocialLinks isDarkMode={isDarkMode} />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors`}
        style={{
          backgroundColor: isDarkMode ? "rgba(17, 17, 17, 0.8)" : "rgba(255, 255, 255, 0.8)",
          borderColor: isDarkMode ? "#3F3F3F" : "#e5e7eb",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`font-montserrat font-bold text-xl ${isDarkMode ? "text-white" : "text-black"}`}>{""}</div>
            <div className="flex items-center space-x-8">
              {[
                { id: "about", label: "about" },
                { id: "experience", label: "experience" },
                { id: "work", label: "work" },
                { id: "skills", label: "skills" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "text-white"
                        : "text-black"
                      : isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors`}
                style={{
                  backgroundColor: isDarkMode ? "#3F3F3F" : "transparent",
                  color: isDarkMode ? "#9ca3af" : "#4b5563",
                }}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-20">
        <ProfileHeader isDarkMode={isDarkMode} />

        <div className="space-y-24">
          {/* About Me Section */}
          <section id="about" className="animate-fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`font-montserrat font-bold text-3xl mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
                about me
              </h2>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {
                  "i’m Bhoomika Ramchandani, a computer science undergrad passionate about building AI systems and generative technologies. I’ve worked on projects ranging from RAG-based chatbots and AI agents to research assistants with LangGraph, DSPy, and hugging face. I enjoy turning complex problems into practical solutions, and outside of tech, I’m always exploring hackathons, new ideas, and fresh challenges"
                }
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="animate-fade-in-up animate-delay-100">
            <h2
              className={`font-montserrat font-bold text-3xl mb-12 text-center ${isDarkMode ? "text-white" : "text-black"}`}
            >
              experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  role: "research intern",
                  company: "artificial intelligence institute of south carolina",
                  period: "august 2025 - present",
                  location: "south carolina, usa",
                  description:
                    "Currently working on cutting-edge AI research projects focusing on machine learning algorithms and their practical applications in real-world scenarios.",
                },
                {
                  role: "generative ai intern",
                  company: "deepforrest.ai, a Ctrl S company",
                  period: "april 2025 - june 2025",
                  location: "hyderabad, tn",
                  description:
                    "Built an AI-powered Literature Assistant that automated pharmacovigilance workflows, cutting manual review time by 70%. Fine-tuned and optimized LLaMA 3.1 with LoRA, PEFT, and RLHF, and led evaluations against Qwen and GPT models to improve accuracy, latency, and deployment readiness.",
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className={`border transition-all hover:shadow-lg`}
                  style={{
                    backgroundColor: isDarkMode ? "#111111" : "white",
                    borderColor: isDarkMode ? "#3F3F3F" : "#e5e7eb",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3
                          className={`font-montserrat font-semibold text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}
                        >
                          {job.role}
                        </h3>
                        <p className={`font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{job.company}</p>
                      </div>
                      <div
                        className={`flex flex-col md:items-end text-sm mt-2 md:mt-0 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    {/* Conditional rendering for description */}
                    {job.description && (
                      <p className={`leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {job.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* My Work Section */}
          <section id="work" className="animate-fade-in-up animate-delay-200">
            <h2
              className={`font-montserrat font-bold text-3xl mb-12 text-center ${isDarkMode ? "text-white" : "text-black"}`}
            >
              projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Time-Series + GAN Based NO2 Map Downscaling",
                  description:
                    "Applied LSTM networks to fill temporal gaps in satellite NO₂ time-series data, and used Random Forest Regression for spatial downscaling and further gap filling. Integrated SRGAN to enhance and smoothen output maps, improving their visual quality.",
                  techStack: ["Folium", "GAN", "Python", "LSTM"],
                  github: "https://github.com/gottabesiriius/Pavan-ai",
                },
                {
                  title: "Intelligent Math Problem Solver",
                  description:
                    "a math agent web app with a React frontend and FastAPI backend that provides step-by-step math solutions. It integrates Qdrant for retrieval (RAG), Gemini LLM for reasoning, and guardrails/MCP services for safe, context-aware responses.",
                  techStack: ["React", "Tailwind CSS", "KaTex", "Qdrant", "FastAPI", "MCP", "DSPy"],
                  github: "https://math-agentic-rag.vercel.app/",
                },
                {
                  title: "Basic RAG based chatbot",
                  description:
                    "built using Gemini 2.0 Flash, ChromaDB, and Streamlit with an OCR Fallback for scanned pdfs.",
                  techStack: ["RAG", "Python", "ChromaDB", "Tesseract"],
                  github: "https://rag-based-chatbott.streamlit.app/",
                },
                {
                  title: "pokemon mcp server",
                  description:
                    "gives AI models access to comprehensive Pokémon data and battle simulation capabilities. connect this server to Claude Desktop to chat about pokémon with real data and simulate battles!",
                  techStack: ["Python", "FastAPI"],
                  github: "https://github.com/bhoomika-254/Pokemon-MCP-Server",
                },
                {
                  title: "virtual lab (physics & chemistry experiments)",
                  description:
                    "a full-stack virtual science laboratory built using node.js and react, simulating real-world physics and chemistry experiments right in the browser. Each experiment comes with interactive visuals, concept-driven tasks, AI-powered assistance, and test-based evaluations.",
                  techStack: ["NodeJS", "ReactJS"],
                  github: "https://virtualab.netlify.app/",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className={`group border transition-all hover:shadow-lg`}
                  style={{
                    backgroundColor: isDarkMode ? "#111111" : "white",
                    borderColor: isDarkMode ? "#3F3F3F" : "#e5e7eb",
                  }}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`font-montserrat font-semibold text-xl mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {project.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className={`font-medium text-sm mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>
                        tech stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full transition-colors`}
                            style={{
                              backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                              color: isDarkMode ? "#9ca3af" : "#4b5563",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 text-sm border rounded-lg transition-colors hover:shadow-md`}
                      style={{
                        backgroundColor: isDarkMode ? "#3F3F3F" : "transparent",
                        borderColor: isDarkMode ? "#3F3F3F" : "#d1d5db",
                        color: isDarkMode ? "#9ca3af" : "#4b5563",
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      view on github
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="animate-fade-in-up animate-delay-300">
            <h2
              className={`font-montserrat font-bold text-3xl mb-8 text-center ${isDarkMode ? "text-white" : "text-black"}`}
            >
              skills
            </h2>
            <div className="max-w-4xl mx-auto">
              <p
                className={`text-lg leading-relaxed mb-12 text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                here are some of the skills i have acquired over the years of my journey in the tech industry. i am
                always looking to learn more and improve my skillset.
              </p>

              <div className="space-y-6">
                {/* Programming Languages */}
                <div>
                  <h3
                    className={`font-montserrat font-semibold text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    1. programming languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "C", "C++", "SQL", "HTML", "CSS"].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors`}
                        style={{
                          backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                          color: isDarkMode ? "#9ca3af" : "#4b5563",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Libraries & Frameworks */}
                <div>
                  <h3
                    className={`font-montserrat font-semibold text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    2. libraries & frameworks
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "NumPy",
                      "Pandas",
                      "Matplotlib",
                      "Seaborn",
                      "Plotly",
                      "Folium",
                      "Scikit-learn",
                      "TensorFlow",
                      "PyTorch",
                      "Hugging Face",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors`}
                        style={{
                          backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                          color: isDarkMode ? "#9ca3af" : "#4b5563",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Generative AI & Agents */}
                <div>
                  <h3
                    className={`font-montserrat font-semibold text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    3. generative ai & agents
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["LangChain", "LangGraph", "DSPy", "RAG", "LoRA / PEFT", "RLHF"].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors`}
                        style={{
                          backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                          color: isDarkMode ? "#9ca3af" : "#4b5563",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases & Vector Stores */}
                <div>
                  <h3
                    className={`font-montserrat font-semibold text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    4. databases & vector stores
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Qdrant"].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors`}
                        style={{
                          backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                          color: isDarkMode ? "#9ca3af" : "#4b5563",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <h3
                    className={`font-montserrat font-semibold text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    5. tools & platforms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "GitHub",
                      "GitHub Actions",
                      "Microsoft Azure",
                      "AWS",
                      "Docker",
                      "Jenkins",
                      "Linux",
                      "Jupyter",
                      "Postman",
                      "Tableau",
                      "FastAPI",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors`}
                        style={{
                          backgroundColor: isDarkMode ? "#3F3F3F" : "#f3f4f6",
                          color: isDarkMode ? "#9ca3af" : "#4b5563",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer
        className={`mt-32 py-12 border-t transition-colors`}
        style={{ borderColor: isDarkMode ? "#3F3F3F" : "#e5e7eb" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>{""}</p>
        </div>
      </footer>
    </div>
  )
}
