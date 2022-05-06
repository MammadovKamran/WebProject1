import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPostAction } from '../../../../store/actions/PostActions';
import { Row, Col, Card, Table, Badge, } from "react-bootstrap";

export default function CreatePost(props) {
    const [pid, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [mfdate, setMfdate] = useState('');
	const [clientname, setClientname] = useState('');
	const [price, setPrice] = useState('');
	const [deadlinedate, setDeadlineDate] = useState('');

    const dispatch = useDispatch();

    function onCreatePost(e) {
        e.preventDefault();
        const postData = {
			pid,
            title,
            mfdate,
            deadlinedate,
			clientname,
			price,
        };
        dispatch(createPostAction(postData, props.history));
    }

    return (
        <>
			<div className="container h-100">
				<form onSubmit={onCreatePost} className="post-table">
					<Row className="justify-content-center">	
						
						<div className="col-xl-6 col-lg-8 col-md-6 col-sm-6" >
							<div className="card project-boxed">
								<div className="card-header align-items-start ">
									<div>
										<h6 className="fs-18 font-w500 mb-0"><Link to={"#"} className="text-black user-name">create a new post</Link></h6>
									</div>
									{/* <DropdownBlog /> */}
								</div>	
								<div className="card-body p-0 pt-2">
									<ul className="list-group border-no list-group-flush">
										<li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Id : </strong></label>
											<input
												type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={pid}
												onChange={(e) => setNumber(e.target.value)}
											/> 
										</li>
										<li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Name : </strong></label>
											<input
												type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={title}
												onChange={(e) => setTitle(e.target.value)}
											/>
										</li>
										<li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Create Date : </strong></label>
											<input
												type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={mfdate}
												onChange={(e) => setMfdate(e.target.value)}
											/>
										</li>
                                        <li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Deadline Date: </strong></label>
											<input
                                                type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={deadlinedate}
												onChange={(e) => setDeadlineDate(e.target.value)}
											/>
										</li>
                                        <li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Client Name : </strong></label>
											<input
												type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={clientname}
												onChange={(e) => setClientname(e.target.value)}
											/>
										</li>
										<li className="list-group-item">
											<label className="mb-1 col-sm-4"><strong>Price : </strong></label>
											<input
												type='text'
												className='border border-gray-500 form-control-lg col-sm-8'
												value={price}
												onChange={(e) => setPrice(e.target.value)}
											/>
										</li>
										
									</ul>
								</div>
								<div className="card-footer  border-0">
									<div className="d-flex justify-content-end">
										<button
											type='submit'
											className='btn btn-primary btn-md mr-3'
										>
											Create Post
										</button>
										<Link
											to='/postpage'
											className='btn btn-dark light btn-md'
										>
											Back to Posts
										</Link>	
									</div> 
								</div>
								
							</div>
						</div>
					</Row>		
				</form>
			</div>	
            
        </>
    );
}
