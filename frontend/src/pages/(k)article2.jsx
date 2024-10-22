import { useEffect, useState } from "react"
import { countries } from '/public/assets/data/countriesData.jsx'
import { scores } from '/public/assets/data/scoresData.jsx'

export default function Article2() {
    const [topOffset, setTopOffset] = useState(0);

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
        link2.rel = "stylesheet";
        document.head.appendChild(link2);
    
        const script1 = document.createElement("script");
        script1.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script1.async = true;

        script1.onload = () => {
            
            function getColor(d) {
                return d > 7 ? '#0571b0' :
                    d > 5  ? '#92c5de' :
                    d > 3  ? '#ff7e00' :
                    d > 1  ? '#ca0020' :
                              '#A9A9A9'
            }
            
            function style(feature, isHighlighted = false) {
                let score = 0
            
                let thisScore = scores.find(item => item.country === feature.properties.ADMIN)
            
                if (thisScore) {
                    score = parseFloat(thisScore.score.replace(',', '.'))
                }
            
                return {
                    fillColor: getColor(score),
                    weight: isHighlighted ? 4 : 2,
                    opacity: 1,
                    color: isHighlighted ? 'purple' : 'white',
                    dashArray: ' ',
                    fillOpacity: isHighlighted ? 1 : 0.7
                }
            }
            
            function highlightFeature(e) {
                let layer = e.target;
                layer.setStyle({
                    weight: 1.5,
                    color: '#000',
                    dashArray: '',
                    fillOpacity: 0.7
                })
                layer.bringToFront()
            }
            
            function resetHighlight(e) {
                geojson.resetStyle(e.target)
            }
            
            function zoomToFeature(e) {
                map.fitBounds(e.target.getBounds())
            }
            
            function onEachFeature(feature, layer) {
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight,
                    click: zoomToFeature
                })
            }
            
            let mapMain = L.map('mapContainerS2', {
                center: [centerLat, centerLong],
                zoom: 0
            })
            
            const modifyNav = (lock) => {
                let toModify = [
                    mapMain.zoomControl,
                    mapMain.boxZoom,
                    mapMain.doubleClickZoom,
                    mapMain.dragging,
                    mapMain.keyboard,
                    mapMain.scrollWheelZoom,
                    mapMain.touchZoom
                ]
            
                if (lock === true) {
                    for (let i = 0; i < toModify.length; i++) {
                        toModify[i].disable()
                    }
                } else {
                    for (let i = 0; i < toModify.length; i++) {
                        toModify[i].enable()
                    }
                }
            }
            
            modifyNav(true)
            
            mapMain.createPane('labels')
            mapMain.getPane('labels').style.zIndex = 650
            mapMain.getPane('labels').style.pointerEvents = 'none'
            
            geojson = L.geoJson(countries, {
                style: style,
                onEachFeature: onEachFeature
            }).addTo(mapMain)
            
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20,
                pane: 'labels',
                noWrap: true
            }).addTo(mapMain)
            
            const countryCords = [
                [60.16952, 24.93545],
                [55.676098, 12.568337],
                [64.13548, -21.89541],
                [59.33258, 18.0649],
                [31.771959, 35.217018],
                [52.377956, 4.897070],
                [59.911491, 10.757933]
            ]
            const countryNames = [
                "Finland",
                "Denmark",
                "Iceland",
                "Sweden",
                "Israel",
                "Netherlands",
                "Norway"
            ]
            
            const goNext = () => {
                let oldIndex = countryIndex
                let newIndex = oldIndex+1
            
                unWatch(`box-${oldIndex}`)
            
                const oldBox = document.getElementById(`box-${oldIndex}`)
            
                if (newIndex > countryCords.length) {
                    oldBox.classList.add("vanishS2")
                    modifyNav(false)
                    highlightedCountry = null
                    geojson.setStyle(feature => style(feature, feature.properties.ADMIN === highlightedCountry))
                    return
                }
                
                if (countryIndex < countryCords.length) {
                    highlightedCountry = countryNames[countryIndex]
            
                    if (highlightedCountry !== null) {
                        geojson.setStyle(feature => style(feature, feature.properties.ADMIN === highlightedCountry))
                    }
            
                    mapMain.flyTo(countryCords[countryIndex], 4)
                    /*if (newIndex > 1) {
                        L.motion.polyline([
                            [countryCords[oldIndex-1][0], countryCords[oldIndex-1][1]],
                            [countryCords[oldIndex][0], countryCords[oldIndex][1]]
                        ], 
                        {
                            color: "transparent"
                        }, {
                            auto: true,
                            duration: 2000,
                        }, {
                            removeOnEnd: true,
                            icon: L.divIcon({
                                html: "<i class='fa fa-plane fa-2x' style='color: purple;' aria-hidden='true' motion-base='-48'></i>",
                                iconSize: [0, 0]
                            })
                        }).addTo(mapMain)
                    }*/
            
                    setWatch(`box-${newIndex}`)
            
                    const newBox = document.getElementById(`box-${newIndex}`)
                    const oldBoxH = oldBox.offsetHeight
                    const oldBox0T = oldBox.offsetTop
                    const newTop = oldBox0T + oldBoxH
                    setTopOffset(newTop)
                    
                    oldBox.classList.add("vanishS2")
                    newBox.classList.remove("vanishS2")
            
                    countryIndex++
                }
            } 
            
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    goNext()
                    unWatch("box-0")
                }
                })
            }
            
            const options = {
                root: null,
                rootMargin: "0px 0px -100% 0px",
                threshold: 0,
            }
            
            const observer = new IntersectionObserver(callback, options)
            
            const setWatch = (id) => { 
                const target = document.getElementById(id);
                observer.observe(target)
            }
            
            const unWatch = (id) => {
                const target = document.getElementById(id);
                observer.unobserve(target)
            }
            
            setWatch("box-0")

        };

        document.body.appendChild(script1);

        // Cleanup function
        return () => {
            document.body.removeChild(script1);
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);

    return (
        <div id="wrapperS2">
            <section id="scrollableS2">
                <div className="contentS2" style={{width: 18+'rem'}} id="box-0">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/horizon.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Sunrise_at_ocean.JPG">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contenS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-1">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/helsingfors.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.m.wikipedia.org/wiki/Fil:Helsingfors_%283%29.jpg">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-2">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/kopenhagen.JPG" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://en.m.wikipedia.org/wiki/File:Kopenhagen_Innenstadt.JPG">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-3">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/reykjavík.jpeg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.m.wikipedia.org/wiki/Fil:Reykjav%C3%ADk_s%C3%A9%C3%B0_%C3%BAr_Hallgr%C3%ADmskirkju.jpeg">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-4">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/stockholm.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.m.wikipedia.org/wiki/Fil:Stockholm_-_Kungstr%C3%A4dg%C3%A5rden_-_April_2019_03.jpg">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-5">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/jerusalem.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.m.wikipedia.org/wiki/Fil:Jerusalem_from_mt_olives.jpg">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-6">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/amsterdam.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.wikipedia.org/wiki/Fil:Amsterdam_-_the_Canal_Ring_%288652262148%29.jpg">Wikipedia</a></div>
                    </div>
                </div>
                <div className="contentS2 vanishS2" style={{width: 18+'rem', bottom: `${topOffset}px`}} id="box-7">
                    <div className="card">
                        <img className="card-img-top" src="../assets/img/oslo.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Er det noe poeng i lykke egentlig?</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris a augue semper varius. Etiam viverra felis interdum velit venenatis tristique. Sed at ante sagittis nisi rutrum blandit. Mauris vehicula sit amet nibh eget sodales. Vestibulum mollis accumsan convallis.</p>
                        </div>
                        <div className="card-footer text-muted">Bilde fra <a target="_blank" href="https://no.m.wikipedia.org/wiki/Fil:Oslo_at_night.jpg">Wikipedia</a></div>
                    </div>
                </div>
            </section>

            <section id="mapContainerS2"></section>

        </div>
    )
}

const centerLat = 60.39299
const centerLong = 5.32415
let geojson
let highlightedCountry = null
let countryIndex = 0