import Button from '../ui/Button.jsx'
import Photo from '../ui/Photo.jsx'
import { hero, trial, contacts, tutor } from '../../content/site.js'
import brandLogo from '../../assets/brand/avatar.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <Button
              href={contacts.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta}
            </Button>
            <Button to="/lessons" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="hero__note">{trial.note}</p>
          <p className="hero__brand">
            <img
              className="hero__brand-logo"
              src={brandLogo}
              alt=""
              width="36"
              height="36"
              loading="lazy"
            />
            <span>Автор блога методических материалов «{tutor.brand}»</span>
          </p>
        </div>

        <div className="hero__media">
          <Photo
            alt="Фото"
            className="hero__photo"
            ratio="4 / 5"
          />
        </div>
      </div>
    </section>
  )
}
