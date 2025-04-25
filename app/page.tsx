"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { ProjectCard } from "@/components/project-card"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ChevronLeft, ChevronRight, X, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  tags: string[];
  links?: Array<{ url: string; text: string }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

  const projects = [
    {
      id: 1,
    title: "SenSights.AI",
    subtitle: "AI-Powered User Feedback Tool",
    description: "Built a real-world, AI-powered tool to streamline user feedback analysis, leveraging LLMs (like OpenAI's API) to synthesize customer surveys, feature requests, and sentiments into clear, actionable insights — enabling product managers and teams to move from raw feedback to strategic decisions faster.",
      imageSrc: "/images/sensights.png",
      tags: ["AI Integration", "Product Analytics", "UX Research", "API Development"],
    links: [
      {
        url: "https://v0-web-app-changes-needed-qqisck.vercel.app/import",
        text: "Live Demo"
      },
      {
        url: "https://medium.com/@prateek.shetty/i-built-an-ai-powered-product-with-no-coding-background-heres-what-i-learned-fdbb1a4243b1",
        text: "Medium Post"
      }
    ],
    metrics: [
      { value: "45%", label: "Reduction in Fall Incidents" },
      { value: "98%", label: "Detection Accuracy" },
      { value: "30min", label: "Avg. Response Time" }
    ]
    },
    {
      id: 2,
    title: "Uber Care",
    subtitle: "AI Wellness Platform for Uber Drivers",
    description: "Built a real-world, AI-driven mental wellness platform during Protothon 4.0 to support Uber drivers by providing personalized mindfulness exercises, real-time stress management tools, and direct access to support services — addressing mental health challenges with empathy-driven technology solutions.",
      imageSrc: "/images/uber-project.png",
      tags: ["Product Strategy", "User Research", "Figma", "AI"],
    links: [
      {
        url: "https://drive.google.com/file/d/1UsqNKBaXGg6XPO9S8p67cNfgL32rdLrB/view",
        text: "PRD Document"
      },
      {
        url: "https://www.figma.com/proto/ySvL6SG3kVt00nSfCmAOHw/Untitled?page-id=0%3A1&type=design&node-id=214-43&viewport=137%2C444%2C0.1&t=6NiiYOKElbfAvoiV-1&scaling=scale-down&starting-point-node-id=166%3A640",
        text: "View Prototype"
      }
    ],
    metrics: [
      { value: "99.9%", label: "Route Optimization" },
      { value: "200ms", label: "Processing Time" },
      { value: "$2B+", label: "Revenue Impact" }
    ]
    },
    {
      id: 3,
      title: "Budget Buddy",
    subtitle: "Personal Finance Management App",
    description: "Designed and launched a comprehensive personal finance app with features for expense tracking, budget planning, and investment insights. Integrated multiple banking APIs and implemented ML-based spending predictions.",
      imageSrc: "/images/budget-buddy.png",
      tags: ["MVP Definition", "Go-to-Market", "User Research", "FinTech"],
    links: [
      {
        url: "https://www.canva.com/design/DAGf2qpYkAc/XisMJzh3ta2joiEc9FkqAg/edit?utm_content=DAGf2qpYkAc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        text: "PRD Document"
      }
    ],
    metrics: [
      { value: "500K+", label: "Active Users" },
      { value: "4.8", label: "App Store Rating" },
      { value: "85%", label: "User Retention" }
    ]
    },
    {
      id: 4,
      title: "Smart Yoga Mat",
    subtitle: "IoT Fitness Product",
    description: "Led product development for an IoT-enabled yoga mat with pressure sensors to provide real-time feedback on posture and form. Integrated with mobile app for personalized coaching and progress tracking. Conducted user testing with 50+ yoga practitioners to refine the product experience.",
      imageSrc: "/images/smart-yoga-mat.png",
      tags: ["IoT", "Hardware Product", "Mobile App", "Fitness Tech"],
    links: [
      {
        url: "https://www.canva.com/design/DAGf2qpYkAc/XisMJzh3ta2joiEc9FkqAg/edit?utm_content=DAGf2qpYkAc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        text: "PRD Document"
      }
    ],
    metrics: [
      { value: "92%", label: "User Satisfaction" },
      { value: "40%", label: "Improved Form" },
      { value: "15min", label: "Avg. Daily Usage" }
    ]
    },
    {
      id: 5,
      title: "Closet Genie",
    subtitle: "Wardrobe Management App",
    description: "Developed a smart wardrobe management application that helps users organize their clothing items, create outfits, and make sustainable fashion choices. Implemented AI-powered recommendations based on weather, occasions, and personal style preferences.",
      imageSrc: "/images/closet-genie.png",
      tags: ["Mobile App", "AI Recommendations", "UX Design", "Sustainability"],
    links: [
      {
        url: "/pdfs/Team 5- PRD Presentation.pdf",
        text: "PRD Document"
      }
    ],
    metrics: [
      { value: "75K+", label: "Active Users" },
      { value: "4.6", label: "App Store Rating" },
      { value: "30%", label: "Reduced Shopping" }
    ]
  },
  {
    id: 6,
    title: "Amazon Prime Day Sales Strategy",
    subtitle: "E-commerce Sales Optimization",
    description: "Led the development of data-driven sales strategies for Amazon Prime Day, resulting in significant revenue growth. Implemented pricing optimization and promotional strategies that maximized sales during peak events.",
    imageSrc: "/images/Amazon Prime Day.jpg.webp",
    tags: ["E-commerce", "Data Analytics", "Sales Strategy", "Revenue Growth"],
    links: [
      {
        url: "/pdfs/PNS Project.pdf",
        text: "View Project"
      }
    ],
    metrics: [
      { value: "45%", label: "Revenue Increase" },
      { value: "2.3x", label: "Conversion Rate" },
      { value: "18%", label: "Customer Acquisition" }
    ]
  },
  {
    id: 7,
    title: "Ride Share Payment System",
    subtitle: "Fintech Integration",
    description: "Designed and implemented a secure payment processing system for a ride-sharing platform, handling millions of transactions daily. Integrated multiple payment gateways and implemented fraud detection mechanisms.",
    imageSrc: "/images/rideshare.jpg",
    tags: ["Fintech", "Payment Systems", "Security", "API Integration"],
    links: [
      {
        url: "/pdfs/rideshare-payment-case-study.pdf",
        text: "View Case Study"
      }
    ],
    metrics: [
      { value: "99.99%", label: "Transaction Success" },
      { value: "150ms", label: "Processing Time" },
      { value: "60%", label: "Fraud Reduction" }
    ]
  }
]

