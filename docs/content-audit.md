# Content audit state — October 13, 2026

The Northwest Arkansas and NWA Mountain Biking packs received a complete **48-case AI-assisted factual/editorial review** by Codex on October 13, 2026 and use content version 2. This ledger retains that scope. The [October 14 parks/highway ledger](parks-route66-review.md) adds another 48 reviews; the current catalogue contains 176 cases: **104 reviewed, 72 pending**. Eight reviewed cases belong to the original packs. Earlier automated results do not validate these additions.

This pass read the sources for the claims used in the clues, comparison choices and fun facts; checked each answer and distractor against the written evidence; and reconciled questions, explanations, all three hints, disguise and hideout. Some tourism pages were intermittently unavailable to direct browsing; their official indexed text supplied the relevant name/feature passages. The Slaughter Pen names are explicitly tied to the city’s July 2020 map, not a current trail-status assertion. Source flags cover the cited claims only. No tests, syntax/content gates, browser playthrough, assistive-technology acceptance or human learning evaluation were performed by the agent.

Corrections include specific questions for all 48 cases; intermediate hints that guide rather than immediately supply the full key; worked third hints; explicit witness presence at the inferred hideout; and a fictional connector desk that keeps the Railyard suspect at the selected stop while the puzzle asks about Lake Atalanta. Elkhorn’s reconstruction retains original material. The Back 40 Loop is a route, not the entire network. Replaced the dead city Railyard URL and broad Springdale PDF with precise official tourism/operator sources; added sources for factual comparisons. Save schema is unchanged, but version 1 saves for these two packs are incompatible with version 2.

Ryan reported running `npx gitnexus analyze`; current index metadata records October 13. Read-only file impacts still returned UNKNOWN with no resolved callers. Source confirmation traced manifest loading, selected-case finale reuse and hint consumption. That graph limitation is not a low-risk verdict. That case-review pass changed content and documentation. The subsequent full-change review also corrected the selector’s blanket pending-review warning; it leaves case semantics unchanged. Shared coordinates, county coverage and map-pin accuracy are outside this case review; pins remain approximate orientation points.

## NWA case ledger

The answer column is the authored key. The source column links the supporting pages; the locator column limits what was reviewed. Fictional codes, arithmetic, witnesses and props are judged for internal consistency, not attributed to those sources. Full questions, options, worked explanations and hints live in each JSON case.

### Northwest Arkansas Division

