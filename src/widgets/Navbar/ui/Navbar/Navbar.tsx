import React, { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
		<div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonVariant.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>{t('Войти')}</Button>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dignissimos ducimus fugiat impedit ipsam laudantium modi nemo nihil, provident recusandae reiciendis, soluta ullam? At fugiat ipsam laudantium non quae.
          </Modal>
		</div>
  )
}
