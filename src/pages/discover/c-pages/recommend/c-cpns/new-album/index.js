import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "@/common/constants";

import { Carousel } from "antd";
import GXThemeHeaderRCM from "@/components/theme-header-rcm";
// import GXAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function GXNewAlbum() {
  // redux hooks
  const newAlbums = useSelector((state) =>
    state.getIn(["recommend", "newAlbums"])
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <GXThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"></button>
        <dir className="album">
          <Carousel>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    // return (
                    //   <GXAlbumCover
                    //     key={iten.id}
                    //     info={iten}
                    //     size={100}
                    //     width={118}
                    //     bgp="-570px"
                    //   />
                    // );
                  })}
                </div>
              );
            })}
          </Carousel>
        </dir>
        <button className="arrow arrow-right sprite_02"></button>
      </div>
    </AlbumWrapper>
  );
});
