import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QRScanner() {
  const [facing, setFacing] = useState("back");
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>

        <Text style={styles.message}>We need your permission to use the camera</Text>

        <Button onPress={requestPermission} title="Grant Permission" />

      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <View style={styles.container}>
      
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"], // Scan only QR codes
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>

            <Text style={styles.text}>Flip Camera</Text>

          </TouchableOpacity>
        </View>
      </CameraView>

      {scanned && (
        <View style={styles.overlay}>

          <Text style={styles.text}>Scanned: {scannedData}</Text>

          <Button title="Scan Again" onPress={() => setScanned(false)} />
            
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});
