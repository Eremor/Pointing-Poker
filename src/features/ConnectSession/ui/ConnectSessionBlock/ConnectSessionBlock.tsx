import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Flex,
  Modal,
  Text,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { checkSession, getSessionError, getSessionID } from 'entities/Session';

import styles from './ConnectSessionBlock.module.scss';
import { ConnectSessionForm } from '../ConnectSessionForm/ConnectSessionForm';

interface ConnectionFormProps {
  sessionID: string;
}

const ConnectSessionBlock = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { buttonColor } = useThemeColors();
  const { colorScheme } = useMantineColorScheme();
  const error = useSelector(getSessionError);
  const sessionID = useSelector(getSessionID);
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      sessionID: '',
    },
    validate: {
      sessionID: isNotEmpty(`${t('connect input validate error')}`),
    },
  });

  const handleConnect = (values: ConnectionFormProps) => {
    dispatch(checkSession(values.sessionID));
  };

  useEffect(() => {
    if (error !== undefined) {
      form.setFieldError('sessionID', `${t(error)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (sessionID) {
      open();
    }
  }, [sessionID, open]);

  return (
    <Flex
      className={styles.ConnectSessionBlock}
      direction="column"
    >
      <Text size="md">{t('Connect to session by ID')}:</Text>
      <form
        className={styles.Form}
        onSubmit={form.onSubmit(handleConnect)}
      >
        <TextInput
          className={classNames(styles.Input, [
            (colorScheme === 'dark' && styles.dark) as string,
          ])}
          {...form.getInputProps('sessionID')}
        />
        <Button
          className={styles.Button}
          color={buttonColor}
          type="submit"
        >
          {t('Connect')}
        </Button>
      </form>
      <Modal
        opened={opened}
        onClose={close}
        title="Connection title"
        centered
      >
        <ConnectSessionForm onCloseModal={close} />
      </Modal>
    </Flex>
  );
};

export { ConnectSessionBlock };
