export default function Navbar() {
    return (
        <>
        <nav className="fixed w-full top-0 bg-gray-800 text-white p-4 z-50">
            <ul className="flex justify-center gap-8">
                <li><a className="hover:text-blue-400 transition-colors" href="#home">Home</a></li>
                <li><a className="hover:text-blue-400 transition-colors" href="#about">About</a></li>
                <li><a className="hover:text-blue-400 transition-colors" href="#skills">Skills</a></li>
                <li><a className="hover:text-blue-400 transition-colors" href="#experience">Experience</a></li>
                <li><a className="hover:text-blue-400 transition-colors" href="#projects">Projects</a></li>
                <li><a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}