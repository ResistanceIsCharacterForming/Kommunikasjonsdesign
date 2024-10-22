import { useState, useEffect } from "react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import AOS from "aos"
import "aos/dist/aos.css"

function ZoomToCountry({ scrollPosition }) {
  const map = useMap()

  useEffect(() => {
    if (scrollPosition < 400) {
      map.setView([64.0, 15.0], 4)
    } else if (scrollPosition >= 400 && scrollPosition < 1100) {
      map.setView([64.00, 26.00], 6)
    } else if (scrollPosition >= 1100 && scrollPosition < 2000) {
      map.setView([60.00, 8.00], 6)
    } else if (scrollPosition >= 2000) {
      map.setView([60.00, 8.00], 8)
    }
  }, [scrollPosition, map])

  return null
}

function ZoomToCountryTop7({ coordinates }) {
  const map = useMap()

  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates, 6)
    }
  }, [coordinates, map])

  return null
}

export default function Article2() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [countryCoordinates, setCountryCoordinates] = useState([62.0, 15.0]) 
  const [isMapVisible, setIsMapVisible] = useState(true) 

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY
    setScrollPosition(currentScrollPosition)
    setIsMapVisible(currentScrollPosition <= 2800)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
    window.scrollTo(0, 0)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const countryData = {
    Finland: [64.00, 26.00],
    Danmark: [56.2639, 9.5018],
    Island: [64.9631, -19.0208],
    Sverige: [60.1282, 18.6435],
    Israel: [31.0461, 34.8516],
    Nederland: [52.1326, 5.2913],
    Norge: [60.472, 8.4689],
  }

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://datawrapper.dwcdn.net/nLQfN/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://datawrapper.dwcdn.net/nLQfN/embed.js";
      script.async = true;
      script.charset = "utf-8";
      document.querySelector("#datawrapper-container").appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="article-start">
        <h1 className="article-title">Lykke i Norden: <br>
        </br>Hva kan Norge lære av Finland?</h1>
        <p className="article-intro">
        Lykke. Et ord som omfavner både personlig tilfredshet og nasjonal stolthet, men som 
        også vekker nysgjerrighet når det settes opp mot tall og statistikker. 
        I Norden, hvor velferdssystemene er blant verdens beste, skulle man tro lykken var en selvfølge. Men er det virkelig slik? 
        Ny forskning avdekker interessante forskjeller mellom de nordiske landene
        - og resultatene kan være overraskende. </p>
      </section>
      <section className="start-section1">
        <h2>Finland topper lykkeindeksen</h2>
        <p>
        Finland topper igjen lykkeindeksen, med enda en 1. plass. Dette har blitt et mønster
        de siste årene. Men hva er det som gjør finnene så tilfredse med livet? 
        Er det deres enkle livsstil, det solide velferdssystemet – eller ligger det noe annet bak?
        </p>
      </section>
      <section className="start-section1 nd2">
        <h2>Norge på 7. plass: Hva mangler?</h2>
        <p>
        Selv om Norge er blant de ti lykkeligste landene, ender landet likevel på en 7. plass.
        Til tross for rikelige ressurser og høy levestandard, ser det ut til at Norge 
        sliter med å nå helt til topps på lykkeindeksen. 
        Hva er det som holder nordmenn tilbake? Kan det være kulturelle forskjeller, 
        arbeidsforhold eller noe annet som spiller inn?
        </p>
      </section>
      {isMapVisible && ( 
        <MapContainer
          center={[62.0, 15.0]} 
          zoom={4} 
          style={{ height: "830px", width: "100%", position: "fixed", top: 0, zIndex: 0 }}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          keyboard={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomToCountry scrollPosition={scrollPosition} coordinates={countryCoordinates} />
        </MapContainer>
      )}
      {/* Hoved */}
      <section className="article-header">
      </section>
      <section className="article-content">
        <section className="inner-content">
          {/* Seksjon 1 */}
          <section data-aos="fade-up">
            <h2 className="section-title">Nordens lykke-paradoks</h2>
            <p>
              I en fersk rangering fra NTB har Norge nok en gang fått stempelet
              som Nordens minst lykkelige land. Dette er ikke bare en forbigående
              trend, men en vedvarende utfordring som får mange til å klø seg i
              hodet. Hvordan kan et land med så mye gå glipp av lykken?
            </p>
            <p>
              <a href="https://www.forskning.no/lykke-ntb/norge-minst-lykkelige-i-norden-nok-en-gang/2341299">
                Forskning.no
              </a>{" "}
              sin siste rapport kaster lys over situasjonen. Til tross for et
              robust velferdssystem og økonomisk stabilitet, virker det som om noe
              mangler i nordmenns liv. Stress, høy arbeidsbelastning og en
              prestasjonskultur pekes ut som mulige syndebukker. Er vi i ferd med
              å ofre vår lykke på karrierens alter?
            </p>
          </section>
          {/* Seksjon 2 */}
          <section data-aos="fade-up">
            <h2 className="section-title">
              To sider av samme mynt: Finland vs. Norge
            </h2>
            <p>
              For å forstå hvorfor Norge henger etter, kan det være verdt å se
              nærmere på hvordan våre nordiske naboer – spesielt Finland – ser på
              lykke. Finland topper stadig rangeringene over verdens lykkeligste
              land, men hva gjør finnene riktig som vi kan lære av?
            </p>
          </section>
          {/* Seksjon 3 */}
          <section data-aos="fade-right">
            <h2 className="section-title">"I Finland er balanse nøkkelen"</h2>
            <p>
              Møt Olivia, en 25-åring fra Helsinki, som deler sin innsikt i den
              finske lykkeformelen:
            </p>
            <blockquote className="quote" data-aos="fade-left">
              <p>
              <em>"I Finland er balanse nøkkelen,"</em> forklarer hun. <em>"Vi elsker naturen og ser på friluftsliv
              som vår hemmelige ingrediens for velvære. Enten det er en skogstur eller en stille stund ved innsjøen,
              finner vi ro i det enkle."</em>
              </p>
            </blockquote>
            <p>
              Men det stopper ikke der. Olivia understreker betydningen av sterke
            sosiale bånd:
            </p>
            <blockquote className="quote" data-aos="fade-right">
            <p>
            <em>"Vår lykke er basert på fellesskap og gjensidig støtte. 
            Det handler ikke bare om økonomisk velstand, men om å vite at du har et nettverk av mennesker som alltid er der for deg."</em>
            </p>
            </blockquote>
            <figure>
              <img
                className="portrait"
                src="../public/assets/img/finnish.jpg"
                alt="Olivia Halonen"
              />
              <figcaption className="txt-portrait">Foto: Olivia Halonen</figcaption>
            </figure>
          </section>
          {/* Seksjon 4 */}
          <section data-aos="fade-left">
            <h2 className="section-title">Andrea's norske realitet</h2>
            <p>
              På den andre siden har vi Andrea, en 28 år gammel lærer fra Oslo,
              som gir oss et innblikk i den norske hverdagen:
            </p>
            <blockquote className="quote" data-aos="fade-right">
              <p>
              <em>"Det føles som om vi alltid må være på topp,"</em> sukker Andrea. 
              <em>"Selv med alle våre goder, er det et konstant jag etter mer.
              Lange arbeidsdager og et uendelig press gjør det vanskelig å finne ro."</em>
              </p>
            </blockquote>
            <p>
              Andrea peker på utfordringen med å finne balanse: 
            </p>
            <blockquote className="quote" data-aos="fade-left">
            <p>
              <em>"Vi har flotte ordninger for fri og ferie,
              men å virkelig koble av? Det er noe vi fortsatt strever med å mestre."</em>
            </p>
            </blockquote>
            <figure>
              <img
                className="portrait"
                src="../public/assets/img/norwegian.jpg"
                alt="Andrea Johnsen"
              />
              <figcaption className="txt-portrait">Foto: Andrea Johnsen</figcaption>
            </figure>
          </section>
          {/* Seksjon 5 */}
          <section data-aos="fade-up">
            <h2 className="section-title">
              Veien til lykke: Kan Norge lære av Finland?
            </h2>
            <p>
              Så hva kan Norge gjøre for å klatre på lykkestigen? Kanskje svaret
              ligger i å ta et steg tilbake og revurdere våre prioriteringer. Kan
              vi lære av Finlands fokus på naturopplevelser og sterke sosiale
              bånd?
            </p>
            <p>
              Det er tydelig at lykke ikke bare handler om økonomisk velstand. Det
              dreier seg om å skape et samfunn der mennesker føler seg verdsatt,
              støttet og i balanse – både på jobb og hjemme.
            </p>
            <p>
              Mens Norge fortsetter sitt søk etter lykken, kan det være nyttig å
              lytte til erfaringene fra Finland – og kanskje vi, ett smil om
              gangen, kan komme nærmere en lykkeligere hverdag.
            </p>
          </section>
          {/* Datawrapper Section */}
      <section data-aos="fade-up">
        <h2 className="section-title">
          Lykkeindeksen 2024: En visuell oversikt
        </h2>
        <p>
        Norden skiller seg ut med sine gjennomgående blåtoner, som indikerer høye nivåer av lykke. 
        Dette visuelle bildet oppfordrer oss til å dykke dypere inn i hva som virkelig bidrar til lykken i de ulike landene.
        Kartet, som presenterer lykkeindeksen for 2024, gir en umiddelbar oversikt over hvordan innbyggerne opplever livskvalitet og trivsel. 
        De blå fargene representerer de lykkeligste landene, mens de rødaktige nyansene indikerer lavere nivåer av tilfredshet. 
        Dette fargekodede systemet gjør det enkelt å sammenligne ulike land og identifisere hvor vi finner de lykkeligste samfunnene.
        </p>
        <div className="data-visualization" id="datawrapper-container">
          {/* Datawrapper embed will load here */}
        </div>
        <figcaption className="lykkeindex">
          Kartet viser den globale lykkeindeksen for 2024, der land er fargekodet fra rødt (lavest lykkenivå) til blått (høyest lykkkenivå). 
          Kilde: World Happiness Report 2024
        </figcaption>
        <p>
            Ifølge den nyeste rapporten fra World Happiness Report, er det flere faktorer som bidrar til de høye lykkenivåene i de nordiske landene. 
            Disse inkluderer sterke sosiale nettverk, et robust velferdssystem, tillit til offentlige institusjoner og en høy grad av personlig frihet. 
            Finland, som nok en gang topper listen, illustrerer hvordan disse elementene kombineres for å skape et samfunn hvor innbyggerne føler seg trygge og verdsatt. 
            I kontrast viser kartet at flere land utenfor Norden sliter med lavere lykkenivåer, ofte knyttet til økonomisk usikkerhet, høy kriminalitet og mindre tilgang på sosiale tjenester.
        </p>
      </section>
            <p>
            Dette visuelle bildet oppfordrer oss til å dykke dypere inn i hva som
            virkelig bidrar til lykken i de ulike landene, og får oss til å se
            forbi de vanlige økonomiske kriteriene. Det er klart at lykke er mer enn bare tall; det handler om livskvalitet, samfunnsengasjement og 
            følelsen av tilhørighet. Ved å studere lykkeindeksen kan vi lære mye om hvordan ulike kulturer prioriterer trivsel og hva som kan gjøres 
            for å forbedre livskvaliteten i land med lavere lykkenivåer. For Norge og andre land er det en invitasjon til refleksjon og handling: 
            hvordan kan vi implementere lærdommene fra de lykkeligste samfunnene i våre egne liv?
            </p>
          </section>

        {/* Topp 7 lykkeligste land-seksjon */}
        {/*
        <section data-aos="fade-up">
          <h2 className="section-title">Top 7 lykkeligste land</h2>
          <article className="country-boxes">
            {Object.keys(countryData).map((country, index) => (
              <section
                key={index}
                className="country-box"
                data-aos="fade-up"
                onClick={() => setCountryCoordinates(countryData[country])}
                style={{ cursor: "pointer" }}
              >
                <h3>{index + 1}. {country}</h3>
                <p>
                  {country === "Finland"
                    ? "Finland topper lykkesrangeringene på grunn av lav inntektsulikhet, høy sosial støtte, og frihet til å ta egne valg."
                    : country === "Danmark"
                    ? "Dansker er kjent for sin 'hygge'-kultur, som fremmer koselige og intime sosiale samlinger."
                    : country === "Island"
                    ? "Island har en sterk følelse av fellesskap og sosial støtte."
                    : country === "Sverige"
                    ? "Sverige har en god balanse mellom arbeid og fritid."
                    : country === "Israel"
                    ? "Israel scorer høyt på livstilfredshet, økonomi, helse og sosial støtte."
                    : country === "Nederland"
                    ? "Nederland har høye nivåer av sosial støtte og tillit til offentlige institusjoner."
                    : "Norge har et høyt BNP per innbygger, god sosial støtte og høy forventet levealder."}
                </p>
              </section>
            ))}
          </article>
          <MapContainer
            center={countryCoordinates} 
            zoom={4}
            style={{ height: "600px", width: "100%" }}
            zoomControl={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomToCountryTop7 coordinates={countryCoordinates} />
          </MapContainer>
        </section>
        */}

        </section>
    </>
  )
}
