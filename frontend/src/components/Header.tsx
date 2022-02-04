import { Video } from './../styling/Video.styled';

function Header() {
  return (
    <div>
      <h1>Welcome to Nature 🐳</h1>
      <h3>Your adventure starts here</h3>

      <Video>
        <video autoPlay loop role="video">
          <source src="/images/adventure.mp4" />
          Your browser does not support the video tag.
        </video>
      </Video>
    </div>
  );
}

export default Header;
