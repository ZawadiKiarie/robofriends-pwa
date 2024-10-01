import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './App.css';
import { requestRobots, setSearchfield } from '../actions';

const mapStateToProps = state => {//tell me what piece of state i need to listen to and send it down as props
  return {
    searchField: state.searchRobots.searchField,//reducer
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {//tell me what props i  should listen to that are actions that need to get dispatched
  return{
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App({ robots, searchField, isPending, onSearchChange, onRequestRobots }) {

  useEffect(()=> {
    onRequestRobots()
  }, [onRequestRobots])//only run if count changes


  const filteredRobots = robots.filter((robot) => {
    return robot.name && robot.name.toLowerCase().includes(searchField)
  })

  return isPending ?
    <h1>Loading</h1> :
   (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
