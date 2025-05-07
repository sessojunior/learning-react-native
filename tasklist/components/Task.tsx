import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { colors } from '@/constants/colors'
import { useState } from 'react'

export default function Task({ title, initialCompleted }: { title: string; initialCompleted: boolean }) {
	const [completed, setCompleted] = useState(initialCompleted)
	return (
		<View style={style.rowContainer}>
			<Pressable onPress={() => (completed ? setCompleted(false) : setCompleted(true))}>{completed ? <Ionicons name='radio-button-on' size={24} color={colors.primary} /> : <Ionicons name='radio-button-off' size={24} color={colors.primary} />}</Pressable>
			<Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{title}</Text>
		</View>
	)
}

const style = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
})
