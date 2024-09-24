import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Article2() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);
    
        return (
        <>
            <article>
                <section className="article-header">
                    <h1 className="article-title">Lykke i Norden: Hva kan Norge lære av Finland?</h1>
                    <p className="article-intro">Er gresset virkelig grønnere på den andre siden av grensen? Nye tall avslører at Norge,
                        til tross for sin velstand og høye levestandard, fortsatt sliter med å klatre oppover
                        på lykkestigen i Norden. La oss dykke ned i hva som ligger bak disse overraskende funnene.</p>
                </section>
                <div className="article-content">
                    {/* Seksjon 1 */}
                    <section data-aos="fade-up">
                        <h2 className="section-title">Nordens lykke-paradoks</h2>
                        <p>I en fersk rangering fra NTB har Norge nok en gang fått stempelet som Nordens minst lykkelige land.
                            Dette er ikke bare en forbigående trend, men en vedvarende utfordring som får mange til å klø seg i hodet.
                            Hvordan kan et land med så mye gå glipp av lykken?</p>
                        <p><a href="https://www.forskning.no/lykke-ntb/norge-minst-lykkelige-i-norden-nok-en-gang/2341299">
                            Forskning.no</a> sin siste rapport kaster lys over situasjonen.
                            Til tross for et robust velferdssystem og økonomisk stabilitet,
                            virker det som om noe mangler i nordmenns liv.
                            Stress, høy arbeidsbelastning og en prestasjonskultur pekes ut som mulige syndebukker.
                            Er vi i ferd med å ofre vår lykke på karrierens alter?</p>
                    </section>
                    {/* Seksjon 2 */}
                    <section data-aos="fade-up">
                        <h2 className="section-title">To sider av samme mynt: Finland vs. Norge</h2>
                        <p>For å forstå hvorfor Norge henger etter, kan det være verdt å se nærmere på hvordan våre nordiske naboer
                            – spesielt Finland – ser på lykke. Finland topper stadig rangeringene over verdens lykkeligste land,
                            men hva gjør finnene riktig som vi kan lære av?</p>
                    </section>
                    {/* Seksjon 3 */}
                    <section data-aos="fade-right">
                        <h2 className="section-title">"I Finland er balanse nøkkelen"</h2>
                        <p>Møt Olivia, en 25-åring fra Helsinki, som deler sin innsikt i den finske lykkeformelen:</p>
                        <section className="quote" data-aos="fade-left">
                            <p>"I Finland er balanse nøkkelen," forklarer hun. "Vi elsker naturen og ser på friluftsliv
                                som vår hemmelige ingrediens for velvære. Enten det er en skogstur eller en stille stund ved innsjøen,
                                finner vi ro i det enkle."</p>
                        </section>
                        <p>Men det stopper ikke der. Olivia understreker betydningen av sterke sosiale bånd:
                            "Vår lykke bygger på fellesskap og gjensidig støtte. Det handler ikke bare om penger,
                            men om å vite at du har et nettverk som støtter deg."</p>
                        <figure>
                            <img className="portrait" src="assets/img/woman-1274056_1280.jpg" alt="" />
                            <figcaption className="txt-portrait">Foto: Olivia Halonen</figcaption>
                        </figure>
                    </section>
                    {/* Seksjon 4 */}
                    <section data-aos="fade-left">
                        <h2 className="section-title">Andrea's norske realitet</h2>
                        <p>På den andre siden har vi Andrea, en 28 år gammel lærer fra Oslo, som gir oss et innblikk i den norske hverdagen:</p>
                        <section className="quote" data-aos="fade-right">
                            <p>"Det føles som om vi alltid må være på topp," sukker Andrea. "Selv med alle våre goder, er det et konstant jag etter mer.
                                Lange arbeidsdager og et uendelig press gjør det vanskelig å finne ro."</p>
                        </section>
                        <p>Andrea peker på utfordringen med å finne balanse: "Vi har flotte ordninger for fri og ferie,
                            men å virkelig koble av? Det er en kunst vi fortsatt strever med å mestre."</p>
                        <figure>
                            <img className="portrait" src="assets/img/woman-8552807_1280.jpg" alt="" />
                            <figcaption className="txt-portrait">Foto: Andrea Johnsen</figcaption>
                        </figure>
                    </section>
                    {/* Seksjon 5 */}
                    <section data-aos="fade-up">
                        <h2 className="section-title">Veien til lykke: Kan Norge lære av Finland?</h2>
                        <p>Så hva kan Norge gjøre for å klatre på lykkestigen? Kanskje svaret ligger i å ta et steg tilbake og revurdere våre prioriteringer.
                            Kan vi lære av Finlands fokus på naturopplevelser og sterke sosiale bånd?</p>
                        <p>Det er tydelig at lykke ikke bare handler om økonomisk velstand.
                            Det dreier seg om å skape et samfunn der mennesker føler seg verdsatt, støttet og i balanse – både på jobb og hjemme.</p>
                        <p>Mens Norge fortsetter sitt søk etter lykken, kan det være nyttig å lytte til erfaringene fra Finland – og kanskje vi,
                            ett smil om gangen, kan komme nærmere en lykkeligere hverdag.</p>
                    </section>
                    {/* Seksjon 6 */}
                    <section data-aos="fade-up">
                        <h2 className="section-title">Lykkeindeksen 2024: En visuell oversikt</h2>
                        <p>I en verden der velstand og lykke ofte antas å gå hånd i hånd, avdekker nye data et
                            fascinerende paradoks i hjertet av Norden. Lykkeindeksen for 2024 kaster nytt lys over
                            hvordan nasjoner rangeres på den globale lykkeskalaen, og resultatene utfordrer våre
                            antakelser om hva som virkelig bidrar til et lykkelig samfunn.</p>
                        <section className="data-visualization" data-aos="zoom-in">
                            <script type="text/javascript" defer src="https://datawrapper.dwcdn.net/nLQfN/embed.js" charset="utf-8"></script>
                            <figcaption className="lykkeindex">Kartet viser den globale lykkeindeksen for 2024, der land er fargekodet fra rødt (lavest lykkenivå) til blått (høyest lykkenivå).
                                Skalaen går fra 1.72 til 7.74, noe som indikerer en betydelig variasjon i opplevd lykke verden over.
                                Kilde: World Happiness Report 2024</figcaption>
                        </section>
                        <p>Norden utmerker seg med sine konsekvente blåtoner, som tyder på høye lykkenivåer.
                            Imidlertid avslører subtile nyanseforskjeller interessante variasjoner innad
                            i regionen, spesielt mellom Norge og Finland. Dette visuelle overblikket inviterer til
                            en dypere utforskning av faktorene som bidrar til nasjonal lykke, og utfordrer oss til
                            å se forbi tradisjonelle økonomiske målestokker.</p>
                    </section>
                </div>
            </article>
        </>
    );
}