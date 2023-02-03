import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import { init } from '../store/Reducer';
import { normalize } from '../utils/fonts';
import { wait, screen } from '../utils/helper';

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
    if (this.props.onRefresh) {
      this.onRefresh()
    }
  }
  onRefresh() {
    this.setState({refreshing: true});

    if (this.props.onRefresh) {
      this.props.onRefresh()
    }

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

        <View style={styles.sous}>

          {this.props.children}
          
        </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  sous: {
    width: screen.width,
    height: screen.height-normalize(50),
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#EEE"
  },
});
export default init(RefreshTemplate);