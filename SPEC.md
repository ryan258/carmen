# Where in Argentina is Carmen Sandiego? — Complete Project Spec

## Vision

A love letter to the classic 1985 edutainment game, rebuilt as a modern single-page web game set entirely in Argentina. The player is a detective tracking the master thief Carmen Sandiego across the country. Each location presents a unique puzzle that must be solved to uncover Carmen's trail. Solve puzzles correctly to advance — fail too many times and she escapes.

The game should feel like a real detective case file: atmospheric, educational, and genuinely challenging. Every puzzle teaches something real about Argentina's geography, culture, or history.

---

## Core Game Loop

```
TITLE → DIFFICULTY → BRIEFING → INVESTIGATE → PUZZLE → WARRANT → RESULT → TRAVEL → [×8] → FINAL CONFRONTATION → SCORE
```

1. **Briefing** — Player arrives in a city. A dossier is presented with atmospheric context: a news report, a witness statement, a photo of Carmen's calling card left at the scene.
2. **Investigation** — Player examines 3 clues (visual, textual, audio-like). Clues are presented as collectible items the player inspects by clicking/tapping.
3. **Puzzle** — A location-specific puzzle must be solved using the clues. Different puzzle types keep gameplay varied.
4. **Warrant** — After solving, the player fills out a correct arrest warrant (name the city, the hideout, the disguise) to proceed.
5. **Result** — Success: arrest Carmen and move on. Failure: she escapes, lose a life.
6. **Repeat** for all 8 locations, then a **Final Confrontation** puzzle against Carmen herself.

---

## Locations & Puzzles

### 1. Buenos Aires (Capital Federal)
- **Theme:** Tango, Evita, bookstores, obelisk
- **Puzzle Type:** **Cipher Decode**
  - Carmen left a note encoded with a tango lyric substitution cipher
  - Player must decode the message to find her hideout (La Boca / Caminito)
- **Clues:**
  - A tango lyric sheet with highlighted words
  - A photo of colorful houses with a red X
  - A restaurant receipt from "El Caminito" restaurant
- **Answer:** La Boca neighborhood
- **Warrant fields:** City: Buenos Aires | Hideout: La Boca | Disguise: Tango dancer
- **Fun Fact:** Buenos Aires has more bookstores per capita than any other city in the world.

### 2. Mendoza (Mendoza Province)
- **Theme:** Wine, Andes, Aconcagua
- **Puzzle Type:** **Map Coordinate Puzzle**
  - Player plots wine region markers on a topographic map to triangulate Carmen's position
  - Each wine label has coordinates that reveal a pattern pointing to her hideout
- **Clues:**
  - Three wine labels with GPS coordinates
  - A weather report mentioning "evening shadows on the western slope"
  - A trail map with one route circled
- **Answer:** Aconcagua base camp area
- **Warrant fields:** City: Mendoza | Hideout: Aconcagua base camp | Disguise: Vineyard worker
- **Fun Fact:** Mendoza is home to Aconcagua, the highest mountain in both the Western and Southern Hemispheres at 6,961m.

### 3. Salta (Salta Province)
- **Theme:** Colonial architecture, Train to the Clouds, Quebrada de Humahuaca
- **Puzzle Type:** **Timeline Reconstruction**
  - Carmen's movements across northern Argentina are jumbled; player must reorder events
  - Train schedules, timestamps, and witness accounts must be aligned
- **Clues:**
  - A jumbled train schedule (Tren a las Nubes)
  - Three witness accounts with conflicting times
  - A boarding pass stub with a date
- **Answer:** Quebrada de Humahuaca
- **Warrant fields:** City: Salta | Hideout: Quebrada de Humahuaca | Disguise: Train conductor
- **Fun Fact:** The Tren a las Nubes reaches heights of 4,220 meters above sea level, making it one of the highest railways in the world.

### 4. Córdoba (Córdoba Province)
- **Theme:** University city, Sierras, Che Guevara's birthplace
- **Puzzle Type:** **Logic Grid**
  - Classic logic puzzle: match suspects to locations to disguises using elimination clues
  - "The thief wearing glasses wasn't in the Jesuit Quarter..."
- **Clues:**
  - A police report with three witness statements
  - Three suspect photos with attributes (glasses, hat, scarf)
  - A city map with 4 highlighted neighborhoods
- **Answer:** Nueva Córdoba neighborhood
- **Warrant fields:** City: Córdoba | Hideout: Nueva Córdoba | Disguise: University student
- **Fun Fact:** The National University of Córdoba, founded in 1613, is the third-oldest in the Americas.

