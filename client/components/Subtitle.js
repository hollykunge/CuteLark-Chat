import { Box } from 'testlark';
import React from 'react';

function Subtitle(props) {
	return <Box
		color='default'
		fontFamily='sans'
		fontScale='s1'
		marginBlockEnd='x8'
		withRichContent
		{...props}
	/>;
}

export default Subtitle;
