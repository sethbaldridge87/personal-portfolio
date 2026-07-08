import styles from "./navbutton.module.css";

interface NavButtonProps {
    onToggle: () => void,
    mobileState: boolean
}

const elements = Array.from({ length: 3 });

export default function NavButton({ onToggle, mobileState }: NavButtonProps) {
    return (
        <div className={`${styles.mobileIcon} ${mobileState ? styles.navButtonClicked : ""}`} onClick={onToggle}>
            {elements.map((e, i) => (
                <span key={i} className={styles.line}></span>
            ))} 
        </div>
    );
}