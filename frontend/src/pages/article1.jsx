export default function Article1() {
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
            Er du ung, har ambisjoner, jobbet hardt – men opplever at ting
            likevel ikke går som planlagt? Dette er realiteten for mange som tar
            fagbrev i Norge. Etter to år på videregående og to år som lærling,
            skulle veien videre være klar: en trygg og fast jobb. Men for mange
            viser denne veien seg å være alt annet enn sikker.
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
          en utfordring som i seg selv er stor nok.
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
          <canvas data-aos="fade-up" id="chart1"></canvas>
          <figcaption>
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
          <canvas data-aos="fade-up" id="chart2"></canvas>
          <figcaption>
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
