import { ScrollView, Text, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function About() {
    return (
        <ScrollView>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    margin: 10,
                    textAlign: 'center'
                }}
            >About</Text>
            <Link asChild href="/" style={{ fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                <Pressable style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    borderRadius: 5,
                    margin: 'auto',
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: 'bold'
                    }}>
                        <AntDesign name="home" size={24} color="black" />
                    </Text>
                </Pressable>
            </Link>

            <Text
                style={{
                    fontSize: 18,
                    margin: 10,
                    textAlign: 'center'
                }}
            >
                This is a simple app that displays seafood meals. It uses the{' '}
                <Text
                    style={{
                        color: 'blue'
                    }}
                    onPress={() => Linking.openURL('https://www.themealdb.com/api.php')}
                >TheMealDB API</Text>
                {' '}to fetch the data.
            </Text>
            <Text style={{ fontSize: 18, margin: 10 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corporis ipsa, harum sint placeat sit natus, porro quis et, praesentium velit? Beatae est soluta eius dicta, quae quibusdam qui! Consequatur.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eius rem asperiores veniam, corporis enim quo error, odit ad consequatur impedit iste! Suscipit cumque tenetur doloribus? Ut expedita consectetur corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ Text>
        </ScrollView>
    );
}
