const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <div className="pagination-wrapper">
          <button className="btn btn--arrow">
            <i className="fa fa-angle-left" />
          </button>
          <button className="btn btn-main active">1</button>
          <button className="btn btn-main">2</button>
          <button className="btn btn-main">3</button>
          <button className="btn btn--arrow">
            <i className="fa fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
