import { useCallback, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getFilteredEvents } from '../../helpers/event-actions'
import Card from '../../components/Card/Card'
import Stub from '../../components/Stub/Stub'
import './Filters.scss'

const Filters = () => {
  const { days, locations, formats } = useLoaderData()
  const [filteredEvents, setFilteredEvents] = useState(undefined)

  const loadFilteredEvents = useCallback(async () => {
    const filteredEventsResponse = await getFilteredEvents(days, locations, formats)
    const userFavoritesResponse = await fetch(`${window.API_URL}/get_user_events/${window.USER_ID}`, {
      headers: {
        'Authorization': window.AUTH_TOKEN
      }
    })

    if (filteredEventsResponse.ok && userFavoritesResponse.ok) {
      const filteredEventsJson = await filteredEventsResponse.json()
      const userFavoritesJson = await userFavoritesResponse.json()

      if (filteredEventsJson.length) {
        if (userFavoritesJson.length) {
          const filteredEventsByFavorites = filteredEventsJson.filter(event => {
            return !userFavoritesJson.some(favorite => event.id === favorite.id_events.id)
          })

          setFilteredEvents(filteredEventsByFavorites)
        } else {
          setFilteredEvents(filteredEventsJson)
        }
      } else {
        setFilteredEvents(null)
      }
    } else {
      alert(`Проблема связи с API. Статус получения отфильтрованных ивентов: ${filteredEventsResponse.status}, избранных ивентов : ${userFavoritesResponse.status}`)
    }
  }, [days, locations, formats])


  useEffect(() => {
    loadFilteredEvents()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="filters">
      <section className="filters__header">
        <h1 className="filters__title">Фильтры</h1>
      </section>
      <section className="filters__events">
        {filteredEvents ? filteredEvents.map(event => (
          <Card key={event.id} event={event} saveState={false} />
        )) : filteredEvents === null ? <Stub location={'filters'} /> : null}
      </section>
    </main>
  )
}

export default Filters
