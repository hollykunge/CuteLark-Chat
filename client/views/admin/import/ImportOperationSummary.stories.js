import { Table } from 'cutelark-ui';
import React from 'react';

import ImportOperationSummary from './ImportOperationSummary';

export default {
	title: 'admin/import/ImportOperationSummary',
	component: ImportOperationSummary,
	decorators: [(fn) => <Table>
		<Table.Body>
			{fn()}
		</Table.Body>
	</Table>],
};

export const _default = () => <ImportOperationSummary />;

export const skeleton = () => <ImportOperationSummary.Skeleton />;
