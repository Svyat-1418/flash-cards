import { Link, useRouteError } from 'react-router-dom'

import s from './error404.module.scss'

import { Error404 } from '@/shared/assets/icons/error404'
import { Button } from '@/shared/ui-kit/button'

export const Error404Page = () => {
  const error = useRouteError()

  console.error(error)

  return (
    <div className={s.error}>
      <Error404 />
      <p>Sorry! Page not found!</p>
      <Button variant="primary" as={Link} to="/">
        Back to home page
      </Button>
    </div>
  )
}
