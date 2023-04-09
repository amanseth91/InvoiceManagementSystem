import "./Header.css";
import React, { Component } from 'react'
import {StyleSheet,View, Text} from 'react-native'
import left_logo from "./left_logo.svg";
import logo from "./logo.svg";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import Advance_Search from "./Advance_Search";
import Analytics from './Analytics';
// import Predict from "./Predict";
import Nouse from './Nouse';

export default function Header() {
  return (
    <div className="App">
      <div className="logo-flex">
      <View style={styles.container_header}>
        <View style={styles.square_abc}>
        <img src={left_logo} alt="abc-products" className="abc" />
        </View>
        <View style={styles.square}>
        <img src={logo} alt="hrc-logo" className="hrc" />
        </View>
        <View style={styles.square}/>
      </View>
      </div>
      <div className="header-part-two">
        <View style = {styles.container}>
        <View style={styles.square_one}>
        <div className="btn-grp">
          <button className="predict-button"> Predict </button>
          {/* <button> Analytics View </button> */}
          <Analytics />
          <Advance_Search />
          {/* <button className="search-button"> Advance Search </button> */}
        </div>
        </View>
        <View style={styles.search_square}>
        <input className="search-bar" placeholder="&nbsp;&nbsp;Search Customer ID" />
        </View>
        <View style={styles.square_three}>
        <div className="btn-grp2">
          <Add /> 
          <Edit />
          {/* <button className="edit-button"> Edit </button> */}
          {/* <button className="delete-button" onclick="togglePopup3()"> Delete </button> */}
          <Delete />

          {/* <Predict /> */}
          <Nouse />
          

          
        </div>
        </View>
        </View> 
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container_header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  square: {
    display:"flex",
    justifyContent:"center",
    backgroundColor: "#2d4250",
    width: 500,
    height: 100,
    margin: 4,
  },
  square_abc: {
    backgroundColor: "#2d4250",
    width: 500,
    height: 100,
    margin: 4,
    justifyContent: "center",
    right:"90px",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "row"
    // justifyContent:"space-between",
  },
  square_one: {
    backgroundColor: "#283d4a",
    width: 610,
    height: 36.5,
    margin: 4,
    marginRight: 40,
  },
  search_square: {
    backgroundColor: "#283d4a",
    width: 180,
    height: 40,
    margin: 4,
    marginRight: 60,
    paddingRight:10,
    // padding:10,
    // justifyContent:"space-between"
  },
  square_three: {
    backgroundColor: "#283d4a",
    width: 600,
    height: 36.5,
    margin: 4,
  },
});