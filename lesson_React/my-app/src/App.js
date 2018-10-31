import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// функциональный конструктор, который следит за временем и выдает сообщение
function ShowBanner(props){
  if (props.time > 45){
    return(
      <div className="rest_block">Отдых</div>
    )
  } else {
    return(
      <div className="rest_block">Время работать</div>
    )
  }
}


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  //делаем, чтобы время обновлялось каждую секунду componentDidMount() и
  componentDidMount(){     
    this.timerId = setInterval(
      () => this.tick(), //функция, которая выполняется каждую секунду
      1000
      )
  }

    componentWillUnmount() {
      clearInterval(this.timerId)
    }

    tick() {
      this.setState({ // .setState() обновляет информацию в объекте (если это упрощенно сказать)
        date: new Date()
      })
    }

  render(){
    return(
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1>Текущее время: {this.state.date.toLocaleTimeString()}</h1>
       </div>
    )
  }
}

export default Clock;
