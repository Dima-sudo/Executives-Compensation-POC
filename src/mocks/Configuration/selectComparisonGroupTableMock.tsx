import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Column } from '../../components/Table/Table.types';
import Input from '../../components/Input/Input';

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
        id: 'kpi',
        label: 'KPI',
        format: (value) => value,
    },
    {
        id: 'sum',
        label: 'Sum',
        format: (value) => <span style={{ fontWeight: 800 }}>{value}</span>,
    },
    {
        id: 'updatedSum',
        label: 'Updated Sum',
        format: (value) => (
            <Input defaultValue={value as string} variant="standard" />
        ),
    },
    {
        id: 'bottomLimit',
        label: 'Bottom Limit',
        format: (value) => (
            <Input
                sx={{ width: 50 }}
                defaultValue={value as string}
                variant="standard"
            />
        ),
    },
    {
        id: 'topLimit',
        label: 'Top Limit',
        format: (value) => (
            <Input
                sx={{ width: 50 }}
                defaultValue={value as string}
                variant="standard"
            />
        ),
    },
    {
        id: 'isMandatory',
        label: 'Mandatory',
        format: () => <Checkbox />,
    },
];

export const rows = [
    {
        key: 'row-1',
        data: {
            isSelected: true,
            kpi: 'Sales',
            sum: '1619421',
            updatedSum: '',
            bottomLimit: '50%',
            topLimit: '50%',
            isMandatory: '',
        },
    },
    {
        key: 'row-2',
        data: {
            isSelected: true,
            kpi: 'Gross Income',
            sum: '116267'.toLocaleLowerCase(),
            updatedSum: '',
            bottomLimit: '50%',
            topLimit: '50%',
            isMandatory: '',
        },
    },
    {
        key: 'row-3',
        data: {
            isSelected: true,
            kpi: 'P&L',
            sum: '75887',
            updatedSum: '',
            bottomLimit: '50%',
            topLimit: '50%',
            isMandatory: '',
        },
    },
    {
        key: 'row-4',
        data: {
            isSelected: true,
            kpi: 'Market Capitalization',
            sum: '979441667',
            updatedSum: '',
            bottomLimit: '50%',
            topLimit: '50%',
            isMandatory: '',
        },
    },
    {
        key: 'row-5',
        data: {
            isSelected: true,
            kpi: 'Equity',
            sum: '655780',
            updatedSum: '',
            bottomLimit: '50%',
            topLimit: '50%',
            isMandatory: '',
        },
    },
];
