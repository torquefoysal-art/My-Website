import { capabilities, method } from "@/lib/content";

export function Practice() {
  return (
    <section className="section practice" id="practice" aria-labelledby="practice-title">
      <div className="section-head">
        <p>02 — Practice</p>
        <h2 id="practice-title">Quiet work, carefully made.</h2>
      </div>
      <div className="practice-grid">
        <div className="practice-copy">
          <p className="statement">
            Most of the web is loud by habit. I work the other way. A page should explain itself, load cleanly, and still feel as if someone cared about the last detail.
          </p>
          <p>
            I am Foysal Islam, a web developer. I care about the join between design and engineering: the type, the motion, the markup, and the time it takes a page to become useful.
          </p>
          <p>
            The visual language here is geometric on purpose. No stock faces, no spectacle borrowed from somewhere else. Light, proportion, and a single object in the room.
          </p>
        </div>
        <ol className="method">
          {method.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <dl className="capabilities">
        {capabilities.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
