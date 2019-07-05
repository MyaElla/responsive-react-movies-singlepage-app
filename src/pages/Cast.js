import React, { Component } from 'react'
// import axios from 'axios'

class Cast extends Component {
    state = {
        castShow: null
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.state.id === prevProps.id) {
            console.log("componet did update state.", this.state)
            this.fetchData(this.props.showID);
        }
    }
    render() {
        // console.log("this.props.STATE", this.props)
        return (
           <div>
               x
                {/* {data.map((show) => (

                        <ul>
                            {tab.articles.map((itemData) => (
                                <p key={show.index}>{itemData} </p>
                            ))}
                        </ul>
                ))} */}
           </div>
        )
    }
}

export default Cast