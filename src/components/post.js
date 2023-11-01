export default function Post() {
  return (
    <div className="posts">
      <div className="post">
        <div className="post-image">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/rf20160224-xbc-103.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
            alt="Image from CNN"
          />
        </div>
        <div className="post-content">
          <div className="post-heading">
            <h3>What to look for when you book</h3>
          </div>
          <div className="post-info">
            <a href="#">Isaac Harrison</a>
            <time>2023-10-30</time>
          </div>
          <div className="post-paragraph">
            <p>
              Flights from New York to Paris for $200? They’re out there, if
              you’re able to be flexible, and if you’re willing to skip extras —
              depending on the airline, that could include checked bags, meals,
              entertainment and the bar cart.
            </p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post-image">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/rf20160224-xbc-103.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
            alt="Image from CNN"
          />
        </div>
        <div className="post-content">
          <div className="post-heading">
            <h3>What to look for when you book</h3>
          </div>
          <div className="post-paragraph">
            <p>
              Flights from New York to Paris for $200? They’re out there, if
              you’re able to be flexible, and if you’re willing to skip extras —
              depending on the airline, that could include checked bags, meals,
              entertainment and the bar cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
