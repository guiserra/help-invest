import { Modal, Dimensions, TouchableWithoutFeedback, View, Text } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';

const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view;

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const { title } = this.props;
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    color: '#182E44',
                    fontSize: 20,
                    fontWeight: '500',
                    marginTop: 15,
                    marginBottom: 30
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
        const { content } = this.props;
        return (
            <View>
                <Text onPress={() => Linking.openURL('mailto:serra.guilherme@gmail.com?subject=Ola')}>serra.guilherme@gmail.com  <Feather name="send" size={20} color="white" />
                    {"\n"}{"\n"}<Text onPress={() => Linking.openURL('mailto:kevin.rafael98@hotmail.com?subject=Ola')}>kevin.rafael98@hotmail.com  <Feather name="send" size={20} color="white" /></Text>
                </Text>
                <Text>{content}</Text>
            </View>
        )
    }

    render() {
        let { show } = this.state;
        const { onTouchOutside } = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View
                    style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end' }}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        paddingBottom: 50,
                        maxHeight: deviceHeight * 0.4
                    }}>

                        {this.renderTitle()}
                        {this.renderContent()}

                    </View>
                </View>
            </Modal>
        )

    }
}