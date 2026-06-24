import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { slideInRight, fadeInUp, fadeIn } from "../utils/varaint";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div className="animate-fade-in"
              variants={slideInRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              >
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>

            <motion.div className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"
              variants={fadeInUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </motion.div>

            <motion.div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200"
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in .Net, Java SpringBoot, Laravel, React, Angular, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            <motion.div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300"
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </motion.div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
