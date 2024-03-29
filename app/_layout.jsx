import React from "react";
import { Stack } from "expo-router/stack";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='exerciseDetails' options={{
                presentation: 'formSheet',
            }} />
        </Stack>
    )
}