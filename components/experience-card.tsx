"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ExperienceProps {
  title: string
  company: string
  period: string
  duration: string
  responsibilities: string[]
}

export function ExperienceCard({ experience }: { experience: ExperienceProps }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-amber-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-amber-900">{experience.title}</CardTitle>
              <CardDescription className="text-amber-700 flex items-center gap-1">
                <span className="font-medium">{experience.company}</span> | {experience.period}
              </CardDescription>
            </div>
            <Badge className="bg-amber-600 hover:bg-amber-700 transition-colors">{experience.duration}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <motion.ul
            className="space-y-2 list-disc pl-5"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
              hidden: {
                opacity: 0,
              },
            }}
          >
            {experience.responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                className="text-amber-800"
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 },
                }}
              >
                {responsibility}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
