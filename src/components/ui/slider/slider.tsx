import * as Slider from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  label?: string
  max: number
  min: number
  step: number
  rangeValue: number[]
  disabled?: boolean
  setSliderRangeValues: (value: number[]) => void
  setSliderValues: (value: number[]) => void
  resetCurrentPage: (page: number) => void
}

export const SliderRange = ({
  min,
  max,
  step,
  rangeValue,
  label,
  setSliderRangeValues,
  setSliderValues,
  resetCurrentPage,
}: SliderPropsType) => {
  const onValueCommitHandle = () => {
    resetCurrentPage(1)
    setSliderValues(rangeValue)
  }

  return (
    <div>
      <Typography variant={'body2'} className={s.label}>
        {label}
      </Typography>
      <div className={s.container}>
        <div>
          <Typography variant={'body1'} className={s.value}>
            {rangeValue[0]}
          </Typography>
        </div>

        <Slider.Root
          className={s.root}
          defaultValue={rangeValue}
          value={rangeValue}
          max={max}
          min={min}
          step={step}
          onValueChange={e => setSliderRangeValues(e)}
          onValueCommit={onValueCommitHandle}
        >
          <Slider.Track className={s.track}>
            <Slider.Range className={s.range} />
          </Slider.Track>
          <Slider.Thumb className={s.thumb} aria-label="range1" />
          <Slider.Thumb className={s.thumb} aria-label="range2" />
        </Slider.Root>
        <div>
          <Typography variant={'body1'} className={s.value}>
            {rangeValue[1]}
          </Typography>
        </div>
      </div>
    </div>
  )
}
