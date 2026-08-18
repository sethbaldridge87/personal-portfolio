import styles from "./navbutton.module.scss";

interface NavButtonProps {
    onToggle: () => void,
    mobileState: boolean
}

const elements = Array.from({ length: 3 });

export default function NavButton({ onToggle, mobileState }: NavButtonProps) {
    return (
        <button className={`${styles.mobileIcon} ${mobileState ? styles.navButtonClicked : ""}`} onClick={onToggle}>
            {elements.map((e, i) => (
                <span key={i}></span>
            ))} 
        </button>
    );
}