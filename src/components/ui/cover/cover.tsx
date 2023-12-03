import s from './cover.module.scss'

type CoverPropsType = {
  src: string
  className?: string
}
export const Cover = ({ src, className }: CoverPropsType) => {
  return (
    <div
      className={`${s.cover} ${className ? className : ''}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}
