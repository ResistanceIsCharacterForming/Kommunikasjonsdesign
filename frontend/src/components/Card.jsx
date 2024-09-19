import { Link } from "react-router-dom"

export default function Card() {
  return (
    <article>
      <img src="assets/img/school-7012848_1280.png" alt="School building" />
      <time dateTime="2024-09-07">7. september 2024</time>
      <h3>Fagbrev - En blindvei for unge i arbeidslivet? </h3>
      <p>
        Er du ung, har ambisjoner, jobbet hardt – men opplever at ting likevel
        ikke går som planlagt? Dette er realiteten for mange som tar fagbrev i
        Norge...
      </p>
      <Link to="/article">Les mer</Link>
    </article>
  )
}
