import { ReactNode } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import s from './dialog.module.scss'

type RootPropsType = {
  children: ReactNode
  trigger: ReactNode
  open: boolean
  onClose: () => void
}

const Root = ({ children, trigger, open, onClose }: RootPropsType) => {
  const onCangeHandler = () => {
    onClose()
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={onCangeHandler}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={s.overlay}>
          <AlertDialog.Content>{children}</AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

const Title = (title: ReactNode, isClosing?: boolean) => {
  return (
    <>
      <AlertDialog.Title asChild>{title}</AlertDialog.Title>
      {isClosing && <AlertDialog.Cancel>X</AlertDialog.Cancel>}
    </>
  )
}
const Action = (children: ReactNode) => {
  return (
    <>
      <AlertDialog.Action asChild>{children}</AlertDialog.Action>
    </>
  )
}

export const Dialogs = {
  Root,
  Title,
  Action,
}
