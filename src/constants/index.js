import { pantech} from "../assets/images";
import { amphisoft } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Machine Learning Intern",
        company_name: "Pantech E-Learning",
        icon: pantech,
        iconBg: "#accbe1",
        date: "Feb 2022 - March 2022",
        points: [
            "During the time of internship, I have learned about image processing and computer vision using Machine learning and deep learning with the help of Python language",
            "I have applied the learning from this internship in my final year project, using computer vision, image processing, and other Deep learning algorithms.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Python Intern",
        company_name: "Amphisoft Technologies",
        icon: amphisoft,
        iconBg: "#fbc3bc",
        date: "May 2021 - June 2021",
        points: [
            "Learned and implemented Object-Oriented Programming concepts in Python language.",
            "Applied those concepts while working on a project named Bank Account Management System which helped me in making my concepts clear.",
            "Worked in a team and learned about team ethics.",
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/saarimshaikh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saarim-shaikh/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ai Text Summerizer',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/saarimshaikh/Ai_summerizer.git',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'Created a web app fully mobile responsive which helps the user to keep track of their expenses with the power of JavaScript and VueJs.',
        link: 'https://github.com/saarimshaikh/Expense_tracker.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Image Resizer',
        description: 'Made a graphical user interface where users can upload any image and resize it accordingly.',
        link: 'https://github.com/saarimshaikh/Image_resizer.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Travel Expert',
        description: 'Created a lading page for travel explorers with most in demand framework ReactJs and React Hooks for state management.',
        link: 'https://github.com/saarimshaikh/Travel_UI-UX_app.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'To-Do App',
        description: 'Developed an ToDo application which supports both IOS and Android which keeps track of all your ToDos with amazing Flutter technology.',
        link: 'https://github.com/saarimshaikh/Todo_app.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Vehicle Collision Detection Model',
        description: 'Developed a Machine Learning model which detects whether there is a chance of collision or not and also gives detailed information about the environment in which the user is driving.',
        link: 'https://github.com/saarimshaikh/Vehicle-Collision-Detection-Model.git',
    }
];