import CustomCard from "./CustomCard";

export default function Services() {
  return (
    <section id='services' className="py-12 px-4 sm:px-6 lg:px-8 bg-background ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            My Services
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-red-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CustomCard
            image="/images/Img-3.png"
            title="Frontend Development"
            paragraph="Building beautiful, responsive interfaces with React, Next.js, and Tailwind CSS. I focus on performance, accessibility, and great user experiences."
          />
          <CustomCard
            image="/images/Img-5.png"
            title="UI/UX Design"
            paragraph="Creating intuitive user interfaces with Figma. I design with usability and aesthetics in mind to create delightful digital experiences."
          />
          <CustomCard
            image="/images/Img-4.png"
            title="Full Stack Solutions"
            paragraph="End-to-end web applications with modern technologies like Node.js, MongoDB, and PostgreSQL. From database to deployment."
          />
        </div>
      </div>
    </section>
  );
}