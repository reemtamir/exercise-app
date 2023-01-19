import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          height: '10%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <a
          href="https://www.linkedin.com/in/re-em-tamir-18629b25a/"
          target="_blank"
        >
          <AiFillLinkedin
            style={{
              color: 'white',
              marginRight: ' 1.2rem',
              fontSize: '1.5rem',
            }}
            className="bi bi-linkedin "
          ></AiFillLinkedin>
        </a>
        <a href="https://github.com/reemtamir" target="_blank">
          <AiFillGithub
            style={{ color: 'white', fontSize: '1.5rem' }}
            className="bi bi-github "
          ></AiFillGithub>
        </a>
      </div>
      <p
        style={{
          color: 'white',
          fontSize: ' 1.3rem',
          textAlign: 'center',
        }}
      >
        <span>&copy;</span> {new Date().getFullYear()} Re'em Tamir
      </p>
    </footer>
  );
};

export default Footer;
