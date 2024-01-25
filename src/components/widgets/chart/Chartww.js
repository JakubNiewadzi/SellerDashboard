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

export const Kicia_v2 = ({ unformattedData, dataSelector, title, ChartType }) => {
    if (unformattedData === undefined || Object.keys(unformattedData).length === 0 || ChartType === undefined)
        return <div></div>;
    const data = {
        labels: Object.values(Object.values(unformattedData)[0]).map(y => y.key),
        datasets: Object.keys(unformattedData).map(periodName => {
            return {
                label: periodName,
                data: Object.values(unformattedData[periodName]).map(y => y[dataSelector]),
                backgroundColor: getRandomColor(),
            }
        }),
    }
    const ss = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
    return <ChartType options={ss} data={data} />;
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, 0.5)`;
}
