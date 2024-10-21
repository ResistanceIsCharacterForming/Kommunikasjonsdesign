import { useState } from "react"

export default function CardFlex() {
  const [state, setState] = useState([])

  const interviewees = [
    {
      name: "Levi Havuinen Nuet",
      age: new Date().getFullYear() - 1993,
      diagnosisAge: 29,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At placeat molestias soluta tenetur labore ab facilis.",
      img: "../public/assets/img/xl/Levi.gif",
    },
    {
      name: "Ellen Midtfjell",
      age: new Date().getFullYear() - 1976,
      diagnosisAge: 44,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At placeat molestias soluta tenetur labore ab facilis.",
      img: "../public/assets/img/xl/Ellen.JPG",
    },
    {
      name: "Tora Murtnes-Hatlestad",
      age: new Date().getFullYear() - 1994,
      diagnosisAge: 30,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At placeat molestias soluta tenetur labore ab facilis.",
      img: "https://placehold.co/200",
    },
  ]

  return (
    <>
      <h2>LES OM ADHDERNE</h2>
      <section className="xl-flex">
        {interviewees.map((interviewee) => (
          <div
            className="card"
            style={{
              backgroundImage: `url(${interviewee.img})`,
            }}
            key={interviewee.name}
          >
            <section className="cardinfo">
              <h2>{interviewee.name}</h2>
              <span>{new Date().getFullYear() - interviewee.age}</span>
              {interviewee.diagnosisAge && (
                <span>{interviewee.diagnosisAge} år ved diagnose</span>
              )}
            </section>
            <p>{interviewee.text}</p>
          </div>
        ))}
      </section>
    </>
  )
}
