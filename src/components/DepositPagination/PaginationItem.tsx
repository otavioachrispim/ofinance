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
                colorScheme="green"
                disabled
                _disabled={{
                    bg: 'green.500',
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
            fontSize="xs"
            width="4"
            bgColor="green.900"
            _hover={{
                bg: 'green.500'
            }}
        >
            {number}
        </Button>
    );
}