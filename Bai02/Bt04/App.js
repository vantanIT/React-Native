
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Dữ liệu danh sách
const items = [
  {
    id: '1',
    name: 'Nhân Gian Thất Cách',
    author: 'Dazai Osamu',
    description: 'Tác phẩm viết về cô độc, mặc cảm và sự xa cách với xã hội.',
  },
  {
    id: '2',
    name: 'Tà Dương',
    author: 'Dazai Osamu',
    description: 'Câu chuyện về sự thay đổi và suy tàn của một gia đình Nhật Bản.',
  },
  {
    id: '3',
    name: 'Tội Ác và Hình Phạt',
    author: 'Fyodor Dostoevsky',
    description: 'Tác phẩm khám phá tội lỗi, lương tâm và tâm lý con người.',
  },
  {
    id: '4',
    name: 'Chiến Tranh và Hòa Bình',
    author: 'Leo Tolstoy',
    description: 'Bức tranh về chiến tranh, tình yêu và số phận con người.',
  },
  {
    id: '5',
    name: 'Những Người Khốn Khổ',
    author: 'Victor Hugo',
    description: 'Tác phẩm về công lý, lòng nhân ái và cuộc đời con người.',
  },
  {
    id: '6',
    name: 'Nhà Thờ Đức Bà Paris',
    author: 'Victor Hugo',
    description: 'Câu chuyện về tình yêu, định kiến và xã hội Paris.',
  },
];

// Màn hình trang chủ
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MULTI SCREEN APP</Text>

      <Text style={styles.subtitle}>
        Ứng dụng điều hướng nhiều màn hình
      </Text>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>
          Chào mừng bạn!
        </Text>

        <Text style={styles.description}>
          Khám phá danh sách sách và xem thông tin chi tiết
          của từng cuốn.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('List')}
        >
          <Text style={styles.buttonText}>
            Xem danh sách
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Màn hình danh sách
function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Danh sách sách
      </Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() =>
              navigation.navigate('Detail', { item })
            }
          >
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>
                {item.name}
              </Text>

              <Text style={styles.itemAuthor}>
                Tác giả: {item.author}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Màn hình chi tiết
function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        <Text style={styles.detailLabel}>
          THÔNG TIN SÁCH
        </Text>

        <Text style={styles.detailName}>
          {item.name}
        </Text>

        <Text style={styles.detailAuthor}>
          Tác giả: {item.author}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.descriptionTitle}>
          Mô tả
        </Text>

        <Text style={styles.detailDescription}>
          {item.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            Quay lại danh sách
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Cấu hình điều hướng
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#243D32"
      />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#243D32',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#F5F1E8',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chủ' }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Danh sách' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Chi tiết' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
    padding: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#243D32',
    textAlign: 'center',
    marginTop: 25,
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  welcomeCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 14,
    elevation: 3,
  },

  welcomeTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#243D32',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#555555',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#243D32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#243D32',
    marginBottom: 18,
  },

  list: {
    paddingBottom: 20,
  },

  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#243D32',
  },

  itemAuthor: {
    fontSize: 13,
    color: '#777777',
    marginTop: 7,
  },

  arrow: {
    fontSize: 30,
    color: '#243D32',
    marginLeft: 10,
  },

  detailCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 14,
    elevation: 3,
  },

  detailLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#A44A3F',
    marginBottom: 16,
  },

  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#243D32',
    marginBottom: 12,
  },

  detailAuthor: {
    fontSize: 15,
    color: '#777777',
  },

  divider: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 20,
  },

  descriptionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#243D32',
    marginBottom: 10,
  },

  detailDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
  },
});

