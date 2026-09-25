import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { intros, contacts, trial } from '../content/site.js'

export default function ContactPage() {
  const methods = [
    { title: 'Telegram', ...contacts.telegram },
    { title: 'Канал', ...contacts.channel },
    { title: 'Отзывы', ...contacts.reviews },
  ]

  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{intros.contact.eyebrow}</p>
          <h1 className="page-header__title">{intros.contact.title}</h1>
          <p className="page-header__intro">{intros.contact.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container contact-grid">
          <Reveal>
            <h2>Как связаться</h2>
            <div className="contact-methods">
              {methods.map((method) => (
                <div className="contact-method" key={method.title}>
                  <span className="contact-method__label">{method.title}</span>
                  <a
                    className="contact-method__value"
                    href={method.href}
                    {...(method.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {method.label}
                  </a>
                </div>
              ))}
            </div>
            <p className="muted space-top">{contacts.hours}</p>
          </Reveal>

          <Reveal>
            <h2>{trial.title}</h2>
            <p>{trial.text}</p>
            <ul className="check-list">
              {trial.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="muted space-top">{trial.note}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
