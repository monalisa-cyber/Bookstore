import React from "react";
import axios from "axios";
import "./SearchFilter.css";
import { Card, Button, Row, Col } from "react-bootstrap";
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


// renderBooks = books =>{
//   <div>
//   <Row style={{ margin: "17px" }}>
//     {this.props.posts.map((pd, idx) => (
//       <Col key={idx} md={3} sm={4} xs={12}>
//         <Card style={{ margin: "10px" }}>
//           <Card.Img
//             top
//             height="200px"
//             src={pd.image}
//             alt="Card image cap"
//           />
//           <Card.Body id="card-body-style">
//             <Card.Title id="title_justify">{pd.title}</Card.Title>
//             {/* <Card.Subtitle style={{ width: '18rem',margin:"center"}}>{pd.description}</Card.Subtitle> */}
//             <Card.Text id="title_justify">₹{pd.price}</Card.Text>
//             <Card.Text>{pd.catagory}</Card.Text>
//             <Card.Text >{pd.description}</Card.Text>
//             <Button
//               onClick={this.props.setModalIsOpenToTrue}
//               style={{ backgroundColor: "orange" }}
//             >
//               Add to cart
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
// </div>
// }



  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const filteredData = data.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });


    // const {filter,data}=this.state;
    // const filteredBooks = data.filter(books =>{
    //   return books.title.toLowerCase().indexOf(filter.toLowerCase()) !==-1
    // })

    return (
      <div class="container-search-feild">
        <input value={filter} onChange={this.handleChange} placeholder="Search here...." list="atyu" />
        {/* <input label="search country" icon="search" onChange={this.handleChange}/> */}
      
          {/* {filteredBooks.map(books => {
           return this.renderBooks(books)
          }) */}

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
