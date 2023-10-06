import type { Meta, StoryObj } from '@storybook/react';
import GamePage from './GamePage';

const meta: Meta<typeof GamePage> = {
  title: 'pages/GamePage',
  component: GamePage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
