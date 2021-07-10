import React from 'react'
import UserService from '../services/UserService'

class UserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users:[],
        }
    }

    componentDidMount(){
        UserService.getUsers().then( (res) => {
            this.setState({users: res.data})
        });
        

    }
    render(){
        return(
            <div>
                <h1> Users: </h1>
                <table>
                    <tbody>
                { this.state.users.map(
                    user => <tr key = {user.id}>
                        <td> {user.id} </td>
                        <td> {user.login} </td>
                        <td> {user.email} </td>
                    </tr>
                ) }
                </tbody>
                </table>

                <form action="http://localhost:3000/adminBase">
                        <input type="submit" value="home" />
            </form>
            </div>
            
        )
    }
}

export default UserComponent