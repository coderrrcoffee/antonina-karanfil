import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { intros, subjects, formats, steps, trial } from '../content/site.js'

export default function LessonsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{intros.lessons.eyebrow}</p>
          <h1 className="page-header__title">{intros.lessons.title}</h1>
          <p className="page-header__intro">{intros.lessons.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <SectionHeading title="Направления" />
          </Reveal>
          <Reveal as="div" className="card-grid">
            {subjects.map((subject, index) => (
              <article className="subject" key={subject.title}>
                <span className="subject__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{subject.title}</h3>
                <p>{subject.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="Как устроено занятие"
              intro="В каждом занятии есть разбор теории, практика и работа над ошибками"
            />
          </Reveal>
          <Reveal as="div" className="card-grid card-grid--three">
            {formats.map((formatItem) => (
              <article className="subject" key={formatItem.title}>
                <h3>{formatItem.title}</h3>
                <p>{formatItem.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading title="Как проходит работа" />
          </Reveal>
          <Reveal as="div" className="steps">
            {steps.map((step) => (
              <article className="step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col">
          <Reveal>
            <h2>{trial.title}</h2>
            <p>{trial.text}</p>
            <p className="muted">{trial.note}</p>
          </Reveal>
          <Reveal>
            <ul className="check-list">
              {trial.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