### 5. Iguazú Falls (Misiones Province)
- **Theme:** Waterfalls, jungle, border with Brazil
- **Puzzle Type:** **Pattern/Sequence Puzzle**
  - Carmen left a trail of items in a specific pattern through national park waypoints
  - Player must predict the next waypoint in the sequence
- **Clues:**
  - A trail map with 5 marked waypoints showing a pattern
  - Carmen's calling card found at waypoint 4
  - A ranger's log describing movement patterns
- **Answer:** Devil's Throat (Garganta del Diablo)
- **Warrant fields:** City: Puerto Iguazú | Hideout: Garganta del Diablo | Disguise: Park ranger
- **Fun Fact:** Iguazú Falls consists of 275 individual waterfalls spread across nearly 3 kilometers of the Iguazú River.

### 6. Bariloche (Río Negro Province)
- **Theme:** Alpine town, chocolate, Nahuel Huapi, skiing
- **Puzzle Type:** **Visual Puzzle / Jigsaw**
  - A photo of Carmen's hideout has been torn into pieces; player must reassemble it
  - Background details reveal the location name
- **Clues:**
  - 6 torn photo pieces (draggable to reassemble)
  - A chocolate shop business card visible in one piece
  - A trail sign partially visible in another piece
- **Answer:** Cerro Otto viewpoint
- **Warrant fields:** City: Bariloche | Hideout: Cerro Otto | Disguise: Ski instructor
- **Fun Fact:** Bariloche was founded by German and Swiss immigrants, and its architecture reflects that alpine heritage.

### 7. Ushuaia (Tierra del Fuego)
- **Theme:** End of the World, penguins, Beagle Channel, lighthouse
- **Puzzle Type:** **Navigation/Compass Puzzle**
  - Player must follow compass directions on a map to find Carmen's hideout
  - "Start at the lighthouse, go NW 2km, then S 1km..."
- **Clues:**
  - A treasure map with compass directions
  - A lighthouse keeper's log
  - A cruise ship departure manifest
- **Answer:** Les Eclaireurs Lighthouse
- **Warrant fields:** City: Ushuaia | Hideout: Les Eclaireurs Lighthouse | Disguise: Lighthouse keeper
- **Fun Fact:** Ushuaia is the only city in the world that lies below the 54th parallel south, earning its "End of the World" nickname.

### 8. El Calafate (Santa Cruz Province)
- **Theme:** Perito Moreno Glacier, Patagonia, calafate berry
- **Puzzle Type:** **Final Deduction Puzzle**
  - Meta-puzzle using clues accumulated throughout the entire game
  - Player must combine a clue from each previous location to identify Carmen's final Patagonian hideout
- **Clues:**
  - 8 collected "clue tokens" from previous locations (displayed as inventory)
  - A final letter from Carmen taunting the player
  - A Patagonian map with one location glowing
- **Answer:** Perito Moreno Glacier visitor center
- **Warrant fields:** City: El Calafate | Hideout: Perito Moreno Glacier | Disguise: Tour guide
- **Fun Fact:** The Perito Moreno Glacier is 30km long and 70m tall, and periodically dams the lake before spectacularly collapsing.

---

## Puzzle Mechanics Detail

### Cipher Decode (Buenos Aires)
- **Mechanic:** Caesar cipher with a shift of 3 (first location = simple)
- **UI:** A coded message is displayed in a typewriter font. Below it, a reference alphabet shows the substitution. Player types the decoded message in an input field.
- **Real-time feedback:** As the player types, correct characters turn green, wrong ones turn red. A progress bar fills as more is decoded.
- **Hint system:** Hint reveals one decoded word. Inspector mode: no hints.
- **Failure condition:** 3 wrong attempts = fail. Each wrong attempt shows a "Carmen is getting away..." urgency message.
- **Success:** Dramatic stamp animation on the decoded message, "CASE SOLVED" appears.

### Map Coordinate (Mendoza)
- **Mechanic:** Player is shown a small topographic map of the Mendoza region. Three wine labels each have coordinates (e.g., "32°53'S, 68°49'W"). Player clicks where each coordinate lands on the map.
- **UI:** Interactive SVG map with grid lines. Clickable. Each correct click drops a wine bottle pin and draws a line to the previous pin. The three lines form a triangle; the center is the hideout.
- **Real-time feedback:** Pins snap to nearest grid intersection. Lines animate drawing. When all 3 are placed, the triangle center glows.
- **Hint system:** Hint highlights the general area of one coordinate. Inspector: no hints.
- **Failure condition:** 3 wrong clicks = fail.
- **Success:** Triangle center pulses, reveals hideout name with a magnifying glass zoom effect.

