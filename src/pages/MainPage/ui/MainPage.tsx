import { Flex } from '@mantine/core';
import { LogoBrand } from 'shared/ui/LogoBrand';
import { EntryControls } from 'widgets/EntryControls';

const MainPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      styles={{
        root: {
          marginBlock: 'clamp(40px, 7vw, 100px)',
          maxWidth: 1200,
          width: '100%',
        },
      }}
    >
      <LogoBrand />
      <EntryControls />
    </Flex>
  );
};

export default MainPage;
