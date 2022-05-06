import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { updatePostAction } from '../../../../store/actions/PostActions'
import { getPost } from '../../../../store/selectors/PostSelectors'
import { Row, Col, Card, Table, Badge } from 'react-bootstrap'

function EditPost(props) {
    const [post, setPost] = useState(props.post)

    const dispatch = useDispatch()
    useEffect(() => {
        setPost(props.post)
    }, [props.post])

    function onUpdatePost(e) {
        e.preventDefault()
        dispatch(updatePostAction(post, props.history))
    }

    return (
        <>
            <form onSubmit={onUpdatePost}>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Edit Post</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Ad</th>
                                            <th>Soyad</th>
                                            <th>Təyinat</th>
                                            <th>Lokasiya</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.pid}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            pid: e.target.value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.title}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            title: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.mfdate}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            mfdate: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.deadlinedate}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            deadlinedate:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.clientname}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            clientname:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="border border-gray-500 form-control-lg "
                                                    value={post.price}
                                                    onChange={(e) =>
                                                        setPost({
                                                            ...post,
                                                            price: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    type="submit"
                                                    className="text-nowrap btn btn-dark light btn-md"
                                                >
                                                    Redaktə et
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </form>
        </>
    )
}

const makeStateToProps = () => {
    const post = getPost()

    return (state, props) => {
        return {
            post: post(state, props.match.params.id),
        }
    }
}

export default connect(makeStateToProps)(EditPost)
