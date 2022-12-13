import React from 'react';
import Input from '../../components/Input/Input';
import { Column, Row } from '../../components/Table/Table.types';

export const columns: Column[] = [
    {
        id: 'component',
        label: 'Component',
        format: (value) => <span style={{ fontWeight: 800 }}>{value}</span>,
    },
    {
        id: 'sum',
        label: 'Sum',
        format: (value) => value,
    },
    {
        id: 'updatedSum',
        label: 'Updated Sum',
        format: (value) => (
            <Input defaultValue={value as string} variant="standard" />
        ),
    },
    {
        id: 'positionPercentage',
        label: 'Position Percentage',
        format: (value) => (
            <Input
                sx={{ width: 50 }}
                defaultValue={value as string}
                variant="standard"
            />
        ),
    },
    {
        id: 'yearlySumForFullTime',
        label: 'Yearly sum for a full time position',
        format: (value) => (
            <Input defaultValue={value as string} variant="standard" />
        ),
    },
];

export const rows: Row[] = [
    {
        key: 'row-1',
        data: {
            component: 'Salary',
            sum: '2913',
            updatedSum: '2913',
            positionPercentage: '100%',
            yearlySumForFullTime: '2913',
        },
    },
    {
        key: 'row-2',
        data: {
            component: 'Bonus',
            sum: '751',
            updatedSum: '751',
            positionPercentage: '100%',
            yearlySumForFullTime: '751',
        },
    },
    {
        key: 'row-3',
        data: {
            component: 'Shares',
            sum: '1318',
            updatedSum: '1318',
            positionPercentage: '100%',
            yearlySumForFullTime: '1318',
        },
    },
];
