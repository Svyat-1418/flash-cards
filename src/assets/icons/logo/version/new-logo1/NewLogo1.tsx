import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={174} height={40} ref={ref} {...props}>
    <path
      d="M61.398 6.223v.222h.223v.223h-.223c0 .094.004.191.004.289.008.91-.03 1.805-.113 2.711h-.223c0 .078.004.156.004.234.008.637-.02 1.246-.113 1.875.105-.054.207-.109.316-.168.348-.164.348-.164.57-.164v-.222c.208-.075.419-.145.63-.215.117-.04.234-.082.355-.121 1.34-.422 3.059-.422 4.332.222.04.114.074.223.113.336h.223c.035.145.07.293.11.446h.222v.441h.219a21.3 21.3 0 0 1 0 3.668h-.219v.89h-.223v2.887c.582.196 1.168.2 1.774.114.383-.215.68-.477.996-.782a5.85 5.85 0 0 0 .223-.109c.074-.336.074-.336.109-.668h.223v-.441c.433-.293.824-.25 1.332-.223.07.035.144.07.218.11v.667h-.218c-.04.254-.075.512-.114.778h-.222c-.035.218-.07.441-.11.668h-.222c-.031.082-.063.164-.098.25-.039.097-.082.199-.121.304a4.747 4.747 0 0 0-.098.25c-.125.196-.125.196-.359.278-.07.007-.14.02-.211.027l-.031.203c-.149.469-.551.68-.965.906-.918.364-1.79.52-2.77.446v.222h-.668v-.222l-.433.023c-.645 0-1.211-.18-1.781-.469v-.332l-.555-.222c-.035-.254-.074-.512-.11-.778h-.222v-3.109h.223c-.004-.074-.004-.148-.004-.227-.008-.746.035-1.476.113-2.218h.223v-1.114h-.223c-.035-.218-.074-.437-.11-.664-.714-.285-1.261-.175-1.996 0-.035.145-.074.293-.109.446h-.223c-.035.109-.074.218-.109.332h-.223c-.039.367-.074.734-.113 1.109h-.219c.004.219.004.219.004.438.004.152.004.3-.004.453-.039.035-.074.074-.113.109-.008.207-.008.414-.004.621v.34c.004.086.004.172.004.262h-.219v1.222h-.222c0 .09.004.18.004.27.007.844-.032 1.672-.118 2.508h-.218c0 .101 0 .203.004.308 0 .2 0 .2.003.403 0 .195 0 .195.004.398-.011.336-.011.336-.125.559-.691.152-1.398.12-2.105.109v.223c-.383.023-.766.043-1.149.062-.109.008-.218.012-.332.02-.101.004-.207.011-.316.015-.094.008-.191.012-.29.016-.241 0-.241 0-.46-.113-.016-.785.016-1.551.11-2.332h.222v-.446c-.184.075-.367.149-.555.223v.223c-.16.093-.324.183-.484.277-.09.05-.18.102-.273.156-.239.121-.239.121-.461.121V22c-.16.094-.325.188-.485.277-.09.051-.18.106-.273.157-.239.12-.239.12-.461.12-.04.11-.074.223-.113.337A5.336 5.336 0 0 1 48.984 24v.223c-.664.144-1.324.129-2 .125h-1.027a4.87 4.87 0 0 1-.852-.125V24c-.066-.012-.132-.027-.199-.04-.133-.03-.133-.03-.27-.058l-.265-.054a2.529 2.529 0 0 1-.703-.293c-.04-.075-.074-.145-.113-.223-.282-.07-.282-.07-.555-.11v.333c-.34.265-.727.46-1.105.668-.079.047-.157.09-.239.136-.539.301-1.031.391-1.648.418V25H37.46v-.223c-.098-.007-.2-.011-.3-.02-.454-.112-.622-.288-.919-.648-.039-.109-.074-.218-.113-.332-.11-.035-.219-.074-.332-.109v-.336h-.223v.223l-.55.445c-.079.098-.153.191-.231.293-.215.262-.344.371-.656.484H33.8c-.035.11-.07.22-.11.332-.68.36-1.343.504-2.105.446v.222c-1.531.043-1.531.043-2.215-.222-.078-.028-.156-.059-.238-.09a5.726 5.726 0 0 1-1.469-.88c-.176-.148-.176-.148-.398-.253a2.94 2.94 0 0 1-.114-.11c-.105.071-.21.141-.316.215-.348.231-.348.231-.57.34V25c-.184.145-.184.145-.422.293-.078.047-.157.098-.239.148-.226.114-.226.114-.558.114v.222c-.188.075-.379.145-.567.215-.16.063-.16.063-.32.121-.71.235-1.406.242-2.148.246l-.305.008c-.809.004-1.406-.133-2.09-.59v-.222c-.183-.075-.367-.145-.555-.223v-.223h-.222c-.035-.254-.07-.511-.11-.777h-.222v-3.11h.222c0-.081-.003-.163-.003-.25-.008-.773.03-1.535.113-2.304h.223l-.008-.438c0-.53.05-1.039.117-1.562h.223c0-.16 0-.16-.004-.32-.008-.899.023-1.785.113-2.68h.223v-1.223h.222c0-.086-.004-.172-.004-.261 0-.11-.004-.223-.004-.336 0-.11 0-.223-.003-.336.011-.29.011-.29.12-.512l-.253.11c-.301.113-.301.113-.633.113v.222c-.305.102-.48.125-.797.121H17.477c-.329 0-.657-.004-.985-.004h-.668c-.547-.003-1.094-.003-1.636-.007v.242c.003.578-.004 1.148-.06 1.723-.007.113-.019.226-.03.343l-.024.246h-.222c.003.094.003.184.003.278.004.12.004.238.004.363.004.117.004.238.004.36-.011.335-.011.335-.12.78.327.036.66.07.995.11v-.223c1.137-.074 2.27-.144 3.438-.222v1.89c-.52.207-.934.274-1.477.309-.18.012-.36.027-.539.039l-.848.059c-.269.02-.542.043-.816.062l-.258.016c-.203.015-.406.043-.605.07-.04.074-.074.148-.113.223h-.22c0 .074 0 .144.005.218.008.786-.04 1.555-.117 2.336h-.22c0 .078 0 .16.005.243.004.851-.04 1.687-.118 2.535h-.222a24.47 24.47 0 0 1-.11 2.668h-.222l.023.367c-.023.41-.023.41-.144.598-.305.21-.567.207-.934.226-.144.008-.289.02-.437.027l-.461.024c-.149.008-.301.02-.45.027-.75.043-1.5.074-2.25.063v-1.778h.22c0-.086 0-.168-.005-.257-.004-.7.016-1.38.117-2.075.036-.039.075-.074.11-.113.027-.187.043-.379.058-.57l.032-.348c.015-.18.015-.18.027-.367.012-.121.02-.242.031-.367l.075-.903h.222c-.004-.074-.004-.148-.004-.222-.008-.75.031-1.48.114-2.223h.222v-1.441h.223c-.004-.094-.004-.184-.004-.274-.008-.808.023-1.594.113-2.394h.223c-.004-.118-.004-.235-.004-.356-.008-.816-.004-1.613.113-2.422-.289.078-.574.16-.86.242-.081.024-.16.043-.245.067-.54.16-.781.324-1.11.8h-.222c-.04.184-.074.368-.114.555h-.218c-.04.442-.074.883-.114 1.336H6.43c.015.22.03.438.047.66.007.122.02.243.027.372.004.293.004.293.144.414.028.257.047.52.063.78.012.145.02.29.027.438l.024.336h.218V18h-.218v.223h-.446V18c-.14.008-.28.016-.43.02-.722.003-1.402-.172-2.007-.575v-.336h-.223c-.254-.609-.254-1.168-.25-1.816v-.309c0-.625.074-1.16.25-1.761h.223l.11-.668.445-.11c0-.082.003-.164.007-.25.133-.39.329-.465.684-.644.258-.14.434-.34.637-.551.488-.332.488-.332.886-.332v-.223c.211-.093.422-.187.633-.277.117-.055.235-.105.352-.156.332-.117.554-.149.902-.121v-.223c.988-.242 1.969-.477 2.977-.625.234-.02.234-.02.347-.152.875-.118 1.762-.133 2.645-.141l.746-.012 1.152-.011c1.356-.02 2.692-.043 4.035-.215.598-.078.598-.078.84.043v1.113l.5-.098c.22-.043.438-.086.66-.125.106-.023.215-.043.325-.066a8.622 8.622 0 0 1 1.953-.156c.004.273.004.55.008.824v.238c.004.203-.004.402-.008.606-.035.035-.074.07-.11.109a17.54 17.54 0 0 0-.007.785c0 .145 0 .285.004.434 0 .113 0 .222.003.336h-.222v1.336h-.223c0 .062.004.129.004.195.008.754-.043 1.496-.113 2.246h-.223c0 .09.004.176.004.266.008.882-.035 1.746-.113 2.625h-.223c0 .07.004.14.004.21.008.86-.047 1.712-.117 2.567h-.219v1h.219v.555c1.055.086 1.933.047 2.773-.664.094-.235.094-.235.11-.446h.222c0-.062 0-.125-.004-.187-.015-2.168-.015-2.168.114-3.149h.222c.035-.402.075-.804.11-1.218h.222c.035-.258.075-.516.114-.782h.218v-.332h.223c.035-.183.074-.367.11-.554h.222c.004-.082.008-.16.016-.243.136-.449.398-.582.761-.87v-.22l.575-.316c.207-.12.207-.12.363-.297.191-.187.375-.289.613-.41.074-.039.153-.074.227-.113.215-.086.215-.086.55-.086v-.223c.188-.054.376-.11.567-.16.105-.031.21-.058.32-.09 1.371-.347 2.809-.375 4.098.25.039-.11.074-.222.113-.336.559-.18 1.102-.254 1.684-.304.203-.008.203-.008.308-.137.192-.02.38-.027.57-.035.102-.004.208-.012.313-.016l.399-.012c.418-.015.84-.035 1.27-.05v2.668h-.224c0 .07.004.14.004.214.008.825-.043 1.633-.113 2.454h-.223c0 .093.004.187.004.285 0 .183 0 .183.004.37 0 .126 0 .247.004.372-.012.305-.012.305-.12.414a9.606 9.606 0 0 0-.017.578v1.797c.012.262.051.484.125.738l.81-.105c.077-.008.155-.02.233-.027.332-.047.633-.094.954-.204.07-.437.144-.879.218-1.332h.223l-.008-.261c.008-.293.008-.293.121-.516H43v-.223h.223c.007-.066.015-.136.02-.207.03-.078.062-.156.089-.238.094-.031.184-.066.277-.102.094-.039.184-.078.278-.12.101-.282.101-.282.113-.555h.219c.039-.22.074-.438.113-.664h.223v-.223h.218c.04-.258.075-.516.114-.777h.218c.04-.297.075-.59.114-.891h.222c.036-.328.07-.66.11-1h.222c.036-.328.07-.66.11-1h.222v-.555h.22c.038-.367.073-.734.112-1.113h.223v-.555c.281-.054.563-.109.844-.168l.238-.046c.461-.09.887-.137 1.356-.118v-.222c.242-.04.484-.075.726-.114.137-.02.27-.039.41-.062A8.634 8.634 0 0 1 51.426 11v.668h.219c.039.512.074 1.023.113 1.555h.219c.039.511.074 1.027.113 1.554h.222v.668h.22c0 .09-.005.18-.005.27-.027.277-.027.277.118.394.003.223.003.446 0 .668h.218c.04.368.075.735.114 1.114h.222c.07.73.145 1.464.219 2.218.332-.109.66-.218 1-.332.035-.109.07-.218.11-.332.148-.078.292-.152.44-.222.266-.328.266-.328.223-.778h.223v-.89h.223c-.004-.078-.004-.16-.004-.242-.008-.817.035-1.614.113-2.422h.223c0-.09-.004-.18-.004-.27-.008-.84 0-1.68.113-2.512.04-.035.074-.07.113-.109.024-.18.043-.363.059-.547.008-.11.02-.219.027-.332.012-.117.02-.23.032-.351.007-.114.02-.23.03-.352l.071-.863h.223c0-.11-.004-.223-.004-.336 0-.215 0-.215-.004-.434 0-.144 0-.285-.004-.433.012-.352.012-.352.121-.461.008-.262.008-.52 0-.782.16-.035.317-.074.473-.109.086-.02.176-.043.265-.063.262-.046.262-.046.704-.046v-.223l1.359-.223.387-.066.375-.059c.113-.02.23-.039.347-.058.305-.04.305-.04.746-.04Zm-27.93 8.668c-.034.109-.07.218-.109.332-.09.03-.183.062-.277.097l-.277.125c-.098.282-.098.282-.11.555h-.222v.223l-.223.109c-.07.281-.07.281-.11.559h-.222c-.035.254-.074.511-.11.777h-.222c-.106.527-.121 1.016-.11 1.555h-.222v2.332h.223c.02.23.043.457.062.683l.047.207c.074.035.144.075.223.11.035.11.07.222.109.336.312.156.582.129.93.129.125.003.254.003.382.007.333-.027.516-.074.793-.25v-.222c.13-.043.13-.043.258-.09.285-.125.442-.215.63-.465v-.332c.073-.04.148-.074.222-.113-.035-.075-.074-.145-.11-.223h.22v-.555h.222c.113-.742.12-1.468.11-2.222h.222c.039-.953.074-1.907.113-2.887h.219v-.223h-.219l.012-.265c.02-.309.02-.309-.234-.512-.72-.27-1.551-.129-2.22.223Zm13.743-.114c-.156.426-.246.77-.219 1.223h-.222c-.036.293-.075.586-.11.89h-.222v.333c-.075.035-.149.074-.223.109l.11.336h-.22V18h-.222c-.024.18-.043.355-.063.535l-.035.3c-.031.29-.031.29.098.61h.222v.446h.22v.664h-.22v.222c-.292.075-.585.149-.886.223v.223a5.703 5.703 0 0 1-.258-.016c-.324-.008-.324-.008-.629.238v.223c.707.645 1.191.7 2.148.691.657-.043 1.168-.175 1.68-.59.184-.199.184-.199.16-.437h.223c.242-.809.148-1.734 0-2.555h-.223c-.035-.367-.074-.734-.11-1.109h-.222l-.11-1.336h-.222v-.664h-.222c.039-.148.074-.293.113-.445h-.223c-.039-.149-.074-.293-.113-.446ZM88.422 2.645h.324c.727.007 1.426.054 2.133.246v.218l.285.032c.566.12 1.125.386 1.488.859v.223h.223c.035.183.07.367.11.554h.222c.09.395.125.762.125 1.168v.309a4.859 4.859 0 0 1-.125.855h-.223v.223c-.675.633-1.129.688-2.05.684h-.254c-.395 0-.75-.02-1.13-.125v-.559h.22c.039-.219.074-.437.113-.664h.219c.039-.184.074-.367.113-.559h.222V4.891h-.222l-.024-.211c-.066-.254-.066-.254-.316-.36-.402-.12-.781-.133-1.2-.133-.073 0-.152-.003-.23-.003-.695-.004-1.285.18-1.812.664-.297.261-.297.261-.52.375v.222h-.222c-.036.145-.07.293-.11.446h-.222c-.036.18-.075.363-.11.554h-.222c-.036.184-.075.367-.11.555h-.222c-.02.152-.02.152-.043.305a2.31 2.31 0 0 1-.29.804h-.222l-.11 1.114h-.222c-.035.402-.074.804-.11 1.222h-.222c-.02.692-.035 1.387-.055 2.082-.004.235-.012.473-.02.707l-.023 1.02-.008.32a7.336 7.336 0 0 0-.007.297c-.004.086-.004.176-.008.262-.012.203-.012.203.12.312.005.258.005.52 0 .778h.223l.11.777h.222c.036.219.07.441.11.668h.222c.086.125.086.125.172.254.371.41.746.5 1.27.633l.277.078c1.38.172 2.801-.145 4.156-.41V18l.297-.105c.13-.047.262-.094.395-.145.191-.07.191-.07.39-.14.36-.165.532-.329.801-.61l.555-.223c.035-.918.07-1.832.11-2.777h.222l-.008-.355c.008-.348.035-.641.117-.977h.223c.035-.293.074-.59.11-.89h.222v-.223h.223c.035-.22.074-.438.11-.664h.222c.035-.184.074-.368.11-.559h.222v-.223c.074-.035.144-.07.222-.109.036-.11.075-.219.11-.332l.555-.223c.035-.11.074-.222.109-.336h.223v-.218c.062-.032.125-.063.191-.09l.246-.121c.082-.04.16-.078.246-.117.223-.102.223-.102.313-.34.785-.387 1.574-.524 2.441-.555v-.223h1.992v.223c.215.02.43.043.645.062l.363.036c.332.03.332.03.656-.098v-.223c1.383-.36 2.793-.351 4.211-.336.012 1.266.02 2.52-.11 3.782h-.222c0 .062.004.129.004.199.008.715-.039 1.418-.113 2.133h-.223c0 .093 0 .191.004.289 0 .183 0 .183.004.37 0 .122 0 .243.004.372-.012.3-.012.3-.125.414-.012.25-.02.5-.02.75 0 .137-.004.273-.004.414.024.367.086.613.247.945.73.114 1.289.114 1.996-.109v-.223l.207-.203c.25-.258.347-.46.457-.797h.222c.036-.402.075-.808.11-1.222h.222c0-.067-.004-.13-.004-.196-.007-.757.043-1.5.114-2.25h.222c0-.144 0-.144-.003-.293-.008-.87.027-1.726.113-2.593h.222c0-.11 0-.215-.003-.329 0-.207 0-.207-.004-.421 0-.141 0-.282-.004-.422.011-.305.031-.543.125-.828h.219v-.223c2.964-.266 2.964-.266 4.433-.223.04.328.074.66.113 1l.477-.258c.09-.046.176-.093.27-.144.25-.14.25-.14.417-.328.622-.598 1.774-.543 2.586-.54.645.016 1.114.16 1.68.493V7h.223c.113.344.125.586.12.945.005.106.005.211.005.32-.016.29-.016.29-.125.626h-.223v.332c-.617.312-1.082.504-1.773.445v.223h-.778v-.223h-.218c-.04-.148-.075-.293-.114-.445h-.222c-.036-.149-.07-.293-.11-.446h-.222c-.036-.074-.07-.144-.11-.222-.62.039-1.129.097-1.664.445-.152.184-.3.367-.441.555h-.223c-.035.66-.074 1.32-.11 2h-.222c0 .156 0 .156.004.32a23.65 23.65 0 0 1-.113 2.68h-.223c0 .105.004.207.004.312 0 .2 0 .2.004.403 0 .132 0 .265.004.402-.012.328-.012.328-.121.437a6.755 6.755 0 0 0-.008.563c0 .156 0 .156.004.312 0 .078 0 .157.004.239h-.223v1.332c-.535.215-.805.246-1.367.238-.137-.004-.278-.004-.418-.008-.106-.004-.211-.004-.32-.008V19c-.844.035-1.684.074-2.551.11v-.333h-.223c.04-.183.074-.367.113-.554-.078.039-.156.078-.234.12-.102.052-.203.102-.309.157-.097.05-.199.102-.3.156-.266.121-.266.121-.489.121V19a7.601 7.601 0 0 1-2.75.5c-.093.004-.191.004-.293.008-.82-.008-1.562-.223-2.172-.801-.214-.262-.214-.262-.214-.484h-.223c-.07-.11-.145-.22-.219-.332-.039.109-.074.218-.113.332-.184.113-.367.226-.555.332-.035.074-.07.148-.11.222h-.222V19c-.16.094-.32.188-.484.277-.09.051-.18.106-.274.157-.238.12-.238.12-.46.12v.223c-.825.282-1.59.368-2.458.368-.14.003-.14.003-.28.003-.684-.007-1.407-.058-2.028-.37v-.223l-.207-.047c-.235-.063-.235-.063-.457-.176v-.223c-.11-.035-.219-.07-.332-.109v-.223h-.223v-.222c-.074-.035-.144-.075-.223-.11-.066-.23-.066-.23-.109-.445h-.223v.332c-.582.445-.582.445-.886.445-.035.11-.07.22-.11.332-.597.446-.597.446-.886.446v.222c-.16.075-.325.149-.485.223l-.273.125c-.239.098-.239.098-.461.098v.222c-.285.094-.574.184-.86.278l-.246.078c-.078.027-.156.05-.238.078l-.219.07c-.21.051-.21.051-.656.051v.223c-2.055.41-4.148.465-6.203 0V21c-.066-.012-.129-.027-.195-.043a3.518 3.518 0 0 1-.723-.297c-.078-.039-.156-.082-.234-.12l-.18-.095v-.222l-.262-.106c-.293-.117-.293-.117-.515-.226-.067-.286-.067-.286-.11-.559h-.222c-.036-.184-.07-.367-.11-.555h-.222c-.036-.183-.075-.367-.11-.554h-.222c-.036-.403-.075-.809-.11-1.223h-.223v-1.332h-.222v-3.113h.222v-1.332h.223c-.004-.137-.004-.278-.008-.418 0-.325.016-.606.118-.914h.222c.035-.368.074-.735.11-1.114h.222l.11-.668h.222c.035-.254.074-.511.11-.777h.222v-.223h.223c.035-.18.074-.363.11-.554h.222c.035-.11.074-.22.11-.332h.222V5.89c.184-.153.367-.301.555-.446.035-.11.074-.222.109-.336.598-.441.598-.441.887-.441v-.223c.164-.093.324-.187.488-.277.09-.055.18-.106.27-.156.242-.121.242-.121.46-.121v-.223c.317-.11.633-.215.95-.32.09-.032.18-.059.27-.09 1.234-.414 2.34-.613 3.64-.613Zm11.656 6.687c-.101.055-.203.105-.305.16-.27.153-.27.153-.34.418-.011.098-.011.098-.019.2h-.223v.222l-.222.113c-.02.075-.035.145-.055.223-.02.07-.035.145-.055.223-.074.035-.148.07-.222.109-.075.281-.075.281-.11.555h-.222c-.035.332-.075.66-.11 1h-.222c-.137.629-.121 1.25-.114 1.89h-.218v1.11h.218c0 .12-.004.238-.004.363.004.32.02.559.118.86h.222c.035.148.07.292.11.445h.222v.222c.325.11.543.125.887.125h.29c.28-.004.28-.004.597-.125v-.222h.332V17c.219-.11.441-.223.664-.332v-.336c.074-.035.144-.07.223-.11-.04-.074-.075-.148-.114-.222h.223v-.445h.223c.12-.778.12-1.543.109-2.332h.223c.078-.817.129-1.625.109-2.446h.223V9.668h-.223l-.11-.445h-.331V9c-.946-.066-.946-.066-1.774.332ZM136.32 0v.668h-.222c0 .102 0 .203.004.312 0 .133 0 .266.003.403 0 .133 0 .265.004.402-.011.324-.011.324-.125.438a9.002 9.002 0 0 0-.004.562v.309c.004.078.004.16.004.238h-.218v1.113h-.223c0 .078.004.16.004.242.008.817-.035 1.614-.113 2.422h-.223c0 .09 0 .176.004.266a25.56 25.56 0 0 1-.117 2.625h-.22c0 .074 0 .152.005.227a16.46 16.46 0 0 1-.117 2.105h-.22c.013.297.024.59.04.883l.012.254c.011.215.035.43.058.64.074.04.145.075.223.114v.222h1.55v-.222h.555c.036-.403.07-.809.11-1.223h.222v-.555h.223c0-.078.004-.156.004-.238.137-.414.355-.559.695-.816.207-.188.297-.36.407-.614h.222v-.332h.223c.035-.183.074-.367.11-.554h.222c.035-.258.074-.516.11-.782h.222c.016-.171.016-.171.035-.343.074-.43.215-.715.41-1.098v-.445h.219V6.89h.223c.035-.407.074-.809.109-1.223h.223c.039-.332.074-.66.113-1h.219V4c.293-.035.586-.074.886-.11v-.222l1.446-.246.488-.082a268.057 268.057 0 0 0 1.137-.192c.32-.03.511-.035.808.075v.445h.223c.016.11.031.223.043.336l.062.434c.02.144.036.285.059.433.02.336.02.336.168.461.004.262.004.52 0 .777h.223c.035.407.074.809.109 1.223h.223c.035.477.074.953.11 1.445h.222c.035.477.074.953.11 1.446h.222c.094.562.12 1.093.113 1.668h.219c.039.144.074.293.113.441l.156-.191c.399-.352.961-.696 1.504-.696v-.222l.543-.118c.098-.023.2-.046.301-.066.266-.039.266-.039.488.07v.446c-.09.027-.18.054-.27.086-.093.043-.187.09-.284.136a9.24 9.24 0 0 0-.11.446c-.48.445-.48.445-.777.445-.035.11-.074.219-.11.332-.597.445-.597.445-.886.445v.223c-.14.07-.285.14-.426.215-.078.039-.156.078-.234.12-.227.106-.227.106-.563.22v.222c-.16.094-.32.184-.484.278-.09.05-.18.101-.27.156-.242.121-.242.121-.465.121-.035.11-.07.219-.109.332-.242.133-.242.133-.54.246-.097.035-.194.074-.296.113-.273.086-.273.086-.605.086V16c-.204.055-.41.105-.618.16-.113.027-.226.059-.343.09-.77.176-1.508.215-2.293.215-.102 0-.2.004-.301.004-.836.004-1.672-.09-2.43-.469-.035-.074-.074-.148-.11-.223-.417-.261-.417-.261-.894-.312-.105.047-.105.047-.215.09-.148.05-.148.05-.296.097-.086.043-.172.082-.258.125-.035.11-.074.22-.11.332-.18.121-.18.121-.402.223-.082.04-.16.078-.246.113-.078.04-.156.075-.238.11-.125.058-.246.12-.375.18-1.301.495-2.754.566-4.086.148-.196-.106-.196-.106-.305-.438-.082-.03-.164-.066-.25-.097-.379-.157-.586-.383-.86-.68-.035.11-.074.219-.109.332-.203.16-.203.16-.457.32-.332.211-.656.43-.972.664-.344.239-.344.239-.676.239v.222c-.883.274-1.715.367-2.633.375-.098 0-.195.004-.293.004-.668-.004-1.223-.133-1.84-.379v-.222c-.12-.043-.12-.043-.242-.082a2.856 2.856 0 0 1-.867-.586c-.09-.25-.09-.25-.11-.446h-.222v-.332c-.074-.035-.149-.074-.223-.109-.11-.113-.11-.113-.117-.398 0-.09.004-.176.008-.27h-.223v-3.555h.223c-.004-.117-.004-.234-.008-.355.004-.348.035-.64.117-.98h.223v-.442h.222c.036-.258.07-.516.11-.777h.222c.036-.149.07-.297.11-.446h.222c.036-.183.075-.367.11-.554h.223v-.223h.222c.004-.066.012-.133.02-.203.125-.34.332-.402.644-.574.051-.055.106-.106.16-.16.25-.254.536-.434.836-.622h.223v-.218c.21-.079.418-.153.629-.223.117-.043.234-.082.355-.125.32-.09.57-.117.899-.098v-.222c.539-.141 1.07-.13 1.62-.125h.817c.223.011.223.011.555.125v.222l.266.047c.289.063.289.063.511.176.118-.352.121-.602.118-.965 0-.113 0-.223-.004-.336 0-.086 0-.168-.004-.258h.222V2.777h.223c-.004-.086-.004-.175-.004-.265-.008-.63 0-1.227.113-1.844 1.57-.406 3.25-.77 4.88-.668Zm-7.425 6.668v.223c-.079.007-.157.015-.239.027-.394.102-.66.277-.98.527v.223h-.223l-.035.215c-.027.074-.05.148-.078.226-.11.04-.219.075-.332.114v.445h-.219c-.039.254-.074.512-.113.777h-.223v.446h-.219c-.039.363-.074.73-.113 1.109h-.219v3h.22c.038.219.073.441.112.668h.22l.112.332c.438.352.778.375 1.329.332l.332-.11V15c.078-.008.156-.02.238-.027.398-.106.66-.27.98-.528.106-.238.106-.238.114-.445h.222c.035-.328.07-.66.11-1h.222c.094-.93.125-1.844.11-2.777h.222c.09-.703.125-1.399.133-2.106 0-.082 0-.164.004-.25 0-.422-.008-.617-.25-.976h-.441v-.223h-.996ZM141.969 7v.332h-.219c-.04.293-.074.59-.113.89h-.219c-.04.329-.074.66-.113 1h-.22l-.112.778h-.223v.332c-.07.04-.145.074-.219.113-.086.422-.14.696 0 1.11h.219v.222h.223c0 .344-.024.668-.11 1-.515.422-1.242.457-1.886.555.074.184.148.367.222.559h.223c.035.109.074.218.11.332h.222v.222c.726.086 1.383.121 2.105 0v-.222c.082-.016.164-.028.25-.043.414-.094.66-.188.942-.512.16-.211.16-.211.14-.445l.22-.114c-.036-.18-.071-.363-.11-.554h.222c-.054-.492-.054-.492-.113-1h-.219v-.664h-.222c-.055-.606-.055-.606-.114-1.223h-.218c-.055-.605-.055-.605-.114-1.223h-.218c-.008-.097-.012-.191-.02-.289l-.023-.37-.024-.372-.047-.305L141.97 7Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#fdfdfd',
        fillOpacity: 1,
      }}
    />
    <path
      d="M133.582 28.305h.238c5.196 0 10.387.058 15.575.25v.222c.097 0 .195-.004.296-.004 1.121-.007 2.23.047 3.348.125.184.012.367.028.55.04.481.03.958.066 1.438.097.489.035.98.067 1.47.102.956.062 1.917.129 2.874.195v.223c.078 0 .156 0 .238-.004.86-.008 1.7.043 2.555.125.133.012.266.027.402.039l1.266.117.863.082c.7.066 1.399.129 2.102.195v.223c.133-.004.27-.004.41-.008.672 0 1.332.086 2 .168l.371.047c.52.063 1.031.129 1.54.238V31l.382.047c.395.062.395.062.504.176.004.183.008.37 0 .554-.129.075-.258.145-.387.215-.11.063-.11.063-.219.121-.78.301-1.558.207-2.367.11a10.05 10.05 0 0 1-.34-.04 179339.356 179339.356 0 0 0-1.79-.203c-.588-.066-1.178-.132-1.768-.203v-.222c-.067 0-.13.004-.2.004a20.385 20.385 0 0 1-2.128-.098c-.11-.008-.223-.02-.336-.027-.235-.02-.465-.043-.7-.063l-1.074-.094-.68-.058c-.109-.008-.214-.02-.327-.028-.098-.007-.196-.02-.297-.027l-.266-.023c-.2-.032-.2-.032-.309-.141a7.003 7.003 0 0 0-.492-.05c-.105-.009-.215-.016-.32-.024-.176-.012-.176-.012-.356-.028-.12-.007-.242-.015-.367-.027-.398-.027-.797-.058-1.195-.086-.133-.012-.266-.02-.406-.031a243.534 243.534 0 0 0-7.172-.422v-.223c-.14.004-.281.004-.426.004a88.818 88.818 0 0 1-3.68-.05 327 327 0 0 0-22.316.015 94.76 94.76 0 0 1-3.941.031v.223c-.137.008-.274.012-.415.016-2.55.097-5.093.203-7.636.433-.98.086-1.942.125-2.922.11v.218c-.09.008-.18.012-.27.02-.418.027-.836.05-1.254.078a67.653 67.653 0 0 0-3.309.281c-.644.067-1.28.094-1.929.067v.222c-.137.012-.273.028-.414.04-.508.046-1.016.097-1.527.144-.219.02-.438.043-.656.062-.32.032-.637.063-.954.09-.097.012-.195.02-.293.028-.433.043-.867.086-1.3.144-.36.043-.7.059-1.063.055-.105 0-.21 0-.316-.004-.078 0-.157 0-.239-.004v.223a4.178 4.178 0 0 0-.203.027c-.703.082-1.406.168-2.11.254l-.788.094c-.375.043-.754.09-1.129.136-.117.012-.238.028-.36.043l-.328.04-.293.035c-.218.015-.218.015-.328.148-.296.05-.59.094-.886.133-.09.012-.176.023-.27.039-.187.023-.379.05-.57.074l-.863.117c-.184.028-.372.051-.555.075l-.258.039c-.46.058-.902.093-1.363.082v.218c-.485.078-.973.149-1.457.223-.137.023-.274.043-.414.066-.133.02-.266.04-.403.059-.183.027-.183.027-.37.059-.34.039-.669.047-1.016.039v.222c-.512.078-1.024.16-1.536.239-.175.027-.351.054-.523.082-.25.039-.504.074-.754.113a6.764 6.764 0 0 1-1.285.121v.223c-.465.082-.934.16-1.398.238l-.473.082c-.23.04-.457.078-.684.113l-.414.07c-.355.051-.355.051-.8.051v.223c-.489.094-.981.188-1.47.277a41.28 41.28 0 0 1-.421.082c-.133.024-.266.051-.403.075l-.375.07c-.324.055-.324.055-.765.055v.218l-1.352.282c-.129.023-.258.05-.386.078-.125.027-.247.05-.375.078-.114.023-.227.043-.344.07a4.64 4.64 0 0 1-.871.051v.223c-.34.074-.684.148-1.024.218-.097.024-.195.043-.293.067-.14.031-.14.031-.285.058l-.258.059c-.246.039-.246.039-.687.039v.223c-.395.093-.79.187-1.184.277-.168.043-.168.043-.34.082-.109.023-.214.05-.328.074l-.3.07a3.78 3.78 0 0 1-.84.051v.223c-3.555.863-3.555.863-4.657.336v-.777c.141-.059.282-.114.422-.168.078-.032.157-.063.239-.094.226-.074.226-.074.558-.074v-.223c.324-.074.649-.148.969-.223.094-.02.183-.039.277-.062l.27-.063c.082-.015.164-.035.246-.054.234-.04.234-.04.676-.04v-.222c.394-.094.793-.188 1.187-.277.168-.043.168-.043.336-.082.11-.024.219-.051.328-.075l.301-.07c.289-.055.55-.062.84-.055v-.218l1.242-.282.355-.078c.114-.027.227-.05.34-.078.106-.023.211-.043.317-.07.289-.047.558-.059.851-.051v-.223c.453-.09.907-.183 1.356-.277l.39-.078c.125-.027.246-.05.375-.078l.344-.07c.305-.051.305-.051.75-.051v-.223c.484-.094.969-.184 1.453-.277.137-.028.274-.051.414-.078l.403-.079.37-.07c.344-.05.669-.058 1.016-.05v-.223l1.176-.223c.113-.02.223-.043.336-.062.54-.102 1.043-.188 1.59-.16v-.22c.477-.081.957-.16 1.434-.238l.484-.082.703-.117c.14-.023.281-.043.426-.07a6.79 6.79 0 0 1 1.055-.051v-.223l1.527-.234.52-.082c.245-.04.495-.078.745-.117l.23-.035c.438-.067.86-.098 1.302-.086v-.223l1.703-.234a207.06 207.06 0 0 1 1.672-.235c.539-.074 1.062-.097 1.61-.086v-.222l.214-.024c.73-.086 1.465-.168 2.195-.254.274-.03.547-.062.82-.093.391-.047.786-.094 1.176-.137.125-.016.246-.031.371-.043.114-.016.227-.027.344-.043.102-.012.203-.02.305-.035.226-.016.226-.016.34-.149.289-.043.578-.078.87-.109.09-.008.177-.02.27-.027.188-.02.375-.043.563-.063.285-.027.57-.062.855-.094l.551-.058c.082-.008.168-.02.254-.028a14.275 14.275 0 0 1 1.734-.066v-.223c.829-.07 1.657-.144 2.48-.214.388-.036.77-.067 1.157-.102.442-.04.887-.078 1.332-.117.203-.016.203-.016.41-.035a26.232 26.232 0 0 1 2.602-.086v-.223c1.176-.07 2.355-.145 3.535-.215.55-.035 1.098-.066 1.645-.101.53-.036 1.062-.067 1.59-.098.203-.012.402-.023.6-.04a52.832 52.832 0 0 1 3.935-.1v-.223c5.144-.203 10.289-.25 15.437-.25Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#fefefe',
        fillOpacity: 1,
      }}
    />
    <path
      d="M46.215 19.89h.11v.665h-.22v.222c-.183.035-.367.075-.554.114.05-.047.101-.09.152-.133.211-.238.293-.461.402-.758.036-.035.07-.074.11-.11Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#f3f3f3',
        fillOpacity: 1,
      }}
    />
    <path
      d="m140.863 9.11.223.113c-.04.257-.074.511-.113.777h-.223c-.035.074-.07.148-.11.223-.152-.465.02-.684.223-1.114Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#f4f4f4',
        fillOpacity: 1,
      }}
    />
    <path
      d="M48.543 21.11h.223c-.16.374-.36.62-.668.89h-.22c.11-.332.184-.45.442-.668h.223v-.223ZM54.969 20.445h.336c-.04.145-.075.293-.114.446-.218.035-.437.07-.664.109.2-.277.2-.277.442-.555Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#f3f3f3',
        fillOpacity: 1,
      }}
    />
    <path
      d="M92.43 18.777c-.149.446-.387.54-.774.778-.074-.035-.148-.075-.222-.11.125-.113.25-.222.375-.336l.207-.187c.191-.145.191-.145.414-.145Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#f4f4f4',
        fillOpacity: 1,
      }}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const NewLogo1 = memo(ForwardRef)