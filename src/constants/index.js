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
    mysql,
    python,
    c,
    ethereum,
    linux,
    docker,
    meta,
    starbucks,
    chinatelecom,
    tesla,
    shopify,
    carrent,
    personalWeb,
    jobit,
    tripguide,
    threejs,
    wechat,
    telegram,
    linkedin,
    email,
  } from "../assets";
  

  
  export const navLinks = (t) => [
    {
      id: "about",
      title: t('navbar.about'),
    },
    {
      id: "experience",
      title: t('navbar.work'),
    },
    {
      id: "project",
      title: t('project.HeadText')
    },
    {
      id: "contact",
      title: t('navbar.contact'),
    },
  ];
  
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "FullStack Developer",
      icon: mobile,
    },
    {
      title: "BlockChian Developer",
      icon: backend,
    },
    {
      title: "Quant Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Ethereum",
      icon: ethereum,
    },
    {
      name: "Linux",
      icon: linux,
    },
  ];
  
  const experiences = (t) => [
    {
      title: t("experience.job1-title"),
      company_name: t("experience.job1-company_name"),
      icon: chinatelecom,
      iconBg: "#383E56",
      date: t("experience.job1-date"),
      points: [
        t("experience.job1-points1"),
        t("experience.job1-points2"),
        t("experience.job1-points3"),
        
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
  
  const projects = (t) => [
    {
      name: t("project.project1-title"),
      description:
        t("project.project1-description"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: personalWeb,
      source_code_link: "https://github.com/Ivan-Yang1/3D_website_portfolio/tree/master",
    },
    
  ];

  export const contactMethods = [
    {
      name: "WeChat",
      icon: wechat,
      link: "https://wx.d4t.cn/b28X3E",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/%E4%B8%80%E5%87%A1-%E6%9D%A8-4b8b08300/",
    },
    {
      name: "Telegram",
      icon: telegram,
      link: "https://t.me/evan_yang0",
    },
    {
      name: "Email",
      icon: email,
      link: "mailto:1372269428@qq.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };