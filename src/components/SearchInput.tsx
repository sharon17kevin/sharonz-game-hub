import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../zustand/gameQueryStore';

const SearchInput = () => {
  const search = useGameQueryStore(s=>s.search)
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) =>{
      event.preventDefault();
      if (ref.current) search(ref.current.value)
    }}>
      <InputGroup>
          <InputLeftElement children={<BsSearch/>}/>
          <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'/>
      </InputGroup>
    </form>
  )
}

export default SearchInput
