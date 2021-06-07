import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';

import { globalStyles } from '../../../styles/bdrGlobal';

const url = "https://www.btgpactualdigital.com/renda-fixa/cdb/produtos?cmpid=c04:m05:google:11177116067:b:110394111315&utm_medium=spl&utm_source=google&utm_campaign=11177116067&utm_content=110394111315&creative=466932534632&adposition=&keyword=&matchtype=b&targetid=aud-299658730787:dsa-19959388920&device=c&feeditemid=&loc_interest_ms=&loc_physical_ms=1001765&placement=&s_kwcid=AL!9288!3!466932534632!b!!g!!&gclid=Cj0KCQjwh_eFBhDZARIsALHjIKfuWI1_rIVfTXw1-xnNJxHRWtPu-2JsVzpZLDWffP7sNU1lNfKooRQaAs13EALw_wcB";

export default function ListaCdb() {
    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.text}>Lista de CDB</Text>

            <View style={[globalStyles.cardBoard, globalStyles.shadow]}>
                <View style={globalStyles.cardContent}>
                    <Text style={[globalStyles.title, globalStyles.shadow]}>Listagem dos CDBs</Text>
                    <Text style={[globalStyles.content, globalStyles.shadow]}>Abaixo uma lista de alguns
                        <Text style={[globalStyles.contentBold, globalStyles.shadow]}> CDBs</Text> na corretora BTG Pactual.
                    </Text>
                    <View style={globalStyles.containerButton}>
                        <TouchableOpacity onPress={() => Linking.openURL(url)} style={[globalStyles.button, globalStyles.shadow]}>
                            <Text style={globalStyles.textButton}>Clique aqui e veja a lista</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}