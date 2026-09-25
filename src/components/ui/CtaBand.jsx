import { contacts } from '../../content/site.js'
import Button from './Button.jsx'

/**
 * Повторяющийся блок с призывом записаться на пробное занятие.
 * Встречается в конце страниц, поэтому вынесен в отдельный компонент.
 */
export default function CtaBand({
  title = 'Запишитесь на пробное занятие',
  text = 'Напишите в удобный мессенджер – договоримся о времени и обсудим цель занятий',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2 className="cta-band__title">{title}</h2>
        <p className="cta-band__text">{text}</p>
        <div className="cta-band__actions">
          <Button
            href={contacts.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </Button>
          <Button
            href={contacts.channel.href}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Канал «Чай с мятой»
          </Button>
        </div>
      </div>
    </section>
  )
}
