import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { colors } from '@/constants/colors'
import { FlatList } from 'react-native-web'
import Task from '@/components/Task'
import { useState } from 'react'

const logotipo = require('@/assets/images/check.png')

const initialTasks = [
	{ id: 1, title: 'Fazer café', completed: true },
	{ id: 2, title: 'Estudar programação', completed: false },
	{ id: 3, title: 'Ir para academia', completed: false },
]

export default function RootLayout() {
	const [tasks, setTasks] = useState(initialTasks)
	const [title, setTitle] = useState('')

	function handleAddTask() {
		if (!title) {
			return
		}
		setTasks([...tasks, { id: tasks.length + 1, title, completed: false }])
		setTitle('')
	}

	return (
		<View style={style.mainContainer}>
			<View style={style.textContainer}>
				<Image source={logotipo} style={style.image} />
				<Text style={style.title}>Minhas tarefas</Text>
			</View>

			<View style={style.combo}>
				<TextInput style={style.input} value={title} onChangeText={setTitle} />
				<Pressable onPress={() => handleAddTask()} style={({ pressed }) => [style.button, { opacity: pressed ? 0.5 : 1 }]}>
					<Text>Adicionar</Text>
				</Pressable>
			</View>

			<View>
				<FlatList data={tasks} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Task title={item.title} initialCompleted={item.completed} />} />
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.primary,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 4,
	},
	textContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		padding: 20,
	},
	mainContainer: {
		padding: 20,
	},
	button: {
		height: 40,
		margin: 12,
		backgroundColor: colors.secondary,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	combo: {
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
