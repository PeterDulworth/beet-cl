import React from 'react';
// import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import our component from this folder
import TextInput from './TextInput';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('TextInput')
	.add('with text', () => (
		<TextInput onClick={action('clicked')}>Hello Button</TextInput>
	))
	.add('with emoji', () => (
		<TextInput onClick={action('clicked')}>🚿 🚿 🐈 🐈</TextInput>
	));2