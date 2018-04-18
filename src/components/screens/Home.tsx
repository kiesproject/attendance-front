import * as React from 'react';

interface HomeScreenProperties {
  number: number;
  increase: Function;
  decrease: Function;
}

class Home extends React.Component<HomeScreenProperties, any> {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        Some state changes:
        {number}
        <div>
          <button onClick={() => increase(1)}>Increase</button>
          <button onClick={() => decrease(1)}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default Home;
