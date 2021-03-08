import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width
const deviceHeight = Dimensions.get("window").height
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313e6a',
        alignItems: 'center'
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#a6a6a6',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 5
    },
    hyperlink: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#ff0000'
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#000'
    },
    content: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'justify',
        fontSize: 15,
        marginTop: 10,
        color: '#000'
    },
    contentBold: {
        fontFamily: 'Montserrat_500Medium',
        color: '#d1286d',
        textAlign: 'justify',
        fontSize: 16
    },
    cardBoard: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#FFF',
        width: deviceWidth * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    text: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.2,
        padding: 10
    },
    img: {
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.2,
        borderRadius: 10
    },
    button: {
        width: deviceWidth * 0.6,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#d1286d',
        justifyContent: 'center'
    },
    textButton: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.2,
        padding: 10
    },
    containerButton: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'left',
        fontSize: 14,
        color: '#000'
    }
});