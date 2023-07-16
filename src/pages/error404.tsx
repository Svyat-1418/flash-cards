import { useRouteError } from 'react-router-dom'

export default function Error404() {
  const error = useRouteError()

  console.error(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}
