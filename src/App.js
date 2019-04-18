import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state={
      tickets: []
    }
  }

  //will be called after the comp is loaded on the browser
  componentDidMount(){

    setTimeout(()=>{

    },2000)

    axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=3c028ce53a4b1f80`)
    .then(response => this.setState( () =>  ({tickets:response.data}) 
    ))
    .catch( err => console.log(err) )


  }
  render() {
    return (
      <div>

        <h1>Ticket Master</h1>
        <h2>Listing Tickets-{this.state.tickets.length}</h2>
        <table border="1">
        <thead>
          <tr>
            <th> Code </th>
            <th> Name </th>
            <th> Department </th>
            <th> Priority </th>
            <th> Message </th>
            <th> Status </th>
          </tr>

        </thead>

        <tbody>
        {
          this.state.tickets.map( ticket => {
            return (
              <tr key ={ticket.ticket_code}>
                <td>{ticket.ticket_code}</td>
                <td>{ticket.name}</td>
                <td>{ticket.department}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.message}</td>
                <td>{ticket.status}</td>
              </tr>

            )
          })
        }
        </tbody>
        </table>

      </div>
      
    )
  }
}

export default App;
