import React from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { action } from './store';

class Home extends React.Component {
  render() {
    const { name, newsList } = this.props;
    // console.log(this.props)
    return (
      <div>
        {/* <Header/> */}
        <div>this is home {name}!</div>
        <button onClick={() => alert(1)}>button</button>
        <ul>
          {
            newsList && newsList.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
  componentDidMount() {
    this.props.getHomeList()
  }
}

// Home.loadData = (store) => {
//   // action.getHomeList()
//   // console.log(action)
//   return store.dispatch(action.getHomeList())
// }

const mapStateToProps = ({ home }) => {
  return {
    name: home.name,
    newsList: home.newsList
  }
}
const mapDispathchToProps = dispatch => ({
  getHomeList() {
    // dispatch
  }
})

const exportHome = connect(state => state.home, action)(Home);

exportHome.loadData = loadData;

function loadData(store) {
  return store.dispatch(action.getHomeList())
}

export default exportHome;