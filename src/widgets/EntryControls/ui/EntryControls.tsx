import { Flex, Box, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { CreateSessionBlock } from 'features/CreateSession';
import { ConnectSessionBlock } from 'features/ConnectSession';
import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import ScrumImage from 'shared/assets/images/scrum.svg';

import styles from './EntryControls.module.scss';

const EntryControls = () => {
  const { t } = useTranslation();
  const { titleColor } = useThemeColors();
  return (
    <Flex
      className={styles.EntryControls}
      justify="space-between"
      align="center"
    >
      <Box className={styles.ImageContainer}>
        <ScrumImage />
      </Box>
      <Flex
        direction="column"
        className={styles.Container}
      >
        <Title
          order={3}
          styles={{
            root: {
              color: titleColor,
            },
          }}
          className={styles.Title}
        >
          {t('Start your planning')}:
        </Title>
        <CreateSessionBlock />
        <Text
          className={styles.Text}
          styles={{
            root: {
              color: titleColor,
            },
          }}
        >
          {t('or')}
        </Text>
        <ConnectSessionBlock />
      </Flex>
    </Flex>
  );
};

export { EntryControls };
