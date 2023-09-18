import { 
    Image, 
    ImageSourcePropType,
    View, 
    useWindowDimensions 
} from "react-native";
type CardProps={
    source:ImageSourcePropType,
    item:{
        stars:number,
        title:string,
        location:string
    }
}
export function Card ({item,source}:CardProps){
    const {width,height}=useWindowDimensions()
    return(
        <View style={{
            width:width/1.9,
            height:height*0.3,
            marginLeft:16,
            marginRight:16,
            borderRadius:12,
        }} >
            <Image style={{ 
                height: "100%",
                width: "100%",
                borderRadius:12,

                resizeMode:'cover',
            }} source={source} />

        </View>
    )
}