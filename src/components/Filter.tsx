import {Button, IButtonProps, Text, useTheme} from "native-base";

interface FilterProps extends IButtonProps {
    title: string;
    isActived?: boolean;
    type: 'open' | 'closed'
}

export function Filter({title, isActived = false, type, ...rest}: FilterProps) {

    const {colors} = useTheme()
    const colorType = type === "open" ? colors.secondary[700] : colors.green[300]

    return (
        <Button
            variant='outline'
            borderWidth={
                isActived ? 1 : 0
            }
            borderColor={
                colorType
            }
            bgColor='gray.600'
            flex={1}
            size='sm'
            {...rest}
        >
            <Text
                color={
                    isActived ? colorType : 'gray.300'
                }
                fontSize='xs'
                textTransform='uppercase'
            >{title}</Text>
        </Button>
    )
}