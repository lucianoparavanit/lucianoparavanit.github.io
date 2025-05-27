import meImg from '../assets/me.png'
import html5Logo from '../assets/stack/html5.png'
import css3Logo from '../assets/stack/css3.png'
import javascriptLogo from '../assets/stack/javascript.png'
import mongoDBLogo from '../assets/stack/mongodb.png'
import expressLogo from '../assets/stack/express.png'
import reactLogo from '../assets/stack/react.png'
import nodeLogo from '../assets/stack/nodejs.png'
import viteLogo from '../assets/stack/vite.png'
import tailwindcssLogo from '../assets/stack/tailwindcss.png'

export default function Home() {
    const logos = [
        html5Logo,
        css3Logo,
        javascriptLogo,
        mongoDBLogo,
        expressLogo,
        reactLogo,
        nodeLogo,
        tailwindcssLogo,
        viteLogo
    ]

    return (
            <main className="flex flex-col justify-center items-center mt-10 gap-20">
                
                <section id="me" className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left px-4 mt-20">
                    <img src={meImg} alt="Luciano Paravan" className="w-40 bg-white rounded-2xl" />
                    <div className="flex flex-col gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-typing">Hi! I'm Luciano</h1>
                        <p className="text-lg max-w-xl">
                            Full stack developer <span className="text-[var(--first-color)] font-medium">MERN</span> with a background in <span className="text-[var(--first-color)]"> customer service</span>, administration, and <span className="text-[var(--first-color)]"> international experience</span>. Focused on building <span className="text-[var(--first-color)]">real products</span>, <span className="text-[var(--first-color)]"> learning every day</span>, and <span className="text-[var(--first-color)]"> growing as part of a team</span>.
                        </p>
                    </div>
                </section>

                <section id="tech-stack" className="flex flex-col items-center justify-center mt-10 w-6/12 overflow-hidden">
                    <h2 className="text-3xl font-medium my-10">Tech Stack</h2>

                    <div>
                        <div className="flex animate-scroll pause-on-hover whitespace-nowrap gap-6 px-4">
                            {[...logos, ...logos, ...logos].map((logo, i)=> (
                                <div key={i} className="inline-block min-w-[6rem] h-24 bg-gradient-custom rounded-lg shadow flex items-center justify-center shrink-0 ">
                                    <img src={logo} alt="tech-logo" className="max-w-[4rem] max-h-[4rem] object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="flex flex-col items-center justify-center my-10">
                    <h2 className="text-3xl font-medium my-10">My Projects</h2>
                </section>
                
                <section id="about" className="max-w-3xl mx-auto my-12 px-4 flex flex-col items-center">
                    <h2 className="text-3xl font-medium my-10">About Me</h2>
                    
                    <p className="mb-4">
                        I'm a <span className="text-[var(--first-color)] font-medium">full stack web developer</span> specialized in the <span className="text-[var(--first-color)] font-medium"> MERN stack</span>, with a background in <span className="text-[var(--first-color)]"> customer service</span>, administration, and hotel reception across Argentina, Australia, and Spain.
                    </p>
                    
                    <p className="mb-4">
                        I recently completed an intensive <span className="text-[var(--first-color)] font-medium">Full Stack Web Development bootcamp</span> at <span className="text-[var(--first-color)] font-medium"> ISDI Coders</span> in Barcelona (<span className="text-[var(--first-color)] font-medium">400+ hours</span> of training in best practices, testing, and product development), and I'm now fully focused on my professional transition into tech.
                    </p>
                    
                    <p className="mb-4">
                        My international work experience taught me key <span className="text-[var(--first-color)] font-medium">soft skills</span> such as <span className="text-[var(--first-color)]">multilingual communication</span>, adaptability, and teamwork—values that I now bring into the world of software development.
                    </p>
                    
                    <p className="mb-4">
                        I'm looking forward to joining a team where I can grow and contribute from day one, applying both my technical and interpersonal strengths. I'm open to <span className="text-[var(--first-color)]">remote</span>, <span className="text-[var(--first-color)]">hybrid</span>, or <span className="text-[var(--first-color)]"> on-site opportunities</span>, including <span className="text-[var(--first-color)]"> internships</span> or <span className="text-[var(--first-color)]"> junior roles</span> with strong onboarding and mentorship.
                    </p>
                </section>
                
            </main>

    )
}