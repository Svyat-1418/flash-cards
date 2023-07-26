import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#E6AC39"
        d="M11.7 14a.67.67 0 0 1-.3-.07L8 12.15l-3.4 1.78a.67.67 0 0 1-.97-.7l.67-3.76L1.55 6.8a.67.67 0 0 1-.16-.67.67.67 0 0 1 .53-.45l3.8-.55L7.4 1.7a.67.67 0 0 1 1.2 0l1.7 3.4 3.8.57a.67.67 0 0 1 .53.46.67.67 0 0 1-.16.66l-2.75 2.67.67 3.75a.67.67 0 0 1-.27.67.67.67 0 0 1-.41.12zM8 10.73c.1 0 .21.03.3.08l2.52 1.33-.48-2.8a.67.67 0 0 1 .2-.6l2-1.95-2.8-.42A.67.67 0 0 1 9.25 6L8 3.5 6.74 6a.67.67 0 0 1-.5.36l-2.8.41 2 1.96a.67.67 0 0 1 .2.59l-.49 2.77 2.52-1.33c.1-.04.22-.05.33-.03z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const OutlinedStar = memo(ForwardRef)