### Timeline Reconstruction (Salta)
- **Mechanic:** 5 event cards are displayed in random order. Each card has a time, location, and witness quote. Player must drag them into chronological order.
- **UI:** Cards are displayed in a vertical list with drag handles. Player drags cards up/drop to reorder. A timeline rail shows positions.
- **Real-time feedback:** When a card is in the correct position, it locks with a green glow and a satisfying "click" animation. Wrong positions show a subtle red border.
- **Hint system:** Hint locks one card in its correct position. Inspector: no hints.
- **Failure condition:** 3 failed attempts to get all correct = fail.
- **Success:** Cards snap into place with a cascade animation, timeline illuminates.

### Logic Grid (Córdoba)
- **Mechanic:** 4×4 grid with categories: Suspect (4), Location (4), Disguise (4), Vehicle (4). Player clicks cells to mark ✓ or ✗. Clues given as logical statements.
- **UI:** Interactive grid with clickable cells. Each cell toggles between empty → ✓ → ✗ on click. Clues displayed as detective notes on the side. Auto-elimination: when a row has one ✓, others auto-✗.
- **Real-time feedback:** Cells animate on toggle. Conflicting clues flash red. When a row is complete, it gets a subtle green background.
- **Hint system:** Hint auto-fills one cell. Inspector: no hints.
- **Failure condition:** 3 wrong final answers = fail.
- **Success:** Grid completes with a satisfying cascade, all matches revealed.

### Pattern/Sequence (Iguazú)
- **Mechanic:** 5 waypoints are marked on a trail map following a visual/numerical pattern (e.g., distances between waypoints follow Fibonacci: 1km, 1km, 2km, 3km, 5km — next is 8km). Player must identify the pattern and select the next waypoint.
- **UI:** Trail map with 5 numbered waypoints connected by a dashed line. 4 candidate next waypoints are shown as clickable markers. Pattern hints shown as distance labels.
- **Real-time feedback:** Hovering a candidate shows a preview line. Correct selection triggers an animated path trace. Wrong selection shakes the marker.
- **Hint system:** Hint reveals the pattern type ("Fibonacci sequence"). Inspector: no hints.
- **Failure condition:** 3 wrong selections = fail.
- **Success:** Path animates to the correct waypoint, waterfall splash effect.

### Visual Jigsaw (Bariloche)
- **Mechanic:** A photo of Carmen's hideout has been torn into 6 pieces (2×3 grid). Player must drag pieces to their correct positions in the grid.
- **UI:** 6 shuffled pieces displayed in a tray. Empty 2×3 grid shown above. Pieces are draggable; they snap to the nearest grid cell. Correct placement locks the piece.
- **Real-time feedback:** Pieces snap to grid with a satisfying animation. Correct placement shows a green border and locks. Wrong placement bounces the piece back to the tray.
- **Hint system:** Hint auto-places one piece. Inspector: no hints.
- **Failure condition:** 3 wrong placements = fail.
- **Success:** Completed image reveals the hideout with a zoom-in, name appears below.

### Navigation/Compass (Ushuaia)
- **Mechanic:** Player follows compass directions on a grid map. "Start at the lighthouse, go N 2, E 3, S 1, W 1..." Each step reveals terrain features. The final position is the hideout.
- **UI:** Grid map (6×6) with terrain tiles (water, forest, mountain, lighthouse, path). Player clicks direction buttons (N/S/E/W) to move a detective token. Each step reveals the terrain.
- **Real-time feedback:** Token animates moving. Terrain tiles flip to reveal what's there. Correct path shows a trail of footprints. Wrong direction (off map or into water) shows error.
- **Hint system:** Hint reveals the next correct direction. Inspector: no hints.
- **Failure condition:** 3 wrong moves = fail.
- **Success:** Token reaches the hideout, flag plants with a dramatic animation.

### Final Deduction (El Calafate)
- **Mechanic:** Player sees all 8 clue tokens collected throughout the game (one per location). Must select the 3 tokens that contain symbols pointing to the final hideout. The correct 3 tokens' symbols combine to form Carmen's signature logo.
- **UI:** 8 tokens displayed in a case file, each with a unique symbol and the location name. Player clicks to select/deselect. Selected tokens glow. A logo outline is shown that fills as correct tokens are selected.
- **Real-time feedback:** Selected tokens glow and move to a "selected" area. When 3 are selected, the logo attempts to fill. Correct combination: logo completes with a dramatic reveal. Wrong combination: logo shakes and resets.
- **Hint system:** Hint highlights one correct token. Inspector: no hints.
- **Failure condition:** 3 wrong combinations = fail.
- **Success:** Logo completes, Carmen's silhouette appears behind it, dramatic arrest animation.

---

## Game Systems

