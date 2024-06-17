import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Form, useSubmit } from 'react-router-dom'
import { useTelegram } from '../../hooks/useTelegram'
import { ReactComponent as OpenIcon } from '../../assets/svg/filter/open.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/filter/close.svg'
import './Filter.scss'

const Filter = () => {
  const { showMainButton, hideMainButton, setupFiltersConfirmation } = useTelegram()
  const submit = useSubmit()
  const dialogRef = useRef()
  const formRef = useRef()

  useEffect(() => {
    const teardownFiltersConfirmation = setupFiltersConfirmation(submit, formRef.current)

    return () => {
      teardownFiltersConfirmation()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <button className="filter-button" onClick={() => {
        dialogRef.current.showModal()
        showMainButton()
      }}>
        <OpenIcon />
      </button>
      {createPortal(
        <dialog className="filter" ref={dialogRef}>
          <div className="filter__wrapper">
            <div className="filter__header">
              <span className="filter__title">Фильтры</span>
              <button className="filter__close-button" onClick={() => {
                  dialogRef.current.close()
                  hideMainButton()
                }}>
                <CloseIcon />
              </button>
            </div>
            <Form className="filter__form" method="get" action="/program/filters" ref={formRef}>
              <fieldset className="filter__group">
                <legend className="filter__group-title">Дни</legend>
                <div className="filter__switchers">
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="days" value="1" />
                    1 день
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="days" value="2" />
                    2 день
                  </label>
                </div>
              </fieldset>
              <fieldset className="filter__group">
                <legend className="filter__group-title">Залы</legend>
                <div className="filter__switchers">
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="halls" value="Зал 1" />
                    1
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="halls" value="Зал 2" />
                    2
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="halls" value="Зал 3" />
                    3
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="halls" value="Зал 4" />
                    4
                  </label>
                </div>
              </fieldset>
              <fieldset className="filter__group">
                <legend className="filter__group-title">Формат</legend>
                <div className="filter__switchers">
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="formats" value="Дискуссия" />
                    Дискуссия
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="formats" value="Доклад" />
                    Доклад
                  </label>
                  <label className="filter__switcher">
                    <input className="filter__switcher-checkbox" type="checkbox" name="formats" value="Киберстендап" />
                    Киберстендап
                  </label>
                </div>
              </fieldset>
            </Form>
          </div>
        </dialog>,
        document.getElementById('root')
      )}
    </>
  )
}

export default Filter
