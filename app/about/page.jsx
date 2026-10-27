import Link from "next/link";

export const metadata = {
  title: "About | Truth & Conciliation Commission",
  description:
    "The purpose and mission of the Truth & Conciliation Commission, its three pillars, and its Leadership Team.",
};

export default function AboutPage() {
  return (
    <>
      <h1>About the Truth &amp; Conciliation Commission</h1>
      <p>
        We are people of the United States of America ready to hear, speak and
        live the truth about systemic racism embedded in the land, laws,
        culture, economy, and every institution developed by our nation. We are
        committed to dismantling systemic racism and all forms of oppression in
        order to build an inclusive, diverse and equitable future for all our
        relations.
      </p>
      <p>
        Birthed in the midst of the 2020 George Floyd racial unrest, the Truth
        and Conciliation Commission exists to deconstruct one of the most lethal
        sins of the United States of America — race and racism. Since its
        inception the Commission has worked to address a reckoning with the
        myths, policies, mechanisms, and institutions that undergird and
        perpetuate the impacts of race on human existence.
      </p>

      <section aria-labelledby="mission-heading">
        <h2 id="mission-heading">Purpose and Mission</h2>
        <p>
          America is sick. Filled with intractable divisions that are centuries
          old and never adequately addressed, we continue to live with the
          impacts of institutional and interpersonal racism every day. Through
          direct and indirect violence, prejudicial and discriminatory practices,
          the insufferable effects of racism cut short the lives, health, and
          well-being of people in and beyond America daily.
        </p>
        <p>
          The Truth and Conciliation Commission seeks to identify, examine and
          dismantle racism to build a more equitable, inclusive and
          justice-oriented society and world.
        </p>
      </section>

      <section aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <p>
          Partnering with area scholars and facilitation experts, the Commission
          will develop and distribute racial and social justice toolkits, books
          and other resource materials that allow individuals and communities to
          learn and explore historical and sustained institutional and
          interpersonal manifestations of racism and other forms of oppression
          in the U.S.
        </p>
        <p>
          The Commission will host local, state, regional and national dialogues,
          workshops, seminars and conventions that help individuals, communities,
          organizations and civic entities grow in the knowledge of anti-racism
          and anti-oppression work. National convenings will occur annually.
          However, local, state and regional activities will take place daily
          based on the needs of the individuals and communities involved, as the
          Commission&apos;s online presence (website and social media) are designed
          to be living learning hubs.
        </p>
      </section>

      <section aria-labelledby="storytelling-heading">
        <h2 id="storytelling-heading">Testimonials / Storytelling</h2>
        <p>
          Gathering and sharing personal and communal narratives are essential
          practices for truth telling. The Commission will encourage and create
          a platform for individuals, communities, organizations, and government
          entities to tell their stories as racialized beings impacted by the
          structure of racism and oppression in the U.S.
        </p>
        <p>
          Gathering and archiving narratives will be a daily and event-based
          activity. With all legal permissions observed, individual and communal
          narratives will be analyzed and utilized to engage in healing and
          restorative justice work to create interpersonal and institutional
          conciliatory outcomes.
        </p>
      </section>

      <section aria-labelledby="change-heading">
        <h2 id="change-heading">Transformational Change</h2>
        <p>
          The Commission aims to assist individuals, communities, institutions
          and organizations to arrive at conciliatory agreements and practices.
          Helping entities create covenants, policies and cultural practices that
          are inclusive, equitable and just in defiance of the histories and
          perpetuation of racism is the ultimate work of the Commission. This
          work will be on-going in perpetuity as long as the needs of individuals
          and partnering entities with the Commission exist.
        </p>
      </section>

      <section aria-labelledby="speaking-heading">
        <h2 id="speaking-heading">Speaking Engagements</h2>
        <p>
          Photos from Truth &amp; Conciliation Commission speaking engagements
          and community gatherings. No event names or dates are shown beyond
          what is visible in the photos themselves.
        </p>
        <div className="gallery-grid">
          <figure className="gallery-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaking/speaking-patio.jpg"
              alt="A speaker in a red dress speaking into a microphone at an outdoor patio gathering, with an audience seated nearby and a BLACK LIVES MATTER sign in the foreground"
            />
            <figcaption>Speaking engagement — community dialogue, patio gathering</figcaption>
          </figure>
          <figure className="gallery-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaking/speaking-closeup.jpg"
              alt="A speaker in a red dress speaking into a microphone at a speaking engagement"
            />
            <figcaption>Speaking engagement</figcaption>
          </figure>
          <figure className="gallery-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaking/speaking-audience.jpg"
              alt="Community members seated indoors, listening at a TCC gathering"
            />
            <figcaption>Community members listening at a TCC gathering</figcaption>
          </figure>
          <figure className="gallery-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaking/speaking-wild-goose.jpg"
              alt="A speaker in a red dress speaking into a microphone in front of signage for The Wild Goose Meeting House and Downtown Corner Store, with an audience seated in front"
            />
            <figcaption>Speaking engagement at The Wild Goose Meeting House</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="leadership-heading">
        <h2 id="leadership-heading">Leadership Team</h2>
        <div className="leadership">
          <article className="leader">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leadership/stephany-rose-spaulding.jpg"
              alt="Rev. Dr. Stephany Rose Spaulding"
            />
            <h3>Rev. Dr. Stephany Rose Spaulding</h3>
            <p>
              Rev. Dr. Stephany Rose Spaulding is the founder and director of
              the Truth and Conciliation Commission. She previously served as
              pastor of Ebenezer Baptist Church in Colorado Springs, and
              retired as a tenured associate professor and chair of
              Women&apos;s and Ethnic Studies at the University of Colorado,
              Colorado Springs, where she also previously served as Interim
              Vice Chancellor for Equity, Diversity, and Inclusion. With a
              B.A. and M.A. in Literature from Clark Atlanta University and
              Purdue University, respectively, as well as a Ph.D. in American
              Studies from Purdue University, she specializes in critical
              race and gender studies, English literature, and American
              popular culture. She is an interdisciplinary scholar and a
              social justice activist who produces generative scholarship
              that reaches far beyond the walls of academia and well into
              transformative ministry and community building.
            </p>
            <p>
              <a
                href="https://www.facebook.com/drstephanyrose"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/drstephanyrose
              </a>
            </p>
          </article>
          <article className="leader">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leadership/cori-bush-merritts.jpg"
              alt="Cori Bush-Merritts"
            />
            <h3>Cori Bush-Merritts</h3>
            <p>
              Cori Bush-Merritts is an American politician, nurse, pastor,
              and Black Lives Matter activist who served as the U.S.
              Representative for Missouri&apos;s 1st congressional district
              from 2021 to 2025, the first African-American woman to serve in
              the U.S. House of Representatives from Missouri. She became a
              political activist during the 2014 Ferguson unrest, where she
              worked as a triage nurse and organizer, and previously served
              as pastor of Kingdom Embassy International Church in St. Louis.
            </p>
            <p>
              <a
                href="https://www.facebook.com/cori4congress"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/cori4congress
              </a>
            </p>
          </article>
        </div>
      </section>

      <div className="cta-row">
        <Link href="/contact" className="button">Contact Us</Link>
      </div>
    </>
  );
}
