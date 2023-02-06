import React from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { init } from '../store/Reducer';

import HeaderComponent from '../components/HeaderComponent';
import RefreshComponent from '../components/RefreshComponent';

import { normalize } from '../utils/fonts';
import { screen } from '../utils/helper';

class ScreenTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
  componentDidMount(){
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
          {
            this.props.onRefresh ?

            <RefreshComponent onRefresh={()=> this.props.onRefresh} >
              {this.props.children}
            </RefreshComponent>
            :
            <View style={styles.sous}>
              {this.props.children}
            </View>
          }

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
    height: screen.height-normalize(80),
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#EEE"
  },
});
export default init(ScreenTemplate);