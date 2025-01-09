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
        <><div className="flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <h1 className="text-4xl font-bold leading-snug tracking-tight text-primary lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                        {title}
                    </h1>
                    <p className="py-5 text-xl leading-normal text-neutral lg:text-xl xl:text-2xl dark:text-base-100">
                        {copytext}
                    </p>

                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        <Link
                            href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                            target="_blank"
                            rel="noopener"
                            className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md ">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="">
                    <Image
                        src={imgSrc}
                        width="616"
                        height="617"
                        className={"object-cover"}
                        alt="Hero title"
                        loading="eager"
                        />
                </div>
            </div>
        </div>
        </>
    )
}