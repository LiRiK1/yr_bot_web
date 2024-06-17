import { ReactComponent as FiltersStub } from '../../assets/svg/filters/stub.svg'
import { ReactComponent as FavoritesStub } from '../../assets/svg/favorites/stub.svg'
import './Stub.scss'

const Stub = ({ location }) => {
  return (
    <div className="stub">
      {location === 'filters' ? (
        <>
          <FiltersStub />
          <span className="stub__message">Результатов не найдено</span>
        </>
      ) : (
        <>
          <FavoritesStub />
          <span className="stub__message">Здесь пока ничего нет</span>
        </>
      )}
    </div>
  )
}

export default Stub
