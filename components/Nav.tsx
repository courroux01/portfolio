'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
];

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  motionStyles: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  motionStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={cn(linkStyles)}>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={cn(motionStyles)}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
