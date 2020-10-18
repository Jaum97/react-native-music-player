import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TrackPlayer from 'react-native-track-player'

export default function App() {
	// TrackPlayer.setupPlayer().then(async () => {
	// 	// Adds a track to the queue
	// 	await TrackPlayer.add({
	// 		id: 'trackId',
	// 		url: require('./src/tracks/tricot-サマーナイトタウン.mp3'),
	// 		title: 'Track Title',
	// 		artist: 'Track Artist',
	// 		// artwork: require('track.png'),
	// 	})

	// 	// Starts playing it
	// 	TrackPlayer.play()
	// })
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