const skills = [
  {
    category: "Product Management",
    items: [
      { name: "Product Strategy" },
      { name: "Roadmap Development" },
      { name: "User Research" },
      { name: "A/B Testing" },
      { name: "Market Analysis" },
      { name: "GTM Strategy" },
      { name: "Agile/Scrum" },
      { name: "Product Analytics" },
      { name: "Feature Prioritization" },
      { name: "Stakeholder Management" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Jira" },
      { name: "Confluence" },
      { name: "Figma" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "SQL" },
      { name: "Python" },
      { name: "GitHub" },
      { name: "Slack" }
    ]
  },
  {
    category: "Analytics & Research",
    items: [
      { name: "Data Analysis" },
      { name: "User Testing" },
      { name: "Funnel Analysis" },
      { name: "Competitive Analysis" },
      { name: "Market Research" },
      { name: "Metrics & KPIs" },
      { name: "Data Visualization" },
      { name: "User Personas" },
      { name: "Journey Mapping" },
      { name: "A/B Testing" }
    ]
  }
]

  const experiences = [
  {
    title: "Product Manager",
    company: "Robert Bosch",
    period: "Apr 2024 - Dec 2024",
    duration: "8 months",
    logo: "/images/companies/Bosch_Logo.jpg",
    responsibilities: [
      "Conducted user research with 40+ customers, created journey maps & performed market analysis, identifying critical pain points that informed product enhancements and increased user engagement by 20%",
      "Defined product requirements, epics, and user stories, ensuring features align with customer needs and business goals",
      "Led end-to-end development of digital and hardware product roadmaps, using data-driven prioritization to accelerate time-to-market",
      "Collaborated cross-functionally with engineering, R&D, sales, & marketing to translate user needs into scalable, user-friendly solutions",
      "Analyzed product development metrics via custom dashboards, identifying bottlenecks that reduced development cycle time by 15%",
      "Built market intelligence databases & analytics dashboards tracking 12 competitors & 15 KPIs, enabling data-driven product positioning"
    ]
  },
  {
    title: "Graduate Teaching Assistant - Digital Product Management",
    company: "Northeastern University",
    period: "Jan 2025 - Present",
    duration: "Current",
    logo: "/images/companies/Northeastern.png",
    responsibilities: [
      "Provided mentorship on product management methodologies, user research, and market analysis to graduate students",
      "Led workshops on feature prioritization, competitive benchmarking, and data-driven decision-making",
      "Assisted in refining course materials, integrating latest UX/UI trends, product roadmaps, and GTM strategies",
      "Evaluated student projects, offering strategic feedback to enhance their understanding of customer-centric product development"
    ]
  },
    {
      title: "Account Manager",
      company: "Dell Technologies",
      period: "Jan 2022 - Aug 2023",
      duration: "1 year 8 months",
    logo: "/images/companies/dell_technologies-logo_brandlogos.net_kl1p4.png",
      responsibilities: [
        "Developed and implemented data-driven sales strategies, leading to a 10% YoY revenue increase",
        "Owned end-to-end product lifecycle management, streamlining go-to-market strategies and improving customer acquisition",
        "Created customer segmentation strategy for SMB clients, identifying key opportunities that increased conversion rates by 15%",
      "Collaborated with product teams to influence roadmap decisions based on customer feedback and market needs"
    ]
    },
    {
      title: "Senior Product Sales Strategist",
      company: "SKILL LYNC",
      period: "Feb 2021 - Jan 2022",
      duration: "1 year",
    logo: "/images/companies/Skillync.jpg",
      responsibilities: [
        "Led marketing campaigns across cross-functional teams, resulting in an 25% elevation in brand recognition and awareness",
        "Assisted market research and developed product strategies focusing on energy efficiency and sustainability in educational technologies",
        "Employed market research to identify and target customer needs, employed comprehensive data analysis for customer solution development, resulting in a 12% increase in enrollment through targeted promotions",
      "Promoted to Senior Sales Specialist, responsible for a team of 8 product sales associates ensuring project timelines and quality standards"
    ]
    },
    {
      title: "Product Specialist",
    company: "BYJU'S - The Learning App",
      period: "Jan 2020 - Jan 2021",
      duration: "1 year",
    logo: "/images/companies/BYJUS_Logo.jpg",
      responsibilities: [
        "Executed A/B testing strategy for digital user experience, refining features & improving customer satisfaction (CSAT) from 6.5 to 8.0",
        "Led cross-functional initiatives to streamline Agile product development, reducing time-to-market by 10%",
        "Identified conversion bottlenecks through funnel analysis, implementing UX improvements that increased conversion rates by 15%",
      "Collaborated with engineering teams to prioritize feature development based on user engagement, reducing development cycles by 12%"
    ]
  }
]

const education = [
  {
    degree: "Master of Science in Engineering Management",
    school: "Northeastern University",
    date: "May 2025",
    gpa: "3.8",
    logo: "/images/education/nrotheastern.png",
    courses: [
      "Digital Product Design & Management",
      "Engineering Project Management",
      "Customer-driven Innovation",
      "Economic Decision Making"
    ]
  },
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    school: "M. S. Ramaiah Institute of Technology",
    date: "Aug 2019",
    logo: "/images/education/Ramaiah.png",
    courses: [
      "Operations Management",
      "Management & Entrepreneurship",
      "Computer Aided Machine Design"
    ]
  }
]

