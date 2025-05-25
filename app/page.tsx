'use client';

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const developerRef = useRef(null);
  const frontendRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const developer = developerRef.current;
    const frontend = frontendRef.current;
    const hero = heroRef.current;
    const about = aboutRef.current;
    const experience = experienceRef.current;
    const tl = gsap.timeline();

    gsap.registerPlugin(SplitText);

    let splitAbout = SplitText.create(about, {
      type: 'words',
    });

    let splitExperience = SplitText.create(experience, {
      type: 'words',
    });

    gsap.from(splitAbout.words, {
      duration: 2,
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: about,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true
      }
    });

    gsap.from(splitExperience.words, {
      duration: 2,
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: experience,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true
      }
    });

    tl.to(section, {
      duration: 2,
      text: 'MAXIM IVANOV',
      stagger: 0.02,
      ease: 'power2.inOut',
    })
      .to(section, {
        duration: 1,
        color: '#f43f5e',
        ease: 'power2.inOut'
      });

    gsap.to(developer, {
      xPercent: 8000,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(frontend, {
      xPercent: -9000,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen bg-black text-white" role="main">
      {/* Left Sidebar */}
      <aside className="fixed w-[200px] 2xl:w-[300px] h-screen border-r border-zinc-800 px-6 2xl:px-12 py-8 hidden md:block" role="complementary" aria-label="Navigation">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Link href="#hero" className="block" aria-label="Go to top">
              <div className="mb-8 2xl:mb-16">
                <h1 className="text-2xl 2xl:text-3xl font-bold">Max</h1>
                <p className="text-base 2xl:text-lg text-zinc-400">Developer</p>
              </div>
            </Link>
            <nav className="space-y-6 2xl:space-y-8" aria-label="Main navigation">
              <a
                href="#about"
                className="block text-xl 2xl:text-2xl text-zinc-400 tracking-[.15em] 2xl:tracking-[.25em] hover:tracking-normal transition-all duration-300 hover:text-[#f43f5e]"
                aria-label="Go to About section"
              >
                ABOUT
              </a>
              <a
                href="#experience"
                className="block text-xl 2xl:text-2xl text-zinc-400 tracking-[.15em] 2xl:tracking-[.25em] hover:tracking-normal transition-all duration-300 hover:text-[#f43f5e]"
                aria-label="Go to Experience section"
              >
                EXPERIENCE
              </a>
              <a
                href="#projects"
                className="block text-xl 2xl:text-2xl text-zinc-400 tracking-[.15em] 2xl:tracking-[.25em] hover:tracking-normal transition-all duration-300 hover:text-[#f43f5e]"
                aria-label="Go to Projects section"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="block text-xl 2xl:text-2xl text-zinc-400 tracking-[.15em] 2xl:tracking-[.25em] hover:tracking-normal transition-all duration-300 hover:text-[#f43f5e]"
                aria-label="Go to Contact section"
              >
                CONTACT
              </a>
            </nav>
          </div>
          <div className="flex gap-4 2xl:gap-6 text-zinc-400 mx-auto" role="navigation" aria-label="Social links">
            <Link href="https://github.com/retr013" target="_blank" className="text-xl 2xl:text-2xl hover:text-[#f43f5e] transition-colors" aria-label="Visit GitHub profile">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/max-ivanov-04ab65221/" target="_blank" className="text-xl 2xl:text-2xl hover:text-[#f43f5e] transition-colors" aria-label="Visit LinkedIn profile">
              <FaLinkedin />
            </Link>
            <Link href="mailto:stagnirovat@gmail.com" className="text-xl 2xl:text-2xl hover:text-[#f43f5e] transition-colors" aria-label="Send email">
              <FaEnvelope />
            </Link>
            <Link href="tel:+447491500294" className="text-xl 2xl:text-2xl hover:text-[#f43f5e] transition-colors" aria-label="Call phone number">
              <FaPhone />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:ml-[200px] 2xl:ml-[300px] w-full overflow-hidden" id="hero" ref={heroRef}>
        <div className="w-full px-6 md:px-12 pt-8 md:pt-8 xl:pt-8 pb-6 md:pb-16">
          {/* Hero Section */}
          <section className="mb-16 md:mb-32 mt-8 md:mt-0" aria-label="Hero section">
            <div className="space-y-4 md:space-y-8">
              <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] xl:max-2xl:text-[15rem] 3xl:text-[20rem] 4k:text-[25rem] font-bold leading-[0.8] tracking-[-0.05em] overflow-hidden flex flex-col gap-4 md:gap-10">
                <div className="relative">
                  <span className="font-light relative z-10 text-[5rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] 2xl:text-[15rem] 3xl:text-[20rem] 4k:text-[23.5rem] leading-[0.8] tracking-[-0.05em] text-white" ref={sectionRef} aria-label="Name">максим иванов</span>
                </div>
                <span className="italic text-white translate-x-0 text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] macbook:text-[13.5rem] 3xl:text-[19rem] 4k:text-[23.5rem] overflow-hidden" ref={developerRef} aria-label="Role">DEVELOPER</span>
                <span className="text-black transition-all duration-600 ease-out hover:duration-600 [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]
                                hover:text-white hover:[text-shadow:none] translate-x-0 text-[5rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] 2xl:text-[15rem] 3xl:text-[20rem] 4k:text-[23.5rem] overflow-hidden" ref={frontendRef} aria-label="Specialization">FRONT END</span>
              </h1>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16 md:mb-32 max-w-4xl" ref={aboutRef} aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-4xl md:text-5xl xl:text-7xl font-bold mb-8 md:mb-12">About</h2>
            <div className="prose prose-invert prose-lg">
              <p className="text-zinc-400 text-lg md:text-xl">
                Hi, I'm Max — a front-end developer from Ukraine with a passion for building clean, responsive, and user-focused web experiences.
                I specialize in React, Next.js, TypeScript, and Tailwind CSS, and I love turning complex problems into simple, intuitive interfaces. I take pride in writing clean code, sweating the small details, and collaborating with teams to build products that actually help people.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16 md:mb-32" aria-labelledby="experience-heading" ref={experienceRef}>
            <h2 id="experience-heading" className="text-4xl md:text-5xl xl:text-7xl font-bold mb-8 md:mb-12">Experience</h2>
            <div className="space-y-16">
              <div className="border-l-2 border-[#f43f5e] pl-8">
                <h3 className="text-2xl font-semibold">Front-End Developer</h3>
                <p className="text-zinc-400 mb-4 text-xl">Personal Projects • 2020 - Present</p>

                <div className="space-y-12 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Retro – Minimalist Social Network</h4>
                    <p className="text-zinc-400 mb-4 text-lg md:text-xl">A nostalgic, lightweight social platform focused on clean UI and user simplicity.</p>
                    <ul className="list-disc list-inside text-zinc-400 space-y-2 marker:text-[#f43f5e]" role="list">
                      <li>Developed a fully responsive front-end using React, TypeScript, and CSS Modules</li>
                      <li>Designed and implemented post feeds, profiles, and interactions with a user-friendly interface</li>
                      <li>Focused on performance, accessibility, and responsive layout across devices</li>
                      <li>Built as a UI/UX experiment to explore minimal social interaction models</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">FlowSphere – Employee Management System</h4>
                    <p className="text-zinc-400 mb-4 text-lg md:text-xl">A full-stack internal tool for managing teams, time tracking, and workflows.</p>
                    <ul className="list-disc list-inside text-zinc-400 space-y-2 marker:text-[#f43f5e]" role="list">
                      <li>Built with React, Next.js, TypeScript, and Tailwind CSS</li>
                      <li>Integrated MySQL database, NextAuth for secure authentication, and deployed on Vercel</li>
                      <li>Features include authentication-based access control and employee dashboards</li>
                      <li>Designed a scalable, component-based architecture for maintainability and future expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16 md:mb-32" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="text-4xl md:text-5xl xl:text-7xl font-bold mb-8 md:mb-12">Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="border border-zinc-800 rounded-lg p-6 md:p-8 hover:border-[#f43f5e] transition-all duration-300 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">FlowSphere</h3>
                  <p className="text-zinc-400 mb-4 md:mb-6 text-base md:text-xl">
                    A full-stack employee management system built with Next.js, TypeScript, and Prisma. Features include authentication,
                    role-based access control, and employee dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6" role="list" aria-label="Technologies used">
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">Next.js</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">TypeScript</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">Prisma</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">Tailwind CSS</span>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 mt-auto">
                  <a href="https://github.com/retr013/FlowSphere" target="_blank" className="text-base md:text-lg text-zinc-400 hover:text-[#f43f5e] transition-colors" aria-label="View FlowSphere on GitHub">GitHub →</a>
                  <a href="https://flow-sphere-cyan.vercel.app" target="_blank" className="text-base md:text-lg text-zinc-400 hover:text-[#f43f5e] transition-colors" aria-label="View FlowSphere live demo">Live Demo →</a>
                </div>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 md:p-8 hover:border-[#f43f5e] transition-all duration-300 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Retro Social Network</h3>
                  <p className="text-zinc-400 mb-4 md:mb-6 text-base md:text-xl">
                    A minimalist social platform built with React, focusing on clean UI and user simplicity. Features include post feeds,
                    user profiles, and real-time interactions.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6" role="list" aria-label="Technologies used">
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">React</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">JavaScript</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">CSS</span>
                    <span className="px-2 md:px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm">HTML</span>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 mt-auto">
                  <a href="https://github.com/retr013/retro" target="_blank" className="text-base md:text-lg text-zinc-400 hover:text-[#f43f5e] transition-colors" aria-label="View Retro Social Network on GitHub">GitHub →</a>
                  <a href="https://retr013.github.io/retro/" target="_blank" className="text-base md:text-lg text-zinc-400 hover:text-[#f43f5e] transition-colors" aria-label="View Retro Social Network live demo">Live Demo →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 md:mb-32" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-4xl md:text-5xl xl:text-7xl font-bold mb-8 md:mb-12">Contact</h2>
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg md:text-xl">
                Get in touch with me at{' '}
                <a href="mailto:stagnirovat@gmail.com" className="text-[#f43f5e] hover:text-[#f43f5e]/70 transition-colors" aria-label="Send email to stagnirovat@gmail.com">
                  stagnirovat@gmail.com
                </a>
                {' '}or:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-zinc-400 text-lg md:text-xl" role="navigation" aria-label="Contact links">
                <a href="https://github.com/retr013" target="_blank" className="flex items-center gap-2 hover:text-[#f43f5e] transition-colors" aria-label="Visit GitHub profile">
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/max-ivanov-04ab65221/" target="_blank" className="flex items-center gap-2 hover:text-[#f43f5e] transition-colors" aria-label="Visit LinkedIn profile">
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="tel:+447491500294" className="flex items-center gap-2 hover:text-[#f43f5e] transition-colors" aria-label="Call +44 7491 500294">
                  <FaPhone size={24} />
                  <span>+44 7491 500294</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
