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

  handleRemove = (ticket) =>{
    
      axios.delete(`https://cors-anywhere.herokuapp.com/http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=3c028ce53a4b1f80`)
      .then(response => {
        console.log(response.data)

        if(response.data.notice){
          this.setState( (prevState) => ({
          tickets: prevState.tickets.filter(ticketItem => ticketItem.ticket_code!== ticket.ticket_code)       
          }))
        }
      })
      .catch( err => {
        console.log(err)
      })
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



        <TicketTable  tickets={this.state.tickets}  ticketStatus="All" handleRemove={this.handleRemove} />

        <TicketForm  handleSubmit={this.handleSubmit}/> 

        {/* <TicketTable  tickets={this.state.tickets.filter(ticket=>ticket.status==='open')} ticketStatus="Open"/>

        <TicketTable  tickets={this.state.tickets.filter(ticket=>ticket.status==='completed')} ticketStatus="Completed"/> */}

      </div>
      
    )
  }
}

export default App;
