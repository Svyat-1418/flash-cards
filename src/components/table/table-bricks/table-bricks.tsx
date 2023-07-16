import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

// eslint-disable-next-line import/no-unresolved
import { Typography } from '../../ui/typography'

import s from './table-bricks.module.scss'

export type RootProps = ComponentPropsWithoutRef<'table'>
export type HeadProps = ComponentPropsWithoutRef<'thead'>
export type BodyProps = ComponentPropsWithoutRef<'tbody'>
export type RowProps = ComponentPropsWithoutRef<'tr'>
export type HeadCellProps = ComponentPropsWithoutRef<'th'>
export type CellProps = ComponentPropsWithoutRef<'td'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export const Head: FC<HeadProps> = ({ className, ...rest }) => {
  const classNames = {
    tableHead: clsx(className, s.tableHead),
  }

  return <thead className={classNames.tableHead} {...rest} />
}

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return <th className={classNames.headCell} {...rest} />
}

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography
      variant={'h2'}
      className={classNames.empty}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      There is no data here yet! :(
    </Typography>
  )
}

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
