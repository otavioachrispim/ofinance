import {Button} from '@chakra-ui/react';

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({
    isCurrent = false, 
    number
}: PaginationItemProps){
    if(isCurrent){
        return (
            <Button 
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="gray"
                disabled
                _disabled={{
                    bg: 'red.500',
                    cursor: 'default',
                }}
            >
                {number}
            </Button>
        );
    }

    return (
        <Button 
            size="sm"
            color="white"
            fontSize="xs"
            width="4"
            bgColor="green.900"
            _hover={{
                bg: 'red.500'
            }}
        >
            {number}
        </Button>
    );
}