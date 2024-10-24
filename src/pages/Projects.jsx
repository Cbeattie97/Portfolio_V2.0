import './../assets/css/Projects.css';
export default function Projects() {
  return (
    <div>
      <h2>Checkout My Work !</h2>
      <p>
        Here are some of the projects I've worked on. Click on a project to learn more.
      </p>
      <ul>
        <li className='card'>
        <a href="https://focustrack.onrender.com">FocusTrack</a>
        <p>FocusTrack is a productivity app that can be acessed anywhere, anytime.  </p>
        </li>
        <li className='card' id='BeatBrowser'>
          <a href="https://kevinvongmany.github.io/beatbrowser/">BeatBrowser</a>
          <p>BeatBrowser is a web application that allows users to search for music which is enriched with details about the song and artist. The application uses the Spotify API to search for music and the wikipedia API to provide the additional song and artist details.</p>
        </li>
        <li className='card'>
          <a href="/projects/3">Project 3</a>
          <p>Project 3 Coming soon.</p>
        </li>
      </ul>
    </div>
  );
}
