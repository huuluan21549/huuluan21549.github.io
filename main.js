$(document).ready(function() {
    $('.sidenav').sidenav();
});
var chr = document.getElementById("myChart").getContext("2d");
var chr2 = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(chr, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Data Visitor',
            data: [1100, 1250, 1090, 1400, 1150, 1450, 1107],
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#fff',
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: '#fff',
            }

        }
    }
});
var myChart2 = new Chart(chr2, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Data Users',
            data: [100, 512, 150, 120, 190],
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#fff',
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: '#fff',
            }
        }
    }
});