import { StyleSheet } from 'react-native'
import { colors } from './../../config/styles'

export default StyleSheet.create({
	form: {
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 15,
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
		marginTop: 15,
		marginBottom: 15,
		fontWeight: '500',
		color: colors.primary,
	},
	imageUploadItem: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 0,
		paddingTop: 50,
		paddingBottom: 30,
	},
	userPhoto: {
		width: 110,
		height: 110,
		marginRight: 20,
		borderRadius: 100,
	},
	imageUploadButton: {
		marginBottom: 10,
		borderRadius: 50,
	},
	inputWrapper: {
		marginLeft: 0,
	},
	submitButton: {
		marginTop: 25,
		borderRadius: 25,
	},
	formFooter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 5,
	},
	formFooterButton: {},
	formFooterButtonText: {
		fontSize: 14,
	},
})
