import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HTMLToPDF: {pdfFile: string};
  ViewPDFScreen: {pdfFile: string};
};

export type ViewPDFScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewPDFScreen'
>;
export type HTMLToPDFProps = NativeStackScreenProps<
  RootStackParamList,
  'HTMLToPDF'
>;
