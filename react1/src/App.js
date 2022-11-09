import React from "react";
import Comment from "./Comment";
import './Comment.css';
import Card from './Card';
class App extends React.Component {
    render() {
        return (
            <>
                <Card>
                    <Comment
                        name="Gyanendra"
                        time="8:29 AM"
                        comment="The blog is great"
                    />
                </Card>
                <Card>
                    <Comment
                        name="Margish"
                        time="7:00 AM"
                        comment="Nice work margish"
                    />
                </Card>
                <Card>
                    <Comment
                        name="femil"
                        time="9:15 PM"
                        comment="Good work buddy"
                    />
                </Card>
                <Card>
                    <Comment
                        name="tarun"
                        time="10:50AM"
                        comment="Beautiful blog"
                    />
                </Card>



            </>
        )
    }
}

export default App;