import { Divider } from 'cutelark-ui';
import React from 'react';

import { MessagesSentSection } from './MessagesSentSection';
import { MessagesPerChannelSection } from './MessagesPerChannelSection';

export function MessagesTab() {
	return <>
		<MessagesSentSection />
		<Divider />
		<MessagesPerChannelSection />
	</>;
}
