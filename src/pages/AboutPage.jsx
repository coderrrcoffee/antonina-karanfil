import Photo from '../components/ui/Photo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { about } from '../content/site.js'

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1 className="page-header__title">{about.title}</h1>
          <p className="page-header__intro">{about.lead}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container about-grid">
          <Photo
            alt="Фото"
            className="about-photo"
          />
          <Reveal>
            <h2>{about.storyTitle}</h2>
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading title={about.credentialsTitle} />
          </Reveal>
          <Reveal>
            <ul className="check-list check-list--wide">
              {about.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title={about.educationTitle}
              intro="Здесь можно указать образование – данные уже есть в вашем профиле в Core"
            />
          </Reveal>
          <Reveal as="div" className="card-grid card-grid--three">
            {about.education.map((item) => (
              <article className="subject" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading title={about.careerTitle} />
          </Reveal>
          <Reveal as="div" className="timeline">
            {about.career.map((item, index) => (
              <article className="timeline__item" key={`${index}-${item.title}`}>
                <span className="timeline__period">{item.period}</span>
                <div className="timeline__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading title={about.principlesTitle} />
          </Reveal>
          <Reveal as="div" className="card-grid">
            {about.principles.map((principle) => (
              <article className="subject" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
