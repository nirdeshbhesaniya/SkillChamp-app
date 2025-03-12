import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BookOpenCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-bold">
                <BookOpenCheck size={30} />
                <span>SkillChamp</span>
            </div>
            <p className="text-gray-400 text-sm">Empowering learning through skills</p>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaInstagram size={24} />
                </a>
            </div>
            <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} SkillChamp. All rights reserved.</p>
        </footer>
    );
};

export default Footer;