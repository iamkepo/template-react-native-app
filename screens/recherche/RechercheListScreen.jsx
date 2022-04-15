import React from 'react';
import { StyleSheet, Dimensions, BackHandler, TouchableOpacity, StatusBar, ActivityIndicator, View, TextInput, ScrollView, RefreshControl} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Fontisto } from 'react-native-vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../../store/ActivityActions';

import RechercheCelluleComponent from '../../components/RechercheCelluleComponent';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

const wait = timeout => {
  return new Promise(resolve => { setTimeout(resolve, timeout); });
};
const screen = Dimensions.get("screen");

class RechercheListScreen extends React.Component {
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

  backAction = () => {
    BackHandler.exitApp()
    return true;
  };

  componentWillUnmount() {
   this.backHandler.remove();
  }

  componentDidMount(){
    
    if (this.props.data.user == undefined) {
      this.navigation.navigate("StarterScreen");
    }
    
    this.onRefresh();

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  onRefresh() {
    this.setState({refreshing: true});

    this.setState({list: testlist});

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
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <View style={styles.searchContainer}>

          <Fontisto name='search' size={18} color= "#2F80ED"/>

          <TextInput
            style={styles.textInput}
            placeholder="Rechercher un centre de santé"
            placeholderTextColor="#2F80ED"
            value={this.state.query}
            onChangeText={(text) => this.updateSearch(text)}
          />

          <TouchableOpacity onPress={() => this.navigation.navigate('RechercheMapScreen')}>
            <MaterialCommunityIcons name='map-marker' size={20} color= "#2F80ED"/>
          </TouchableOpacity>

        </View>

        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=> this.onRefresh()} />}>

          <View style={styles.sous}>
            {
              this.state.list.map((item, i)=>(
                <RechercheCelluleComponent
                  key={i}
                  item={item}
                  goto={()=> this.navigation.navigate('RechercheNoteScreen', { item: item })}
                />
              ))
            }
          </View>

        </ScrollView>

      </SafeAreaView >
    );
  }
}

const testlist = [
  {
    title: "Clinique Louis Pasteur",
    description: "Quartier Djassin, 631 route de Louho À 700m de l'hôtel Beaurivage sur la voie pavée en direction de Djassin",
    contact: "+229 97979797",
    img: require('../../assets/Rectangle254.png')
  },
  {
    title: "Clinique Louis Pasteur",
    description: "Quartier Djassin, 631 route de Louho À 700m de l'hôtel Beaurivage sur la voie pavée en direction de Djassin",
    contact: "+229 97979797",
    img: require('../../assets/unsplash_M4Xloxsg0Gw.png')
  },
  {
    title: "Clinique Louis Pasteur",
    description: "Quartier Djassin, 631 route de Louho À 700m de l'hôtel Beaurivage sur la voie pavée en direction de Djassin",
    contact: "+229 97979797",
    img: require('../../assets/unsplash_pA0uoltkwao.png')
  }
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%",
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  searchContainer: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginVertical: "5%",
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowOpacity: 0.5,
    elevation : 10,
  },
  textInput: {
    width: '75%',
    height: "100%",
    color: "#2F80ED"
  },
  sous: {
    width: screen.width,
    height: screen.height,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RechercheListScreen);
