import Image from "next/image";
import styles from "./page.module.css";
import connect4 from "@/public/connect4.png";
import wordle from "@/public/wordle.png";
import productDocumentation from "@/public/product-documentation.png";

import projectsData from "../data/projects.json";

type Project = {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    cta: string;
    image: string;
    repo?: string;
}

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h1>My Projects</h1>
            {projectsData.map((p: Project, index: number) => (
                <div key={p.title} className={styles.project}>
                    <img src={p.image} />
                    <div className={styles.text}>
                        <h2>{p.title}</h2>
                        <h3>{p.subtitle}</h3>
                        <p>{p.description}</p>
                        {p.repo && <p><a href={p.repo} target="_blank">View the repository</a></p>}
                        <a href={p.link} target="_blank">{p.cta}</a>
                    </div>
                </div>
            ))}
        </section>
    )
}