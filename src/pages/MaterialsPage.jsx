import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { materials, contacts } from '../content/site.js'

export default function MaterialsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{materials.eyebrow}</p>
          <h1 className="page-header__title">{materials.title}</h1>
          <p className="page-header__intro">{materials.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <SectionHeading title={materials.categoriesTitle} />
          </Reveal>
          <Reveal as="div" className="card-grid">
            {materials.categories.map((category) => (
              <article className="subject" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              title={materials.itemsTitle}
              intro={materials.note}
            />
          </Reveal>
          <Reveal as="div" className="materials-list">
            {materials.items.map((item, index) => (
              <article className="material" key={`${index}-${item.tag}`}>
                <span className="material__tag">{item.tag}</span>
                <h3 className="material__title">{item.title}</h3>
                <span className="material__price">{item.price}</span>
              </article>
            ))}
          </Reveal>
          <div className="section-actions">
            <Button
              href={contacts.paid.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Смотреть #платныйчай в Telegram
            </Button>
          </div>
        </div>
      </section>

      <CtaBand title={materials.ctaTitle} text={materials.ctaText} />
    </>
  )
}
