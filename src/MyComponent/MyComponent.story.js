import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MyComponent from './MyComponent';

const stories = storiesOf('MyComponent', module);

stories.addDecorator(withKnobs);

stories
  .add('with props', () => (
      <MyComponent />
  ));
