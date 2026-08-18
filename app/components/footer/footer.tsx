import styles from "./footer.module.scss";

export default function Footer() {
    const thisYear: number = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <small className={styles.copyright}>©{thisYear} Seth Baldridge</small>
        </footer>
    )
}