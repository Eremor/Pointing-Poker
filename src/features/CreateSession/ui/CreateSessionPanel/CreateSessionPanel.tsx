import { Flex, Text, Button, Title, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { CreateSessionForm } from '../CreateSessionForm/CreateSessionForm';

import styles from './CreateSessionPanel.module.scss';

const CreateSessionPanel = () => {
  const { t } = useTranslation();
  const { buttonColor, titleColor } = useThemeColors();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex
      className={styles.CreateSessionPanel}
      direction="column"
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
      <Flex
        align="center"
        justify="flex-start"
      >
        <Text
          size="md"
          className={styles.Text}
        >
          {t('Create session')}:
        </Text>
        <Button
          color={buttonColor}
          onClick={open}
        >
          {t('Start new session')}
        </Button>
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        title={t('Modal title create')}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        styles={{
          title: {
            width: '100%',
            textAlign: 'center',
          },
        }}
      >
        <CreateSessionForm onCloseModal={close} />
      </Modal>
    </Flex>
  );
};

export { CreateSessionPanel };
