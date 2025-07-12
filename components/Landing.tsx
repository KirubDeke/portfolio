import Image from "next/image";
import CustomButton from "./CustomButton";
import CustomButtonTwo from "./CustomButtonTwo";
import { FaArrowRight, FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

export default function LandingPage() {
    return (
        <>
            <section id='home' className="bg-background dark:bg-background mt-25">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7 mt-20">
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 border border-gray-200 bg-white rounded-3xl px-4 py-1 inline-block">👋 Hello, {"I'm"} </p>
                        <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl " style={{ fontFamily: 'WR' }}>Kirubel Deke</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Full-Stack Web Developer. Based in Addis Ababa, Ethiopia.</p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-6">
                            <a href="https://github.com/KirubDeke/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/kirubel-deke-215b33223/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/kirub_deke/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://t.me/KirubelDeke" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaTelegram className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="flex items-center gap-4">

                            <a href="#about"><CustomButton>
                                <span className="flex items-center">
                                    About Me <FaArrowRight className="ml-2 w-3.5 h-3.5" />
                                </span>
                            </CustomButton></a>
                            <a href="#projects">
                                <CustomButtonTwo>
                                    <span className="flex items-center">
                                        See My Work <FaArrowRight className="ml-2 w-3.5 h-3.5" />
                                    </span>
                                </CustomButtonTwo>
                            </a>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 flex justify-center mt-8 lg:mt-0">
                        <div className="relative w-74 h-84 sm:w-90 sm:h-90 md:w-106 md:h-106">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-red-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transform rotate-2 shadow-xl"></div>
                            <Image
                                src='/images/photo.png'
                                alt="Kirubel Deke"
                                fill
                                className="object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transform -rotate-2 border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}