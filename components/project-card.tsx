"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectProps {
  id: number
  title: string
  description: string
  imageSrc: string
  content: string
  tags: string[]
  link: string
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
      <Card className="flex flex-col h-full border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
          <CardTitle className="text-amber-900">{project.title}</CardTitle>
          <CardDescription className="text-amber-700">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pt-6">
          <motion.div
            className="aspect-video relative mb-4 rounded-md overflow-hidden border border-amber-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src={project.imageSrc || "/placeholder.svg"}
              alt={project.title}
              fill
              className={`object-cover transition-transform hover:scale-105 duration-500 ${
                project.title.includes("Uber") ? "object-contain bg-black p-0" : ""
              }`}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=400&width=600"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.button
                className="bg-amber-600 text-white px-4 py-2 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
          <div className="space-y-2">
            <p className="text-amber-800">{project.content}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-100 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <motion.a
              href={project.link}
              className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-800 transition-colors group"
              whileHover={{ x: 3 }}
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
