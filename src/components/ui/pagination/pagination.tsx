import { Typography } from '../typography'

import s from './pagination.module.scss'

type PaginationPropsType = {
  pageCount?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage = 1,
  pageCount = 30,
  onPageChange,
}: PaginationPropsType) => {
  let pageArray: Array<number> = []

  if (currentPage <= 4) {
    if (pageCount >= 4) {
      for (let i = 1; i <= 5; i++) {
        pageArray.push(i)
      }
    }
    if (pageCount < 5) {
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
      {currentPage + 1 < pageCount && pageCount > 5 && <span>...</span>}
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
  )
}
