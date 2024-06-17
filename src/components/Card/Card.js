import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { saveEvent, removeEvent } from '../../helpers/event-actions'
import { ReactComponent as EmptyStarIcon } from '../../assets/svg/card/star.svg'
import { ReactComponent as SpeakerIcon } from '../../assets/svg/card/speaker.svg'
import { ReactComponent as CompanyIcon } from '../../assets/svg/card/company.svg'
import './Card.scss'

const Card = ({ event, saveState }) => {
  const { id, day, location, start_time, description, speaker, speaker_company } = event
  const [isSaved, setIsSaved] = useState(saveState)

  const formatTime = useCallback((startTime) => {
    return startTime.slice(0, 5)
  }, [])

  async function toggleFavorite(event) {
    event.preventDefault()

    if (!isSaved) {
      const response = await saveEvent(id)

      if (response.ok) {
        setIsSaved(true)
      }
    } else {
      const response = await removeEvent(id)

      if (response.ok) {
        setIsSaved(false)
      }
    }
  }

  const cardContent = (
    <div className="card__wrapper">
      <div className="card__info-container">
        <div className="card__meta">
          <span className="card__meta-item">День {day}</span>
          <span className="card__meta-item">{location}</span>
          <span className="card__meta-item">{formatTime(start_time)}</span>
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
      </div>
      {!saveState && (
        <button className="card__save-button" onClick={(event) => toggleFavorite(event)} data-saved={isSaved ? true : false}>
          <EmptyStarIcon />
          {isSaved ? 'В избранном' : 'В избранное'}
        </button>
      )}
    </div>
  )

  return (
    <Link to={String(id)} state={{ event, isSaved }} className="card">
      {cardContent}
    </Link>
  )
}

export default Card
