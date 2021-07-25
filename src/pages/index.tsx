import { Flex, Button, Stack, Image } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import {Input} from '../components/Form/Input';

type SignInFormData ={
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
  }

  return (
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"  
    >   

      <Flex
       as="form"
       w="100%" 
       maxWidth={420}
       p="10"
       borderRadius={20}
       flexDir="column"     
       onSubmit={handleSubmit(handleSignIn)}  
      >
        <Image 
          src="/images/logo1.svg"
          alt="Logo" 
          objectFit="contain"
          mb="4"
      />

        <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')} 
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')} 
            />         
        </Stack>
        
          <Button 
            colorScheme="green"
            color="green.50"
            type="submit"
            size="lg"
            mt="8"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
