import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

interface Patent {
  id: string;
  title: string;
  abstract: string;
  link?: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface ProjectsGridProps {
  projects?: Project[];
  patents?: Patent[];
  achievements?: Achievement[];
}

const ProjectsGrid = ({
  projects = [
    {
      id: "1",
      title: "TaskPilot",
      description:
        "A full-stack task management web app that allows users to create, assign, and track tasks with deadlines. Built with the MERN stack, it features Gmail-based reminders and a responsive UI for improved productivity.",
      image:
        "others/taskpilot.png",
      link: "https://taskpilot-yash-mern.netlify.app/",
      github: "https://github.com/YashAgnihotri/TaskPilot",
    },
    {
      id: "2",
      title: "Coffee Chain Dashboard",
      description:
        "Coffee Chain Dashboard is an interactive Tableau-based data visualization project that consolidates sales data from five regions to deliver real-time insights, streamline reporting, and support strategic business decisions.",
      image:
        "others/dashboard.png",
      link: "https://public.tableau.com/app/profile/yash.agnihotri/viz/COFFEECHAINDASHBOARD_17218433455860/COFFEECHAINDASHBOARD?publish=yes",
      github:
        "https://public.tableau.com/app/profile/yash.agnihotri/viz/COFFEECHAINDASHBOARD_17218433455860/COFFEECHAINDASHBOARD?publish=yes",
    },
    {
      id: "3",
      title: "N-Knight Visualizer",
      description:
        "N-Knight is a C++-based algorithmic project that solves the N-Knights problem using backtracking. It efficiently places knights on an N×N chessboard such that no two knights threaten each other, demonstrating recursion and constraint satisfaction.",
      image:
        "others/chess.jpg",
      link: "https://github.com/YashAgnihotri/N-Knight",
    },
    {
      id: "4",
      title: "Hungry Man",
      description:
        "Hungry Man is a responsive food delivery landing page built with HTML, CSS, and JavaScript. It’s optimized for performance across 10+ device types and focuses on smooth navigation, fast load times, and enhanced user experience.",
      image:
        "others/hungry.png",
      link: "https://yashagnihotri.github.io/Hungry-Man_KOC24_CipherSchools",
      github: "https://github.com/YashAgnihotri/Hungry-Man_KOC24_CipherSchools",
    },
    // {
    //   id: "5",
    //   title: "Blockchain Explorer",
    //   description:
    //     "Tool for visualizing and analyzing blockchain transactions and data.",
    //   image:
    //     "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    //   link: "#",
    //   github: "https://github.com",
    // },
  ],
  patents = [
    {
      id: "1",
      title: "Biometric Trigger Authorization System for Firearm Security",
      abstract:
        "A compact, multi-modal biometric system integrated into a firearm grip that enables trigger activation only upon real-time authentication of authorized law enforcement personnel.",
      link: "#",
    },
  ],
  achievements = [
    {
      id: "1",
      title: "Top 300 Global Rank – CodeChef Starters 131",
      description:
        "Achieved a global rank under 300 out of 28,000+ participants in CodeChef’s Division 3 contest, showcasing strong programming skills and competitive coding proficiency.",
      date: "2024",
    },
    {
      id: "2",
      title: "Hackathon Participation – Infineon",
      description:
        "Collaborated in a team to solve real-world challenges during the Infineon Hackathon, gaining hands-on experience in rapid prototyping, teamwork, and innovative problem-solving.",
      date: "2025",
    },
    {
      id: "3",
      title: "Solved 500+ Competitive Programming Problems",
      description:
        "Demonstrated strong problem-solving and algorithmic thinking by solving over 500 problems across platforms like CodeChef, LeetCode, and GeeksforGeeks.",
      date: "2022-Present",
    },
  ],
}: ProjectsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Projects Section */}
        <div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-white"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={itemVariants}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(3, 5).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={itemVariants}
              />
            ))}
          </div>
        </div>

        {/* Patents and Achievements Section */}
        <div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-white"
          >
            Patents & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patents Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Patents</h3>
              {patents.map((patent) => (
                <PatentCard key={patent.id} patent={patent} />
              ))}
            </motion.div>

            {/* Achievements Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Achievements
              </h3>
              {achievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({
  project,
  variants,
}: {
  project: Project;
  variants: any;
}) => {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="overflow-hidden h-full bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <div className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <CardContent className="p-5 space-y-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm flex-grow">
            {project.description}
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <Button
              asChild
              variant="default"
              className="group bg-zinc-800 hover:bg-zinc-700"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <span>View Project</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {project.github && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="border-zinc-700 hover:bg-zinc-800"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PatentCard = ({ patent }: { patent: Patent }) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
      <CardContent className="p-5 space-y-3">
        <h4 className="text-lg font-semibold text-white">{patent.title}</h4>
        <p className="text-gray-400 text-sm">{patent.abstract}</p>
        {patent.link && (
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-blue-400 hover:text-blue-300"
          >
            <a href={patent.link} target="_blank" rel="noopener noreferrer">
              <span>View Patent Document</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
      <CardContent className="p-5 flex items-start space-x-4">
        <div className="mt-1">
          <Award className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white">
              {achievement.title}
            </h4>
            <span className="text-xs text-gray-500">{achievement.date}</span>
          </div>
          <p className="text-gray-400 text-sm">{achievement.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsGrid;
