import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function HeroCard({data}) {

    const navigation = useNavigation();
    const [intelligence, setIntelligence] = useState(parseInt(data.powerstats.intelligence));
    const [strength, setStrength] = useState(parseInt(data.powerstats.strength));
    const [speed, setSpeed] = useState(parseInt(data.powerstats.speed));
    const [combat, setcombat] = useState(parseInt(data.powerstats.combat));
    const [durabilit, setDurabilit] = useState(parseInt(data.powerstats.durability));
    const [power, setPower] = useState(parseInt(data.powerstats.power));

    useEffect(() =>{
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
        }verifica()
    },[])

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
    }

    function goDetails(){
        verifica();
        navigation.navigate('Details', 
        {
        heroId: data.id, photo: data.image.url,
        name: data.name, intelligence: intelligence, strength: strength,
        speed: speed, combat: combat, durability: durabilit,
        power: power, fullName: data.biography["full-name"], placeOfBirth: data.biography["place-of-birth"],
        firstAppearance: data.biography["first-appearance"], publisher: data.biography.publisher, gender: data.appearance.gender,
        race: data.appearance.race, height: data.appearance.height, weight: data.appearance.weight, eyeColor: data.appearance["eye-color"],
        hairColor: data.appearance["hair-color"], occupation: data.work.occupation, base: data.work.base, groupAffiliation: data.connections["group-affiliation"],
        relatives: data.connections.relatives,
        })
    }

    return (
        <View style={styles.heroCard}>
            
            <TouchableOpacity style={styles.goDetail} onPress={goDetails}>
                <Image style={styles.img} source={{uri: data.image.url}}/>
                <Text style={styles.text}>{data.name}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        height: 200,
        width: '90%',
        borderRadius: 5,
    },
    heroCard:{
        flex: 1,
        marginBottom: '5%',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'Poppins_600SemiBold',
        marginTop: '2%',
        fontSize: 15,
    },
    goDetail:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    }
})
