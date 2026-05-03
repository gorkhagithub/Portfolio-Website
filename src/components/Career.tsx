import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>YBI Foundation</h5>
              </div>
              <h3>Mar 2024 - Jun 2024</h3>
            </div>
            <p>
              Built and evaluated ML models (Regression, Decision Trees, Random Forest, Neural Networks). Optimized preprocessing workflows, reducing memory usage by 60%. Improved CTR prediction accuracy by 18% using A/B testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Octanet Service Pvt. Ltd.</h5>
              </div>
              <h3>Dec 2023 - Feb 2024</h3>
            </div>
            <p>
              Developed 3+ responsive web applications, improving page load performance by 25%. Designed and deployed 5+ RESTful APIs using Node.js and Express, increasing user engagement by 20%. Refactored codebase, reducing complexity by 35% and infrastructure cost by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Dr. A.P.J. Abdul Kalam Institute of Technology</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              CGPA: 8.24 / 10. Secretary of Sports Club & TechNo Club, leading 100+ members. 1st Place in Drawing Competition (UTU, 2022). 2nd Place in Project Exhibition (AKIT, 2023).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
