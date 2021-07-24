import {Flex} from '@chakra-ui/react';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            maxWidth={1080}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            justify="space-between"
        >
            <SearchBox />
            <Flex>
                <NotificationNav />
                <Profile />
            </Flex>
        </Flex>
    );
}