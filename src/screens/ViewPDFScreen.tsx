import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from '../components/react-native-pdf-master';
import {ViewPDFScreenProps} from '../navigationTypes';

const ViewPDFScreen: React.FC<ViewPDFScreenProps> = ({route}) => {
  const source = {
    uri: route.params.pdfFile,
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default ViewPDFScreen;
