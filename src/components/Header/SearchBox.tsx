import { Flex, Input, Icon} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';



export function SearchBox(){
    // const [search, setSearch] = useState('')

    const searchInputRef = useRef<HTMLInputElement>(null)

    // console.log(searchInputRef.current.value)

    return(
        <Flex            
            as="label"
            flex="1"
            py="2"
            px="4"
            maxWidth={280}
            alignSelf="center"
            color="gray.700"
            bg="green.50"
            borderRadius="full"
        >
                <Input 
                    color="green.800"
                    variant="unstyled"
                    px="4"
                    mr="4"                    
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: "gray.400"}}
                    ref={searchInputRef}
                />
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex> 
    );
}