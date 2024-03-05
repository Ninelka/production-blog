import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import cls from './Dropdown.module.scss'
import popupCls from '../../styles/popup.module.scss'
import { type DropdownDirection } from '@/shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'

interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export function Dropdown (props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom right' } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button type={'button'} disabled={item.disabled} onClick={item.onClick} className={classNames(cls.item, { [popupCls.active]: active })}>{item.content}</button>
          )

          if (item.href) {
            return (
              <Menu.Item key={`dropdown-item-${index}`} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={`dropdown-item-${index}`} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
