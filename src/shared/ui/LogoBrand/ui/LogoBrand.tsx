import { Center, Flex, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import BrandIcon from 'shared/assets/icons/brand-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LogoBrand.module.scss';

interface LogoBrandProps {
  className?: string;
}

const LogoBrand = ({ className }: LogoBrandProps) => {
  const { t } = useTranslation();

  return (
    <Center className={classNames(styles.LogoBrand, [className!])}>
      <BrandIcon className={styles.Icon} />
      <Flex
        direction="column"
        className={styles.Container}
      >
        <Text
          fw={700}
          c="yellow"
          className={styles.Text}
        >
          {t('Poker')}
        </Text>
        <Text
          c="yellow"
          fw={700}
          className={styles.Text}
          styles={{
            root: {
              alignSelf: 'flex-end',
            },
          }}
        >
          {t('Planning')}
        </Text>
      </Flex>
    </Center>
  );
};

export { LogoBrand };
