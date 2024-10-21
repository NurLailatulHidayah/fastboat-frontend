import React from "react";

const GaleryIslandComponent = () => {
  return (
    <div className="row clearfix mt-3">
      {/* Island Block One */}
      <div className="Island-block_one all city nature col-lg-3 col-md-6 col-sm-6">
        <div className="Island-block_one-inner border">
          <div className="Island-block_one-image">
            <a href="#">
              <img src="/image/island/nusa-penida.jpg" alt="nusa penida" />
            </a>
          </div>
          <div className="Island-block_one-content">
            <h5 className="Island-block_one-heading">
              <a href="#">Nusa Penida</a>
            </h5>

            <a className="Island-block_one-arrow flaticon-next-2" href="#" />
          </div>
        </div>
      </div>
      {/* Island Block One */}
      <div className="Island-block_one  all nature city col-lg-3 col-md-6 col-sm-6">
        <div className="Island-block_one-inner border">
          <div className="Island-block_one-image">
            <a href="#">
              <img
                src="/image/island/island-nusa-lembongan.jpg"
                alt="nusa lembongan"
              />
            </a>
          </div>
          <div className="Island-block_one-content">
            <h5 className="Island-block_one-heading">
              <a href="#">Nusa Lembongan</a>
            </h5>
          </div>
        </div>
      </div>
      {/* Island Block One */}
      <div className="Island-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
        <div className="Island-block_one-inner border">
          <div className="Island-block_one-image">
            <a href="#">
              <img src="/image/island/lombok-island.jpg" alt="lombok " />
            </a>
          </div>
          <div className="Island-block_one-content">
            <h5 className="Island-block_one-heading">
              <a href="#">Lombok </a>
            </h5>
          </div>
        </div>
      </div>
      {/* Island Block One */}
      <div className="Island-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
        <div className="Island-block_one-inner border">
          <div className="Island-block_one-image">
            <a href="#">
              <img
                src="/image/island/gili-trawangan.jpg"
                alt="gili trawangan"
              />
            </a>
          </div>
          <div className="Island-block_one-content">
            <h5 className="Island-block_one-heading">
              <a href="#">Gili Trawangan</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleryIslandComponent;
