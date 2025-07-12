"use client";

import { useState, useEffect, SetStateAction } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter();

    // Initialize dark mode from localStorage or system preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode !== null) {
                setDarkMode(savedMode === 'true');
            } else {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setDarkMode(isDark);
            }
        }
    }, []);

    // Apply dark mode class and save preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        }
    }, [darkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (href: SetStateAction<string>) => {
        setActiveLink(href);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-background text-foreground shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap" style={{ fontFamily: 'WR' }}>KD <span className="text-red-500">.</span></span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
                   
                    <a href="#contact"><CustomButton>Contact</CustomButton></a>

                     <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ml-5"
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${!isMenuOpen && 'hidden'}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <a
                                href="#home"
                                onClick={() => handleLinkClick("#home")}
                                className={`
                                    relative
                                    block py-2 px-3 md:p-0
                                    after:absolute after:bottom-0 after:left-0
                                    after:w-full after:h-0.5
                                    after:bg-[color:var(--action)]
                                    after:scale-x-0
                                    after:hover:scale-x-100
                                    after:transition-transform after:duration-300
                                    ${activeLink === "#home" ? 'after:scale-x-100' : ''}
                                `}
                                aria-current={activeLink === "#home" ? "page" : undefined}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => handleLinkClick("#about")}
                                className={`
                                    relative
                                    block py-2 px-3 md:p-0
                                    after:absolute after:bottom-0 after:left-0
                                    after:w-full after:h-0.5
                                    after:bg-[color:var(--action)]
                                    after:scale-x-0
                                    after:hover:scale-x-100
                                    after:transition-transform after:duration-300
                                    ${activeLink === "#about" ? 'after:scale-x-100' : ''}
                                `}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={() => handleLinkClick("#services")}
                                className={`
                                    relative
                                    block py-2 px-3 md:p-0
                                    after:absolute after:bottom-0 after:left-0
                                    after:w-full after:h-0.5
                                    after:bg-[color:var(--action)]
                                    after:scale-x-0
                                    after:hover:scale-x-100
                                    after:transition-transform after:duration-300
                                    ${activeLink === "#services" ? 'after:scale-x-100' : ''}
                                `}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => handleLinkClick("#projects")}
                                className={`
                                    relative
                                    block py-2 px-3 md:p-0
                                    after:absolute after:bottom-0 after:left-0
                                    after:w-full after:h-0.5
                                    after:bg-[color:var(--action)]
                                    after:scale-x-0
                                    after:hover:scale-x-100
                                    after:transition-transform after:duration-300
                                    ${activeLink === "#projects" ? 'after:scale-x-100' : ''}
                                `}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}