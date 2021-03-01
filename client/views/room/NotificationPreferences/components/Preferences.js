import React from 'react';
import { Field, Select } from 'cutelark-ui';

export const Preferences = ({ name, options, onChange, optionDefault, children, ...props }) => (
	<Field {...props}>
		<Field.Label>
			{name}
		</Field.Label>
		<Field.Row>
			<Select onChange={onChange} options={options} value={optionDefault} />
			{children}
		</Field.Row>
	</Field>
);
