import { FontAwesome6, MaterialIcons, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { forwardRef } from "react";
import { GestureResponderEvent, Pressable, TouchableWithoutFeedback, View } from "react-native"

function TabsLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
         tabBarLabelStyle: {
      fontSize: 14,      // tamanho do texto da label
         },
}    }>
        <Tabs.Screen 
        name="index"
        options={{
            title:"Treino",
            tabBarIcon: ({color, size}) => (
                <FontAwesome6 name="dumbbell" size={size * 0.8} color={color}/>
            ),
            tabBarButton: (props) => (
           <TabBarButton {...props} />
            )
        }}
        />
        <Tabs.Screen 
        name="explore"
        options={{
            title:"Explorar",
            tabBarIcon: ({color, size}) => (
                <Ionicons name="search" size={size} color={color}/>
            ),
            tabBarButton: (props) => (
           <TabBarButton {...props} />
            )
        }}
        />
        <Tabs.Screen 
        name="history"
        options={{
            title:"Histórico",
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="history" size={size} color={color}/>
            ),
            tabBarButton: (props) => (
           <TabBarButton {...props} />
            )
        }}
        />
    </Tabs>
  )
}

// Wrapper para tabBarButton, passando o ref corretamente
const TabBarButton = forwardRef<any, React.ComponentProps<typeof Pressable> & { onPress?: (event: GestureResponderEvent) => void }>(
  (props, ref) => {
    return <Pressable ref={ref} {...props} android_ripple={null} />;
  }
);

export default TabsLayout
