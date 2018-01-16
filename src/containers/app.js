import {Component} from 'react'
import {Table} from "../components/Table"
import {connect} from "react-redux"
import {setName} from "../actions/userAction"

 class App extends Component {
    render(){
        return(
            <div>
                <Table/>
                <button onClick={ () => this.props.setName("5orda") }> fucker </button>
                <p>{this.props.user.userName}</p>


            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.userReducer,
        math: state.mathReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName : (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);