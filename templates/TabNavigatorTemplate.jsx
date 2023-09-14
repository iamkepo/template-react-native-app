import React from 'react';
import { StyleSheet} from 'react-native';

import { init } from '../store/Reducer';

import HeaderComponent from '../components/HeaderComponent';

class TabNavigatorTemplate extends React.Component {
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
      <>
        <HeaderComponent 
          route={this.route} 
          navigation={this.navigation} 
          title={this.props.title}
          left={this.props.left}
          right={this.props.right}
        />
        {this.props.children}
      </> 
    );
  }
}


const styles = StyleSheet.create({});
export default init(TabNavigatorTemplate);