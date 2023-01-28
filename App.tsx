import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';
import { StackNavigation } from './components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
        <SafeAreaProvider>
            <StackNavigation />
        </SafeAreaProvider>
    );
};

export default App;
