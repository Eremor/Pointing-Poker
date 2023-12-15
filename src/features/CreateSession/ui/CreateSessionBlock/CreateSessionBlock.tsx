import { Flex, Text, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { CreateSessionForm } from '../CreateSessionForm/CreateSessionForm';

import styles from './CreateSessionBlock.module.scss';

const CreateSessionBlock = () => {
  const { t } = useTranslation();
  const { buttonColor } = useThemeColors();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex
      className={styles.CreateSessionBlock}
      direction="column"
    >
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

export { CreateSessionBlock };
