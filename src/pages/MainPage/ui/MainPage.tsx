import { Flex } from '@mantine/core';
import { LogoBrand } from 'shared/ui/LogoBrand';

const MainPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      styles={{
        root: {
          marginBlock: 'clamp(40px, 10vw, 130px)',
          maxWidth: 1200,
          width: '100%',
        },
      }}
    >
      <LogoBrand />
    </Flex>
  );
};

export default MainPage;
