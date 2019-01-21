import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell, Row } from 'react-native-table-component';
import data from '../data/letters.json';
import letterheaderdata from '../data/letterheaders.json';


export default class ExampleFive extends Component {
  constructor(props) {
    super(props);
    const elementText = (value) => (
      <TouchableOpacity
        onPress={() => this._alertIndex('hey')}>
        <View style={styles.btn}>
          <Text style={styles.btnText}></Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {


      tableData: [
        ['ɐ', 'በ','3', '4', '5', '6', '7'],
        ['u', 'ቡ', '3', '4', '5', '6', '7'],
        ['i', 'ቢ', 'c', 'd', '5', '6', '7'],
        ['ä', 'ባ', 'c', 'd', '5', '6', '7'],
        ['e', 'ቤ', 'c', 'd', '5', '6', '7'],
        ['ɨ', 'ብ', 'c', 'd', '5', '6', '7'],
        ['o', 'ቦ', 'c', 'd', '5', '6', '7'],

      ]
    }
  }

  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  handleCharacterSelect = (value) => {
    console.log(`${value} was selected.`)
  }

  render() {
    const state = this.state;
    return (
      <ScrollView style={styles.container}>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper (column) */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={letterheaderdata.ipa} style={styles.title} heightArr={[30, 30, 30, 30, 30,30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper (row)*/}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData } heightArr={[40, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },


});
