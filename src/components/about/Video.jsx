const Video = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <iframe
          width="1620"
          height="714"
          src="https://www.youtube.com/embed/EJr3uAQwGek?si=LpLkJhiFZpNFja_7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
