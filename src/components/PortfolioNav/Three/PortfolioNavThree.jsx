const PortfolioNavThree = ({ listData }) => {
  return (
    <>
      <ul className="navigation-list navigation-list--block">
        {listData?.map(({ title, isActive }, index) => (
          <li
            key={index}
            className={`${isActive ? "active" : ""}`}
            data-filter="*"
          >
            <button className="nav-list-btn">{title}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PortfolioNavThree;