const certifications = [
  {
    name: "AI for Product Management Course",
    issuer: "Pendo, Mind the Product & Google Cloud",
    date: "April 2025",
    logo: "/images/certifications/Ai for product management.png"
  },
  {
    name: "Aha! Professional Product Management",
    issuer: "Aha!",
    date: "March 2025",
    logo: "/images/certifications/aha.jpg"
  },
  {
    name: "Atlassian Agile Project Management",
    issuer: "Atlassian",
    date: "February 2025",
    logo: "/images/certifications/atlassian.jpg"
  }
]

const leadership = [
  {
    title: "Associate VP – Northstar, Aspiring Product Managers Club",
    organization: "Northeastern University",
    period: "Aug 2023 - Dec 2023",
    image: "/images/apmc_neu.jpg",
    responsibilities: [
      "Organized workshops for 100+ members, focusing on product management frameworks, data analytics, & strategy development",
      "Led a team of aspiring product managers, enhancing skill development through hands-on training & real-world case studies"
    ]
  }
]

const testimonials = [
  {
    quote: "I had the privilege of working with Prateek during his short tenure in Dell Technologies. Prateek stood out as an intelligent, quick learner and a go-getter team member. His engineering background gave him a distinct advantage, allowing him to quickly grasp Dell's product portfolio and penetrate his account territory effectively. Prateek's strengths lie in his exceptional customer engagement skills and his innate ability to sell to customers. He was an outstanding team player, highly collaborative when it comes to cross-functional business transactions. His customer-first approach enabled him to achieve high NPS and customer retention scores. While initially it took him some time to master the sales game, Prateek eventually excelled in selling to acquisition customers, securing significant IT solution wins that helped him meet his goals. His ambition and task-driven nature have earned him the reputation of having a high drive for results.",
    author: "Balamurugan Paramanandam",
    role: "Senior Manager - ANZ SMB Accounts at Dell Technologies",
    image: "/images/balamurugan.png",
    date: "February 21, 2025"
  }
]

