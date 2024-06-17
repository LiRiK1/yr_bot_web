import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram'
import Home from './routes/Home/Home'
import Program from './routes/Program/Program'
import Event from './components/Event/Event'
import Filters from './routes/Filters/Filters'
import Map from './routes/Map/Map'
import Favorites from './routes/Favorites/Favorites'
import './helpers/config'
import './index.scss'

const WebApp = () => {
  const { setupTheme, expandApp, setupMainButton } = useTelegram()

  setupTheme()

  useEffect(() => {
    expandApp()
    setupMainButton()
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'program',
      element: <Program />
    },
    {
      path: 'program/:eventId',
      element: <Event />
    },
    {
      path: 'program/filters',
      element: <Filters />,
      loader: async ({ request }) => {
        const { searchParams } = new URL(request.url)

        const days = searchParams.getAll('days')
        const locations = searchParams.getAll('halls')
        const formats = searchParams.getAll('formats')

        return { days, locations, formats }
      }
    },
    {
      path: 'program/filters/:eventId',
      element: <Event />
    },
    {
      path: 'favorites',
      element: <Favorites />
    },
    {
      path: 'favorites/:eventId',
      element: <Event />
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<WebApp />)
