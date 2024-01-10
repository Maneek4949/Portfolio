import { useState, useEffect } from "react";
import { FaGithub } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoIosMail } from "react-icons/io";

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSection = 'home';

      Links.forEach((link) => {
        const section = document.querySelector(link.link);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight+200;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = link.name.toLowerCase();
          }
        }
      });

      setActiveLink(activeSection);
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [Links]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in ${scrolled && !open? "bg-zinc-950 shadow-lg shadow-cyan-500" : ""}`}>
      <div className="md:flex items-center justify-between py-3 md:px-10 px-7" id='nav_container'>
        <div className="text-2xl font-bold" href="/">
          Manoj Prajapati
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 z-20'>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
        <ul className={`md:flex md:items-center md:pb-0  md:static md:w-auto md:h-auto md:pl-0 md:z-auto  absolute z-10 pb-12 w-52 h-screen pl-9 top-0 transition-all duration-500 ease-in ${open ? 'py-24 right-0 bg-zinc-950 ' : 'right-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a href={link.link} onClick={() =>setOpen(false)} className={`text-lg no-underline  ${activeLink === link.name.toLowerCase() ? 'bg-gradient-to-r from-fuchsia-700 to-indigo-800 text-transparent bg-clip-text' : 'text-white '}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={`text-lg flex justify-center gap-4 md:static md:z-auto md:top-0 absolute top-16 z-10 transition-all duration-500 ease-in ${open ? 'right-16 bg-zinc-950 ' : 'right-[-490px]'}`}>
        <a className="text-white text-xl transition duration-300 ease-in-out transform motion-safe:hover:scale-125" href='https://www.linkedin.com/in/man0j-prajapati/'><GrLinkedinOption/></a>
        <a className="text-white text-xl transition duration-300 ease-in-out transform motion-safe:hover:scale-125" href='mailto:manojprajapati1208@gmail.com'><IoIosMail/></a>
        <a className="text-white text-xl transition duration-300 ease-in-out transform motion-safe:hover:scale-125" href='https://github.com/Maneek4949'><FaGithub/></a>
      </div>
      </div>
    </nav>
  );
}

export default Header;
