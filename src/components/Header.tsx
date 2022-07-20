import {Heading, HStack, IconButton, StyledProps, useTheme} from "native-base";
import {CaretLeft} from "phosphor-react-native";
import {useNavigation} from "@react-navigation/native";

interface HeaderProps extends StyledProps {
    title: string;
}

export function Header({title, ...rest}: HeaderProps) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    const {colors} = useTheme()
    return (
        <HStack
            {...rest}
            w='full'
            justifyContent='space-between'
            alignItems='center' bg='gray.600'
            pb={6}
            pt={12}
        >
            <IconButton
                onPress={handleGoBack}
                icon={<CaretLeft color={colors.gray[200]}
                                 size={24}/>}/>
            <Heading
                color='gray.100'
                textAlign='center'
                fontSize='lg'
                flex={1}
                pl={-6}
            >
                {title}
            </Heading>
        </HStack>
    )
}