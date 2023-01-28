import React from 'react';

export type Screens = 'playScreen' | 'paramsScreen';

export interface ScreenInterface {
    name: string;
    component: React.ComponentType<any>;
}
