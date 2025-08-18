import { Slot, Stack } from 'expo-router'
import React from 'react'
import { LoadingProvider, useLoading } from '../state/LoadingContext'
import { LoadingOverlay } from '../components/LoadingOverlay';

function Layout() {
  
  return (
    <LoadingProvider>
         <LayoutContent/>
    </LoadingProvider>
  )
}


function LayoutContent() {
  const { loading } = useLoading();
  return (
    <>
      <LoadingOverlay visible={loading} />
      {/* <Slot /> */}
      {/* <Stack
        screenOptions={{
          headerShown: false, // se quiser esconder o header
        }}
      /> */}
      <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default Layout
