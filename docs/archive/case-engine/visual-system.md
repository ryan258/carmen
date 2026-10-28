# Visual system

The game uses a cut-paper case-file treatment. `styles.css` owns the current semantic surface rules; the checked-in Tailwind build supplies layout/utilities. Obsolete dark-glass defaults and the unused Google Fonts import were removed. System fonts keep typography available without a font service; the current cutout-theme rules own the surfaces.

| Token | Value | Role |
| --- | --- | --- |
| `--bass-ink` | `#17130f` | Main ink and dark backdrop |
| `--bass-paper` | `#f4dfbd` | Case paper |
| `--bass-paper-light` | `#fff3d6` | Light text on dark surfaces and light panels |
| `--bass-red` | `#c73a22` | Decorative accent |
| `--bass-mustard` | `#d99a21` | Decorative accent |
| `--bass-teal` | `#176c72` | Focus/accent |
| `--bass-blue` | `#26547c` | Supporting accent |

Warm panels use dark readable text. Bright amber/sky/green utilities are overridden on light surfaces; dark buttons and badges retain light text. Colors intended for decoration are not automatically suitable for body text. Check actual compositing and all interaction states before claiming a contrast pass.

Native controls have a minimum 44px height. Headers/tabs/actions wrap, token names appear in full, and tiny utility labels inside the main panels have a larger text floor. Focus is visible and separate from selection. Correct/wrong feedback includes text/live announcements in addition to color. Dialogs scroll within the viewport.

Meaningful evidence is text, with optional decorative first-party HTML. Essential text must remain in the accessibility tree. Build Tailwind after changing utility classes in HTML, JS, or pack JSON. Validate at 320px and zoom; the source changes alone do not prove reflow.
