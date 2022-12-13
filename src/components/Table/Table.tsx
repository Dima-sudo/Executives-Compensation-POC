import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableComponent from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Column, Row } from './Table.types';

interface IProps {
    columns: Column[];
    rows: Row[];
    isSticky?: boolean;
}

const Table: React.FC<IProps> = ({ columns, rows, isSticky }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const pageStartIndex = page * rowsPerPage;
    const pageEndIndex = page * rowsPerPage + rowsPerPage;
    const MAX_TABLE_HEIGHT_PX = 500;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: MAX_TABLE_HEIGHT_PX }}>
                <TableComponent
                    stickyHeader={isSticky || true}
                    aria-label="sticky-table"
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || 'left'}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(pageStartIndex, pageEndIndex).map((row) => (
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.key}
                            >
                                {columns.map((column) => {
                                    // @ts-ignore
                                    const value = row.data[column.id];
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                        >
                                            {column.format
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </TableComponent>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Table;
