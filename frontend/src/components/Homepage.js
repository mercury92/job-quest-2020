import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import { Slider, InputNumber, Card, Col, Row, Tag, notification } from "antd";
import Header from "./Header";

function Homepage() {
  const [joke, setJoke] = useState({});
  const [numJoke, setNumJoke] = useState(3);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fetchData = async (e) => {
    try {
      const jokes = await axios.get(
        `/jokes/random/${numJoke}?firstName=${firstName}&lastName=${lastName}`
      );
      if (jokes.data) {
        console.log(jokes.data);
        setJoke(jokes);

        setFirstName("");
        setLastName("");
      }
    } catch (error) {
      notification.error({
        message: error.response?.data?.message || "something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [numJoke]);

  const selectName = (e) => {
    e.preventDefault();
    fetchData();
  };

  const numChange = (value) => {
    setNumJoke(value);
  };

  return (
    <Row className="hero">
      <Row className="container">
        <Row className="site-search">
          <Row sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <h2>make your name to be in the story like  Chuck Norris?</h2>
          </Row>
          <Row className="search-tool" sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <form onSubmit={(e) => selectName(e)}>
              <label  sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <input
                  type="text"
                  placeholder="firstname"
                  name="fistname"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></input>
              </label>
              <label sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <input
                  type="text"
                  placeholder="lastname"
                  name="lastname"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                ></input>
              </label>
              <button type="submit"md={{ span: 12 }} lg={{ span: 8 }}>change</button>
            </form>
          </Row>
        </Row>
        <Row className="site-card-border-less-wrapper">
          <Row className="slideNum">
            <Col span={6}>
              <Slider
                min={3}
                max={100}
                onChange={(value) => setNumJoke(value)}
                value={typeof numJoke === "number" ? numJoke : 0}
              />
            </Col>
            <Col span={2}>
              <InputNumber
                min={3}
                max={100}
                style={{ width: "70%" }}
                value={numJoke}
                onChange={(value) => setNumJoke(value)}
              />
            </Col>
          </Row>

          <Row gutter={[48, 28]}>
            {joke.data
              ? joke.data.value.map((joke, i) => (
                  <Col
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    key={i}
                  >
                    <Card
                      title={i + 1}
                      bordered={true}
                      className="card-border-less"
                    >
                      <div className="title-card-border-less">
                        {joke.categories.length > 0 ? (
                          <Tag color="magenta">{joke.categories}</Tag>
                        ) : null}
                      </div>
                      <div>{joke.joke}</div>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </Row>
      </Row>
    </Row>
  );
}

export default Homepage;
