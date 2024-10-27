
# EarthquakeDetector

EarthquakeDetector, React Native kullanarak cihazın ivmeölçer sensöründen veri alarak sarsıntı algılayan bir modüldür.

## Özellikler

- Cihazın ivmeölçer sensörünü kullanarak sarsıntıyı algılar.
- Belirli bir eşik değeri aştığında kullanıcıya uyarı verir.
- Gerçek zamanlı veri akışı sağlar.

## Gereksinimler

- React Native 0.60+
- `react-native-sensors` ve `rxjs` kütüphaneleri

## Kurulum

Projeye eklemek için önce kütüphaneleri yükleyin:

```bash
npm install earthquake-detector
```

Eğer iOS için çalışıyorsanız:

```bash
cd ios
pod install
cd ..
```

## Kullanım

```javascript
import React from 'react';
import EarthquakeDetector from 'earthquake-detector';

const App = () => {
  return <EarthquakeDetector threshold={2.5} />;
};

export default App;
```

## Lisans

MIT
