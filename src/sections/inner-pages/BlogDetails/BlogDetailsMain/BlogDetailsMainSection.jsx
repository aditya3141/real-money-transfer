import BlogSidebar from "@components/Blog/Sidebar/BlogSidebar";

const BlogDetailsMainSection = () => {
  return (
    <>
      <div className="blog-details_main-section ">
        <div className="container">
          <div className="blog-details_main-wrapper section-padding-120">
            <div className="row">
              <div className="col-xl-8">
                <div className="blog-content">
                  <img
                    src="./image/blog/blog-image-1.png"
                    alt="blog image"
                    className="mb-30 w-100"
                  />
                  <div className="blog-content-meta">
                    <a href="#">
                      <span className="blog-content__user">
                        <img
                          src="./image/blog/user-image.png"
                          alt="user image"
                        />
                        By Willium Mark
                      </span>
                    </a>
                    <a href="#">
                      <span className="blog-content__time">
                        <img
                          src="./image/blog/blog-card-icon.svg"
                          alt="user image"
                        />
                        Jan 28, 2023
                      </span>
                    </a>
                    <a href="#">
                      <span className="blog-content__category">Business</span>
                    </a>
                  </div>
                  <div className="blog-content-wrapper">
                    <p>
                      It was a rainy winter day and I was having another project
                      management crisis with business a partner Gavin at our
                      digital product studio Input Logic. The exact nature of
                      the crisis eludes a me now, but I’m sure we’d let some
                      client expectations slip and were feeling guilty again.
                    </p>
                    <h3 className="blog-title">Using Slack :</h3>
                    <p>
                      Our team of eight is pretty playful. We don’t take
                      ourselves a seriously. We level up for the our abilities,
                      play hackysack, ship great work. We wanted a project
                      management process of that was in line with our values:
                      relevant and helpful without sucking the fun out of
                      things.
                    </p>
                    <h3 className="blog-title">Using Trello :</h3>
                    <p>
                      Trello is the visual tool that empowers your team to
                      manage an type of project, workflow, and task tracking.
                      Add files, checklists, or even automation: Customize it
                      all for how your team for works best. Just sign up, create
                      a board, and you're off!
                    </p>
                    <h3 className="blog-title">Using TeamGantt :</h3>
                    <p>
                      TeamGantt is a project collaboration &amp; planning
                      software for teams. The software useful for combines in
                      Gantt charts with task management, task level
                      communication, file sharing and time tracking.
                    </p>
                    <img
                      src="./image/blog/blog-1.png"
                      alt="blog details"
                      className="mb-30 w-100"
                    />
                    <h3 className="blog-title">
                      Practice #1 — Project based channels :
                    </h3>
                    <p>
                      We create a separate channel for every project, period. We
                      invite only those team a members who are involved in the
                      project, along with the project manager.
                    </p>
                    <h3 className="blog-title">
                      Practice #2—Agreements pinned to project channels :{" "}
                    </h3>
                    <p>
                      Our client agreements are separated into a general
                      agreement and a statement of work. We create them in
                      Google Docs and then export them as PDF to be shared in
                      Slack.
                    </p>
                    <h3 className="blog-title">
                      {" "}
                      Practice #3—Live timeline as project channel description :
                    </h3>
                    <p>
                      We started using TeamGantt for creating project timelines
                      and we share these with our team and the clients team. We
                      detail out the intended timeline right from the start, so
                      we have the same expectations the client does. Each team
                      member working on the project offers.
                    </p>
                    <h3 className="blog-title"> How it all came together : </h3>
                    <p>
                      So, after years of occasionally pissing off clients with
                      sloppy project management, we have a levelled up our game
                      with a few simple Slack based practices. Pretty dope.We’re
                      still working to improve and learning a ton, so please
                      comment and follow along to join the journey.
                    </p>
                    <h3 className="blog-bottom-text">Thanks for reading ❤</h3>
                    <div className="blog-content__social-options">
                      <div className="social-options-left">
                        <span>
                          <img src="./image/blog/like.svg" alt="like" />
                          1.5k
                        </span>
                        <span>
                          <img src="./image/blog/text.svg" alt="like" />
                          86
                        </span>
                      </div>
                      <div className="social-options-right">
                        <span>
                          <img src="./image/blog/share.svg" alt="like" />
                        </span>
                        <span>
                          <img src="./image/blog/inbox-in.svg" alt="like" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-widget__wrapper">
                  <h3 className="heading-xs-2 mb-40">
                    3 comments on this post:
                  </h3>
                  <div className="comment-widget">
                    <div className="comment-widget__inner">
                      <div className="comment-widget__image">
                        <img src="./image/blog/user-1.png" alt="user" />
                      </div>
                      <div className="comment-widget__body">
                        <div className="comment-widget__meta">
                          <div className="comment-widget__user">
                            <h3 className="comment-widget__user-name">
                              Ricky Smith
                            </h3>
                            <span className="comment-widget__date">
                              Jan 28, 2023
                            </span>
                          </div>
                          <div className="comment-widget__button">
                            <a href="#" className="nav-btn">
                              reply
                            </a>
                          </div>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distrac readable content of a page when looking at its
                          layout. The point of using is that it has two.
                        </p>
                      </div>
                    </div>
                    <div className="comment-widget">
                      <div className="comment-widget__inner">
                        <div className="comment-widget__image">
                          <img src="./image/blog/user-2.png" alt="user" />
                        </div>
                        <div className="comment-widget__body">
                          <div className="comment-widget__meta">
                            <div className="comment-widget__user">
                              <h3 className="comment-widget__user-name">
                                Joshua Jones
                              </h3>
                              <span className="comment-widget__date">
                                Jan 29, 2023
                              </span>
                            </div>
                            <div className="comment-widget__button">
                              <a href="#" className="nav-btn">
                                reply
                              </a>
                            </div>
                          </div>
                          <p>
                            It is a long established fact that a reader will be
                            distra readable content of a page when looking its
                            layout. The point of using.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-widget">
                    <div className="comment-widget__inner">
                      <div className="comment-widget__image">
                        <img src="./image/blog/user-3.png" alt="user" />
                      </div>
                      <div className="comment-widget__body">
                        <div className="comment-widget__meta">
                          <div className="comment-widget__user">
                            <h3 className="comment-widget__user-name">
                              Stephanie Nicol
                            </h3>
                            <span className="comment-widget__date">
                              Jan 28, 2023
                            </span>
                          </div>
                          <div className="comment-widget__button">
                            <a href="#" className="nav-btn">
                              reply
                            </a>
                          </div>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distrac readable content of a page when looking at its
                          layout. The point of using is that it has two.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="blog-content-comment-box">
                  <span className="heading-xs-2 mb-40">Leave a comment</span>
                  <div className="blog-content__reply-form">
                    <div className="blog-content__reply-form-image">
                      <img src="./image/blog/user-4.png" alt="man" />
                    </div>
                    <textarea
                      className="form-control bg-light-2 textarea"
                      placeholder="Write a comment..."
                      defaultValue={""}
                    />
                    <div className="blog-content__reply-form__button-group">
                      <button>
                        <span>Cancle</span>
                      </button>
                      <button className="blog-content__reply-button">
                        Publish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsMainSection;
