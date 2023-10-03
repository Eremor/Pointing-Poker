import {
  Container,
  Flex,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';

import { Logo } from 'shared/ui/Logo';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import styles from './Header.module.scss';

const Header = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      className={styles.Header}
      fluid
      bg={colorScheme === 'light' ? theme.colors.blue[6] : theme.colors.dark[6]}
      h={70}
      styles={{
        root: {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        styles={{
          root: {
            maxWidth: 1200,
            width: '100%',
          },
        }}
      >
        <Logo className={styles.Logo} />
        <ThemeSwitcher />
      </Flex>
    </Container>
  );
};

export { Header };
