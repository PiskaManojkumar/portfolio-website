import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "manojkumarpiska896@gmail.com",
            link: "mailto:manojkumarpiska896@gmail.com"
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 7995747045",
            link: "tel:+917995747045"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com/in/manojkumar-piska-544768203" // Add your LinkedIn URL
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "India",
            link: null
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                'service_56efkej',      // Your service ID
                'template_za13ob6',     // Your template ID
                formData,
                'l30QEnY0iA9OBRGA9'     // Your public key
            )
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        }

        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(''), 3000)
    }


    return (
        <section id="contact" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm always interested in discussing new opportunities, challenging projects,
                            or just connecting with fellow developers. Whether you're looking for a
                            Magento/Adobe Commerce expert or want to collaborate on something exciting,
                            feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            {/* Contact info items will go here */}
                            {contactInfo.map((contact, index) => (
                                contact.link ? (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                                    >
                                        <div className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm">{contact.label}</div>
                                            <div className="text-white group-hover:text-blue-300 transition-colors">
                                                {contact.value}
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                                        <div className="text-2xl text-blue-400">{contact.icon}</div>
                                        <div>
                                            <div className="text-gray-400 text-sm">{contact.label}</div>
                                            <div className="text-white">{contact.value}</div>
                                        </div>
                                    </div>
                                )
                            ))}

                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors ${isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                    } text-white`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-sm">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                            )}
                        </form>

                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    {/* Footer content will go here */}
                    <p className="text-gray-400">
                        © 2025 Manoj Kumar Piska. Built with React & Tailwind CSS.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Software Engineer | Adobe Commerce Cloud | React | PHP | Python | JavaScript
                    </p>

                </div>
            </div>
        </section>
    )
}
