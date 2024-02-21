import { Meta } from '@storybook/react'

import { Button } from '../button'
import { Typography } from '../typography'

import { Modal } from './'

export default {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export const Default = {
  args: {
    open: true,
    title: <>Some Title</>,
    showCloseButton: true,
    children: (
      <>
        <Typography variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus ducimus et
          nisi odio officia pariatur provident? Aspernatur debitis deleniti doloribus eligendi
          minima nam, nemo optio rem similique tempora vero.
        </Typography>
        <Button fullWidth>Save</Button>
      </>
    ),
  },
}
