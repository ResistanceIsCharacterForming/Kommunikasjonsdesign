const menuToggle = document.getElementById("menu-toggle")

menuToggle.addEventListener('click', () => {
    const mainMenu = document.getElementById("main-menu")
    mainMenu.classList.toggle('active')
})

let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    const mainMenu = document.getElementById("main-menu")
    
    if (!mainMenu.classList.contains('active')) {
        if (window.scrollY > lastScrollY) {  
            nav.classList.add('hidden')
        } else {
            nav.classList.remove('hidden')
        }
    }

    lastScrollY = window.scrollY
})

const ctx1 = document.getElementById('chart1')
        const ctx2 = document.getElementById('chart2')
      
        new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
            datasets: [{
              label: 'I arbeid',
              data: [81.6, 80.2, 80.2, 82.5, 83.3],
              borderWidth: 1
            },
            {
              label: 'I utdanning',
              data: [12.4, 13.2, 13.6, 12.4, 11.6],
              borderWidth: 1
            },
            {
              label: 'Utenfor arbeid og utdanning',
              data: [6.0, 6.6, 6.2, 5.1, 5.1],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })

        new Chart(ctx2, {
            type: 'bar',
            data: {
            labels: ['Yrkesaktiv', 'Student/elev', 'Pensjonist', 'Ufør/ikke i stand til å arbeide', 'Arbeidsledig'],
            datasets: [{
                label: 'Lite fornøyd med sin psykiske helse (0-5)',
                data: [18, 30, 16, 47, 44],
                borderWidth: 1,

            },
            {
                label: 'Middels fornøyd med sin psykiske helse (6-8)',
                data: [44, 44, 40, 35, 36],
                borderWidth: 1
            },
            {
                label: 'Svært fornøyd med sin psykiske helse (9-10)',
                data: [38, 26, 44, 19, 20],
                borderWidth: 1
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                    beginAtZero: true
                    }
                }
            }
        })

        AOS.init()