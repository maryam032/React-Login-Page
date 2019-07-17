import React from 'react'
import './Button.css'
const style = {
        borderRadius:15,
        border:'3px solid #2C3E50',
        color:'white',
        marginLeft:'auto',
        marginRight:'auto',
        width:'92%',
        height:450,
        padding:10,
        outline:'none' 
}

const butto = {
    outline:'none',
    height:50,
    border:'none',
    width:120,
    color:"white",
    backgroundColor:"#DF6631",
    marginLeft:250,
    marginRight:30,
    marginTop:2,
    borderRadius:50,
    textAlign:"left",
    textAlign:"center",
    fontSize:20,
    
}
class Body extends React.Component{
    constructor (props)
    {
        super(props);
        this.state=({
            username:'',
            password:'',
            isLoggedIn:false,
            message:<p style={{outline:'none',marginLeft:165,fontWeight:'bold',marginLeft:'50',fontWeight:'bold',color:'rgb(40, 116, 166)',fontSize:15}}>Invalid Username or Password !</p>
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
                message:<p style={{outline:'none',marginLeft:165,fontWeight:'bold',color:'#B0BEC5',border:null,fontSize:15}}>Empty Username or Password</p>
            })
        }
        else
        {
            if(this.state.username==='admin'&& this.state.password==='admin')
            {
                //login success
                this.setState({
                    message:<p style={{outline:'none',marginLeft:165,fontWeight:'bold',color:'#D6EAF8 ',fontSize:15}}>Login Successfull !</p>
                })
            }
            else
            {
                //login failed
                this.setState({
                    message:<p style={{outline:'none',marginLeft:165,fontWeight:'bold',fontWeight:'bold',color:'#F1C40F ',fontSize:15}}>Invalid Username or Password !</p>
                })
            }
        }
    }
    render()
    {
        return( <div style={{marginTop:50,outline:'none',backgroundColor:"#FEF9E7  "}}>
        <div style={style}>
            <div style={{outline:'none',borderRadiusleft:10,backgroundColor:'#2874A6  ',width:'50%',float:'left',height:'98%'}}>
                <h1 style={{outline:'none',textAlign:'left',color:'white',textAlign:"center",fontWeight:'bold'}}>Welcome</h1>
                 <img style={{outline:'none',display:'block',width:"300px" ,marginLeft:'auto', marginRight:'auto'}}src={process.env.PUBLIC_URL +"/pic.jpg"}
                 alt="Mypic" />
            </div>
                <div style={{outline:'none',borderRadiusLeft:10,backgroundColor:'#2874A6',width:'50%',float:'right',height:'98%'}}>
                <img style={{marginTop:8,outline:'none',display:'block',width:"90px" ,marginLeft:'auto', marginRight:'auto'}}src={process.env.PUBLIC_URL +"/keyhole.png"}
                 alt="Mypic" />
                    <h1 style={{outline:'none',textAlign:'center',color:'white',fontWeight:'bold'}}>Sign-In</h1>
                    <p style={{outline:'none',fontWeight:'bold',marginBottom:3,marginLeft:165}}>Username</p>
                    <input style={{border:'none',outline:'none',padding:15,marginLeft:165,borderRadius:5,textAlign:"left",fontSize:15,width:250}} type="text" onChange={this.handleUsername} value={this.state.username} placeholder="Enter Username : " name="username"/><br/> 
                    <p style={{outline:'none',fontWeight:'bold',marginBottom:3,marginLeft:165}}>Password</p>
                    <input style={{marginLeft:165,border:'none',outline:'none',padding:15,borderRadius:5,textAlign:"left",fontSize:15,width:250}} type="password" onChange={this.handlePassword} value={this.state.password} placeholder="Enter Password : " name="password"/>
                    {this.state.message} 
                    <input className="button" type="button" onClick={this.handleSubmit} value="Login"/>
                    
                 </div> 
            </div>
        </div>
        )
    }
}
export default Body