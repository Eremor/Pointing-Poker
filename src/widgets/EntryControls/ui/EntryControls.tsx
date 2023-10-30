import { Flex, Tabs } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ScrumImage from 'shared/assets/images/scrum.svg';

import styles from './EntryControls.module.scss';

const EntryControls = () => {
  const { t } = useTranslation();
  return (
    <Flex
      className={styles.EntryControls}
      justify="space-between"
      align="center"
    >
      <div className={styles.ImageContainer}>
        <ScrumImage />
      </div>
      <Tabs
        variant="outline"
        radius="md"
        defaultValue="connect"
        className={styles.Tabs}
      >
        <Tabs.List justify="center">
          <Tabs.Tab
            value="create"
            className={styles.Tab}
          >
            {t('Create session')}
          </Tabs.Tab>
          <Tabs.Tab
            value="connect"
            className={styles.Tab}
          >
            {t('Connect to lobby')}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel
          value="create"
          className={styles.Panel}
        >
          {t('Create new session')}
        </Tabs.Panel>
        <Tabs.Panel
          value="connect"
          className={styles.Panel}
        >
          {t('Connect to lobby by URL')}
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
};

export { EntryControls };
