import { useEffect } from "react"
import Chart from "chart.js/auto"
import AOS from "aos"
import "aos/dist/aos.css"

// Linjediagram
const LineChart = ({ id, labels, datasets }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

// Hovedkomponenten
export default function Article1() {
  useEffect(() => {
    AOS.init()
  }, [])

  const lineChartData = {
    labels: ["2018-19", "2019-20", "2020-21", "2021-22", "2022-23"],
    datasets: [
      {
        label: "I arbeid",
        data: [81.6, 80.2, 80.2, 82.5, 83.3],
        borderWidth: 1,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "I utdanning",
        data: [12.4, 13.2, 13.6, 12.4, 11.6],
        borderWidth: 1,
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
      {
        label: "Utenfor arbeid og utdanning",
        data: [6.0, 6.6, 6.2, 5.1, 5.1],
        borderWidth: 1,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  }

  const barChartData = {
    labels: [
      "Yrkesaktiv",
      "Student/elev",
      "Pensjonist",
      "Ufør/ikke i stand til å arbeide",
      "Arbeidsledig",
    ],
    datasets: [
      {
        label: "Lite fornøyd med sin psykiske helse (0-5)",
        data: [18, 30, 16, 47, 44],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Middels fornøyd med sin psykiske helse (6-8)",
        data: [44, 44, 40, 35, 36],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Svært fornøyd med sin psykiske helse (9-10)",
        data: [38, 26, 44, 19, 20],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <section className="parallax bg1">
        <h1 className="caption">
          <span className="border">FAGBREV</span>
          <span className="border2">
            {" "}
            - En blindvei for unge i arbeidslivet?
          </span>
        </h1>
      </section>
      <section className="content">
        <h2>Når drømmen om en fast jobb møter virkeligheten</h2>
        <strong>
          <p>
            Dette er realiteten for mange som tar fagbrev i Norge. Etter to år
            på videregående og to år som lærling, skulle veien videre være klar:
            en trygg og fast jobb. Men for mange viser denne veien seg å være
            alt annet enn sikker.
          </p>
        </strong>
      </section>
      <section className="parallax bg2">
        <h2 className="caption">
          <span className="border">UTFORDRINGER</span>
        </h2>
      </section>
      <section className="content">
        <h2>Realiteten i arbeidsmarkedet</h2>
        <p>
          Fagbrev blir ofte fremstilt som en sikker inngang til arbeidslivet,
          nesten som et uuttalt løfte om fremtidig stabilitet. Men i
          virkeligheten kan det være vanskelig nok å sikre seg en lærlingplass –
          en utfordring som i seg selv er stor nok.{" "}
          <a href="https://www.udir.no/tall-og-forskning/statistikk/statistikk-fag-og-yrkesopplaring/">
            {" "}
            Ifølge Utdanningdirektoratet står 16 prosent av de som fullfører
            fagbrev
          </a>{" "}
          enten uten jobb eller velger høyere utdanning året etter. Dette tallet
          har holdt seg stabilt over flere år, noe som antyder at fagbrevet i
          mange tilfeller ikke gir den verdien i arbeidsmarkedet som man skulle
          tro.
        </p>
        <figure>
          <LineChart
            id="chart1"
            labels={lineChartData.labels}
            datasets={lineChartData.datasets}
          />
          <figcaption className="chart1fig">
            Figur 1: Statistikk over arbeidsmarkedet for fagbrevkandidater.
            Generert med Chart.js.
          </figcaption>
        </figure>
      </section>
      <section className="parallax bg3">
        <h2 className="caption">
          <span className="border">KONSEKVENSER</span>
        </h2>
      </section>
      <section className="content">
        <h2>Mer enn bare økonomi</h2>
        <p>
          Konsekvensene av å stå utenfor arbeidslivet er ikke bare begrenset til
          tap av inntekt.
          <a href="https://www.ssb.no/sosiale-forhold-og-kriminalitet/artikler-og-publikasjoner/livskvalitet-i-norge-2020">
            Forskning viser en klar sammenheng mellom arbeid og psykiskhelse;
          </a>{" "}
          de som står utenfor arbeidslivet, har ofte en høyere risiko for å
          utvikle psykiske helseproblemer som depresjon og angst. På dager hvor
          alt føles tungt og grått, kan denne følelsen av meningsløshet være
          vanskelig å takle.
          <a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/relatert-informasjon/arbeidsledighet-utdanning">
            Når vi samtidig ser at arbeidsledigheten i Norge fortsatt ligger på
            et høyt nivå
          </a>
        </p>
        <figure>
          <BarChart
            id="chart2"
            labels={barChartData.labels}
            datasets={barChartData.datasets}
          />
          <figcaption className="chart2fig">
            Figur 2: Arbeidsledighetsnivået i Norge og dets sammenheng med
            psykisk helse. Generert med Chart.js
          </figcaption>
        </figure>
      </section>
      <section className="parallax bg4">
        <h2 className="caption">
          <span className="border">LØSNINGER</span>
        </h2>
      </section>
      <section className="content">
        <h2>Veien videre</h2>
        <p>
          Fagbrev bør ikke være en blindvei. De unge, ambisiøse menneskene som
          har investert fire år i sin utdanning, fortjener bedre. Vi må sikre at
          også fagbrev gir reelle muligheter i arbeidslivet og en trygg fremtid.
          Skal vi ta denne utfordringen på alvor, må vi verdsette alle typer
          kompetanse – også den som kommer fra fagbrev.
        </p>
      </section>
      <section className="parallax bg5">
        <h2 className="caption">
          <span className="border">REFLEKTER</span>
        </h2>
      </section>
    </>
  )
}
