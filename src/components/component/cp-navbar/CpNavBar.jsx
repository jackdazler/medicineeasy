import React from "react";
import styleNav from "./cpnavbar.module.scss";
const CpNavBarDesk = () => {
  return (
    <navigator>
      <div className={styleNav["cp-navbar"]}>
        <div className="container">
          <div className={styleNav["cp-navbar-mob"]}>
            <div className={styleNav["lhs-wrap"]}>
              <div className={styleNav["logo-wrap"]}>
                <h2 className={styleNav["logo-heading"]}>SOUNDS</h2>
              </div>
            </div>
            <div className={styleNav["rhs-wrap"]}>
              <div className={styleNav['nav-link']}>
                <ul className={styleNav['nav-items']}>
                  <li className={styleNav['nav-item']}>Shop</li>
                  <li className={styleNav['nav-item']}>Learn</li>
                  <li className={styleNav['nav-item']}>Support</li>
                  <li className={styleNav['nav-item']}>Radio</li>
                </ul>
              </div>
              <div className={`${styleNav["act-link"]}`}>
              <div className={`${styleNav["account"]} icon-account`}></div>
              <div className={`${styleNav["search"]} icon-search`}></div>
              <div className={`${styleNav["cart"]} icon-cart`}></div>
              <div className={`${styleNav["menu"]} icon-menu`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </navigator>
  );
};

export default CpNavBarDesk;
