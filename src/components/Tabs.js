import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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
