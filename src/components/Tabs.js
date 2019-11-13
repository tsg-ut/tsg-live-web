import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const currentTime = (new Date()).getTime();

    let active_index = 0;
    let active_priority = -1;
    this.props.children.forEach((child, index) => {
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
    // let currentIndex = this.state.index; // never used
    let tabs = this.props.children.map((child, index) => {
      const classNames = [ 'tab' ];
      if (this.state.index === index) classNames.push('active');
      const day = child.props.label.split(' ')[1];
      switch (day) {
        case '(金)':
          classNames.push('fri');
          break;
        case '(土)':
          classNames.push('sat');
          break;
        case '(日)':
          classNames.push('sun');
          break;
      }
      return (
        <li
          className={classNames.join(' ')}
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
