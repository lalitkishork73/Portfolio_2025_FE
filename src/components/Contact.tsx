import { contactData } from "../data/contactData"

interface ContactData {
    id: number
    icon: any
    link: string
    name: string
}

export default function Contact () {
    return (
        <div className="min-h-screen md:h-screen h-full bg-black text-white flex flex-col items-center justify-center px-6">

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Get In Touch
            </h2>

            {/* Contact Cards */}
            <div className="flex flex-col md:flex-row gap-6">
                {contactData.map(({ id, icon: Icon, link, name }: ContactData) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              group
              flex flex-col items-center justify-center
              w-44 h-40
              rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-cyan-400/60
              hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]
            "
                    >
                        {/* Icon */}
                        <Icon/>

                        {/* Label */}
                        <p className="text-sm text-white/80 group-hover:text-cyan-400 transition-colors">
                            {name}
                        </p>
                    </a>
                ))}
            </div>

            {/* Footer Text */}
            <p className="mt-12 text-sm text-white/50">
                Open to remote & hybrid opportunities · Let’s build something impactful
            </p>
        </div>
    )
}
