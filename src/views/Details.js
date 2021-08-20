import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'


export default function Details({route}) {
    

    const [intelligence, setIntelligence] = useState(parseInt(route.params.intelligence));
    const [strength, setStrength] = useState(parseInt(route.params.strength));
    const [speed, setSpeed] = useState(parseInt(route.params.speed));
    const [combat, setcombat] = useState(parseInt(route.params.combat));
    const [durabilit, setDurabilit] = useState(parseInt(route.params.durability));
    const [power, setPower] = useState(parseInt(route.params.power));

    const navigation = useNavigation();
    
    

    useEffect(() => {
        function verifica(){
            if(isNaN(intelligence)){
                setIntelligence(0);
            }if(isNaN(speed)){
                setSpeed(0)
            }if(isNaN(strength)){
                setStrength(0)
            }if(isNaN(combat)){
                setcombat(0)
            }if(isNaN(durabilit)){
                setDurabilit(0)
            }if(isNaN(power)){
                setPower(0)
            }
            console.log(intelligence, strength, speed, combat, durabilit, power)
        }verifica()
    },[])

    function callAlert(){
        Alert.alert("App name: HeroStats \nVersion: 1.0 \nAuthor: Gabriel Cordeiro")
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnGoback}>
                            <Image source={require('../img/back.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                
                    <Text style={styles.nameHero}>{route.params.name}</Text>

                    <TouchableOpacity onPress={callAlert}>
                            <Image source={require('../img/info.png')} style={styles.backArrow} />
                    </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollHero} showsVerticalScrollIndicator={false}>

                <View style={styles.firstSection}>
                    <Image style={styles.imgHero} source={{uri: route.params.photo}} />
                </View>

                

                <View style={styles.aboutHero}>
                        <Text style={styles.titleAbout}>About the Hero</Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Name: </Text>
                            <Text style={styles.answer}>{route.params.fullName}</Text>
                        </Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Place of Birth: </Text>
                            <Text style={styles.answer}>{route.params.placeOfBirth}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.name}>First Appearance: </Text>
                            <Text style={styles.answer}>{route.params.firstAppearance}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.name}>Publisher: </Text>
                            <Text style={styles.answer}>{route.params.publisher}</Text>
                        </Text> 
                </View>

                <View style={styles.aboutHero}>
                    <Text style={styles.titleAbout}>Powerstats</Text>
                    <PieChart
                     data={[
                        {
                          name: 'Intelligence',
                          population: intelligence,
                          color: '#045E90',
                          legendFontColor: '#000',
                          legendFontSize: 15,
                        },
                        {
                          name: 'Strength',
                          population: strength,
                          color: '#ADD900',
                          legendFontColor: '#000',
                          legendFontSize: 15,
                        },
                        {
                          name: 'Speed',
                          population: speed,
                          color: '#F14444',
                          legendFontColor: '#000',
                          legendFontSize: 15,
                        },
                        {
                          name: 'Combat',
                          population: combat,
                          color: '#0D9D00',
                          legendFontColor: '#000',
                          legendFontSize: 15,
                        },
                        {
                            name: 'Durabilit',
                            population: durabilit,
                            color: '#EF6704',
                            legendFontColor: '#000',
                            legendFontSize: 15,
                          },
                          {
                            name: 'Power',
                            population: power,
                            color: 'rgb(0, 0, 255)',
                            legendFontColor: '#000',
                            legendFontSize: 15,
                          },
                     ]}
                    width={Dimensions.get('window').width - 50} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                        borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute 
                    />
                    <View>
                    
                </View>

                </View>


                <View style={styles.aboutHero}>
                        <Text style={styles.titleAbout}>Appearance</Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Gender: </Text>
                            <Text style={styles.answer}>{route.params.gender}</Text>
                        </Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Race: </Text>
                            <Text style={styles.answer}>{route.params.race}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.name}>Height: </Text>
                            <Text style={styles.answer}>{route.params.height[0]} / </Text>
                            <Text style={styles.answer}>{route.params.height[1]}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.name}>Weight: </Text>
                            <Text style={styles.answer}>{route.params.weight[0]} / </Text>
                            <Text style={styles.answer}>{route.params.weight[1]}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.name}>Eye Color: </Text>
                            <Text style={styles.answer}>{route.params.eyeColor}</Text>
                        </Text> 
                        <Text>
                            <Text style={styles.name}>Hair Color: </Text>
                            <Text style={styles.answer}>{route.params.hairColor}</Text>
                        </Text> 
                </View>

                <View style={styles.aboutHero}>
                        <Text style={styles.titleAbout}>Work</Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Occupation: </Text>
                            <Text style={styles.answer}>{route.params.occupation}</Text>
                        </Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Base: </Text>
                            <Text style={styles.answer}>{route.params.base}</Text>
                        </Text>
                </View>

                <View style={styles.aboutHero}>
                        <Text style={styles.titleAbout}>Connections</Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Group affiliation: </Text>
                            <Text style={styles.answer}>{route.params.groupAffiliation}</Text>
                        </Text>
                        <Text style={styles.informations}>
                            <Text style={styles.name}>Relatives: </Text>
                            <Text style={styles.answer}>{route.params.relatives}</Text>
                        </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingLeft: 26,
        paddingRight: 26,
        paddingTop: 30
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameHero:{
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    subheader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backArrow:{
        width: 40
    },
    firstSection:{
        display: 'flex',
        flexDirection: 'row',
        height: 350,
        justifyContent: 'center',
        marginBottom: 20
    },
    imgHero:{
        width: 250,
        borderRadius: 5
    },
    titleAbout:{
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        marginBottom: 10,
        marginTop: 20,
    },
    name:{
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
    },
    informations:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    answer:{
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',

    
    },
    btnGoback:{
        
    }
})
