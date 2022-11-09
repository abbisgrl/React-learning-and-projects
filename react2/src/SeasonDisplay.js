import React from "react";
// const getSeason = (lat, month) => {
//     console.log(lat, month)
//     if (month > 2 && month < 9) {
//         return lat > 0 ? 'Summer' : 'Winter'
//     } else {
//         return lat > 0 ? 'Winter' : 'Summer'
//     }
// }
class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            season: ''
        }
    }
    getSeason(hemisphere, month) {
        console.log(hemisphere);
        if (month > 2 && month < 9) {
            return hemisphere === 'N' ? 'Summer' : 'Winter'
        } else {
            return hemisphere === 'N' ? 'Winter' : 'Summer'
        }
    }

    // componentDidMount() {
    //     const value =  this.getSeason(this.props.hemisphere, this.props.month);
    //     this.setState({
    //         season:value
    //     })
    // }

    // static getDerivedStateFromProps=(props,state)=>{
    //     const value =  this.getSeason(props.hemisphere,props.month);

    //     this.setState({
    //         season:value
    //     })
    // }

    componentDidUpdate(prevProps) {
        const {hemisphere} = this.props; 
        if(prevProps.hemisphere !== hemisphere){
            const value =  this.getSeason(this.props.hemisphere, this.props.month);
            this.setState({
                season:value
            })
        }
    }

    render() {
        const {hemisphere} = this.props;
        console.log('Hemishire ',hemisphere)
        return (
            <div>
                {this.state.season === 'Winter' ? 'The current season is Winter' : 'The current season is Summer'}
                {/* {console.log(this.props)} */}
            </div>
        )
    }

}
// const SeasonDisplay = (props) => {
//     const season = getSeason(props.latitude, props.month);
//     return (
//         <div>{season === 'Winter' ? 'The current season is Winter' : 'The current season is Summer'}</div>
//     )
// }

export default SeasonDisplay; 