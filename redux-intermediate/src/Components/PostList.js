import React from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {

        return (
            <div>
                PostList
                {console.log(this.props)}
                {this.props.posts.length!==0?this.props.posts.data.map((item) => {
                    return <div>{item.title}</div>
                }):<div>Data loading</div>}
            </div>
        )
    }
}

const mapList = (state) => {
    return { posts: state.posts };
}
export default connect(mapList, { fetchPosts })(PostList);