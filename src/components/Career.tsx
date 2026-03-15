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
                <h4>Founder & Community Leader</h4>
                <h5>The Hustlers Community</h5>
              </div>
              <h3>2024 — PRESENT</h3>
            </div>
            <p>
              Built and grew a tech community with 500+ active members.
              Organized workshops and collaborative learning sessions.
              Created a space where students and developers connect and build.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>HackHorizon 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Represented St. Xavier's College, Ranchi.
              Participated with team HustleOps.
              Built solutions under hackathon deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>RoboFest Champion</h4>
                <h5>Infoage Institute</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Secured first place in RoboFest.
              Built an IoT-based Smart Home system.
              Developed an autonomous Rubik’s Cube solver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
