import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'

const cards = [
    {
        title: "Generate Itinerary",
        text: "Use AI to generate personalized itinerary in just a few clicks",
        image: "tour.png",
        active: false
    },
    {
        title: "Expense Tracker",
        text: "Keep track of your budget and consolidate all trip related expenses at one spot",
        image: "hotel.png",
        active: false
    }
]

function Service() {
  return (
    <Container id='about-us'>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceCardContainer>
            {
                cards.map((card) => (
                    <ServiceCard title={card.title} text={card.text} image={card.image} active={card.active} key={card.id} />
                ))
            }
        </ServiceCardContainer>
    </Container>
  )
}

export default Service

const Container = styled.div`
  width: 100vw;
  display: flex;
  background: #333;
  flex-direction: column;
  height: 60vh;
  padding-top: 1vh;
  cursor: pointer;
  align-items: center;
  @media (max-width: 480px) {
    height: 100%;
    align-content: center;
    justify-content: center;
    // overflow: hidden;
}
`

const ServiceTitle = styled.div`
  width: 100%;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 30px;
  color: rgb(240, 240, 240);
`

const ServiceCardContainer = styled.div`
    margin-top: 7.5vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        display: grid;
        padding: 0 32px;
      }
`
