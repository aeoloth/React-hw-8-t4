import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ImageCounter(props) {
  return (
    <div className="image-counter">
      <div className="count">{props.count}</div>
      <img src={props.imageURL} alt="LOGO" onClick={props.onCount} />
    </div>
  )
}

// 

class Hero extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ count: this.state.count +  1 })
  }

  render() {
    return (
      <div className="App-header">
        <ImageCounter imageURL={this.props.imageURL} count={this.state.count} onCount={this.handleClick} />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
       <div>
         {this.props.heroes.map(hero  => {
          return  <Hero key={hero.id} title={hero.title} 
          subtitle={hero.subtitle}
          imageURL={hero.imageURL} />
         })}
    
  </div>
    )
  }
}

const data = [
  { 
    id: 1,
    title: "React",
    subtitle: "Библиотека для создания пользовательских интерфейсов",
    imageURL: "./react.png"
  },
  {
    id: 2,
    title: "Angular 2",
    subtitle: "Один фреймворк",
    imageURL: "./angular.jpg"
  }
]

ReactDOM.render(
 <App heroes={data} />,
  document.getElementById('root')
);

