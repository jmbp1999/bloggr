import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu';

const Post = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
        <div className='user'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' />

          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src='' alt='delete' />
            </Link>

            <Link>
              <img src='' alt='edit' />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectureur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent. Nulla malesuada pellentesque elit eget gravida cum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Lectus sit amet est placerat in egestas erat. Pellentesque adipiscing commodo elit at imperdiet dui. Aliquam
          faucibus purus in massa tempor. Tempus imperdiet nulla malesuada pellentesque elit. Bibendum est ultricies integer quis auctor elit. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Praesent elementum facilisis leo vel fringilla est ullamcorper. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Aenean
          euismod elementum nisi quis eleifend quam adipiscing. Tempor orci eu lobortis elementum nibh tellus molestie. Nulla porttitor massa id neque aliquam. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Neque volutpat ac tincidunt vitae semper. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet consectetur adipiscing elit. Volutpat lacus laoreet non curabitur
          gravida arcu ac tortor dignissim. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Malesuada fames ac turpis egestas. Enim ut tellus elementum sagittis vitae et leo duis ut. Adipiscing elit ut aliquam purus sit.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Post;
