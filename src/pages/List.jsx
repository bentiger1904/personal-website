import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function List() {
    return (
      <div>
        <Hero>
            <h1>Welcome to Your personal Shopping List!
            </h1>
        </Hero>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
              sagittis mi sollicitudin turpis semper, et interdum risus
              lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
              hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus
              tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
              mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
              cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
              tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            </Col>
        </Row>
    </div>
);
}

export default List;