import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "DescriptAI",
    category: "Web development",
    description: "AI-powered product description generator. Feed it a product name, category, and a few keywords — get back three publish-ready descriptions in seconds.",
    tools: "Next.js, Supabase, AI, Tailwind, React",
    image: "/images/descriptai.png",
    url: "https://descript-ai.vercel.app",
    github: "https://github.com/AtulSahu778/DescriptAI",
  },
  {
    title: "AttendEase",
    category: "Applications",
    description: "A streamlined Android application built with React Native and Expo for managing and tracking student attendance with an intuitive mobile interface.",
    tools: "React Native, Expo, Android App",
    image: "/images/attendease-v2.png",
    url: "https://attendeaseapp.vercel.app",
    github: "https://github.com/AtulSahu778/attendanceEase",
  },
  {
    title: "SXC-ScholarHub",
    category: "Web development",
    description: "Academic resource hub for St. Xavier's College students. Centralized platform for notes, papers, and assignments with smart search and personalized dashboards.",
    tools: "HTML, CSS, JavaScript, Tailwind, Responsive",
    image: "/images/scholarhub.png",
    url: "https://sxchub.vercel.app",
    github: "https://github.com/AtulSahu778/",
  },
  {
    title: "PentaFrames",
    category: "Web development",
    description: "A creative multi-frame web experience showcasing dynamic layouts and smooth visual transitions.",
    tools: "HTML, CSS, JavaScript, Responsive",
    image: "/images/pentaframes.png",
    url: "https://pentaframes.vercel.app/",
    github: "#",
  },
  {
    title: "Portfolio",
    category: "Web development",
    description: "My personal portfolio website built with React, Tailwind CSS, showcasing my projects and skills with a modern design.",
    tools: "React, Tailwind, Responsive",
    image: "/images/preview.png",
    url: "https://atulworks.vercel.app/",
    github: "https://github.com/AtulSahu778/portfolio",
  },
  {
    title: "Apple Clone",
    category: "Web development",
    description: "Pixel-perfect recreation of Apple's website. Smooth animations, clean design, and responsive across all devices.",
    tools: "HTML, CSS, JavaScript, Tailwind, Responsive",
    image: "/images/apple1.png",
    url: "https://applebyatul.vercel.app/",
    github: "https://github.com/AtulSahu778/apple-clone",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          {project.url && project.url !== '#' && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" data-cursor="hover">
                              <FaExternalLinkAlt /> Live Site
                            </a>
                          )}
                          {project.github && project.github !== '#' && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" data-cursor="hover">
                              <FaGithub /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
