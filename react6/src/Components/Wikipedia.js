import React, { useState, useEffect } from "react";
import axios from 'axios';

function Wikipedia(props) {
    // const [term, setTerm] = useState(props.searchTerm);
    const [result, setResult] = useState('');

    useEffect(() => {
        const result = async () => {
            if(props.searchTerm!==''){
                const searchResult = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='${props.searchTerm}`)
                // console.log(searchResult.data[3]);
                setResult(searchResult.data[3])
            }
        }
        result();

    }, [props.searchTerm])

    if (result !== '') {
        return (
            <>
                <div id="container">
                    <div>Your Search Results</div>
                        {result.map((item,index) => {
                            return <div key={index} id="element"><a href={item}>{item}</a></div>
                        })}
                </div>
            </>
        )
    } else {
        return (
            <div id="welcome"> Welcome To Wikipedia</div>
        )
    }
}

// class Wikipedia extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             term: '',
//             result: ''
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         if (props.searchTerm !== state.term) {
//             return {
//                 term: props.searchTerm
//             }
//         }
//         // return null
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.searchTerm !== this.props.searchTerm) {
//             console.log(this.state.term)
//             const result = async () => {
//                 const searchResult = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='${this.state.term}`)
//                 // console.log(searchResult.data[3]);
//                 this.setState({
//                     result: searchResult.data[3]
//                 })
//             }
//             result();
//         }
//     }
//     render() {
//         if (this.state.result !== '') {
//             console.log(this.state.result)
//             return (
//                 <>
//                     <div id="container">
//                         <div>Your Search Results</div>
//                         <ul>
//                             {this.state.result.map((item) => {
//                                 return <li><a href={item}>{item}</a></li>
//                             })}
//                         </ul>
//                     </div>
//                 </>
//             )
//         }
//         else {
//             return (
//                 <div id="welcome"> Welcome To Wikipedia</div>
//             )
//         }
//     }
// }

export default Wikipedia;