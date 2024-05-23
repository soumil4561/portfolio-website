const about = {
  fname: "Soumil",
  lname: "Singh",
  designation: "Backend Developer",
  description:
    "I am a Backend Developer with 3 years of experience in developing scalable and secure applications. I have worked on various technologies like Node.js, Express.js, MongoDB, MySQL, and AWS. I have also worked on various projects like E-commerce, Social Media, and Real-time Chat applications. I am passionate about learning new technologies and implementing them in my projects.",
  skills: {
    Languages: ["JavaScript", "Typescript", "Python", "Java", "C++", "C"],
    Frameworks: ["Node.js", "Express.js", "React.js", "JavaFX", "RestAPI"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    Cloud: ["AWS", "Google Cloud", "Azure"],
    Tools: ["Git", "Docker", "Postman", "Kubernetes"],
    Others: [
      "Data Structures",
      "Algorithms",
      "Design Patterns",
      "DBMS",
      "OS",
      "Networking",
      "Information Retrievel",
      "Cryptography and Network Security",
    ],
  },
};

const experience = [
  {
    role: "Backend Developer Intern",
    company: "ABC Pvt. Ltd.",
    date: "May 2024 - Present",
    skills: ["Node.js", "Express.js", "MongoDB", "Git"],
  },
  {
    role: "Software Developer",
    company: "XYZ Pvt. Ltd.",
    date: "May 2022 - May 2024",
    skills: ["Java", "JavaFX", "MySQL", "Git"],
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    major: "Computer Science",
    university: "Indian Institute of Information Technology, Vadodara",
    date: "2021 - 2025",
  },
  {
    degree: "High School",
    major: "Science",
    school: "GVN - The Global School",
    date: "2019 - 2021",
  },
];

const projects = [
  {
    title: "E-commerce Website",
    description:
      "Developed an E-commerce website using MERN stack. The website has features like product listing, product details, cart, and payment gateway integration.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    title: "Real-time Chat Application",
    description:
      "Developed a Real-time Chat application using Socket.io. The application has features like group chat, private chat, and file sharing.",
    skills: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
  },
];

module.exports = {
  about,
  experience,
  education,
  projects,
};
