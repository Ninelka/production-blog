import { Suspense } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader'
import { Modal } from '@/shared/ui/Modal'

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
           <Suspense fallback={<Loader/>}>
             <LoginFormLazy />
           </Suspense>
        </Modal>
  )
}
