import {
  Container,
  Flex,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';

import styles from './Header.module.scss';
import { Logo } from 'shared/ui/Logo';

const Header = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      className={styles.Header}
      fluid
      bg={colorScheme === 'light' ? theme.colors.blue[6] : theme.colors.dark[6]}
      h={65}
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
      </Flex>
    </Container>
  );
};

export { Header };
