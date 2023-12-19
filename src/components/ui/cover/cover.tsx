import s from './cover.module.scss'

type CoverPropsType = {
  as?: 'background' | 'image'
  src: string
  className?: string
}
export const Cover = ({ as = 'background', src, className }: CoverPropsType) => {
  return as === 'background' ? (
    <div
      className={`${s.cover} ${s.backgroundCover} ${className ? className : ''}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  ) : (
    <img src={src} alt="cover" className={s.cover} />
  )
}
