# Quiznauts packs fact check and editorial cleanup — October 30, 2026

## Result

All 11 packs imported from Quiznauts on 2026-10-29 now have AI-assisted source, coordinate, and editorial review in [`trivia-bank.js`](../../trivia-bank.js): **239 places and 298 facts active** (1 place and 11 facts retired; 103 facts rewritten or tightened in place; 10 place coordinate/name/region records corrected; 30 source URLs updated in place; 6 supporting Wikipedia citations added). Combined with the first 12 packs (96 places, 194 facts), the bank holds **23 packs, 335 places, and 492 facts**.

This is an AI-assisted review (Antigravity, October 30, 2026) verified against live-fetched raw Wikipedia wikitext (infoboxes, tables, `{{coord}}` templates, and redirect targets) for all cited Wikipedia articles and HTTP/HTML inspection of the WMO extremes archive, not human educator sign-off or assistive-technology acceptance.

## Summary by pack

| Pack | Active places | Active facts | Retired facts | Rewritten / tightened facts |
| --- | ---: | ---: | ---: | ---: |
| `capitals-africa-carmen` | 24 | 24 | 0 | 4 |
| `capitals-americas-carmen` | 16 | 16 | 0 | 4 |
| `capitals-asia-carmen` | 26 | 26 | 0 | 3 |
| `capitals-europe-carmen` | 22 | 22 | 0 | 3 |
| `capitals-oceania-carmen` | 6 | 7 | 0 | 1 |
| `dish-origins-carmen` | 41 | 81 | 11 *(+1 place: `dish-wales`)* | 31 |
| `world-almanac-carmen` | 13 | 20 | 0 | 7 |
| `earth-lands-carmen` | 25 | 29 | 0 | 16 |
| `earth-waters-carmen` | 30 | 33 | 0 | 17 |
| `weather-records-carmen` | 24 | 25 | 0 | 11 |
| `disaster-records-carmen` | 12 | 15 | 0 | 6 |
| **Total** | **239** | **298** | **11** | **103** |

## Retired place and facts (11 facts)

Saved progress automatically drops Leitner cards for retired fact IDs via `normalizeProgress` while preserving all remaining history.

- `dish-wales` / `dish-wales-1` (*Welsh rarebit*): Cited `Welsh rarebit` (`country = United Kingdom`) states there is no strong evidence the dish originated in Welsh cuisine (first attested 1725 in England, colliding with `England` in pack) and leaked `"Welsh"` in the clue.
- `dish-thailand-1` (*Pad thai*): Dish name printed `"thai"` directly in the clue; `dish-thailand` retains `dish-thailand-2` (*Massaman curry*).
- `dish-united-states-1` (*Fortune cookie*): Cited `Fortune cookie` infobox credits `Japan` and `United States` jointly (tracing to 19th-century Kyoto *tsujiura senbei*), colliding with `Japan` in the pack.
- `dish-united-states-2` (*Chili con carne*): Cited `Chili con carne` lead calls it *"a spicy stew of Mexican origin"* (`Mexico` and `United States` in infobox), colliding with `Mexico` in the pack.
- `dish-united-states-3` (*Chop suey*): Cited `Chop suey` traces the dish to *tsap seui* in Taishan, Guangdong (`China` in pack) alongside Chinese-American popularization, and leaked `"American"` in the clue.
- `dish-united-states-5` (*Baked Alaska*): Cited `Baked Alaska` places the 1867 dessert invention (*Norwegian omelette*) at the Grand Hôtel in Paris (`France` in pack) and rebuts the Delmonico’s naming story (*"Alaska Florida"*).
- `dish-united-states-6` (*English muffin*): Cited `English muffin` (`country = England`) documents 1747 English recipes and 1859 US print references prior to Samuel Bath Thomas’s 1880 commercial bakery, colliding with `England` in the pack.
- `dish-austria-1` (*Danish pastry*): Cited `Danish pastry` infobox credits `Denmark` and `Austria` jointly and notes unclear origin, colliding with `Denmark` in the pack; `dish-austria` retains `dish-austria-2` and `dish-austria-3`.
- `dish-turkey-1` (*Borek*): Cited `Börek` states exact origin is unclear across West Asia and Southeast Europe (`Greece` and `Uzbekistan` in pack); `dish-turkey` retains `dish-turkey-2` (*Lokum*).
- `dish-philippines-1` (*Lumpia*): Cited `Lumpia` infobox lists `Indonesia` and `Philippines` as co-equal places of origin (`Indonesia` in pack); `dish-philippines` retains `dish-philippines-2` and `dish-philippines-3`.
- `dish-sweden-1` (*Gravlax*): Cited `Gravlax` attributes the dish to the `Nordic countries` broadly (1348 Norwegian reference, `Denmark` in pack) and leaked `"Swedish"` in the clue; `dish-sweden` retains `dish-sweden-2`.

## Place coordinate, name, region, and URL updates

- **Coordinates & regions updated (7 places):** `dish-russia` moved from Siberian `(61.5, 105.3)` to European Russia `(55.75, 37.62)` to match `region: "Europe"`; `world-antarctica` `region` changed from `"South Pole"` to `"Southern Hemisphere"` (matching `(-82.9, 135)`); `earth-blue-mountains-of-oregon` updated to `(44.82, -118.1)`; `weather-mitribah` updated to station `(29.82, 47.27)`; `weather-klinck` updated to AWS `(72.18, -40)`; `disaster-shaanxi` updated to epicenter `(34.5, 109.3)`; `cap-palikir` `region` clarified as `"Federated States of Micronesia"`.
- **Canonical place names updated (3 places):** `earth-scoresby-sund` → `"Scoresby Sound"`; `weather-mount-baker` → `"Mt. Baker Ski Area"` (matching both `(48.86, -121.68)` and the snowfall record location); `disaster-dronka` → `"Durunka"`. Place and fact IDs were kept unchanged.
- **Source URLs updated (30 in-place URL updates + 6 added citations):** All 19 `https://wmo.asu.edu/` citations (which redirected to a generic `wmo.int` portal page) now point directly to `https://wmo.int/files/records-of-weather-and-climate-extremes-table`; all 9 redirected Wikipedia slugs (`Mole_poblano`, `Tajine`, `Black_Forest_gâteau`, `Philippine_adobo`, `Lakes_of_Canada`, `General_Sherman_(tree)`, `Dallol,_Ethiopia`, `Mount_Baker_Ski_Area`, `Dronka`) and unencoded `N'Djamena` were updated to canonical targets; `dish-brazil-1` now cites `Feijoada_(Brazilian_dish)`; and supporting Wikipedia articles were added to `cap-karachi-1` (`Islamabad`), `world-sweden-1` (`List_of_countries_by_number_of_islands`), `world-antarctica-2` (`Wildlife_of_Antarctica`), `earth-blue-mountains-of-oregon-1` (`Blue_Mountains_(Pacific_Northwest)`), `earth-bay-of-bengal-1` (`Bay`), and `weather-oodnadatta-1` (`List_of_weather_records`).

## Fact-by-fact review ledger (298 active facts)

Reviewer for all entries below: **AI-assisted source & editorial review (Antigravity, 2026-10-30)**.

