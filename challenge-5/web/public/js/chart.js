// Radar Chart
const radarOptions = {
    series: [
    {
        name: 'Reactor 1',
        data: [80, 50, 60, 90, 70]
    },
    {
        name: 'Reactor 2',
        data: [60, 70, 80, 40, 50]
    },
    {
        name: 'Reactor 3',
        data: [35, 61, 66, 12, 98]
    }
    ],
    labels: ['Temperature', 'Pressure', 'Power Output', 'Coolant Level', 'Safety'],
    chart: {
    height: 350,
    type: 'radar',
    background: '#1f2937',
    },
    title: {
    text: 'Reactor Parameters',
    style: {
        color: '#ffffff',
    }
    },
};

const radarChart = new ApexCharts(document.querySelector("#radarChart"), radarOptions);
radarChart.render();

// Pie Chart
const pieOptions = {
    series: [40, 30, 20],
    labels: ['Reactor 1', 'Reactor 2', 'Reactor 3'],
    chart: {
    type: 'pie',
    background: '#1f2937',
    },
    title: {
    text: 'Reactor Distribution',
    style: {
        color: '#ffffff',
    }
    },
};

const pieChart = new ApexCharts(document.querySelector("#pieChart"), pieOptions);
pieChart.render();

// Horizontal Bar Chart
const barOptions = {
    series: [
    {
        data: [200, 400, 600, 800, 1000],
    }
    ],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    background: '#1f2937',
    },
    plotOptions: {
    bar: {
        horizontal: true,
    },
    },
    xaxis: {
    categories: ['Reactor 1', 'Reactor 2', 'Reactor 3'],
    },
    title: {
    text: 'Reactor Capacities',
    style: {
        color: '#ffffff',
    }
    },
};

// Uranium Type Pie Chart
const uraniumPieOptions = {
    series: [35, 30, 35],
    labels: ['Uranium 235', 'Uranium 238', 'Uranium 239'],
    chart: {
    type: 'pie',
    height: 350,
    background: '#1f2937',
    },
    title: {
    text: 'Uranium Type',
    style: {
        color: '#ffffff',
    },
    },
};

const uraniumPieChart = new ApexCharts(document.querySelector("#uraniumPieChart"), uraniumPieOptions);
uraniumPieChart.render();

// Core Temperature Line Chart
const coreTemperatureOptions = {
    series: [
    {
        name: 'Core Temperature',
        data: [300, 325, 300, 315, 325, 315, 330, 310, 330, 325, 659, 724],
    },
    ],
    xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    chart: {
    height: 350,
    type: 'line',
    background: '#1f2937',
    },
    title: {
    text: 'Core Temperature (Monthly)',
    style: {
        color: '#ffffff',
    },
    },
};

const coreTemperatureChart = new ApexCharts(document.querySelector("#coreTemperatureChart"), coreTemperatureOptions);
coreTemperatureChart.render();

// Power Output Line Chart
const powerOutputOptions = {
    series: [
    {
        name: 'Power Output',
        data: [4800, 4600, 4700, 4500, 4600, 4700, 4800, 4900, 3325, 4200, 4800, 6800],
    },
    ],
    xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    chart: {
    height: 350,
    type: 'line',
    background: '#1f2937',
    },
    title: {
    text: 'Power Output (Monthly)',
    style: {
        color: '#ffffff',
    },
    },
};

const powerOutputChart = new ApexCharts(document.querySelector("#powerOutputChart"), powerOutputOptions);
powerOutputChart.render();

const powerGaugeOptions = {
    series: [6800], // Current power output value (change this value dynamically)

    chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
        enabled: true
    },
    },
    plotOptions: {
    radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
        size: '70%',
        },
        dataLabels: {
        name: {
            show: false
        },
        value: {
            offsetY: -20,
            fontSize: '1em',
            color: '#ffffff',
            formatter: function(val) {
            return val + ' MW';
            }
        }
        }
    }
    },
    fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
    },
    },
    stroke: {
    dashArray: 4
    },
    labels: ['Power Output'],
};

const powerGaugeChart = new ApexCharts(document.querySelector("#powerGaugeChart"), powerGaugeOptions);
powerGaugeChart.render();

const polarOptions = {
    series: [44, 55, 13],
    labels: ['Reactor 1', 'Reactor 2', 'Reactor 3'],
    chart: {
    type: 'polarArea',
    },
    plotOptions: {
    polarArea: {
        rings: {
        strokeWidth: 0,
        strokeColor: '#eaeaea',
        },
        spokes: {
        strokeWidth: 0,
        connectorColors: '#eaeaea',
        },
    }
    },
    fill: {
    opacity: 0.8
    },
    colors: ['#008ffb', '#00e396', '#feb019', '#ff4560'],
    stroke: {
    width: 0,
    colors: undefined
    },
    responsive: [
    {
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'bottom'
        }
        }
    }
    ]
};

const polarChart = new ApexCharts(document.querySelector("#polarChart"), polarOptions);
polarChart.render();