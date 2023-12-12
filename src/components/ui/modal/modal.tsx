import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Close } from '../../../assets/icons/close'
import { Typography } from '../typography'

import s from './modal.module.scss'

type DialogsPropsType = {
  children: ReactNode
  open: boolean
  onClose?: () => void
  showCloseButton: boolean
  title: ReactNode
}

export const Modal = ({
  children,
  open = true,
  onClose,
  title,
  showCloseButton,
}: DialogsPropsType) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal className={s.root}>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.content}>
            {showCloseButton ? (
              <div className={s.modalHeader}>
                <Dialog.Title asChild>
                  <Typography as={'h2'} variant={'h2'}>
                    {title}
                  </Typography>
                </Dialog.Title>
                <Dialog.Close className={s.closeButtonContainer}>
                  <Close />
                </Dialog.Close>
              </div>
            ) : (
              <>
                <Dialog.Title className={s.singleTitle} asChild>
                  <Typography as={'h2'} variant={'large'}>
                    {title}
                  </Typography>
                </Dialog.Title>
              </>
            )}
            <div className={s.contentBox}>{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
