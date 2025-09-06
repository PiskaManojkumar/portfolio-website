export default function About() {
  return (
    <>
      <section id="about" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Your Story */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Senior Software Engineer & E-commerce Specialist
              </h3>
              <p className="text-gray-300 mb-6">
                Hey there! I'm a software engineer with 3.5+ years of experience
                who genuinely loves building scalable web applications and
                digital solutions that make people's lives easier. I specialize
                in full-stack development, with expertise in e-commerce
                platforms, project management tools, and recently expanding my
                skills in Adobe Workfront for enhanced project workflows and
                team collaboration.
              </p>

              <p className="text-gray-300 mb-6">
                What excites me most? Taking complex problems and turning them
                into elegant solutions. Whether it's migrating databases,
                optimizing performance, or integrating third-party services,
                I've had the privilege of working on projects that serve
                customers across the UK, US, and Canada. Each project teaches me
                something new, and I love that constant learning curve.
              </p>

              <p className="text-gray-300 mb-6">
                Here's something interesting - I actually started with
                Mechanical Engineering! That background taught me to approach
                software problems like an engineer: methodically, creatively,
                and always with the end user in mind. When I'm not coding,
                you'll find me exploring the latest e-commerce trends or
                tinkering with new technologies that could make tomorrow's
                platforms even better.
              </p>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Certifications
                </h4>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <a
                      href="/manoj_adobeworkfrontcoredeveloper_training_certification.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Adobe Workfront Certified Professional
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Your Photo */}
            <div className="flex justify-center">
              <img
                src="/Manojkumar.Piska.jpg"
                alt="Manoj Kumar Piska"
                className="w-80 h-80 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
