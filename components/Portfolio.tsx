import { FaArrowRight } from "react-icons/fa";
import CustomButton from "./CustomButton";

export default function Portfolio() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <section id='projects' className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-forground mb-6 text-center">My Portfolio</h2>
                        <div className="mx-auto mt-6 h-1 w-20 bg-red-500"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        
                        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 overflow-hidden">
                                <img src="/images/Blog.jpg" alt="Blog Site" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                                <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold text-white">Modern Blog Site</h3>
                                    <p className="mt-2 text-white">A blog site with commenting and like system.</p>
                                    <div className="mt-4 flex space-x-2">
                                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Next</span>
                                        <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">Node</span>
                                    </div>
                                    <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-red-500">
                                        View Project
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 overflow-hidden">
                                <img src="/images/Car.jpg" alt="Mobile App Project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                                <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold text-white">Car Rental Web-app</h3>
                                    <p className="mt-2 text-white">A Car Rental system with admin dashboard included.</p>
                                    <div className="mt-4 flex space-x-2">
                                        <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">Next</span>
                                        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">Node</span>
                                    </div>
                                    <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-red-500">
                                        View Project
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 overflow-hidden">
                                <img src="/images/E-commerce.jpg" alt="E-commerce Project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                                <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold text-white">E-commerce Platform</h3>
                                    <p className="mt-2 text-white">Custom online store with integrated payment processing.</p>
                                    <div className="mt-4 flex space-x-2">
                                        <span className="rounded-full bg-yellow-600 px-3 py-1 text-xs font-semibold text-white">Next</span>
                                        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Node</span>
                                    </div>
                                    <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-red-500">
                                        View Project
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-25">
                        <CustomButton className="flex items-center gap-2">
                            Explore All Projects <FaArrowRight/>
                        </CustomButton>
                    </div>
                </div>
            </section>
        </>
    )
}