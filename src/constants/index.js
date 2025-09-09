import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

{/* Removin from project in app.css to be updated and added in the future */ }
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A full-stack e-commerce platform featuring dynamic product listings, secure user authentication, a shopping cart system, and seamless checkout flow. Built with modern technologies for scalability and a responsive user experience.",
    technologies: ["Nextjs", "Tailwind", "Redux", "Node.js", "MongoDB", "Express"],
    link: "https://eshop-front-iota.vercel.app/",
  },
  {
    title: "Messaging App",
    image: project2,
    description:
      "A real-time chat application that enables instant messaging, group conversations, and live updates using WebSockets. Includes user authentication, responsive design, and a clean UI for smooth communication across devices.",
    technologies: ["React", "Tailwind", "Zustand", "Nodejs", "Express", "MongoDB", "Socket.IO"],
    link: "https://chatapp-p6qk.onrender.com/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website designed to highlight projects, technical skills, and contact details, with a clean and responsive interface.",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
