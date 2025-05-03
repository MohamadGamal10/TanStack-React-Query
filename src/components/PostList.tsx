import { Button, ButtonGroup, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router'
import useGetPosts from '../hooks/useGetPosts'
import { PostStatusType } from '../types';

interface PostListProps {
    selectedPostStatus: PostStatusType;
}

function PostList({selectedPostStatus}: PostListProps) {
    const {isLoading, isError, error, data} = useGetPosts(selectedPostStatus);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th style={{ width: "10%" }}>Top Rate</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((post, index) => (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to="/info">{post.title}</Link>
                            </td>
                            <td>{post.status}</td>
                            <td style={{ textAlign: "center" }}>
                                <Form.Check type="switch" checked={post["top-rate"]} />
                            </td>
                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger">Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
}

export default PostList
