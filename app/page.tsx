"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { SkillBadge } from "@/components/skill-badge"
import { ResumeViewer } from "@/components/resume-viewer"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("product")
  const [showResume, setShowResume] = useState(false)

  console.log("Resume state:", showResume) // Debug log

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Intersection observer hooks for each section
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Function to handle resume viewing
  const handleViewResume = () => {
    console.log("View Resume clicked") // Debug log
    // Open the PDF directly in a new tab
    window.open("/Prateek_Shetty_Resume.pdf", "_blank")
  }

  // Remove or comment out the line that sets showResume state:
  // setShowResume(true)

  // Project data
  const projects = [
    {
      id: 1,
      title: "SenSights",
      description: "AI-Powered User Feedback Tool",
      imageSrc: "/images/sensights.png",
      content:
        "Developed user-centric solution for collecting and analyzing customer feedback across digital platforms. Created features enabling businesses to identify sentiment trends and prioritize product improvements. Built analytics dashboard that accelerated insight-to-action cycles by 40%, helping businesses respond faster to customer needs.",
      tags: ["AI Integration", "Product Analytics", "UX Research", "API Development"],
      link: "#",
    },
    {
      id: 2,
      title: "Digital Health & AI Product Strategy for Uber Drivers",
      description: "Hackathon Winner - Protothon",
      imageSrc: "/images/uber-project.png",
      content:
        "Designed an AI-powered wellness platform, leveraging user insights to improve driver stress management. Conducted extensive user research to define problem statements and prioritize features based on data-driven insights. Developed success metrics for adoption, retention, and behavioral impact.",
      tags: ["Product Strategy", "User Research", "Figma", "AI"],
      link: "#",
    },
    {
      id: 3,
      title: "Budget Buddy",
      description: "Financial Management Platform",
      imageSrc: "/images/budget-buddy.png",
      content:
        "Led development of consumer app based on research with 150+ users, prioritizing features that addressed core pain points. Implemented user engagement framework with clear metrics to track adoption, retention, and feature usage. Created product specs and user stories that guided cross-functional development team to successful MVP launch.",
      tags: ["MVP Definition", "Go-to-Market", "User Research", "FinTech"],
      link: "#",
    },
    {
      id: 4,
      title: "Smart Yoga Mat",
      description: "IoT Fitness Product",
      imageSrc: "/images/smart-yoga-mat.png",
      content:
        "Led product development for an IoT-enabled yoga mat with pressure sensors to provide real-time feedback on posture and form. Integrated with mobile app for personalized coaching and progress tracking. Conducted user testing with 50+ yoga practitioners to refine the product experience.",
      tags: ["IoT", "Hardware Product", "Mobile App", "Fitness Tech"],
      link: "#",
    },
    {
      id: 5,
      title: "Closet Genie",
      description: "Wardrobe Management App",
      imageSrc: "/images/closet-genie.png",
      content:
        "Developed a smart wardrobe management application that helps users organize their clothing items, create outfits, and make sustainable fashion choices. Implemented AI-powered recommendations based on weather, occasions, and personal style preferences.",
      tags: ["Mobile App", "AI Recommendations", "UX Design", "Sustainability"],
      link: "#",
    },
  ]

  // Experience data
  const experiences = [
    {
      title: "Product Manager",
      company: "Bosch Home Comfort",
      period: "Apr 2024 - Dec 2024",
      duration: "8 months",
      responsibilities: [
        "Conducted user research with 40+ customers, created journey maps & performed market analysis, identifying critical pain points that informed product enhancements and increased user engagement by 20%",
        "Defined product requirements, epics, and user stories, ensuring features align with customer needs and business goals",
        "Led end-to-end development of digital and hardware product roadmaps, using data-driven prioritization to accelerate time-to-market",
        "Collaborated cross-functionally with engineering, R&D, sales, & marketing to translate user needs into scalable, user-friendly solutions",
        "Analyzed product development metrics via custom dashboards, identifying bottlenecks that reduced development cycle time by 15%",
        "Built market intelligence databases & analytics dashboards tracking 12 competitors & 15 KPIs, enabling data-driven product positioning",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      period: "Jan 2025 - Present",
      duration: "Current",
      responsibilities: [
        "Provided mentorship on product management methodologies, user research, and market analysis to graduate students",
        "Led workshops on feature prioritization, competitive benchmarking, and data-driven decision-making",
        "Assisted in refining course materials, integrating latest UX/UI trends, product roadmaps, and GTM strategies",
        "Evaluated student projects, offering strategic feedback to enhance their understanding of customer-centric product development",
      ],
    },
    {
      title: "Account Manager",
      company: "Dell Technologies",
      period: "Jan 2022 - Aug 2023",
      duration: "1 year 8 months",
      responsibilities: [
        "Developed and implemented data-driven sales strategies, leading to a 10% YoY revenue increase",
        "Owned end-to-end product lifecycle management, streamlining go-to-market strategies and improving customer acquisition",
        "Created customer segmentation strategy for SMB clients, identifying key opportunities that increased conversion rates by 15%",
        "Collaborated with product teams to influence roadmap decisions based on customer feedback and market needs",
      ],
    },
    {
      title: "Senior Product Sales Strategist",
      company: "SKILL LYNC",
      period: "Feb 2021 - Jan 2022",
      duration: "1 year",
      responsibilities: [
        "Led marketing campaigns across cross-functional teams, resulting in an 25% elevation in brand recognition and awareness",
        "Assisted market research and developed product strategies focusing on energy efficiency and sustainability in educational technologies",
        "Employed market research to identify and target customer needs, employed comprehensive data analysis for customer solution development, resulting in a 12% increase in enrollment through targeted promotions",
        "Promoted to Senior Sales Specialist, responsible for a team of 8 product sales associates ensuring project timelines and quality standards",
      ],
    },
    {
      title: "Product Specialist",
      company: "BYJU'S - The learning App",
      period: "Jan 2020 - Jan 2021",
      duration: "1 year",
      responsibilities: [
        "Executed A/B testing strategy for digital user experience, refining features & improving customer satisfaction (CSAT) from 6.5 to 8.0",
        "Led cross-functional initiatives to streamline Agile product development, reducing time-to-market by 10%",
        "Identified conversion bottlenecks through funnel analysis, implementing UX improvements that increased conversion rates by 15%",
        "Collaborated with engineering teams to prioritize feature development based on user engagement, reducing development cycles by 12%",
      ],
    },
  ]

  // Skills data
  const skills = {
    product: [
      "Feature Prioritization",
      "Roadmap Development",
      "A/B Testing",
      "Product Requirements",
      "Cross-functional Collaboration",
      "User Research",
      "Market Analysis",
      "International Product Adaptation",
      "Key Performance Indicators",
      "Competitor Analysis",
      "GTM Strategy",
      "Customer Journey Mapping",
    ],
    technical: [
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Figma",
      "MS Office Suite",
      "Excel (Pivot Tables, VBA)",
      "JIRA",
      "Confluence",
      "Salesforce",
    ],
    analytics: [
      "Funnel Analysis",
      "Conversion Optimization",
      "Statistical Analysis",
      "User Behavior Tracking",
      "Data Visualization",
      "Market Intelligence",
      "Performance Metrics",
      "Consumer Behavior Analysis",
      "Competitive Analysis",
      "User Segmentation",
    ],
  }

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold text-xl text-amber-700">Prateek Shetty</div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
          </nav>
          <Button onClick={handleViewResume} size="sm" className="hidden md:flex bg-amber-600 hover:bg-amber-700">
            View Resume
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-amber-900">Prateek Shetty</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-amber-700">Product Manager</h2>
            <p className="text-lg text-amber-800 max-w-2xl">
              Passionate about building user-centric products that solve real problems. Experienced in product strategy,
              user research, and cross-functional leadership.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="flex items-center gap-1 border-amber-300 text-amber-700">
                <MapPin className="h-3 w-3" /> Boston, MA
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 border-amber-300 text-amber-700">
                <Mail className="h-3 w-3" />
                <a href="mailto:prateeknshetty@gmail.com" className="hover:text-amber-500">
                  prateeknshetty@gmail.com
                </a>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 border-amber-300 text-amber-700">
                <Phone className="h-3 w-3" /> (857) 891-2464
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 border-amber-300 text-amber-700">
                <Github className="h-3 w-3" />
                <a
                  href="https://github.com/PrateekShetty1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  GitHub
                </a>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 border-amber-300 text-amber-700">
                <Linkedin className="h-3 w-3" />
                <a
                  href="https://www.linkedin.com/in/prateeknshetty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  LinkedIn
                </a>
              </Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-amber-600 hover:bg-amber-700 transition-all transform hover:scale-105"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                onClick={handleViewResume}
                className="border-amber-600 text-amber-700 hover:bg-amber-100 transition-all transform hover:scale-105"
              >
                View Resume
              </Button>
            </div>
          </div>
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/images/prateek-profile.png" alt="Prateek Shetty" fill className="object-cover" priority />
          </motion.div>
        </motion.section>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection("about")}
            whileHover={{ y: 5 }}
          >
            <p className="text-amber-700 mb-2">Scroll to explore</p>
            <ChevronDown className="h-6 w-6 text-amber-600 animate-bounce" />
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-12 scroll-mt-20"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            About Me
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="space-y-4" variants={fadeIn}>
              <p className="text-lg text-amber-800">
                I'm a product manager with proven experience developing user-centric solutions and driving
                cross-functional collaboration. My expertise lies in market research, product strategy, and data-driven
                decision making.
              </p>
              <p className="text-lg text-amber-800">
                I'm skilled at translating customer needs into compelling features that increase engagement, retention,
                and business value. I have a strong track record in cross-functional leadership and creating product
                experiences that drive meaningful results.
              </p>
              <p className="text-lg text-amber-800">
                Currently pursuing my Master's in Engineering Management at Northeastern University, I'm focused on
                enhancing my product management skills and learning new technologies to build better products.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-amber-200"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-amber-800">My Approach to Product Management</h3>
              <motion.ul
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">User-centric design and development</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">Data-driven decision making</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">Cross-functional collaboration</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">Agile methodology and iterative development</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">Strategic product roadmapping</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-amber-500 font-bold">•</span>
                  <span className="text-amber-700">Continuous learning and improvement</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-12 scroll-mt-20"
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Work Experience
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
          >
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={item}>
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 scroll-mt-20"
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Projects
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 scroll-mt-20"
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Skills
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <Tabs defaultValue="product" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-6 bg-amber-100">
              <TabsTrigger
                value="product"
                className={
                  activeTab === "product" ? "data-[state=active]:bg-amber-600 data-[state=active]:text-white" : ""
                }
              >
                Product & Business
              </TabsTrigger>
              <TabsTrigger
                value="technical"
                className={
                  activeTab === "technical" ? "data-[state=active]:bg-amber-600 data-[state=active]:text-white" : ""
                }
              >
                Technical Tools
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className={
                  activeTab === "analytics" ? "data-[state=active]:bg-amber-600 data-[state=active]:text-white" : ""
                }
              >
                Analytics & Insights
              </TabsTrigger>
            </TabsList>
            <TabsContent value="product" className="space-y-4">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={skillsInView && activeTab === "product" ? "visible" : "hidden"}
              >
                {skills.product.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="technical" className="space-y-4">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={skillsInView && activeTab === "technical" ? "visible" : "hidden"}
              >
                {skills.technical.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={skillsInView && activeTab === "analytics" ? "visible" : "hidden"}
              >
                {skills.analytics.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="py-12 scroll-mt-20"
          ref={educationRef}
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Education
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-amber-900">Master of Science in Engineering Management</CardTitle>
                      <CardDescription className="text-amber-700">
                        Northeastern University | Expected June 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-amber-600">GPA: 3.8</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-medium text-amber-800">Relevant coursework:</p>
                  <p className="text-amber-700">
                    Digital Product Design & Management, Project Management, Customer-driven Innovation
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-amber-900">
                        Bachelor of Engineering in Mechanical Engineering
                      </CardTitle>
                      <CardDescription className="text-amber-700">
                        M. S. Ramaiah Institute of Technology | Aug 2019
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-medium text-amber-800">Relevant coursework:</p>
                  <p className="text-amber-700">
                    Operations Management, Management & Entrepreneurship, Computer Aided Machine Design
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="py-12 scroll-mt-20"
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Certifications
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Atlassian Agile Project Management</CardTitle>
                  <CardDescription className="text-amber-700">April 2025</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Aha! Product Management</CardTitle>
                  <CardDescription className="text-amber-700">May 2025</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Leadership Section */}
        <motion.section
          className="py-12 scroll-mt-20"
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Leadership & Community
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <motion.div variants={staggerContainer} initial="hidden" animate={educationInView ? "visible" : "hidden"}>
            <motion.div variants={item}>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">
                    Associate VP – Northstar, Aspiring Product Managers Club
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    Northeastern University | Aug 2023 - Dec 2023
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-amber-800">
                      Organized workshops for 100+ members, focusing on product management frameworks, data analytics, &
                      strategy development
                    </li>
                    <li className="text-amber-800">
                      Led a team of aspiring product managers, enhancing skill development through hands-on training &
                      real-world case studies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 scroll-mt-20"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-900 relative">
            Contact Me
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Card className="border-amber-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                  <CardTitle className="text-amber-900">Get In Touch</CardTitle>
                  <CardDescription className="text-amber-700">
                    Fill out the form and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-amber-800">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full p-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-amber-800">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-amber-800">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full p-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-amber-800">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 border border-amber-200 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 transition-all transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div variants={item}>
                <Card className="border-amber-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-amber-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <a
                        href="mailto:prateeknshetty@gmail.com"
                        className="text-amber-700 hover:text-amber-500 transition-colors"
                      >
                        prateeknshetty@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-amber-600" />
                      <a href="tel:+18578912464" className="text-amber-700 hover:text-amber-500 transition-colors">
                        (857) 891-2464
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <span className="text-amber-700">Boston, MA</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="border-amber-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-amber-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-amber-600" />
                      <a
                        href="https://www.linkedin.com/in/prateeknshetty/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-500 transition-colors"
                      >
                        linkedin.com/in/prateeknshetty
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-amber-600" />
                      <a
                        href="https://github.com/PrateekShetty1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-500 transition-colors"
                      >
                        github.com/PrateekShetty1
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 py-6 md:py-8 bg-amber-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-amber-700">
            © {new Date().getFullYear()} Prateek Shetty. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/prateeknshetty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transform hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5 text-amber-700 hover:text-amber-500" />
            </a>
            <a
              href="https://github.com/PrateekShetty1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transform hover:scale-110 transition-transform"
            >
              <Github className="h-5 w-5 text-amber-700 hover:text-amber-500" />
            </a>
            <a
              href="mailto:prateeknshetty@gmail.com"
              aria-label="Email"
              className="transform hover:scale-110 transition-transform"
            >
              <Mail className="h-5 w-5 text-amber-700 hover:text-amber-500" />
            </a>
          </div>
        </div>
      </footer>

      {/* Resume Viewer Modal */}
      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </div>
  )
}
