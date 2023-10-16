import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { colors, parameters } from "../global/styles";
import { Icon } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { carsAround, filterData, rideData } from "../global/data";
import { mapStyle } from "../global/mapStyle";
//import { Marker } from "react-native-maps";

const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState();
  const [errMsg, setErrMsg] = useState(null);
  const _mapRef = useRef(1);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrMsg("Permission to access location was denied");
        Alert.alert(errMsg);
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync();
      setLocation(coords.longitude, coords.latitude);
     // console.log(coords.longitude, coords.latitude);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={40}
          />
        </View>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Destress your commute</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Read a book... Take a nap. Stare out the window
              </Text>
              <TouchableOpacity
              onPress={() => navigation.navigate("Request")} 
              activeOpacity={0.7}
              style={styles.button1}>
                <Text style={styles.button1Text}>Ride with Uber</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require("../../assest/uberCar.png")}
              />
            </View>
          </View>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            //numColumns={4}
            data={filterData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.view2}>
                  <Image source={item.image} style={styles.image2} />
                </View>
                <Text style={{ alignSelf: "center" }}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.view3}>
          <Text style={styles.text3}>Where to?</Text>
          <View style={styles.view4}>
            <Icon type="material-community" name="clock-time-five" />
            <Text style={{ marginLeft: 5 }}>Now</Text>
            <Icon type="material-icon" name="arrow-drop-down" />
          </View>
        </View>

        <View style={{ height: 220,  }}>
          <FlatList
            data={rideData}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={[styles.view6, {alignSelf:"flex-end", marginRight: 15, marginTop: 20}]}>
                <Text style={{ fontSize: 16}}>
                  See All
                </Text>
               
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.view5}>
                <View style={styles.view6}>
                  <View style={styles.view7}>
                    <Icon type="ebtypo" name="location-pin" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.black,
                        fontWeight: "500",
                      }}
                    >
                      {item.street}
                    </Text>
                    <Text style={{ color: colors.grey3 }}>{item.area}</Text>
                  </View>
                </View>
                <Icon
                  type="ant-design"
                  name="right"
                  style={styles.icon1}
                  size={18}
                  color={colors.grey3}
                />
              </View>
            )}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.text4}>Around you</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MapView
              ref={_mapRef}
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
              showsUserLocation={true}
              followsUserLocation={true}
              zoomControlEnabled={true}
              toolbarEnabled={true}
              rotateEnabled={true}
              initialRegion={{...carsAround[4], latitudeDelta:0.008, longitudeDelta:0.008}}
            >
              {carsAround.map((cars, index) => (
                <Marker  key={index.toString()}
                coordinate={cars}
               
                >
                  <Image style={styles.carsAround} source={require("../../assest/carMarker.png")}/>
                </Marker>
                
              ))}
            </MapView>
          </View>
        </View>
      </ScrollView>
      <StatusBar
        style="light"
        backgroundColor={colors.blue}
        translucent={true}
      />
    </View>
  );
};

export default HomeScreen;

const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: colors.blue,
    height: parameters.headerHeight,
    alignItems: "flex-start",
  },

  image1: {
    height: 100,
    width: 100,
  },

  image2: { height: 60, width: 60, borderRadius: 30 },

  home: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
  },

  text1: {
    color: colors.white,
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 22,
  },

  view2: { marginBottom: 5, borderRadius: 15, backgroundColor: colors.grey6 },

  title: {
    color: colors.black,
    fontSize: 16,
  },
  view3: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: colors.grey6,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  text3: { marginLeft: 15, fontSize: 20, color: colors.black },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },

  view5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 25,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  view7: {
    backgroundColor: colors.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
    // width:"90%"
  },

  text4: {
    fontSize: 20,
    color: colors.black,
    marginLeft: 20,
    marginBottom: 20,
  },

  icon1: { marginLeft: 10, marginTop: 5 },

  view8: { flex: 4, marginTop: -25 },
  carsAround: {
    width: 28,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  view9: { width: 4, height: 4, borderRadius: 2, backgroundColor: "white" },
});