### Lives System
- Start with 5 lives (shown as magnifying glasses in the HUD)
- Lose 1 life for incorrect puzzle answer
- Gain 1 life back for 3 consecutive correct answers (max 5)
- If lives reach 0: game over, show "Carmen Escaped" screen with option to retry from last save or start over
- Final Confrontation: if lives reach 0 before it, game over

### Scoring
| Action | Points |
|---|---|
| Solve puzzle on 1st attempt | 100 |
| Solve puzzle on 2nd attempt | 75 |
| Solve puzzle on 3rd attempt | 50 |
| Solve puzzle on 4th+ attempt | 25 |
| Correct warrant bonus | 50 |
| Streak bonus (3+) | +25 per streak level |
| Final confrontation bonus | 200 |
| Remaining lives bonus | 50 per life |
| Perfect game bonus (all 1st attempts, no lives lost) | 500 |

### Rank System
| Score | Rank |
|---|---|
| 2000+ | 🕵️ Chief Inspector |
| 1500-1999 | ⭐ Senior Detective |
| 1000-1499 | 🔍 Detective |
| 500-999 | 📋 Junior Detective |
| 0-499 | 🎓 Rookie |

### Save System
- LocalStorage for: high score, rank, game progress, collected clue tokens, current lives, current score
- Resume from last completed location
- Track best score per difficulty
- Track total games played, total arrests, total escapes

### Clue Token Inventory
- Each location awards a unique clue token upon successful arrest
- Tokens are displayed in a persistent inventory panel (collapsible)
- Tokens have: location name, symbol, color, and a one-line clue
- Used in the Final Deduction puzzle
- Tokens persist across game sessions (saved to LocalStorage)

---

## Difficulty Modes

### Rookie
- 4 clue attempts per puzzle
- Puzzle hints available (1 free hint per puzzle)
- Warrant auto-fills partially (1-2 fields pre-filled)
- 6 lives instead of 5
- Hints are explicit ("The answer is near the river")
- Puzzle mechanics are simpler (shorter ciphers, fewer grid cells, more obvious patterns)

### Standard
- 3 clue attempts per puzzle
- Hints available but cost 25 points
- Warrant mostly blank
- 5 lives
- Hints are subtle ("Consider the river's location")
- Puzzle mechanics at normal difficulty

### Inspector
- 2 clue attempts per puzzle
- No hints available
- Warrant completely blank, must be researched from clues
- 4 lives
- Puzzle mechanics are harder (longer ciphers, more grid cells, less obvious patterns)
- Some puzzle steps are added (e.g., cipher has an extra layer, grid is 5×5 instead of 4×4)

---

## UI/UX Architecture

### Screens (Complete Flow)

#### 1. Title Screen
- Animated Argentina map as background (subtle parallax)
- Game logo: "WHERE IN ARGENTINA" in Playfair Display, "is" in italic, "CARMEN SANDIEGO?" in shimmer gold
- Three buttons: NEW GAME, CONTINUE (if save exists), HIGH SCORES
- Bottom: Argentina flag colors bar, version number
- Ambient floating particles (subtle)

#### 2. Difficulty Select
- Three cards in a row (desktop) or column (mobile)
- Each card: icon, title, description, key stats (lives, hints, attempts)
- Selected card glows amber, others dim
- CONFIRM button at bottom
- Back button to return to title

#### 3. Briefing Screen
- Case file folder aesthetic
- Left panel: "DOSSIER" with location name, province, map thumbnail
- Right panel: Three items stacked like documents:
  - News clipping (headline + short article)
  - Witness statement (quote with attribution)
  - Carmen's calling card (red silhouette, "Carmen was here" message)
- "BEGIN INVESTIGATION" button at bottom
- Typewriter text effect for dramatic reveal

#### 4. Investigation Screen (Clue Viewer)
- Three clue cards displayed face-down initially
- Player clicks each to flip and examine
- Clue cards have: title, description, illustration/icon, and a "collected" stamp when examined
- Each clue has a "zoom" option for detailed inspection
- Clue tokens appear in inventory as they're collected
- "PROCEED TO PUZZLE" button (enabled after all 3 clues examined)
- Back button to return to briefing

#### 5. Puzzle Screen
- Location-specific puzzle UI (see Puzzle Mechanics Detail above)
- HUD at top: location name, lives, score, clue attempts remaining
- Hint button (if available)
- Timer (optional, for Inspector mode)
- Progress indicator showing puzzle completion status
- "SUBMIT ANSWER" button
- Back button to return to investigation

#### 6. Warrant Screen
- Appears after puzzle is solved correctly
- Form-style UI with three fields: City, Hideout, Disguise
- Each field is a dropdown or text input (depending on difficulty)
- Some fields may be pre-filled on Rookie difficulty
- "SUBMIT WARRANT" button
- Correct submission: dramatic stamp animation, "ARRESTED!" message
- Wrong submission: "WARRANT REJECTED" with explanation, return to puzzle

