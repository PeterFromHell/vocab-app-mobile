import React from 'react'
import  { View, Text, Pressable } from 'react-native'
import { PlusIcon } from 'react-native-heroicons/solid'

type Props = {
    handleClick: () => void
}

const NewList: React.FC<Props> = ({handleClick}: Props) => {
    return (
        <Pressable 
            className='border-[#003366] border-[5px] w-[80px] h-[80px] rounded-full flex items-center justify-center absolute bottom-0 m-5'
            onPress={handleClick}
        >
            <PlusIcon size={80} />
        </Pressable>
    )
}

export default NewList