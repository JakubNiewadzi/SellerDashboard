import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

export const [CHART_TYPE_BAR, CHART_TYPE_LINE] = [Bar, Line];

export const ChartDisplay = ({ mainData, secondaryData, dataSelector, title, ChartType }) => {
    if (mainData === undefined || ChartType === undefined)
        return <div></div>;
    if (secondaryData === undefined)
        return secondaryData = {};
    const unformattedData = { ...mainData, ...secondaryData };
    const nonEmptyData = Object.fromEntries(
        Object.entries(unformattedData).filter(([_, v]) => Object.keys(v).length > 0)
    );
    if (Object.keys(nonEmptyData).length === 0)
        return <div></div>;
    const colors = ["#84D5FF", "orange", "green", "yellow"];
    let nextColorIndex = 0;
    const nextColor = () => {
        return colors[Math.min(colors.length, nextColorIndex++)];
    }
    const data = {
        labels: Object.values(Object.values(nonEmptyData)[0]).map(y => y.key),
        datasets: Object.keys(nonEmptyData).map(periodName => {
            const currentColor = nextColor();
            return {
                label: periodName,
                data: Object.values(nonEmptyData[periodName]).map(y => y[dataSelector]),
                backgroundColor: currentColor,
                borderColor: currentColor,
            }
        }),
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: '#888' },
            },
            title: {
                display: true,
                text: title,
            },
        },
        scales: {
            y: { ticks: { color: '#888' } },
            x: { ticks: { color: '#888' } },
        },
    };
    return <ChartType options={options} data={data} />;
}

