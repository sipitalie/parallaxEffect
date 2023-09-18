import { ReactNode } from "react";
import { View , ViewStyle, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export function Header({styles, children}:{styles?:ViewStyle, children:ReactNode}){
    const { width, height }=useWindowDimensions()
    const { top } =useSafeAreaInsets()
    return <View style={[{
        backgroundColor:"#212227",
        maxHeight:height/2.5,
        paddingVertical:12,
        paddingTop:top+12,
        width:width,
        paddingHorizontal:16,
        borderBottomColor:"#272728",
        borderBottomWidth:1
        },styles]}>
        {children}
    </View>
} 