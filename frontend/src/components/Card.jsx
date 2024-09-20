import { Link } from "react-router-dom"

export default function Card() {
  const articleCards = [
    {
      id: "article1",
      img: "/src/assets/img/school-7012848_1280.png",
      date: "2024-09-07",
      title: "Fagbrev - En blindvei for unge i arbeidslivet?",
      text: "Er du ung, har ambisjoner, jobbet hardt – men opplever at ting likevel ikke går som planlagt? Dette er realiteten for mange som tar fagbrev i Norge...",
    },
  ]

  return (
    <>
      <div id="front-main">
        {articleCards?.map((card, index) => (
          <Link key={crypto.randomUUID()} to={`/articles/${card.id}`}>
            <article className="articleCards">
              <img src={card.img} alt={card.title} />
              <time>{card.date}</time>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
