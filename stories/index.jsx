import React from 'react';
import { storiesOf } from '@storybook/react';

import { ButtonActive, ButtonInactive } from '../src/components/Stories';

storiesOf('Button', module)
	.add('Active', () => (
		<ButtonActive onClick={() => alert('Active button clicked')}>Active</ButtonActive>
	))
	.add('Inactive', () => (
		<ButtonInactive onClick={() => alert('Inactive button clicked')}>Inactive</ButtonInactive>
	));