/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AuthProvider } from './src/components/Auth/AuthProvider';
import { TopDisProvider } from './src/components/Auth/TopDisProvider';

const AppWrapper = () => {
    return (
        <AuthProvider>
            <TopDisProvider>
                <App />
            </TopDisProvider>
        </AuthProvider>
    )
}
AppRegistry.registerComponent(appName, () => AppWrapper);
