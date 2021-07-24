import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

export function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            {!!label && 
                <FormLabel 
                    htmlFor={name}
                    color="green.50"
                >
                    {label}
                </FormLabel>
            }            

            <ChakraInput 
              name={name}
              id={name}
              bgColor="green.50"
              focusBorderColor="green.900"      
              color="green.900"        
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}