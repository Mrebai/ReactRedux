import {Component} from 'react'
import {Circle} from "./Circle"
export class Table extends Component{
    constructor(props){
        super(props)
        let items = [
            ["yellow", "white" , "white" , "white , white , white" ,],
            ["white", "white" , "white" , "white , white , white"],
            ["white", "white" , "red" , "white , white , white"],
            ["white", "white" , "white" , "white , white , white"],
            ["white", "white" , "white" , "white , white , white"]
        ]
        this.state = {
            tableState    : items,
            score         : 0 ,
            currentTarget : [0,0]
        }
    }
    getIndexOfRed(){
        for(let i = 0; i < this.state.tableState.length; i++ ){

                if(this.state.tableState[i].indexOf("red") !== -1){

                    return [i,this.state.tableState[i].indexOf("red")]
                }
        }
    }

    getIndexOfYellow(){
        for(let i = 0; i < this.state.tableState.length; i++ ){

            if(this.state.tableState[i].indexOf("yellow") !== -1){

                return [i,this.state.tableState[i].indexOf("yellow")]
            }
        }
    }




    checkYellowExistAquired(){
        for(let i = 0; i < this.state.tableState.length; i++ ){
            if(this.state.tableState[i].indexOf("yellow") !== -1){
                return true
            }
        }
        return false
    }



    generateNextTarget(){
        let y = Math.floor((Math.random() * 5));
        let x = Math.floor((Math.random() * 5));
        let t = this.getIndexOfRed()
        let targetArray = this.state.tableState
        while (t[0] == y && t[1] == x){
            y = Math.floor((Math.random() * 5));
            x = Math.floor((Math.random() * 5));
        }
        targetArray[y][x] = "yellow"
        this.setState({
            items:targetArray
        })
    }







    onRightArrowClicked(){
        let x = this.getIndexOfRed()
        if (x[1] < 4) {
            var newArray = this.state.tableState
            newArray[x[0]][x[1]] = "white"
            newArray[x[0]][x[1] + 1] = "red"

            this.setState({
                items: newArray
            });
        }
    }
    onLeftArrowClicked(){
        let x = this.getIndexOfRed()
        if (x[1] > 0) {
            let newArray = this.state.tableState
            newArray[x[0]][x[1]] = "white"
            newArray[x[0]][x[1] + -1] = "red"

            this.setState({
                items: newArray
            });
        }
    }
    onDownArrowClicked(){
        let x = this.getIndexOfRed()
        if (x[0] < 4) {
            let newArray = this.state.tableState
            newArray[x[0]][x[1]] = "white"
            newArray[x[0] + 1][x[1]] = "red"

            this.setState({
                items: newArray
            });
        }
    }
    onUpArrowClicked(){
        let x = this.getIndexOfRed()
        if (x[0] > 0) {
            let newArray = this.state.tableState
            newArray[x[0]][x[1]] = "white"
            newArray[x[0] - 1][x[1]] = "red"

            this.setState({
                items: newArray
            });
        }
    }

    onKeyPressed(e) {

       if(e.key == "ArrowRight"){

           this.onRightArrowClicked()

       } else if(e.key == "ArrowLeft"){
           this.onLeftArrowClicked()
       }else if(e.key == "ArrowDown"){
           this.onDownArrowClicked()
       }else if(e.key == "ArrowUp"){
           this.onUpArrowClicked()
       }

       if(this.checkYellowExistAquired() == false){
           this.generateNextTarget()

           var s = this.state.score
           this.setState({
               score: s + 1
           });

           let t2 = this.getIndexOfYellow()
           let t1 = this.getIndexOfYellow()
           if(t1[0] == t2[0] && t1[1] == t2[1] ){
               setTimeout(() => {
                   t2 = this.getIndexOfYellow()


                   let newArray = this.state.tableState;
                   newArray [t2[0]] [t2[1]] = "white"
                   this.generateNextTarget()
                   this.setState({
                       tableState: newArray
                   });



               }, 5000);
           }

       }


    }

    render(){


        return(
            <div onKeyDown={(e) => this.onKeyPressed(e)} tabIndex="0">
                <div className="score">{"Score = " + this.state.score}</div>
                <table>
                    <tbody>

                        <Circle line = "1" style={this.state.tableState[0]}/>
                        <Circle line = "2"  style={this.state.tableState[1]}/>
                        <Circle line = "3"  style={this.state.tableState[2]} />
                        <Circle line = "4"  style={this.state.tableState[3]}/>
                        <Circle line = "5"  style={this.state.tableState[4]}/>
                    <tr>{this.props.username}</tr>
                    </tbody>

                </table>
                <button onKeyDown={ this.onRightArrowClicked.bind(this)}> hello</button>
            </div>
        )
    }
}

