import React, { Component } from 'react'
import StyledList from '../components/StyledList'
import StyledListItem from '../components/StyledListItem'
import StyledText from '../components/StyledText'


export default class ShowMore extends Component {
    render() {
        const { details } = this.props
        // let rowMore
        console.log("showInfoMORE", this.props.details)

        let rowNetwork = details ?  (
                    <StyledListItem >
                        On
                        <StyledText subtle >{details.network.name}</StyledText>
                    </StyledListItem>) : 'N/A'
        let schedule = details ?  (
                    <StyledListItem >
                        Schedule
                        <StyledText subtle >{details.schedule.days}</StyledText>
                    </StyledListItem>) : 'N/A'
        let status = details ? (
            <StyledListItem >
                Status
                        <StyledText subtle >{details.status}</StyledText>
            </StyledListItem>) : 'N/A'
        let genres = details ? (
            <StyledListItem >
                Genres
                        <StyledText subtle >{details.genres}</StyledText>
            </StyledListItem>) : 'N/A'

     
        



        return (
            <div>
                <h3>Show Info</h3>
                <StyledList>
                 {rowNetwork}
                 {schedule}
                 {status}
                 {genres}
                </StyledList>
            </div>
        );
    }

}

