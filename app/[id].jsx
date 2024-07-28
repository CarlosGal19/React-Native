import { Text, ScrollView, StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Detail(){

    const [meal, setMeal] = useState(null);

    const { id } = useLocalSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setMeal(response.data.meals[0]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue'
        }}>
            <Text style={styles.title}>
                Meal Details</Text>
            <Link
                href="/"
                style={{
                    fontSize: 18,
                    margin: 10,
                    fontWeight: 'bold'

                }}
            >
                Back to Home</Link>
                {
                    meal ? (
                        <ScrollView style={{
                            backgroundColor: 'lightblue',
                            padding: 10,
                            borderRadius: 5,
                            margin: 'auto',
                        }}>
                            <Text style={styles.text}>{meal.strMeal}</Text>
                            <Text style={styles.text}>{meal.strCategory}</Text>
                            <Text style={styles.text}>{meal.strArea}</Text>
                            <Text style={styles.text}>{meal.strInstructions}</Text>
                            <Image
                                style={{
                                    width: 300,
                                    height: 300,
                                    borderRadius: 150,
                                    margin: 'auto',
                                    marginTop: 20,
                                }}
                                source={{ uri: meal.strMealThumb }}
                                accessibilityLabel={`${meal.strMeal} thumbnail`}
                            />
                        </ScrollView>
                    ) : (
                        <Text>Loading...</Text>
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
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'white',
    }
});