#### 7. Result Screen
- Success state: Green-tinted, confetti, "CARMEN ARRESTED IN [LOCATION]!"
- Failure state: Red-tinted, screen shake, "CARMEN ESCAPED!"
- Score breakdown for the round
- Fun fact about the location (educational)
- Clue token awarded animation (if success)
- "CONTINUE" button
- If game over (0 lives): "CASE FAILED" with retry options

#### 8. Travel Screen
- Animated map showing travel from current location to next
- Dashed line animates between city markers
- Small plane/car icon moves along the path
- "Arriving in [Next City]..." text
- Auto-advances after 2-3 seconds, or tap to skip

#### 9. Final Confrontation
- Special dramatic screen: dark background, Carmen's silhouette
- Carmen's dialogue: "You've been clever, detective. But can you solve THIS?"
- Unique puzzle combining elements from all 8 previous puzzle types
- 3 rounds, each harder than the last
- Each round uses a different mechanic (cipher → logic → pattern)
- No hints available
- 2 attempts per round
- Success: Carmen is caught, dramatic arrest animation
- Failure: Carmen escapes, game over

#### 10. Score Screen
- Final report styled as a police document
- Total score, rank, locations solved, lives remaining, streak record
- List of all 8 locations with ✅ or ❌
- Comparison to high score
- Buttons: NEW CASE, MAIN MENU, SHARE RESULTS
- If perfect game: special "MASTER DETECTIVE" badge animation

### Design Language
- **Color Palette:**
  - Deep navy: #0c1222 (background)
  - Amber/gold: #fbbf24 (primary accent, highlights)
  - Sky blue: #38bdf8 (secondary accent, Argentina reference)
  - Red: #dc2626 (Carmen, danger, failure)
  - Emerald: #34d399 (success, arrest)
  - Slate: #94a3b8 (text, borders)
- **Typography:**
  - Playfair Display: titles, location names, dramatic text
  - Source Sans Pro: body, UI elements, clues
  - Courier New: typewriter text for clues and coded messages
- **Texture:**
  - Paper/parchment feel for dossier screens (subtle CSS noise)
  - Case file folder tabs for navigation
  - Stamp-style badges for achievements
  - Fingerprint marks as decorative elements
- **Map Style:**
  - Vintage topographic map aesthetic
  - Contour lines as subtle SVG paths
  - Compass rose in corner
  - Hand-drawn feel for province borders
  - Warm sepia undertones with modern SVG rendering
- **Iconography:**
  - Stamp-style badges for arrests
  - Magnifying glasses for lives
  - Fingerprint marks for clues
  - Carmen's red silhouette as recurring motif
  - Vintage detective badges for ranks

### Responsive Design
- **Desktop (1024px+):** Side-by-side layout (map/investigation left, puzzle right). Full HUD visible.
- **Tablet (768-1023px):** Slightly compressed side-by-side. Collapsible panels.
- **Mobile (<768px):** Stacked vertical layout. Tab navigation for clues/puzzle/warrant. Bottom sheet for inventory.
- **Touch-friendly:** All tap targets ≥44px. Drag-and-drop works with touch events. Swipe navigation between clue cards.

### Animation Principles
- Screen transitions: 400ms ease-in-out, slide + fade
- Puzzle interactions: 250ms ease-out
- Success states: confetti particles (canvas-based), stamp animation (CSS), screen flash (CSS)
- Failure states: screen shake (CSS transform), red flash, Carmen's "Better luck next time!" text
- Map: smooth pan/zoom with CSS transitions (transform: translate + scale)
- Between screens: page curl or folder tab turn effect
- Loading: typewriter dots animation

---

## Technical Architecture

### Stack
- Single self-contained HTML file
- Tailwind CSS via CDN
- Vanilla JavaScript (no frameworks, no build step)
- SVG for map and interactive puzzle elements
- Canvas API for confetti particles and jigsaw puzzle
- LocalStorage for persistence
- CSS animations + requestAnimationFrame for smooth gameplay

### File Structure
```
carmen/
├── index.html                         # Browser entry point (redirects to the active pack page)
├── carmen-sandiego-bentonville.html   # Single self-contained game file
├── styles.css                         # Visual design and responsive styles
├── game.js                            # Game state, scoring, map, and UI logic
├── run-generator.js                   # Seeded per-run case selection (shared)
├── data/quiz-packs.json               # Pack manifest the runtime loads first
├── data/packs/*.json                  # Self-contained packs (locations + questions + sources)
├── SPEC.md                            # This document
└── README.md                          # How to play, credits, keyboard shortcuts, roadmap
```

