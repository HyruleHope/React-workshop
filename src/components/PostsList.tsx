import React, { useEffect, useState } from 'react'
import { Post } from '../api/types'
import { getPosts } from '../api/post'
import PostItem from './PostItem'

const PostsList = () => {
    const [posts, setPosts] = useState<Array<Post>>([])
    const [loading, setLoading] = useState(false)


    async function _getPosts() {
      console.log("useEffect");
      const data = await getPosts();
      setPosts(data);
    }

    useEffect(() => {
      _getPosts();
    }, []);

    function renderItem(values: Post) {
        return (
            <div key={values.id}>
                <PostItem {...values} />
            </div>
        )
    }
    // Display "Loading" when data are actually loading
    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }
    // Display "no posts" if there is no posts
    if (posts.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Posts</p>
                </div>
            </section>
        )
    }

    return <ul className="post-list">{posts.map(renderItem)}</ul>
}

export default PostsList
