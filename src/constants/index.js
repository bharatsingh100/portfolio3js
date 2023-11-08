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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unthinkable,
    idfc,
    raghu,
    sql,
    java,
    spring,
    ecolive,
    github_bot,
    stock_app,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "SQL",
      icon: sql,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "IDFC First Bank",
      icon: idfc,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Developing and maintaining web applications using Java, Spring Boot and React.js",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Unthinkable Solutions",
      icon: unthinkable,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Jun 2022",
      points: [
        "Learned Java and Spring Boot. Developed Rest API. Learned about microservice architecture, working with Eureka Discovery server",
        "General training on Javascript, HTML, CSS and soft skills",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Raghu Technologies",
      icon: raghu,
      iconBg: "#383E56",
      date: "July 2020 - Sep 2020",
      points: [
        "Developed web Application that connect patients with doctors online using React.js and Firebase",
        "Collaborated with team members to design and develop application in react using agile best practices",
        "Configured Firebase services like Authentication and Storage to use in application",
        "Presented the appliation progress to stakeholder after every sprint",
      ],
    },
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
      name: "Doctor Online",
      description:
        "Web Application to connect patients with doctors online, it has 3 different dashboards for 3 types of users patients, doctors and admin",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: ecolive,
      source_code_link: "https://github.com/bharatsingh100/rt-ecolive",
    },
    {
      name: "Stock Data App",
      description:
        "Web application to display stock data on charts, and allows users to compare different stocks based on high, low and opening values",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
        {
          name: "restApi",
          color: "pink-text-gradient",
        },
      ],
      image: stock_app,
      source_code_link: "https://github.com/bharatsingh100/stock-data",
    },
    {
      name: "Github Bot",
      description:
        "A github bot to send automated messages on new issues and pull requests raised, to help maintainers of project save time",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "githubApi",
          color: "green-text-gradient",
        },
        {
          name: "automation",
          color: "pink-text-gradient",
        },
      ],
      image: github_bot,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };