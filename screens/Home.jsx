import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModel from '../components/SearchModel'


const categories = 
[
     {category : "Nice" , _id : "asdashbdhb"} , 
     {category : "Football" , _id : "asdashxbdhb"} ,
     {category : "Man" , _id : "aeqsdashxbdhb"}  , 
     {category : "Women" , _id : "aeqersdashxbdhb"} , 
     {category : "Cricket" , _id : "aeqeoqwrsdashxbdhb"} , 
     {category : "Lion" , _id : "qaaeqersdashxbdhb"}
 ]


const products = [{
    price : 23123 , 
    name : "Sample" , 
    _id : "asduwihrAh" , 
    images : [{
        url : "https://picsum.photos/200/300"
    }]
}]

export default function Home() {

    const [category , setCategory] = useState("");
    const [activeSearch , setActiveSearch] = useState(false);
    const [searchQuery , setSearchQuery] = useState("")

    const categoryButtonHandler = (id) => {
        setCategory(id);
    }

    console.log(category);

  return (

    <>
    
    {activeSearch && (<SearchModel searchQuery={searchQuery} setActiveSearch={setActiveSearch} setSearchQuery={setSearchQuery} products={products}  />) }    
    <View style={defaultStyle} >
      <Header/>
      <View style={{
        paddingTop : 70 , 
        flexDirection : "row", 
        justifyContent : "space-between", 
        alignItems : "center"
      }} >
        <View  >
            <Text style={{fontSize : 25}} >Our</Text>
            <Text style={{fontSize : 25 , fontWeight : "900" }} >Products</Text>
        </View>

        {/* Search bar */}

        <View>
            <TouchableOpacity onPress={() => setActiveSearch(prev => !prev) } >
                <Avatar.Icon 
                    icon={"magnify"} 
                    size={50} 
                    color={"gray"} 
                    style={{backgroundColor : colors.color2 , elevation : 12}} 
                />
            </TouchableOpacity>
        </View>
      </View>

      <View 
        style={{
            flexDirection : "row" , 
            height : 80
        }}
      >
         <ScrollView horizontal contentContainerStyle={{
            alignItems : "center"
         }} showsHorizontalScrollIndicator={false} >
         {
            categories.map((item , index)=> (

                <Button  
                    key={index}
                    style={{
                        backgroundColor : category === item._id ? colors.color1 : colors.color5  ,
                        borderRadius : 100 , 
                        margin : 5
                    }}

                    onPress={()=> categoryButtonHandler(item._id) }
                >
                    <Text 
                        style={{
                            fontSize : 12 , 
                            color : category === item._id ? colors.color2 :  "gray"
                        }}
                    >
                        {item.category}
                    </Text>
                </Button>
            ))
          }
         </ScrollView>
       
      </View>


      {/* Products */}
    </View>
    </>
  )
}