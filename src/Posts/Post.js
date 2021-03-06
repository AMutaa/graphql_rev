import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import UpdatePost from './UpdatePost';
import EditMode from './EditMode';


// Access to isEditMode

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={POST_QUERY} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          if (loading) return 'Loading...';
          const { post, isEditMode } = data;
          return (
            <div>
              <EditMode isEditMode={isEditMode} />
              {isEditMode ? (
                <section>
                  <h1>Edit Post</h1>
                  <UpdatePost post={post} />
                </section>) : (
                  <section>
                    <h1>{post.title}</h1>
                    <Mutation mutation={UPDATE_POST}
                      variables={{
                        id: post.id,
                        check: !post.check
                      }}
                      // response we are expecting from the server
                      optimisticResponse={{
                        __typename: "Mutation",
                        updatePost: {
                          __typename: 'Post',
                          check: !post.check
                        }
                      }}
                      // updating the data in the cache
                      update={(cache, { data: { updatePost } }) => {
                        const data = cache.readQuery({
                          query: POST_QUERY,
                          variables: {
                            id: post.id
                          }
                        })
                        data.post.check = updatePost.check;
                        cache.writeQuery({
                          query: POST_QUERY,
                          data: {
                            ...data,
                            post: post.data.post
                          }
                        })
                      }}
                    >
                      {updatePost => (
                        <input style={{ height: '100px' }} type="checkbox" checked={post.check} onChange={updatePost} />)}
                    </Mutation>

                  </section>
                )}
            </div>
          )
        }
        }
      </Query >
    )
  }
}

const POST_QUERY = gql`
 query post($id: ID!){
  post(where: {id: $id} ){
    id
    title
    body
  }
  isEditMode @client
}
 `
//query to be used on our checkbox input
const UPDATE_POST = gql`
  mutation updatePost($check: Boolean, $id: ID!) {
    updatePost( where: {id: $id}, data: { check: $check}) {
      title
      body
      id
      check
    }
  }
`