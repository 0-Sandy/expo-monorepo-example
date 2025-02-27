import { HomeMessage, HomeMessageIcon } from '@repo/feature-home'
import { useTranslation } from '@repo/lang'
import Head from 'expo-router/head'
import { Image, StyleSheet, Platform, Text } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
 const { t, i18n } = useTranslation()
 return (
  <>
   <Head>
    <title>{t('home:title')}</title>
    <meta name="description" content={t('home:description')} />
   </Head>
   <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
     <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />
    }
   >
    <ThemedView style={styles.titleContainer}>
     <ThemedText>
      <HomeMessage />
      <Text>{t('currentLanguage', { lng: i18n.language })}</Text>
     </ThemedText>
     <ThemedText>
      <HomeMessageIcon />
     </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
     <ThemedText>
      Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
      Press{' '}
      <ThemedText type="defaultSemiBold">
       {Platform.select({
        ios: 'cmd + d',
        android: 'cmd + m',
        web: 'F12'
       })}
      </ThemedText>{' '}
      to open developer tools.
     </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
     <ThemedText>
      Tap the Explore tab to learn more about what's included in this starter app.
     </ThemedText>
    </ThemedView>
   </ParallaxScrollView>
  </>
 )
}

const styles = StyleSheet.create({
 titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8
 },
 stepContainer: {
  gap: 8,
  marginBottom: 8
 },
 reactLogo: {
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: 'absolute'
 }
})
