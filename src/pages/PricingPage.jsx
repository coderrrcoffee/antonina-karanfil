import Button from '../components/ui/Button.jsx'
import PriceCard from '../components/ui/PriceCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { intros, pricing } from '../content/site.js'

export default function PricingPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{intros.pricing.eyebrow}</p>
          <h1 className="page-header__title">{intros.pricing.title}</h1>
          <p className="page-header__intro">{intros.pricing.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="price-grid">
            {pricing.plans.map((plan) => (
              <PriceCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                unit={plan.unit}
                features={plan.features}
                featured={plan.featured}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col">
          <Reveal>
            <h2>{pricing.includesTitle}</h2>
            <ul className="check-list">
              {pricing.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2>{pricing.termsTitle}</h2>
            <ul className="check-list">
              {pricing.terms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="container section-actions">
          <Button to="/faq" variant="secondary">
            Частые вопросы об оплате и занятиях
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title={pricing.materialsTitle}
              intro={pricing.materialsText}
            />
          </Reveal>
          <div className="section-actions">
            <Button to="/materials" variant="secondary">
              Материалы для коллег
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
