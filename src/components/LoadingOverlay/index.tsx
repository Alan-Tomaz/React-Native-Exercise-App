import React from 'react';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export function LoadingOverlay({ visible }: {visible: boolean}) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size={50} color={colors.icon} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)', // semitransparente para escurecer o fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
});