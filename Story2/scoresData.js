const scores = [
  {
    "country": "Finland",
    "score": "7,741"
  },
  {
    "country": "Denmark",
    "score": "7,583"
  },
  {
    "country": "Iceland",
    "score": "7,525"
  },
  {
    "country": "Sweden",
    "score": "7,344"
  },
  {
    "country": "Israel",
    "score": "7,341"
  },
  {
    "country": "Netherlands",
    "score": "7,319"
  },
  {
    "country": "Norway",
    "score": "7,302"
  },
  {
    "country": "Luxembourg",
    "score": "7,122"
  },
  {
    "country": "Switzerland",
    "score": "7,060"
  },
  {
    "country": "Australia",
    "score": "7,057"
  },
  {
    "country": "New Zealand",
    "score": "7,029"
  },
  {
    "country": "Costa Rica",
    "score": "6,955"
  },
  {
    "country": "Kuwait",
    "score": "6,951"
  },
  {
    "country": "Austria",
    "score": "6,905"
  },
  {
    "country": "Canada",
    "score": "6,900"
  },
  {
    "country": "Belgium",
    "score": "6,894"
  },
  {
    "country": "Ireland",
    "score": "6,838"
  },
  {
    "country": "Czech Republic",
    "score": "6,822"
  },
  {
    "country": "Lithuania",
    "score": "6,818"
  },
  {
    "country": "United Kingdom",
    "score": "6,749"
  },
  {
    "country": "Slovenia",
    "score": "6,743"
  },
  {
    "country": "United Arab Emirates",
    "score": "6,733"
  },
  {
    "country": "United States of America",
    "score": "6,725"
  },
  {
    "country": "Germany",
    "score": "6,719"
  },
  {
    "country": "Mexico",
    "score": "6,678"
  },
  {
    "country": "Uruguay",
    "score": "6,611"
  },
  {
    "country": "France",
    "score": "6,609"
  },
  {
    "country": "Saudi Arabia",
    "score": "6,594"
  },
  {
    "country": "Kosovo",
    "score": "6,561"
  },
  {
    "country": "Singapore",
    "score": "6,523"
  },
  {
    "country": "Taiwan",
    "score": "6,503"
  },
  {
    "country": "Romania",
    "score": "6,491"
  },
  {
    "country": "El Salvador",
    "score": "6,469"
  },
  {
    "country": "Estonia",
    "score": "6,448"
  },
  {
    "country": "Poland",
    "score": "6,442"
  },
  {
    "country": "Spain",
    "score": "6,421"
  },
  {
    "country": "Republic of Serbia",
    "score": "6,411"
  },
  {
    "country": "Chile",
    "score": "6,360"
  },
  {
    "country": "Panama",
    "score": "6,358"
  },
  {
    "country": "Malta",
    "score": "6,346"
  },
  {
    "country": "Italy",
    "score": "6,324"
  },
  {
    "country": "Guatemala",
    "score": "6,287"
  },
  {
    "country": "Nicaragua",
    "score": "6,284"
  },
  {
    "country": "Brazil",
    "score": "6,272"
  },
  {
    "country": "Slovakia",
    "score": "6,257"
  },
  {
    "country": "Latvia",
    "score": "6,234"
  },
  {
    "country": "Uzbekistan",
    "score": "6,195"
  },
  {
    "country": "Argentina",
    "score": "6,188"
  },
  {
    "country": "Kazakhstan",
    "score": "6,188"
  },
  {
    "country": "Cyprus",
    "score": "6,068"
  },
  {
    "country": "Japan",
    "score": "6,060"
  },
  {
    "country": "South Korea",
    "score": "6,058"
  },
  {
    "country": "Philippines",
    "score": "6,048"
  },
  {
    "country": "Vietnam",
    "score": "6,043"
  },
  {
    "country": "Portugal",
    "score": "6,030"
  },
  {
    "country": "Hungary",
    "score": "6,017"
  },
  {
    "country": "Paraguay",
    "score": "5,977"
  },
  {
    "country": "Thailand",
    "score": "5,976"
  },
  {
    "country": "Malaysia",
    "score": "5,975"
  },
  {
    "country": "China",
    "score": "5,973"
  },
  {
    "country": "Honduras",
    "score": "5,968"
  },
  {
    "country": "Bahrain",
    "score": "5,959"
  },
  {
    "country": "Croatia",
    "score": "5,942"
  },
  {
    "country": "Greece",
    "score": "5,934"
  },
  {
    "country": "Bosnia and Herzegovina",
    "score": "5,877"
  },
  {
    "country": "Libya",
    "score": "5,866"
  },
  {
    "country": "Jamaica",
    "score": "5,842"
  },
  {
    "country": "Peru",
    "score": "5,841"
  },
  {
    "country": "Dominican Republic",
    "score": "5,823"
  },
  {
    "country": "Mauritius",
    "score": "5,816"
  },
  {
    "country": "Moldova",
    "score": "5,816"
  },
  {
    "country": "Russia",
    "score": "5,785"
  },
  {
    "country": "Bolivia",
    "score": "5,784"
  },
  {
    "country": "Ecuador",
    "score": "5,725"
  },
  {
    "country": "Kyrgyzstan",
    "score": "5,714"
  },
  {
    "country": "Montenegro",
    "score": "5,707"
  },
  {
    "country": "Mongolia",
    "score": "5,696"
  },
  {
    "country": "Colombia",
    "score": "5,695"
  },
  {
    "country": "Venezuela",
    "score": "5,607"
  },
  {
    "country": "Indonesia",
    "score": "5,568"
  },
  {
    "country": "Bulgaria",
    "score": "5,463"
  },
  {
    "country": "Armenia",
    "score": "5,455"
  },
  {
    "country": "South Africa",
    "score": "5,422"
  },
  {
    "country": "North Macedonia",
    "score": "5,369"
  },
  {
    "country": "Algeria",
    "score": "5,364"
  },
  {
    "country": "Hong Kong",
    "score": "5,316"
  },
  {
    "country": "Albania",
    "score": "5,304"
  },
  {
    "country": "Tajikistan",
    "score": "5,281"
  },
  {
    "country": "Democratic Republic of the Congo",
    "score": "5,221"
  },
  {
    "country": "Mozambique",
    "score": "5,216"
  },
  {
    "country": "Georgia",
    "score": "5,185"
  },
  {
    "country": "Iraq",
    "score": "5,166"
  },
  {
    "country": "Nepal",
    "score": "5,158"
  },
  {
    "country": "Laos",
    "score": "5,139"
  },
  {
    "country": "Gabon",
    "score": "5,106"
  },
  {
    "country": "Côte d'Ivoire",
    "score": "5,080"
  },
  {
    "country": "Guinea",
    "score": "5,023"
  },
  {
    "country": "Turkey",
    "score": "4,975"
  },
  {
    "country": "Senegal",
    "score": "4,969"
  },
  {
    "country": "Iran",
    "score": "4,923"
  },
  {
    "country": "Azerbaijan",
    "score": "4,893"
  },
  {
    "country": "Nigeria",
    "score": "4,881"
  },
  {
    "country": "Palestine",
    "score": "4,879"
  },
  {
    "country": "Cameroon",
    "score": "4,874"
  },
  {
    "country": "Ukraine",
    "score": "4,873"
  },
  {
    "country": "Namibia",
    "score": "4,832"
  },
  {
    "country": "Morocco",
    "score": "4,795"
  },
  {
    "country": "Pakistan",
    "score": "4,657"
  },
  {
    "country": "Niger",
    "score": "4,556"
  },
  {
    "country": "Burkina Faso",
    "score": "4,548"
  },
  {
    "country": "Mauritania",
    "score": "4,505"
  },
  {
    "country": "Gambia",
    "score": "4,485"
  },
  {
    "country": "Chad",
    "score": "4,471"
  },
  {
    "country": "Kenya",
    "score": "4,470"
  },
  {
    "country": "Tunisia",
    "score": "4,422"
  },
  {
    "country": "Benin",
    "score": "4,377"
  },
  {
    "country": "Uganda",
    "score": "4,372"
  },
  {
    "country": "Myanmar",
    "score": "4,354"
  },
  {
    "country": "Cambodia",
    "score": "4,341"
  },
  {
    "country": "Ghana",
    "score": "4,289"
  },
  {
    "country": "Liberia",
    "score": "4,269"
  },
  {
    "country": "Mali",
    "score": "4,232"
  },
  {
    "country": "Madagascar",
    "score": "4,228"
  },
  {
    "country": "Togo",
    "score": "4,214"
  },
  {
    "country": "Jordan",
    "score": "4,186"
  },
  {
    "country": "India",
    "score": "4,054"
  },
  {
    "country": "Egypt",
    "score": "3,977"
  },
  {
    "country": "Sri Lanka",
    "score": "3,898"
  },
  {
    "country": "Bangladesh",
    "score": "3,886"
  },
  {
    "country": "Ethiopia",
    "score": "3,861"
  },
  {
    "country": "United Republic of Tanzania",
    "score": "3,781"
  },
  {
    "country": "Comoros",
    "score": "3,566"
  },
  {
    "country": "Yemen",
    "score": "3,561"
  },
  {
    "country": "Zambia",
    "score": "3,502"
  },
  {
    "country": "Eswatini",
    "score": "3,502"
  },
  {
    "country": "Malawi",
    "score": "3,421"
  },
  {
    "country": "Botswana",
    "score": "3,383"
  },
  {
    "country": "Zimbabwe",
    "score": "3,341"
  },
  {
    "country": "Republic of Congo",
    "score": "3,295"
  },
  {
    "country": "Sierra Leone",
    "score": "3,245"
  },
  {
    "country": "Lesotho",
    "score": "3,186"
  },
  {
    "country": "Lebanon",
    "score": "2,707"
  },
  {
    "country": "Afghanistan",
    "score": "1,721"
  }
]