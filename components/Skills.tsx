export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
            <div className="w-full max-w-4xl px-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">My Skills</h2>
                <div className="mx-auto mt-6 h-1 w-20 bg-red-500"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
                    {/* Frontend Technologies */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                        <span className="text-black">HTML5</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12 mb-2" />
                        <span className="text-black">CSS3</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-2" />
                        <span className="text-black">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12 mb-2" />
                        <span className="text-black">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
                        <span className="text-black">React.js</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 mb-2" />
                        <span className="text-black">Next.js</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="w-12 h-12 mb-2" />
                        <span className="text-black">TailwindCSS</span>
                    </div>

                    {/* Backend Technologies */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-2" />
                        <span className="text-black">Node.js</span>
                    </div>

                    {/* Database Technologies */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 mb-2" />
                        <span className="text-black">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 mb-2" />
                        <span className="text-black">PostgreSQL</span>
                    </div>

                    {/* Design & Version Control */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12 mb-2" />
                        <span className="text-black">Figma</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition transform hover:scale-105">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-2" />
                        <span className="text-black">Git</span>
                    </div>
                </div>
            </div>
        </div>
    );
}