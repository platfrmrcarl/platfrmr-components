"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const image_1 = __importDefault(require("next/image"));
const Hero = ({ imgSrc, title, copytext }) => {
    return (<>
        <div className="container p-8 mx-auto xl:px-0 flex flex-wrap  ">
        <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-primary lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                    {title}
                </h1>
                <p className="py-5 text-xl leading-normal text-neutral lg:text-xl xl:text-2xl dark:text-base-100">
                    {copytext}
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                    <a href="https://web3templates.com/templates/nextly-landing-page-template-for-startups" target="_blank" rel="noopener" className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md ">
                        Get Started Now
                    </a>
                </div>
            </div>
        </div><div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="">
                    <image_1.default src={imgSrc} width="616" height="617" className={"object-cover"} alt="Hero title" loading="eager"/>
                </div>
            </div>
            </div>
            </>);
};
exports.Hero = Hero;
