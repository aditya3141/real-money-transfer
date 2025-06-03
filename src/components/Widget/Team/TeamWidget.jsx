const TeamWidget = ({ image, username, userposition }) => {
  return (
    <>
      <div className=" col-lg-4 col-md-4 col-xs-6 col-auto">
        <div className="team-widget">
          <div className="team-widget__image-block">
            <img src={image} alt="alternative text" />
          </div>
          <h4 className="team-widget__user-name">{username}</h4>
          <span className="team-widget__user-position">{userposition}</span>
        </div>
      </div>
    </>
  );
};

export default TeamWidget;
