import React from "react";

import { Charts, Countrypicker, Cards } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends React.Component {
  //cnstructor is defaulty added in background
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchdata = await fetchData();

    this.setState({ data: fetchdata });
  }

  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);

    this.setState({ data: fetchdata });
    //fetch the data
    //set the data
  };
  render() {
    //const { data } = this.state;
    return (
      <div className={styles.img_bg}>
        <div className={styles.container}>
          <Cards data={this.state.data} />
          <Countrypicker handleCountryChange={this.handleCountryChange} />
          <Charts data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
