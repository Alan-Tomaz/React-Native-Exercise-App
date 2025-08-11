import { Slot } from 'expo-router'
import React from 'react'
import { LoadingProvider, useLoading } from '../state/LoadingContext'
import { LoadingOverlay } from '../components/LoadingOverlay';

function Layout() {

     const { loading } = useLoading();

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
      <Slot />
    </>
  );
}

export default Layout
