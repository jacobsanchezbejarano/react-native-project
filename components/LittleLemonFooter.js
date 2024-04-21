import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.copy}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { width: '100%', position: 'absolute', bottom: 0, flex: 0.03, backgroundColor: '#EE9972' },
    copy: {
        padding: 3,
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
      }
})