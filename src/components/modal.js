import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap'
import { Button } from "reactstrap";
import Image from './image';
import "../styles/modal.css";

const Info = ({ title, detail }) => (
    <Row
        style={{
            padding: 5
        }}
    >
        <Col lg={2}>{title}</Col>
        <Col>{detail}</Col>
    </Row>
)

export const DataModal = ({ post, close, show }) => (
    <Modal
        show={show}
        onHide={close}
        dialogClassName="modal-90w"
    >
        <Modal.Header closeButton>
            <Modal.Title>{post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Container>
                            <Info title="Name:" detail={post.name} />
                            		          <Button
									            color="secondary"
									            type="button"
									            style={{display: 'flex', justifyContent: 'right'}}
									          >
									            Close
		                </Button>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies in urna ac faucibus. Nulla mollis auctor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam non odio quam. Nullam quis fermentum odio. Quisque malesuada sed felis a euismod. Aenean vitae arcu massa. Proin non risus nunc. In euismod velit vitae odio fringilla viverra. Nulla orci est, venenatis auctor justo ac, euismod suscipit quam.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
)