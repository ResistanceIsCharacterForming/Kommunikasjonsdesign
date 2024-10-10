import { useEffect, useRef } from "react"

export default function Article4() {
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
        element.style.left = randomMinMax(0, containerWidth - 70) + "px"
        element.style.top = randomMinMax(0, containerHeight - 70) + "px"
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

          if (left <= 0 || left >= containerWidth - 70) {
            directionX = -directionX
          }

          if (top <= 0 || top >= containerHeight - 70) {
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

  window.addEventListener('scroll', function() {
            var parallax = document.getElementsByClassName('parallax');
            Array.from(parallax).forEach(function(el) {
                var speed = 0.5;
                var yPos = -(window.pageYOffset * speed);
                el.style.backgroundPositionY = yPos + "px";
            });
        });

  return (
    <>
      <div
        className="parallax xl-hero"
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

      <div className="xl-container">
        <section class="parallax-xl">
          <header class="caption-xl">
            <h1>SENDIAGNOSTISERING AV ADHD: EN LIVSLANG REISE MOT FORSTÅELSE</h1>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>Den skjulte utfordringen</h2>
              <p>ADHD, eller Attention Deficit Hyperactivity Disorder, har lenge vært forbundet med urolige skolebarn og impulsiv oppførsel. Men hva skjer når disse symptomene forblir uoppdaget gjennom barndommen og inn i voksenlivet? Sendiagnostisering av ADHD er et voksende fenomen som kaster lys over de komplekse utfordringene mange voksne står overfor.</p>
          </section>
        </article>

        <section class="parallax-xl">
          <header class="caption-xl">
            <h2>"JEG VISSTE ALLTID AT JEG VAR ANNERLEDES, MEN IKKE HVORFOR"</h2>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>Symptomer i skjul - En livslang kamp</h2>
            
            <h3>De subtile tegnene</h3>
              <p>For mange begynner reisen mot en ADHD-diagnose i voksen alder med en livslang følelse av å være "annerledes". Klassiske symptomer som impulsivitet, konsentrasjonsvansker og hyperaktivitet kan manifestere seg på subtile måter som er lette å overse eller mistolke.</p>
            <div class="quote-container">
              <img src="../public/assets/img/black-quote.png" alt="quote" class="black-quote" />
              <p>"Jeg trodde alltid det var noe galt med meg. At jeg bare var lat eller umotivert. Det tok 35 år før jeg forsto at det var ADHD," forteller Maria, nylig diagnostisert.</p>
            </div>

            <h3>Mestringsstrategier og maskering</h3>
              <p>Mange voksne med udiagnostisert ADHD har gjennom årene utviklet komplekse mestringsstrategier. Disse kan inkludere overdreven planlegging, bruk av påminnelser og alarmer, eller til og med å unngå visse situasjoner helt. Mens disse strategiene kan være effektive på kort sikt, kan de også maskere de underliggende symptomene og gjøre diagnostisering utfordrende.</p>

            <h3>Emosjonelle konsekvenser</h3>
              <p>Å leve med udiagnostisert ADHD kan ha betydelige emosjonelle konsekvenser. Mange opplever lav selvfølelse, angst og depresjon som følge av gjentatte "feil" og misforståelser. Disse sekundære tilstandene kan ofte overskygge de primære ADHD-symptomene, noe som ytterligere kompliserer diagnostiseringsprosessen.</p>

            <section class="fact-box">
              <strong>Visste du?</strong> Studier viser at opptil 4% av voksne kan ha ADHD, men mange forblir udiagnostisert gjennom store deler av livet.
            </section>
          </section>
        </article>

        <section className="confused">
          <img src="../public/assets/img/confused.png" alt="confused"/>
        </section>

        <section class="parallax-xl">
          <header class="caption-xl">
            <h2>KJØNNSFORSKJELLER I ADHD-DIAGNOSTISERING: EN SKJULT EPIDEMI?</h2>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>Kjønnsperspektivet - Når stereotyper skjuler sannheten</h2>

            <h3>Den "typiske" ADHD-pasienten</h3>
              <p>Historisk sett har ADHD ofte blitt oppfattet som en "guttelidelse". Dette stereotypiske bildet av et hyperaktivt, impulsivt barn har ført til at mange jenter og kvinner har blitt oversett i diagnostiseringsprosessen.</p>

            <h3>Interne vs. eksterne symptomer</h3>
              <p>Forskning viser at jenter oftere viser internaliseringssymptomer som angst, depresjon og dagdrømming, i motsetning til de mer synlige eksternaliseringssymptomene som hyperaktivitet og impulsivitet, som oftere ses hos gutter. Denne forskjellen kan føre til at ADHD hos jenter og kvinner ofte blir feildiagnostisert eller oppdages senere i livet.</p>

            <div class="quote-container">
              <img src="../public/assets/img/black-quote.png" alt="quote" class="black-quote" />
              <p>"Jeg var alltid 'den stille jenta' i klassen. Ingen mistenkte ADHD fordi jeg ikke forstyrret andre. Men inni meg var det kaos," sier Lisa, diagnostisert med ADHD i 40-årene</p>
            </div>

            <h3>Hormonelle faktorer</h3>
              <p>Hormonsykluser kan påvirke ADHD-symptomer hos kvinner, noe som kan gjøre diagnostisering enda mer komplisert. Mange kvinner rapporterer at symptomene forverres under visse faser av menstruasjonssyklusen, graviditet eller menopause.</p>

            <section class="fact-box">
              <strong>Statistikk:</strong> For hver tredje gutt som diagnostiseres med ADHD, diagnostiseres bare én jente, til tross for at forekomsten antas å være lik mellom kjønnene.
            </section>
          </section>
        </article>

        <section className="confused">
          <img src="../public/assets/img/confused.png" alt="confused"/>
        </section>

        <section class="parallax-xl">
          <header class="caption-xl">
            <h2>ADHD I ARBEIDSLIVET: UTFORDRINGER OG UANTE STYRKER</h2>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>ADHD i arbeidslivet - En tveegget sverd</h2>

            <h3>Daglige utfordringer</h3>
              <p>For mange voksne blir ADHD-symptomene særlig tydelige i arbeidslivet. Utfordringer med tidsplanlegging, organisering og å fullføre oppgaver kan skape betydelige hindringer i karrieren.</p>
              
              <p>"Jeg har alltid jobbet dobbelt så hardt som kollegene mine for å holde tritt. Det var utmattende, men jeg visste ikke hvorfor før jeg fikk diagnosen," sier Thomas, en IT-konsulent diagnostisert med ADHD i 40-årene.</p>

            <h3>Kreativitet og innovasjon</h3>
              <p>Samtidig er det viktig å anerkjenne de unike styrkene mange med ADHD besitter. Kreativitet, evnen til hyperfokus og en unik problemløsningsevne er ofte fremtredende egenskaper. I yrker som krever innovativ tenkning og evne til å tenke "utenfor boksen", kan disse egenskapene være svært verdifulle.</p>

            <h3>Tilrettelegging på arbeidsplassen</h3>
              <p>Med riktig forståelse og tilrettelegging kan ADHD-symptomer håndteres effektivt i arbeidslivet. Dette kan inkludere fleksible arbeidstider, bruk av støyreduserende hodetelefoner, eller oppdeling av store prosjekter i mindre, håndterbare oppgaver.</p>

            <section class="fact-box">
              <strong>Interessant fakta:</strong> Noen kjente entreprenører og innovatører, som Richard Branson og Ingvar Kamprad, har åpent delt sine erfaringer med ADHD og hvordan det har påvirket deres karrierer positivt.
            </section>
          </section>
        </article>

        <section className="confused">
          <img src="../public/assets/img/confused.png" alt="confused"/>
        </section>

        <section class="parallax-xl">
          <header class="caption-xl">
            <h2>VEIEN MOT DIAGNOSE: EN LABYRINT AV FØLELSER OG FORSTÅELSE</h2>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>Diagnostisering og behandling - En ny start</h2>

            <h3>Utfordringer i diagnostiseringsprosessen</h3>
              <p>Prosessen med å få en ADHD-diagnose som voksen kan være både utfordrende og tidkrevende. Mange opplever å bli avvist eller misforstått av helsepersonell som ikke er tilstrekkelig oppdatert på ADHD hos voksne.</p>

            <h3>Emosjonell berg-og-dalbane</h3>
              <p>Når diagnosen endelig stilles, opplever mange en blanding av lettelse og sorg - lettelse over å endelig forstå seg selv bedre, men også sorg over tapte muligheter og år med misforståelser.</p>
            <div class="quote-container">
              <img src="../public/assets/img/black-quote.png" alt="quote" class="black-quote" />
              <p>"Å få diagnosen var som å få nøkkelen til å forstå meg selv. Det er utfordrende, men nå kan jeg endelig begynne å bygge et liv som passer for meg," forteller Marte, som fikk sin ADHD-diagnose i 50-årene.</p>
            </div>

            <h3>Behandlingsalternativer</h3>
              <p>Behandling for voksne med ADHD inkluderer ofte en kombinasjon av:</p>
              <ul>
                <li>Medikamentell behandling</li>
                <li>Kognitiv atferdsterapi</li>
                <li>Livsstilsendringer og strategier for hverdagsmestring</li>
                <li>Støttegrupper og nettverksbygging</li>
              </ul>
              <p>For mange kan riktig behandling føre til betydelige forbedringer i livskvalitet og funksjonsnivå.</p>

            <section class="fact-box">
              <strong>Visste du?</strong> Studier viser at opptil 70% av voksne med ADHD opplever betydelig symptomlindring med riktig behandling.
            </section>
          </section>
        </article>

        <section className="confused">
          <img src="../public/assets/img/confused.png" alt="confused"/>
        </section>

        <section class="parallax-xl">
          <header class="caption-xl">
            <h2>ADHD OG RELASJONER: NAVIGERING I ET KOMPLEKST LANDSKAP</h2>
          </header>
        </section>

        <article class="section-xl">
          <section class="content-xl">
            <h2>ADHD og mellommenneskelige relasjoner</h2>

            <h3>Utfordringer i parforhold</h3>
            <p>ADHD kan ha en betydelig innvirkning på romantiske forhold. Problemer med oppmerksomhet, impulsivitet og emosjonell regulering kan skape misforståelser og konflikter.</p>
            <div class="quote-container">
              <img src="../public/assets/img/black-quote.png" alt="quote" class="black-quote" />
              <p>"Det tok tid for min partner å forstå at når jeg glemte ting, var det ikke fordi jeg ikke brydde meg. ADHD-diagnosen hjalp oss begge å forstå dynamikken bedre," forteller Anders, gift i 15 år.</p>
            </div>

            <h3>Foreldreskap med ADHD</h3>
            <p>Å være forelder med ADHD bringer med seg unike utfordringer og styrker. Mange foreldre med ADHD rapporterer at de sliter med å opprettholde rutiner og struktur, samtidig som de ofte har en unik evne til å forstå og støtte barnets behov.</p>
          </section>
        </article>
    </div>
    </>
  )
}







