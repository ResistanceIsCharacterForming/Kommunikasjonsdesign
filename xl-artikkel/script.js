window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset
    document.querySelector(".background").style.transform =
      "translateY(" + scrollPosition * 0.7 + "px)"
  })

const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
            label: 'Gutter 6-24 år',
            data: [2.0, 2.1, 2.2, 2.1, 2.0, 2.0, 2.0, 2.1, 2.2, 2.2, 2.2, 2.4, 2.5],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: .1
        },
        {
            label: 'Jenter 6-24 år',
            data: [0.8, 0.9, 0.9, 1.0, 1.0, 1.0, 1.0, 1.1, 1.2, 1.5, 1.5, 2.0, 2.5],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });