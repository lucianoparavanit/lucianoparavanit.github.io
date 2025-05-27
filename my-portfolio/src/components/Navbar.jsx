import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center gap-4 px-8 py-4 text-[var(--text-color)] border-b border-white">
            <div className="text-2xl">
                <FontAwesomeIcon icon={faCode}/>
            </div>
            <ul className="flex gap-6 text-lg">
                <li>
                    <a href="#about" className="hover:text-[var(--first-color)]">About</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-[var(--first-color)]">Projects</a>
                </li>
            </ul>
            <a href="https://github.com/lucianoparavanit" target="_blank" className="text-2xl hover:text-[var(--first-color)]" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/luciano-paravan" target="_blank" className="text-2xl hover:text-[var(--first-color)]" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </nav>
    )
}