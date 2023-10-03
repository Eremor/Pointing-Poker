import { ActionIcon, useMantineColorScheme } from '@mantine/core';

import IconSun from 'shared/assets/icons/sun-icon.svg';
import IconMoon from 'shared/assets/icons/moon-icon.svg';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      className={classNames(styles.ThemeSwitcher, [
        className as string,
        colorScheme === 'light' ? styles.light : styles.dark,
      ])}
      size="lg"
      aria-label="Toggle color theme"
      onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
      variant="transparent"
    >
      {colorScheme === 'dark' ? (
        <IconSun className={styles.Icon} />
      ) : (
        <IconMoon className={styles.Icon} />
      )}
    </ActionIcon>
  );
};

export { ThemeSwitcher };
