import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

import IconSun from 'shared/assets/icons/sun-icon.svg';
import IconMoon from 'shared/assets/icons/moon-icon.svg';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  const { setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      className={classNames(styles.ThemeSwitcher, [
        className as string,
        computedColorScheme === 'light' ? styles.light : styles.dark,
      ])}
      size="lg"
      aria-label="Toggle color theme"
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant="transparent"
    >
      {computedColorScheme === 'dark' ? (
        <IconSun className={styles.Icon} />
      ) : (
        <IconMoon className={styles.Icon} />
      )}
    </ActionIcon>
  );
};

export { ThemeSwitcher };
