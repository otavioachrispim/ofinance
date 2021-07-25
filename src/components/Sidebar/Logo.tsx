import {Image} from '@chakra-ui/react';

export function Logo(){
    return(       
        <Image 
          src="/images/logo1.svg"
          alt="Logo" 
          objectFit="contain"
          mb="4"
          w={["120","160"]}
          h={["120","160"]}
        />
    );
}