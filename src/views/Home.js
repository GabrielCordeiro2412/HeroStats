import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import HeroCard from '../components/HeroCard'

export default function Home() {

    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState();
    const [heroName, setHeroName] = useState();
    const [loading, setLoading] = useState(true);
    const [pesquisa, setPesquisa] = useState(false);

    
        useEffect(() =>{
            fetch(`https://superheroapi.com/api/2308834499252431/search/a`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    setHeroes(data.results);
                    setLoading(false);
                    console.log(search)
                })
        }, [])
        

        useEffect(() => {
            if(!search){
                fetch(`https://superheroapi.com/api/2308834499252431/search/a`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    setHeroes(data.results);
                    setLoading(false);
                    console.log(search)
                    setPesquisa(false);
                })
            }
        },[search]);

        function searchHero(){
            if(!search){
                Alert.alert('Type any word to search')
            }else{
                fetch(`https://superheroapi.com/api/2308834499252431/search/${search}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    })
                    .then(response => response.json())
                    .then(data => {
                        setHeroes(data.results);
                        setLoading(false);
                        console.log(search)
                        setPesquisa(true);
                    })
            }
        }

    return (
        <View style={styles.container}>
            <Text style={styles.titleSearch}>Search</Text>
            
            <View style={styles.textBar}>
                <TextInput
                placeholder="Type a hero's name"
                placeholderTextColor="#000"
                value={search}
                onChangeText={(texto) => setSearch(texto)}
                style={styles.txtInput}
                />
                <TouchableOpacity onPress={searchHero}>
                    <Image source={require('../img/search.png')} style={styles.imgSearch}/>
                </TouchableOpacity>
            </View>
            
            {
                search && pesquisa ? (
                    <View style={styles.listHerois}>
                    
                        {
                            loading ? (
                                <ActivityIndicator color="#000" size={50}/>
                            ) : (
                            <View>
                                
                                <Text style={styles.titleDiscover}>Results for: {search}</Text>
                                <FlatList
                                    style={styles.heroList}
                                    data={heroes}
                                    renderItem={({item}) => <HeroCard data={item}/>}
                                    keyExtractor={item => item.id}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                            )
                        }
                    </View>
                ) : (
                <View style={styles.listHerois}>
                <Text style={styles.titleDiscover}>Discover</Text>
                    {
                        loading ? (
                            <ActivityIndicator color="#000" size={50}/>
                        ) : (
                            <FlatList
                                style={styles.heroList}
                                data={heroes}
                                renderItem={({item}) => <HeroCard data={item}/>}
                                keyExtractor={item => item.id}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                            />
                        )
                    }
                </View>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 26,
        paddingRight: 26,
        paddingTop: 30
    },
    titleSearch:{
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },
    txtInput:{
        width: '85%',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
        borderRadius:  5,
        height: 60,
        paddingLeft: 10,
        color: '#000',
        shadowColor: "#000",
    },
    textBar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 5,
        alignItems: 'center',
        paddingRight: 10,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },
    imgSearch:{
        width: 35
    },
    titleDiscover:{
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        marginTop: 20,
        marginBottom: 20
    },
    listHerois:{
        flex: 1,
        justifyContent: 'space-between',
    },
})
