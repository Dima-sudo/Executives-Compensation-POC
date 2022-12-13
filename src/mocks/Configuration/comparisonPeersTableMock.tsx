import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Column } from '../../components/Table/Table.types';
import { companies, getRandomValue } from './misc';

export const columns: Column[] = [
    {
        id: 'isSelected',
        label: '',
        format: () => (
            <Checkbox
                defaultChecked
                inputProps={{ 'aria-label': 'checkbox' }}
            />
        ),
    },
    {
        id: 'companyId',
        label: 'Company ID',
    },
    {
        id: 'companyName',
        label: 'Company Name',
    },
    {
        id: 'sales',
        label: 'Sales',
    },
    {
        id: 'grossIncome',
        label: 'Gross Income',
    },
    {
        id: 'profitAndLoss',
        label: 'P&L',
    },
    {
        id: 'marketCapitalization',
        label: 'Market Capitalization',
    },
    {
        id: 'equity',
        label: 'Equity',
    },
    {
        id: 'matchingParameters',
        label: 'Matching Parameters',
    },
];

export const rows = companies.map((companyName, i) => ({
    key: `row-${i}`,
    data: {
        isSelected: true,
        companyId: getRandomValue(2),
        companyName,
        sales: getRandomValue(3),
        grossIncome: getRandomValue(3),
        profitAndLoss: getRandomValue(2),
        marketCapitalization: getRandomValue(3),
        equity: getRandomValue(3),
        matchingParameters: Math.floor(Math.random() * 8),
    },
}));
