import type { Meta, StoryObj } from '@storybook/react';
import GameResultPage from './GameResultPage';

const meta: Meta<typeof GameResultPage> = {
  title: 'pages/GameResultPage',
  component: GameResultPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
