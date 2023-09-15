import { DocumentData } from 'firebase/firestore'
import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    list: DocumentData
    id: string
}
const ListCard: React.FunctionComponent<Props> = ({list, id}: Props) => {
    return (
        <View className='w-[350px] h-[230px] border rounded-3xl bg-white'><Text>{list.name}</Text></View>
    )
}

export default ListCard