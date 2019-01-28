import React from 'react';
import { storiesOf } from '@storybook/react';

import { ButtonActive, ButtonInactive } from '../src/components/Stories';

storiesOf('Button', module)
	.add('active', () => (
		<ButtonActive onClick={() => alert('Active button clicked')}>Active</ButtonActive>
	))
	.add('inactive', () => (
		<ButtonInactive onClick={() => alert('Inactive button clicked')}>Inactive</ButtonInactive>
	));