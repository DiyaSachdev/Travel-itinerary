import React from 'react'
import '../App.css';
// import styled from 'styled-components';

import Cover from './Cover';
import Destinations from './Destinations';
import Navbar from './Navbar/Navbar';
import Service from './Service';
import ServiceStats from './ServiceStats';
import Subscription from './Subscription';
import Footer from './Footer';

function Component() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Service />
      <ServiceStats />
      <Destinations />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Component;
