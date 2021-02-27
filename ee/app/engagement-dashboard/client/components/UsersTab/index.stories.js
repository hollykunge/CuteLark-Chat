import { Margins } from 'testlark';
import React from 'react';

import { UsersTab } from '.';

export default {
	title: 'admin/enterprise/engagement/UsersTab',
	component: UsersTab,
	decorators: [
		(fn) => <Margins children={fn()} all='x24' />,
	],
};

export const _default = () => <UsersTab />;
