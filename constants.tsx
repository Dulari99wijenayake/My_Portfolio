import React from 'react';
// FIX: Import Publication and Testimonial types
import type { Project, Skill, Experience, EducationItem, Article, Certification, VolunteerExperience, Hobby, Publication, Testimonial } from './types';
import { Github, Linkedin, Mail, Feather, Theater, Crown } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    title: 'My Portfolio Website',
    description: 'This personal portfolio, designed to be a clean, modern, and responsive showcase of my skills and projects. Built with React, TypeScript, and Tailwind CSS.',
    type: 'Individual',
    imageUrls: [
      '/My_Portfolio/UI/portfolio_images/Screenshot (782).png',
      '/My_Portfolio/UI/portfolio_images/Screenshot (783).png',
      '/My_Portfolio/UI/portfolio_images/Screenshot (784).png',
      '/My_Portfolio/UI/portfolio_images/Screenshot (786).png',
      '/My_Portfolio/UI/portfolio_images/Screenshot (787).png',
      '/My_Portfolio/UI/portfolio_images/Screenshot (789).png',
    ],
    sourceUrl: 'https://github.com/Dulari99wijenayake/My_Portfolio',
  },
  {
    title: 'Rock-Paper-Scissors Game',
    description: 'A console-based game where the user plays against the computer, demonstrating Python basics and control logic.',
    type: 'Individual',
    imageUrls: [
      '/My_Portfolio/UI/rock_paper_scissors_images/WhatsApp Image 2025-09-25 at 12.29.40_b9588e70.jpg',
      '/My_Portfolio/UI/rock_paper_scissors_images/WhatsApp Image 2025-09-25 at 12.29.41_4f4a4949.jpg',
      '/My_Portfolio/UI/rock_paper_scissors_images/WhatsApp Image 2025-09-25 at 12.29.41_b85b15be.jpg',
      '/My_Portfolio/UI/rock_paper_scissors_images/WhatsApp Image 2025-09-25 at 12.29.41_d3a13f84.jpg',
    ],
    sourceUrl: 'https://github.com/Dulari99wijenayake/Rock-Paper-Scissors-Game',
  },
  {
    title: 'EmoCare - AI Chatbot for Mental Health',
    description: 'An AI-powered chatbot integrated into a web application for personalized mental health counseling and wellness support. This project was developed as part of individual research.',
    type: 'Individual',
    imageUrls: [
      '/My_Portfolio/UI/emocare_images/Screenshot (732).png',
      '/My_Portfolio/UI/emocare_images/Screenshot (733).png',
      '/My_Portfolio/UI/emocare_images/Screenshot (755).png',
      '/My_Portfolio/UI/emocare_images/Screenshot (744).png',
      '/My_Portfolio/UI/emocare_images/Screenshot (757).png',
      '/My_Portfolio/UI/emocare_images/Screenshot (759).png',
    ],
    sourceUrl: 'https://github.com/Dulari99wijenayake/EmoCare',
  },
  {
    title: 'Apekshawata Athwelak - Hospital Support System',
    description: 'A web platform for Maharagama Apeksha Hospital, offering bus schedules, bookings, patient reviews, and essential information to improve accessibility and support for patients and visitors.',
    type: 'Group',
    imageUrls: [
      '/My_Portfolio/UI/apekshawata_athwelak_images/WhatsApp Image 2025-09-25 at 17.41.05_77e4f472.jpg',
      '/My_Portfolio/UI/apekshawata_athwelak_images/WhatsApp Image 2025-09-25 at 17.41.04_4211bdea.jpg',
      '/My_Portfolio/UI/apekshawata_athwelak_images/WhatsApp Image 2025-09-25 at 17.41.05_525d4479.jpg',
      '/My_Portfolio/UI/apekshawata_athwelak_images/WhatsApp Image 2025-09-25 at 17.41.04_400d9cf7.jpg',
    ],
    sourceUrl: 'https://github.com/Dulari99wijenayake/Apekshawata_Athwelak',
  },
  {
    title: 'Phoenix Airline Ticket Booking System',
    description: 'A web application designed to automate manual tasks for Phoenix Airline PVT, including user management, flight scheduling, and ticket booking functionalities.',
    type: 'Group',
    imageUrls: [
      '/My_Portfolio/UI/phoniex_airline_images/WhatsApp Image 2025-09-25 at 17.09.24_c30a915c.jpg',
      '/My_Portfolio/UI/phoniex_airline_images/WhatsApp Image 2025-09-25 at 17.09.25_b26e03a4.jpg',
      '/My_Portfolio/UI/phoniex_airline_images/WhatsApp Image 2025-09-25 at 17.09.25_b7f434e6.jpg',
    ],
    sourceUrl: 'https://github.com/Dulari99wijenayake/Phoenix_Airline_Tickets_Booking_System',
  },
  {
    title: 'Agri Farmer App - UI/UX Concept',
    description: 'A UI concept designed in Figma to boost farm productivity by tracking crops, offering weather forecasts, and providing real-time pest alerts for informed decision-making.',
    type: 'Group',
    imageUrls: [
      '/My_Portfolio/UI/agry_farmer_app_images/Screenshot (792).png',
      '/My_Portfolio/UI/agry_farmer_app_images/Screenshot (793).png',
      '/My_Portfolio/UI/agry_farmer_app_images/Screenshot (795).png',
      '/My_Portfolio/UI/agry_farmer_app_images/Screenshot (796).png',
      '/My_Portfolio/UI/agry_farmer_app_images/Screenshot (797).png',
    ],
    sourceUrl: '',
  },
];

