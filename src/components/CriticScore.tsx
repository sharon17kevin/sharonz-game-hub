import { Badge } from "@chakra-ui/react"

interface Prop {
    score: number
}

const CriticScore = ( {score} : Prop ) => {
    const color = score > 80? 'green': score > 60? 'yellow' : ''
  return (
    <Badge fontSize='14px' paddingX={2} colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore
