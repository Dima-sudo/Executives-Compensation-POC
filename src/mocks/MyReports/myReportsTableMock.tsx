/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { Column, Row } from '../../components/Table/Table.types';
import { colors } from '../../theme/colors';

export const generateColumnData = (
    onReportClickFunction: () => void
): Column[] => [
    {
        id: 'reportName',
        label: 'Report Name',
        format: (value) => (
            <div
                style={{ color: colors.blue40, cursor: 'pointer' }}
                onClick={onReportClickFunction}
                role="link-to-report"
            >
                {value}
            </div>
        ),
    },
    { id: 'date', label: 'Date' },
];

export const rows: Row[] = [
    {
        key: 'row-1',
        data: {
            reportName: 'Report-1',
            date: new Date().toLocaleDateString('en-US'),
        },
    },
];
