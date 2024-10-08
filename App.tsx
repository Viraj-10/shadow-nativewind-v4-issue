import './global.css';
import { Text, View } from 'react-native';
import { vars } from 'nativewind';

const config = {
  light: vars({ '--brand-color': 'red' }),
  dark: vars({ '--brand-color': 'blue' }),
};
export default function App() {
  return (
    <View
      style={[
        config['light'],
        {
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        },
      ]}>
      <View className="shadow">
        <View className="h-7 w-7 border-2 border-red-500 bg-[--brand-color]"></View>
      </View>
      <Text>with Shadow</Text>
      <View>
        <View className="h-7 w-7 border-2 border-red-500 bg-[--brand-color]" />
      </View>
      <Text>without Shadow</Text>
    </View>
  );
}
