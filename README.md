# Truth & Conciliation Commission — Website

5-page Next.js (App Router) website for the Truth & Conciliation Commission.

## Pages

- `/` — Home, restructured to mirror the old the-tacc.org flow:
  Tell the Truth → Acknowledge → Investigate → Develop, plus the
  one-sheeter pillars and the 501(c)3 note below
- `/about` — About, including the old-site "We are people…" paragraph, the
  3 pillars, a Speaking Engagements gallery, and Leadership Team
- `/contact` — Contact Us, with the GoHighLevel embed form "Contact Page | TCC"
  and contact email contact@the-tacc.org (from the old site)
- `/privacy` — Privacy Policy (effective October 27, 2026), contact
  contact@the-tacc.org
- `/terms` — Terms and Conditions (effective October 27, 2026). The old
  site's Terms page was lorem ipsum placeholder text and was NOT copied.

No blog was added — the new site remains exactly these 5 pages, even though
the old site also had /blog.

## Old-site alignment (2026-10-27 update)

- Home: "Tell the Truth — Are you ready to tell and hear the truth?",
  Acknowledge (intractable divisions / institutional and interpersonal
  racism / lives, health, and well-being), Investigate (educational workshop
  facilitation, testimonial/storytelling, transformational change; uncover,
  examine and redress structural and systemic racism at local, institutional
  and structural levels), Develop (conciliatory agreements and practices;
  covenants, policies and cultural practices).
- Home and footer: "The Truth and Conciliation Commission is a federally
  registered 501(c)3." — as stated on the old site.
- About: "We are people of the United States of America ready to hear, speak
  and live the truth about systemic racism embedded in the land, laws,
  culture, economy, and every institution developed by our nation. We are
  committed to dismantling systemic racism and all forms of oppression in
  order to build an inclusive, diverse and equitable future for all our
  relations."
- Contact email and Privacy contact: contact@the-tacc.org, from the old
  site. This replaces the email placeholder only.

## Speaking Engagements photos (About only)

In `public/speaking/`, converted to JPEG (quality 82, no crop, aspect kept):
- `speaking-patio.jpg` — "Speaking engagement — community dialogue, patio gathering"
- `speaking-closeup.jpg` — "Speaking engagement"
- `speaking-audience.jpg` — "Community members listening at a TCC gathering"
- `speaking-wild-goose.jpg` — "Speaking engagement at The Wild Goose Meeting House"
  (venue name is visible in the photo itself)
- No event names, dates, or speaker identity were invented. Photos appear
  only on /about, not on Home, Contact, Privacy, or Terms.

## Brand

- Lavender #B59DE1 — Primary, Trust / Healing / Growth
- Deep Purple #8A6BC9 — Accent, Strength / Wisdom / Transformation
- Gold #E8C37A — Secondary, Balance / Hope / Reconciliation
- Cream #FAF6EB — Background, Clarity / Peace / Openness
- Typography: Montserrat Bold (headlines), Montserrat Regular/Medium (body), via `next/font/google`
- Logos in `public/`, unaltered: `logo.png` (transparent, light backgrounds),
  `logo-white.png` (white, dark backgrounds). Do not stretch, recolor, or
  separate the leaves from the text.

## Contact form

The Contact page embeds the GoHighLevel form verbatim (form ID
`AGadoN9OYCkV9hokPKIo`, "Contact Page | TCC", height 1037). In JSX the
iframe `style` attribute is expressed as a React style object with identical
values (`width: 100%`, `height: 100%`, `border: none`, `border-radius: 8px`);
all `src`, `id`, and `data-*` attributes are unchanged.

## Placeholders — do not publish as final without replacing these

- Contact phone, street address (beyond Chicago, IL), and social links
  — marked `[Placeholder]` on Contact, Privacy, and Terms pages and in the footer.
  Contact email is now contact@the-tacc.org (old site), not a placeholder.
- Leadership Team titles, bios, and roles — only the supplied names and
  Facebook links are shown; no titles/bios were invented
- Privacy: other data practices (analytics/cookies/other channels), additional
  uses/sharing, retention period, privacy-request contact method
- Terms: governing law, dispute resolution, and any additional legal provisions
- No programs, events, donations, or testimonials were invented — none appear
  on the site

## Run / build

```bash
npm install
npm run build
npm start
```

## Vercel → GoHighLevel embed step (for later, NOT done in this build)

1. Deploy this project to Vercel (parent handles this step).
2. Take the Vercel site URL / embed code.
3. Place that embed into GoHighLevel (BlackWoman Startup subaccount, per
   parent instructions) as directed by the parent.
4. Verify the live GHL page renders the Vercel site and that the Contact page
   form still submits to GoHighLevel.

No deployment, GitHub push, or GoHighLevel edit was performed as part of this
build.
