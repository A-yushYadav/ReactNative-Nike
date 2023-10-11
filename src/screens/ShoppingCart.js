import { FlatList, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice';


const ShoppingCartTotals = () => {
    const Subtotal = useSelector(selectSubtotal);
    const deliveryFee= useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>SubTotal</Text>
                <Text style={styles.text}>{Subtotal} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total} US$</Text>
            </View>
        </View>
    )
}

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items)
    return (
        <>
            <View style={{ marginBottom: 100 }}>
                <FlatList data={cartItems}
                    renderItem={({ item }) => <CartListItem cartItem={item} />}
                    ListFooterComponent={ShoppingCartTotals}
                />
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: "gainsboro",
        borderTopWidth: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        color: "gray",
    },
    textBold: {
        fontSize: 16,
        fontWeight: "500"
    },
    button: {
        position: "absolute",
        backgroundColor: "black",
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 100,
        alignItems: "center",
        bottom: 30

    },
    buttonText: {
        color: "white",
        fontWeight: '500',
        fontSize: 16,
    },
})