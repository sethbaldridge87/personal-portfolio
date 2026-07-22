import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    const navItems: string [] = ['About', 'Resume', 'Projects', 'References', 'Contact'];
    const thisYear: number = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <small className={styles.copyright}>©{thisYear} Seth Baldridge</small>
        </footer>
    )
}