// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';

export interface Column {
    // ID is the key name of the column. Should match row key names
    id: string;
    label: string;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
    // eslint-disable-next-line no-unused-vars
    format?: (value: ReactNode) => ReactNode;
}

export interface Row {
    // Data keys should match column ID's
    data: { [key: string]: string | number | boolean };
    key: string;
}
