import coligo from "./Experience/Assets/coligo.png";
import robusta from "./Experience/Assets/robusta.png";
import guc from "./Experience/Assets/guc.png";

export const cards = [
  {
    id: "1",
    title: "Virtual Reality",
    to: "vr",
  },
  {
    id: "2",
    title: "Game Development",
    to: "game",
  },
  {
    id: "3",
    title: "Web Development",
    to: "web",
  },
  {
    id: "4",
    title: "Computer Vision",
    to: "cv",
  },
  {
    id: "5",
    title: "Machine Learning",
    to: "ml",
  },
];

export const certificates = [
    {
      id: "1",
      title: "Robusta Studio Training Program",
    },
    {
      id: "2",
      title: "CIB Dazzling Competition",
    },
    {
      id: "3",
      title: "Web Development Coursera Course",
    },
    {
      id: "4",
      title: "Galala Challenge",
    },
    {
      id: "5",
      title: "IELTS Score",
    },
  ];

  export const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Coligo Technologies",
      icon: coligo,
      iconBg: "#383E56",
      date: "May 2022 - October 2022",
      points: [
        "Developing and maintaining a website for schools using React.js and CSS",
        "Collaborating with cross-functional teams such as backend developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and both getting and providing constructive feedback to other developers.",
        "Developing and maintaining an application for schools using React native",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Robusta Studio",
      icon: robusta,
      iconBg: "#E6DEDD",
      date: "July 2021 - September 2021",
      points: [
        "Developing and maintaining web applications using HTML, SCSS and Javascript as well as React.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Participating in requirements breakdown and leading the team.",
      ],
    },
    {
      title: "Junior Teaching Assistant",
      company_name: "GUC",
      icon: guc,
      iconBg: "#E6DEDD",
      date: "September 2020 - January 2022",
      points: [
        "Taught introduction to programming to 1st year engineering students as well as concepts of programming languages to 2nd year students.",
        "Gained communication and presentation skills while helping the students with the subject.",
        "Gained time management skills while doing it alongside my studies.",
      ],
    },
  ];