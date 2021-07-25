import {Box, Flex, Heading, Divider, VStack, SimpleGrid,HStack, Button} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import Link from 'next/Link';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

type CreateWithdrawFormData = {
    title: string;
    amount: string;
    createdOn: string;
  };

  const createWithdrawFormSchema = yup.object().shape({
    title: yup.string().required('Título obrigatório'),
    amount: yup.number().negative().required('Valor obrigatório'),
    createdOn: yup.date().default(function () {return new Date();}),
  })

export default function CreateWithdraw(){
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createWithdrawFormSchema)
    })

    const { errors } = formState

    const handleCreateTransaction: SubmitHandler<CreateWithdrawFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
    }

    return (
        <Box 
            w="100%"
            my="6"            
            maxWidth={1400}
            mx="auto"
            px="6"
            display="flex"
        >

            <Sidebar />

            <Flex w="100%" flexDir="column" align="center">

                <Header />
                <Box
                  flex="1"
                  borderRadius={8}
                  p="8"
                  bg="green.900"
                  w="100%"
                  mb="8"
                  h="100%"
                  onSubmit={handleSubmit(handleCreateTransaction)}
                >
                    <Heading size="lg" fontWeight="normal" >Criar transação</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input
                              name="title"
                              label="Descrição da transação" 
                              error={errors.title}
                              {...register('title')}
                            />
                        </SimpleGrid>                        
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                              name="amount"
                              label="Valor da transação" 
                              error={errors.amount}
                              {...register('amount')}
                            />
                            <Input
                              name="createdOn"
                              label="Data da transação" 
                              error={errors.createdOn}
                              {...register('createdOn')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/withdraw" passHref>
                                <Button as="a" colorScheme="whiteAlpha" w="128px">Cancelar</Button>
                            </Link>
                            <Button
                              type="submit"
                              colorScheme="orange"
                              w="128px"
                              isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>                    
                </Box>
            </Flex>
        </Box>
    );
}