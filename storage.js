import { AsyncStorage } from 'react-native'

asyncStorageExamples = async () => {
    // getting an item
    const val = await AsyncStorage.getItem('key');
    // storing a string
    const a = 'string_val';
    await AsyncStorage.setItem('key', a);
    // storing a stringified object
    const b = { b: 1 };
    await AsyncStorage.setItem('key', JSON.stringify(b);
    // removing an item
    await AsyncStorage.removeItem('key');
}