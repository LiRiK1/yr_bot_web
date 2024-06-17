import FloorMapTemplate from './FloorMapTemplate/FloorMapTemplate'
import { ReactComponent as DefaultMap } from '../../assets/svg/map/second-floor/default-map.svg'
import { ReactComponent as Partners } from '../../assets/svg/map/second-floor/partners.svg'
import { ReactComponent as CyberBar } from '../../assets/svg/map/second-floor/cyber-bar.svg'
import { ReactComponent as PressRoom } from '../../assets/svg/map/second-floor/press-room.svg'
import { ReactComponent as Amphitheater } from '../../assets/svg/map/second-floor/amphitheater.svg'
import { ReactComponent as SecondHall } from '../../assets/svg/map/second-floor/second-hall.svg'
import { ReactComponent as FirstHall } from '../../assets/svg/map/second-floor/first-hall.svg'

const defaultRoute = {
  map: DefaultMap,
  description: null,
  name: null,
  title: null
}

const routes = {
  firstHall: {
    map: FirstHall,
    description: (
      <>
        Вход в зал № 1 — между стендами ГК «Солар» и Security Vision.
        <br />— От лестницы: поверните налево
        <br />— От эскалатора: пройдите прямо и поверните направо
      </>
    ),
    name: 'firstHall',
    title: '1 зал'
  },
  secondHall: {
    map: SecondHall,
    description: (
      <>
        Вход в зал № 2 — между стендами ГК «Солар» и «Сбера».
        <br />— От лестницы: пройдите прямо
        <br />— От эскалатора: поверните направо
      </>
    ),
    name: 'secondHall',
    title: '2 зал'
  },
  amphitheater: {
    map: Amphitheater,
    description: (
      <>
        Вход в амфитеатр — не доходя до стенда BI.Zone.
        <br />— От лестницы: идите направо, амфитеатр будет по правую руку
        <br />— От эскалатора: поверните налево, пройдите влево от лестницы
      </>
    ),
    name: 'amphitheater',
    title: 'Aмфитеатр'
  },
  pressRoom: {
    map: PressRoom,
    description: (
      <>
        Вход в пресс-зал— между стендами Jet и «Информзащиты».
        <br />— От лестницы: поверните налево, пройдите мимо кибербара
        <br />— От эскалатора: пройдите прямо мимо стендов ГК «Солар» и Security Vision
      </>
    ),
    name: 'pressRoom',
    title: 'Пресс-зал'
  },
  cyberBar: {
    map: CyberBar,
    description: (
      <>
        Находится за стендом Innostage.
        <br />— От лестницы: поверните налево
        <br />— От эскалатора: пройдите прямо
      </>
    ),
    name: 'cyberBar',
    title: 'Кибербар'
  },
  partners: {
    map: Partners,
    description: 'Рассредоточены по второму этажу. Партнёры проводят свои активности и демонстрации решений',
    name: 'partners',
    title: 'Партнеры'
  }
}

const SecondFloorMap = () => {
  return (
    <FloorMapTemplate defaultRoute={defaultRoute} routes={routes} />
  )
}

export default SecondFloorMap
