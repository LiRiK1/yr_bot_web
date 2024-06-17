import FloorMapTemplate from './FloorMapTemplate/FloorMapTemplate'
import { ReactComponent as DefaultMap } from '../../assets/svg/map/first-floor/default-map.svg'
import { ReactComponent as Communication } from '../../assets/svg/map/first-floor/communication.svg'
import { ReactComponent as Lounge } from '../../assets/svg/map/first-floor/lounge.svg'
import { ReactComponent as Wardrobe } from '../../assets/svg/map/first-floor/wardrobe.svg'
import { ReactComponent as Registration } from '../../assets/svg/map/first-floor/registration.svg'
import { ReactComponent as Partners } from '../../assets/svg/map/first-floor/partners.svg'
import { ReactComponent as FoodCourt } from '../../assets/svg/map/first-floor/food-court.svg'

const defaultRoute = {
  map: DefaultMap,
  description: null,
  name: null,
  title: null
}

const routes = {
  registration: {
    map: Registration,
    description: 'Прямо напротив входа № 4 в здание конгресс-центра',
    name: 'registration',
    title: 'Регистрация'
  },
  wardrobe: {
    map: Wardrobe,
    description: 'Напротив стойки регистрации, слева от входа № 4 в здание конгресс-центра',
    name: 'wardrobe',
    title: 'Гардероб'
  },
  communication: {
    map: Communication,
    description: 'Слева от стойки регистрации. Здесь можно зарядить телефон и пообщаться за чашкой кофе',
    name: 'communication',
    title: 'Зона общения'
  },
  partners: {
    map: Partners,
    description: 'Находятся по периметру зоны общения, слева от стойки регистрации',
    name: 'partners',
    title: 'Партнеры'
  },
  lounge: {
    map: Lounge,
    description: 'Под эскалаторами, между стойкой регистрации и зоной общения',
    name: 'lounge',
    title: 'Лаундж-зона'
  },
  foodCourt: {
    map: FoodCourt,
    description: 'Точки питания расположены в молле. Пройдите к дальнему концу лаундж-зоны и выйдите через стеклянные двери. Справа от дверей — «Стейк&Бургер Мираторг», слева — остальные рестораны, например: столовая ЦМТ, ресторан «RFR Гриль», Plaza Garden Cafe',
    name: 'foodCourt',
    title: 'Где поесть'
  }
}

const FirstFloorMap = () => {
  return (
    <FloorMapTemplate defaultRoute={defaultRoute} routes={routes} />
  )
}

export default FirstFloorMap
