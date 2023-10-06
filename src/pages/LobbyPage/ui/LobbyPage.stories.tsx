import type { Meta, StoryObj } from '@storybook/react';
import LobbyPage from './LobbyPage';

const meta: Meta<typeof LobbyPage> = {
  title: 'pages/LobbyPage',
  component: LobbyPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
