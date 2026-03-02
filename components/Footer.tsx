import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Nexflow Digital</h2>
        <p className="mb-6 max-w-md mx-auto">
          Transformando empresas mediante desarrollo web moderno y automatización inteligente con Power Platform.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/merloyflores/" 
            target="_blank" rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors"
            no-referrer
        >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:merloyveitch@gmail.com" 
            className="hover:text-blue-400 transition-colors" 
            no-referrer
          >
            <Mail size={24} />
          </a>
          <a 
                href="https://github.com/merloyflores" 
                target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors" 
                no-referrer
        >
            <Github size={24} />
          </a>
        </div>

        <div className="text-xs border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} Merloy Flores. Todos los derechos reservados. <br />
          Hecho con Next.js, Tailwind y mucha cafeína.
        </div>
      </div>
    </footer>
  );
};

export default Footer;