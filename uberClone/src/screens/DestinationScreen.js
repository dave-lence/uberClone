import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useRef } from "react";
import { colors, parameters } from "../global/styles";
import { Icon, Avatar } from "@rneui/base";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";


const DestinationScreen = ({ navigation }) => {
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={styles.view1}
      >
        <Icon
          type="material-community"
          size={32}
          name="arrow-left"
          color={colors.grey1}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ alignSelf: "center" }}>
        <View style={styles.view3}>
          <Avatar
            rounded
            avatarStyle={{}}
            size={30}
            source={require("../../assest/blankProfilePic.jpg")}
          />
          <Text style={{ marginLeft: 5 }}>Order for Someone</Text>
          <Icon
            type="material-icon"
            name="arrow-drop-down"
            size={26}
            color={colors.grey1}
          />
        </View>
      </TouchableOpacity>

      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Going to..."
        listViewDisplayed="auto"
        debounce={400}
       // currentLocation={true}
        ref={textInput2}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={true}
        autoFocus={true}
        styles={autoComplete}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
      />

    
    </View>
  );
};

export default DestinationScreen;

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10,
  },

  view2: { backgroundColor: colors.white, zIndex: 4, paddingBottom: 10 },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: colors.grey6,
    height: 50,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.white,
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
