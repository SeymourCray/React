# Подготовка среды. Hello World на React Native
## Цель работы
Получить навыки настройки среды для отладки приложений на React Native.  
## Задания для выполнения
Перейдите на сайт https://snack.expo.io/ и установите на телефон приложение Expo. Отсканируйте QR-код и синхронизируйте Expo-редактор и ваше устройство.  
Используя стрелочную функцию (или класс), задайте компонент, который выведет на экран вашего устройства Hello World.  
Загрузить созданную программу на GitHub в репозиторий Student, используя формат в названии Фамилия (латинскими буквами)_1.  
## Контрольные вопросы
1. Можно ли писать в React Native все на JS?
Как React, так и React Native используют смесь JavaScript и специального языка разметки JSX.
2. Есть ли в React Native объект кнопка?
Да, есть. Ее можно добавить испльзуя:
import { Button } from 'react-native';  
Приложение:  
![image](../images/react_1.jpeg)  
Код:  
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const Greeting = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
      <Text style={{color:'white'}}>Hello World!</Text>
    </View>
  );
}
export default Greeting;

