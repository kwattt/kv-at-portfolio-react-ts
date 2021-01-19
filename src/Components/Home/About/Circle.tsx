import {
  Box
} from "@chakra-ui/react"

interface Colort {
  color: string;
}
const Circle = ({color}: Colort) => {

    return (
      <Box ml={2}>
        <svg width={14} height={14}>
          <circle strokeWidth={0.4} stroke="gray" cx={7} cy={7} r={7} fill={color} />
        </svg>
      </Box>
    )
}
export default Circle;