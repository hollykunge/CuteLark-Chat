import { Box } from 'cutelark-ui';
import React from 'react';

import NegativeGrowthSymbol from './NegativeGrowthSymbol';

export default {
	title: 'components/data/NegativeGrowthSymbol',
	component: NegativeGrowthSymbol,
	decorators: [
		(fn) => <Box children={fn()} margin='x16' />,
	],
};

export const Default = () => <NegativeGrowthSymbol />;

export const WithColor = () => <NegativeGrowthSymbol />;

WithColor.story = {
	decorators: [
		(storyFn) => <Box color='danger'>{storyFn()}</Box>,
	],
};
