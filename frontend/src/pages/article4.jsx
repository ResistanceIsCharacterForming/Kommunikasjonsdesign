import { useEffect } from "react"

export default function Article4() {
  useEffect(() => {
    const canvas = document.getElementById("xlcanvas")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particleSize = 100
    const numberOfParticles = 1
    const particleSpeed = 0

    const particleTexts = [
      "En",
      "To",
      "Tre",
      "Fire",
      "Fem",
      "Seks",
      "Syv",
      "Åtte",
      "Ni",
      "Ti",
    ]

    function randomMinMax(min, max) {
      return Math.random() * (max - min) + min
    }

    const particles = Array.from({ length: numberOfParticles }, (_, i) => ({
      x: randomMinMax(particleSize, canvas.width - particleSize),
      y: randomMinMax(particleSize, canvas.height - particleSize),
      size: particleSize,
      originalSize: particleSize,
      speedX: randomMinMax(-particleSpeed, particleSpeed),
      speedY: randomMinMax(-particleSpeed, particleSpeed),
      fillColor: "white",
      originalColor: "white",
      text: particleTexts[i % particleTexts.length],
    }))

    function update() {
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (
          particle.x + particle.size / 2 > canvas.width ||
          particle.x - particle.size / 2 < 0
        ) {
          particle.speedX *= -1
        }

        if (
          particle.y + particle.size / 2 > canvas.height ||
          particle.y - particle.size / 2 < 0
        ) {
          particle.speedY *= -1
        }
      })
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
        ctx.fillStyle = particle.fillColor
        ctx.fill()
        ctx.closePath()
      })
    }

    function handleMouseMove(e) {
      console.log(e)
      const mouseX = e.offsetX * 2
      const testParticle = particles[0]

      console.log(mouseX, testParticle.x)
    }

    function animate() {
      drawParticles()
      update()
      requestAnimationFrame(animate)
    }

    animate()

    canvas.addEventListener("click", handleMouseMove)

    // Cleanup function on component unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <section className="hero xl">
        <div className="parallax xl-hero">
          <canvas id="xlcanvas"></canvas>
        </div>
      </section>
    </>
  )
}
