import { StyleSheet ,View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 0.15, backgroundColor: '#EE9972' },
  title: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
})