const scrollToSection = (direction: 'up' | 'down' | 'left' | 'right', element: HTMLElement | null) => {
  if (!element) return;
  
  const scrollAmount = 400; // Adjust this value based on your card width
  
  switch (direction) {
    case 'left':
      element.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      break;
    case 'right':
      element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      break;
    case 'up':
      window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      break;
    case 'down':
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      break;
  }
};

const useScrollPosition = (elementId: string) => {
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  React.useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleScroll = () => {
      const isAtStart = element.scrollLeft === 0;
      const isAtEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 10;
      
      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    };

    element.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => element.removeEventListener('scroll', handleScroll);
  }, [elementId]);

  return { showLeftArrow, showRightArrow };
};

const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};

const ProjectDescription = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <p 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`text-gray-600 dark:text-gray-300 mb-4 cursor-pointer transition-all duration-300 ${
        isExpanded ? '' : 'line-clamp-3'
      }`}
    >
      {description}
    </p>
  );
};

const scrollToChat = () => {
  const chatButton = document.getElementById('chat-button');
  if (chatButton) {
    chatButton.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const { showLeftArrow, showRightArrow } = useScrollPosition('projectsContainer');
  const [showChat, setShowChat] = React.useState(false);
  
  const openChat = () => {
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navigation navItems={navItems} />
      
      {/* Hero Section with subtle soccer theme */}
      <section id="hero" className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted opacity-80"></div>
        {/* Soccer-themed subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808008_1px,transparent_1px),linear-gradient(-45deg,#80808008_1px,transparent_1px)] bg-[size:20px_20px] animate-[flow_20s_linear_infinite]"></div>
        <div className="container mx-auto max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
              Prateek Shetty
            </h1>
            <p className="mt-4 text-xl text-muted-foreground font-light">
              Product Manager & Digital Strategist
            </p>
            <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="font-light">Boston, MA</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6">
              <Link
                  href="https://github.com/PrateekShetty1"
                  target="_blank"
                className="text-[#333] dark:text-[#333] hover:text-[#2188ff] dark:hover:text-[#2188ff] transition-all transform hover:scale-110 hover:rotate-[-4deg]"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/prateeknshetty"
                  target="_blank"
                className="text-[#0077b5] dark:text-[#0077b5] hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-all transform hover:scale-110 hover:rotate-[4deg]"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:prateeknshetty@gmail.com"
                className="text-[#EA4335] dark:text-[#EA4335] hover:text-[#BB001B] dark:hover:text-[#BB001B] transition-all transform hover:scale-110 hover:rotate-[-4deg]"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center md:text-left">About Me</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="prose dark:prose-invert order-2 md:order-1">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Data-driven and user-obsessed Product Manager with a Master's in Engineering Management from Northeastern University and a track record of delivering high-impact products across global teams. I specialize in turning customer insights into actionable product strategies, defining clear roadmaps, and leading cross-functional execution from ideation to launch.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    With experience at Bosch, Dell, and BYJU'S, I've worked across hardware and digital ecosystems — conducting user research, writing detailed PRDs, building GTM plans, and optimizing features based on product analytics. My product decisions are grounded in user empathy, structured frameworks, and measurable outcomes.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    I thrive in fast-paced environments, excel at stakeholder collaboration, and am passionate about building intuitive, scalable solutions that solve real user problems.
                  </p>
                </div>
              </div>
            <motion.div
                className="relative order-1 md:order-2 flex flex-col items-center gap-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none z-10"></div>
                  <Image
                    src="/images/prateek-profile.png"
                    alt="Prateek Shetty"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <Link
                  href="/pdfs/Prateek Shetty-Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center px-6 py-2.5 bg-blue-100 hover:bg-blue-200 text-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-100 rounded-lg transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md group border border-blue-200 dark:border-blue-700"
                >
                  View Resume
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

        {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center md:text-left">Professional Experience</h2>
            <div className="mt-8 space-y-6">
            {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative group"
                >
                  {/* Soccer-themed accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{experience.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{experience.company}</p>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-gray-600 dark:text-gray-400">{experience.period}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{experience.duration}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 text-justify">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with Scroll Functionality */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Product Initiatives & Innovation</h2>
            
            <div className="relative">
              <div 
                id="projectsContainer"
                className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/30 dark:scrollbar-thumb-blue-400/20 dark:hover:scrollbar-thumb-blue-400/30"
          >
            {projects.map((project) => (
                  <div key={project.id} className="min-w-[300px] md:min-w-[400px] snap-center first:pl-0 last:pr-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900 relative group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                      
                      <div className="relative h-48">
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{project.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{project.subtitle}</p>
                        <ProjectDescription description={project.description} />
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-base md:text-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.links?.map((link, index) => (
                            <Link
                              key={index}
                              href={link.url}
                              target="_blank"
                              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            >
                              {link.text}
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {showLeftArrow && (
                <button 
                  onClick={() => scrollToSection('left', document.getElementById('projectsContainer'))}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all z-20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 flex items-center justify-center group"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              )}
              {showRightArrow && (
                <button 
                  onClick={() => scrollToSection('right', document.getElementById('projectsContainer'))}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all z-20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 flex items-center justify-center group"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              )}
            </div>
                  </motion.div>
        </div>
      </section>

        {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
            <div className="mt-8 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative group">
                  {/* Soccer-themed accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                    </div>
                  </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400">{edu.date}</p>
                      {edu.gpa && <p className="text-sm text-gray-500 dark:text-gray-500">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Relevant coursework:</p>
                    <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400">• {course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 relative">
        {/* Soccer-themed subtle pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808005_1px,transparent_1px),linear-gradient(-45deg,#80808005_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-8">Skills</h2>
            <div className="space-y-8">
              {skills.map((category) => (
                <div key={category.category} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md border border-blue-200 dark:border-blue-800 transition-colors hover:bg-blue-100 dark:hover:bg-blue-800/40"
                      >
                        {skill.name}
                      </span>
                    ))}
                    </div>
                  </div>
              ))}
            </div>
            </motion.div>
        </div>
      </section>

        {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
        </div>
      </section>

        {/* Leadership Section */}
      <section id="leadership" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Leadership & Community</h2>
            <div className="mt-8 space-y-6">
              {leadership.map((role, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                      <Image
                        src={role.image}
                        alt={`${role.organization} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{role.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{role.organization}</p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{role.period}</p>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {role.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300">• {responsibility}</li>
                        ))}
                  </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What People Say</h2>
          <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-justify">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                      </div>
                    </div>
            ))}
                    </div>
                    </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Get in Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a href="mailto:prateeknshetty@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        prateeknshetty@gmail.com
                      </a>
                    </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  <a href="https://linkedin.com/in/prateeknshetty" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        linkedin.com/in/prateeknshetty
                      </a>
                    </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <a href="tel:+18578912464" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +1 (857) 891-2464
                      </a>
                    </div>
              </div>
            </div>
            </motion.div>
          </div>
      </section>

      {/* Floating Chat Button */}
      <div id="chat-button" className="fixed right-8 bottom-8 z-50">
        <button
          data-chat-button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        >
          {showChat ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm font-medium">Connect</span>
            </>
          )}
        </button>

        {showChat && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute bottom-0 right-0 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-blue-100 dark:border-blue-900 overflow-hidden transform -translate-y-16"
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
              <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Let's Connect!</h3>
                    <p className="text-sm text-blue-100">I'll get back to you soon</p>
                    </div>
                    </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
          </div>
        </div>
            <div className="p-6">
              <form action={async (formData) => {
                try {
                  await sendEmail(formData);
                  setShowChat(false);
                } catch (error) {
                  console.error('Failed to send message:', error);
                }
              }} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
          </div>
          </motion.div>
        )}
        </div>
    </div>
  )
}
