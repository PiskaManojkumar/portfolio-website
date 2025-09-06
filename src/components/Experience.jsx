export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate Consultant",
      company: "Infosys Limited",
      duration: "Apr 2025 - Present",
      type: "work",
      achievements: [
        "Currently undergoing comprehensive training in Java Full Stack development",
        "Learning advanced React.js for modern web application development",
        "Obtaining Adobe Workfront certification for project management workflows",
        "Preparing for client project assignments with enhanced technical skill set",
        "Participating in Infosys skill enhancement programs and knowledge transfer sessions",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "Adobe Workfront",
        "Microservices",
        "REST APIs",
        "Project Management",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "OneDigitals Soft Solution India Pvt Ltd",
      duration: "Aug 2021 - Feb 2025",
      type: "work",
      achievements: [
        "Worked on Adobe Commerce Cloud to implement backend features",
        "Upgraded Magento versions (2.3 to 2.4.6 and 2.4.6 to 2.4.7-P3)",
        "Managed database migrations and multi-environment setups",
        "Developed custom REST APIs for bulk product imports",
        "Integrated third-party services (AccessiBe, HubSpot, OneTrust)",
      ],
      technologies: [
        "Adobe Commerce Cloud",
        "PHP",
        "REST APIs",
        "MySQL",
        "Git",
        "Docker",
        "JavaScript",
      ],
    },
    {
      title: "Bachelor of Technology",
      company: "TKR College of Engineering and Technology",
      duration: "Jul 2016 - Oct 2020",
      type: "education",
      achievements: ["Mechanical Engineering", "CGPA: 7.6"],
      technologies: [],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            // Timeline item will go here
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-6 w-4 h-4 rounded-full border-4 border-gray-900 ${
                  exp.type === "work" ? "bg-blue-600" : "bg-green-600"
                }`}
              ></div>

              {/* Experience card */}
              <div className="ml-20 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
