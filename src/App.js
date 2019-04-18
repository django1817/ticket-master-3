import React, { Component } from 'react';
import axios from 'axios'
import TicketTable from './TicketTable'
import TicketForm from './TicketForm'

class App extends Component {

  constructor(){
    super()
    this.state={
      tickets: []
    }
  }

  handleSubmit = (ticket) => {
  //  console.log('app component',ticket)
      this.setState( (prevState) =>( {
        tickets: prevState.tickets.concat(ticket)
      }))
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



        <TicketTable  tickets={this.state.tickets}  ticketStatus="All"/>

        <TicketForm  handleSubmit={this.handleSubmit}/> 

        <TicketTable  tickets={this.state.tickets.filter(ticket=>ticket.status==='open')} ticketStatus="Open"/>

        <TicketTable  tickets={this.state.tickets.filter(ticket=>ticket.status==='completed')} ticketStatus="Completed"/>

      </div>
      
    )
  }
}

export default App;
