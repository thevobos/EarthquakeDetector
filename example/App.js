
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import useEarthquakeDetector from '../src/EarthquakeDetector';

const App = () => {
  const threshold = 2.5;
  const { isShakeDetected, dataStream } = useEarthquakeDetector(threshold);

  const data = dataStream.map(({ acceleration }) => acceleration);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {isShakeDetected ? "Sarsıntı Algılandı!" : "Sarsıntı Yok"}
      </Text>
      <Text style={styles.thresholdText}>Eşik Değeri: {threshold}</Text>
      
      <LineChart
        style={styles.chart}
        data={data}
        svg={{ stroke: isShakeDetected ? 'red' : 'blue', strokeWidth: 2 }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  thresholdText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  chart: {
    height: 200,
    width: '90%',
  },
});

export default App;
