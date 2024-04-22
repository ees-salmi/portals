import React , {Component} from 'react'

class Counter extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }

    }

    increment(){
       
            // this.setState({
            //     count : this.state.count + 1 

            // }, () => {console.log('the callback value',this.state.count)})
            // essayer d utilister setState et ne pas modifier l etat directement
            //si on  veut qu'un certain code doit etre execute apres que l etat soit 
            //cahnger on doit le placer comme la deuxieme parametre de setState method
            this.setState(prevState => ({count : prevState.count + 1}))
            console.log(this.state.count)
       
    }

    incrementFive(){
        for(let i = 0 ; i < 5 ; i ++)
        {
            this.increment()
        }
    }

    render(){

        return(
            <div>
            <p>count - {this.state.count}!</p>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.incrementFive()}>Incrementfive</button>

            </div>
        )
    }

}

export default Counter