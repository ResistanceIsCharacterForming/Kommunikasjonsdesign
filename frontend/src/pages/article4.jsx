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

  const elementsRef = useRef([])
  const containerRef = useRef(null)
  const hoverThoughtsRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    elementsRef.current.forEach((element, index) => {
      if (element) {
        let directionX = randomMinMax(1, 3)
        let directionY = randomMinMax(1, 3)

        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight

        element.style.width = "70px"
        element.style.height = "70px"
        element.style.position = "absolute"
        element.style.left = randomMinMax(0, containerWidth - 70) + "px"
        element.style.top = randomMinMax(0, containerHeight - 70) + "px"
        element.style.borderRadius = "50%"
        element.style.backgroundColor = "white"

        element.addEventListener("mouseover", () => {
          element.style.borderRadius = "0%"
          hoverThoughtsRef.current.style.display = "block"
          hoverThoughtsRef.current.style.opacity = "1"
          hoverThoughtsRef.current.textContent = thoughts[index]
        })

        element.addEventListener("mouseout", () => {
          element.style.borderRadius = "50%"
          hoverThoughtsRef.current.style.display = "none"
          hoverThoughtsRef.current.style.opacity = "0"
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
    <div
      className="parallax xl-hero"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={containerRef}
        className="container"
        style={{
          position: "relative",
          top: "0",
          height: "100dvh",
          width: "50dvw",
          overflow: "hidden",
        }}
      >
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
  )
}







