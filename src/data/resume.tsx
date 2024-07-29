import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Kishan Patel",
  initials: "KP",
  url: "https://dillion.io",
  location: "Toronto, Canada",
  locationLink: "https://maps.app.goo.gl/u5KJniN8Z8P9Tpyg6",
  description:
    "I'm a senior at Stephen Lewis Secondary School and am passionate about all things technology!",
  summary:
    "I'm a software engineer with a passion for building products that solve real-world problems. I have experience working with a variety of technologies and have a strong foundation in computer science. I hope to futher this knowledge in university and future careers.",
  avatarUrl: "/me.png",
  skills: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "MongoDB",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    'Pytorch',
    "Java",
    "C++",
    "C#"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kpatelswe",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kpatelswe",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpeg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Coming soon",
    }
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Stephen Lewis Secondary",
      href: "http://www.yrdsb.ca/schools/stephenlewis.ss",
      degree: "Ontario Secondary School Diploma",
      logoUrl: "/slss.png",
      start: "2021",
      end: "2025",
     },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Coming Soon",
      href: "",
      dates: "????",
      active: true,
      description:
        "Stay tuned.",
      technologies: [

      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/mystery.mp4",
    },
    {
      title: "Coming Soon",
      href: "",
      dates: "????",
      active: true,
      description:
        "Stay tuned.",
      technologies: [

      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mystery.mp4",
    },
    {
      title: "Coming Soon",
      href: "",
      dates: "????",
      active: true,
      description:
        "Stay tuned.",
      technologies: [

      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mystery.mp4",
    },
    {
      title: "Coming Soon",
      href: "",
      dates: "????",
      active: true,
      description:
        "Stay tuned.",
      technologies: [

      ],
      
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/mystery.mp4",
    },
  ],
  hackathons: [
    {
      title: "Recess Hacks 3.0",
      dates: "August 12th - 14th, 2023",
      location: "Remote",
      description:
        "Developed an open source meal-planning app that follows Canada's dietary guidelines.",
      image:
        "/Recess.png",
      links: [],
    }
  ],
} as const;
