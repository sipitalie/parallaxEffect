import { 
    Image, 
    ImageSourcePropType,
    View, 
    Animated,
    useWindowDimensions 
} from "react-native";

type CardProps={
    source:ImageSourcePropType,
    position:any,
    index:number,
    item:{
        stars:number,
        title:string,
        location:string
    }
}
export function Card ({index,item,source, position}:CardProps){
    const {width,height}=useWindowDimensions()
    const inputRange=[(index-1)*width,index*width,(index+1)*width]
const translateX=position.interpolate({
        inputRange,
        outputRange:[-width*0.7,0,width*0.7]
    })
    
    const ItemWidth=width/1.2
    const ItemHeight=height*0.3
   
    return(
        <View style={{
            
            width:ItemWidth,  
            height:ItemHeight,
            marginLeft:16,
            overflow:"hidden",
            alignItems:"center",
            marginRight:16,
            borderRadius:12,

        }} >
            <Animated.Image style={[{ 
                height:ItemHeight,
                width:ItemWidth*1.6,
                borderRadius:12,
                resizeMode:'cover',
                transform:[{
                    translateX
                }]
            }]} source={source} />
        </View>
    )
}