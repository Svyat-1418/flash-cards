import { Typography } from '../typography'

import { ItemPerPage } from './item-per-page/item-per-page.tsx'
import s from './pagination.module.scss'

type PaginationPropsType = {
  pageCount?: number
  currentPage?: number
  onPageChange: (page: number) => void
  currentItemsValue?: string
  onChangeItemsValue: (value: string) => void
  className?: string
}

//todo исправить пагинацию при выборе предпоследней страницы
export const Pagination = ({
  currentPage = 1,
  pageCount = 30,
  onPageChange,
  currentItemsValue = '10',
  onChangeItemsValue,
  className,
}: PaginationPropsType) => {
  let pageArray: Array<number> = []

  if (currentPage <= 4) {
    if (pageCount >= 4) {
      for (let i = 1; i <= 5; i++) {
        pageArray.push(i)
      }
    }
    if (pageCount < 5) {
      pageArray = []
      for (let i = 1; i <= pageCount; i++) {
        pageArray.push(i)
      }
    }
  }

  if (currentPage >= 5) {
    if (currentPage < pageCount) {
      pageArray = [currentPage - 1, currentPage, currentPage + 1]
    }
    if (currentPage === pageCount) {
      pageArray = [currentPage - 2, currentPage - 1, currentPage]
    }
  }

  return (
    <div className={`${s.container} ${className ? className : ''}`}>
      <div className={s.pageList}>
        <button
          className={s.paginationButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {currentPage >= 5 && (
          <>
            <button className={s.paginationButton} onClick={() => onPageChange(1)}>
              1
            </button>{' '}
            <span>...</span>
          </>
        )}
        {pageArray.map(p => {
          const paginationButtonClassname = `${s.paginationButton} ${
            p === currentPage ? s.active : ''
          }`

          return (
            <button className={paginationButtonClassname} key={p} onClick={() => onPageChange(p)}>
              <Typography variant={'body2'}>{p}</Typography>
            </button>
          )
        })}
        {currentPage + 2 < pageCount && pageCount > 5 && <span>...</span>}
        {currentPage < pageCount - 1 && pageCount > 5 && (
          <button className={s.paginationButton} onClick={() => onPageChange(pageCount)}>
            {pageCount}
          </button>
        )}
        <button
          className={s.paginationButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          {'>'}
        </button>
        {/*<button className={s.paginationButton} onClick={() => onPageChange(pageCount)}>*/}
        {/*  {pageCount}*/}
        {/*</button>*/}
      </div>
      <ItemPerPage currentValue={currentItemsValue} onValueChange={onChangeItemsValue} />
    </div>
  )
}
