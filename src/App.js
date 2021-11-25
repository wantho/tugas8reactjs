import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Breadcrumb,
  Card,
  Image,
  Carousel,
  Row,
  Col,
  ListGroup,
  Jumbotron,
  Button,
  Form,
  Figure,
  Modal,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Card
          style={{ width: "100%", height: "60px", backgroundColor: "black" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary">Pilih Bahasa</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Indonesia</Dropdown.Item>
              <Dropdown.Item href="/">Inggris</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Image
            src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
            width="60px"
            height="50px"
            marginLeft="1000px"
            roundedCircle
          />
        </Card>

        <Breadcrumb style={{ width: "300px", marginLeft: "810px" }}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/berita">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/bola">Bola</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="psg"
            />

            <Carousel.Caption>
              <h3>Neymar Menjadi Mesin Gol PSG</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="Inggris"
            />

            <Carousel.Caption>
              <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg"
              alt="Indonesia"
            />

            <Carousel.Caption>
              <h3>
                Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23
                Tetap Bagus
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />

        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia </ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            <Jumbotron>
              <h3>DIVISI PRIMERA</h3>
              <p>Main Untuk Catalunya, Gerrard Pique Minta Dihormati</p>

              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>

          <Col>
            <Figure>
              <Figure.Image
                width={150}
                height={150}
                alt="User"
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              ></Figure.Image>

              <Figure.Caption>Silahkan Login</Figure.Caption>
            </Figure>

            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Masukkan Nama" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group>
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>

              <Button variant="primary">Login</Button>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Anda Berhasil Login</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save Username & Password</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
