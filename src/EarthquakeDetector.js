
import { useState, useEffect } from 'react';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';
import { map } from 'rxjs/operators';

// İvmeölçer güncelleme sıklığı (ms)
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

const useEarthquakeDetector = (threshold = 2.5) => {
  const [isShakeDetected, setIsShakeDetected] = useState(false);
  const [dataStream, setDataStream] = useState([]);

  useEffect(() => {
    const subscription = accelerometer
      .pipe(
        map(({ x, y, z }) => {
          const acceleration = Math.sqrt(x * x + y * y + z * z);
          return { timestamp: Date.now(), acceleration };
        })
      )
      .subscribe(({ timestamp, acceleration }) => {
        setIsShakeDetected(acceleration > threshold);
        setDataStream(prevData => [
          ...prevData.slice(-100),
          { timestamp, acceleration }
        ]);
      });

    return () => subscription.unsubscribe();
  }, [threshold]);

  return { isShakeDetected, dataStream };
};

export default useEarthquakeDetector;
