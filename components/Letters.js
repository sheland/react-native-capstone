// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
//
// const Letter = (props) => {
//   return (
//     <View style={styles.letterformat}>
//       <Text onPress={() => {
//         this.props.navigation.navigate('Details')
//       }} >{props.letter}</Text>
//     </View>
//   )
// }
// const Row = (props) => {
//   return (
//     <View style={styles.row}>
//       {
//         props.rowData.map((letterData, index) => {
//           return (
//             <Letter key={index}
//             {...letterData}
//             />
//           )
//         })
//       }
//     </View>
//   )
// }
//
//
// const Letters = (props) => {
//   return (
//     <View style={styles.container}>
//       {
//         props.data.map((rowData,index) => {
//           return (
//             <Row key={index}
//             rowData={rowData} />
//           )
//         })
//       }
//     </View>
//   )
// }
//
// const styles = StyleSheet.create({
//   letterformat: {
//     borderWidth: 1,
//     borderColor: "powderblue",
//     alignItems: 'center',
//     width: "10%"
//
//   },
//   row: {
//     flexDirection: "row",
//     borderColor: "blue",
//     borderWidth: 1,
//     justifyContent: "space-evenly",
//
//   },
//   container: {
//     backgroundColor:'white',
//     flex: 1,
//   }
// });
//
// export default Letters;