### SVG Map Specifications
- ViewBox: 0 0 400 500
- Argentina outline: hand-drawn SVG path based on real geographic coordinates
- Province borders: subtle dashed lines at ~0.15 opacity
- Location markers: animated circles with city name labels
- Travel paths: animated dashed lines between consecutive locations
- Compass rose: decorative element in bottom-right corner
- Scale bar: decorative element in bottom-left corner
- All coordinates for 8 cities:
  - Buenos Aires: (245, 215)
  - Mendoza: (115, 240)
  - Salta: (155, 65)
  - Córdoba: (175, 210)
  - Iguazú: (280, 85)
  - Bariloche: (120, 395)
  - Ushuaia: (175, 490)
  - El Calafate: (145, 455)

### State Management
```javascript
const gameState = {
  screen: 'title',           // current screen
  difficulty: 'standard',    // rookie | standard | inspector
  currentLocation: 0,        // index into LOCATIONS array
  lives: 5,
  score: 0,
  streak: 0,
  clueAttempts: 3,
  cluesRevealed: 0,
  clueTokens: [],            // collected tokens from each location
  puzzleState: {},           // location-specific puzzle data
  warrantAnswers: { city: '', hideout: '', disguise: '' },
  history: [],               // per-location results
  highScores: [],            // top 10 scores from LocalStorage
  settings: {
    sound: true,
    animations: true,
    timer: false
  }
};
```

### LocalStorage Schema
```javascript
{
  "carmen_highScores": [{ score, rank, difficulty, date }],
  "carmen_save": { difficulty, currentLocation, lives, score, streak, clueTokens, history },
  "carmen_settings": { sound, animations, timer },
  "carmen_stats": { gamesPlayed, totalArrests, totalEscapes, perfectGames }
}
```

### Module Organization (within single file)
```
// === CONSTANTS ===
// LOCATIONS array, DIFFICULTY_SETTINGS, RANK_THRESHOLDS

// === STATE ===
// gameState object, init/reset functions

// === SCREEN MANAGEMENT ===
// showScreen(hideAll), screen transition animations

// === SVG MAP ===
// drawMap(), updateMapMarkers(), animateTravel()

// === PUZZLE ENGINES ===
// Each puzzle type as a self-contained module:
//   cipherPuzzle.init(config), cipherPuzzle.render(), cipherPuzzle.check()
//   mapPuzzle.init(config), mapPuzzle.render(), mapPuzzle.check()
//   timelinePuzzle.init(config), timelinePuzzle.render(), timelinePuzzle.check()
//   logicGridPuzzle.init(config), logicGridPuzzle.render(), logicPuzzle.check()
//   patternPuzzle.init(config), patternPuzzle.render(), patternPuzzle.check()
//   jigsawPuzzle.init(config), jigsawPuzzle.render(), jigsawPuzzle.check()
//   compassPuzzle.init(config), compassPuzzle.render(), compassPuzzle.check()
//   finalPuzzle.init(config), finalPuzzle.render(), finalPuzzle.check()

// === CLUE SYSTEM ===
// clueViewer.show(), clueViewer.collect(), clueViewer.inspect()

// === WARRANT SYSTEM ===
// warrantForm.render(), warrantForm.submit(), warrantForm.validate()

// === SCORING ===
// scoreEngine.add(), scoreEngine.bonus(), scoreEngine.penalty()

// === LIVES SYSTEM ===
// livesEngine.lose(), livesEngine.gain(), livesEngine.isEmpty()

// === PARTICLES / EFFECTS ===
// confetti.emit(count), screenShake(intensity), stampAnimation(element)

// === SAVE / LOAD ===
// saveGame(), loadGame(), saveHighScore(), loadHighScores()

// === AUDIO (optional) ===
// audio.play('success'), audio.play('failure'), audio.play('music')

// === MAIN LOOP ===
// requestAnimationFrame based render loop for canvas elements
```

---

## Audio Design (Visual-First, Audio-Optional)

Since this is a single HTML file, audio is optional and implemented via Web Audio API with synthesized sounds:

### Sound Effects (Web Audio API Synth)
- **Correct answer:** Rising chime (C-E-G chord, 200ms)
- **Wrong answer:** Descending buzz (sawtooth wave, 150ms)
- **Clue reveal:** Paper rustle (filtered noise, 300ms)
- **Stamp:** Thump (sine wave with fast decay, 100ms)
- **Confetti/arrest:** Fanfare (C-E-G-C arpeggio, 400ms)
- **Failure/escape:** Sad trombone (descending notes, 500ms)
- **Travel:** Whoosh (filtered noise sweep, 600ms)
- **Button click:** Soft click (sine blip, 50ms)
- **Final Confrontation:** Dramatic sting (low brass, 800ms)

