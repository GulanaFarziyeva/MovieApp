function Hero() {
  return (
    <div className="hero-content position-relative text-white ">
      <div className="hero-text position-absolute">
        <h1 className="hero-text-head mb-4">Wanna watch free movies & TV?</h1>
        <h5 className=" mb-4 mt-4">
          You've come to the right place. We've got a bunch here at Plex and you
          can start watching right now.
        </h5>
        <button
          type="button"
          className="btn btn-warning py-2 px-4 rounded-pill text-white mt-4"
        >
          Explore Movies & Shows
        </button>
      </div>

      <div>
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://website-static.plex.tv/videos/movies_and_tv_hero_background.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Hero;
