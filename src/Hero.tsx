
"use client";
import Image from "next/image";
import Link from "next/link";


interface HeroProps {
    imgSrc: string;
    title: string;
    copytext: string;
}

export const Hero: React.FC<HeroProps> = ({imgSrc, title, copytext}: HeroProps) => {
    return (
        <h1 className="text-primary text-2xl">Test this</h1>
    );
  }