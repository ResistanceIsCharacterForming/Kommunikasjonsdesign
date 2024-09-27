import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Article2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      <section className="article-header">
        <h1 className="article-title">
          Lykke i Norden: Hva kan Norge lære av Finland?
        </h1>
        <p className="article-intro">
          Er gresset virkelig grønnere på den andre siden av grensen? Nye tall
          avslører at Norge, til tross for sin velstand og høye levestandard,
          fortsatt sliter med å klatre oppover på lykkestigen i Norden. La oss
          dykke ned i hva som ligger bak disse overraskende funnene.
        </p>
      </section>
      <div className="article-content">
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
            "I Finland er balanse nøkkelen," forklarer hun. "Vi elsker naturen og ser på friluftsliv
            som vår hemmelige ingrediens for velvære. Enten det er en skogstur eller en stille stund ved innsjøen,
            finner vi ro i det enkle."
            </p>
          </blockquote>
          <p>
            Men det stopper ikke der. Olivia understreker betydningen av sterke
            sosiale bånd: "Vår lykke er basert på fellesskap og gjensidig støtte. 
            Det handler ikke bare om økonomisk velstand, men om å vite at du har et nettverk av mennesker som alltid er der for deg."
          </p>
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
            "Det føles som om vi alltid må være på topp," sukker Andrea. 
            "Selv med alle våre goder, er det et konstant jag etter mer.
            Lange arbeidsdager og et uendelig press gjør det vanskelig å finne ro."
            </p>
          </blockquote>
          <p>
            Andrea peker på utfordringen med å finne balanse: "Vi har flotte ordninger for fri og ferie,
            men å virkelig koble av? Det er noe vi fortsatt strever med å mestre."
          </p>
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

        {/* Seksjon 6 */}
        <section data-aos="fade-up">
          <h2 className="section-title">
            Lykkeindeksen 2024: En visuell oversikt
          </h2>
          <p>
            I en verden der velstand og lykke ofte antas å gå hånd i hånd,
            avdekker nye data et fascinerende paradoks i hjertet av Norden.
            Lykkeindeksen for 2024 kaster nytt lys over hvordan nasjoner
            rangeres på den globale lykkeskalaen, og resultatene utfordrer våre
            antakelser om hva som virkelig bidrar til et lykkelig samfunn.
          </p>
          {/*<div className="data-visualization" data-aos="zoom-in">
            <figcaption className="lykkeindex">
              Kartet viser den globale lykkeindeksen for 2024, der land er
              fargekodet fra rødt (lavest lykkenivå) til blått (høyest
              lykkkenivå). Skalaen går fra 1.72 til 7.74, noe som indikerer en
              betydelig variasjon i opplevd lykke verden over. Kilde: World
              Happiness Report 2024
            </figcaption>
              </div>*/}
          <p>
            Norden skiller seg ut med sine gjennomgående blåtoner, som indikerer
            høye nivåer av lykke. Likevel avslører de små nyansene interessante
            forskjeller innen regionen, særlig mellom Norge og Finland. Dette
            visuelle bildet oppfordrer oss til å dykke dypere inn i hva som
            virkelig bidrar til lykken i de ulike landene, og får oss til å se
            forbi de vanlige økonomiske kriteriene.
          </p>
        </section>

        {/* Top 7 landene */}
        <section data-aos="fade-up">
          <h2 className="section-title">Top 7 lykkeligste land</h2>
          <article className="country-boxes">
            {/* Finland */}
            <section className="country-box" data-aos="fade-up">
              <h3>1. Finland</h3>
              <p>
                Finland topper lykkesrangeringene på grunn av lav
                inntektsulikhet, høy sosial støtte, og frihet til å ta egne valg.
                Landet har også lav korrupsjon og et sterkt velferdssystem <a href="https://theconversation.com/why-finland-is-the-happiest-country-in-the-world-an-expert-explains-203016">[1]</a>.
              </p>
            </section>

            {/* Danmark */}
            <section className="country-box" data-aos="fade-up">
              <h3>2. Danmark</h3>
              <p>
                Dansker er kjent for sin "hygge"-kultur, som fremmer koselige og
                intime sosiale samlinger. Landet har også høy sosial likhet, lav
                kriminalitet, og et robust velferdssystem <a href="https://www.weforum.org/agenda/2018/03/why-denmark-dominates-the-world-happiness-report-rankings-year-after-year/">[2]</a> <a href="https://denmark.dk/people-and-culture/happiness">[3]</a>.
              </p>
            </section>

            {/* Island */}
            <section className="country-box" data-aos="fade-up">
              <h3>3. Island</h3>
              <p>
                Island har en sterk følelse av fellesskap og sosial støtte.
                Landet er kjent for sin naturskjønnhet, som gir innbyggerne
                muligheter til å koble av og nyte friluftsliv <a href="edgeservices.bing.com/edgesvc/redirect?url=https%3A%2F%2Fwww.bbc.com%2Ftravel%2Farticle%2F20160509-the-truth-about-icelandic-happiness&hash=jUchmmPupFeStq96FZU9Lv%2F8wTs62pa4hgBDJtbgjdg%3D&key=psc-underside&usparams=cvid%3A51D%7CBingProd%7C3F011BAE49276A61BA107ACA31F086269E0A9BF09778AC9739FF712433DF5681%5Ertone%3ACreative">[4]</a>.
              </p>
            </section>

            {/* Sverige */}
            <section className="country-box" data-aos="fade-up">
              <h3>4. Sverige</h3>
              <p>
                Sverige har en god balanse mellom arbeid og fritid, med fleksible
                arbeidsordninger og generøse foreldrepermisjoner. Landet har også
                høy tillit til offentlige institusjoner og lav korrupsjon <a href="https://worldhappiness.report/ed/2020/the-nordic-exceptionalism-what-explains-why-the-nordic-countries-are-constantly-among-the-happiest-in-the-world/">[5]</a> <a href="https://www.weforum.org/agenda/2019/05/sweden-is-a-top-performer-on-well-being-here-s-why/">[6]</a>.
              </p>
            </section>

            {/* Israel */}
            <section className="country-box" data-aos="fade-up">
              <h3>5. Israel</h3>
              <p>
                Israel scorer høyt på livstilfredshet, økonomi, helse og sosial
                støtte. Landet har også en sterk følelse av nasjonal stolthet og
                optimisme <a href="http://edgeservices.bing.com/edgesvc/redirect?url=https%3A%2F%2Fwww.israel21c.org%2Fwhy-israelis-are-so-happy-and-how-we-can-all-feel-happier%2F&hash=KJnxZNIN%2FU%2BNkHjT%2F9XtqDK76G5O9kFOmNxxrDWoze8%3D&key=psc-underside&usparams=cvid%3A51D%7CBingProd%7C3F011BAE49276A61BA107ACA31F086269E0A9BF09778AC9739FF712433DF5681%5Ertone%3ACreative">[7]</a>.
              </p>
            </section>

            {/* Nederland */}
            <section className="country-box" data-aos="fade-up">
              <h3>6. Nederland</h3>
              <p>
                Nederland har høye nivåer av sosial støtte og tillit til
                offentlige institusjoner. Landet er kjent for sin pragmatiske
                tilnærming til livets utfordringer og en kultur som verdsetter
                individuell frihet <a href="https://dutchreview.com/expat/dutch-mindset-secret-to-happiness/">[8]</a>.
              </p>
            </section>

            {/* Norge */}
            <section className="country-box" data-aos="fade-up">
              <h3>7. Norge</h3>
              <p>
                Norge har et høyt BNP per innbygger, god sosial støtte og høy
                forventet levealder. Landet scorer også høyt på frihet til å ta
                egne valg og har lav korrupsjon <a href="https://worldhappiness.report/ed/2020/the-nordic-exceptionalism-what-explains-why-the-nordic-countries-are-constantly-among-the-happiest-in-the-world/">[9]</a>.
              </p>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
}
