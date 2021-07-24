import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps){
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text color="green.50">Otavio Augusto</Text>
                <Text color="green.50" fontSize="small">
                    otavioachrispim@gmail.com
                </Text>
            </Box>
        <Avatar side="md" name="Otavio Augusto" src="https://avatars.githubusercontent.com/u/69418670?v=4" />
    </Flex>
    );
}