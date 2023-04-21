import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    siemens,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React-Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Sofware Developer Intern",
      company_name: "Siemens",
      icon: siemens,
      iconBg: "#383E56",
      date: "July 2022 - Aug 2022",
      points: [
        "Creating custom OData service using Apache Olingo framework to expose data from backend systems to frontend applications.",
        "Design and implementation of individual microservices responsible for specific business capabilities, with lightweight communication protocols between services.",
        "Increased the efficiency of software by reducing the number of OData action calls with API chaining.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SpiceXchange",
      description:
        "A decentralized Web-based platform which works as a marketplace for spices of India developed using Blockchain Technology and Hyperledger-Fabic to offer transparency to the spice trade, allowing defective goods to be tracked back to their source.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hyperledger",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Gitesh2435/Decentralized-Market-for-Spices",
    },
    {
      name: "CryptoGiving",
      description:
        "Blockchain based philanthropy platform in which Ethereum’s smart contracts are implemented through which user performs transactions in Ether which helps donors to securly donate and also track how their money is being spent.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ethereum",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Gitesh2435/Philanthropy-Blockchain-Project/tree/main",
    },
    {
      name: "Equex",
      description:
        "A mathematical tool that evaluates algebric equation, finds roots of quadratic equation and generates graphical representation of any given algebraic expression and finds characteristics like minima, maxima, differentiablity, etc.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "graphics.h",
          color: "green-text-gradient",
        },
        {
          name: "algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };