import { StyleSheet, Text, View, Image } from 'react-native';

export default function Meal({ meal }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{meal.strMeal}</Text>
            <Image
            style={styles.image}
            source={{uri:meal.strMealThumb}} />
        </View>
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
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 20
    }
});
