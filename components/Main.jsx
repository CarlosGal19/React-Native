import { View, FlatList } from 'react-native';
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
            <FlatList
                data={meals}
                renderItem={({ item, index }) => <View>
                                                    <AnimatedMealCard meal={item} index={index} />
                                                </View>}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
}
