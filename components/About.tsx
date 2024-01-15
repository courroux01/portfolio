import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react';
import React from 'react';

const information = [
  {
    icon: <User2 size={20} />,
    text: 'Abdullah Alojado',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '(647) 709-1112',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'abdullah.alojado@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on December 26, 2003',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Studying Software Development and Network Engineering',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Milton, ON',
  },
];

const skills = [
  {
    title: 'Education',
    data: [
      {
        college: 'Sheridan College - Oakville Campus',
        program: 'Software Development and Network Engineering',
        date: '2023 - 2026',
      },
      {
        college: 'Polytechnic University of the Philippines',
        program: 'Bachelor of Science in Computer Engineering',
        date: '2022 - 2023',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        employer: 'CYFSA Licensing',
        role: 'DevOps Programmer',
        date: '10/2023 - 12/2023',
      },
      {
        employer: 'STACK SMMMOKED',
        role: 'Line Cook',
        date: '09/2023 - CURRENT',
      },
      {
        employer: 'SuperProf',
        role: 'Math Tutor',
        date: '10/2023 - CURRENT',
      },
      {
        employer: 'FAO Dance Crew',
        role: 'Dance Crew Manager and Choreographer',
        date: '10/2022 - 08/2023',
      },
    ],
  },
];
const About = () => {
  return <div>About</div>;
};

export default About;
