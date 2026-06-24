import { ArrowUpRight} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion } from "framer-motion";
import { slideInRight, fadeIn } from "../utils/varaint";
const projects = [
  {
    title: "DigiScholexa - Dynamic School Management System",
    description:
      "Contributed to the Design and development of DigiScholexa solution with the experience of running school management systems, we built a system that do not only solve the issue of running school effortlessly but solve all the bottleneck other School Management Systems suffer.",
    image: "/projects/DigiScholexa Site.png",
    tags: ["NODE.js", "Express.js","React.js", "Typescript", "PostgreSQL"],
    link: "https://digischolexa.com/",
    github: "#",
  },
    {
    title: "CRM Dashboard – VIP Express Tourism Limited",
    description:
      "Designed and developed a CRM solution for VIP Express Tourism Limited to manage customer data, monitor interactions, streamline communication, and drive more efficient relationship management.  integrating data from their core Provision system via SQL views and a dedicated DbContext, while automating promotional campaigns and client correspondence workflows to improve engagement and operational efficiency.",
    image: "/projects/CRM Dashboard.png",
    tags: ["ASP.Net Core", "Angular", "Typescript", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Debt Recovery Platform – VIP Express Tourism Limited",
    description:
      "Developed a debt recovery platform for VIP Express Tourism Limited to manage outstanding customer payments, track recovery progress, and improve follow-up efficiency. The system streamlined debt monitoring by centralizing debtor records, repayment information, and recovery activities, while supporting automated reminders and communication workflows to improve collection processes and operational visibility.",
    image: "/projects/DR Dashboard.png",
    tags: ["ASP.Net", "Vue.js", "MSSQL", "Bootstrap"],
    link: "#",
    github: "#",
  },
   {
    title: "Fairsure e-Payment website",
    description:
      "Contributed to the development of the Fairsure Payment platform by building frontend components for a fintech solution that supports payment gateway, checkout, and payment links. Worked on responsive interfaces, improved user flows, and helped create a seamless experience for businesses managing digital payments online.",
    image: "/projects/Fairsure website.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://fairsurepayment.com.ng/",
    github: "#",
  },
     {
    title: "VIP Express Tourism Limited website",
    description:
      "Developed the VIP Express Tourism Limited platform.",
    image: "/projects/VIP-Express-Website.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://www.vipexpressnigeria.com/how-to-travel/vip-express-tourism-limited/",
    github: "#",
  },
  {
    title: "Porfolio",
    description:
      "Personal portfolio built using React.js, javascript and tailwind CSS",
    image: "/projects/portfolio website.png",
    tags: ["React", "Tailwind CSS", "Javascript"],
    link: "#",
    github: "#",
  },
 
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mx-auto max-w-3xl mb-16"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {/* <Github className="w-5 h-5" /> */}
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
