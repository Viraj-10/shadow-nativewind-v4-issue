import './global.css';
import { Pressable, Text, View } from 'react-native';
import { vars } from 'nativewind';
import { useState } from 'react';

const config = {
  light: vars({ '--brand-color': 'red' }),
  dark: vars({ '--brand-color': 'blue' }),
};
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
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
      <Pressable
        className="rounded-lg bg-gray-700 p-5"
        onPress={() => {
          setIsOpen((prev) => !prev);
        }}>
        <Text className="text-white">Toggle Text</Text>
      </Pressable>
      {isOpen && (
        <Text className="text-base text-[--brand-color]">
          Text with Variable color and text-base
        </Text>
      )}
    </View>
  );
}
