import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
// 样式
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  // 通过 useDispatch 获取到 dispatch
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    // 请求 banner 数据
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    // setCurrentIndex(to);
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          {/* effect="fade" 动画效果渐变 默认水平滚动切换 */}
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a className="btn-download" href="https://music.163.com/#/download">
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
