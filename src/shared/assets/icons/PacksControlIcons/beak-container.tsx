import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={205} height={10} fill="none" ref={ref} {...props}>
    <path fill="#333" d="M189 8h16l-8-8-8 8Z" />
    <path fill="#171717" d="M189 9.5h16l-8-8-8 8Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
