import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    LineController,
    BarController,
    Title,
} from 'chart.js';
// eslint-disable-next-line import/no-unresolved
import { Doughnut, Chart, Bar, Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import * as S from './MockChart.style';
import { theme } from '../../../theme';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface IProps {
    chartType: 'doughnut' | 'barline' | 'bar' | 'scatter';
    isFullWidth?: boolean;
}

const colors = {
    color1: theme.colors.blue10,
    color2: theme.colors.green30,
    color3: theme.colors.blue60,
    color4: theme.colors.green50,
};

const MockChart: React.FC<IProps> = ({ chartType, isFullWidth }) => {
    const doughnutData = {
        labels: ['KPI-1', 'KPI-2', 'KPI-3', 'KPI-4'],
        datasets: [
            {
                label: 'Dataset-1',
                data: [300, 50, 100, 150],
                backgroundColor: [
                    colors.color1,
                    colors.color2,
                    colors.color3,
                    colors.color4,
                ],
                hoverOffset: 4,
            },
        ],
    };

    const barLineLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    const barLineData = {
        labels: barLineLabels,
        datasets: [
            {
                type: 'line' as const,
                label: 'KPI-1',
                borderColor: colors.color4,
                borderWidth: 2,
                fill: false,
                data: barLineLabels.map(() =>
                    faker.datatype.number({ min: -1000, max: 1000 })
                ),
            },
            {
                type: 'bar' as const,
                label: 'KPI-2',
                backgroundColor: colors.color2,
                data: barLineLabels.map(() =>
                    faker.datatype.number({ min: -1000, max: 1000 })
                ),
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar' as const,
                label: 'KPI-3',
                backgroundColor: colors.color3,
                data: barLineLabels.map(() =>
                    faker.datatype.number({ min: -1000, max: 1000 })
                ),
            },
        ],
    };

    const barLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    const barData = {
        labels: barLabels,
        datasets: [
            {
                label: 'KPI-1',
                data: barLabels.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: colors.color3,
            },
            {
                label: 'KPI-2',
                data: barLabels.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: colors.color1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Bar Chart',
            // },
        },
    };

    const scatterOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const scatterData = {
        datasets: [
            {
                label: 'Dataset-1',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                })),
                backgroundColor: colors.color3,
            },
        ],
    };

    const map = {
        doughnut: <Doughnut data={doughnutData} />,
        barline: (
            <Chart type="bar" data={barLineData} width={2000} height={700} />
        ),
        bar: (
            <Bar
                options={barOptions}
                data={barData}
                width={2000}
                height={700}
            />
        ),
        scatter: <Scatter options={scatterOptions} data={scatterData} />,
    };

    return (
        <S.ChartContainer isFullWidth={isFullWidth}>
            {map[chartType]}
        </S.ChartContainer>
    );
};

export default MockChart;
