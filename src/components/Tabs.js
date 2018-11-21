import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const currentTime = (new Date()).getTime();

    console.log(currentTime);
    let active_index = 0;
    let active_priority = -1;
    this.props.children.forEach((child, index) => {
      console.log(child.props.activefrom);
      console.log(child.props.priority);
      if (child.props.activefrom < currentTime && child.props.priority > active_priority) {
        active_index = index;
        active_priority = child.props.priority;
      }
    });
    this.state = {
      index: active_index,
    }
  }

  onClickTab(clickedIndex) {
    this.setState({index: clickedIndex});
  }

  render() {
    let currentIndex = this.state.index;
    let tabs = this.props.children.map((child, index) => {
      return (
        <li
          className={`tab ${this.state.index === index ? 'active' : ''}`}
          onClick={this.onClickTab.bind(this, index)}
          key={index}
        >
          {child.props.label}
        </li>
      )
    });
    let panels = this.props.children.map((child, index) => {
      return (
        <div
          className={`tabpanel ${this.state.index === index ? 'active' : ''}`}
          key={index}
        >
          {child}
        </div>
      )
    });

    return (
      <div>
        <ul className="tablist">
          {tabs}
        </ul>
        {panels}
      </div>
    );
  }
}

export default Tabs
