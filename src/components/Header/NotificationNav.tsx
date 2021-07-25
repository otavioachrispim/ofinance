import {HStack, Icon} from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function NotificationNav(){
    return (
        <HStack 
            spacing={["6","8"]}
            mx={["6","8"]}
            pr={["6","8"]}
            py="1"
            color="green.50"
        >
            <Icon as={RiNotificationLine} fontSize="20"/>
        </HStack>
    );
}