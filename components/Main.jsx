import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedMealCard from './Meal';

export default function Main() {

    const insets = useSafeAreaInsets();
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
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                backgroundColor: 'white'
            }}>
            <Text style={styles.title}>Seafood Meals</Text>
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
