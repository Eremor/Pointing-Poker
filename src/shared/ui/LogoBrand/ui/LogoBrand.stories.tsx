import type { Meta, StoryObj } from '@storybook/react';
import { LogoBrand } from './LogoBrand';

const meta: Meta<typeof LogoBrand> = {
  title: 'shared/LogoBrand',
  component: LogoBrand,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