### Music (Optional)
- Background: subtle ambient loop using Web Audio API oscillators
- Title screen: mysterious, tango-inspired melody
- Investigation: contemplative, light percussion
- Puzzle: subtle tension building
- Results: triumphant (success) or somber (failure)
- All music is toggleable via settings

---

## Educational Content

Each location teaches real Argentine geography and culture:

### Fun Facts (shown after each round)
- Buenos Aires: More bookstores per capita than any other city in the world
- Mendoza: Aconcagua is the highest mountain in the Western/Southern Hemispheres
- Salta: Tren a las Nubes reaches 4,220m — one of the world's highest railways
- Córdoba: National University of Córdoba (1613) is the 3rd oldest in the Americas
- Iguazú: 275 waterfalls across nearly 3km, taller than Niagara
- Bariloche: Founded by German/Swiss immigrants, alpine architecture
- Ushuaia: Only city below the 54th parallel south — "End of the World"
- El Calafate: Perito Moreno Glacier is 30km long, 70m tall, still advancing

### Briefing Content
- Each briefing includes a real news-style headline about Carmen's crime
- Witness statements reference real local landmarks and cultural elements
- Carmen's calling card includes a clue written in local dialect/Spanish phrases

### Info Cards (Results Screen)
- Location name, province, population, famous for
- One-sentence historical context
- "Did you know?" trivia

---

## Accessibility

### Visual
- All puzzles solvable without color alone (patterns + labels + text)
- High contrast mode: toggle in settings, increases contrast ratio to 7:1
- Text scalable: all sizes in rem/em, respects browser zoom
- Reduced motion: toggle disables all animations, uses instant transitions

### Motor
- All interactive elements ≥44px tap targets
- Drag-and-drop has click-based alternative (tap to select, tap destination)
- Keyboard navigable: Tab through all interactive elements, Enter/Space to activate
- No time pressure by default (timer is Inspector-only optional feature)

### Cognitive
- Clear instructions for each puzzle type
- Progressive difficulty within each puzzle (easy → hard)
- Hint system available on Rookie and Standard difficulties
- No penalty for taking time (except optional Inspector timer)

### Screen Reader
- All interactive elements have aria-labels
- Puzzle state changes announced via aria-live regions
- Clue cards have descriptive alt text
- Map has text-based alternative (list of cities with status)

---

## Stretch Goals (Post-MVP)

### Multiplayer
- Local pass-and-play: two players take turns, compete for higher score
- Online: WebSocket-based real-time race to catch Carmen

### Daily Challenge
- One puzzle per day, seeded from a pool of 30+ puzzle variations
- Global leaderboard (simple JSON server or LocalStorage-based local leaderboard)
- Streak tracking for daily completions

### More Countries
- "Where in the World" expansion: 40+ countries, 40+ puzzle types
- Each country has unique puzzle mechanics tied to local culture
- Unlock countries by completing the Argentina case

### Hard Mode Timer
- Each puzzle has a time limit (generous on Rookie, tight on Inspector)
- Bonus points for finishing with time remaining
- Visual countdown with urgency effects

### Photo Mode
- Generate shareable arrest warrant as image (Canvas toDataURL)
- Customizable: add player name, score, rank, date
- Share to social media or download

### Accessibility Expansion
- Full audio cues via Web Audio API (screen reader compatible)
- Full screen reader support with ARIA live regions
- Colorblind modes (protanopia, deuteranopia, tritanopia)
- One-handed play mode (all controls on one side of screen)

### Narrative Expansion
- Full story mode with cutscenes between locations
- Multiple endings based on performance
- Carmen's backstory revealed through collected clues
- Villains from the original game appear as bosses

---

## Milestones & Implementation Order

### Phase 1: Core Framework (Foundation)
- [ ] Project setup: HTML shell with Tailwind, CSS variables, base styles
- [ ] Screen routing system: show/hide with transitions
- [ ] Title screen: logo, buttons, background map
- [ ] Difficulty select: three cards, selection logic
- [ ] SVG Argentina map: accurate outline, city markers, province borders
- [ ] LocalStorage: save/load game state, high scores, settings
- [ ] Game state management: init, reset, update, serialize
- [ ] Responsive layout: desktop side-by-side, mobile stacked
- [ ] Keyboard navigation: Tab, Enter, Escape, Arrow keys
- [ ] Settings panel: sound, animations, reduced motion

