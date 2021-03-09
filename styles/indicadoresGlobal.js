import { StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get("window").width
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
    recipe: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 13,
        color: '#d1286d'
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 17,
        color: '#000'
    },
    topic: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'left',
        fontSize: 20,
        color: '#000'
    },
    subtitle: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#000'
    },
    topicContent: {
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10,
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
    }
});