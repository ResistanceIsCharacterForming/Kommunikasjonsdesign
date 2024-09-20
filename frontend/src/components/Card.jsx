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
    {
      id: "article2",
      img: "https://images.unsplash.com/photo-1586115457457-b3753fe50cf1?q=80&w=3188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-09-14",
      title: "Hvordan lykkes med hjemmekontor?",
      text: "Pandemien har endret arbeidshverdagen for mange",
    },
    {
      id: "article3",
      img: "https://images.unsplash.com/photo-1635907487589-4b8b2a63f704?q=80&w=3059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-09-21",
      title: "Slik unngår du å bli lurt på nett",
      text: "Svindel på nett er et økende problem",
    },
    {
      id: "article4",
      img: "https://images.unsplash.com/photo-1508277499252-08cd32ea0bf6?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-09-28",
      title: "Hvordan går det egentlig?",
      text: "En undersøkelse viser at mange sliter med å få endene til å møtes",
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
