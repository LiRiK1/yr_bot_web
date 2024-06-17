import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTelegram } from '../../hooks/useTelegram'
import { ReactComponent as ProgramIcon } from '../../assets/svg/home/program.svg'
import { ReactComponent as MapIcon } from '../../assets/svg/home/map.svg'
import { ReactComponent as FavoritesIcon } from '../../assets/svg/home/favorites.svg'
import './Home.scss'

const Home = () => {
  window.navigateFunction = useNavigate()
  const { showBackButton, hideBackButton } = useTelegram()

  useEffect(() => {
    hideBackButton()

    return () => {
      showBackButton()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="home">
      <nav className="home__navigation">
        <ul className="home__navigation-list">
          <li>
            <Link to={'program'} className="home__navigation-link">
              <span>Юристы</span>
              <ProgramIcon />
            </Link>
          </li>          
          <li>
            <Link to={'favorites'} className="home__navigation-link">
              <span>Избранное</span>
              <FavoritesIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Home
