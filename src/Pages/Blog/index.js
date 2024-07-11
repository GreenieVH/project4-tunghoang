import images from "~/Assets/images";

function Blog() {
    return ( 
        <>
  <main className="main">
    
    <div className="page-content">
      <figure className="entry-media">
        <img src={images.blog_single_fullwidth_1} alt="image desc" />
      </figure>
      {/* End .entry-media */}
      <div className="container">
        <article className="entry single-entry entry-fullwidth">
          <div className="row">
            <div className="col-lg-11">
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 22, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">2 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title entry-title-big">
                  Fusce pellentesque suscipit nibh.
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Travel</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content editor-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.
                  </p>
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing, commodo quis, gravida id, est. Sed
                    lectus. Praesent elementum hendrerit tortor. Sed semper
                    lorem at felis. Vestibulum volutpat, lacus a{" "}
                    <a href="#">ultrices sagittis</a>, mi neque euismod dui, eu
                    pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                    dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                  <p>
                    Morbi interdum mollis sapien. Sed ac risus. Phasellus
                    lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar
                    risus, vitae facilisis libero dolor a purus. Sed vel lacus.
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
                    ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
                    vulputate vel, nisl.
                  </p>
                  <div className="pb-1" />
                  {/* End .pb-1 */}
                  <img
                    src={images.blog_single_fullwidth_2}
                    alt="image"
                  />
                  <div className="pb-1" />
                  {/* End .pb-1 */}
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede semper est, vitae luctus metus
                    libero eu augue. Morbi purus libero, faucibus adipiscing,
                    commodo quis, gravida id, est. Sed lectus. Praesent{" "}
                    <a href="#">elementum hendrerit</a> tortor. Sed semper lorem
                    at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                    neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                    Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                    urna.
                  </p>
                  <blockquote>
                    <p>
                      “ Sed egestas, ante et vulputate volutpat, eros pede
                      semper est, vitae luctus metus libero eu augue. Vivamus
                      vestibulum ntulla nec ante. ”
                    </p>
                  </blockquote>
                  <h3>Donec nec justo eget felis facilisis fermentum.</h3>
                  <p>
                    Morbi purus libero, faucibus adipiscing, commodo quis,
                    gravida id, est. Sed lectus. Praesent elementum hendrerit
                    tortor. Sed semper lorem at felis. Vestibulum volutpat,
                    lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
                    nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                    fermentum et, dapibus sed, urna. Morbi interdum mollis
                    sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper
                    laoreet, lectus arcu pulvinar risus, vitae facilisis libero
                    dolor a purus. Sed vel lacus.{" "}
                  </p>
                  <p>
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
                    ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
                    vulputate vel, nisl.
                  </p>
                  <div className="pb-1" />
                  {/* End .pb-1 */}
                  <img
                    src={images.blog_single_fullwidth_3}
                    alt="image"
                  />
                  <div className="pb-1" />
                  {/* End .pb-1 */}
                  <p>
                    Praesent elementum hendrerit tortor. Sed semper lorem at
                    felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                    neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                    Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                    urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus
                    lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar
                    risus, vitae facilisis libero dolor a purus. Sed vel lacus.
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
                    ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
                    vulputate vel, nisl.
                  </p>
                </div>
                {/* End .entry-content */}
                <div className="entry-footer row no-gutters">
                  <div className="col">
                    <div className="entry-tags">
                      <span>Tags:</span> <a href="#">photography</a>{" "}
                      <a href="#">style</a>
                    </div>
                    {/* End .entry-tags */}
                  </div>
                  {/* End .col */}
                </div>
                {/* End .entry-footer row no-gutters */}
              </div>
              {/* End .entry-body */}
            </div>
            {/* End .col-lg-11 */}
            <div className="col-lg-1 order-lg-first mb-2 mb-lg-0">
              <div className="sticky-content">
                <div className="social-icons social-icons-colored social-icons-vertical">
                  <span className="social-label">SHARE:</span>
                  <a
                    href="#"
                    className="social-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-twitter"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-pinterest"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-linkedin"
                    title="Linkedin"
                    target="_blank"
                  >
                    <i className="icon-linkedin" />
                  </a>
                </div>
                {/* End .soial-icons */}
              </div>
              {/* End .sticky-content */}
            </div>
            {/* End .col-lg-1 */}
          </div>
          {/* End .row */}
          
          {/* End .entry-author-details*/}
        </article>
        
        {/* End .related-posts */}
        <div className="comments">
          <h3 className="title">0 Comment</h3>
          {/* End .title */}
        </div>
        {/* End .comments */}
        <div className="reply">
          <div className="heading">
            <h3 className="title">Leave A Reply</h3>
            {/* End .title */}
            <p className="title-desc">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          {/* End .heading */}
          <form action="#">
            <label htmlFor="reply-message" className="sr-only">
              Comment
            </label>
            <textarea
              name="reply-message"
              id="reply-message"
              cols={30}
              rows={4}
              className="form-control"
              required=""
              placeholder="Comment *"
              defaultValue={""}
            />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="reply-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reply-name"
                  name="reply-name"
                  required=""
                  placeholder="Name *"
                />
              </div>
              {/* End .col-md-6 */}
              <div className="col-md-6">
                <label htmlFor="reply-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="reply-email"
                  name="reply-email"
                  required=""
                  placeholder="Email *"
                />
              </div>
              {/* End .col-md-6 */}
            </div>
            {/* End .row */}
            <button type="submit" className="btn btn-outline-primary-2">
              <span>POST COMMENT</span>
              <i className="icon-long-arrow-right" />
            </button>
          </form>
        </div>
        {/* End .reply */}
      </div>
      {/* End .container */}
    </div>
    {/* End .page-content */}
  </main>
  {/* End .main */}
</>

     );
}

export default Blog;