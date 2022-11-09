import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.imageRef = React.createRef();
    }
    render() {
        return (
            <>
                {/* {console.log('data', this.props.data)} */}
                <div className="imageContainer">
                    {this.props.data.map((item) => {
                        return <div key={item.id} style={{ border: '2px solid black' }}>
                            <img ref={this.imageRef} src={item.urls.regular} className="imageCard" />
                            {/* <h5>{item.tags[2].title}</h5> */}
                        </div>

                    })}
                </div>

            </>
        )
    }
}

export default Card;