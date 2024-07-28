import { StyleSheet, Text, View, Image, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useRef, useEffect } from 'react';

function Meal({ meal }) {
    return (
        <Link asChild href={`/${meal.idMeal}`}>
            <Pressable style={styles.container}>
                <View>
                    <Text style={styles.text}>{meal.strMeal}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: meal.strMealThumb }}
                        accessibilityLabel={`${meal.strMeal} thumbnail`}
                    />
                </View>
            </Pressable>
        </ Link>
    );
}

export default function AnimatedMealCard({ meal, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 100,
            delay: index * 100,
            useNativeDriver: true,
        }).start();
    }, [index, opacity]);

    return (
        <Animated.View style={{ opacity }}>
            <Meal meal={meal} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 20,
    },
});