const iconSize = { size: 32 };

export const SKILLS: { [key: string]: Skill[] } = {
  "Frontend": [
    { name: 'React.js', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React.js" width="32" height="32" /> },
    { name: 'JavaScript', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="32" height="32" /> },
    { name: 'CSS3', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="32" height="32" /> },
    { name: 'HTML5', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="32" height="32" /> },
  ],
  "Backend": [
    { name: 'Node.js', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="32" height="32" /> },
    { name: 'Express.js', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express.js" width="32" height="32" /> },
    { name: 'Python', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="32" height="32" /> },
    { name: 'C', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="32" height="32" /> },
    { name: 'Java', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="32" height="32" /> },
    { name: 'Spring Boot', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring Boot" width="32" height="32" /> },
  ],
  "Databases": [
    { name: 'MySQL', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="32" height="32" /> },
    { name: 'MongoDB', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="32" height="32" /> },
  ],
  "Tools": [
    { name: 'GitHub', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="32" height="32" /> },
    { name: 'Visual Studio', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" width="32" height="32" /> },
    { name: 'Figma', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Figma" width="32" height="32" /> },
    { name: 'NetBeans', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/netbeans/netbeans-original.svg" alt="NetBeans" width="32" height="32" /> },
  ],
};

const MediumIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={size} height={size}>
    <title>Medium</title>
    <path d="M13.54 12a4.44 4.44 0 01-4.44-4.44A4.44 4.44 0 0113.54 12zm-4.44-5.92A5.92 5.92 0 0015 12a5.92 5.92 0 00-5.92-5.92zM2 6h2.22v12H2zm3.33 0h2.22v12H5.33zm11.11 0H24v12h-7.56V6z"/>
  </svg>
);

const ResearchGateIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={size} height={size}>
    <title>ResearchGate</title>
    <path d="M18.156 18.156v-6.32c0-1.36-.596-1.85-1.42-1.85-.92 0-1.32.6-1.32 1.81v6.36H12.3V9.84h2.95v1.27h.03c.42-.72 1.25-1.34 2.6-1.34 2.8 0 3.276 1.77 3.276 4.3v4.386h-2.99zM7.34 8.84c-1.18 0-2.01-.86-2.01-1.95 0-1.12.83-1.95 2.01-1.95s2.01.83 2.01 1.95c0 1.09-.83 1.95-2.01 1.95zm-1.5 9.316h3.01V9.84H5.84v8.316zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/>
  </svg>
);


export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github {...iconSize} />, url: 'https://github.com/Dulari99wijenayake' },
  { name: 'LinkedIn', icon: <Linkedin {...iconSize} />, url: 'https://www.linkedin.com/in/dulari-wijenayake' },
  { name: 'Medium', icon: <MediumIcon {...iconSize} />, url: 'https://medium.com/@dulariwijenayake' },
  { name: 'ResearchGate', icon: <ResearchGateIcon {...iconSize} />, url: 'https://www.researchgate.net/profile/Dulari-Wijenayake' },
  { name: 'Email', icon: <Mail {...iconSize} />, url: 'mailto:dulariwijenayake@gmail.com' },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer Trainee',
    company: 'Invacity Technologies',
    period: 'Jan 2025 - Jul 2025',
    description: 'Engaged in a contract-based role as a full stack developer, contributing to various stages of the software development lifecycle.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Donext Private Limited',
    period: 'Jun 2024 - Dec 2024',
    description: 'Contributed as a full stack developer, focusing on the MERN stack to build and enhance web application features.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. (Hons) in Computer Science',
    institution: 'NSBM Green University',
    period: 'Jun 2021 - Present',
    details: 'Department of Computer and Data Science, Faculty of Computing.',
  },
  {
    degree: 'G.C.E. Advanced Level Examination',
    institution: 'Department of Examinations, Sri Lanka',
    period: '2020',
    details: 'Passed in the Common Stream with Combined Maths, Physics & ICT',
  },
];

export const ARTICLES: Article[] = [
  {
    title: 'MERN Stack: The Complete Introduction to Modern Full-Stack Development',
    description: 'An introductory guide to the MERN stack, covering its components (MongoDB, Express, React, Node.js) and how they work together.',
    platform: 'Medium',
    url: 'https://medium.com/@dulariwijenayake/mern-stack-the-complete-introduction-to-modern-full-stack-development-220a06affad6',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*HzNIcYsDm1B9_xBg.png',
  },
  {
    title: 'A Comprehensive Guide to Node.js Development',
    description: 'A deep dive into Node.js for backend development, exploring its core concepts, asynchronous nature, and ecosystem for building scalable APIs.',
    platform: 'Medium',
    url: 'https://medium.com/@dulariwijenayake/a-comprehensive-guide-to-node-js-development-9623e5102a3d',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*4J6Kif5DMdge3S0AdREx_A.jpeg',
  },
  {
    title: 'From Zero to Hero in Java: A Detailed Guide to Mastering Examples',
    description: 'A comprehensive guide for beginners and intermediates to master Java programming concepts through practical, real-world examples.',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/from-zero-hero-java-detailed-guide-mastering-examples-wijenayake-9wb7c/?trackingId=ImeEOCS%2FwKP%2BOnwpRBLdPQ%3D%3D',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQHCW-Di4l_9BQ/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1721632505319?e=1761782400&v=beta&t=XFOgbXOAsPuNnj3O9TP3p2vgQA4Ow-hhY_obeM-clDk',
  },
  {
    title: 'Evolution of the Computer',
    description: 'A journey through the history of computing, from ancient calculating devices to the technological marvels of the modern era.',
    platform: 'Medium',
    url: 'https://medium.com/@dulariwijenayake/evolution-of-the-computer-879edd74d97e',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Jy47VKxIu5Hmzez16R_dnQ.jpeg',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Project Management',
    issuer: 'Great Learning',
    url: 'https://www.mygreatlearning.com/certificate/YLLLDKOM',
  },
  {
    title: 'Statistics for Data Science',
    issuer: 'Great Learning',
    url: 'https://www.mygreatlearning.com/certificate/QJIVGGNL',
  },
  {
    title: 'React JS Tutorial',
    issuer: 'Great Learning Academy',
    url: 'https://www.mygreatlearning.com/certificate/IPHMWSRD',
  },
  {
    title: 'JavaScript Projects',
    issuer: 'Great Learning Academy',
    url: 'https://www.mygreatlearning.com/certificate/TIULMTEU',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    url: 'https://www.mygreatlearning.com/certificate/LQQSVBBC',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    url: 'https://www.linkedin.com/posts/dulari-wijenayake_web-design-for-beginners-activity-7105848295347941376-zUUn',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    url: 'https://www.linkedin.com/posts/dulari-wijenayake_python-for-beginners-activity-7091389231029235712-jYYW',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    url: 'https://www.linkedin.com/posts/dulari-wijenayake_successfully-obtained-certificate-in-python-activity-7088081531751067648-Lo7u',
  },
];

export const VOLUNTEER_EXPERIENCE: VolunteerExperience[] = [
  {
    role: 'Volunteer',
    organization: 'Arduino Community in Sri Lanka',
    period: 'Mar 2023',
    description: "Contributed to the first-ever Arduino Day in Sri Lanka (Arduino Day 2023), assisting with the Codeuino Hackathon and sharing a passion for Arduino during the event workshop. Helped foster innovation and collaboration within the vibrant local electronics community.",
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQH2fHHk2KyJXA/feedshare-shrink_1280/feedshare-shrink_1280/0/1690016484171?e=1761782400&v=beta&t=EgA_cM7r07Xtx78yKyX_U8jTr4y6PQthk5R5GyVpsX4',
      'https://media.licdn.com/dms/image/v2/D5622AQHtc10z3n9QPQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1690016485365?e=1761782400&v=beta&t=oQma1s60u7ZsTmWZAkT_Uythl2XyxHTjZ2Gh7fsIR_c',
      'https://media.licdn.com/dms/image/v2/D5622AQFGlkdmw5aqdA/feedshare-shrink_1280/feedshare-shrink_1280/0/1690016481936?e=1761782400&v=beta&t=i91n-ltWKCfdm1OGzM5PtJOOUuT5MQ38qx3MHfgRxA8'
    ]
  },
  {
    role: 'Volunteer',
    organization: 'Faculty of Computing, NSBM',
    period: '2023',
    description: "Served as a coordinator for organizing Open Days at the Faculty of Computing, NSBM. Collaborated with the faculty team to plan and manage events, guide visitors, and create an engaging environment for prospective students, contributing to the success of the university’s outreach initiatives.",
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQE0lTRqz8UOdA/feedshare-shrink_1280/B56ZlluUlHI8As-/0/1758348268090?e=1761782400&v=beta&t=YhzgeDWss9oQR6xzIVWDvV-W9m5PHBsNKE55KurORD4',
      'https://media.licdn.com/dms/image/v2/D5622AQENVZfRUV91yw/feedshare-shrink_2048_1536/B56ZlluUk.HAAw-/0/1758348270846?e=1761782400&v=beta&t=vuSjsh51J4sAKxlh31lGhBCJfLfSOVSuiv-xWbFL4lQ',
      'https://media.licdn.com/dms/image/v2/D5622AQGAphtBNQRMcA/feedshare-shrink_1280/B56ZlluUllKAAs-/0/1758348270318?e=1761782400&v=beta&t=fN_9S5r8j5ojBxaqNwx_Pp_-v4347RVdo2ay4Cvl5x8'
    ]
  },
  {
    role: 'Volunteer',
    organization: '21.1 Computer Science Batch, FOC, NSBM',
    period: '2022',
    description: "As part of the 21.1 Computer Science batch at NSBM Green University, I contributed to THINETHRA'22, an initiative to enhance IT literacy among school children. We completed the first phase at H/ Dolahena Kanishta Vidyalaya, Kiriwaththuduwa, laying a foundation for future tech minds through engaging sessions and awareness programs.",
    images: [
      'https://media.licdn.com/dms/image/v2/C5622AQF59xio21pbIQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1660848309734?e=1761782400&v=beta&t=6vM6lMVPwnUuNnkMWWMgX3SqQxy_KATj5xmS6DvjE4I',
      'https://media.licdn.com/dms/image/v2/C5622AQE5_hOszXeeDQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1660848309980?e=1761782400&v=beta&t=YOAqS2dHD7MtQCbAPQRBwMHXBCDujMnWDnzi25iJaZ8',
      'https://media.licdn.com/dms/image/v2/C5622AQHATwfAWVwfHQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1660848314300?e=1761782400&v=beta&t=7oUV92apY4nOCBWdZJLXUGN67TNHY9w0YDypwLzv5W4'
    ]
  },
];

export const HOBBIES: Hobby[] = [
  {
    name: 'Writing',
    icon: <Feather size={48} className="text-accent-green" />,
    description: "I enjoy creative writing and book authoring, achieving 1st place in an all-island literature competition."
  },
  {
    name: 'Chess',
    icon: <Crown size={48} className="text-accent-green" />,
    description: 'A keen chess player, I enjoy the strategic challenges of the game and have participated in university-level tournaments.'
  },
  {
    name: 'Stage Drama',
    icon: <Theater size={48} className="text-accent-green" />,
    description: 'Passionate about the performing arts, I have actively contributed to and performed with the NSBM drama club.'
  },
];

// FIX: Add PUBLICATIONS constant to resolve import error in components/Publications.tsx
export const PUBLICATIONS: Publication[] = [];

// FIX: Add TESTIMONIALS constant to resolve import error in components/Testimonials.tsx
export const TESTIMONIALS: Testimonial[] = [];