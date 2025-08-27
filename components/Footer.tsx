export default function Footer() {
    return (
        <>
            <footer className="bg-background rounded-lg shadow-sm m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{fontFamily: 'WR'}}>KD<span className="text-red-500">.</span></span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-forground sm:mb-0">
                            <li>
                                <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:underline me-4 md:me-6">Services</a>
                            </li>

                            <li>
                                <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-foreground sm:text-center">© 2025 <a href="'/" className="hover:underline">Kirubel</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}