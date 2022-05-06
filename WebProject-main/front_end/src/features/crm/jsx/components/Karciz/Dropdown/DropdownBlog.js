import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownBlog = () => {
    return (
        <>
            <Dropdown className="mb-0">
                <Dropdown.Toggle
                    variant=""
                    as="div"
                    className="btn-link i-false"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    alignRight={true}
                    className="dropdown-menu-right"
                >
                    <Dropdown.Item>Detallar</Dropdown.Item>
                    <Dropdown.Item className="text-danger">
                        İmtina
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

function DropdownBlogYear() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" as="div" className="fs-12">
                Bu həftə
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                <Dropdown.Item>Gündəlik</Dropdown.Item>
                <Dropdown.Item>Həftəlik</Dropdown.Item>
                <Dropdown.Item>Aylıq</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
function DropdownBlogYear2() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" as="div" className="fs-12">
                Bu həftə
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                <Dropdown.Item>Gündəlik</Dropdown.Item>
                <Dropdown.Item>Həftəlik</Dropdown.Item>
                <Dropdown.Item>Aylıq</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
function DropdownBlogYear3() {
    return (
        <Dropdown className="ml-auto text-right">
            <Dropdown.Toggle variant="" as="div" className="btn-link i-false">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                >
                    <g
                        stroke="none"
                        strokeWdth="1"
                        fill="none"
                        fillRule="evenodd"
                    >
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <circle fill="#fff" cx="12" cy="5" r="2"></circle>
                        <circle fill="#fff" cx="12" cy="12" r="2"></circle>
                        <circle fill="#fff" cx="12" cy="19" r="2"></circle>
                    </g>
                </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                <Dropdown.Item>Detalını görüntülə</Dropdown.Item>
                <Dropdown.Item>Redaktə et</Dropdown.Item>
                <Dropdown.Item>Sil</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export { DropdownBlogYear, DropdownBlogYear2, DropdownBlogYear3 }
export default DropdownBlog
