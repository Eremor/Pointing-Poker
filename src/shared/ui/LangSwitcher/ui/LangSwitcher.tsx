import {
  ActionIcon,
  useComputedColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const computedColorScheme = useComputedColorScheme('light');
  const theme = useMantineTheme();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ActionIcon
      className={classNames(styles.Switcher, [
        className as string,
        computedColorScheme === 'light' ? styles.light : styles.dark,
      ])}
      size="lg"
      aria-label="Toggle languages"
      variant="transparent"
      onClick={toggle}
      color={theme.white}
    >
      {t('lang')}
    </ActionIcon>
  );
};

export { LangSwitcher };
