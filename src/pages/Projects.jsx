export default function Projects() {
  return (
    <div className="page">
      <h2>My Projects</h2>

      <div className="cards">
        <div className="card">
          <img src="/project1.jpg" alt="Project 1" className="card-img" />
          <h3>React Portfolio Website</h3>
          <p>
            Built a 5-page personal portfolio using React and React Router.
          </p>
        </div>

        <div className="card">
          <img src="/project2.jpg" alt="Project 2" className="card-img" />
          <h3>Pharmacy Management System</h3>
          <p>
            Developed inventory tracking and billing features for a pharmacy.
          </p>
        </div>

        <div className="card">
          <img src="/project3.jpg" alt="Project 3" className="card-img" />
          <h3>Airline Booking Web App</h3>
          <p>
            Designed UI and navigation flow for an airline booking system.
          </p>
        </div>
      </div>
    </div>
  );
}
