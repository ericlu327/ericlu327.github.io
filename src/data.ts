import {
  ProjectCarouselCard,
  SkillsByCategory,
  TimelineElementExperience,
} from "./types";

export const ExperienceSectionData: TimelineElementExperience[] = [
  {
    id: 1,
    jobPosition: "Software Engineering Intern",
    companyName: "Itential",
    companyLogo: require("../src/assets/itential.png"),
    location: "Atlanta, GA",
    date: "January 2024 – May 2024",
    description: [
      "Led the development of an automated security vulnerability remediation system, significantly enhancing network security by ensuring dependencies are up-to-date and reducing exposure to potential threats.", 
      "Achieving a massive reduction in manual workload from 60 hours to 10 minutes.",
      "Proficiently utilized CI/CD pipelines and implemented comprehensive unit and integration tests to streamline development workflows and deliver high-quality software in a timely manner.",
    ],
    skillsUsed: ["Javascript", "Git", "CI/CD", ],
    links: [],
  },
  {
    id: 2,
    jobPosition: "Undergraduate Researcher",
    companyName: "Georgia Tech VIP",
    companyLogo: require("../src/assets/VIP.png"),
    location: "Atlanta, GA",
    date: "Aug 2024 – Present",
    description: [
      "Collaborated on developing a framework for automating algorithm design using genetic programming techniques, enhancing the efficiency of algorithm generation.",
      "Expanded large language models to improve evolutionary algorithms, focusing on selection, mutation, mating, and evaluation functions.",
      "Conducted performance analysis and benchmarking of automated algorithms to optimize speed, accuracy, and resource utilization in real-world applications.",
    ],
    skillsUsed: ["SQL", "EMADE", "Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Git", "CI/CD", ],
    links: [],
  },
];

export const ProjectsSectionData: ProjectCarouselCard[] = [
  {
    id: 1,
    image: require("../src/assets/atlfoodfinder.png"),
    title: "Atlanta Food Finder",
    description:
      "An application to find food in Atlanta.",
    fullDescription:
      "A location-based food discovery platform that allows users to explore nearby restaurants, read reviews, view ratings, get directions, and apply various filters to find the perfect dining spot. Built using Django (backend) and HTML/CSS (frontend), this app includes a user-friendly interface and several essential features for food enthusiasts.",
    skillsUsed: [
      "Git",
      "Python",
      "Django",
      "HTML",
      "CSS",
    ],
    projectLink: "https://github.com/ericlu327/AtlFoodFinder",
    additionalLinks: [],
  },
  {
    id: 2,
    image: require("../src/assets/spotifywrapped.png"),
    title: "Spotify Wrapped",
    description:
      "A web application that allows you to view your Spotify Wrapped data.",
    fullDescription:
      "A web application that allows users to view their Spotify Wrapped data is a dynamic and interactive platform that lets users explore their personalized listening habits and trends from the past year. Built using Django (backend), Spotify's API, and HTML/CSS (frontend), the app provides an easy way for users to access their Spotify Wrapped data, including top artists, genres, tracks, playlists, and more.",
    skillsUsed: [
      "Python",
      "Git",
      "HTML",
      "CSS",
      "Django",
    ],
    projectLink: "https://github.com/ericlu327/SpotifyWrapped",
    additionalLinks: [],
  },
];

export const SkillsSectionData: SkillsByCategory[] = [
  {
    categoryTitle: "Programming & Markup Languages",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "XML" },
    ],
  },
  {
    categoryTitle: "Frameworks & Libraries",
    skills: [
      { name: "React.js" },
      { name: "React Native" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Django" },
      { name: "NumPy" },
      { name: "TensorFlow" },
    ],
  },
  {
    categoryTitle: "Tools",
    skills: [
      { name: "PostgreSQL" },
      { name: "Git" },
    ],
  },
];