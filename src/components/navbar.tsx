'use client';

import React from 'react';
import Link  from "next/link";
import './navbar.css';
// const logo = "blank";

// Placeholder Class for Testing (not sure if will keep or not)
class lk {
    name: string;
    href: string;
    key: number;

    constructor(name: string, href: string, key: number) {
        this.name = name;
        this.href = href;
        this.key = key;
    }
}

const links: lk[] = [
    new lk("Queue", "/queue", 0),
    new lk("Quiz", "/quiz", 1),
    new lk("Style Checker", "/stylechecker", 2)
];

function handleClick() {
    alert("Please login through the linked page");
}

export default function Navbar() {
    return (
        <div>
        <nav className="navbar">
        {
            <>
            <div className="navbar-left">
                <i className="material-icons">computer</i>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    { links.map((link) => {
                        return (
                            <Link
                                key={link.key}
                                href={link.href}
                            > 
                            <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </ul>  
            </div>
            <div className = "navbar-right">
                <button onClick={handleClick}> Login Button</button>
            </div>
            </>
        }
        </nav>
        </div>
    );
};

