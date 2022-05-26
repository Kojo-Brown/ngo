/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {
  ContactContent,
  FooterForm,
  FooterIcons,
  FooterSocial,
  SecondaryHeader,
} from "../../styles/Styles";
import { Button, Form, Table } from "react-bootstrap";
import Fb from "../../assets/fb.png";
import YouTube from "../../assets/youtube.png";

const containerStyle = {
  width: "90%",
  height: "80vh",
  margin: "2rem auto",
  border: "1px solid",
  borderRadius: "10px",
};

const center = {
  lat: 5.614818,
  lng: -0.205874,
};

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCX4ZamCKyhFjEKZz75xBotXKHI_svgKTg",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="">
      <ContactContent>
        <div className="left">
          <SecondaryHeader>Contact</SecondaryHeader>
          <Table striped bordered hover >
            <tbody>
              <tr>
                <td>Address</td>
                <td>No.1 Abbey Road, London, W1 ECH, UK</td>
              </tr>
              <tr>
                <td>We are open</td>
                <td>Open House on the 24th, – 12 mid day to 5 pm.</td>
              </tr>
              <tr>
                <td>Call</td>
                <td>+44 (0) 800 123 4567</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>mail@example.com</td>
              </tr>
            </tbody>
          </Table>

          <FooterSocial>
            <span>Connect with us:</span>
            <FooterIcons src={Fb} alt="" />
            <FooterIcons src={YouTube} alt="" />
          </FooterSocial>
        </div>

        <div className="right">
        <SecondaryHeader>Send us a message</SecondaryHeader>
        <FooterForm>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="name"
            />
            <label htmlFor="floatingInputCustom">Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="subject"
            />
            <label htmlFor="floatingInputCustom">Subject</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Leave a comment here"
            />
            <label>Comment</label>
          </Form.Floating>

          <Button
            variant="success"
            type="submit"
            style={{ marginTop: "2rem", fontWeight: "600" }}
          >
            Submit
          </Button>
        </FooterForm>
        </div>
      </ContactContent>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <Marker position={center} />
        </>
      </GoogleMap>
    </div>
  ) : null;
};

export default Contact;
