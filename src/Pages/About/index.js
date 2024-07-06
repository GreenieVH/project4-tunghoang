import images from "~/Assets/images";

function About() {
  return (
    <main className="main">
      <div className="container mt-3">
        <div
          className="page-header page-header-big text-center"
          style={{
            backgroundImage: `url(${images.about_header_bg})`,
          }}
        >
          <h1 className="page-title text-white">
            About us<span className="text-white">Who we are</span>
          </h1>
        </div>
        {/* End .page-header */}
      </div>
      {/* End .container */}
      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">Our Vision</h2>
              {/* End .title */}
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
            <div className="col-lg-6">
              <h2 className="title">Our Mission</h2>
              {/* End .title */}
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. <br />
                Praesent elementum hendrerit tortor. Sed semper lorem at felis.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
          <div className="mb-5" />
          {/* End .mb-4 */}
        </div>
        {/* End .container */}
        <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-3 mb-lg-0">
                <h2 className="title">Who We Are</h2>
                {/* End .title */}
                <p className="lead text-primary mb-3">
                  Pellentesque odio nisi, euismod pharetra a ultricies <br />
                  in diam. Sed arcu. Cras consequat
                </p>
                {/* End .lead text-primary */}
                <p className="mb-2">
                  Sed pretium, ligula sollicitudin laoreet viverra, tortor
                  libero sodales leo, eget blandit nunc tortor eu nibh.
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                  uctus metus libero eu augue.{" "}
                </p>
                <a
                  href="blog.html"
                  className="btn btn-sm btn-minwidth btn-outline-primary-2"
                >
                  <span>VIEW OUR NEWS</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .col-lg-5 */}
              <div className="col-lg-6 offset-lg-1">
                <div className="about-images">
                  <img
                    src={images.about_img_1}
                    alt=""
                    className="about-img-front"
                  />
                  <img
                    src={images.about_img_2}
                    alt=""
                    className="about-img-back"
                  />
                </div>
                {/* End .about-images */}
              </div>
              {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-light-2 pt-6 pb-6 */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="brands-text">
                <h2 className="title">
                  The world's premium design brands in one destination.
                </h2>
                {/* End .title */}
                <p>
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nis
                </p>
              </div>
              {/* End .brands-text */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-7">
              <div className="brands-display">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand1} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand2} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand3} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand4} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand5} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand6} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand7} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand8} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src={images.brand9} alt="Brand Name" />
                    </a>
                  </div>
                  {/* End .col-sm-4 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .brands-display */}
            </div>
            {/* End .col-lg-7 */}
          </div>
          {/* End .row */}
          <hr className="mt-4 mb-6" />
          <h2 className="title text-center mb-4">Meet Our Team</h2>
          {/* End .title text-center mb-2 */}
          <div className="row">
            <div className="col-md-4">
              <div className="member member-anim text-center">
                <figure className="member-media">
                  <img
                    src={images.team_member_1}
                    alt="member photo"
                  />
                  <figcaption className="member-overlay">
                    <div className="member-overlay-content">
                      <h3 className="member-title">
                        Samanta Grey<span>Founder &amp; CEO</span>
                      </h3>
                      {/* End .member-title */}
                      <p>
                        Sed pretium, ligula sollicitudin viverra, tortor libero
                        sodales leo, eget blandit nunc.
                      </p>
                      <div className="social-icons social-icons-simple">
                        <a
                          href="#"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                      </div>
                      {/* End .soial-icons */}
                    </div>
                    {/* End .member-overlay-content */}
                  </figcaption>
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                <div className="member-content">
                  <h3 className="member-title">
                    Samanta Grey<span>Founder &amp; CEO</span>
                  </h3>
                  {/* End .member-title */}
                </div>
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>
            {/* End .col-md-4 */}
            <div className="col-md-4">
              <div className="member member-anim text-center">
                <figure className="member-media">
                  <img
                    src={images.team_member_2}
                    alt="member photo"
                  />
                  <figcaption className="member-overlay">
                    <div className="member-overlay-content">
                      <h3 className="member-title">
                        Bruce Sutton<span>Sales &amp; Marketing Manager</span>
                      </h3>
                      {/* End .member-title */}
                      <p>
                        Sed pretium, ligula sollicitudin viverra, tortor libero
                        sodales leo, eget blandit nunc.
                      </p>
                      <div className="social-icons social-icons-simple">
                        <a
                          href="#"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                      </div>
                      {/* End .soial-icons */}
                    </div>
                    {/* End .member-overlay-content */}
                  </figcaption>
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                <div className="member-content">
                  <h3 className="member-title">
                    Bruce Sutton<span>Sales &amp; Marketing Manager</span>
                  </h3>
                  {/* End .member-title */}
                </div>
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>
            {/* End .col-md-4 */}
            <div className="col-md-4">
              <div className="member member-anim text-center">
                <figure className="member-media">
                  <img
                    src={images.team_member_3}
                    alt="member photo"
                  />
                  <figcaption className="member-overlay">
                    <div className="member-overlay-content">
                      <h3 className="member-title">
                        Janet Joy<span>Product Manager</span>
                      </h3>
                      {/* End .member-title */}
                      <p>
                        Sed pretium, ligula sollicitudin viverra, tortor libero
                        sodales leo, eget blandit nunc.
                      </p>
                      <div className="social-icons social-icons-simple">
                        <a
                          href="#"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="#"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                      </div>
                      {/* End .soial-icons */}
                    </div>
                    {/* End .member-overlay-content */}
                  </figcaption>
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                <div className="member-content">
                  <h3 className="member-title">
                    Janet Joy<span>Product Manager</span>
                  </h3>
                  {/* End .member-title */}
                </div>
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>
            {/* End .col-md-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="mb-2" />
        {/* End .mb-2 */}
      </div>
      {/* End .page-content */}
    </main>
  );
}

export default About;
