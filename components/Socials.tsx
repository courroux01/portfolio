import Link from 'next/link';
import React from 'react';
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiTiktokFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className={cn(containerStyles)}>
        {socialLinks.map((link, index) => {
          return (
            <Link key={index} href={link.path}>
              <div className={cn(iconStyles)}>{link.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
