import { Link } from "react-router-dom"

export default function Card() {
  const articleCard = [
    {
      img: "assets/img/school-7012848_1280.png",
      date: "2024-09-07",
      title: "Fagbrev - En blindvei for unge i arbeidslivet?",
      text: "Er du ung, har ambisjoner, jobbet hardt – men opplever at ting likevel ikke går som planlagt? Dette er realiteten for mange som tar fagbrev i Norge...",
    },
  ]

  return (
    <>
      <article>
        <div className="card">
          <img src={articleCard[0].img} alt="School" />
          <div className="card-content">
            <p>{articleCard[0].date}</p>
            <h3>{articleCard[0].title}</h3>
            <p>{articleCard[0].text}</p>
            <Link to="/article">Les mer</Link>
          </div>
        </div>
      </article>
    </>
  )
}
