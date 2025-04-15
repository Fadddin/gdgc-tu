"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingShapes from "@/components/FloatingShapes"
import PageHeader from "@/components/PageHeader"
import ProjectCard from "@/components/ProjectCard"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })

    gsap.from(".project-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 70%",
      },
    })
  }, [])

  const projects = [
    {
      id: 1,
      title: "NewsApp: Fully Functional News Reader",
      description:
        "This is a native Android fully functional News Reader Application which let's you read the current happenings, share them or if you are in hurry, save it! Fun part: Your saved articles are even available offline.",
      image: "/PROJECTS/NewsApp.jpg",
      technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Dagger Hilt", "ROOM Database"],
      githubLink: "https://github.com/jarvis1704/News-App",
      contributors: ["Biprangshu Das"],
      demoLink: null,
    },
    {
      id: 2,
      title: "Heart Disease Prediction with ML",
      description: "This application predicts the likelihood of heart disease based on user-provided medical attributes. It leverages machine learning models from scikit-learn and provides a user-friendly interface using Streamlit. The app is deployed on the web.",
      image: "/PROJECTS/Heart_Disease_Prediction_with_ML.png",
      technologies: ["Scikit Learn", "Streamlit", "Python"],
      githubLink: "https://github.com/an-admin/Heart_dis",
      contributors: ["Anchit Das"],
      demoLink: "https://heartdispredict.streamlit.app/",
    },
    {
      id: 3,
      title: "Rich AI Text Editor",
      description: "Rich AI Text Editor can write poems stories and answers your questions with gemini ai in different languages such as Hindi English etc and also helps in removing extra *** or -- when we copy content from gpts or llms",
      image: "/PROJECTS/Rich_AI_Text_Editor.jpg",
      technologies: ["React Js", "Tailwind CSS" ,"Gemini Api"],
      githubLink: "https://github.com/Aslam554/Rich-Text-Editor",
      contributors: ["Mirza Aslam Beg"],
      demoLink: "https://richtexteditors.netlify.app/",
    },
    {
      id: 4,
      title: "VidSummarizerMCP",
      description: "VidSummarizerMCP is a cutting-edge Model Context Protocol (MCP) server designed to transform YouTube video content into structured, detailed notes using the power of the YouTube Data API and Google Gemini's multimodal AI capabilities.",
      image: "/PROJECTS/VidSummarizerMCP.jpg",
      technologies: ["FastAPI", "Python", "Streamlit"],
      githubLink: null,
      contributors: ["Anchit Das"],
      demoLink: null,
    },
    {
      id: 5,
      title: "Medical Image Analyzer",
      description: "An AI-powered assistant built on Google Gemini, designed to help medical professionals diagnose diseases with greater precision, speed, and confidence.",
      image: "/PROJECTS/Medical_Image_Analyzer.png",
      technologies: ["Streamlit", "Python"],
      githubLink: null,
      contributors: ["Anchit Das"],
      demoLink: null,
    },
    {
      id: 6,
      title: "PokeDex",
      description: "This app is what the name says, Its a PokeDex app which let's you browse pokemons to your heart's content, with sleek animations and all stats of individual pokemons.",
      image: "/PROJECTS/pokedex.jpg",
      technologies: ["Jetpack Compose", "Kotlin", "Retrofit", "Dagger Hilt", "Timber", "Coil"],
      githubLink: "https://github.com/jarvis1704/Android-PokeDex",
      contributors: ["Biprangshu Das"],
      demoLink: null,
    },
  ]

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      <PageHeader title="Projects" subtitle="Innovative solutions built by our community members" />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-12 max-w-3xl">
            At GDG Tezpur University, we believe in learning by doing. Our members collaborate on various projects to
            solve real-world problems and gain hands-on experience with Google technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
