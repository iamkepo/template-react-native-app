import React from 'react';
import { StyleSheet, ScrollView, RefreshControl} from 'react-native';

import { init } from '../store/Reducer';
import { wait } from '../utils/helper';

class RefreshTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
  componentDidMount(){
    this.onRefresh()
  }
  onRefresh() {
    this.setState({refreshing: true});

    this.props.onRefresh()

    wait(2000).then(() =>{ this.setState({refreshing: false}) ;});
  }

  render(){
    return (
      <ScrollView 
        refreshControl={
          <RefreshControl 
            refreshing={this.state.refreshing} 
            onRefresh={()=> this.onRefresh()} 
          />
        }
      >

        {this.props.children}

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
});
export default init(RefreshTemplate);