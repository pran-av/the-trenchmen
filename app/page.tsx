"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HardHatIcon as Helmet, TelescopeIcon as Binoculars, Briefcase } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro")
  // Commenting out unused state and effects
  // const [caseStudies, setCaseStudies] = useState([])
  // const [testimonials, setTestimonials] = useState([])

  // useEffect(() => {
  //   // Simulating API calls to fetch case studies and testimonials
  //   // Replace these with actual API calls in a real application
  //   setTimeout(() => {
  //     setCaseStudies([
  //       { id: 1, title: "AI-Powered Supply Chain Optimization", client: "TechFlow Logistics" },
  //       { id: 2, title: "Blockchain-based Identity Verification", client: "SecureID Solutions" },
  //     ])
  //     setTestimonials([
  //       {
  //         id: 1,
  //         text: "The Trenchmen's hands-on approach revolutionized our product strategy.",
  //         author: "Jane Doe, CEO of TechStart",
  //       },
  //       {
  //         id: 2,
  //         text: "Their deep tech expertise was crucial in solving our complex challenges.",
  //         author: "John Smith, CTO of InnovateCorp",
  //       },
  //     ])
  //   }, 2000)
  // }, [])

  const teamMembers = [
    { name: "Pranav Mandhare", role: "Product & Sales Strategist", image: "/team/20250210_005610.jpg" },
    //{ name: "Sam Foxhole", role: "Operations Expert", image: "/placeholder.svg?height=100&width=100" },
    //{ name: "Morgan Bunker", role: "Sales Tactician", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background text-foreground overflow-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-primary">The Trenchmen</h1>
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveSection("intro")}
                className={`px-4 py-2 rounded-md ${activeSection === "intro" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                Mission
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("team")}
                className={`px-4 py-2 rounded-md ${activeSection === "team" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                Team
              </button>
            </li>
            {/* Commenting out Case Studies and Testimonials buttons
            {caseStudies.length > 0 && (
              <li>
                <button
                  onClick={() => setActiveSection("caseStudies")}
                  className={`px-4 py-2 rounded-md ${activeSection === "caseStudies" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  Case Studies
                </button>
              </li>
            )}
            {testimonials.length > 0 && (
              <li>
                <button
                  onClick={() => setActiveSection("testimonials")}
                  className={`px-4 py-2 rounded-md ${activeSection === "testimonials" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  Testimonials
                </button>
              </li>
            )} */}
          </ul>
        </nav>

        <AnimatePresence mode="wait">
          {activeSection === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">Solving Problems for Early-Stage Startups</h2>
              <p className="text-muted-foreground">
                We dive into the trenches with you, solving complex challenges in product, operations, and sales.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <Helmet className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">Product Strategy</h3>
                  <p className="text-sm text-muted-foreground">Crafting innovative solutions for the future</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <Binoculars className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">Operations Tactics</h3>
                  <p className="text-sm text-muted-foreground">Streamlining processes for maximum efficiency</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <Briefcase className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">Sales Warfare</h3>
                  <p className="text-sm text-muted-foreground">Conquering markets with strategic approaches</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">Meet The Trenchmen</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-secondary p-4 rounded-lg text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Commenting out Case Studies section
          {activeSection === "caseStudies" && caseStudies.length > 0 && (
            <motion.div
              key="caseStudies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">Client: {study.client}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )} */}

          {/* Commenting out Testimonials section
          {activeSection === "testimonials" && testimonials.length > 0 && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold">Testimonials</h2>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-secondary p-4 rounded-lg">
                    <p className="italic mb-2">"{testimonial.text}"</p>
                    <p className="text-sm text-muted-foreground">- {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )} */}
        </AnimatePresence>
      </div>
    </main>
  )
}

