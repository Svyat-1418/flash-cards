import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={6} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M7.998 4.5a.5.5 0 0 1-.82.384l-2.68-2.24-2.684 2.16a.5.5 0 0 1-.705-.075.5.5 0 0 1 .075-.73l3-2.415a.5.5 0 0 1 .635 0l3 2.5A.5.5 0 0 1 8 4.5Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
