import React from 'react';
import { StyleSheet, Dimensions, StatusBar, View, ScrollView, RefreshControl} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { init } from '../store/Reducer';

import HeaderComponent from '../components/HeaderComponent';
import { normalize } from '../utils/fonts';

const wait = timeout => {
  return new Promise(resolve => { setTimeout(resolve, timeout); });
};
const screen = Dimensions.get("screen");

class ScreenTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      refreshing: false,
      query: "",
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
  componentDidMount(){
    this.onRefresh();
  }
  onRefresh() {
    this.setState({refreshing: true});

    // this.setState({list: testlist});

    wait(2000).then(() =>{ this.setState({refreshing: false}) ;});
  }
  async updateSearch(text) {
    this.setState({list: []});
    this.setState({query: text});
    if (text != "" ){
      let stock = [];
      // this.props.data.list.forEach(item => {
      //   if (item.name.search(text) != -1) {
      //     stock = stock.concat(item);
      //   }
      // });
      this.setState({list: stock.sort(function(a, b){return a.distance - b.distance })});
    }
  }

  render(){
    return (
      <ActionSheetProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
          
          <HeaderComponent 
            route={this.route} 
            navigation={this.navigation} 
            title={this.props.title}
            left={this.props.left}
            right={this.props.right}
            setoption={this.props.setoption}
          />

          <ScrollView 
            refreshControl={
              <RefreshControl 
                refreshing={this.state.refreshing} 
                onRefresh={()=> this.onRefresh()} 
              />
            }
          >

            <View style={styles.sous}>
              {this.props.children}
            </View>

          </ScrollView>
        </SafeAreaView >
      </ActionSheetProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#FFF"
  },
  sous: {
    width: screen.width,
    height: screen.height-normalize(50),
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#EEE"
  },
});
export default init(ScreenTemplate);