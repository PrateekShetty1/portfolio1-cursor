"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Badge className="justify-center py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-colors cursor-pointer">
        {skill}
      </Badge>
    </motion.div>
  )
}
