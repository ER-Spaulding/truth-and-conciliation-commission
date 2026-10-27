import Link from "next/link";

export const metadata = {
  title: "Home | Truth & Conciliation Commission",
  description:
    "Birthed in the midst of the 2020 George Floyd racial unrest, the Truth & Conciliation Commission exists to identify, examine and dismantle racism.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading">Tell the Truth</h1>
        <p>Are you ready to tell and hear the truth?</p>
        <p>
          The Truth &amp; Conciliation Commission — birthed in the midst of the
          2020 George Floyd racial unrest — exists to deconstruct one of the
          most lethal sins of the United States of America — race and racism.
        </p>
        <div className="cta-row">
          <Link href="/about" className="button">Learn About Our Work</Link>
          <Link href="/contact" className="button secondary">Contact Us</Link>
        </div>
      </section>

      <section aria-labelledby="acknowledge-heading">
        <h2 id="acknowledge-heading">Acknowledge</h2>
        <p>
          America is sick. Filled with intractable divisions that are centuries
          old and never adequately addressed, we continue to live with the
          impacts of institutional and interpersonal racism every day. Through
          direct and indirect violence, prejudicial and discriminatory practices,
          the insufferable effects of racism cut short the lives, health, and
          well-being of people in and beyond America daily.
        </p>
        <p>
          Since its inception, the Commission has worked to address a reckoning
          with the myths, policies, mechanisms, and institutions that undergird
          and perpetuate the impacts of race on human existence.
        </p>
        <p>
          The Truth and Conciliation Commission seeks to identify, examine and
          dismantle racism to build a more equitable, inclusive and
          justice-oriented society and world.
        </p>
      </section>

      <section aria-labelledby="investigate-heading">
        <h2 id="investigate-heading">Investigate</h2>
        <p>
          Through educational workshop facilitation, testimonial/storytelling,
          and transformational change we uncover, examine and redress the
          historic and sustained acts and pillars of structural and systemic
          racism in order to create a process of truth and conciliation at
          local, institutional and structural levels.
        </p>
      </section>

      <section aria-labelledby="develop-heading">
        <h2 id="develop-heading">Develop</h2>
        <p>
          The Truth &amp; Conciliation Commission aims to assist individuals,
          communities, institutions and organizations to arrive at conciliatory
          agreements and practices. Helping entities create covenants, policies
          and cultural practices that are inclusive, equitable and just in
          defiance of the histories and perpetuation of racism is the ultimate
          work of the Commission.
        </p>
      </section>

      <section aria-labelledby="pillars-heading">
        <h2 id="pillars-heading">How We Do This Work</h2>
        <div className="pillar-grid">
          <article className="pillar">
            <h3>Education</h3>
            <p>
              Developing and distributing racial and social justice toolkits,
              books, and resource materials, and hosting dialogues, workshops,
              seminars, and conventions that grow knowledge of anti-racism and
              anti-oppression work.
            </p>
            <Link href="/about">More about Education</Link>
          </article>
          <article className="pillar">
            <h3>Testimonials / Storytelling</h3>
            <p>
              Gathering and sharing personal and communal narratives as essential
              practices for truth-telling — and using them, with all legal
              permissions observed, for healing and restorative justice work.
            </p>
            <Link href="/about">More about Storytelling</Link>
          </article>
          <article className="pillar">
            <h3>Transformational Change</h3>
            <p>
              Helping individuals, communities, institutions, and organizations
              arrive at conciliatory agreements and practices — covenants,
              policies, and cultural practices that are inclusive, equitable,
              and just.
            </p>
            <Link href="/about">More about Transformational Change</Link>
          </article>
        </div>
        <div className="cta-row">
          <Link href="/about" className="button secondary-dark">About the Commission</Link>
          <Link href="/contact" className="button">Contact Us</Link>
        </div>
      </section>

      <p>
        The Truth and Conciliation Commission is a federally registered
        501(c)3.
      </p>
    </>
  );
}
