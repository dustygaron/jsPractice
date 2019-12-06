import React from 'react';
import posed from 'react-pose';
import { Link } from 'react-router-dom';


const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => (
  <div>
    <h2>Home</h2>
    <p>This is the Home page.</p>
    <ListContainer>
      <Item>
        <Link to="/about">Go to About</Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab, nemo dolorem laudantium aperiam eligendi ex doloremque. Hic, incidunt nam repudiandae fugit quidem eos impedit provident aut quos fugiat? Veniam!</p>
      </Item>
      <Item>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt incidunt magni nesciunt. Provident, nemo obcaecati. Doloremque nostrum laborum quia earum veniam, ipsam tempora distinctio quaerat, aperiam nihil suscipit deserunt?</p>
      </Item>
      <Item>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita praesentium nam excepturi dicta, facilis soluta placeat aliquam, quaerat quod ad sequi corrupti nihil reprehenderit doloribus! Sed facere numquam tempora sunt.</p>
      </Item>
    </ListContainer>
  </div>
);
