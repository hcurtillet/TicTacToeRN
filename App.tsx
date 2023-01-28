import React from 'react';
import { PlayScreen } from './screens';
import { SafeAreaView } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';

export const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
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
