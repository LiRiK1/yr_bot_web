import { useState, useCallback, useEffect } from 'react'
import { ReactComponent as StarIcon } from '../../assets/svg/favorites/star.svg'
import Card from '../../components/Card/Card'
import Stub from '../../components/Stub/Stub'
import './Favorites.scss'

const Favorites = () => {
  const [favoriteEvents, setFavoriteEvents] = useState(undefined)

  const loadEvents = useCallback(async () => {
    const favoriteEventsResponse = await fetch(`${window.API_URL}/get_user_events/${window.USER_ID}`, {
      headers: {
        'Authorization': window.AUTH_TOKEN
      }
    })

    if (favoriteEventsResponse.ok) {
      const favoriteEventsJson = await favoriteEventsResponse.json()

      if (favoriteEventsJson.length) {
        setFavoriteEvents(favoriteEventsJson)
      } else {
        setFavoriteEvents(null)
      }
    } else {
      alert(`Проблема связи с API. Статус получения избранных ивентов: ${favoriteEventsResponse.status}`)
    }
  }, [])

  useEffect(() => {
    loadEvents()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="favorites">
      <section className="favorites__header">
        <StarIcon />
        <h1 className="favorites__title">Избранное</h1>
      </section>
      <section className="favorites__events">
        {favoriteEvents ? favoriteEvents.map(event => (
          <Card key={event.id_events.id} event={event.id_events} saveState={true} />
        )) : favoriteEvents === null ? <Stub location={'favorites'} /> : null}
      </section>
    </main>
  )
}

export default Favorites
