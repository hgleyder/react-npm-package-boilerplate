import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

// Automatically import all files ending in *.story.js
const req = require.context("../src", true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
