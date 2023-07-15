import ArrowSort from '../../../../assets/icons/arrow-sort.tsx'
import ArrowDoubleSort from '../../../../assets/icons/PacksControlIcons/arrow-duble-sort.tsx'
import { Table } from '../../../ui/table'
import { Typography } from '../../../ui/typography'
import { ColumnType, SortType } from '../table-packs.tsx'

import s from './table.header.module.scss'

type TableHeaderPropsType = {
  columns: ColumnType[]
  sort?: SortType
  onSort?: (sort: SortType) => void
}
export const TableHeader = ({ columns, onSort, sort }: TableHeaderPropsType) => {
  //todo добавить data атрибуты, сделать компонент более кастомизированным пропсами(сортировка для отдельных полей)
  const handleSorting = (key: string) => {
    if (key !== sort?.key) {
      onSort && onSort({ key, direction: 'asc' })

      return
    }
    if (key === sort.key) {
      if (sort.direction === 'asc') {
        return onSort && onSort({ key, direction: 'desc' })
      }
      if (sort.direction === 'desc') {
        return onSort && onSort(null)
      }
    }
  }
  const sortingToggle = (title: string) => {
    if (sort?.key === title) {
      switch (sort?.direction) {
        case 'asc':
          return (
            <div className={s.iconContainer}>
              <ArrowSort />
            </div>
          )
        case 'desc':
          return (
            <div className={`${s.iconContainer} ${s.sortToggleDown}`}>
              <ArrowSort />
            </div>
          )
      }
    } else {
      if (sort === undefined) {
        return
      }

      return (
        <div className={s.iconContainer}>
          <ArrowDoubleSort />
        </div>
      )
    }
  }
  const theadRender = columns.map((el, i) => {
    if (i !== columns.length - 1) {
      return (
        <Table.HeadCell key={el.key}>
          <div className={s.titleSort} onClick={() => handleSorting(el.key)}>
            <Typography variant={'subtitle2'}>{el.title}</Typography>
            {sortingToggle(el.key)}
          </div>
        </Table.HeadCell>
      )
    } else {
      return (
        <Table.HeadCell key={el.key} colSpan={2}>
          <div className={s.titleSort} onClick={() => handleSorting(el.key)}>
            <Typography variant={'subtitle2'}>{el.title}</Typography>
            {sortingToggle(el.key)}
          </div>
        </Table.HeadCell>
      )
    }
  })

  return (
    <Table.Head>
      <Table.Row>{theadRender}</Table.Row>
    </Table.Head>
  )
}
