import React from 'react';
import Table from '../../../../components/Table/Table';
import {
    columns,
    rows,
} from '../../../../mocks/Configuration/comparisonPeersTableMock';

const SelectComparisonPeers = () => (
    <div>
        <Table columns={columns} rows={rows} />
    </div>
);

export default SelectComparisonPeers;
