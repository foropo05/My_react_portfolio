export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      desc: "Responsive websites and web apps using modern tools and clean UI design.",
      items: ["Frontend Development", "React Components", "UI Improvements", "Performance Basics"],
    },
    {
      title: "Database & Data Handling",
      icon: "🗄️",
      desc: "Organized data structures and basic database design for reliable applications.",
      items: ["Database Design", "Data Validation", "CRUD Concepts", "Simple Queries"],
    },
    {
      title: "Digital Health Support",
      icon: "🩺",
      desc: "Student-focused solutions for healthcare technology and user-friendly health apps.",
      items: ["Health App Concepts", "User-Centered Design", "Data Accuracy", "Privacy Awareness"],
    },
    {
      title: "Project Assistance",
      icon: "🧩",
      desc: "Support with portfolio projects, documentation, and improving overall presentation.",
      items: ["Documentation", "Wireframes/Prototypes", "Testing Basics", "GitHub Commits"],
    },
  ];

  return (
    <div className="page">
      <div className="services-header">
        <h1>My Services</h1>
    
        <p><strong>Practical development support and solutions for digital need</strong>s</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-top">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>

            <p className="service-desc">{s.desc}</p>

            <ul className="service-list">
              {s.items.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
