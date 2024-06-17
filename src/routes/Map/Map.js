import { useState } from 'react'
import FirstFloorMap from '../../components/MapFloors/FirstFloorMap'
import SecondFloorMap from '../../components/MapFloors/SecondFloorMap'
import ClubFloor from '../../components/MapFloors/ClubFloor/ClubFloor'
import './Map.scss'

const Map = () => {
  const [map, setMap] = useState({
    content: <FirstFloorMap />,
    floor: 1
  })

  const getSelectedFloor = (buttonFloor) => {
    return map.floor === buttonFloor ? 'map__floors-switcher selected': 'map__floors-switcher'
  }

  const switchMap = (newMap) => {
    if (map.floor !== newMap.floor) setMap(newMap)
  }

  return (
    <main className="map">
      <section className="map__floors">
        <nav className="map__floors-navigation">
          <ul className="map__floors-list">
            <li className="map__floors-item">
              <button className={getSelectedFloor(1)} onClick={() => {switchMap({content: <FirstFloorMap />, floor: 1})}}>1 этаж</button>
            </li>
            <li className="map__floors-item">
              <button className={getSelectedFloor(2)} onClick={() => {switchMap({content: <SecondFloorMap />, floor: 2})}}>2 этаж</button>
            </li>
            <li className="map__floors-item">
              <button className={getSelectedFloor('club')} onClick={() => {switchMap({content: <ClubFloor />, floor: 'club'})}}>Клубный этаж</button>
            </li>
          </ul>
        </nav>
      </section>
      <section className="map__content">
        {map.content}
      </section>
    </main>
  )
}

export default Map
