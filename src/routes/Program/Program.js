import { useTelegram } from '../../hooks/useTelegram'
import { useState, useCallback, useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import './Program.scss'

const Program = () => {
  const { tg } = useTelegram()
  const [events, setEvents] = useState(undefined)

  const loadEvents = useCallback(async () => {
    const allEventsResponse = await fetch(`${window.API_URL}/backend/api/juristlist/`)
    const userFavoritesResponse = await fetch(`${window.API_URL}/backend/api/get_user_jurist/${window.USER_ID}`, {
      headers: {
        'Authorization': window.AUTH_TOKEN
      }
    })
    

    if (allEventsResponse.ok && userFavoritesResponse.ok) {
      const allEventsJson = await allEventsResponse.json()
      const userFavoritesJson = await userFavoritesResponse.json()
      console.log(allEventsJson,'allEventsJson')
      

       
    } else {
      alert(`Проблема связи с API. Статус получения всех ивентов: ${allEventsResponse.status}, избранных: ${userFavoritesResponse.status}`)
    }
  }, [])

  useEffect(() => {
    loadEvents()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="program">
      <section className="program__header">
        <h1 className="program__title">Юристы</h1>
        <Filter />
      </section>      
      <section className="program__events">
        {events && events.map(event => (
          <Card key={event.id} event={event} saveState={false} />
        ))}
      </section>
    </main>
  )
}

export default Program
