import React, { useMemo, useRef } from 'react';
import { PositionAnimated, AnimatedVisibility, Menu, Option } from 'testlark';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';

import { useSetting } from '../../../contexts/SettingsContext';
import { useTranslation } from '../../../contexts/TranslationContext';
import UserCard from '../../../components/UserCard';
import { Backdrop } from '../../../components/Backdrop';
import { ReactiveUserStatus } from '../../../components/UserStatus';
import { LocalTime } from '../../../components/UTCClock';
import { useUserInfoActions, useUserInfoActionsSpread } from '../hooks/useUserInfoActions';
import { useRolesDescription } from '../../../contexts/AuthorizationContext';
import { AsyncStatePhase } from '../../../hooks/useAsyncState';
import { useEndpointData } from '../../../hooks/useEndpointData';

const UserCardWithData = ({ username, onClose, target, open, rid }) => {
	const ref = useRef(target);

	const getRoles = useRolesDescription();

	const t = useTranslation();

	const showRealNames = useSetting('UI_Use_Real_Name');

	const query = useMemo(() => ({ username }), [username]);

	const { value: data, phase: state } = useEndpointData('users.info', query);

	ref.current = target;

	const user = useMemo(() => {
		const loading = state === AsyncStatePhase.LOADING;
		const defaultValue = loading ? undefined : null;

		const { user } = data || { user: {} };

		const {
			_id,
			name = username,
			roles = defaultValue,
			status = null,
			statusText = status,
			bio = defaultValue,
			utcOffset = defaultValue,
			nickname,
			avatarETag,
		} = user;

		return {
			_id,
			name: showRealNames ? name : username,
			username,
			roles: roles && getRoles(roles).map((role, index) => (
				<UserCard.Role key={index}>{role}</UserCard.Role>
			)),
			bio,
			etag: avatarETag,
			localTime: Number.isInteger(utcOffset) && (
				<LocalTime utcOffset={utcOffset} />
			),
			status: status && <ReactiveUserStatus uid={_id} presence={status} />,
			customStatus: statusText,
			nickname,
		};
	}, [data, username, showRealNames, state, getRoles]);

	const handleOpen = useMutableCallback((e) => {
		open && open(e);
		onClose && onClose();
	});

	const { actions: actionsDefinition, menu: menuOptions } = useUserInfoActionsSpread(useUserInfoActions(user, rid));

	const menu = useMemo(() => {
		if (!menuOptions) {
			return null;
		}

		return <Menu
			flexShrink={0}
			mi='x2'
			key='menu'
			ghost={false}
			renderItem={({ label: { label, icon }, ...props }) => <Option {...props} label={label} icon={icon} />}
			options={menuOptions}
		/>;
	}, [menuOptions]);

	const actions = useMemo(() => {
		const mapAction = ([key, { label, icon, action }]) =>
			<UserCard.Action key={key} title={label} aria-label={label} onClick={action} icon={icon}/>;

		return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
	}, [actionsDefinition, menu]);

	return (<>
		<Backdrop bg='transparent' onClick={onClose}/>
		<PositionAnimated
			anchor={ref}
			placement='top-start'
			margin={8}
			visible={AnimatedVisibility.UNHIDING}
		>
			<UserCard
				{...user}
				onClose={onClose}
				open={handleOpen}
				actions={actions}
				t={t}/>
		</PositionAnimated></>
	);
};

export default UserCardWithData;
