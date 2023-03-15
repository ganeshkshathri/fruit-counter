import { Component } from "react";
import './index.css'

class Fruit extends Component{
    state ={mango:0,banana:0}
    eatMangoCount=()=>{
        console.log("Eating Mango")
        this.setState(prevState=>({mango:prevState.mango+1}))
    }
    eatBananaCount=()=>{
        console.log("Eating Banana")
        this.setState(prevState=>({banana:prevState.banana+1}))
    }
    render(){
        let {mango,banana} = this.state
        return(
            <div className="fruits-counter-container ">
                <div className="fruits-counter">
                    <h1 className="count-text">Bob ate <span className="count">{mango}</span> mangoes <span className="count">{banana}</span> bananas</h1>
                    <div className="counters-control-container">
                        <div className="counter-control">
                            <img className="fruit-image" src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"></img>
                            <div className="button-container">
                                <button className="button" onClick={this.eatMangoCount}>Eat Mango</button>
                            </div> 
                        </div>
                        <div className="counter-control">
                            <img className="fruit-image" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="mango"></img>
                            <div className="button-container">
                                 <button className="button" onClick={this.eatBananaCount}>Eat Banana</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Fruit