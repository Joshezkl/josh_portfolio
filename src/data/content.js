export const profile = {
  name: "Josh Ezekiel Delos Santos",
  shortName: "Josh Ezekiel Delos Santos",
  title: "Web & Mobile Developer",
  tagline: "Building thoughtful digital experiences across web, mobile, and design.",
  bio: "BSIT graduate specializing in Web & Mobile Technologies, with Cisco certifications in Cybersecurity, Python Essentials 1 & 2, Networking Basics, Computer Hardware, and Hardware Support. I bridge full-stack development and user-centered design through hands-on work on web, mobile, and AR projects. Experienced with React.js, Flutter, Laravel, and Node.js from academic leadership roles, capstone research, and a full-stack internship at When In Baguio Inc. Adaptable and committed to delivering reliable, thoughtful digital solutions.",
  location: "Rosales, Pangasinan",
  email: "delossantosjoshezekiel@gmail.com",
  phone: "+63 9691 638 486",
  github: { url: "https://github.com/Joshezkl", handle: "@Joshezkl" },
  linkedin: {
    url: "https://www.linkedin.com/in/josh-ezekiel-delos-santos-72280b339/",
    handle: "in/josh-ezekiel-delos-santos-72280b339",
  },
  resume: "/Delos%20_Santos_Josh_Ezekiel_cv.pdf",
  photo: "/josh-profile.png",
};

export const engineeringSkills = [
  "JavaScript",
  "Python",
  "Dart",
  "PHP",
  "SQL",
  "React.js",
  "Laravel",
  "Flutter",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Firebase",
];

export const productSkills = [
  "Figma (UI/UX)",
  "Wireframing",
  "Prototyping",
  "Canva",
];

export const securitySkills = [
  "Cybersecurity Fundamentals",
  "Networking Fundamentals",
  "Network Security",
  "TCP/IP & IP Addressing",
  "Threat Awareness",
  "Security Best Practices",
  "Data Privacy & Protection",
];

export const experience = [
  {
    id: 1,
    role: "IT Support Staff",
    company: "Municipality of Rosales – Local Government Unit",
    location: "Rosales, Pangasinan",
    period: "Jul 2026 — Present",
    featured: true,
    description:
      "Provide technical support and troubleshooting for computers, printers, network connectivity, and other IT-related concerns. Assist municipal personnel with hardware, software, and system-related issues. Perform basic computer maintenance, installation, configuration, and troubleshooting. Support day-to-day IT operations and help ensure reliable availability of computer equipment and systems.",
    tech: ["IT Support", "Hardware Troubleshooting", "Network Support", "Computer Maintenance"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern (OJT)",
    company: "When In Baguio Inc.",
    location: "Baguio City, Benguet",
    period: "Feb 2026 — May 2026",
    description:
      "Assisted in developing and improving core features of the When In Baguio mobile application using Flutter, focusing on UI enhancements and basic performance improvements. Supported the development and maintenance of the backend operations website using React.js and Node.js, ensuring smooth data handling and admin workflows. Helped deploy and manage web services using cPanel, including basic hosting setup, file management, and system updates.",
    tech: ["Flutter", "React.js", "Node.js", "cPanel"],
  },
  {
    id: 3,
    role: "Lead Developer & Researcher (Capstone)",
    company: "PCVision AR",
    location: "Pangasinan State University",
    period: "2025 — 2026",
    description:
      "Led the development and research of an augmented reality (AR)-based computer vision system designed to enhance interactive learning and object recognition. Coordinated technical implementation and research documentation for an AR mobile application that makes PC building more interactive through 3D models and compatibility guidance.",
    tech: ["Flutter", "ARCore", "Firebase"],
  },
  {
    id: 4,
    role: "Lead Developer & Front-End Lead",
    company: "PSU OJT Management Portal",
    location: "Pangasinan State University",
    period: "2025 — 2026",
    description:
      "Led the development of an OJT management and monitoring web portal using Node.js, focusing on front-end development and core feature implementation. Coordinated the team to ensure smooth integration and functionality for student and admin use.",
    tech: ["Node.js", "React.js"],
  },
  {
    id: 5,
    role: "Project Leader and Backend Programmer",
    company: "PSU Transfer Credential System",
    location: "Pangasinan State University",
    period: "2025 — 2026",
    description:
      "Led the development of a centralized administrative system designed to streamline student transfer credential processing, document tracking, request management, and reporting. Architected and implemented backend functionality using Laravel and MySQL to support efficient university operations for students and administrators.",
    tech: ["Laravel", "MySQL"],
  },
];

export const education = {
  degree: "B.Sc Information Technology",
  major: "Web and Mobile Technologies",
  school: "Pangasinan State University, Urdaneta City Campus",
  year: "2026",
};

export const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces for web and mobile platforms.",
    skills: [
      "React.js",
      "Flutter",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Dart",
    ],
    icon: "layout",
  },
  {
    title: "Backend & Systems",
    description:
      "Developing APIs, databases, and full-stack application logic.",
    skills: [
      "Node.js",
      "Laravel",
      "Python",
      "PHP",
      "MySQL",
      "MongoDB",
      "Firebase",
      "REST APIs",
    ],
    icon: "server",
  },
  {
    title: "Cloud & Tools",
    description:
      "Deploying applications and managing development workflows.",
    skills: ["Git/GitHub", "Vercel", "cPanel", "Postman", "Firebase"],
    icon: "cloud",
  },
  {
    title: "Security & Networking",
    description:
      "Foundational knowledge in protecting systems, networks, and user data.",
    skills: [
      "Cybersecurity Fundamentals",
      "Networking Fundamentals",
      "Network Security",
      "TCP/IP & IP Addressing",
      "Threat Awareness",
      "Security Best Practices",
      "Data Privacy & Protection",
    ],
    icon: "shield",
  },
  {
    title: "Design & Product",
    description:
      "Translating ideas into intuitive user experiences and visual systems.",
    skills: [
      "Figma (UI/UX)",
      "Wireframing",
      "Prototyping",
      "Canva",
      "Visual Hierarchy",
    ],
    icon: "palette",
  },
];

