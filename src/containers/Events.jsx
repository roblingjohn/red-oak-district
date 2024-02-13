import React from "react";
import { Container } from "react-bootstrap";

const Events = () => {
  const items = [
    {
      displayName: "Red Oak District Farmer's Market",
      dates: "April - October",
      description:
        "The Red Oak District Farmer's Market offers a vibrant community gathering space where local farmers, artisans, and vendors come together to showcase their products. Located in the heart of South Fulton, Georgia, this market provides residents and visitors with access to fresh, locally grown produce, handcrafted goods, and homemade delicacies.",
    },
    {
      displayName: "Summer Series",
      dates: "June-August",
      description:
        "The Red Oak District Summer Series is a dynamic lineup of events and activities that celebrate the spirit of community, creativity, and culture in South Fulton, Georgia. This series, typically held June to August offers residents and visitors a diverse range of experiences. Past events included: Concerts on the Lawn, Community Dinners, Stand Up Comedy Nights, and Cookouts. ",
    },
    {
      displayName: "Red Oak Art Festival",
      dates: "October",
      description:
        "The Red Oak Art Festival is an annual celebration of creativity and culture, showcasing the talents of local and regional artists in South Fulton, Georgia. Held in the historic Red Oak District, this vibrant event offers visitors the opportunity to explore a diverse array of artistic expressions, from painting and sculpture to spoken word, ceramics, and more.",
    },
  ];

  return (
    <Container>
      <h1>Events</h1>
      {items.map((item) => (
        <>
          <h3>{item.displayName}</h3>
          <h6>{item.dates}</h6>
          <p>{item.description}</p>
        </>
      ))}
    </Container>
  );
};

export default Events;
