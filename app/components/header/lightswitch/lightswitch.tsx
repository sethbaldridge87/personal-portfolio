'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from "./lightswitch.module.css";
import Bulb from './bulb';

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button className={styles.switch}>
      <Bulb />
    </button>
  )

  if (resolvedTheme === 'dark') {
    return (
      <button 
      className={styles.switch} 
      onClick={() => setTheme('light')} 
      aria-pressed={mounted} 
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : ''}>
        <Bulb />
      </button>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <button 
      className={styles.switch} 
      onClick={() => setTheme('dark')} 
      aria-pressed={mounted} 
      aria-label={resolvedTheme === 'light' ? 'Switch to dark mode' : ''}>
        <Bulb />
      </button>
    )
  }
}