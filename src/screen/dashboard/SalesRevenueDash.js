import React, { useEffect, useState } from 'react'
import { Box, Button, Text } from 'native-base'
import { Dimensions, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { getOrdersByFranchisePeriod } from '../../utils/api-call/getOrdersByFranchisePeriod'

const SalesRevenueDash = () => {
  const [period, setPeriod] = useState('day')

  const switchOrdersPeriod = (idFranchise, newPeriod)=>{
    setPeriod(newPeriod)
      getOrdersByFranchisePeriod(idFranchise, newPeriod)
      .then((res)=>{
        console.log(res.data);
      })
  }

  return (
    <View style={{marginTop:10}}>
  <Box>
  <Button.Group isAttached colorScheme="yellow" mx={{
    base: "auto",
    md: 0
  }} size="sm">
      <Button onPress={()=>switchOrdersPeriod(1,'day')} variant={period === 'day' ? 'solid' : 'outline'}>Jour</Button>
      <Button variant="outline">Semaine</Button>
      <Button variant="outline">Mois</Button>
      <Button variant="outline">Année</Button>
    </Button.Group>;
  </Box>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#1d292b",
      backgroundGradientFrom: "#1d292b",
      backgroundGradientTo: "#5F8D85",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
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

export default SalesRevenueDash