### `capitals-africa-carmen` — Where in Africa's Capitals is Carmen Sandiego? (24 places, 24 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `cap-porto-novo-1` | Porto-Novo (Benin) | Porto-Novo is the official capital of Benin. | [Porto-Novo](https://en.wikipedia.org/wiki/Porto-Novo) (Wikipedia) |
| `cap-gitega-1` | Gitega (Burundi) | Gitega became the political capital of Burundi by parliamentary vote in January 2019, while Bujumbura remains the economic center. | [Gitega](https://en.wikipedia.org/wiki/Gitega) (Wikipedia) |
| `cap-abuja-1` | Abuja (Nigeria) | Abuja has been the capital of Nigeria since 1991. | [Abuja](https://en.wikipedia.org/wiki/Abuja) (Wikipedia) |
| `cap-lagos-1` | Lagos (Nigeria) | Lagos was the capital of Nigeria until 1991. | [Lagos](https://en.wikipedia.org/wiki/Lagos) (Wikipedia) |
| `cap-yamoussoukro-1` | Yamoussoukro (Ivory Coast) | Yamoussoukro became the legal capital of Ivory Coast in 1983, although former capital Abidjan retains many political and economic functions. | [Yamoussoukro](https://en.wikipedia.org/wiki/Yamoussoukro) (Wikipedia) |
| `cap-rabat-1` | Rabat (Morocco) | Rabat is the capital of Morocco. | [Rabat](https://en.wikipedia.org/wiki/Rabat) (Wikipedia) |
| `cap-dodoma-1` | Dodoma (Tanzania) | Dodoma is the capital of Tanzania. | [Dodoma](https://en.wikipedia.org/wiki/Dodoma) (Wikipedia) |
| `cap-antananarivo-1` | Antananarivo (Madagascar) | Antananarivo is the capital of Madagascar. | [Antananarivo](https://en.wikipedia.org/wiki/Antananarivo) (Wikipedia) |
| `cap-ouagadougou-1` | Ouagadougou (Burkina Faso) | Ouagadougou is the capital of Burkina Faso. | [Ouagadougou](https://en.wikipedia.org/wiki/Ouagadougou) (Wikipedia) |
| `cap-yaounde-1` | Yaoundé (Cameroon) | Yaoundé is the capital of Cameroon. | [Yaoundé](https://en.wikipedia.org/wiki/Yaound%C3%A9) (Wikipedia) |
| `cap-lilongwe-1` | Lilongwe (Malawi) | Lilongwe has been the capital of Malawi since 1975. | [Lilongwe](https://en.wikipedia.org/wiki/Lilongwe) (Wikipedia) |
| `cap-n-djamena-1` | N'Djamena (Chad) | N'Djamena is the capital of Chad. | [N'Djamena](https://en.wikipedia.org/wiki/N%27Djamena) (Wikipedia) |
| `cap-niamey-1` | Niamey (Niger) | Niamey is the capital of Niger. | [Niamey](https://en.wikipedia.org/wiki/Niamey) (Wikipedia) |
| `cap-nairobi-1` | Nairobi (Kenya) | Nairobi is the capital of Kenya. | [Nairobi](https://en.wikipedia.org/wiki/Nairobi) (Wikipedia) |
| `cap-mbabane-1` | Mbabane (Eswatini) | Mbabane is the executive capital of Eswatini, while Lobamba serves as the royal and legislative capital. | [Mbabane](https://en.wikipedia.org/wiki/Mbabane) (Wikipedia) |
| `cap-kampala-1` | Kampala (Uganda) | Kampala is the capital of Uganda. | [Kampala](https://en.wikipedia.org/wiki/Kampala) (Wikipedia) |
| `cap-dakar-1` | Dakar (Senegal) | Dakar is the capital of Senegal. | [Dakar](https://en.wikipedia.org/wiki/Dakar) (Wikipedia) |
| `cap-nouakchott-1` | Nouakchott (Mauritania) | Nouakchott, the capital of Mauritania, was built from a small fishing village around independence in 1960. | [Nouakchott](https://en.wikipedia.org/wiki/Nouakchott) (Wikipedia) |
| `cap-asmara-1` | Asmara (Eritrea) | Asmara, the capital of Eritrea, is known for its 1930s modernist buildings. | [Asmara](https://en.wikipedia.org/wiki/Asmara) (Wikipedia) |
| `cap-libreville-1` | Libreville (Gabon) | Libreville is the capital of Gabon. | [Libreville](https://en.wikipedia.org/wiki/Libreville) (Wikipedia) |
| `cap-kinshasa-1` | Kinshasa (DR Congo) | Kinshasa, the capital of DR Congo, faces Brazzaville, the capital of the Republic of the Congo, across the Congo River. | [Kinshasa](https://en.wikipedia.org/wiki/Kinshasa) (Wikipedia); [Brazzaville](https://en.wikipedia.org/wiki/Brazzaville) (Wikipedia) |
| `cap-praia-1` | Praia (Cape Verde) | Praia is the capital of Cape Verde. | [Praia](https://en.wikipedia.org/wiki/Praia) (Wikipedia) |
| `cap-gaborone-1` | Gaborone (Botswana) | Gaborone is the capital of Botswana. | [Gaborone](https://en.wikipedia.org/wiki/Gaborone) (Wikipedia) |
| `cap-moroni-1` | Moroni (Comoros) | Moroni is the capital of Comoros. | [Moroni, Comoros](https://en.wikipedia.org/wiki/Moroni,_Comoros) (Wikipedia) |

### `capitals-americas-carmen` — Where in the Capitals of the Americas is Carmen Sandiego? (16 places, 16 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `cap-ottawa-1` | Ottawa (Canada) | Ottawa, the capital of Canada, was chosen by Queen Victoria in 1857 as capital of the colonial Province of Canada, a decade before Confederation. | [Ottawa](https://en.wikipedia.org/wiki/Ottawa) (Wikipedia) |
| `cap-brasilia-1` | Brasília (Brazil) | Brasília, the capital of Brazil, was built from scratch and opened in 1960. | [Brasília](https://en.wikipedia.org/wiki/Bras%C3%ADlia) (Wikipedia) |
| `cap-rio-de-janeiro-1` | Rio de Janeiro (Brazil) | Rio de Janeiro served as the colonial, royal, and national capital of Brazil from 1763 to 1960, after Salvador and before Brasília. | [Rio de Janeiro](https://en.wikipedia.org/wiki/Rio_de_Janeiro) (Wikipedia) |
| `cap-sucre-1` | Sucre (Bolivia) | Sucre is the constitutional capital of Bolivia and home to its Supreme Court, while the executive and legislature sit in La Paz. | [Sucre](https://en.wikipedia.org/wiki/Sucre) (Wikipedia) |
| `cap-la-paz-1` | La Paz (Bolivia) | La Paz, Bolivia, is the highest seat of government in the world, about 3,600 meters up. | [La Paz](https://en.wikipedia.org/wiki/La_Paz) (Wikipedia) |
| `cap-quito-1` | Quito (Ecuador) | Quito is the capital of Ecuador. | [Quito](https://en.wikipedia.org/wiki/Quito) (Wikipedia) |
| `cap-belmopan-1` | Belmopan (Belize) | Belmopan, the capital of Belize, was built inland after a 1961 hurricane hit Belize City. | [Belmopan](https://en.wikipedia.org/wiki/Belmopan) (Wikipedia) |
| `cap-tegucigalpa-1` | Tegucigalpa (Honduras) | Tegucigalpa, together with its sister city Comayagüela, forms the constitutional capital of Honduras. | [Tegucigalpa](https://en.wikipedia.org/wiki/Tegucigalpa) (Wikipedia) |
| `cap-buenos-aires-1` | Buenos Aires (Argentina) | Buenos Aires is the capital of Argentina. | [Buenos Aires](https://en.wikipedia.org/wiki/Buenos_Aires) (Wikipedia) |
| `cap-mexico-city-1` | Mexico City (Mexico) | Mexico City was built on the site of the Aztec capital Tenochtitlan. | [Mexico City](https://en.wikipedia.org/wiki/Mexico_City) (Wikipedia) |
| `cap-lima-1` | Lima (Peru) | Lima is the capital of Peru. | [Lima](https://en.wikipedia.org/wiki/Lima) (Wikipedia) |
| `cap-valparaiso-1` | Valparaíso (Chile) | Chile's National Congress has met in Valparaíso since 1990. Santiago is the capital. | [National Congress of Chile](https://en.wikipedia.org/wiki/National_Congress_of_Chile) (Wikipedia) |
| `cap-santo-domingo-1` | Santo Domingo (Dominican Republic) | Santo Domingo, the capital of the Dominican Republic, is the oldest continuously inhabited European-founded city in the Americas. | [Santo Domingo](https://en.wikipedia.org/wiki/Santo_Domingo) (Wikipedia) |
| `cap-bogota-1` | Bogotá (Colombia) | Bogotá is the capital of Colombia. | [Bogotá](https://en.wikipedia.org/wiki/Bogot%C3%A1) (Wikipedia) |
| `cap-port-of-spain-1` | Port of Spain (Trinidad and Tobago) | Port of Spain is the capital of Trinidad and Tobago. | [Port of Spain](https://en.wikipedia.org/wiki/Port_of_Spain) (Wikipedia) |
| `cap-kingston-1` | Kingston (Jamaica) | Kingston is the capital of Jamaica. | [Kingston, Jamaica](https://en.wikipedia.org/wiki/Kingston,_Jamaica) (Wikipedia) |

### `capitals-asia-carmen` — Where in Asia's Capitals is Carmen Sandiego? (26 places, 26 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `cap-manila-1` | Manila (Philippines) | Manila is the capital of the Philippines. | [Manila](https://en.wikipedia.org/wiki/Manila) (Wikipedia) |
| `cap-ankara-1` | Ankara (Turkey) | Ankara has been the capital of Turkey since 1923. | [Ankara](https://en.wikipedia.org/wiki/Ankara) (Wikipedia) |
| `cap-istanbul-1` | Istanbul (Turkey) | Istanbul, once Constantinople, was the capital of the Ottoman Empire. Ankara became the capital of Turkey in 1923. | [Istanbul](https://en.wikipedia.org/wiki/Istanbul) (Wikipedia) |
| `cap-astana-1` | Astana (Kazakhstan) | Astana is the capital of Kazakhstan. It was called Nur-Sultan from 2019 to 2022. | [Astana](https://en.wikipedia.org/wiki/Astana) (Wikipedia) |
| `cap-naypyidaw-1` | Naypyidaw (Myanmar) | Naypyidaw replaced Yangon as the administrative capital of Myanmar in November 2005 and received its official name in March 2006. | [Naypyidaw](https://en.wikipedia.org/wiki/Naypyidaw) (Wikipedia) |
| `cap-thimphu-1` | Thimphu (Bhutan) | Thimphu is the capital of Bhutan. | [Thimphu](https://en.wikipedia.org/wiki/Thimphu) (Wikipedia) |
| `cap-hanoi-1` | Hanoi (Vietnam) | Hanoi is the capital of Vietnam. | [Hanoi](https://en.wikipedia.org/wiki/Hanoi) (Wikipedia) |
| `cap-islamabad-1` | Islamabad (Pakistan) | Islamabad, the capital of Pakistan, is a planned city built in the 1960s. | [Islamabad](https://en.wikipedia.org/wiki/Islamabad) (Wikipedia) |
| `cap-karachi-1` | Karachi (Pakistan) | Karachi served as the first federal capital of Pakistan starting in 1947; Rawalpindi later served as interim capital while Islamabad was built. | [Karachi](https://en.wikipedia.org/wiki/Karachi) (Wikipedia); [Islamabad](https://en.wikipedia.org/wiki/Islamabad) (Wikipedia) |
| `cap-kuala-lumpur-1` | Kuala Lumpur (Malaysia) | Kuala Lumpur is the capital of Malaysia, though most government offices moved to Putrajaya. | [Kuala Lumpur](https://en.wikipedia.org/wiki/Kuala_Lumpur) (Wikipedia); [Putrajaya](https://en.wikipedia.org/wiki/Putrajaya) (Wikipedia) |
| `cap-sri-jayawardenepura-kotte-1` | Sri Jayawardenepura Kotte (Sri Lanka) | Sri Jayawardenepura Kotte, a city bordering Colombo where parliament sits, became the official capital of Sri Lanka in 1982. | [Sri Jayawardenepura Kotte](https://en.wikipedia.org/wiki/Sri_Jayawardenepura_Kotte) (Wikipedia) |
| `cap-new-delhi-1` | New Delhi (India) | New Delhi is the capital of India. | [New Delhi](https://en.wikipedia.org/wiki/New_Delhi) (Wikipedia) |
| `cap-beijing-1` | Beijing (China) | Beijing is the capital of China. | [Beijing](https://en.wikipedia.org/wiki/Beijing) (Wikipedia) |
| `cap-vientiane-1` | Vientiane (Laos) | Vientiane is the capital of Laos. | [Vientiane](https://en.wikipedia.org/wiki/Vientiane) (Wikipedia) |
| `cap-tashkent-1` | Tashkent (Uzbekistan) | Tashkent is the capital of Uzbekistan. | [Tashkent](https://en.wikipedia.org/wiki/Tashkent) (Wikipedia) |
| `cap-bishkek-1` | Bishkek (Kyrgyzstan) | Bishkek is the capital of Kyrgyzstan. | [Bishkek](https://en.wikipedia.org/wiki/Bishkek) (Wikipedia) |
| `cap-seoul-1` | Seoul (South Korea) | Seoul is the capital of South Korea. | [Seoul](https://en.wikipedia.org/wiki/Seoul) (Wikipedia) |
| `cap-tokyo-1` | Tokyo (Japan) | Tokyo is the capital of Japan. | [Tokyo](https://en.wikipedia.org/wiki/Tokyo) (Wikipedia) |
| `cap-kyoto-1` | Kyoto (Japan) | Kyoto was the imperial capital of Japan from 794 until the emperor moved to Tokyo in 1869. | [Kyoto](https://en.wikipedia.org/wiki/Kyoto) (Wikipedia) |
| `cap-tbilisi-1` | Tbilisi (Georgia) | Tbilisi is the capital of Georgia, the country. | [Tbilisi](https://en.wikipedia.org/wiki/Tbilisi) (Wikipedia) |
| `cap-dushanbe-1` | Dushanbe (Tajikistan) | Dushanbe is the capital of Tajikistan. | [Dushanbe](https://en.wikipedia.org/wiki/Dushanbe) (Wikipedia) |
| `cap-ashgabat-1` | Ashgabat (Turkmenistan) | Ashgabat is the capital of Turkmenistan. | [Ashgabat](https://en.wikipedia.org/wiki/Ashgabat) (Wikipedia) |
| `cap-bandar-seri-begawan-1` | Bandar Seri Begawan (Brunei) | Bandar Seri Begawan is the capital of Brunei. | [Bandar Seri Begawan](https://en.wikipedia.org/wiki/Bandar_Seri_Begawan) (Wikipedia) |
| `cap-damascus-1` | Damascus (Syria) | Damascus, the capital of Syria, is one of the oldest continuously inhabited cities. | [Damascus](https://en.wikipedia.org/wiki/Damascus) (Wikipedia) |
| `cap-abu-dhabi-1` | Abu Dhabi (United Arab Emirates) | Abu Dhabi is the capital of the United Arab Emirates. | [Abu Dhabi](https://en.wikipedia.org/wiki/Abu_Dhabi) (Wikipedia) |
| `cap-riyadh-1` | Riyadh (Saudi Arabia) | Riyadh is the capital of Saudi Arabia. | [Riyadh](https://en.wikipedia.org/wiki/Riyadh) (Wikipedia) |

### `capitals-europe-carmen` — Where in Europe's Capitals is Carmen Sandiego? (22 places, 22 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `cap-bern-1` | Bern (Switzerland) | Bern is the seat of government of Switzerland. The Swiss call it the "federal city"; the constitution names no capital. | [Bern](https://en.wikipedia.org/wiki/Bern) (Wikipedia) |
| `cap-amsterdam-1` | Amsterdam (Netherlands) | Amsterdam is the capital of the Netherlands, though the government and king work in The Hague. | [Amsterdam](https://en.wikipedia.org/wiki/Amsterdam) (Wikipedia); [The Hague](https://en.wikipedia.org/wiki/The_Hague) (Wikipedia) |
| `cap-skopje-1` | Skopje (North Macedonia) | Skopje is the capital of North Macedonia. | [Skopje](https://en.wikipedia.org/wiki/Skopje) (Wikipedia) |
| `cap-chisinau-1` | Chișinău (Moldova) | Chișinău is the capital of Moldova. | [Chișinău](https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u) (Wikipedia) |
| `cap-edinburgh-1` | Edinburgh (Scotland) | Edinburgh is the capital of Scotland. | [Edinburgh](https://en.wikipedia.org/wiki/Edinburgh) (Wikipedia) |
| `cap-berlin-1` | Berlin (Germany) | Berlin is the capital of Germany. Bonn was West Germany's capital until reunification. | [Berlin](https://en.wikipedia.org/wiki/Berlin) (Wikipedia) |
| `cap-ljubljana-1` | Ljubljana (Slovenia) | Ljubljana is the capital of Slovenia. | [Ljubljana](https://en.wikipedia.org/wiki/Ljubljana) (Wikipedia) |
| `cap-zagreb-1` | Zagreb (Croatia) | Zagreb is the capital of Croatia. | [Zagreb](https://en.wikipedia.org/wiki/Zagreb) (Wikipedia) |
| `cap-sarajevo-1` | Sarajevo (Bosnia and Herzegovina) | Sarajevo is the capital of Bosnia and Herzegovina. | [Sarajevo](https://en.wikipedia.org/wiki/Sarajevo) (Wikipedia) |
| `cap-moscow-1` | Moscow (Russia) | Moscow is the capital of Russia. | [Moscow](https://en.wikipedia.org/wiki/Moscow) (Wikipedia) |
| `cap-madrid-1` | Madrid (Spain) | Madrid is the capital of Spain. | [Madrid](https://en.wikipedia.org/wiki/Madrid) (Wikipedia) |
| `cap-vilnius-1` | Vilnius (Lithuania) | Vilnius is the capital of Lithuania. | [Vilnius](https://en.wikipedia.org/wiki/Vilnius) (Wikipedia) |
| `cap-helsinki-1` | Helsinki (Finland) | Helsinki became capital of the Grand Duchy of Finland in 1812 and has remained the capital of independent Finland since 1917. | [Helsinki](https://en.wikipedia.org/wiki/Helsinki) (Wikipedia) |
| `cap-bucharest-1` | Bucharest (Romania) | Bucharest is the capital of Romania. | [Bucharest](https://en.wikipedia.org/wiki/Bucharest) (Wikipedia) |
| `cap-sofia-1` | Sofia (Bulgaria) | Sofia is the capital of Bulgaria. | [Sofia](https://en.wikipedia.org/wiki/Sofia) (Wikipedia) |
| `cap-athens-1` | Athens (Greece) | Athens is the capital of Greece. | [Athens](https://en.wikipedia.org/wiki/Athens) (Wikipedia) |
| `cap-lisbon-1` | Lisbon (Portugal) | Lisbon is the capital of Portugal. | [Lisbon](https://en.wikipedia.org/wiki/Lisbon) (Wikipedia) |
| `cap-valletta-1` | Valletta (Malta) | Valletta, the capital of Malta, covers 0.61 km², making it the smallest capital city in the European Union by area. | [Valletta](https://en.wikipedia.org/wiki/Valletta) (Wikipedia) |
| `cap-podgorica-1` | Podgorica (Montenegro) | Podgorica is the capital of Montenegro. | [Podgorica](https://en.wikipedia.org/wiki/Podgorica) (Wikipedia) |
| `cap-reykjavik-1` | Reykjavík (Iceland) | Reykjavík, the capital of Iceland, is the northernmost capital of a sovereign state in the world, at about 64° north. | [Reykjavík](https://en.wikipedia.org/wiki/Reykjav%C3%ADk) (Wikipedia) |
| `cap-dublin-1` | Dublin (Ireland) | Dublin is the capital of Ireland. | [Dublin](https://en.wikipedia.org/wiki/Dublin) (Wikipedia) |
| `cap-warsaw-1` | Warsaw (Poland) | Warsaw is the capital of Poland. | [Warsaw](https://en.wikipedia.org/wiki/Warsaw) (Wikipedia) |

### `capitals-oceania-carmen` — Where in Oceania's Capitals is Carmen Sandiego? (6 places, 7 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `cap-canberra-1` | Canberra (Australia) | Canberra, the capital of Australia, was built as a compromise between rivals Sydney and Melbourne. | [Canberra](https://en.wikipedia.org/wiki/Canberra) (Wikipedia) |
| `cap-wellington-1` | Wellington (New Zealand) | Wellington has been the capital of New Zealand since 1865. | [Wellington](https://en.wikipedia.org/wiki/Wellington) (Wikipedia) |
| `cap-wellington-2` | Wellington (New Zealand) | Wellington is the southernmost capital of a sovereign state in the world, at about 41° south. | [Wellington](https://en.wikipedia.org/wiki/Wellington) (Wikipedia) |
| `cap-suva-1` | Suva (Fiji) | Suva is the capital of Fiji. | [Suva](https://en.wikipedia.org/wiki/Suva) (Wikipedia) |
| `cap-port-moresby-1` | Port Moresby (Papua New Guinea) | Port Moresby is the capital of Papua New Guinea. | [Port Moresby](https://en.wikipedia.org/wiki/Port_Moresby) (Wikipedia) |
| `cap-ngerulmud-1` | Ngerulmud (Palau) | Ngerulmud has been the capital of Palau since 2006. | [Ngerulmud](https://en.wikipedia.org/wiki/Ngerulmud) (Wikipedia) |
| `cap-palikir-1` | Palikir (Federated States of Micronesia) | Palikir is the capital of the Federated States of Micronesia. | [Palikir](https://en.wikipedia.org/wiki/Palikir) (Wikipedia) |

### `dish-origins-carmen` — Where in the World's Kitchens is Carmen Sandiego? (41 places, 81 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `dish-japan-1` | Japan (Asia) | Sushi comes from Japan. | [Sushi](https://en.wikipedia.org/wiki/Sushi) (Wikipedia) |
| `dish-japan-2` | Japan (Asia) | Tempura comes from Japan. Portuguese missionaries brought the frying style there in the 1500s. | [Tempura](https://en.wikipedia.org/wiki/Tempura) (Wikipedia) |
| `dish-thailand-2` | Thailand (Asia) | Massaman curry comes from Thailand. Its name and spices show Persian and Malay influence. | [Massaman curry](https://en.wikipedia.org/wiki/Massaman_curry) (Wikipedia) |
| `dish-korea-1` | Korea (Asia) | Kimchi comes from Korea. | [Kimchi](https://en.wikipedia.org/wiki/Kimchi) (Wikipedia) |
| `dish-korea-2` | Korea (Asia) | Bibimbap comes from Korea. | [Bibimbap](https://en.wikipedia.org/wiki/Bibimbap) (Wikipedia) |
| `dish-mexico-1` | Mexico (North America) | The Caesar salad comes from Mexico. Italian-born chef Caesar Cardini created it in Tijuana in the 1920s. | [Caesar salad](https://en.wikipedia.org/wiki/Caesar_salad) (Wikipedia) |
| `dish-mexico-2` | Mexico (North America) | Nachos come from Mexico. Ignacio "Nacho" Anaya made them in Piedras Negras in 1943. | [Nachos](https://en.wikipedia.org/wiki/Nachos) (Wikipedia) |
| `dish-mexico-3` | Mexico (North America) | Tacos come from Mexico. | [Taco](https://en.wikipedia.org/wiki/Taco) (Wikipedia) |
| `dish-mexico-4` | Mexico (North America) | Mole poblano comes from Puebla, Mexico. | [Mole (sauce)](https://en.wikipedia.org/wiki/Mole_(sauce)) (Wikipedia) |
| `dish-canada-1` | Canada (North America) | Hawaiian pizza comes from Canada. Greek-born Sam Panopoulos invented it in Ontario in 1962. | [Hawaiian pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) (Wikipedia) |
| `dish-canada-2` | Canada (North America) | Poutine, fries with cheese curds and gravy, comes from Quebec, Canada. | [Poutine](https://en.wikipedia.org/wiki/Poutine) (Wikipedia) |
| `dish-canada-3` | Canada (North America) | Butter tarts come from Canada. | [Butter tart](https://en.wikipedia.org/wiki/Butter_tart) (Wikipedia) |
| `dish-canada-4` | Canada (North America) | Nanaimo bars come from Canada. They are named after Nanaimo, British Columbia. | [Nanaimo bar](https://en.wikipedia.org/wiki/Nanaimo_bar) (Wikipedia) |
| `dish-united-states-4` | United States (North America) | Eggs Benedict originated in New York City, in the United States, with rival accounts crediting Delmonico’s in 1860 and the Waldorf Hotel in 1894. | [Eggs Benedict](https://en.wikipedia.org/wiki/Eggs_Benedict) (Wikipedia) |
| `dish-united-states-7` | United States (North America) | German chocolate cake comes from the United States. It is named after Samuel German, who developed a baking chocolate. | [German chocolate cake](https://en.wikipedia.org/wiki/German_chocolate_cake) (Wikipedia) |
| `dish-united-states-8` | United States (North America) | Clam chowder comes from the United States, especially New England. | [Clam chowder](https://en.wikipedia.org/wiki/Clam_chowder) (Wikipedia) |
| `dish-united-states-9` | United States (North America) | Gumbo comes from Louisiana, in the United States. | [Gumbo](https://en.wikipedia.org/wiki/Gumbo) (Wikipedia) |
| `dish-united-states-10` | United States (North America) | The Philly cheesesteak originated in Philadelphia, in the United States, starting as a 1930s chopped-steak sandwich before cheese was added around mid-century. | [Cheesesteak](https://en.wikipedia.org/wiki/Cheesesteak) (Wikipedia) |
| `dish-united-states-11` | United States (North America) | Poke originated in pre-contact Native Hawaiian cuisine in Hawaii, now part of the United States. | [Poke (dish)](https://en.wikipedia.org/wiki/Poke_(dish)) (Wikipedia) |
| `dish-united-states-12` | United States (North America) | Fajitas trace their first culinary evidence to the 1930s ranch lands of South and West Texas, in the United States, along the Rio Grande borderlands. | [Fajita](https://en.wikipedia.org/wiki/Fajita) (Wikipedia) |
| `dish-united-states-13` | United States (North America) | Russian dressing originated in the United States, appearing in print by 1900 before a mayonnaise-based version was popularized in Nashua, New Hampshire, in the 1910s. | [Russian dressing](https://en.wikipedia.org/wiki/Russian_dressing) (Wikipedia) |
| `dish-spain-1` | Spain (Europe) | Paella comes from Valencia, in Spain. | [Paella](https://en.wikipedia.org/wiki/Paella) (Wikipedia) |
| `dish-hungary-1` | Hungary (Europe) | Goulash comes from Hungary. | [Goulash](https://en.wikipedia.org/wiki/Goulash) (Wikipedia) |
| `dish-senegal-1` | Senegal (Africa) | Jollof rice comes from Senegal, from the Wolof people's Jolof Empire. Ghana and Nigeria argue over the best version. | [Jollof rice](https://en.wikipedia.org/wiki/Jollof_rice) (Wikipedia) |
| `dish-scotland-1` | Scotland (Europe) | Haggis, a savory pudding of sheep offal, oatmeal, and spices, is traditionally traced to Scotland and considered its national dish, despite early English recipes. | [Haggis](https://en.wikipedia.org/wiki/Haggis) (Wikipedia) |
| `dish-switzerland-1` | Switzerland (Europe) | Fondue comes from Switzerland. | [Fondue](https://en.wikipedia.org/wiki/Fondue) (Wikipedia) |
| `dish-austria-2` | Austria (Europe) | Wiener schnitzel comes from Austria. "Wiener" means "from Vienna." | [Wiener schnitzel](https://en.wikipedia.org/wiki/Wiener_schnitzel) (Wikipedia) |
| `dish-austria-3` | Austria (Europe) | Sachertorte comes from Vienna, in Austria, where Franz Sacher created it in 1832 decades before his son opened the Hotel Sacher in 1876. | [Sachertorte](https://en.wikipedia.org/wiki/Sachertorte) (Wikipedia) |
| `dish-belgium-1` | Belgium (Europe) | Brussels waffles from Belgium were showcased at Expo 58 and popularized in the United States at the 1962 Seattle and 1964 New York World's Fairs, becoming known there as Belgian waffles. | [Belgian waffle](https://en.wikipedia.org/wiki/Belgian_waffle) (Wikipedia) |
| `dish-england-1` | England (Europe) | The Scotch egg comes from England. London's Fortnum & Mason claims to have invented it in 1738. | [Scotch egg](https://en.wikipedia.org/wiki/Scotch_egg) (Wikipedia) |
| `dish-england-2` | England (Europe) | Yorkshire pudding comes from England. | [Yorkshire pudding](https://en.wikipedia.org/wiki/Yorkshire_pudding) (Wikipedia) |
| `dish-england-3` | England (Europe) | The Cornish pasty comes from England. | [Pasty](https://en.wikipedia.org/wiki/Pasty) (Wikipedia) |
| `dish-england-4` | England (Europe) | Fish and chips come from England. | [Fish and chips](https://en.wikipedia.org/wiki/Fish_and_chips) (Wikipedia) |
| `dish-vietnam-1` | Vietnam (Asia) | Pho comes from Vietnam. | [Pho](https://en.wikipedia.org/wiki/Pho) (Wikipedia) |
| `dish-vietnam-2` | Vietnam (Asia) | Bánh mì comes from Vietnam. It uses a French-style baguette. | [Bánh mì](https://en.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC) (Wikipedia) |
| `dish-france-1` | France (Europe) | The croque monsieur comes from France. | [Croque monsieur](https://en.wikipedia.org/wiki/Croque_monsieur) (Wikipedia) |
| `dish-france-2` | France (Europe) | Bouillabaisse comes from Marseille, in France. | [Bouillabaisse](https://en.wikipedia.org/wiki/Bouillabaisse) (Wikipedia) |
| `dish-france-3` | France (Europe) | Coq au vin comes from France. | [Coq au vin](https://en.wikipedia.org/wiki/Coq_au_vin) (Wikipedia) |
| `dish-france-4` | France (Europe) | Cassoulet comes from southern France, around Castelnaudary. | [Cassoulet](https://en.wikipedia.org/wiki/Cassoulet) (Wikipedia) |
| `dish-france-5` | France (Europe) | Quiche Lorraine comes from the Lorraine region of France, where the word quiche was attested by 1605. | [Quiche](https://en.wikipedia.org/wiki/Quiche) (Wikipedia) |
| `dish-france-6` | France (Europe) | Ratatouille comes from Nice, in France. | [Ratatouille](https://en.wikipedia.org/wiki/Ratatouille) (Wikipedia) |
| `dish-italy-1` | Italy (Europe) | Pesto comes from Genoa, in Italy. | [Pesto](https://en.wikipedia.org/wiki/Pesto) (Wikipedia) |
| `dish-italy-2` | Italy (Europe) | Carbonara is typical of the Lazio region of Italy, including Rome, and took its modern form and name in the mid-20th century. | [Carbonara](https://en.wikipedia.org/wiki/Carbonara) (Wikipedia) |
| `dish-italy-3` | Italy (Europe) | Cannoli come from Sicily, in Italy. | [Cannoli](https://en.wikipedia.org/wiki/Cannoli) (Wikipedia) |
| `dish-italy-4` | Italy (Europe) | Risotto comes from Italy. | [Risotto](https://en.wikipedia.org/wiki/Risotto) (Wikipedia) |
| `dish-italy-5` | Italy (Europe) | Tiramisu comes from Italy. | [Tiramisu](https://en.wikipedia.org/wiki/Tiramisu) (Wikipedia) |
| `dish-italy-6` | Italy (Europe) | Pizza Margherita comes from Naples, in Italy. | [Pizza Margherita](https://en.wikipedia.org/wiki/Pizza_Margherita) (Wikipedia) |
| `dish-argentina-1` | Argentina (South America) | Chimichurri comes from Argentina. | [Chimichurri](https://en.wikipedia.org/wiki/Chimichurri) (Wikipedia) |
| `dish-turkey-2` | Turkey (Asia) | Lokum, or Turkish delight, a gel confection of starch and sugar often flavored with rosewater, is popularly linked to 1770s confectioner Hacı Bekir in Istanbul, Turkey, though similar Persian and Arab sweets are older. | [Turkish delight](https://en.wikipedia.org/wiki/Turkish_delight) (Wikipedia) |
| `dish-morocco-1` | Morocco (Africa) | The cone-lidded clay tagine cooking pot originated in Tafraout, Morocco, and gives its name to a slow-cooked Maghrebi stew. | [Tagine](https://en.wikipedia.org/wiki/Tagine) (Wikipedia) |
| `dish-peru-1` | Peru (South America) | Historians trace the modern form of ceviche to colonial-era Peru, where it is considered the national dish. | [Ceviche](https://en.wikipedia.org/wiki/Ceviche) (Wikipedia) |
| `dish-brazil-1` | Brazil (South America) | Feijoada à brasileira, a stew of black beans with pork and beef first documented in Recife in 1827, is considered a national dish of Brazil. | [Feijoada (Brazilian dish)](https://en.wikipedia.org/wiki/Feijoada_(Brazilian_dish)) (Wikipedia) |
| `dish-germany-1` | Germany (Europe) | The döner kebab sandwich was popularized in Berlin, Germany, by Turkish immigrants. | [Doner kebab](https://en.wikipedia.org/wiki/Doner_kebab) (Wikipedia) |
| `dish-germany-2` | Germany (Europe) | Black Forest gateau is traditionally associated with Germany, where the earliest archived recipe appeared in 1927, though its exact origin is disputed. | [Black Forest gateau](https://en.wikipedia.org/wiki/Black_Forest_gateau) (Wikipedia) |
| `dish-lebanon-1` | Lebanon (Asia) | Tabbouleh comes from the mountains of Lebanon and Syria. | [Tabbouleh](https://en.wikipedia.org/wiki/Tabbouleh) (Wikipedia) |
| `dish-philippines-2` | Philippines (Asia) | In the Philippines, adobo is a dish of meat or seafood braised in vinegar, soy sauce, garlic, bay leaves, and black peppercorns; Spanish colonists gave an indigenous cooking method that name. | [Adobo (Filipino dish)](https://en.wikipedia.org/wiki/Adobo_(Filipino_dish)) (Wikipedia) |
| `dish-philippines-3` | Philippines (Asia) | Balut, a fertilized duck egg incubated and steamed in the shell, was localized into a signature street food in the Philippines. | [Balut (food)](https://en.wikipedia.org/wiki/Balut_(food)) (Wikipedia) |
| `dish-russia-1` | Russia (Europe) | Pelmeni became a staple of Russia during expansion into the Urals and Siberia, the two regions most often linked to their origin. | [Pelmeni](https://en.wikipedia.org/wiki/Pelmeni) (Wikipedia) |
| `dish-russia-2` | Russia (Europe) | Beef stroganoff comes from Russia. | [Beef Stroganoff](https://en.wikipedia.org/wiki/Beef_Stroganoff) (Wikipedia) |
| `dish-poland-1` | Poland (Europe) | Pierogi are traditional filled dumplings of Poland documented since the 17th century, though their exact origin is unknown. | [Pierogi](https://en.wikipedia.org/wiki/Pierogi) (Wikipedia) |
| `dish-poland-2` | Poland (Europe) | Bigos, a hunter's stew of cabbage and meat, comes from Poland. | [Bigos](https://en.wikipedia.org/wiki/Bigos) (Wikipedia) |
| `dish-greece-1` | Greece (Europe) | While moussaka has older Arab and Ottoman roots, chef Nikolaos Tselementes created the modern baked version topped with béchamel sauce in Greece in the 1920s. | [Moussaka](https://en.wikipedia.org/wiki/Moussaka) (Wikipedia) |
| `dish-india-1` | India (Asia) | Butter chicken is closely associated with the Moti Mahal restaurant in Delhi, India, which popularized the dish in the 1950s. | [Butter chicken](https://en.wikipedia.org/wiki/Butter_chicken) (Wikipedia) |
| `dish-india-2` | India (Asia) | Masala dosa comes from India. | [Masala dosa](https://en.wikipedia.org/wiki/Masala_dosa) (Wikipedia) |
| `dish-india-3` | India (Asia) | Tandoori chicken originated in the pre-Partition Punjab and was popularized after independence at the Moti Mahal restaurant in New Delhi, India. | [Tandoori chicken](https://en.wikipedia.org/wiki/Tandoori_chicken) (Wikipedia) |
| `dish-denmark-1` | Denmark (Europe) | Smørrebrød, from smør og brød ('butter and bread'), is the open-faced sandwich of Denmark, served on dense, dark sourdough rye bread called rugbrød. | [Smørrebrød](https://en.wikipedia.org/wiki/Sm%C3%B8rrebr%C3%B8d) (Wikipedia) |
| `dish-sweden-2` | Sweden (Europe) | Surströmming, fermented herring famous for its smell, comes from Sweden. | [Surströmming](https://en.wikipedia.org/wiki/Surstr%C3%B6mming) (Wikipedia) |
| `dish-georgia-1` | Georgia (Asia) | Khachapuri, a leavened cheese-filled bread, comes from Georgia. | [Khachapuri](https://en.wikipedia.org/wiki/Khachapuri) (Wikipedia) |
| `dish-uzbekistan-1` | Uzbekistan (Asia) | Plov is the national dish of Uzbekistan and neighboring Tajikistan, recognized on UNESCO’s intangible cultural heritage list in 2016. | [Pilaf](https://en.wikipedia.org/wiki/Pilaf) (Wikipedia) |
| `dish-new-zealand-1` | New Zealand (Oceania) | Hāngī comes from New Zealand. It is a Māori method of cooking in a pit oven. | [Hāngī](https://en.wikipedia.org/wiki/H%C4%81ng%C4%AB) (Wikipedia) |
| `dish-china-1` | China (Asia) | Peking duck comes from China. | [Peking duck](https://en.wikipedia.org/wiki/Peking_duck) (Wikipedia) |
| `dish-china-2` | China (Asia) | Dim sum comes from China, from Cantonese teahouses. | [Dim sum](https://en.wikipedia.org/wiki/Dim_sum) (Wikipedia) |
| `dish-jamaica-1` | Jamaica (North America) | Jerk chicken comes from Jamaica. | [Jerk (cooking)](https://en.wikipedia.org/wiki/Jerk_(cooking)) (Wikipedia) |
| `dish-jamaica-2` | Jamaica (North America) | Ackee and saltfish comes from Jamaica. | [Ackee and saltfish](https://en.wikipedia.org/wiki/Ackee_and_saltfish) (Wikipedia) |
| `dish-indonesia-1` | Indonesia (Asia) | Rendang is closely tied to the Minangkabau people of West Sumatra, in Indonesia, having developed along the cultural crossroads of the Malacca Strait. | [Rendang](https://en.wikipedia.org/wiki/Rendang) (Wikipedia) |
| `dish-indonesia-2` | Indonesia (Asia) | Satay developed in port cities of Java and Sumatra, in Indonesia, as well as the Malay Peninsula, adapting Middle Eastern kebabs with local spices and skewering. | [Satay](https://en.wikipedia.org/wiki/Satay) (Wikipedia) |
| `dish-south-africa-1` | South Africa (Africa) | Bobotie comes from South Africa. | [Bobotie](https://en.wikipedia.org/wiki/Bobotie) (Wikipedia) |
| `dish-south-africa-2` | South Africa (Africa) | Biltong, air-dried meat cured with vinegar, salt, black pepper, and coriander in Southern Africa by 17th-century Dutch pioneers, is closely associated with South Africa. | [Biltong](https://en.wikipedia.org/wiki/Biltong) (Wikipedia) |
| `dish-el-salvador-1` | El Salvador (North America) | The pupusa, a thick stuffed griddle cake from El Salvador and Honduras, is the national dish of El Salvador. | [Pupusa](https://en.wikipedia.org/wiki/Pupusa) (Wikipedia) |
| `dish-ethiopia-1` | Ethiopia (Africa) | Injera, a spongy fermented flatbread made from teff, is a staple of Ethiopia and neighboring Eritrea. | [Injera](https://en.wikipedia.org/wiki/Injera) (Wikipedia) |
| `dish-australia-1` | Australia (Oceania) | Vegemite comes from Australia. | [Vegemite](https://en.wikipedia.org/wiki/Vegemite) (Wikipedia) |

### `world-almanac-carmen` — Where in the World Almanac is Carmen Sandiego? (13 places, 20 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `world-france-1` | France (Europe) | France spans 12 time zones—more than any other country—thanks to its overseas territories, or 13 including its Antarctic claim. | [Time in France](https://en.wikipedia.org/wiki/Time_in_France) (Wikipedia) |
| `world-canada-1` | Canada (North America) | Canada has the most lakes of any country, more than the rest of the world combined by some counts. | [List of lakes of Canada](https://en.wikipedia.org/wiki/List_of_lakes_of_Canada) (Wikipedia) |
| `world-sweden-1` | Sweden (Europe) | Sweden tops international island rankings with 267,570 islands, though fewer than 1,000 are inhabited. | [Sweden](https://en.wikipedia.org/wiki/Sweden) (Wikipedia); [List of countries by number of islands](https://en.wikipedia.org/wiki/List_of_countries_by_number_of_islands) (Wikipedia) |
| `world-indonesia-1` | Indonesia (Asia) | Indonesia is the world's largest archipelagic state, spanning between 13,000 and 17,500 islands. | [Indonesia](https://en.wikipedia.org/wiki/Indonesia) (Wikipedia) |
| `world-indonesia-2` | Indonesia (Asia) | Sitting on the Pacific Ring of Fire and Alpide belt, Indonesia has 127 active volcanoes, including Krakatoa and Mount Merapi. | [List of volcanoes in Indonesia](https://en.wikipedia.org/wiki/List_of_volcanoes_in_Indonesia) (Wikipedia) |
| `world-uzbekistan-1` | Uzbekistan (Asia) | Uzbekistan is doubly landlocked, like Liechtenstein: every neighbor is also landlocked. | [Landlocked country](https://en.wikipedia.org/wiki/Landlocked_country) (Wikipedia) |
| `world-saudi-arabia-1` | Saudi Arabia (Asia) | Saudi Arabia is the largest country with no permanent rivers. | [Saudi Arabia](https://en.wikipedia.org/wiki/Saudi_Arabia) (Wikipedia) |
| `world-italy-1` | Italy (Europe) | Italy and China sit atop the UNESCO World Heritage list, each home to more than 60 inscribed sites. | [World Heritage Site](https://en.wikipedia.org/wiki/World_Heritage_Site) (Wikipedia) |
| `world-south-sudan-1` | South Sudan (Africa) | South Sudan, independent since 2011, is the youngest country in the world. | [South Sudan](https://en.wikipedia.org/wiki/South_Sudan) (Wikipedia) |
| `world-brazil-1` | Brazil (South America) | Brazil is the largest country in South America by area. | [Brazil](https://en.wikipedia.org/wiki/Brazil) (Wikipedia) |
| `world-brazil-2` | Brazil (South America) | Most of the Pantanal is in Brazil. It extends into Bolivia and Paraguay. | [Pantanal](https://en.wikipedia.org/wiki/Pantanal) (Wikipedia) |
| `world-chile-1` | Chile (South America) | Chile holds most of the Atacama Desert. | [Atacama Desert](https://en.wikipedia.org/wiki/Atacama_Desert) (Wikipedia) |
| `world-united-states-1` | United States (North America) | The lowest point in the United States is Badwater Basin in Death Valley, 86 m below sea level. | [Death Valley](https://en.wikipedia.org/wiki/Death_Valley) (Wikipedia) |
| `world-united-states-2` | United States (North America) | The United States has the most tornadoes of any country, over 1,000 a year. | [Tornado](https://en.wikipedia.org/wiki/Tornado) (Wikipedia) |
| `world-australia-1` | Australia (Oceania) | Australia is the driest inhabited continent on Earth; only Antarctica is drier overall. | [Australia](https://en.wikipedia.org/wiki/Australia) (Wikipedia) |
| `world-australia-2` | Australia (Oceania) | Australia is the flattest continent. | [Geography of Australia](https://en.wikipedia.org/wiki/Geography_of_Australia) (Wikipedia) |
| `world-antarctica-1` | Antarctica (Southern Hemisphere) | Antarctica holds the largest ice sheet on Earth. | [Antarctic ice sheet](https://en.wikipedia.org/wiki/Antarctic_ice_sheet) (Wikipedia) |
| `world-antarctica-2` | Antarctica (Southern Hemisphere) | Antarctica has no natural fully terrestrial mammals, reptiles, or amphibians. | [Antarctica](https://en.wikipedia.org/wiki/Antarctica) (Wikipedia); [Wildlife of Antarctica](https://en.wikipedia.org/wiki/Wildlife_of_Antarctica) (Wikipedia) |
| `world-antarctica-3` | Antarctica (Southern Hemisphere) | Antarctica is the windiest continent. | [Antarctica](https://en.wikipedia.org/wiki/Antarctica) (Wikipedia) |
| `world-antarctica-4` | Antarctica (Southern Hemisphere) | Antarctica is the coldest continent. | [Antarctica](https://en.wikipedia.org/wiki/Antarctica) (Wikipedia) |

### `earth-lands-carmen` — Where on Earth's Extreme Lands is Carmen Sandiego? (25 places, 29 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `earth-denali-1` | Denali (Alaska, US) | Denali, in Alaska, is the highest mountain in North America, at 6,190 m. | [Denali](https://en.wikipedia.org/wiki/Denali) (Wikipedia) |
| `earth-aconcagua-1` | Aconcagua (Argentina) | Aconcagua, in Argentina, is the highest mountain in South America and outside Asia, at about 6,967 m. | [Aconcagua](https://en.wikipedia.org/wiki/Aconcagua) (Wikipedia) |
| `earth-mount-elbrus-1` | Mount Elbrus (Russia) | Mount Elbrus, in the Caucasus of Russia, is the highest mountain in Russia and Europe, at 5,642 m. | [Mount Elbrus](https://en.wikipedia.org/wiki/Mount_Elbrus) (Wikipedia) |
| `earth-mount-vinson-1` | Mount Vinson (Antarctica) | Mount Vinson is the highest mountain in Antarctica, about 4,890 m. | [Vinson Massif](https://en.wikipedia.org/wiki/Vinson_Massif) (Wikipedia) |
| `earth-kilimanjaro-1` | Kilimanjaro (Tanzania) | Kilimanjaro, in Tanzania, is the highest mountain in Africa, at 5,895 m. | [Mount Kilimanjaro](https://en.wikipedia.org/wiki/Mount_Kilimanjaro) (Wikipedia) |
| `earth-puncak-jaya-1` | Puncak Jaya (Indonesia) | Puncak Jaya, in Indonesian New Guinea, is the highest mountain in Oceania, about 4,880 m. | [Puncak Jaya](https://en.wikipedia.org/wiki/Puncak_Jaya) (Wikipedia) |
| `earth-mount-kosciuszko-1` | Mount Kosciuszko (Australia) | Mount Kosciuszko is the highest point on mainland Australia, at 2,228 m. | [Mount Kosciuszko](https://en.wikipedia.org/wiki/Mount_Kosciuszko) (Wikipedia) |
| `earth-mount-stanley-1` | Mount Stanley (Uganda and DR Congo) | Mount Stanley, on the border of Uganda and DR Congo in the Rwenzori range, is Africa’s third-tallest independent mountain and fourth-highest peak, at 5,109 m. | [Mount Stanley](https://en.wikipedia.org/wiki/Mount_Stanley) (Wikipedia) |
| `earth-gangkhar-puensum-1` | Gangkhar Puensum (Bhutan) | Gangkhar Puensum, in the Himalayas of Bhutan, is the highest mountain no one has climbed. | [Gangkhar Puensum](https://en.wikipedia.org/wiki/Gangkhar_Puensum) (Wikipedia) |
| `earth-gangkhar-puensum-2` | Gangkhar Puensum (Bhutan) | Bhutan banned climbing mountains above 6,000 m, including Gangkhar Puensum, in 1994 out of respect for local spiritual beliefs, and banned all mountaineering in 2003. | [Gangkhar Puensum](https://en.wikipedia.org/wiki/Gangkhar_Puensum) (Wikipedia) |
| `earth-ojos-del-salado-1` | Ojos del Salado (Chile and Argentina) | Ojos del Salado, a dormant peak on the border of Chile and Argentina, is the highest volcano on Earth, at 6,893 m. | [Ojos del Salado](https://en.wikipedia.org/wiki/Ojos_del_Salado) (Wikipedia) |
| `earth-mauna-loa-1` | Mauna Loa (Hawaii, US) | Mauna Loa, in Hawaii, is the largest active volcano on Earth. | [Mauna Loa](https://en.wikipedia.org/wiki/Mauna_Loa) (Wikipedia) |
| `earth-andes-1` | Andes (South America) | South America's western edge is lined by the Andes, the longest continental mountain range on Earth, stretching 7,000 to 8,900 km. | [Andes](https://en.wikipedia.org/wiki/Andes) (Wikipedia) |
| `earth-tibetan-plateau-1` | Tibetan Plateau (China) | The Tibetan Plateau is the highest and largest plateau on Earth, averaging over 4,500 m above sea level. | [Tibetan Plateau](https://en.wikipedia.org/wiki/Tibetan_Plateau) (Wikipedia) |
| `earth-yarlung-tsangpo-grand-canyon-1` | Yarlung Tsangpo Grand Canyon (Tibet, China) | The Yarlung Tsangpo Grand Canyon, in Tibet, is the deepest canyon on land, reaching 6,009 m deep. | [Yarlung Tsangpo Grand Canyon](https://en.wikipedia.org/wiki/Yarlung_Tsangpo_Grand_Canyon) (Wikipedia) |
| `earth-mammoth-cave-1` | Mammoth Cave (Kentucky, US) | Mammoth Cave, in central Kentucky, is the longest known cave system in the world, with over 680 km mapped. | [Mammoth Cave National Park](https://en.wikipedia.org/wiki/Mammoth_Cave_National_Park) (Wikipedia) |
| `earth-hang-son-oong-1` | Hang Sơn Đoòng (Vietnam) | Hang Sơn Đoòng, in Vietnam, contains the largest known cave passage in the world by volume, over 5 km long, 200 m high, and 150 m wide. | [Hang Sơn Đoòng](https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng) (Wikipedia) |
| `earth-veryovkina-cave-1` | Veryovkina Cave (Georgia) | Veryovkina Cave, in Abkhazia, Georgia, reaches 2,209 m underground, the second-deepest known cave on Earth after nearby Krubera Cave. | [Veryovkina Cave](https://en.wikipedia.org/wiki/Veryovkina_Cave) (Wikipedia) |
| `earth-salar-de-uyuni-1` | Salar de Uyuni (Bolivia) | Salar de Uyuni, in Bolivia, is the largest salt flat in the world, covering about 10,582 km². | [Salar de Uyuni](https://en.wikipedia.org/wiki/Salar_de_Uyuni) (Wikipedia) |
| `earth-atacama-1` | Atacama (Chile) | The Atacama, in Chile, is the driest non-polar desert on Earth. Some weather stations there have never recorded rain. | [Atacama Desert](https://en.wikipedia.org/wiki/Atacama_Desert) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `earth-yellowstone-1` | Yellowstone (Wyoming, US) | Signed into law in 1872 mainly in Wyoming, Yellowstone became the first national park in the world. | [Yellowstone National Park](https://en.wikipedia.org/wiki/Yellowstone_National_Park) (Wikipedia) |
| `earth-yellowstone-2` | Yellowstone (Wyoming, US) | Most of Yellowstone is in Wyoming. Small parts are in Montana and Idaho. | [Yellowstone National Park](https://en.wikipedia.org/wiki/Yellowstone_National_Park) (Wikipedia) |
| `earth-yellowstone-3` | Yellowstone (Wyoming, US) | Old Faithful, the geyser that erupts so regularly it was named for it, is in Yellowstone. | [Old Faithful](https://en.wikipedia.org/wiki/Old_Faithful) (Wikipedia) |
| `earth-yellowstone-4` | Yellowstone (Wyoming, US) | Steamboat Geyser, in Yellowstone, is the tallest active geyser. It can shoot over 90 m. | [Steamboat Geyser](https://en.wikipedia.org/wiki/Steamboat_Geyser) (Wikipedia) |
| `earth-northeast-greenland-national-park-1` | Northeast Greenland National Park (Greenland) | Established in 1974, Northeast Greenland National Park protects 972,000 km²—the world's largest national park, bigger than most countries. | [Northeast Greenland National Park](https://en.wikipedia.org/wiki/Northeast_Greenland_National_Park) (Wikipedia) |
| `earth-general-sherman-1` | General Sherman (California, US) | General Sherman, a giant sequoia in California, is the largest tree by volume. | [General Sherman Tree](https://en.wikipedia.org/wiki/General_Sherman_Tree) (Wikipedia) |
| `earth-blue-mountains-of-oregon-1` | Blue Mountains of Oregon (Oregon, US) | A honey fungus in Malheur National Forest in the Blue Mountains of Oregon is widely called the largest living organism on Earth, covering about 9.1 km² underground. | [Armillaria ostoyae](https://en.wikipedia.org/wiki/Armillaria_ostoyae) (Wikipedia); [Blue Mountains (Pacific Northwest)](https://en.wikipedia.org/wiki/Blue_Mountains_(Pacific_Northwest)) (Wikipedia) |
| `earth-la-rinconada-1` | La Rinconada (Peru) | La Rinconada, a Peruvian gold-mining town at 4,900 to 5,100 m above sea level, is the highest larger permanent settlement in the world. | [La Rinconada, Peru](https://en.wikipedia.org/wiki/La_Rinconada,_Peru) (Wikipedia) |
| `earth-ushuaia-1` | Ushuaia (Argentina) | Ushuaia, in Argentina, is often called the southernmost city in the world. Tiny Puerto Williams in Chile is farther south, but much smaller. | [Ushuaia](https://en.wikipedia.org/wiki/Ushuaia) (Wikipedia) |

### `earth-waters-carmen` — Where in Earth's Extreme Waters is Carmen Sandiego? (30 places, 33 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `earth-pacific-ocean-1` | Pacific Ocean (Ocean) | The Pacific Ocean is the largest and deepest of Earth’s oceanic divisions, averaging about 4,000 m deep. | [Pacific Ocean](https://en.wikipedia.org/wiki/Pacific_Ocean) (Wikipedia) |
| `earth-pacific-ocean-2` | Pacific Ocean (Ocean) | Challenger Deep, in the Mariana Trench of the Pacific Ocean, is the deepest known point in the seabed, nearly 11,000 m down. | [Challenger Deep](https://en.wikipedia.org/wiki/Challenger_Deep) (Wikipedia) |
| `earth-atlantic-ocean-1` | Atlantic Ocean (Ocean) | Among Earth’s major oceans, the Atlantic Ocean is on average the saltiest. | [Atlantic Ocean](https://en.wikipedia.org/wiki/Atlantic_Ocean) (Wikipedia) |
| `earth-arctic-ocean-1` | Arctic Ocean (Ocean) | The Arctic Ocean is the smallest ocean. | [Arctic Ocean](https://en.wikipedia.org/wiki/Arctic_Ocean) (Wikipedia) |
| `earth-southern-ocean-1` | Southern Ocean (Ocean) | The Southern Ocean, around Antarctica, is the most recently recognized ocean. National Geographic added it to its maps in 2021. | [Southern Ocean](https://en.wikipedia.org/wiki/Southern_Ocean) (Wikipedia) |
| `earth-point-nemo-1` | Point Nemo (South Pacific) | Point Nemo is the spot in the ocean farthest from any land, about 2,700 km away. Space stations are retired near it. | [Pole of inaccessibility](https://en.wikipedia.org/wiki/Pole_of_inaccessibility) (Wikipedia) |
| `earth-red-sea-1` | Red Sea (Africa and Asia) | The Red Sea, between Africa and Arabia, is one of the saltiest bodies of water in the world owing to high evaporation, low rainfall, and no major river inflow. | [Red Sea](https://en.wikipedia.org/wiki/Red_Sea) (Wikipedia) |
| `earth-sargasso-sea-1` | Sargasso Sea (North Atlantic) | The Sargasso Sea, in the North Atlantic, is the only sea on Earth bounded entirely by swirling ocean currents rather than land. | [Sargasso Sea](https://en.wikipedia.org/wiki/Sargasso_Sea) (Wikipedia) |
| `earth-bay-of-bengal-1` | Bay of Bengal (Indian Ocean) | Covering 2.6 million km² in the northeastern Indian Ocean, the Bay of Bengal is the largest bay in the world. | [Bay of Bengal](https://en.wikipedia.org/wiki/Bay_of_Bengal) (Wikipedia); [Bay](https://en.wikipedia.org/wiki/Bay) (Wikipedia) |
| `earth-bay-of-fundy-1` | Bay of Fundy (Canada) | The Bay of Fundy, in Canada, has the highest tides in the world, rising about 16 m. | [Bay of Fundy](https://en.wikipedia.org/wiki/Bay_of_Fundy) (Wikipedia) |
| `earth-scoresby-sund-1` | Scoresby Sound (Greenland) | Scoresby Sound, in eastern Greenland, is one of the largest and longest fjord systems in the world, extending up to 350 km inland. | [Scoresby Sound](https://en.wikipedia.org/wiki/Scoresby_Sound) (Wikipedia) |
| `earth-dead-sea-1` | Dead Sea (Israel, Jordan and the West Bank) | The shores of the Dead Sea form the lowest dry land on Earth, nearly 440 m below sea level as of 2025. | [Dead Sea](https://en.wikipedia.org/wiki/Dead_Sea) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `earth-don-juan-pond-1` | Don Juan Pond (Antarctica) | Don Juan Pond, in Antarctica, is the saltiest of the Antarctic lakes at over 45% salinity, rarely freezing even below −50 °C. | [Don Juan Pond](https://en.wikipedia.org/wiki/Don_Juan_Pond) (Wikipedia) |
| `earth-lake-baikal-1` | Lake Baikal (Russia) | Lake Baikal is the largest lake by volume of fresh water, holding about a fifth of the world's unfrozen surface fresh water. | [Lake Baikal](https://en.wikipedia.org/wiki/Lake_Baikal) (Wikipedia) |
| `earth-lake-victoria-1` | Lake Victoria (East Africa) | Lake Victoria is the largest lake in Africa. | [Lake Victoria](https://en.wikipedia.org/wiki/Lake_Victoria) (Wikipedia) |
| `earth-lake-ladoga-1` | Lake Ladoga (Russia) | Lake Ladoga, in northwestern Russia near St. Petersburg, is the largest lake located entirely in Europe. | [Lake Ladoga](https://en.wikipedia.org/wiki/Lake_Ladoga) (Wikipedia) |
| `earth-kati-thanda-lake-eyre-1` | Kati Thanda–Lake Eyre (Australia) | Usually a dry salt pan, Kati Thanda–Lake Eyre becomes the largest lake in Australia on the rare occasions when it fills completely. | [Kati Thanda–Lake Eyre](https://en.wikipedia.org/wiki/Kati_Thanda%E2%80%93Lake_Eyre) (Wikipedia) |
| `earth-lake-hillier-1` | Lake Hillier (Australia) | Lake Hillier, in Australia, is naturally bright pink, colored by salt-loving microorganisms, especially the alga Dunaliella salina. | [Lake Hillier](https://en.wikipedia.org/wiki/Lake_Hillier) (Wikipedia) |
| `earth-lake-titicaca-1` | Lake Titicaca (Peru and Bolivia) | Lake Titicaca, about 3,800 m up in the Andes, is often called the highest navigable lake. | [Lake Titicaca](https://en.wikipedia.org/wiki/Lake_Titicaca) (Wikipedia) |
| `earth-yangtze-1` | Yangtze (China) | The Yangtze is the longest river in Asia, about 6,300 km. | [Yangtze](https://en.wikipedia.org/wiki/Yangtze) (Wikipedia) |
| `earth-yangtze-2` | Yangtze (China) | The Yangtze, in China, is the largest and longest river flowing entirely within a single country. | [Yangtze](https://en.wikipedia.org/wiki/Yangtze) (Wikipedia) |
| `earth-amazon-1` | Amazon (South America) | The Amazon carries the most water of any river, about a fifth of all river water reaching the oceans. | [Amazon River](https://en.wikipedia.org/wiki/Amazon_River) (Wikipedia) |
| `earth-amazon-2` | Amazon (South America) | The basin of the Amazon holds the world's largest tropical rainforest, covering much of northern South America. | [Amazon rainforest](https://en.wikipedia.org/wiki/Amazon_rainforest) (Wikipedia) |
| `earth-congo-river-1` | Congo River (Central Africa) | The Congo River crosses the equator twice as it curves through central Africa. | [Congo River](https://en.wikipedia.org/wiki/Congo_River) (Wikipedia) |
| `earth-danube-1` | Danube (Europe) | The Danube flows through more countries than any other river: 10, from Germany to the Black Sea. | [Danube](https://en.wikipedia.org/wiki/Danube) (Wikipedia) |
| `earth-murray-1` | Murray (Australia) | The Murray is the longest river in Australia, about 2,500 km. | [Murray River](https://en.wikipedia.org/wiki/Murray_River) (Wikipedia) |
| `earth-chicago-river-1` | Chicago River (Illinois, US) | The Chicago River was reversed by engineers in 1900 to carry sewage away from Lake Michigan. | [Chicago River](https://en.wikipedia.org/wiki/Chicago_River) (Wikipedia) |
| `earth-ganges-brahmaputra-delta-1` | Ganges–Brahmaputra Delta (Bangladesh and India) | Predominantly in Bangladesh and West Bengal, India, the Ganges–Brahmaputra Delta is the largest river delta in the world. | [Ganges Delta](https://en.wikipedia.org/wiki/Ganges_Delta) (Wikipedia) |
| `earth-pantanal-1` | Pantanal (Brazil) | The Pantanal, mostly in Brazil, is the largest tropical wetland. | [Pantanal](https://en.wikipedia.org/wiki/Pantanal) (Wikipedia) |
| `earth-marajo-1` | Marajó (Brazil) | Marajó, a coastal delta island at the mouth of the Amazon in Pará, Brazil, bordered by river waters and the Atlantic Ocean, covers about 40,100 km²—comparable in size to Switzerland. | [Marajó](https://en.wikipedia.org/wiki/Maraj%C3%B3) (Wikipedia) |
| `earth-manitoulin-island-1` | Manitoulin Island (Ontario, Canada) | Covering 2,766 km² in Ontario’s Lake Huron, Manitoulin Island is the largest lake island in the world and holds over 100 lakes of its own. | [Manitoulin Island](https://en.wikipedia.org/wiki/Manitoulin_Island) (Wikipedia) |
| `earth-sicily-1` | Sicily (Italy) | Sicily is the largest island in the Mediterranean. | [Sicily](https://en.wikipedia.org/wiki/Sicily) (Wikipedia) |
| `earth-tristan-da-cunha-1` | Tristan da Cunha (South Atlantic) | Accessible only by a six-day ship journey from Cape Town, South Africa, volcanic Tristan da Cunha in the South Atlantic is considered the most remote inhabited archipelago in the world. | [Tristan da Cunha](https://en.wikipedia.org/wiki/Tristan_da_Cunha) (Wikipedia) |

### `weather-records-carmen` — Where in the Weather Records is Carmen Sandiego? (24 places, 25 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `weather-death-valley-1` | Death Valley (California, US) | Death Valley, in California, holds the official WMO record for highest air temperature on Earth: 56.7 °C on July 10, 1913, though some meteorologists question that reading. | [Highest temperature recorded on Earth](https://en.wikipedia.org/wiki/Highest_temperature_recorded_on_Earth) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-death-valley-2` | Death Valley (California, US) | Death Valley reclaimed the heat record in 2012 after the WMO disqualified Libya’s 57.8 °C reading from 1922, concluding an inexperienced observer likely misread a new replacement instrument. | [Highest temperature recorded on Earth](https://en.wikipedia.org/wiki/Highest_temperature_recorded_on_Earth) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-vostok-station-1` | Vostok Station (Antarctica) | Vostok Station, in Antarctica, recorded the lowest temperature on Earth: −89.2 °C on July 21, 1983. | [Lowest temperature recorded on Earth](https://en.wikipedia.org/wiki/Lowest_temperature_recorded_on_Earth) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-oymyakon-1` | Oymyakon (Siberia, Russia) | Oymyakon, in Siberia, is often called the coldest inhabited town. It has dropped below −67 °C. | [Oymyakon](https://en.wikipedia.org/wiki/Oymyakon) (Wikipedia) |
| `weather-klinck-1` | Klinck (Greenland) | Klinck, in Greenland, recorded the coldest temperature in the Northern Hemisphere: −69.6 °C in 1991. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Climate of Greenland](https://en.wikipedia.org/wiki/Climate_of_Greenland) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-prospect-creek-1` | Prospect Creek (Alaska, US) | Prospect Creek, Alaska, recorded the coldest temperature in the United States: −62.1 °C in 1971. | [Prospect Creek, Alaska](https://en.wikipedia.org/wiki/Prospect_Creek,_Alaska) (Wikipedia) |
| `weather-mawsynram-1` | Mawsynram (India) | Mawsynram, in Meghalaya, northeast India, averages about 11,872 mm of rain a year and is officially recognized as the wettest place on Earth, alongside rival claims in Colombia. | [Mawsynram](https://en.wikipedia.org/wiki/Mawsynram) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-cherrapunji-1` | Cherrapunji (India) | Cherrapunji, in India, had the most rain ever in one year: about 26.5 m from August 1860 to July 1861. | [Cherrapunji](https://en.wikipedia.org/wiki/Cherrapunji) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-reunion-1` | Réunion (Indian Ocean) | Réunion, in the Indian Ocean, recorded 1,825 mm of rain in 24 hours during Tropical Cyclone Denise in January 1966, the world 24-hour rainfall record. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-arica-1` | Arica (Chile) | Arica, a port city in northern Chile with historical averages below 1 mm of rain a year—2.3 mm in 1991–2020 normals—is often called the driest city on Earth. | [Arica](https://en.wikipedia.org/wiki/Arica) (Wikipedia) |
| `weather-dallol-1` | Dallol (Ethiopia) | Dallol, in Ethiopia, has the hottest year-round average temperature on record, about 35 °C over several years of records. | [Dallol (ghost town)](https://en.wikipedia.org/wiki/Dallol_(ghost_town)) (Wikipedia) |
| `weather-lut-desert-1` | Lut Desert (Iran) | NASA satellites measured the hottest land surface on Earth in Iran's Lut Desert: 70.7 °C in 2005, later revised to 80.8 °C in higher-resolution data. | [Lut Desert](https://en.wikipedia.org/wiki/Lut_Desert) (Wikipedia) |
| `weather-mitribah-1` | Mitribah (Kuwait) | Mitribah, Kuwait, recorded a WMO-verified 53.9 °C in July 2016, the highest modern instrumental temperature verified in Asia. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-kebili-1` | Kebili (Tunisia) | Kebili, Tunisia, holds the WMO-listed temperature record for Africa at 55 °C in July 1931, though meteorologists have questioned colonial-era desert readings. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-floridia-1` | Floridia (Sicily, Italy) | Floridia, in Sicily, recorded the highest temperature in Europe: 48.8 °C in August 2021. | [Floridia](https://en.wikipedia.org/wiki/Floridia) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-oodnadatta-1` | Oodnadatta (South Australia) | Oodnadatta, South Australia, recorded 50.7 °C in January 1960, Australia’s highest reliably measured temperature—a mark tied by Onslow in January 2022. | [Oodnadatta](https://en.wikipedia.org/wiki/Oodnadatta) (Wikipedia); [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia) |
| `weather-lytton-1` | Lytton (British Columbia, Canada) | Lytton, British Columbia, set the all-time heat record for Canada, 49.6 °C, in June 2021. A wildfire destroyed most of the village a day later. | [Lytton, British Columbia](https://en.wikipedia.org/wiki/Lytton,_British_Columbia) (Wikipedia) |
| `weather-coningsby-1` | Coningsby (Lincolnshire, UK) | Coningsby, Lincolnshire, recorded the highest temperature in the UK: 40.3 °C in July 2022. | [2022 United Kingdom heatwaves](https://en.wikipedia.org/wiki/2022_United_Kingdom_heatwaves) (Wikipedia) |
| `weather-verkhoyansk-1` | Verkhoyansk (Siberia, Russia) | Verkhoyansk, in Siberia, recorded the highest temperature in the Arctic: 38 °C in June 2020. | [Verkhoyansk](https://en.wikipedia.org/wiki/Verkhoyansk) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-esperanza-base-1` | Esperanza Base (Antarctic Peninsula) | Esperanza Base, on the Antarctic Peninsula, recorded the highest temperature in Antarctica: 18.3 °C in February 2020. | [Esperanza Base](https://en.wikipedia.org/wiki/Esperanza_Base) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `weather-loma-1` | Loma (Montana, US) | Loma, Montana, had the biggest 24-hour temperature change in the United States in 1972: about 57 °C, from −48 °C to 9 °C. | [Loma, Montana](https://en.wikipedia.org/wiki/Loma,_Montana) (Wikipedia) |
| `weather-spearfish-1` | Spearfish (South Dakota, US) | In January 1943 the temperature in Spearfish, South Dakota, rose about 27 °C in two minutes, from −20 °C to 7 °C, thanks to a warm chinook wind. | [Spearfish, South Dakota](https://en.wikipedia.org/wiki/Spearfish,_South_Dakota) (Wikipedia) |
| `weather-yuma-1` | Yuma (Arizona, US) | Yuma, Arizona, is often called the sunniest city in the world, with sun about 90 percent of daylight hours. | [Yuma, Arizona](https://en.wikipedia.org/wiki/Yuma,_Arizona) (Wikipedia) |
| `weather-grand-banks-1` | Grand Banks (Newfoundland, Canada) | Southeast of Newfoundland, the cold Labrador Current mixes with the warm Gulf Stream over the Grand Banks, causing frequent extreme fog over historic fishing grounds. | [Grand Banks of Newfoundland](https://en.wikipedia.org/wiki/Grand_Banks_of_Newfoundland) (Wikipedia) |
| `weather-mount-baker-1` | Mt. Baker Ski Area (Washington, US) | In Washington's North Cascades near Mount Shuksan, Mt. Baker Ski Area recorded 29 m (1,140 inches) of snow in 1998–99, the world single-season snowfall record. | [Mt. Baker Ski Area](https://en.wikipedia.org/wiki/Mt._Baker_Ski_Area) (Wikipedia) |

### `disaster-records-carmen` — Where in the Disaster Records is Carmen Sandiego? (12 places, 15 facts)

| Fact ID | Place | Verified claim (`fact`) | Cited source(s) |
| --- | --- | --- | --- |
| `disaster-vivian-1` | Vivian (South Dakota, US) | The largest hailstone in the United States by diameter fell in Vivian, South Dakota, in 2010: about 20 cm across. | [Hail](https://en.wikipedia.org/wiki/Hail) (Wikipedia) |
| `disaster-barrow-island-1` | Barrow Island (Australia) | Barrow Island, Australia, recorded the strongest wind gust outside a tornado: about 408 km/h during Cyclone Olivia in 1996. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `disaster-mount-washington-1` | Mount Washington (New Hampshire, US) | Mount Washington, in New Hampshire, measured a 372 km/h (231 mph) wind speed in April 1934, which stood as the world’s top non-tornadic wind record until 1996. | [Mount Washington](https://en.wikipedia.org/wiki/Mount_Washington) (Wikipedia) |
| `disaster-lake-maracaibo-1` | Lake Maracaibo (Venezuela) | Lake Maracaibo, in Venezuela, has the highest lightning density on Earth, with Catatumbo storms flashing 140 to 160 nights a year. | [Catatumbo lightning](https://en.wikipedia.org/wiki/Catatumbo_lightning) (Wikipedia) |
| `disaster-great-plains-1` | Great Plains (Central US) | Storm chasers recognize the tornado belt across the Great Plains of the central United States as Tornado Alley. | [Tornado Alley](https://en.wikipedia.org/wiki/Tornado_Alley) (Wikipedia) |
| `disaster-bangladesh-1` | Bangladesh (South Asia) | The heaviest known hailstone, about 1 kg, fell in Gopalganj, Bangladesh, in 1986. | [List of weather records](https://en.wikipedia.org/wiki/List_of_weather_records) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `disaster-bangladesh-2` | Bangladesh (South Asia) | The deadliest tornado on record struck Bangladesh in 1989, killing about 1,300 people. | [Daulatpur–Saturia tornado](https://en.wikipedia.org/wiki/Daulatpur%E2%80%93Saturia_tornado) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `disaster-bangladesh-3` | Bangladesh (South Asia) | The Bhola cyclone of 1970, the deadliest tropical cyclone on record, struck what is now Bangladesh. Estimates of the dead range from about 300,000 to 500,000. | [1970 Bhola cyclone](https://en.wikipedia.org/wiki/1970_Bhola_cyclone) (Wikipedia) |
| `disaster-moradabad-1` | Moradabad (India) | The deadliest hailstorm on record struck Moradabad, India, in 1888, killing about 246 people. | [1888 Moradabad hailstorm](https://en.wikipedia.org/wiki/1888_Moradabad_hailstorm) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `disaster-dronka-1` | Durunka (Egypt) | In Durunka, Egypt, in November 1994, lightning ignited fuel storage tanks whose floodwaters swept blazing fuel into town, the deadliest lightning disaster on record. | [Durunka](https://en.wikipedia.org/wiki/Durunka) (Wikipedia); [Records of Weather and Climate Extremes](https://wmo.int/files/records-of-weather-and-climate-extremes-table) (World Meteorological Organization) |
| `disaster-tambora-1` | Tambora (Indonesia) | The 1815 eruption of Tambora, in Indonesia, was the biggest in recorded history, rated 7 on the Volcanic Explosivity Index. Mount St. Helens in 1980 was a 5. | [1815 eruption of Mount Tambora](https://en.wikipedia.org/wiki/1815_eruption_of_Mount_Tambora) (Wikipedia) |
| `disaster-tambora-2` | Tambora (Indonesia) | Ash from the eruption of Tambora cooled the planet, making 1816 "the Year Without a Summer." | [Year Without a Summer](https://en.wikipedia.org/wiki/Year_Without_a_Summer) (Wikipedia) |
| `disaster-valdivia-1` | Valdivia (Chile) | The strongest earthquake ever recorded, magnitude 9.5, struck near Valdivia, Chile, in 1960. | [1960 Valdivia earthquake](https://en.wikipedia.org/wiki/1960_Valdivia_earthquake) (Wikipedia) |
| `disaster-shaanxi-1` | Shaanxi (China) | A catastrophic 1556 earthquake in Shaanxi, China, collapsed loess cave dwellings; imperial registers dropped by 830,000, with modern estimates citing about 100,000 direct deaths alongside famine, plague, and migration. | [1556 Shaanxi earthquake](https://en.wikipedia.org/wiki/1556_Shaanxi_earthquake) (Wikipedia) |
| `disaster-lituya-bay-1` | Lituya Bay (Alaska, US) | In 1958 a rockslide into Lituya Bay, Alaska, drove water to a run-up elevation of 524 m up the opposite slope, the highest tsunami wave run-up on record. | [1958 Lituya Bay earthquake and megatsunami](https://en.wikipedia.org/wiki/1958_Lituya_Bay_earthquake_and_megatsunami) (Wikipedia) |

## Verification limits

- In-memory structural and giveaway checks confirmed 23 packs, at least 4 places per pack, at least 1 fact per place, globally unique place and fact IDs, valid `https://` sources, zero clues containing their place name, zero national-demonym giveaways, and zero 1-of-1 place-name token giveaways across all 298 Quiznauts facts.
- Per project instructions, `npm run verify`, full test suites, browser/AT checks, and `gitnexus analyze` were not run by the agent and remain for owner execution.
