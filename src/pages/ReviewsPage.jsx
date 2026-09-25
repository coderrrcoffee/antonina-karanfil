import SectionHeading from '../components/ui/SectionHeading.jsx'
import ReviewCard from '../components/ui/ReviewCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { intros, results, reviews } from '../content/site.js'

export default function ReviewsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{intros.reviews.eyebrow}</p>
          <h1 className="page-header__title">{intros.reviews.title}</h1>
          <p className="page-header__intro">{intros.reviews.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <div className="stats">
            {results.stats.map((item) => (
              <div className="stat" key={item.label}>
                <div className="stat__value">{item.value}</div>
                <div className="stat__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading title="Что меняется после занятий" />
          </Reveal>
          <Reveal as="div" className="card-grid card-grid--three">
            {results.cases.map((item) => (
              <article className="case" key={item.title}>
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
            <SectionHeading title="Отзывы" />
          </Reveal>
          <Reveal as="div" className="reviews-grid">
            {reviews.map((review) => (
              <ReviewCard {...review} key={`${review.role}-${review.name}`} />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
