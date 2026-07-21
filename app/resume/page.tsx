import styles from "./page.module.css";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import React from "react";

type Experience = {
    "date": string;
    "title": string;
    "company": string;
    "location": string;
    "work": string[];
}

type Education = {
    "title": string;
    "date": string;
    "school": string;
}

const experienceArray = experienceData as Experience[];

const educationArray = educationData as Education[];

export default function Resume() {
    return (
        <section className={styles.resume}>
            <h1>Seth Baldridge</h1>
            <hr />
            <div className={styles.contactInfo}>
                <p>Salt Lake City, UT</p>
                <p>801-231-2778</p>
                <p>sethbaldridge87@gmail.com</p>
            </div>
            <h2>Career Summary</h2>
            <p>Senior Full-Stack Developer offering 9+ years of front-end focused experience. Boosts business growth by engineering high-performance, SEO-optimized web applications. Combines pixel-perfect design with scalable architecture to maximize site traffic, enhance user engagement, and accelerate customer conversions.</p>
            <h2>Experience</h2>
            <div className={styles.experience}>
                {experienceArray.map((x: Experience, index: number) => (
                    <React.Fragment key={x.company}>
                        <div data-index={index} className={styles.position}>
                            <p>{x.date}</p>
                            <h3>{x.title}</h3>
                            <h4>{x.company}</h4>
                            <h4>{x.location}</h4>
                            <ul>
                                {x.work.map((i: string, index: number) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                        {experienceArray.length != index + 1 && <br />}
                    </React.Fragment>       
                ))}
            </div>
            <br />
            <h2>Technical Skills</h2>
            <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>ADA compliance</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>jQuery</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>Adobe Creative Suite</li>
                <li>Git</li>
                <li>Github Copilot</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>AJAX</li>
                <li>APIs</li>
                <li>MongoDB</li>
                <li>SEO</li>
                <li>A/B Testing</li>
                <li>Mutiny</li>
                <li>Google Tag Manager</li>
            </ul>
            <br />
            <h2>Education</h2>
            {educationArray.map((e) => (
                <React.Fragment key={e.title}>
                    <h3>{e.title}</h3>
                    <h4>{e.date}</h4>
                    <h4>{e.school}</h4>
                    <br />
                </React.Fragment>   
            ))}
        </section>
    )
}