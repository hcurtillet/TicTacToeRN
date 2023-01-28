import React from 'react';
import { PlayScreen } from './screens';
import { SafeAreaView } from 'react-native';
import { init } from 'i18next';
import en from './i18n/en.json';

init({
    lng: 'en',
    debug: true,
    resources: {
        en: en,
    },
});

const App = () => {
    return (
        <SafeAreaView>
            <PlayScreen />
        </SafeAreaView>
    );
};

export default App;
