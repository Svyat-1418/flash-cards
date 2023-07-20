import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={10} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M1.002 6.5a.5.5 0 0 1 .82-.384l2.68 2.24 2.684-2.16a.5.5 0 0 1 .705.075.5.5 0 0 1-.075.73l-3 2.415a.5.5 0 0 1-.635 0l-3-2.5A.5.5 0 0 1 1 6.5Z"
      />
    </g>
    <path
      fill="#fff"
      d="M7.998 4.5a.5.5 0 0 1-.82.384l-2.68-2.24-2.684 2.16a.5.5 0 0 1-.705-.075.5.5 0 0 1 .075-.73l3-2.415a.5.5 0 0 1 .635 0l3 2.5A.5.5 0 0 1 8 4.5Z"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M9 11H0V5h9z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowDoubleSort = memo(ForwardRef)
