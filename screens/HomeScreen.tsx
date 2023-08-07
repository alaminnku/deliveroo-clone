import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Search from '../components/home/Search';
import Categories from '../components/home/Categories';
import Header from '../components/home/Header';
import FeaturedRows from '../components/home/FeaturedRows';
import { StyleSheet } from 'react-native';
import { useUser } from '../contexts/user';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  // Hooks
  const { token } = useUser();
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Search />
      <ScrollView style={styles.body}>
        <Categories />
        <FeaturedRows />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 100,
    backgroundColor: '#ffffff',
  },

  body: {
    backgroundColor: '#f3f4f6',
  },
});
