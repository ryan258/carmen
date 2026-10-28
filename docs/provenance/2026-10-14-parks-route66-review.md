# Arkansas State Parks and Route 66 review

Codex completed a scoped **48-case AI-assisted factual and editorial review on October 14, 2026**: eight stops and three cases per stop in each pack at content version 1. At that review the catalog had six packs and 176 cases. The later [six-concept completion](2026-10-14-remaining-packs-review.md) brought the catalog to 12 packs and 320 cases. At the later six-concept checkpoint, 248 were reviewed and 72 original cases were pending; the [October 15 all-pack fact check](2026-10-15-all-packs-fact-check.md) records completion of those 72. This ledger retains its original 48-case scope. The October 17 editorial follow-up attributes the Barstow date range to NPS and advances Route 66 to content version 2; Arkansas State Parks remains at version 1. See the [all-pack amendment](2026-10-15-all-packs-fact-check.md#october-17-editorial-follow-up). No tests, content gate, browser session or GitNexus analyze were run by the agent.

## Investigation design and review scope

Each stop has an approachable interpretation case, a chronology/process/comparison case, and an evidence-corroboration case. The game still selects one variant per stop; a normal eight-stop run uses eight of a pack’s 24 cases. The underlying interaction remains four-choice `deduction-choice`; no new interaction engine is implied. All reasoning and witness evidence is text.

The review checked each factual note against the cited primary passage, then read its fictional record, four options, key, all hints, explanation and warrant as one chain. Wrong choices represent specific mistakes: mixing dates and events, confusing style with function, accepting only one of two conditions, or claiming more than records establish. The first two hints narrow the reasoning; the third provides the answer and worked explanation. The calling card carries no key.

Dossier assignment in clue 2 and a witness waiting at that same desk in clue 3 support each warrant. Each stop uses three canonical fictional ACME desk labels and explicit disguises. These are story locations, not visitor facilities or instructions to enter real properties. Rock Fountain Court is specifically treated as a document investigation because the NPS identifies it as closed to the public. Crimes, characters, receipts, clocks, plans and comparison records are invented; historical facts are separately identified in the source note.

Map pins provide approximate orientation only; precise pin accuracy, current access, hours, trail conditions, property suitability and human input/learning acceptance are outside this review. Route 66 proceeds in the eight-state westward order with selected stops, not endpoints or a full road alignment. The parks route is curated rather than optimized for travel. Transfer prompts below are untracked companion exercises.

## Source decisions

- Prefer event-specific records over a familiar number: discovery versus park acquisition; patent versus bridge construction; listing versus restoration funding. A grant date does not prove completion.
- Use stable architecture and preservation facts for the Blue Swallow; do not rely on an opening-year claim. Omit the Harvey House architect attribution.
- Do not infer tornado resistance from the Round Barn’s shape, meteorite origin from a park name, or exact Lake Chicot cutoff dates from general oxbow formation.
- Preserve planned retail versus actual cafe seating at Shamrock. Preserve earlier fabric beneath later finishes at the Painted Desert Inn.
- Cite USGS for the general oxbow process separately from the Arkansas source identifying Lake Chicot as an oxbow. The fictional teaching sheets are not historic surveys.
- Final editorial corrections name distractors by content so explanations survive answer shuffling, constrain the custody log to one week, and distinguish observed photograph dates from drawings or proposals. The Washington leaflet case separates document subject from production provenance; the bridge sketch case separates visible form from construction evidence.

## Case ledger

Keys below use option text because runtime answer positions are shuffled. Each case also stores its precise source scope and reviewer/date in `reviewEvidence`. Source flags apply only to these claims.

### Where in Arkansas State Parks is Carmen Sandiego?

#### Petit Jean State Park

Sources: [Petit Jean State Park](https://www.arkansas.com/state-parks/explore/parks/petit-jean-state-park).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-petit-jean-caption` | Mather Lodge | Mather Lodge supplies both lodging and the canyon outlook. Cedar Falls is falling water, the dam is a barrier, and Lake Bailey is a lake; none is the lodging building. Petit Jean page, Mather Lodge and Lake Bailey passages; lodge, canyon, dam and waterfall distinctions. |
| `arkansas-state-parks-petit-jean-custody` | The Tuesday sealed-print claim conflicts with the log | The sealed item did not exist until Wednesday. The log allows a Monday photograph and a Tuesday unsealed print. Building material proves nothing about this fictional handoff, and sealing before printing reverses the dependency. Petit Jean What to know: CCC log/stone facilities; all weekdays and custody events invented. |
| `arkansas-state-parks-petit-jean-two-records` | Lake Bailey dam construction | The dam is built to impound water and is linked to Lake Bailey. The lodge meets neither water condition. The waterfall is not the dam, and the unnamed natural pool lacks both the construction and named-lake evidence. Petit Jean Lake Bailey paragraph: CCC rock dam; Mather Lodge and hiking passages supply comparisons. |

**Transfer:** A label says a building is a natural landform, while a construction record names its builders. Which evidence resolves the conflict?

**Expected reasoning:** The construction record establishes that the building was made; its scenic setting does not make the building natural.

#### Mount Magazine State Park

Sources: [Mount Magazine State Park](https://www.arkansas.com/state-parks/explore/parks/mount-magazine-state-park).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-mount-magazine-height` | The mountain summit is 2,753 feet above sea level | The reference measures summit elevation from sea level. The other choices change the measured object or reference into a building height, lake depth or valley length. Mount Magazine What to know: 2,753-foot highest point; lodge overlook paragraph. No summit-to-lodge height inference. |
| `arkansas-state-parks-mount-magazine-duplicate` | 2,753 feet | Only 2,753 preserves both the digits and their positions. The other numbers transpose positions; sharing digits does not preserve the numerical value. Mount Magazine What to know: summit elevation only; transcription cards fictional. |
| `arkansas-state-parks-mount-magazine-view` | Petit Jean River Valley + Blue Mountain Lake | Only the Petit Jean River Valley and Blue Mountain Lake pairing preserves both identifications. The Petit Jean River Valley/Mirror Lake caption keeps only the valley; Cedar Creek Canyon/Blue Mountain Lake keeps only the lake; Cedar Creek Canyon/Mirror Lake keeps neither. The alternatives are fictional caption swaps, not claims about actual views. Mount Magazine lodge paragraph: exact valley/lake pairing; alternative views explicitly invented. |

**Transfer:** A peak is 900 meters above sea level. Can you conclude its lookout tower is 900 meters tall?

**Expected reasoning:** No. Summit elevation and tower height use different objects and reference points.

#### Crater of Diamonds State Park

Sources: [Diamond (Industrial): Arkansas deposits](https://geology.arkansas.gov/minerals/industrial/diamond-industrial.html).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-crater-of-diamonds-origin` | A volcanic origin; the name alone does not establish an impact | The geological record directly supports volcanic origin. A name does not establish a meteorite impact, appearance does not establish glaciation, and park designation does not establish a manufactured landform. State Geologist, Arkansas Diamond-bearing Rocks: volcanic pipe; History of Arkansas Deposits: 1972. No claim that the eruption created the diamonds. |
| `arkansas-state-parks-crater-of-diamonds-dates` | 1906 discovery → 1972 park acquisition | Discovery in 1906 precedes state-park acquisition in 1972. Reversing the dates, swapping the event names, or placing both in 1972 contradicts the supplied record. State Geologist, History of Arkansas Deposits: Huddleston discovery 1906, state purchase 1972. |
| `arkansas-state-parks-crater-of-diamonds-provenance` | Card 2 | Card 2 matches locality and geological setting. Card 1 preserves only locality; Card 3 only setting; Card 4 neither. A matching location alone cannot authenticate a specimen record. State Geologist, Arkansas Diamond-bearing Rocks: Murfreesboro locality and volcanic pipe. Card labels invented; not mineral identification advice. |

**Transfer:** A museum has an object’s discovery date and the date it acquired the object. Must those dates match?

**Expected reasoning:** No. Discovery and acquisition describe different events; label each date before drawing a chronology.

#### Historic Washington State Park

Sources: [Historic Washington State Park](https://www.arkansas.com/state-parks/explore/parks/historic-washington-state-park).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-historic-washington-reuse` | Keep 1874 Courthouse as its identity and visitor center as its use | A building can retain its historical identity while serving a new function. Renaming it the Print Museum substitutes a different site; new construction is unsupported; deleting the visitor-center role loses supplied evidence. Historic Washington What to know: 1874 Courthouse visitor center; named Print Museum and Blacksmith Shop. |
| `arkansas-state-parks-historic-washington-printing` | Arrange → ink → press → inspect | Arrange, ink, press and inspect respects every stated dependency. The other orders inspect before a print exists or apply ink after printing. This is the exercise’s simplified process, not a claim about a particular museum demonstration. Historic Washington named Print Museum only; the simplified process/log is explicitly fictional. |
| `arkansas-state-parks-historic-washington-catalog` | Subject: courthouse; production: Print Museum demonstration | The leaflet’s text identifies its courthouse subject; the matched production record identifies the Print Museum demonstration. Swapping these fields reverses the evidence. Giving both fields either location discards one independent record. A document’s subject is not proof of where it was made. Historic Washington What to know: courthouse visitor center and Print Museum. Leaflet, serial match and demonstration ledger invented; reliable-record assumption explicit. |

**Transfer:** An old school becomes a library. What two fields should a catalogue preserve?

**Expected reasoning:** Its historical identity as a school and its later library use; the new use does not erase the earlier identity.

#### Lake Chicot State Park

Sources: [Lake Chicot State Park](https://www.arkansas.com/state-parks/explore/parks/lake-chicot-state-park), [Oxbow Lakes](https://eros.usgs.gov/earthshots/oxbow-lakes).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-lake-chicot-landform` | An old river bend became an oxbow after a cutoff | The bend, shortcut and separated water body match oxbow formation. No dam is shown or required; the sequence puts the bend before the lake and explicitly shows a course change. Lake Chicot What to know: oxbow classification. USGS Oxbow Lakes opening: general cutoff process, not Lake Chicot-specific dates. |
| `arkansas-state-parks-lake-chicot-sequence` | R → S → T | R establishes the bend, S creates the shortcut, and T shows the separated lake. The alternatives put the result before its prerequisite or move the original bend after the cutoff. USGS Oxbow Lakes opening process; Lake Chicot classification supplies local context. All sheet labels invented. |
| `arkansas-state-parks-lake-chicot-limits` | The form supports a cutoff, but these records do not date it | Both observations support the cutoff interpretation, but neither supplies a year. The specific year and exact age invent time evidence; a dam is not established by either observation. Lake Chicot oxbow classification and USGS general process. 1840 is expressly an unsupported fictional addition. |

**Transfer:** Two undated photos establish that a building changed shape. Do they establish the year of renovation?

**Expected reasoning:** No. They support a change, but a dated source is needed to establish when it happened.

#### Jacksonport State Park

Sources: [Jacksonport State Park](https://www.arkansas.com/state-parks/explore/parks/jacksonport-state-park).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-jacksonport-junction` | Replace Spring with Black | White and Black is the documented pair. Keeping Spring, keeping only Black with Spring, or removing the names fails to restore both source fields. Jacksonport What to know: White and Black confluence and steamboat-port history. |
| `arkansas-state-parks-jacksonport-event` | Label 1852 as county-seat designation; leave construction date unresolved | The case extract ties 1852 to county-seat designation only. It supplies neither construction nor museum-opening dates within this exercise. Keeping or inventing a construction date, or relabeling the date as museum opening, goes beyond the record. Jacksonport What to know: 1852 county seat and restored courthouse museum; construction date deliberately excluded from the case extract; the full page separately identifies an 1872 courthouse. |
| `arkansas-state-parks-jacksonport-paired-file` | File D | D preserves the river pair and steamboat transport. A fails transport, B fails the river pair, and C fails both. The other combinations are invented catalogue errors. Jacksonport What to know: confluence and steamboat history only; lettered records fictional. |

**Transfer:** A town incorporated in 1880 has a station of unknown age. Can you date the station from incorporation alone?

**Expected reasoning:** No. The date belongs to incorporation; station construction needs its own record.

#### Mammoth Spring State Park

Sources: [Mammoth Spring State Park](https://www.arkansas.com/state-parks/explore/parks/mammoth-spring-state-park).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-mammoth-spring-depot` | Frisco train depot | The Frisco depot matches railway service and the supplied date. The hydroelectric and mill categories concern different facilities; a spring is a natural water source rather than the dated railway building. Mammoth Spring What to know: 1886 Frisco depot and industrial remnants. |
| `arkansas-state-parks-mammoth-spring-flow` | Spring → lake → Spring River | The source gives spring, then lake, then southward river. Each other chain reverses or swaps at least one step. These are water-flow relationships, not a visitor route. Mammoth Spring What to know: spring forms lake, then flows south as Spring River. |
| `arkansas-state-parks-mammoth-spring-attribution` | Record P | P reports moving-water power and electricity generation. Q has water power but grinding rather than electric output. R has neither; S has grinding without either required condition. The definition and records are supplied in the exercise. Mammoth Spring What to know: mill and hydroelectric remnants, depot; machine records are invented, not an inventory of surviving machinery. |

**Transfer:** A machine uses water power. Is that alone enough to identify an electric generator?

**Expected reasoning:** No. A water-powered mill can do mechanical work; evidence of electric output is also needed.

#### Ozark Folk Center State Park

Sources: [Ozark Folk Center State Park](https://www.arkansas.com/state-parks/parks/ozark-folk-center-state-park/music/about).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `arkansas-state-parks-ozark-folk-center-demonstration` | Live craft demonstration | A maker actively showing a process matches a craft demonstration. The note does not describe growing plants or performing music, and the storage-only interpretation removes the observed maker and activity. Ozark Folk Center Craft Village, Heritage Herb Garden and theater descriptions; no claim about a current performance schedule. |
| `arkansas-state-parks-ozark-folk-center-program` | Craft → garden → music | Craft, garden, music preserves the explicitly supplied order. The other choices reverse the first pair, start with the last item, or put music before garden. These slots are fictional and are not venue times. Ozark Folk Center program areas only; all recording/release slots fictional. |
| `arkansas-state-parks-ozark-folk-center-living-classroom` | Plant growth + teaching | Plant growth plus teaching retains both independent observations and fits a living classroom. The storage alternative drops the lesson; music changes the observed subject; music plus storage changes both. Ozark Folk Center Heritage Herb Garden living-classroom passage; observations fictional and not medical or botanical advice. |

**Transfer:** A record shows a weaver teaching a technique. What would a label saying only "old cloth" miss?

**Expected reasoning:** It would miss the living maker, the teaching activity and the process; an object label alone cannot capture the demonstrated practice.

### Where on Route 66 is Carmen Sandiego?

#### Dwight

Sources: [Ambler’s Texaco Gas Station](https://home.nps.gov/places/amblers-texaco-gas-station.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-dwight-function` | A fuel station could use house-like styling | The station combines domestic appearance with fuel-service equipment. Residential styling alone does not establish exclusive residential use; pumps do not indicate a railway platform, and concrete block does not rule out a station. NPS Ambler historical paragraphs: domestic office/canopy and concrete-block service addition. |
| `route-66-dwight-phases` | The 1933 photograph date | A photograph showing the later bay cannot depict the completed site in 1933 under the stated dates. The original office, chronological relationship and town are not contradicted by the evidence. NPS Ambler: 1933 original and early-1940s bay; reproduced photograph fictional. |
| `route-66-dwight-materials` | Order D | D matches phase and material. A has the material but the wrong phase; B the phase but the wrong material; C neither. The records do not establish present repair needs. NPS Ambler material and addition paragraphs; repair orders fictional. |

**Transfer:** A shop resembles a house but has a documented service counter. Does appearance alone determine its use?

**Expected reasoning:** No. Compare the equipment, activity and records as well as the style.

#### Springfield

Sources: [Rock Fountain Court](https://www.nps.gov/places/rock-fountain-court.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-springfield-layout` | Describe separate cabins around a court | Separate cabins fit both the source and inventory. A continuous roof erases that separation; train cars and a tall tower have no support in these building records. NPS Rock Fountain first, second and courtyard paragraphs: 1945, nine freestanding cabins, semicircle; explicit no-public-access notice. |
| `route-66-springfield-style` | The earlier style does not establish an earlier construction date | A style can remain in use after its peak popularity. The 1945 construction record dates these cabins; stylistic resemblance alone cannot move construction to the 1920s or identify a different country. NPS Rock Fountain first two historical paragraphs distinguish earlier layout fashion from 1945 construction. |
| `route-66-springfield-structure` | A frame cabin can have a stone facing | A stone facing can cover a frame structure, so the two records agree. Surface appearance does not prove solid stone walls or justify deleting the frame record. The photograph does not reveal every underlying layer. NPS Rock Fountain Ozark sandstone paragraph explicitly says frame cabins and veneer; no inference about unseen present-day condition. |

**Transfer:** A photo shows brick on the front of a building. Does that establish solid brick construction throughout?

**Expected reasoning:** No. A visible facing does not establish the underlying structure; use a construction record.

#### Brush Creek Bridge

Sources: [Brush Creek Bridge](https://www.nps.gov/places/brush-creek-bridge.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-brush-creek-structure` | An engineered concrete bridge | Concrete construction and reinforcement support an engineered bridge. Natural rock, a wooden structure and an unbuilt river bend do not fit those material and structural observations. NPS Brush Creek Bridge historical description: Marsh, reinforced concrete and paired arches. |
| `route-66-brush-creek-patent` | 1912 design patent → 1923 bridge construction | The design patent precedes construction of this bridge by eleven years. Swapping the event names or merging them into one year contradicts the separate dated records. NPS Brush Creek Bridge: 1912 patent and 1923 construction; eleven-year difference derived from those dates. |
| `route-66-brush-creek-reconcile` | File K | K matches the paired arches and reinforced concrete. M matches form but changes material; L matches material but changes form; N changes both. The photograph alone cannot establish the embedded reinforcement; the construction record supplies that evidence. NPS Brush Creek Bridge: paired reinforced-concrete arches, strengthened with steel. All candidate records fictional; no inference about current structural condition. |

**Transfer:** A tool was patented in 1900 and a surviving example was made in 1925. Are those dates contradictory?

**Expected reasoning:** No. They date a design and a particular manufactured example.

#### Arcadia

Sources: [Arcadia Round Barn](https://home.nps.gov/places/arcadia-round-barn.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-arcadia-purpose` | The barn could support both agricultural and community uses | The documented uses can coexist across spaces or occasions. Neither activity erases the other, and the source gives no reason to discard both. The evidence does not claim that every use happened at the same moment. NPS Arcadia Round Barn historical paragraphs: 1898 and agricultural/community uses. |
| `route-66-arcadia-before-road` | The barn predates the Route 66 alignment through town | 1898 precedes 1928 by thirty years. The dates establish that the barn already existed before that alignment; they do not support the courier’s claimed original highway purpose. Reversing, merging or changing the dates contradicts the record. NPS Arcadia Round Barn: 1898 completion and 1928 Route 66 alignment; thirty years derived. |
| `route-66-arcadia-rafters` | Soak, then bend into a mold | Soaking followed by bending retains the preparation and shaping in the stated order. Soaking alone omits the shaping; dry bending omits preparation; bending first reverses the described method. This is historical interpretation, not building instructions. NPS Round Barn burr oak soaking and mold-bending passage. No assertion of tornado resistance or structural suitability. |

**Transfer:** A building predates the highway beside it. What evidence would be needed to call it originally built for highway travelers?

**Expected reasoning:** A source connecting its original purpose to those travelers; present location beside a later road is insufficient.

#### Shamrock

Sources: [Tower Station and U-Drop Inn Cafe](https://www.nps.gov/places/tower-station-and-u-drop-inn-cafe.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-shamrock-receipts` | The landmark provided both services, so the receipts need not conflict | A combined station and cafe can account for fuel and meal receipts. The records alone do not prove either receipt false, and changing both to one purchase type erases evidence. NPS Tower Station: 1936 Art Deco and station/cafe combination; receipts are invented. |
| `route-66-shamrock-plan` | Retail was planned; cafe seating was the actual use described | The drawing records intended retail use; the later record describes cafe seating. A plan does not guarantee execution, and later changes do not erase the earlier plan. Neither record describes a pump. NPS Tower Station paragraph on third space planned as retail and used as cafe overflow. |
| `route-66-shamrock-decision` | Cafe seating is supported by both later observations | The seating list and meal slips independently support cafe use. The old drawing establishes intention, not operation. Neither unused space nor fuel storage is supported by the observations. NPS Tower Station planned retail/actual overflow distinction; seating lists and service slips are fictional, not surviving archives. |

**Transfer:** A blueprint says classroom; later attendance and lending records show a library. What should a history say?

**Expected reasoning:** The space was planned as a classroom but later evidence supports library use. Preserve the difference between plan and outcome.

#### Tucumcari

Sources: [Blue Swallow Motel](https://www.nps.gov/places/blue-swallow-motel.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-tucumcari-rooms` | Separate sleeping units from garages in the inventory | The source distinguishes garages from sleeping units. A door alone does not identify a bedroom; classifying every space as either type loses the distinction. The floor-plan shape need not be erased. NPS Blue Swallow first historical paragraph: L-shaped plan and interspersed garages. No current unit count or opening-year claim. |
| `route-66-tucumcari-preservation` | 1993 listing → 2007 restoration grant | The source dates listing in 1993 and a grant in 2007. None of these records dates construction; each alternative swaps an event, substitutes construction, or reverses chronology. A grant date also does not by itself prove work completion that year. NPS Blue Swallow closing historical paragraph: 1993 listing and 2007 grant; grant distinguished from completed restoration. |
| `route-66-tucumcari-plan-match` | Plan A | A preserves both the L shape and garages among sleeping units. B matches shape only; C matches garage arrangement only; D matches neither. These are comparison sketches, not visitor floor plans. NPS Blue Swallow first paragraph: L shape and garages between sleeping units; no navigational or room-access claims. |

**Transfer:** A building received a restoration grant in 2010. Does that alone prove it was built or restored completely in 2010?

**Expected reasoning:** No. The record dates funding, not original construction or completed work.

#### Painted Desert Inn

Sources: [Civilian Conservation Corps at Petrified Forest](https://www.nps.gov/pefo/learn/historyculture/civilian-conservation-corps.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-painted-desert-layers` | A later exterior can cover an earlier building | Remodeling can add a new exterior to an existing structure. Stucco does not erase evidence of earlier stonework, and beams alone do not establish a tent. The construction note directly supports the earlier building. NPS CCC at Petrified Forest, Painted Desert Inn passage: existing stone building, stucco and vigas. |
| `route-66-painted-desert-chronology` | NPS purchase → CCC start → CCC completion | The sequence is purchase in 1936, work starting in 1937, then completion in 1940. The alternatives reverse those dated events or collapse them into an unsupported single year. NPS CCC Painted Desert Inn section: 1936 acquisition and 1937–1940 work. |
| `route-66-painted-desert-original-copy` | Only Prop A has the two records supporting historical provenance | A’s accession description and matching inventory independently support its recorded provenance under the stated reliability assumption. B is explicitly a reproduction. Similar appearance proves neither shared age nor shared origin; the existence of replicas does not erase reliable records. NPS CCC passage: handmade punched-tin lanterns. Props, accession cards and inventory numbers entirely fictional; no claim of authenticating real objects. |

**Transfer:** Two objects look identical, but one has a documented reproduction label. What should an investigator compare next?

**Expected reasoning:** Provenance and independent records, not resemblance alone; state which records are trusted and why.

#### Barstow

Sources: [Harvey House Railroad Depot](https://www.nps.gov/places/harvey-house-railroad-depot.htm), [Route 66 Overview](https://home.nps.gov/articles/route-66-overview.htm).

| Case | Supported answer | Reasoning and source scope |
| --- | --- | --- |
| `route-66-barstow-transport` | Its railway role could coexist with a later roadside setting | The railway role and adjacent road are compatible. Later roadside context does not erase earlier railway service, and neither form of transport rules out the other’s proximity. NPS Harvey House: railway hospitality, Casa del Desierto name, adjacent 1926 alignment. Route overview confirms California as eighth state westward. |
| `route-66-barstow-replacement` | The 1909 caption conflicts with the completed replacement shown | Under the supplied NPS chronology, a photograph dated 1909 cannot show the completed replacement. It does not overturn the fire record or establish an earlier construction start. The capture-date caption is the conflicting field. NPS Harvey House building-history paragraph: 1908 fire and its stated 1910–1913 construction range. The October 17 wording attributes this chronology to NPS; reported 1911 completion accounts remain unreconciled. Architect attribution omitted; photograph and caption invented, with an explicit observation-not-proposal assumption. |
| `route-66-barstow-telegram` | This message could not be advance notice for the 12:00 arrival | 12:05 is five minutes after 12:00, so this particular message was not advance notice for that arrival. The records do not exclude a different earlier message and do not change the train’s logged arrival time. NPS Harvey House operations paragraph: advance telegrams; all clocks, message events and train logs fictional. |

**Transfer:** A warning arrives after an event. What can you conclude, and what can you not conclude?

**Expected reasoning:** It did not provide advance warning for that event. You cannot conclude that no other earlier warning existed without more records.

## Final source review for local commits

The October 14 follow-up reviewed the full accumulated diff and all 48 new cases. Clarified that Jacksonport’s case excerpt omits a construction date even though the full source separately identifies an 1872 courthouse; the puzzle still asks what follows from the supplied excerpt. Clarified the direction of the Mammoth Spring water-flow arrows and made the Ozark Folk Center question explicitly ask for correction of the faulty release log. Keys, pack versions and save semantics are unchanged. No tests or content gate were run.

## Next owner-run check

```sh
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This checks the existing manifest/content/fallback contracts, seeded selection and all-pack 4/6/8-stop session completion. It does not verify the cited facts. For a short personal check, select each new pack on localhost, use a hint, complete a warrant and pause/resume using the preferred input method. The last recorded hosted deployment predates these packs.
