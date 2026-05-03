import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  // Refresh ScrollTrigger after all lazy-loaded sections settle
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (boxes.length === 0) return;
      const workSection = document.querySelector(".work-section");
      if (!workSection) return;
      const sectionWidth = workSection.getBoundingClientRect().width;
      const boxWidth = boxes[0].getBoundingClientRect().width;
      translateX = boxWidth * boxes.length - sectionWidth;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
        onRefresh: setTranslateX,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "AI Interview Platform",
              category: "AI-Powered Mock Interview System",
              tools: "React.js, Node.js, Express.js, MongoDB, JWT, Google Gemini API",
              image: "/images/ai-interview.png",
              link: "https://github.com/gorkhagithub",
            },
            {
              title: "Blog-Sphere",
              category: "Full-Stack Blogging Platform",
              tools: "React.js, Node.js, Express.js, MongoDB, JWT",
              image: "/images/blog-sphere.png",
              link: "https://github.com/gorkhagithub",
            },
            {
              title: "EasePark",
              category: "Smart Car Parking System",
              tools: "React.js, Node.js, MongoDB, CSS",
              image: "/images/easepark.png",
              link: "https://github.com/gorkhagithub/easepark",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
