/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Salma Azize",
  title: "Bonjour, je suis Salma Azize",
  subTitle: emoji(
    "Ingénieure logicielle dynamique 🚀, créative dans le développement d'applications Web/Mobile modernes avec React, Node.js, et toujours motivée pour apprendre de nouvelles technologies."
  ),  
  resumeLink:
    "https://drive.google.com/file/d/1RtCWAaVt_YPxSVTqo44hrrgU8JUDvBsq/view?usp=sharing", // Laisser vide pour masquer le bouton
  displayGreeting: true // Mettre à false pour masquer cette section, par défaut true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/salma803",
  linkedin: "https://www.linkedin.com/in/salma-azize1/",
  gmail: "azizesalma.10@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Ingénieure logicielle passionnée, avec une forte envie d'explorer et de maîtriser différentes technologies",
  skills: [
    emoji(
      "⚡ Conception et développement d'applications web et mobiles performantes"
    ),
    emoji(
      "⚡ Mise en œuvre de solutions logicielles innovantes et adaptées aux besoins métier"
    ),
    emoji(
      "⚡ Collaboration sur l'architecture, l'intégration et l'optimisation de systèmes complexes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École Nationale Supérieure d’Informatique et d’Analyse des Systèmes",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Génie Logiciel",
      duration: "Septembre 2023 - Juin 2026"
      
    },
    {
      schoolName: "Lycée Mohammed V",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "CPGE Option MP",
      duration: "September 2021 - Juin 2023",    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Afficher la section des compétences en pourcentage
  experience: [
    {
      Stack: "Développement Backend et API",
      progressPercentage: "90%"
    },
    {
      Stack: "Développement Frontend et Design UI/UX", 
      progressPercentage: "90%"
    },
    {
      Stack: "Programmation et Résolution d'Algorithmes",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Rester à false si pas de compte CodersRank
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Jolof Sysytem",
      companylogo: require("./assets/images/LogoJolof.png"),
      date: "Juillet 2025-Aout 2025",
      desc: "Développement d’une application de gestion de fidélité (React.js, Node.js/Express).",
      descBullets: [
" Optimisation serveur (-50 % temps de simulation).",
"Génération automatique de chèques-cadeaux.",
"Visualisations dynamiques pour l’admin."

      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  

  achievementsCards: [
    {
      title: "IBM Artificial Intelligence Analyst",
      subtitle: "Acquisition de compétences en Machine Learning, traitement du langage naturel (NLP) et modélisation de solutions d'IA.",
      image: require("./assets/images/IBM.png"),
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Veuillez fournir le lien intégré de votre CV
  display: true // Mettre à false pour masquer cette section, par défaut true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Discutons d'un projet ou dites simplement bonjour ! Ma boîte de réception est ouverte à tous.",
  number: "+212 6 23 45 67",
  email_address: "azizesalma.1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
