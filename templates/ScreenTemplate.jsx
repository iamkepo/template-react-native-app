import React from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { init } from '../store/Reducer';

import HeaderComponent from '../components/HeaderComponent';
import RefreshComponent from '../components/RefreshComponent';

import { normalize } from '../utils/fonts';
import { screen } from '../utils/helper';
import { bgThemePrimary, bgThemeSecondary, reverseTheme } from '../utils/styles';

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
      <SafeAreaView style={[styles.container, {backgroundColor: bgThemePrimary(this.props.data.user.theme)}]}>
        <StatusBar 
          backgroundColor={bgThemeSecondary(this.props.data.user.theme)} 
          barStyle={reverseTheme(this.props.data.user.theme)+"-content"} 
        />
        
        {this.props.title && <HeaderComponent 
          route={this.route} 
          navigation={this.navigation} 
          title={this.props.title}
          left={this.props.left}
          right={this.props.right}
        />}
        {
          this.props.onRefresh ?

          <RefreshComponent onRefresh={()=> this.props.onRefresh()} >
            <View style={[styles.sous, {backgroundColor: bgThemeSecondary(this.props.data.user.theme)}]}>
              {this.props.children}
            </View>
          </RefreshComponent>
          :
          <View style={[styles.sous, {backgroundColor: bgThemeSecondary(this.props.data.user.theme)}]}>
            {this.props.children}
          </View>
        }

      </SafeAreaView >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  sous: {
    width: screen.width,
    minHeight: screen.height,
    paddingTop: normalize(15),
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(100),
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    // borderColor: 'red',
    // borderWidth: 1
  },
});
export default init(ScreenTemplate);