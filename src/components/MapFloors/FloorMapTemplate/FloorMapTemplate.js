import { useState } from 'react'
import ZoomControls from '../../ZoomControls/ZoomControls'
import './FloorMapTemplate.scss'

const FloorMapTemplate = ({ defaultRoute, routes }) => {
  const [route, setRoute] = useState(defaultRoute)

  const getSelectedRoute = (buttonRoute) => {
    return route.name === buttonRoute ? 'route__button selected': 'route__button'
  }

  const switchRoute = (newRoute) => {
    setRoute(route.name === newRoute.name ? defaultRoute : newRoute)
  }

  const routeButtons = Object.values(routes).map(route => (
    <li key={route.name} className="route__list-item">
      <button className={getSelectedRoute(route.name)} onClick={() => switchRoute(route)}>
        {route.title}
      </button>
    </li>
  ))

  return (
    <div className="route">
      <div className="route__map">
        <div className="route__map-wrapper">
          <route.map />
        </div>
        <ZoomControls routeMap={route.map} />
      </div>
      <nav className="route__navigation">
        <ul className="route__list">
          {routeButtons}
        </ul>
      </nav>
      <p className="route__description">{route.description}</p>
    </div>
  )
}

export default FloorMapTemplate
