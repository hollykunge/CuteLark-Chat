import React, { FC } from 'react';
import { Box, Icon } from 'cutelark-ui';

import ExternalLink from '../../components/ExternalLink';
import { useTranslation } from '../../contexts/TranslationContext';

type MapViewFallbackProps = {
	linkUrl: string;
};

const MapViewFallback: FC<MapViewFallbackProps> = ({ linkUrl }) => {
	const t = useTranslation();

	return <Box is='span' fontScale='p1' display='inline-flex' alignItems='center' paddingBlock={4}>
		<Icon name='map-pin' size={20} color='hint' />
		<ExternalLink to={linkUrl}>
			{t('Shared_Location')}
		</ExternalLink>
	</Box>;
};

export default MapViewFallback;
