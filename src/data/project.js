import {
  cakeOrderProject,
  fullStackTodoProject,
  chatFinderProject,
  paytmCloneLandingPageProject,
  jobcyJobportalProject,
  tradingViewProLandingPageProject,
} from "assets";

const projects = [
  {
    img: cakeOrderProject,
    title: "Online Cake Store",
    desc: `Designed and built an E-commerce Cake Store with a choice of light or dark themes, utilizing the powerful MERN Stack technology and Redux for state management. Integrated Razorpay and Chart.js for easy payment.`,
    deploy: "https://online-cake-order.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/cake-order-frontend",
    tech: ["React", "Redux", "Node", "MongoDB"],
  },
  {
    img: fullStackTodoProject,
    title: "Full Stack Todo App",
    desc: "MERN to-do app is the perfect solution for effortless task management. With full-stack capability and mobile responsiveness, it offers secure user authentication and a choice between light and dark themes.",
    deploy: "https://todofriend.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/todo-client",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    img: chatFinderProject,
    title: "Real Time Chat App",
    desc: "Chat Finder is a real-time messaging app that allows users to easily search and connect with their contacts using email. With Chat Finder, you can keep in touch with friends and family, share important information and images.",
    deploy: "https://chatfinder.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/chat-finder",
    tech: ["React", "Redux", "Firebase"],
  },
  {
    img: paytmCloneLandingPageProject,
    title: "Paytm landing page",
    desc: "Introducing a modern Paytm landing page, built using the latest technologies of HTML and Tailwind CSS. fully responsive design for optimal mobile viewing experience. This was my first project utilizing Tailwind CSS.",
    deploy: "https://paytmpro.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/paytmClone",
    tech: ["HTML", "Tailwind Css"],
  },
  {
    img: jobcyJobportalProject,
    title: "Job portal (Jobcy)",
    desc: "I developed the backend of a job portal app called Jobcy using the MERN stack. I focused on implementing strong authentication to ensure secure user access. The frontend development is yet to be completed.",
    deploy: "https://jobcy.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/Jobportal",
    tech: ["React", "Node", "MongoDB", "Meterial-UI"],
  },
  {
    img: tradingViewProLandingPageProject,
    title: "Trading view landing page",
    desc: "This is a Trading View landing page, a dynamic and visually stunning platform built using the latest technology React and Tailwind CSS. With a well-organized React folder structure. and intrigate trading view chart js. ",
    deploy: "https://tradingviewpro.netlify.app/",
    source: "https://github.com/deepakduttaOfficial/tradingview",
    tech: ["React", "Tailwind-Css", "owl-carousel"],
  },
];

export default projects;
