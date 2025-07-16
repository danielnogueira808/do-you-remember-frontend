import { Stack } from 'expo-router';

if (__DEV__) {
  import('@/config/ReactotronConfig');
}

export default function RootLayout() {
  return <Stack />;
}
