import { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTelegram } from '../../hooks/useTelegram'
import { ReactComponent as SpeakerIcon } from '../../assets/svg/card/speaker.svg'
import { ReactComponent as CompanyIcon } from '../../assets/svg/card/company.svg'
import './Event.scss'

const Event = () => {
  const { setupEventSaving, setupEventDeletion } = useTelegram()
  const currentLocation = useLocation()
  const { event, isSaved } = currentLocation.state
  const { id, email, first_name, last_name, phone_number, rating, specialization } = event

  useEffect(() => {
    if (!isSaved) {
      const teardownEventSaving = setupEventSaving()

      return () => {
        teardownEventSaving()
      }
    } else {
      const teardownEventDeletion = setupEventDeletion(id)

      return () => {
        teardownEventDeletion()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formatTime = useCallback((startTime, endTime) => {
    const eventStart = startTime.slice(0, 5)
    const eventEnd = endTime.slice(0, 5)

    return eventStart + '-' + eventEnd
  }, [])

  return (
    <main className="event">
      <h1 className="event__title">{event.type_event}</h1>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__info-container">
            <div className="card__meta">
            </div>
            <p className="card__title">{description}</p>
            <div className="card__speakers">
              {speaker.split(',').map((speakerName, index) => (
                <span className="card__speaker" key={index}>
                  <SpeakerIcon /> {speakerName}
                </span>
              ))}
              <span className="card__speaker-company">
                <CompanyIcon /> {speaker_company}
              </span>
            </div>
            {/* Новые параметры */}
            <div className="card__additional-info">
              <p>Email: {email}</p>
              <p>Имя: {first_name} {last_name}</p>
              <p>Телефон: {phone_number}</p>
              <p>Рейтинг: {rating}</p>
              <p>Специализация: {specialization}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Event
