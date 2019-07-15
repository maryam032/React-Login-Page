import React from 'react'

const style = {

        borderRadius:20,
        border:'5px solid #2C3E50',
        color:'white',
        margin:30,
        padding:20
   
}
class Body extends React.Component{
    constructor (props)
    {
        super(props);
        this.state=({
            username:'',
            password:'',
            isLoggedIn:false,
            message:''
        })
    }
    handleUsername=(event)=>
    {
        //update username state on every change
        this.setState({
            username:event.target.value
        })
    }
    handlePassword=(event)=>
    {
        //update username state on every change
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=()=>{
        //Handling Button Click
        if(this.state.username===''||this.state.password==='')
        {
            //empty username or password
            this.setState({
                message:<p style={{color:'red',fontSize:15}}>Empty Username or Password</p>
            })
        }
        else
        {
            if(this.state.username==='admin'&&this.state.password==='admin')
            {
                //login success
                this.setState({
                    message:<p style={{color:'green',fontSize:15}}>Login Success !</p>
                })
            }
            else
            {
                //login failed
                this.setState({
                    message:<p style={{color:'red',fontSize:15}}>Invalid Username or Password !</p>
                })
            }
        }
    }
    render()
    {
        return(
        <div style={style}>
            {this.state.message}<br/>
            <input type="text" onChange={this.handleUsername} value={this.state.username} placeholder="Enter Username : " name="username"/><br/>
            <input type="password" onChange={this.handlePassword} value={this.state.password} placeholder="Enter Password : " name="password"/>
            <br/>
            <input type="button" onClick={this.handleSubmit} value="Sign-In"/>
        </div>
        )
    }
}
export default Body