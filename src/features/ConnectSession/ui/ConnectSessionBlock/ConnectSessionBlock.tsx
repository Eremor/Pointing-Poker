import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import {
  Button,
  Flex,
  Group,
  Input,
  Text,
  useMantineColorScheme,
} from '@mantine/core';

import { classNames } from 'shared/lib/classNames/classNames';
import { useThemeColors } from 'shared/lib/hooks/useThemeColors';
import { checkSession } from 'entities/Session';

import styles from './ConnectSessionBlock.module.scss';

const ConnectSessionBlock = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { buttonColor } = useThemeColors();
  const { colorScheme } = useMantineColorScheme();
  const sessionID = '97770f8e-e471-4473-80de-f216b1c59956';

  return (
    <Flex
      className={styles.ConnectSessionBlock}
      direction="column"
    >
      <Text size="md">{t('Connect to session by URL')}:</Text>
      <Group className={styles.Container}>
        <Input
          className={classNames(styles.Input, [
            (colorScheme === 'dark' && styles.dark) as string,
          ])}
        />
        <Button
          className={styles.Button}
          color={buttonColor}
          onClick={() => dispatch(checkSession(sessionID))}
        >
          {t('Connect')}
        </Button>
      </Group>
    </Flex>
  );
};

export { ConnectSessionBlock };
