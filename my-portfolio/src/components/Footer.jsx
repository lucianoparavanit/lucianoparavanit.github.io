import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer className="bg-footer w-full">
                <div id="contact" className="min-h-[250px] flex flex-col justify-center items-center py-10 px-4 border-t border-white">
                            <h2 className="text-2xl font-medium mb-4">Contact Me <FontAwesomeIcon icon={faAddressCard} /></h2>
                            <p className="mb-4">lucianoparavanit@gmail.com</p>
                            <a href="../../public/luciano-paravan-cv.pdf" download className="hover:text-[var(--first-color)] transition">Download mi CV here</a>
                            
                </div>
        </footer>

    )
}