export const projects = [
  {
    id: 1,
    title: "ArborNex",
    category: ["UI/UX Design"],
    description:
      "A mobile gardening and landscaping application designed to provide accessible and comprehensive tools for both beginner and experienced gardeners, helping users explore, plan, and manage their gardening activities more effectively.",
    tech: ["Figma", "Prototyping", "Wireframing"],
    image: "/projects/arbornex.png",
  },
  {
    id: 2,
    title: "Vroom2Go",
    category: ["UI/UX Design"],
    description:
      "A mobile motorcycle rental application designed to simplify vehicle discovery, booking, rental planning, and location selection through an intuitive and user-friendly mobile experience.",
    tech: ["Figma", "Prototyping", "Wireframing"],
    image: "/projects/vroom2go.png",
  },
  {
    id: 3,
    title: "SwapHub",
    category: ["UI/UX Design"],
    description:
      "A mobile smartphone swapping platform designed to provide users with a convenient way to discover, connect, and trade devices through a modern and user-friendly digital experience.",
    tech: ["Figma", "Prototyping", "Wireframing"],
    image: "/projects/swaphub.png",
  },
  {
    id: 4,
    title: "Career Compass",
    category: ["UI/UX Design"],
    description:
      "A responsive career guidance platform designed for both mobile and web, helping users explore career opportunities, take assessments, and discover career paths that align with their interests and skills.",
    tech: ["Figma", "Prototyping", "Wireframing"],
    image: "/projects/career-compass.png",
  },
  {
    id: 5,
    title: "Frappey Cafe",
    category: ["Web"],
    description:
      "An e-commerce web application designed to provide customers with a convenient online platform for exploring products, managing orders, and interacting with the cafe's digital services.",
    tech: ["Laravel", "MySQL"],
    image: "/projects/frappey-cafe.png",
  },
  {
    id: 6,
    title: "PSU Transfer Credential System",
    category: ["Web"],
    description:
      "A centralized administrative system designed to streamline student transfer credential processing, document tracking, request management, and reporting for more efficient university operations.",
    tech: ["Laravel", "MySQL"],
    image: "/projects/psu-transfer-credentials.png",
  },
  {
    id: 7,
    title: "PCVision AR",
    category: ["Mobile"],
    description:
      "An augmented reality-based mobile application designed to make learning about PC components and building a computer more interactive through AR visualization, 3D models, compatibility guidance, and PC building tools.",
    tech: ["Flutter", "Dart", "Firebase", "ARCore", "3D Models"],
    image: "/projects/pcvision-ar.png",
  },
  {
    id: 8,
    title: "SkyLens",
    category: ["Mobile"],
    description:
      "A mobile weather application designed to provide users with real-time weather conditions and location-based forecasts through a simple and visually engaging mobile experience.",
    tech: ["Flutter", "OpenWeather API", "Geolocation"],
    image: "/projects/skylens.png",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Foundational certification covering cybersecurity principles, threat awareness, network security basics, and safe computing practices.",
    file: "/certificates/introduction-to-cybersecurity.pdf",
  },
  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Certification demonstrating proficiency in Python fundamentals including syntax, data types, control flow, functions, and basic problem solving.",
    file: "/certificates/python-essentials-1.pdf",
  },
  {
    id: 3,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Foundational certification covering network components, cabling, OSI and TCP/IP models, IPv4 addressing, and essential networking concepts.",
    file: "/certificates/networking-basics.pdf",
  },
  {
    id: 4,
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Intermediate Python certification covering modules, packages, exceptions, file handling, and object-oriented programming concepts.",
    file: "/certificates/Python_Essentials_2_certificate_delossantosjoshezekiel-gmail-com_8408c32e-b102-4935-b073-baf6416a669f.pdf",
  },
  {
    id: 5,
    title: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Certification focused on installing, configuring, and upgrading computer hardware components and supporting end-user devices.",
    file: "/certificates/Hardware_and_Upgrade_Support_certificate_delossantosjoshezekiel-gmail-com_800b1f45-0165-4a44-b1e8-1299a40655db.pdf",
  },
  {
    id: 6,
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Foundational course covering computer components, internal hardware, peripherals, and essential troubleshooting concepts.",
    file: "/certificates/Computer_Hardware_Basics_certificate_delossantosjoshezekiel-gmail-com_30a3a3a3-92e0-46f4-8b8d-e5a3f4fc2b29.pdf",
  },
  {
    id: 7,
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Foundational certification covering modern AI concepts, prompt engineering, responsible AI use, and practical applications in everyday technology.",
    file: "/certificates/Introduction_to_Modern_AI_certificate_delossantosjoshezekiel-gmail-com_a69ea7ca-9c54-419a-ba76-e1fd08f5f3c5.pdf",
  },
  {
    id: 8,
    title: "Network Defense",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Certification covering network security principles, threat mitigation, access control, and defensive strategies for protecting systems.",
    file: "/certificates/Network_Defense_certificate_delossantosjoshezekiel-gmail-com_d2c28168-2dbe-4797-945f-560fb1d515ea.pdf",
  },
  {
    id: 9,
    title: "AI for App Building",
    issuer: "Coursera",
    year: "2026",
    description:
      "Course focused on applying AI concepts and tools to build smarter applications with practical product and development workflows.",
    file: "/certificates/Coursera_AI for App Building.pdf",
  },
  {
    id: 10,
    title: "Google AI Essentials",
    issuer: "Google / Coursera",
    year: "2026",
    description:
      "Foundational course introducing generative AI concepts, responsible use, and practical ways to leverage AI in everyday work.",
    file: "/certificates/Google AI Essentials.pdf",
  },
  {
    id: 11,
    title: "Google IT Support",
    issuer: "Google / Coursera",
    year: "2026",
    description:
      "Foundational IT support training covering troubleshooting, customer support, networking, operating systems, and common technical support workflows.",
  },
];

export const contactLinks = [
  {
    name: "GitHub",
    handle: profile.github.handle,
    url: profile.github.url,
    description: "View my repositories and open-source work",
  },
  {
    name: "LinkedIn",
    handle: profile.linkedin.handle,
    url: profile.linkedin.url,
    description: "Connect with me professionally",
  },
  {
    name: "Email",
    handle: profile.email,
    url: `mailto:${profile.email}`,
    description: "Send me a message anytime",
  },
  {
    name: "Phone",
    handle: profile.phone,
    url: `tel:${profile.phone.replace(/\s/g, "")}`,
    description: "Available for calls and inquiries",
  },
];
