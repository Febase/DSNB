import AppComponent from './App';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'DSNB/App',
  component: AppComponent,
} as ComponentMeta<typeof AppComponent>;

export const App = () => <AppComponent />;
