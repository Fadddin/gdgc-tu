import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    githubLink: string
    demoLink: string | null
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 font-google-sans">{project.title}</h3>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <Link
            href={project.githubLink}
            className="inline-flex items-center text-gray-700 hover:text-google-blue transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Link>

          {project.demoLink && (
            <Link
              href={project.demoLink}
              className="inline-flex items-center text-gray-700 hover:text-google-blue transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
