import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-expo';

export default function App() {
    const { isLoaded, userId } = useAuth();
    const navigation = useRouter();

    useEffect(() => {
        if (isLoaded || userId) {
            navigation.replace('/(tabs)');
        }
    }, [isLoaded, userId]);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome To Off Campus!</Text>
            <Button title="Sign In" onPress={() => navigation.push("/auth")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});