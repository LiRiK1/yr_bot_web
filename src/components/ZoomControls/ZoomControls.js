import { useCallback, useEffect, useRef } from 'react'
import { ReactComponent as PlusIcon } from '../../assets/svg/map/zoom-controls/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/svg/map/zoom-controls/minus.svg'
import './ZoomControls.scss'

const ZoomControls = ({ routeMap }) => {
  let map = useRef(null)
  let scale = 1

  const findMap = useCallback(() => {
    return document.querySelector('.route__map-wrapper > svg')
  }, [])

  useEffect(() => {
    map.current = findMap()
  }, [routeMap, findMap])

  const zoomIn = () => {
    scale += 0.3

    map.current.style.transform = `scale(${scale})`
  }

  const zoomOut = () => {
    if (!(scale <= 1)) {
      scale -= 0.3

      map.current.style.transform = `scale(${scale})`
    }
  }

  return (
    <div className="zoom-controls">
      <button className="zoom-controls__item" onClick={() => zoomIn()}>
        <PlusIcon />
      </button>
      <button className="zoom-controls__item" onClick={() => zoomOut()}>
        <MinusIcon />
      </button>
    </div>
  )
}

export default ZoomControls
