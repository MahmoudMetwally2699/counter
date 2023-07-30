import React, { Component } from 'react';

class Counter extends Component
{
    state = {
        count: 0
    }
    render ()
    {

        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{ this.formateCount() }</span>
                <button onClick={ this.handleIncrement } className={ "btn btn-secondary btn-sm" }>Increment</button>
            </React.Fragment>
        );
    }
    getBadgeClasses ()
    {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes

    }
    formateCount ()
    {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
    handleIncrement = () =>
    {
        this.setState( { count: this.state.count + 1 } )
    }


}
export default Counter;
