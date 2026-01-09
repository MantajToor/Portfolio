"use client";

import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import Link from "next/link";
import {navbarStyles, getNavClassName, getNavStyle} from "@/lib/styles/navbar";

const navItems = [
    {name: "HOME", href: '#'},
    {name: "ABOUT", href: '#about'},
    {name: "SKILLS", href: '#skills'},
    {name: "PROJECTS", href: '#projects'},
    {name: "EXPERIENCE", href: '#experience'},
    {name: "CONTACT", href: '#contact'},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
          className={getNavClassName(scrolled)}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          style={getNavStyle(scrolled)}
        >
          <div className={navbarStyles.container}>
            <div className={navbarStyles.content}>
              <Link href="#" className={navbarStyles.logo}>
                &gt; PORTFOLIO
              </Link>
              <div className={navbarStyles.navLinks}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={navbarStyles.navLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
    )
}