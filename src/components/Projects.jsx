export default function Projects() {

    const projects = [
        {
            title: "Wiltshire Farm Foods UK",
            duration: "Aug 2021 - Present",
            location: "UK",
            type: "B2C E-commerce Platform",
            status: "Ongoing",
            description: "UK's leading frozen meals home delivery service platform developed from scratch on Adobe Commerce Cloud.",
            achievements: [
                "Developed CSA Portal for customer-franchisee communication",
                "Implemented postcode lookup and bulk product import functionality",
                "Created REST APIs for omnichannel experiences with Microsoft Dynamics",
                "Managed third-party integrations (Live Chat, Trustpilot, OneTrust, AccessiBe)",
                "Successfully upgraded from version 2.4.3 to 2.4.6-P6, currently upgrading to 2.4.7-P2"
            ],
            technologies: ["Adobe Commerce Cloud", "REST APIs", "Microsoft Dynamics", "Trustpilot", "GTM", "OneTrust"]
        },
        {
            title: "HTHM US (Heart to Home Meals)",
            duration: "Nov 2023 - Mar 2024",
            location: "US",
            type: "B2C E-commerce Platform",
            status: "Completed",
            description: "Platform delivering frozen meals to seniors and adults with mobility challenges, mirroring Wiltshire Farm Foods functionalities.",
            achievements: [
                "Set up complete platform across all environments (development, staging, production)",
                "Implemented accessibility features for target demographic",
                "Managed third-party integrations for enhanced functionality",
                "Currently upgrading from version 2.4.6 to 2.4.7-P2"
            ],
            technologies: ["Adobe Commerce Cloud", "Accessibility Features", "Multi-environment Setup"]
        },
        {
            title: "Wiltshire Farm Foods Professional",
            duration: "May 2023 - Sep 2023",
            location: "UK",
            type: "B2B E-commerce Platform",
            status: "Completed",
            description: "B2B platform offering frozen meals with higher minimum order values for professional clients.",
            achievements: [
                "Established B2B-specific features and workflows",
                "Set up platform across development, staging, and production environments",
                "Implemented professional client management system",
                "Enhanced platform functionality with targeted integrations"
            ],
            technologies: ["Adobe Commerce Cloud", "B2B Features", "Professional Client Management"]
        },
        {
            title: "apetito UK & CA",
            duration: "Jan 2022 - May 2022, Mar 2024 - May 2024",
            location: "UK & Canada",
            type: "Content Management Platform",
            status: "Completed",
            description: "Enhanced content management with Page Builder, empowering business teams to manage content independently.",
            achievements: [
                "Provided comprehensive training to business teams for independent content management",
                "Developed form submissions and postcode lookup functionality",
                "Created APIs for apetito careers integration",
                "Integrated GTM, AccessiBe, and OneTrust for compliance and functionality"
            ],
            technologies: ["Adobe Commerce Cloud", "Page Builder", "GTM", "AccessiBe", "OneTrust"]
        }
    ]

    return (
        <section id="projects" className="py-16 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Major Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Project card content will go here */}
                            {/* Project header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-blue-400 mb-1">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">{project.type}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Ongoing'
                                            ? 'bg-green-600/20 text-green-400'
                                            : 'bg-blue-600/20 text-blue-400'
                                        }`}>
                                        {project.status}
                                    </span>
                                    <p className="text-gray-400 text-xs mt-1">{project.location}</p>
                                </div>
                            </div>

                            {/* Duration */}
                            <p className="text-gray-400 text-sm mb-3">{project.duration}</p>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                            {/* Achievements */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                                <ul className="space-y-1">
                                    {project.achievements.slice(0, 3).map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-300 text-xs">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
