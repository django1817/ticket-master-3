import React from 'react'
import axios from 'axios';



class TicketForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            department:'',
            priority:'',
            message:''
        }

    }

        handleNameChange = (e) =>{
            //console.log(e.target.value)
            const name=e.target.value
            this.setState( () =>( {name} ) )    // name : name es6 concise property
        }

        handleDepartmentChange = (e) =>{
            const department=e.target.value
            this.setState( () => ( {department} ))

        }

        handlePriorityChange = (e) =>{
            const priority =e.target.value
            this.setState( () =>( {priority} ))

        }

        handleMessageChange = (e) =>{
            const message=e.target.value
            this.setState( () =>( {message} ))
        }

        handleSubmit = (e) =>{
            e.preventDefault()
            const formdata={
                name: this.state.name,
                department: this.state.department,
                priority: this.state.priority,
                message: this.state.message
            }

            axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=3c028ce53a4b1f80`,formdata )
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })

            


        }



        render() {

            return(
                <div>
                <h2> Add Ticket</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name <br/>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>

                    </label> <br/>    

                    <label>
                        Department <br/>
                        <select value={this.state.department} onChange={this.handleDepartmentChange}>
                            <option value="">Select</option>
                            <option value="technical">Technical</option>
                            <option value="sales">Sales</option>
                            <option value="hr">Human Resource</option>
                        </select>
                    </label> <br/>

                    <label>
                        Priority <br/>
                        <select value={this.state.priority} onChange={this.handlePriorityChange}>
                            <option value="">Select</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label> <br/>

                    <label>
                        Message <br/>
                        <textarea value={this.state.message} onChange={this.handleMessageChange}>

                        </textarea>

                    </label><br/>

                    <input type="submit" name="Add Ticket" />

                </form>

                </div>
            )
        }


    
}

export default TicketForm