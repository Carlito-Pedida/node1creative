export const navItems = [
  { name: "Top", link: "/" },
  // { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" }

  // { name: "Workflow", link: "#workflow" } //
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: ""
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: ""
  },
  {
    id: 3,
    title: "My main stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: ""
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg"
  },

  {
    id: 5,
    title: "Currently building a Telemedicine Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg"
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "HooBank Financial",
    description:
      "Modern landing page using advanced libraries and the best UI/UX tools...",
    img: "/p6.svg",
    techStack: ["/re.svg", "/vite.svg", "/tail.svg", "/ts.svg", "/figma.svg"],
    liveLink: "https://modern-app-eight.vercel.app/"
  },
  {
    id: 2,
    title: "Worship Grid Pro",
    description:
      "A user-based application for church musicians. Employing a sleek online store with payment gateway and a communication section for connecting with other subscribers.",
    img: "/p1.svg",
    techStack: ["/re.svg", "/node.svg", "/ts.svg", "/mysql.svg", "/rss.svg"],
    liveLink: "https://worship-grid-ui.vercel.app/"
  },
  {
    id: 3,
    title: "Project Issue Tracker",
    description:
      "Simple project reporting application with secure authentication and pictorial statistics view.",
    img: "/p2.svg",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mysql.svg",
      "/prisma.svg"
    ],
    liveLink: "https://issue-tracker-application.vercel.app/"
  },
  {
    id: 4,
    title: "Technode Game Hub",
    description:
      "A sleek Game Hub application that employs API and advanced search and sort features.",
    img: "/p3.svg",
    techStack: ["/re.svg", "/vite.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    liveLink: "https://technode-game-hub.vercel.app/"
  },
  {
    id: 5,
    title: "TechNode Pro",
    description:
      "Latest Ruby on Rails Full-Stack Application with secure authentication and admin features.",
    img: "/p5.svg",
    techStack: [
      "/ruby.png",
      "/rails.svg",
      "/postgr.svg",
      "/bootstrap.svg",
      "/css.svg"
    ],
    liveLink: "https://technodepro.onrender.com/"
  },
  {
    id: 6,
    title: "Employee Management",
    description:
      "A MERN management portal with scalable database infrastructure and secure authentication",
    img: "/p4.svg",
    techStack: ["/mongodb.svg", "/ex.svg", "/re.svg", "/node.svg", "/ts.svg"],
    liveLink: "https://peoplesoft-ui.vercel.app/"
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Carlito was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Carlito's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Carlito is the ideal partner.",
    name: "Michael Johnson",
    avatar: "/profile1.svg",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Carlito was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Carlito's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Carlito is the ideal partner.",
    name: "Mikaela Jackson",
    avatar: "/profile2.svg",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Carlito was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Carlito's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Carlito is the ideal partner.",
    name: "Michael Jordan",
    avatar: "/profile3.svg",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Carlito was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Carlito's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Carlito is the ideal partner.",
    name: "Missy Jenkins",
    avatar: "/profile4.svg",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Carlito was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Carlito's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Carlito is the ideal partner.",
    name: "Michelle George",
    avatar: "/profile5.svg",
    title: "Director of AlphaStream Technologies"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg"
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg"
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg"
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg"
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Carlito-Pedida"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/carlito-linked/"
  }
];
