import { Modal, Dimensions, TouchableWithoutFeedback, View, Text, ScrollView } from "react-native";
import React from "react";

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
                    marginBottom: 30,
                    fontFamily: 'Montserrat_700Bold'
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
                {content}
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

                <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end' }}>
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
                        <ScrollView>
                            {this.renderContent()}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )

    }
}