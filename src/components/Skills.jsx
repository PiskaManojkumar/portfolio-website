export default function Skills() {
    const skills = [
        { name: 'Adobe Commerce', x: 50, y: 20, level: 'Advanced' },
        { name: 'Adobe Workfront', x: 60, y: 50, level: 'Intermediate' },
        { name: 'PHP', x: 70, y: 35, level: 'Advanced' },
        { name: 'MySQL', x: 80, y: 60, level: 'Advanced' },
        { name: 'Git/Bitbucket', x: 40, y: 50, level: 'Advanced' },
        { name: 'REST APIs', x: 20, y: 60, level: 'Intermediate' },
        { name: 'GraphQL', x: 60, y: 75, level: 'Intermediate' },
        { name: 'JavaScript', x: 25, y: 80, level: 'Intermediate' },
        { name: 'React', x: 30, y: 40, level: 'Intermediate' },
        { name: 'Python', x: 40, y: 90, level: 'Intermediate' }
    ];

    const getSkillStyle = (level) => {
        switch (level) {
            case 'Expert': return 'bg-blue-500 text-sm min-w-20 min-h-20 px-3 py-3'
            case 'Advanced': return 'bg-green-500 text-xs min-w-16 min-h-16 px-2 py-2'
            case 'Intermediate': return 'bg-yellow-500 text-xs min-w-14 min-h-14 px-2 py-2'
            case 'Beginner': return 'bg-gray-500 text-xs min-w-12 min-h-12 px-2 py-2'
            default: return 'bg-gray-400 text-xs min-w-12 min-h-12 px-2 py-2'
        }
    }

    return (
        <section id="skills" className="py-16 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>

                <div className="relative h-96 bg-gray-900 rounded-lg">
                    {/* Skill nodes will go here */}
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`absolute rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:scale-110 transition-transform text-center ${getSkillStyle(skill.level)}`}
                            style={{ left: `${skill.x}%`, top: `${skill.y}%`, transform: 'translate(-50%, -50%)' }}
                            title={`${skill.name} - ${skill.level}`}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
