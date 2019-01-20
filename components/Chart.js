import React from 'react';
import data from '../data/letters.json';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import letterheaderdata from '../data/letterheaders.json';



export default class Chart extends React.Component {
  render(){

    return (

      <ScrollView>
        <Text style={styles.titlemain}>Tigrinya Chart</Text>
          <Table>
            <Row data={letterheaderdata.vowels} flexArr={[1,1, 1, 1, 1, 1, 1,1]} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={letterheaderdata.ipa} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
              <Rows data={data} flexArr={[1,1,1,1,1,1,1,1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
      </ScrollView>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//
//   },
//   title: {
//     color: 'steelblue',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fontFamily: 'AmericanTypewriter-CondensedBold',
//     textAlign: 'center',
//
//   },
//   tableContainer: { flex: 1, padding: 16, paddingTop: 0, backgroundColor: '#fff' },
//    head: {  height: 20,  backgroundColor: '#f1f8ff'  },
//    wrapper: { flexDirection: 'row' },
//    tableTitle: { flex: 1, backgroundColor: '#f6f8fa' },
//    row: {  height: 28  },
//    text: { textAlign: 'center' }
//
// });

const styles = StyleSheet.create({
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  titlemain: {color: 'steelblue', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}

});
