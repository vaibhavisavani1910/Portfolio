import "./About.css";
import profile_img from "../../assets/vaibhavi12.jpg";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Circular Progress Bar component
const CircularProgressBar = ({ percentage, skill, icon }) => (
  <div
    className="circular-skill"
    role="progressbar"
    aria-label={`${skill} skill level: ${percentage}%`}
    aria-valuenow={percentage}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-hidden="true"
  >
    <svg
      className="circular-progress"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle
        className="circular-bg"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="10"
        fill="none"
      />
      <circle
        className="circular-bar"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="10"
        fill="none"
        strokeDasharray={2 * Math.PI * 45}
        strokeDashoffset={2 * Math.PI * 45 * (1 - percentage / 100)}
      />
      <text x="50" y="55" textAnchor="middle" className="circular-text">
        {percentage}%
      </text>
    </svg>
    <div className="circular-label">
      {icon && <i className={icon}></i>} {skill}
    </div>
  </div>
);

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const About = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Remove other parallax transforms

  return (
    <section id="about" className="about section" ref={aboutRef}>
      {/* Background Effects - static */}
      <div className="about-background">
        <div className="about-gradient gradient-1"></div>
        <div className="about-gradient gradient-2"></div>
        <div className="about-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">
          About <span className="title-accent">Me</span>
        </h2>
        <p className="section-subtitle">
          Get to know me better and understand my journey in the world of
          technology
        </p>

        <div className="about-content">
          {/* About Image with Parallax */}
          <motion.div
            className="about-image"
            style={{ y: imageY }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="image-wrapper">
              <img
                src={profile_img}
                alt="Vaibhavi Savani"
                role="img"
                aria-label="Vaibhavi Savani professional headshot"
              />
              <div className="image-background"></div>

              {/* Elegant Border Animation */}
              <div className="image-border-animation">
                <div className="border-line border-line-1"></div>
                <div className="border-line border-line-2"></div>
                <div className="border-line border-line-3"></div>
                <div className="border-line border-line-4"></div>
              </div>
            </div>
          </motion.div>

          {/* About Text - static */}
          <div className="about-text">
            <div className="about-intro">
              <h3>
                Software Developer{" "}
                <span className="title-accent">| AI & LLM Enthusiast </span>
              </h3>
              <p>
              I’m a Software Developer with a strong foundation in full-stack development and a growing expertise in AI and large language models (LLMs). 
              My journey began with building web applications and enterprise systems using technologies like Python, JavaScript, Flask, AngularJS, and 
              various databases, but I have increasingly focused on leveraging AI to solve real-world problems.
              </p>
              <p>
              I recently completed my Master’s in Artificial Intelligence at San Jose State University, specializing in LLMs, NLP, and machine learning. 
              From developing AI-powered medical triage assistants and deep learning models for environmental analysis to building scalable enterprise applications,
               I enjoy bridging the gap between robust software engineering and intelligent systems that deliver tangible impact.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills - Circular Progress Bars */}
        {/* <div className="about-skills">
          <h3>Technical Skills</h3>
          <div className="circular-skills-row">
            <CircularProgressBar
              percentage={95}
              skill="Python"
              icon="fab fa-python"
            />{" "}
            <CircularProgressBar
              percentage={88}
              skill="FastAPI"
              icon="fa-solid fa-bolt-lightning"
            />
            <CircularProgressBar
              percentage={87}
              skill="Langchain"
              icon="fa-solid fa-link"
            />
            <CircularProgressBar
              percentage={86}
              skill="Ollama"
              icon="fa-solid fa-brain"
            />
            <CircularProgressBar
              percentage={85}
              skill="Docker"
              icon="fa-brands fa-docker"
            />
            <CircularProgressBar
              percentage={84}
              skill="Prompt Engineering"
              icon="fa-solid fa-terminal"
            />
            <CircularProgressBar
              percentage={80}
              skill="PostgreSQL / SQLite"
              icon="fa-solid fa-database"
            />
          </div>
          <div className="circular-skills-row">
            <CircularProgressBar
              percentage={90}
              skill="React.js"
              icon="fab fa-react"
            />
            <CircularProgressBar
              percentage={85}
              skill="Node.js"
              icon="fab fa-node"
            />
            <CircularProgressBar
              percentage={80}
              skill="Express"
              icon="fab fa-node-js"
            />
            <CircularProgressBar
              percentage={75}
              skill="MongoDB"
              icon="fas fa-database"
            />
            <CircularProgressBar
              percentage={95}
              skill="JavaScript"
              icon="fab fa-js"
            />
            <CircularProgressBar
              percentage={85}
              skill="Git"
              icon="fab fa-git-alt"
            />
          </div>
        </div> */}


        {/* Vertical Spacer between sections */}
        <div className="about-section-spacer"></div>

        {/* Professional Experience - Timeline Layout */}
        <div id="Experience" className="about-experience-timeline">
          {/* <h4>Professional Experience</h4> */}
          <h2 className="section-title">
          Professional <span className="title-accent">Experience</span>
          </h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">Jan 2024 – May 2025</span>
                <h5>Teaching Assistant</h5>
                <div className="timeline-company">San Jose State University</div>
                <p>
                  Supported Machine Learning and Introduction to AI courses by conducting office hours, 
                  grading assignments and exams, and designing assessments. Facilitated student understanding 
                  of algorithms, model evaluation, and real-world AI applications through one-on-one mentoring 
                  and hands-on guidance.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">May 2024 – Aug 2024</span>
                <h5>Software Engineer Intern</h5>
                <div className="timeline-company">Guardant Health</div>
                <p>
                  Built and fine-tuned a DeBERTa-based NLP model for Aspect-Based Sentiment Analysis (ABSA) 
                  on customer survey data, deployed using AWS SageMaker. Developed an end-to-end automated 
                  ETL pipeline using AWS Glue, S3, Airflow, and ECR, enabling real-time analytics and seamless 
                  integration into Tableau dashboards.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">Aug 2022 – Dec 2022</span>
                <h5>Software Engineer</h5>
                <div className="timeline-company">Celonis</div>
                <p>
                  Designed and deployed an NLP-powered email intent classification pipeline, reducing manual 
                  triage workload by 93%. Developed AngularJS front-end components and REST APIs for an 
                  order-to-cash analytics product used by enterprise clients worldwide.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">Jun 2019 – Aug 2022</span>
                <h5>Software Engineer</h5>
                <div className="timeline-company">Tata Consultancy Services</div>
                <p>
                  Optimized backend performance for large-scale enterprise systems, achieving a 25% improvement 
                  in query efficiency through SQL indexing and tuning. Led a team of 3 engineers, promoting code 
                  quality and agile practices, while developing REST APIs and modular frameworks for financial 
                  and insurance domain clients.
                </p>
              </div>
            </div>
          </div>



            <div className="about-section-spacer"></div>

            <div className="about-experience-timeline">
              <h4>Publications</h4>
              <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2024</span>
                  <h5>San Jose Urban Forest  
                    <a
                      href="https://link.springer.com/chapter/10.1007/978-981-96-6400-9_11"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: "8px",
                        textDecoration: "none",
                        color: "#3b82f6", // Tailwind blue-500
                        fontWeight: "500",
                        fontSize: "0.95rem",
                        transition: "color 0.2s ease-in-out",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#1d4ed8")} // darker blue on hover
                      onMouseLeave={(e) => (e.target.style.color = "#3b82f6")}
                      title="View Publication"
                    >
                      Link 🔗
                    </a>

                  </h5>
                  <div className="timeline-company">2024 Student Research Winner</div>
                  <p>
                    Developed a deep learning approach for analyzing aerial imagery to assess tree canopy coverage 
                    for the City of San Jose. Applied a K-Means clustering algorithm to compute GIST descriptors 
                    and identify optimal training data. Leveraged DetectTree and the DeepForest algorithm, 
                    achieving a 0.65 box recall. Utilized GeoJSON and ArcGIS for spatial analysis and visualization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
