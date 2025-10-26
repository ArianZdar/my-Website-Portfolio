import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Other", link: "#other" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Designing and building efficient, scalable software that solves real-world problems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptop.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaboration without boundaries",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Software and Hardware related issues.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    // description: "Currently studying Software Engineering at Polytechnique Montreal. Working at Airbus Canada as an Information Management Specialist Intern. Experienced in developing, maintaing and updating projects and documentation.",
    title: "Current Status",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Wanna Work Together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Jarvis Voice Assistant",
    des: "Jarvis is a real-time AI voice assistant inspired by the Iron Man movies.",
    img: "/AI-Smart-Robots-Teaser.jpg",
    iconLists: ["/python.png", "/re.svg"],
    link: "https://github.com/ArianZdar/AI-Voice-Assistant2.0",
  },
    {
    id: 2,
    title: "Jeu Abberant",
    des: "A multiplayer RPG video game where players can explore a fantasy world, complete quests, and interact with other players in real-time.",
    img: "/jeu_abberant.png",
    iconLists: ["/angular2.png","/next.svg", "/ts.svg", "/aws.png","/sj.png" ],
    link: "https://gitlab.com/polytechnique-montr-al/log2990/20251/equipe-106/LOG2990-106",
  },
  {
    id: 3,
    title: "FINDJOB Mobile application",
    des: "FindJob is a modern mobile application built with React Native and Expo that helps users search, browse, and apply for job opportunities. ",
    img: "/Screenshot 2025-10-15 150353.png",
    iconLists: ["/re.svg", "/tail.svg", "/sj.png"],
    link: "https://github.com/ArianZdar/FINDJOB-React-Native-mobile-app-",
  },
    {
    id: 4,
    title: "Real-Time-Sign-Language",
    des: "Real-time Sign Language Detection app built with Python, OpenCV, and TensorFlow. .",
    img: "/image.png",
    iconLists: ["/python.png"],
    link: "https://github.com/ArianZdar/Real-Time-Sign-Language-Detection-with-Python.git",
  },

];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const smallProjects = [
  {
    quote:"Designing and building two different robots from scratch using Micro-Processors and various sensors to perform specific tasks autonomously. Working with C++ and C",
    name: "University Robotics Project",
    title: "Autonomous Robot Development",
  },
  {
    quote:"Design the infrastructure and implement a cloud-based solution using AWS services to enhance scalability and reliability. Using multiple services available on AWS such as S3, EC2, Lambda, CloudFormation, CloudWatch, IAM, and RDS to build and deploy applications.",
    name: "Airbus Canada Internship Project",
    title: "Cloud Infrastructure Development",
  },
  {
    quote:"Implement a notification system that sends real-time alerts to users based on specific triggers or events within an application. Utilizing services such as AWS SNS and Lambda functions to create a robust and scalable notification solution.",
    name: "Airbus Canada Internship Project",
    title: "Cloud Infrastructure Development",
  },
    

]

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Information Management Specialist Intern (PLM) - Airbus",
    desc: "Assisted in the development, management, maintance and migration of applications and datas.",
    className: "md:col-span-2",
    thumbnail: "/airbus.jpg",
    alt: "airbus",
  },
  {
    id: 2,
    title: "Sales Specialist ",
    desc: "Learned how to help the customers find the right products for their needs while providing an excellent shopping experience.",
    className: "md:col-span-2", 
    thumbnail: "/apple.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/ArianZdar"
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/arian-zare-dar-8509342b0/"
  },
];