| Case | Answer | Source passages reviewed | Sources |
| --- | --- | --- | --- |
| `nwa-bridges` | Crystal Bridges Museum of American Art | Architecture: Safdie attribution; companion sources cover the three comparison venues. | [crystal](https://crystalbridges.org/architecture), [momentary](https://themomentary.org/about/), [compton](https://peelcompton.org/compton-gardens-arboretum/visit-us/), [walmart](https://corporate.walmart.com/news/2022/10/07/the-walmart-museum-undergoes-renovation-moves-to-temporary-new-space) |
| `nwa-momentary` | Adaptive reuse | About: former cheese factory and adaptive reuse. | [momentary](https://themomentary.org/about/) |
| `nwa-compton` | 10:30 | Visit Us: venue identity, Bentonville location and foundation operator only; times invented. | [compton](https://peelcompton.org/compton-gardens-arboretum/visit-us/) |
| `nwa-daisy` | Rogers arrival | The Daisy Story: April–June 1958 move from Plymouth to Rogers. | [daisy](https://daisymuseum.com/history/) |
| `nwa-railyard` | The Railyard Bike Park | Bike-park article: Lake Atalanta connection; separate Railyard Park listing: performance stage. | [railyard](https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/), [railyard_stage](https://www.destinationrogers.com/listings/railyard-park/907/) |
| `nwa-atalanta` | Lake Atalanta Park | Bike-park article: named paved connection to Lake Atalanta Park; ordering key invented. | [railyard](https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/) |
| `nwa-shiloh` | Shiloh Museum of Ozark History | History of the Museum: Shiloh settlement and Ozark-history mission. | [shiloh](https://shilohmuseum.org/history-of-the-museum/) |
| `nwa-railroad` | Rail passenger excursion | Railroad History: restored passenger cars and excursions from Springdale. | [railroad](https://www.amrailroad.com/about/railroad-history) |
| `nwa-ballpark` | 6 | Ballpark Guide: Naturals’ home and Springdale address; inning puzzle invented. | [naturals](https://www.milb.com/northwest-arkansas/ballpark/ballpark-guide) |
| `nwa-old-main` | Old Main, by one year | Visit & Explore: Old Main and Senior Walk sections; class date is not walkway construction date. | [campus](https://www.uark.edu/about/explore.php) |
| `nwa-senior-walk` | Senior Walk | Visit & Explore: Senior Walk, Old Main, Greek Theatre and Fulbright fountain sections. | [campus](https://www.uark.edu/about/explore.php) |
| `nwa-greek-theatre` | Chi Omega Greek Theatre | Visit & Explore: Greek Theatre concerts/rallies and campus comparison landmarks. | [campus](https://www.uark.edu/about/explore.php) |
| `nwa-sager` | Sager Creek | City History: downtown creek; Play: Kayak Park river comparison. | [sager](https://www.siloamsprings.gov/211/History), [siloam](https://discoversiloam.com/play/) |
| `nwa-kayak` | Paddling park / Illinois River | Play: Kayak Park section; City History: downtown Sager Creek comparison. | [siloam](https://discoversiloam.com/play/), [sager](https://www.siloamsprings.gov/211/History) |
| `nwa-museum` | Interview | Play: Siloam Springs Museum local-heritage mission; folder order invented. | [siloam](https://discoversiloam.com/play/) |
| `nwa-cooper` | Mildred B. Cooper Memorial Chapel | Chapel and Architecture: steel arches/glass and Bella Vista–Eureka Springs distinction. | [cooper](https://www.cooperchapel.com/chapel), [cooper_architecture](https://www.cooperchapel.com/architecture) |
| `nwa-bella-museum` | R, then V | Museum attraction listing: resort opening in 1917 and village beginnings in the 1960s only. | [bella_museum](https://www.discoverbellavistaar.com/attractions/bella-vista-museum) |
| `nwa-blowing-springs` | Blowing Springs Park | Visitor FAQ: Blowing Springs camping and trail references only. | [bella](https://www.discoverbellavistaar.com/faq) |
| `nwa-elkhorn` | Reconstruction | Elkhorn Tavern tour stop: reconstruction from 1880s photos with original fireplace/foundations retained. | [elkhorn](https://www.nps.gov/peri/planyourvisit/stop-7-elkhorn-tavern.htm) |
| `nwa-overlook` | East Overlook | East Overlook tour-stop page: site identity only; letter key invented. | [overlook](https://www.nps.gov/peri/planyourvisit/stop-7-east-overlook-day-2.htm) |
| `nwa-williams` | Tavern | Williams Hollow Loop Hike: start and return at Elkhorn Tavern; diagram invented. | [williams](https://www.nps.gov/thingstodo/williams-hollow-loop-hike.htm) |
| `nwa-thorncrown` | Thorncrown Chapel | Architecture: Jones and woodland glass chapel; companion sources cover location and comparison landmarks. | [thorncrown](https://www.thorncrown.com/architecture), [cooper_architecture](https://www.cooperchapel.com/architecture), [eureka](https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/), [campus](https://www.uark.edu/about/explore.php) |
| `nwa-basin` | Basin Spring Park | Photo-landmarks article: Basin Spring Park and Humpty Dumpty section. | [eureka](https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/) |
| `nwa-leatherwood` | 24 | Photo-landmarks article: Lake Leatherwood City Park identity only; numerical codes invented. | [eureka](https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/) |

### NWA Mountain Bike Division

| Case | Answer | Source passages reviewed | Sources |
| --- | --- | --- | --- |
| `mtb-coler-airship` | Airship at Coler | Visit Coler: Airship, Applegate, The Rise and campground sections. | [coler](https://peelcompton.org/coler-mountain-bike-preserve/visit-us/) |
| `mtb-coler-applegate` | Applegate Trail | Visit Coler: Applegate and comparison facility sections; no live surface/access guarantee. | [coler](https://peelcompton.org/coler-mountain-bike-preserve/visit-us/) |
| `mtb-coler-camp` | 10 | Visit Coler: campground identity only; tags invented. | [coler](https://peelcompton.org/coler-mountain-bike-preserve/visit-us/) |
| `mtb-slaughter-american` | All-American | Bentonville tourism trail article: All-American in Slaughter Pen; assembly rule invented. | [all_american](https://www.visitbentonville.com/blog/stories/post/the-unique-experience-of-bentonville-trails/) |
| `mtb-slaughter-blackbird` | Blackbird | City Slaughter Pen map dated July 2020: Blackbird, Medusa, Warthog and Ozone names only. | [slaughter](https://www.bentonville.ar.gov/DocumentCenter/View/6103/SLAUGHTER-PEN_Update_7-22-2020) |
| `mtb-slaughter-medusa` | Medusa | City Slaughter Pen map dated July 2020: trail names only; ordering is not trail connectivity. | [slaughter](https://www.bentonville.ar.gov/DocumentCenter/View/6103/SLAUGHTER-PEN_Update_7-22-2020) |
| `mtb-back40-ledges` | The Ledges | Back 40 Trail Maps and Stats: The Ledges, Rago, Mulligan and Back 40 Loop entries. | [back40](https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats) |
| `mtb-back40-rago` | Rago | Back 40 Trail Maps and Stats: Rago entry, Metfield Skills Park relationship. | [back40](https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats) |
| `mtb-back40-mulligan` | Mulligan | Back 40 Trail Maps and Stats: Mulligan relationship to Back 40 Loop and Rago. | [back40](https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats) |
| `mtb-sugar-tweety` | Tweety Bird Loop | Building of Little Sugar: Tweety Bird widening/adaptation account; historical design effort only. | [little_sugar](https://www.discoverbellavistaar.com/post/the-building-of-little-sugar) |
| `mtb-sugar-tunnel` | Tunnel Vision | Building of Little Sugar: Tunnel Vision and Bamboozled names; label assembly invented. | [little_sugar](https://www.discoverbellavistaar.com/post/the-building-of-little-sugar) |
| `mtb-sugar-bamboozled` | Bamboozled | Building of Little Sugar: trail names only; numerical index invented. | [little_sugar](https://www.discoverbellavistaar.com/post/the-building-of-little-sugar) |
| `mtb-railyard-connection` | Lake Atalanta Park | Rogers bike-park article: named Lake Atalanta connection; desk and witness location invented. | [railyard](https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/) |
| `mtb-railyard-service` | 09:30 | Rogers bike-park article: park identity and riding features only; desk and times invented. | [railyard](https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/) |
| `mtb-railyard-photos` | Red helmet / round stamp | Rogers bike-park article: park identity only; photo table, colors and shapes invented. | [railyard](https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/) |
| `mtb-fitz-best` | A trail named Best Trail Ever | Fitzgerald Mountain official tourism page: Best Trail Ever name; no universal quality ranking. | [fitzgerald](https://explorespringdale.com/fitzgerald-mountain/) |
| `mtb-fitz-stage` | Stage Coach | Fitzgerald Mountain official tourism page: Stage Coach name; stencil operation invented. | [fitzgerald](https://explorespringdale.com/fitzgerald-mountain/) |
| `mtb-fitz-coyote` | Coyote Cave | Fitzgerald Mountain official tourism page: Best Trail Ever, Stage Coach and Coyote Cave names. | [fitzgerald](https://explorespringdale.com/fitzgerald-mountain/) |
| `mtb-kessler-spellbound` | Spellbound | Mythical Creatures: Spellbound rock formations and Illinois River Valley view. | [kessler](https://www.experiencefayetteville.com/mountain-biking/mythical-creatures) |
| `mtb-kessler-western` | Western Myth | Mythical Creatures: Western Myth name; ordering code invented. | [kessler](https://www.experiencefayetteville.com/mountain-biking/mythical-creatures) |
| `mtb-kessler-flight` | Flight Training / Kessler | Down Mountains: Flight Training at Kessler and Junk Drawer at Centennial. | [down_mountains](https://www.experiencefayetteville.com/mountain-biking/down-mountains) |
| `mtb-centennial-worldcup` | World Cup | Chasing Rainbows: World Cup cross-country course and Junk Drawer distinction. | [centennial](https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows) |
| `mtb-centennial-junk` | Junk Drawer | Chasing Rainbows: Junk Drawer truck feature, World Cup and Learners Permit comparisons. | [centennial](https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows) |
| `mtb-centennial-permit` | Learners Permit | Chasing Rainbows: three Centennial trail names only; slot assignments invented. | [centennial](https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows) |

## Companion transfer activities

These short activities apply the same reasoning to fresh evidence. They are optional, untracked prompts, not evidence of learning or human approval. Each row covers the three variants at that stop; the expected reasoning is the answer key.

| Stop | Fresh activity | Expected reasoning |
| --- | --- | --- |
| NWA — Bentonville | A reference assigns Architect Q to Museum A, and describes Venue B as an old mill converted to a gallery. A fictional delivery is strictly between 13:00 and 14:00; choose 13:00, 13:20 or 14:10. | Q identifies A; B illustrates reuse of an existing building; only 13:20 satisfies both time bounds. |
| NWA — Rogers | A crate moves from Town A to Town B. Two similarly named parks serve performances and cycling. Cards 1 Garden, 2 River, 3 Park use key 2-1-3. | Arrival means Town B; purpose distinguishes the parks; the code reads River Garden Park. |
| NWA — Springdale | A reference names an earlier settlement Echo and its local-history museum. Orange envelopes go to rail passengers. A numbered card is three after 2 and one before 6. | Combine Echo with the museum category; orange selects passenger rail; both numerical constraints produce 5. |
| NWA — Fayetteville | A building dates to 1900, a listed class to 1902. Another reference distinguishes a names walkway from a stage venue. | Building date precedes class date by two years; it does not date the walkway. Match the names task to the walkway and performance task to the stage. |
| NWA — Siloam Springs | A fictional directory places a creek downtown and a paddling park on a different river. Sort Arrival, Interview, Filing under the same after/before rule. | Keep the two waterways distinct; both caption halves must match. Interview is the middle step. |
| NWA — Bella Vista | Two chapels occupy different towns. Events R and V date to 1920 and 1970. An invented receipt assigns “tent” to campground. | Town plus architecture distinguishes chapels; R precedes V; decode the receipt and confirm a camping setting. |
| NWA — Pea Ridge | A building was recreated around surviving foundations. A paper key maps P to a viewpoint. A loop starts at Depot and visits Hollow. | Reconstruction can retain original material; use the supplied key; the loop finishes at Depot, independently of where a suspect stands. |
| NWA — Eureka Springs | Match a named architect and chapel drawing; separately match a downtown statue description. Choose 22, 27 or 36 for a code above 25 divisible by 3 and 4. | Require both descriptive attributes; do not infer a site from one generic feature. Only 36 satisfies all number rules. |
| MTB — Coler | A fictional directory separates a cafe, paved path, stairs and camping. A tag equals twice 7 and 18 minus 4. | Use facility purpose to select cafe/path; both arithmetic statements give 14. |
| MTB — Slaughter Pen | Join Pine then Loop; code P is paired with one above 4; order A before B before C with D unused. | Pine Loop preserves order; P5 preserves both code components; B is the middle item. None establishes real trail connectivity. |
| MTB — Back 40 | A reference describes Route A as rocky, places a skills area along Route B and calls Route C a connector. C’s fictional code is 4 × 4. | Match the specific terrain entry; distinguish a feature from its host trail; code 16 and the connector description independently agree. |
| MTB — Little Sugar | A historical account describes a widening project. Assemble Meadow then View; decode an odd integer strictly between 20 and 22. | Historical adaptation does not establish current suitability; word order gives Meadow View; code 21 must then be looked up. |
| MTB — Railyard | An envelope names Destination B while a witness stays at Origin A’s desk. Add 25 minutes to 10:05. Select a proof labeled green helmet and square stamp. | Puzzle destination and warrant hideout differ; release is 10:30; the proof must satisfy both written labels. |
| MTB — Fitzgerald | A trail is named Greatest Loop. Assemble Oak then Ridge. Master list A/B/C is recovered as A/B/B. | Report the name without asserting superiority; preserve word order; replace the duplicate with C. |
| MTB — Kessler | A reference ties Trail A to a rock view and Mountain X. Cards 1 Ridge, 2 West use key 2-1. | Match both scenery and place without swapping one half; the assembled name is West Ridge. |
| MTB — Centennial | A directory distinguishes a park, named racecourse and truck feature. Assigned slots are 3, 5 and 7; spare 9 is unassigned. Select the greatest assigned slot below 8. | Keep whole park, course and feature separate; 7 meets both assignment and bound requirements. |

## Earlier October 12 audit (historical two-pack state)

Both packs contain 40 cases, 80 total, now at content version 4. **Eight cases have AI-assisted source/editorial review; 72 remain `source-linked-needs-line-review`.** The [reviewed exemplar](reviewed-exemplar.md) gives exact IDs, source-passage locators, reviewed claims, excluded claims, worked reasoning and transfer questions. Every review names Codex as the AI-assisted reviewer and records October 12, 2026. This is not a human sign-off or a complete audit of the shared map and location metadata.

Four cases per pack were rewritten. Each selected case uses a scoped `exemplar_*` source record; the older source records retain their original flags. One reviewed source does not promote all the cases in a region. The regular game still draws from the full pools, including pending cases; use the companion guide for the exact eight-case sequence.

The UI shows explanations after correct answers. Source links appear in successful case-history review and failure evidence review; `c12e772` removed them from between-stop capture reports. Transfer questions currently live in the companion guide.

Content generation completed for Bentonville and its fallback. Ryan subsequently passed version 4 syntax/content checks and 40/40 focused tests under Node v26.7.0; `check:content` accepted structural contracts and fallback and reported 80 cases with 72 pending reviews. The agent ran no tests or separate syntax/content checks. [Remediation status](remediation-status.md) preserves the transcript, exact coverage and version-specific evidence. This confirms automated contracts, not factual truth or human approval; `check:release` should still fail for the 72 pending reviews.

## Earlier October 3 corrections (historical)

- Removed Bentonville hideout answers from generated calling cards/visual detail. The disguise is now supported by an explicit clue, rather than exposed only in the opening report.
- Replaced nominal engine diversity with the truthful current multiple-choice contract.
- Replaced fixed final-report trivia with the selected first/middle cases and last earned token. The report reuses the same evidence, correct indexes and explanations as the selected cases.
- Corrected the Salta rail exercise: San Antonio de los Cobres → La Polvorilla → return; fictional times are distinguished from real schedules. Added the official route source.
- Removed remaining Mendoza coordinates and the unrelated oldest-wine narrative, the false Ushuaia “only city below 54° south” claim, Bariloche's oversimplified founding attribution, and unstable university/bookstore rankings.
- Recast the Iguazú numeric trail as a fictional code, removed the invented sacred-object framing, and made the missing classic visuals answerable through explicit text.
- Replaced the El Calafate puzzle's dependency on an unearned token with glacier evidence. Added pack-owned token metadata and readable names.
- Gave repeated Argentina sites different chronology, elapsed-time, sequence, passenger-count, and exhibit-order questions.

## Evidence still needed

For each of the remaining 72 cases, record claims and supporting primary-source passages, confirm the answer and explanation, and review cultural framing. Inspect the shared map coordinates and location metadata separately; the exemplar did not certify these. Review time-sensitive details in Bentonville especially carefully: venue hours, campus access, named rooms, collections, site counts, and public facilities may change. Human source/editorial feedback and educator/autodidact observation remain open for all eight exemplars.

The structural checker runs the production validator. The release checker additionally requires `reviewStatus: reviewed`, `reviewEvidence` with reviewer/date/notes, and reviewed cited sources. Neither checker fetches or evaluates source content, so a passing structural result is not an editorial conclusion.

Primary sources used to correct identified problems include the [official train route](https://www.larutanatural.gob.ar/es/imperdible/85/tren-a-las-nubes), [official Bariloche tourism](https://barilocheturismo.gob.ar/es/sobre-bariloche), and [Chile's official Puerto Williams description](https://chile.travel/en/attractions/puerto-williams/) as a counterexample to the former Ushuaia exclusivity claim. These corrections do not validate unrelated claims in the same cases.

## October 3 authoring improvements

All 80 cases now include three reasoning hints. Equivalent Glaciarium and Lago Argentino hideouts share canonical labels. Argentina separates Carmen from each local suspect, labels fictional props and puzzle logs explicitly, and supplies worked arithmetic/cipher/grid explanations. Bentonville recognition questions no longer claim to be ciphers or counts when no such operation occurs. The campus map desk is explicitly fictional, not a claimed real kiosk.

The generator preserves authored review evidence and validates before atomically replacing output. The content checker rejects malformed/empty manifests and a stale built-in fallback. No review flags were promoted in the October 3 work; the eight explicitly documented October 12 reviews are the later exception. Complete catalog review remains pending. That limitation does not prevent personal preview use.
