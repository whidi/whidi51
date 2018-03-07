import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 5, backgroundColor: '#00BCD4' }}>

        <View style={{ backgroundColor: '#0097A7' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Menghitung Volume Balok
          </Text>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>
           Gede Whidi Harta
         </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#006064' }}>
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button

              onPress={() => this.setState({
              volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#00838F' }}>
          <Text style={{ padding: 20, fontSize: 20 }} >
              Panjang={this.state.panjang} {'\n'}
              Lebar= {this.state.lebar} {'\n'}
              Tinggi={this.state.tinggi} {'\n'}
              Volume= {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
