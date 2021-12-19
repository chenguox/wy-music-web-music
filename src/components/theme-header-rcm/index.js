import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const GXThemeHeaderRCM = memo(function style(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={index}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

GXThemeHeaderRCM.propTypes = {
  // 字符串，非空
  title: PropTypes.string.isRequired,
  // 数组，可空
  keywords: PropTypes.array,
};

GXThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default GXThemeHeaderRCM;
