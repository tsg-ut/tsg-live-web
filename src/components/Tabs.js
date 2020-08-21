import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const currentTime = (new Date()).getTime();

    let active_index = 0;
    let active_priority = -1;
    this.props.children.forEach((child, index) => {
      if (child.props['data-activefrom'] < currentTime && child.props['data-priority'] > active_priority) {
        active_index = index;
        active_priority = child.props['data-priority'];
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
      const day = child.props['data-label'].split(' ')[1];
      switch (day) {
        case '(土)':
          classNames.push('sat');
          break;
        case '(日)':
        case '(祝)':
          classNames.push('sun');
          break;
        default:
          classNames.push('fri');
          break;
      }
      return (
        <li
          className={classNames.join(' ')}
          onClick={this.onClickTab.bind(this, index)}
          key={index}
        >
          {child.props['data-label']}
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
