import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true)
    const fullText = 'ManojKumar Piska'

    useEffect(() => {
        let index = 0
        const typeNextChar = () => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1))
                index++
                // Variable speed - faster for spaces, slower for letters
                const delay = fullText[index - 1] === ' ' ? 50 : 100
                setTimeout(typeNextChar, delay)
            }
        }

        // Start typing after a small delay
        setTimeout(typeNextChar, 500)
        if (index >= fullText.length) {
            setTimeout(() => setShowCursor(false), 1000)
        }

    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm <span className="text-blue-400">{displayText}
                        {showCursor && <span className="animate-pulse">|</span>}
                    </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
                    Software Engineer
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                    Adobe Commerce Cloud | Adobe Workfront | Magento 2 | PHP | JavaScript | MySQL | REST APIs | React | GraphQL | Git | Python
                </p>
                <div className="flex justify-center gap-6">
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href="mailto:manojkumarpiska896@gmail.com"
                            className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white text-sm transition-colors">
                            <FaEnvelope />
                        </a>

                        <a href="tel:+917995747045"
                            className="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white text-sm transition-colors">
                            <FaPhone />
                        </a>

                        <a href="https://www.linkedin.com/in/manojkumar-piska-544768203"
                            className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg text-white text-sm transition-colors">
                            <FaLinkedin />
                        </a>

                        <a href="#"
                            className="bg-gray-700 hover:bg-gray-900 p-2 rounded-lg text-white text-sm transition-colors">
                            <FaGithub />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}