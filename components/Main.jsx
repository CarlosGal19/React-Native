import { View, FlatList, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';

import axios from 'axios';
import AnimatedMealCard from './Meal';

export default function Main() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                setMeals(response.data.meals);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View>
            <Text style={styles.title}>Seafood Meals</Text>
            <Link asChild href="/About" style={{ fontSize: 18, margin: 10, fontWeight: 'bold' }}>
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
                        <AntDesign name="info" size={24} color="black" />
                    </Text>

                </Pressable>
            </Link>
            {
                meals.length === 0 ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={meals}
                        renderItem={({ item, index }) => <View>
                            <AnimatedMealCard meal={item} index={index} />
                        </View>}
                        keyExtractor={item => item.idMeal} />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10
    },
});
