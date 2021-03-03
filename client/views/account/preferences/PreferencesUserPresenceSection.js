import React, { useCallback } from 'react';
import { Accordion, Field, NumberInput, FieldGroup, ToggleSwitch } from 'cutelark-ui';

import { useTranslation } from '../../../contexts/TranslationContext';
import { useUserPreference } from '../../../contexts/UserContext';
import { useForm } from '../../../hooks/useForm';

const PreferencesUserPresenceSection = ({ onChange, ...props }) => {
	const t = useTranslation();
	const userEnableAutoAway = useUserPreference('enableAutoAway');
	const userIdleTimeLimit = useUserPreference('idleTimeLimit');

	const { values, handlers } = useForm({
		enableAutoAway: userEnableAutoAway,
		idleTimeLimit: userIdleTimeLimit,
	}, onChange);

	const {
		enableAutoAway,
		idleTimeLimit,
	} = values;

	const {
		handleEnableAutoAway,
		handleIdleTimeLimit,
	} = handlers;

	const onChangeIdleTimeLimit = useCallback((e) => handleIdleTimeLimit(Number(e.currentTarget.value)), [handleIdleTimeLimit]);

	return <Accordion.Item title={t('User_Presence')} {...props}>
		<FieldGroup>
			<Field display='flex' flexDirection='row' justifyContent='spaceBetween' flexGrow={1}>
				<Field.Label>{t('Enable_Auto_Away')}</Field.Label>
				<Field.Row>
					<ToggleSwitch checked={enableAutoAway} onChange={handleEnableAutoAway} />
				</Field.Row>
			</Field>
			<Field>
				<Field.Label>
					{t('Idle_Time_Limit')}
				</Field.Label>
				<Field.Row>
					<NumberInput value={idleTimeLimit} onChange={onChangeIdleTimeLimit} />
				</Field.Row>
			</Field>
		</FieldGroup>
	</Accordion.Item>;
};

export default PreferencesUserPresenceSection;
