'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import BulbRegular from '@/public/icons/bulb-regular.svg';
import BulbSolid from '@/public/icons/bulb-solid.svg';
import styles from "./lightswitch.module.css";

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button className={styles.switch}>
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={45}
        height={50}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    </button>
  )

  if (resolvedTheme === 'dark') {
    return (
      <button className={styles.switch} onClick={() => setTheme('light')} aria-pressed={mounted} aria-label={mounted ? 'Switch to light mode' : 'Switch to dark mode'}>
        <Image height={50} width={45} src={BulbRegular} alt="Switch to light mode"></Image>
      </button>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <button className={styles.switch} onClick={() => setTheme('dark')} aria-pressed={mounted} aria-label={mounted ? 'Switch to light mode' : 'Switch to dark mode'}>
        <Image height={50} width={45} src={BulbSolid} alt="Switch to dark mode"></Image>
      </button>
    )
  }
}