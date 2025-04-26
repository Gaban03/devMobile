import { Text, View, FlatList } from 'react-native';
import  { faker } from '@faker-js/faker';
import styles from './styles';

const data = new Array(200)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: faker.person.fullName(), }));

export default function App() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}
