import { Flex, Box, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { CreateSessionPanel } from 'features/CreateSession';
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
        <CreateSessionPanel />
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
        {t('Connect to lobby by URL')}
      </Flex>
    </Flex>
  );
};

export { EntryControls };
