import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import AOS from "aos"
import "aos/dist/aos.css"

// Linjediagram
const LineChart = ({ id, labels, datasets }) => {
  useEffect(() => {
    const ctx = document.getElementById(id).getContext("2d")
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }, [id, labels, datasets])

  return <canvas data-aos="fade-up" id={id}></canvas>
}

// Stolpediagram
const BarChart = ({ id, labels, datasets }) => {
  useEffect(() => {
    const ctx = document.getElementById(id).getContext("2d")
    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }, [id, labels, datasets])

  return <canvas data-aos="fade-up" id={id}></canvas>
}

// Hovedkomponeten
export default function Article4() {
  // Jenter
  const lineChartData1 = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "0-5 år",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "6-11 år",
        data: [0.8, 0.8, 0.8, 0.9, 0.9, 0.9, 0.9, 1.0, 1.0, 1.0, 1.2, 1.2, 1.3],
        borderWidth: 1,
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
      {
        label: "12-15 år",
        data: [1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5, 1.6, 2.0, 2.5],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "16-19 år",
        data: [1.0, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.2, 1.3, 1.3, 1.5, 2.2, 3.3],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "20-24 år",
        data: [0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.6, 0.7, 1.0, 1.3],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  }
  // Gutter
  const lineChartData2 = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "0-5 år",
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderWidth: 1,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "6-11 år",
        data: [2.2, 2.2, 2.2, 2.2, 2.1, 2.2, 2.2, 2.3, 2.3, 2.3, 2.4, 2.6, 2.9],
        borderWidth: 1,
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
      {
        label: "12-15 år",
        data: [2.0, 2.0, 2.0, 1.9, 1.9, 1.9, 1.8, 1.8, 1.8, 1.9, 2.0, 2.1, 2.4],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "16-19 år",
        data: [1.7, 1.7, 1.6, 1.6, 1.5, 1.6, 1.6, 1.6, 1.7, 1.7, 1.8, 2.0, 2.3],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "20-24 år",
        data: [0.9, 0.9, 1.0, 1.0, 1.0, 1.1, 1.1, 1.2, 1.2, 1.3, 1.4, 1.6, 1.9],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  }
  const barChartData = {
    labels: [
      "20-29 år",
      "30-39 år",
      "40-49 år",
      "50+ år"
    ],
    datasets: [
      {
        label: "1995-1996 (%) ",
        data: [28.8, 39.5, 22.9, 8.8],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "1997-1998 (%)",
        data: [28.4, 34.5, 31.5, 5.6],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "1999-2000 (%)",
        data: [20.9, 26.0, 34.5, 18.6],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  const randomMinMax = (min, max) => Math.random() * (max - min) + min

  const thoughts = [
    "Hvis du har dårlig tid, så tar det ofte lengre tid å skynde seg",

    "Et speil reflekterer deg, men det kan aldri vise deg hvordan andre ser deg",

    "Når du drikker, blir vannet midlertidig en del av deg før du blir en del av vannet igjen",

    "Mennesker er de eneste dyrene som betaler for å bo på planeten sin",

    "Vi er aldri så unge som vi er akkurat nå",

    "Husket jeg å slå av kaffetrakteren før jeg dro hjemmefra?",

    "Hvorfor blir sokker alltid borte etter en vask?",

    "Jeg burde egentlig legge meg tidligere i kveld",

    "Hva skal jeg ha til middag i dag?",

    "Hvorfor begynner mobilen min alltid å gå tom for batteri når jeg trenger den mest?",
  ]

  const gatheredThoughts = []

  const elementsRef = useRef([])
  const containerRef = useRef(null)
  const hoverThoughtsRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
    const container = containerRef.current

    elementsRef.current.forEach((element, index) => {
      if (element) {
        let directionX = randomMinMax(1, 3)
        let directionY = randomMinMax(1, 3)

        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight

        element.style.width = "50px"
        element.style.height = "50px"
        element.style.position = "absolute"
        element.style.left = randomMinMax(0, containerWidth - 50) + "px"
        element.style.top = randomMinMax(0, containerHeight - 50) + "px"
        element.style.borderRadius = "50%"
        element.style.backgroundColor = "white"
        element.style.cursor = "pointer"

        element.addEventListener("mouseover", () => {
          element.style.borderRadius = "0%"
          hoverThoughtsRef.current.style.display = "block"
          hoverThoughtsRef.current.style.opacity = "1"
          hoverThoughtsRef.current.textContent = thoughts[index]
        })

        element.addEventListener("mouseout", () => {
          element.style.borderRadius = "50%"
          setTimeout(() => {
            hoverThoughtsRef.current.style.display = "none"
            hoverThoughtsRef.current.style.opacity = "0"
          }, 1000)
        })

        const moveElement = () => {
          let left = parseInt(element.style.left, 10)
          let top = parseInt(element.style.top, 10)

          left += directionX
          top += directionY

          if (left <= 0 || left >= containerWidth - 50) {
            directionX = -directionX
          }

          if (top <= 0 || top >= containerHeight - 50) {
            directionY = -directionY
          }

          element.style.left = left + "px"
          element.style.top = top + "px"

          requestAnimationFrame(moveElement)
        }

        moveElement()
      }
    })
  }, [thoughts])

  window.addEventListener("scroll", function () {
    var parallax = document.getElementsByClassName("parallax")
    Array.from(parallax).forEach(function (el) {
      var speed = 0.5
      var yPos = -(window.pageYOffset * speed)
      el.style.backgroundPositionY = yPos + "px"
    })
  })
  
  return (
    <>
      <div className="card">
        {/* <img src="https://placehold.co/200" alt="" /> */}
        <section className="cardinfo">
          <h2>Levi Havuinen Nuet</h2>
          <span>1993</span>
          <span>29 år ved diagnose</span>
        </section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At placeat
          molestias soluta tenetur labore ab facilis.
        </p>
      </div>
      <div
        className="xl-hero"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div ref={containerRef} className="container-xl">
          {thoughts.map((thought, index) => (
            <div
              key={index}
              className="info"
              ref={(el) => (elementsRef.current[index] = el)}
            ></div>
          ))}
          <div ref={hoverThoughtsRef} className="thought"></div>
        </div>
      </div>

      <body className="body-background">

          {/*             Charts
          <figure>
            <LineChart
              id="chart1"
              labels={lineChartData1.labels}
              datasets={lineChartData1.datasets}
            />
            <figcaption>
            Andelen jenter (i prosent) i perioden 2010-2022 som var registrert med diagnosekode for ADHD (ICD-10-kode F90) i spesialisthelsetjenesten, etter kjønn og alderskategori. Datagrunnlag: Norsk pasientregister. (<a target="_blank" href="https://www.fhi.no/nyheter/2023/okning-i-adhd-diagnoser-for-barn-og-unge-under-pandemien/">FHI</a>)
            </figcaption>
          </figure>

          <figure>
            <LineChart
              id="chart2"
              labels={lineChartData2.labels}
              datasets={lineChartData2.datasets}
            />
            <figcaption>
            Andelen gutter (i prosent) i perioden 2010-2022 som var registrert med diagnosekode for ADHD (ICD-10-kode F90) i spesialisthelsetjenesten, etter kjønn og alderskategori. Datagrunnlag: Norsk pasientregister. (<a target="_blank" href="https://www.fhi.no/nyheter/2023/okning-i-adhd-diagnoser-for-barn-og-unge-under-pandemien/">FHI</a>)
            </figcaption>
          </figure>

          <figure>
            <BarChart
              id="chart3"
              labels={barChartData.labels}
              datasets={barChartData.datasets}
            />
            <figcaption>
            Annualised mean number of office-based visits with a recorded diagnosis of attention-deficit hyperactivity disorder (ADHD) in adults ≥20 years old. ((<a target="_blank" href="https://link.springer.com/article/10.2165/00124363-200418060-00003">Springer</a>))
            </figcaption>
          </figure>
          */}

        <div className="xl-container">
          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h1>
                SENDIAGNOSTISERING AV ADHD: EN LIVSLANG REISE MOT FORSTÅELSE
              </h1>
            </header>
          </section>
          {/*Article section*/}
          <article class="content-xl">
            <h2>Den skjulte utfordringen</h2>
            <p>
              ADHD, eller Attention Deficit Hyperactivity Disorder, har lenge
              vært forbundet med urolige skolebarn og impulsiv oppførsel. Men
              hva skjer når disse symptomene forblir uoppdaget gjennom
              barndommen og inn i voksenlivet? Sendiagnostisering av ADHD er et
              voksende fenomen som kaster lys over de komplekse utfordringene
              mange voksne står overfor.
            </p>
          </article>

          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h2>
                "JEG VISSTE ALLTID AT JEG VAR ANNERLEDES, MEN IKKE HVORFOR"
              </h2>
            </header>
          </section>

          {/*Article section*/}
          <article class="content-xl">
            <h2>Symptomer i skjul - En livslang kamp</h2>
            <h3>De subtile tegnene</h3>
            <p>
              For mange begynner reisen mot en ADHD-diagnose i voksen alder med
              en livslang følelse av å være "annerledes". Klassiske symptomer
              som impulsivitet, konsentrasjonsvansker og hyperaktivitet kan
              manifestere seg på subtile måter som er lette å overse eller
              mistolke.
            </p>
            <section class="quote-container">
              <img
                src="../public/assets/img/black-quote.png"
                alt="quote"
                class="black-quote"
              />
              <p>
                "Jeg trodde alltid det var noe galt med meg. At jeg bare var lat
                eller umotivert. Det tok 35 år før jeg forsto at det var ADHD,"
                forteller Maria, nylig diagnostisert.
              </p>
            </section>
            <h3>Mestringsstrategier og maskering</h3>
            <p>
              Mange voksne med udiagnostisert ADHD har gjennom årene utviklet
              komplekse mestringsstrategier. Disse kan inkludere overdreven
              planlegging, bruk av påminnelser og alarmer, eller til og med å
              unngå visse situasjoner helt. Mens disse strategiene kan være
              effektive på kort sikt, kan de også maskere de underliggende
              symptomene og gjøre diagnostisering utfordrende.
            </p>
            <h3>Emosjonelle konsekvenser</h3>
            <p>
              Å leve med udiagnostisert ADHD kan ha betydelige emosjonelle
              konsekvenser. Mange opplever lav selvfølelse, angst og depresjon
              som følge av gjentatte "feil" og misforståelser. Disse sekundære
              tilstandene kan ofte overskygge de primære ADHD-symptomene, noe
              som ytterligere kompliserer diagnostiseringsprosessen.
            </p>
            <section class="fact-box">
              <strong>Visste du?</strong> Studier viser at opptil 4% av voksne
              kan ha ADHD, men mange forblir udiagnostisert gjennom store deler
              av livet.
            </section>
          </article>

          {/*Confused img*/}
          <section className="confused">
            <img src="../public/assets/img/confused1.png" alt="confused" />
          </section>

          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h2>
                KJØNNSFORSKJELLER I ADHD-DIAGNOSTISERING: EN SKJULT EPIDEMI?
              </h2>
            </header>
          </section>

          {/*Article section*/}
          <article class="content-xl">
            <h2>Kjønnsperspektivet - Når stereotyper skjuler sannheten</h2>
            <h3>Den "typiske" ADHD-pasienten</h3>
            <p>
              Historisk sett har ADHD ofte blitt oppfattet som en
              "guttelidelse". Dette stereotypiske bildet av et hyperaktivt,
              impulsivt barn har ført til at mange jenter og kvinner har blitt
              oversett i diagnostiseringsprosessen.
            </p>
            <h3>Interne vs. eksterne symptomer</h3>
            <p>
              Forskning viser at jenter oftere viser internaliseringssymptomer
              som angst, depresjon og dagdrømming, i motsetning til de mer
              synlige eksternaliseringssymptomene som hyperaktivitet og
              impulsivitet, som oftere ses hos gutter. Denne forskjellen kan
              føre til at ADHD hos jenter og kvinner ofte blir feildiagnostisert
              eller oppdages senere i livet.
            </p>
            <section class="quote-container">
              <img
                src="../public/assets/img/black-quote.png"
                alt="quote"
                class="black-quote"
              />
              <p>
                "Jeg var alltid 'den stille jenta' i klassen. Ingen mistenkte
                ADHD fordi jeg ikke forstyrret andre. Men inni meg var det
                kaos," sier Lisa, diagnostisert med ADHD i 40-årene
              </p>
            </section>
            <h3>Hormonelle faktorer</h3>
            <p>
              Hormonsykluser kan påvirke ADHD-symptomer hos kvinner, noe som kan
              gjøre diagnostisering enda mer komplisert. Mange kvinner
              rapporterer at symptomene forverres under visse faser av
              menstruasjonssyklusen, graviditet eller menopause.
            </p>
            <section class="fact-box">
              <strong>Statistikk:</strong> For hver tredje gutt som
              diagnostiseres med ADHD, diagnostiseres bare én jente, til tross
              for at forekomsten antas å være lik mellom kjønnene.
            </section>
          </article>
          <section className="confused">
            <img src="../public/assets/img/confused2.png" alt="confused" />
          </section>
          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h2>ADHD I ARBEIDSLIVET: UTFORDRINGER OG UANTE STYRKER</h2>
            </header>
          </section>

          {/*Article section*/}
          <article class="content-xl">
            <h2>ADHD i arbeidslivet - En tveegget sverd</h2>
            <h3>Daglige utfordringer</h3>
            <p>
              For mange voksne blir ADHD-symptomene særlig tydelige i
              arbeidslivet. Utfordringer med tidsplanlegging, organisering og å
              fullføre oppgaver kan skape betydelige hindringer i karrieren.
            </p>
            <h3>Kreativitet og innovasjon</h3>
            <p>
              Samtidig er det viktig å anerkjenne de unike styrkene mange med
              ADHD besitter. Kreativitet, evnen til hyperfokus og en unik
              problemløsningsevne er ofte fremtredende egenskaper. I yrker som
              krever innovativ tenkning og evne til å tenke "utenfor boksen",
              kan disse egenskapene være svært verdifulle.
            </p>
            <h3>Tilrettelegging på arbeidsplassen</h3>
            <p>
              Med riktig forståelse og tilrettelegging kan ADHD-symptomer
              håndteres effektivt i arbeidslivet. Dette kan inkludere fleksible
              arbeidstider, bruk av støyreduserende hodetelefoner, eller
              oppdeling av store prosjekter i mindre, håndterbare oppgaver.
            </p>
            <section class="fact-box">
              <strong>Interessant fakta:</strong> Noen kjente entreprenører og
              innovatører, som Richard Branson og Ingvar Kamprad, har åpent delt
              sine erfaringer med ADHD og hvordan det har påvirket deres
              karrierer positivt.
            </section>
          </article>

          {/*Confused img*/}
          <section className="confused">
            <img src="../public/assets/img/confused3.png" alt="confused" />
          </section>

          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h2>VEIEN MOT DIAGNOSE: EN LABYRINT AV FØLELSER OG FORSTÅELSE</h2>
            </header>
          </section>

          {/*Article section*/}
          <article class="content-xl">
            <h2>Diagnostisering og behandling - En ny start</h2>
            <h3>Utfordringer i diagnostiseringsprosessen</h3>
            <p>
              Prosessen med å få en ADHD-diagnose som voksen kan være både
              utfordrende og tidkrevende. Mange opplever å bli avvist eller
              misforstått av helsepersonell som ikke er tilstrekkelig oppdatert
              på ADHD hos voksne.
            </p>
            <h3>Emosjonell berg-og-dalbane</h3>
            <p>
              Når diagnosen endelig stilles, opplever mange en blanding av
              lettelse og sorg - lettelse over å endelig forstå seg selv bedre,
              men også sorg over tapte muligheter og år med misforståelser.
            </p>
            <section class="quote-container">
              <img
                src="../public/assets/img/black-quote.png"
                alt="quote"
                class="black-quote"
              />
              <p>
                "Å få diagnosen var som å få nøkkelen til å forstå meg selv. Det
                er utfordrende, men nå kan jeg endelig begynne å bygge et liv
                som passer for meg," forteller Marte, som fikk sin ADHD-diagnose
                i 50-årene.
              </p>
            </section>
            <h3>Behandlingsalternativer</h3>
            <p>
              Behandling for voksne med ADHD inkluderer ofte en kombinasjon av:
            </p>
            <ul>
              <li>Medikamentell behandling</li>
              <li>Kognitiv atferdsterapi</li>
              <li>Livsstilsendringer og strategier for hverdagsmestring</li>
              <li>Støttegrupper og nettverksbygging</li>
            </ul>
            <p>
              For mange kan riktig behandling føre til betydelige forbedringer i
              livskvalitet og funksjonsnivå.
            </p>
            <section class="fact-box">
              <strong>Visste du?</strong> Studier viser at opptil 70% av voksne
              med ADHD opplever betydelig symptomlindring med riktig behandling.
            </section>
          </article>

          {/*Confused img*/}
          <section className="confused">
            <img src="../public/assets/img/confused1.png" alt="confused" />
          </section>

          {/*Parallax header*/}
          <section class="parallax-xl">
            <header class="caption-xl">
              <h2>ADHD OG RELASJONER: NAVIGERING I ET KOMPLEKST LANDSKAP</h2>
            </header>
          </section>

          {/*Article section*/}
          <article class="content-xl">
            <h2>ADHD og mellommenneskelige relasjoner</h2>
            <h3>Utfordringer i parforhold</h3>
            <p>
              ADHD kan ha en betydelig innvirkning på romantiske forhold.
              Problemer med oppmerksomhet, impulsivitet og emosjonell regulering
              kan skape misforståelser og konflikter.
            </p>
            <section class="quote-container">
              <img
                src="../public/assets/img/black-quote.png"
                alt="quote"
                class="black-quote"
              />
              <p>
                "Det tok tid for min partner å forstå at når jeg glemte ting,
                var det ikke fordi jeg ikke brydde meg. ADHD-diagnosen hjalp oss
                begge å forstå dynamikken bedre," forteller Anders, gift i 15
                år.
              </p>
            </section>
            <h3>Foreldreskap med ADHD</h3>
            <p>
              Å være forelder med ADHD bringer med seg unike utfordringer og
              styrker. Mange foreldre med ADHD rapporterer at de sliter med å
              opprettholde rutiner og struktur, samtidig som de ofte har en unik
              evne til å forstå og støtte barnets behov.
            </p>
          </article>

          {/*Confused img*/}
          <section className="confused">
            <img src="../public/assets/img/confused2.png" alt="confused" />
          </section>
        </div>
      </body>
    </>
  )
}
