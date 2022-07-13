import {View, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import {HTMLToPDFProps} from '../navigationTypes';
import doGenerateHTML from '../htmls/htmlGenerator';
import {useFocusEffect} from '@react-navigation/native';

const HTMLToPDF: React.FC<HTMLToPDFProps> = ({navigation}) => {
  const [pdfFile, setPDFFile] = useState('');

  const createPDF = async () => {
    let options: Options = {
      html: doGenerateHTML(),
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    if (file) {
      console.log(file.filePath);
      setPDFFile(file.filePath || '');
    }
  };
  const openPDF = () => {
    navigation.navigate('ViewPDFScreen', {pdfFile: pdfFile});
  };
  useFocusEffect(
    useCallback(() => {
      console.log('Screen was focused');
      setPDFFile('');
      return () => {
        console.log('Screen was unfocused');
        // Useful for cleanup functions
      };
    }, []),
  );
  return (
    <View>
      <Button title="Create PDF" onPress={createPDF} />

      {pdfFile.length > 0 ? (
        <Button title="Open PDF" onPress={openPDF} />
      ) : null}
    </View>
  );
};

export default HTMLToPDF;
