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
                <p><strong>Name:</strong> Favour Oropo</p>

                <p>
                    I am a student at Centennial College studying Web Application
                    Development. I enjoy building web applications and learning
                    new technologies.
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
