import { Link, useRouteError } from 'react-router-dom'

// import Err from '../../assets/404.svg'
import { Button } from '../../components/ui/button'

import s from './error404.module.scss'

export default function Error404() {
  const error = useRouteError()

  console.error(error)

  return (
    <div className={s.error}>
      {/*<img src={Err} alt="404" />*/}
      <p>Sorry! Page not found!</p>
      <Button variant="primary" as={Link} to="/">
        Back to home page
      </Button>
    </div>
  )
}
