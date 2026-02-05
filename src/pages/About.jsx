export default function About() {
return (
    <div className="page">
        <h2>About Me</h2>

        <div className="about-grid">
            <img
                src="/profile.jpg"
                alt="My profile"
                className="profile-pic"
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />

            <div>
                <h1><strong>Favour Ayomide Oropo</strong> </h1>
                                  
                      <h2>Digital Health Engineering Technology Student</h2>  
                       <br />            
                <p>
                    Hello! I’m Favour Oropo, a student in Digital Health Engineering Technology with a strong interest in building technology-driven solutions that improve healthcare delivery and patient outcomes. I am passionate about combining software development skills with health-focused systems to create efficient, user-friendly digital applications.
                                   <br />
                                    <br />
                                   
                  Through my studies, I have gained hands-on experience working with web technologies such as React, JavaScript, HTML, and CSS, along with foundational knowledge in databases and system design. I enjoy developing applications that are both functional and intuitive, with a strong focus on usability, data accuracy, and reliability—especially in health-related contexts.
                                     <br />
                                    <br />
                                   
                  My journey into digital health technology has strengthened my problem-solving skills and taught me the importance of precision, security, and user-centered design in healthcare systems. I am continuously learning and exploring new technologies that support innovation in digital health, including health information systems and software applications.
                </p>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    View My Resume (PDF)
                </a>
            </div>
        </div>
    </div>
);
}
