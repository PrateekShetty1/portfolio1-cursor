"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  imageSrc: string
  tags: string[]
  links?: Array<{ url: string; text: string }>
  metrics?: Array<{ value: string; label: string }>
}

export function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Return null if project is undefined
  if (!project) {
    return null;
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video overflow-hidden group">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={400}
          height={225}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.subtitle}</p>
        <div className="mt-4">
          <AnimatePresence>
            <motion.p
              className={`text-gray-700 dark:text-gray-300 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '4.5em' }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>
          </AnimatePresence>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
          >
            {isExpanded ? 'Show less' : 'Read more'}
            <ChevronDown
              className={`h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex gap-4">
            {project.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
