import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'

export default function Chart({data}) {
    return (
        <View>
            <PieChart
                    data={{
                        labels: ['intelligence', 'strength', 'speed', 'combat', 'durabilit', 'power'],
                        datasets: [{
                        data: [
                            intelligence,
                            strength,
                            speed,
                            combat,
                            durabilit,
                            power,
                        ]
                        }]
                    }}
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
                    />
        </View>
    )
}
