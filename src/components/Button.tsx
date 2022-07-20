import {Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base'

interface ButtonNativeBaseProps extends IButtonProps {
    title: string;
}

export function Button({title, ...rest}: ButtonNativeBaseProps) {
    return (
        <ButtonNativeBase
            bg='green.700'
            h={14}
            fontSize='sm'
            rounded='sm'
            _pressed={{
                bg: 'green.500'
            }}
            {...rest}
        >
            <Heading
                color='white'
                fontSize='sm'
            >
                {title}
            </Heading>
        </ButtonNativeBase>
    )
}