### Phase 2: Content & Briefing
- [ ] All 8 location data: names, themes, clues, answers, fun facts, warrant fields
- [ ] Briefing screen: dossier layout, news clipping, witness statement, calling card
- [ ] Clue viewer: flip cards, zoom inspection, collect animation
- [ ] Clue token system: inventory panel, token display, persistence
- [ ] Travel screen: animated map path, city transition
- [ ] Result screen: success/failure states, score breakdown, fun fact
- [ ] Warrant screen: form fields, validation, difficulty-scaled pre-fill
- [ ] Final Confrontation: 3-round boss puzzle, dramatic presentation
- [ ] Score screen: final report, rank, history, high score comparison

### Phase 3: Puzzle Engines (One at a Time)
- [ ] **Cipher Decode:** Caesar cipher, real-time feedback, hint system
- [ ] **Map Coordinate:** interactive SVG map, pin placement, triangle center
- [ ] **Timeline Reconstruction:** drag-and-drop cards, chronological sorting
- [ ] **Logic Grid:** 4×4 grid, auto-elimination, clue statements
- [ ] **Pattern/Sequence:** waypoint map, pattern identification, next prediction
- [ ] **Visual Jigsaw:** 2×3 grid, drag-and-drop pieces, snap-to-grid
- [ ] **Navigation/Compass:** grid map, direction buttons, terrain reveal
- [ ] **Final Deduction:** token selection, logo assembly, dramatic reveal

### Phase 4: Game Integration
- [ ] Wire all 8 locations with their specific puzzles
- [ ] Lives system: display, lose/gain logic, game over trigger
- [ ] Scoring system: all point sources, real-time display
- [ ] Streak tracking: consecutive correct answers, bonus calculation
- [ ] Difficulty scaling: puzzle complexity, hint availability, lives
- [ ] Save/resume: auto-save after each location, continue from save
- [ ] High score tracking: top 10, per-difficulty, with dates
- [ ] Game over flow: retry, restart, return to title
- [ ] Complete playtest: all 8 locations + final confrontation

### Phase 5: Polish & Effects
- [ ] Confetti particle system (canvas-based)
- [ ] Screen shake effect (CSS transform)
- [ ] Stamp animation (CSS keyframes)
- [ ] Typewriter text effect for clues and briefings
- [ ] Page/screen transition animations
- [ ] Button hover/active states with glow effects
- [ ] Loading states and skeleton screens
- [ ] Web Audio API sound effects (synth-based)
- [ ] Background ambient music (optional, toggleable)
- [ ] Performance optimization: requestAnimationFrame, will-change, GPU layers
- [ ] Mobile touch optimization: touch events, swipe gestures
- [ ] Accessibility audit: keyboard nav, screen reader, contrast

### Phase 6: Testing & Launch
- [ ] Cross-browser testing: Chrome, Firefox, Safari, Edge
- [ ] Device testing: desktop, tablet, mobile (iOS + Android)
- [ ] Playtesting: 5+ people, all difficulty levels
- [ ] Bug fixes from playtesting feedback
- [ ] Performance profiling: 60fps target, memory usage
- [ ] Final README: how to play, controls, credits
- [ ] Celebration 🎉

---

## Appendix: Argentina Reference

### Geographic Accuracy
All 8 cities are placed on the SVG map at positions proportional to their real geographic coordinates:
- Buenos Aires: 34.6°S, 58.4°W → southeast coast
- Mendoza: 32.9°S, 68.8°W → western foothills
- Salta: 24.8°S, 65.4°W → northwest
- Córdoba: 31.4°S, 64.2°W → central
- Iguazú: 25.7°S, 54.4°W → northeast
- Bariloche: 41.1°S, 71.3°W → Patagonian Andes
- Ushuaia: 54.8°S, 68.3°W → Tierra del Fuego
- El Calafate: 50.3°S, 72.3°W → southern Patagonia

### Cultural References in Clues
- Buenos Aires: tango, Evita Perón, Café Tortoni, Caminito, 9 de Julio Avenue
- Mendoza: Malbec wine, Aconcagua, vendimia (grape harvest)
- Salta: Tren a las Nubes, Quebrada de Humahuaca, empanadas salteñas
- Córdoba: Jesuit Block, Che Guevara, peña (folk music), cuarteto
- Iguazú: Garganta del Diablo, toucans, coatis, yerba mate
- Bariloche: chocolate, Cerro Otto, Nahuel Huapi, Swiss architecture
- Ushuaia: Les Eclaireurs Lighthouse, penguins, Beagle Channel, "Fin del Mundo"
- El Calafate: Perito Moreno Glacier, calafate berry, Patagonian wind

---

*This spec is a living document. Build iteratively — get Phase 1 playable before designing every puzzle. Each phase should produce a playable, testable build.*
