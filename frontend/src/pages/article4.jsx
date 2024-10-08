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
        <div ref={containerRef} className="container">
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
      <div className="article4">
        <section class="intro">
          <p>For mange voksne er ADHD en tilstand som først diagnostiseres i sen alder. 
            Deres kamp for å forstå hvorfor dagliglivet er så utfordrende, har ofte vært ensom. 
            Nå får flere voksne endelig en diagnose som gir mening til mange av livets utfordringer.</p>
        </section>
        
        <section class="personal-stories">
          <h2>Personlige historier</h2>
          <article class="story">
            <h3>Anna, 42 år</h3>
            <p>Anna har alltid følt at hun lå et skritt bak alle andre. Hun glemte avtaler, misforsto instruksjoner på jobb, og hadde alltid en følelse av å ikke strekke til. Først da hun var 42 år, fikk hun diagnosen ADHD.</p>
            <blockquote>"Jeg trodde hele tiden at det var meg det var noe galt med, men da jeg fikk diagnosen, falt brikkene på plass."</blockquote>
          </article>
        </section>


        <section class="facts-myths">
          <h2>Fakta og myter</h2>
          <ul>
            <li><strong>Myte:</strong> ADHD er en barnesykdom.</li>
            <li><strong>Fakta:</strong> Mange voksne lever udiagnostisert med ADHD. Symptomer som dårlig hukommelse, impulsivitet og konsentrasjonsvansker kan feiltolkes som personlighetsfeil.</li>
          </ul>
        </section>

        <section class="expert-input">
          <h2>Faglige innspill</h2>
          <p>Psykolog Marianne Hansen sier at voksne ofte ikke gjenkjenner symptomene fordi de har lært seg mestringsstrategier gjennom livet. "Det er først når livet blir for krevende – for eksempel etter en jobbendring eller i foreldrerollen – at ADHD-symptomene blir tydeligere."</p>
        </section>

        <section class="life-after-diagnosis">
          <h2>Hvordan livet endrer seg etter diagnosen</h2>
          <p>For mange representerer diagnosen en slags lettelse. Den gir forklaringer på problemer som har preget hverdagen, og mange opplever en følelse av å endelig bli sett.</p>
        </section>
        <section>
          <h2>Avslutning</h2>
          <p>"For mange er diagnosen ikke en begrensning, men en nøkkel til å forstå seg selv bedre og ta grep for å forbedre livskvaliteten."</p>
        </section>
      </div>
    </>
  )
}







