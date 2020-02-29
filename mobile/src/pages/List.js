import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage, Image, StyleSheet } from 'react-native'

import logo from '../assets/logo.png'

import SpotList from '../components/SpotList'

export default function List() {
	const [techs, setTechs] = useState([])

	useEffect(() => {
		AsyncStorage.getItem('techs').then(storagedTechs => {
			const techsArray = storagedTechs.split(',').map(tech => tech.trim())

			setTechs(techsArray)
		})
	}, [])

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			
			{techs.map((tech, index) => <SpotList key={index} tech={tech} />)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}, 

	logo: {
		height: 32,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginTop: 50
	}
})