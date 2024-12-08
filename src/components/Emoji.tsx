import meh from '../assets/Emojis/meh.webp'
import thumbsUp from '../assets/Emojis/thumbs-up.webp'
import bullsEye from '../assets/Emojis/bulls-eye.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ( {rating}: Props ) => {
    const emojiSet: { [key: number]: ImageProps } = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '35px'},
    }
    if(rating<3) return;
  return (
    <Image {...emojiSet[rating]} marginTop={1}/>
  )
}

export default Emoji
