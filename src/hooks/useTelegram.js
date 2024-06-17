import { saveEvent, removeEvent } from '../helpers/event-actions'
import { goBack } from '../helpers/go-back'

const tg = window.Telegram.WebApp

export function useTelegram() {
  const setupTheme = () => {
    const setColorScheme = () => {
      const root = document.documentElement

      tg.colorScheme === 'dark'
        ? root.setAttribute('data-theme', 'dark')
        : root.removeAttribute('data-theme')
    }

    setColorScheme()

    tg.onEvent('themeChanged', setColorScheme)
  }

  const expandApp = () => {
    tg.expand()
    tg.ready()
  }

  const setupMainButton = () => {
    tg.MainButton.setParams({
      color: '#80D6FF',
      text_color: '#2B323A'
    })
  }

  const showMainButton = () => {
    if (!tg.MainButton.isVisible) {
      tg.MainButton.show()
    }
  }

  const hideMainButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    }
  }

  const setupEventSaving = (eventId) => {
    const clickHandler = async () => {
      const response = await saveEvent(eventId)

      if (response.ok) {
        hideMainButton()
      }
    }

    tg.MainButton.onClick(clickHandler)
    tg.MainButton.setText('Добавить в избранное')

    showMainButton()

    const teardownEventSaving = () => {
      tg.MainButton.offClick(clickHandler)

      hideMainButton()
    }

    return teardownEventSaving
  }

  const setupEventDeletion = (eventId) => {
    const clickHandler = async () => {
      const response = await removeEvent(eventId)

      if (response.ok) {
        hideMainButton()
        window.navigateFunction(-1)
      }
    }

    tg.MainButton.onClick(clickHandler)
    tg.MainButton.setText('Удалить')

    showMainButton()

    const teardownEventDeletion = () => {
      tg.MainButton.offClick(clickHandler)

      hideMainButton()
    }

    return teardownEventDeletion
  }

  const setupFiltersConfirmation = (submit, form) => {
    const confirmFilters = () => {
      submit(form)
    }

    tg.MainButton.onClick(confirmFilters)
    tg.MainButton.setText('Применить')

    const teardownFiltersConfirmation = () => {
      tg.MainButton.offClick(confirmFilters)

      hideMainButton()
    }

    return teardownFiltersConfirmation
  }

  const showBackButton = () => {
    if (!tg.BackButton.isVisible) {
      tg.BackButton.show()
      tg.BackButton.onClick(goBack)
    }
  }

  const hideBackButton = () => {
    if (tg.BackButton.isVisible) {
      tg.BackButton.hide()
      tg.BackButton.offClick(goBack)
    }
  }

  return {
    tg,
    setupTheme,
    expandApp,
    setupMainButton,
    showMainButton,
    hideMainButton,
    setupEventSaving,
    setupEventDeletion,
    setupFiltersConfirmation,
    showBackButton,
    hideBackButton,
    user: tg.initDataUnsafe?.user
  }
}
