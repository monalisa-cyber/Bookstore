import React from "react";
import axios from "axios";
import "./SearchFilter.css";
class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      data: [],
    };
    // console.log(axios.get("http://localhost:8080/api/products"));
  }

  async componentDidMount() {
    const res = await axios.get("https://salty-taiga-93281.herokuapp.com/api/products");
    this.setState({
      data: res.data,
    });
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    // const filteredData = [];
    const filteredData = data.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });

    return (
      <div class="container-search-feild">
        <input value={filter} onChange={this.handleChange} placeholder="Search here...." list="atyu" />
        <datalist id="atyu">
          {filteredData.map((item) => (
            <div><option value={item.title} /></div>
          ))}
        </datalist>
      </div>
    );
  }
}

export default SearchFilter;
