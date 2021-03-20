var ctx = document.getElementById('skills').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["HTML", "CSS", "JS"],
        datasets: [{
            label: '# of Hits',
            data: [95, 95, 80],
            backgroundColor: [
                '#f16528',
                '#0d6ba8',
                '#fbd601',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend : {
        display: false
        }            
    }
});