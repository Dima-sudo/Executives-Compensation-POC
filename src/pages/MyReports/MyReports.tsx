import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Table from '../../components/Table/Table';
import {
    generateColumnData,
    rows,
} from '../../mocks/MyReports/myReportsTableMock';

const MyReports = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Section title="My Reports">
                <Table
                    columns={generateColumnData(() => {
                        navigate('/reports/1234');
                    })}
                    rows={rows}
                />
            </Section>
        </div>
    );
};

export default MyReports;
