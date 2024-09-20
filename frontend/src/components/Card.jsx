import { Link } from "react-router-dom"

export default function Card() {
  const articleCards = [
    {
      id: 1,
      img: "assets/img/school-7012848_1280.png",
      date: "2024-09-07",
      title: "Fagbrev - En blindvei for unge i arbeidslivet?",
      text: "Er du ung, har ambisjoner, jobbet hardt – men opplever at ting likevel ikke går som planlagt? Dette er realiteten for mange som tar fagbrev i Norge...",
    },
  ]

  return (
    <>
      {articleCards?.map((card, index) => (
        <article key={crypto.randomUUID()}>
          <img src={card.img} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <Link to="/article">Les mer</Link>
          <time>{card.date}</time>
        </article>
      ))}
    </>
  )
}
