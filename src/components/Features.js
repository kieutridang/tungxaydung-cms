import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import CompareImage from './CompareImage'
import get from 'lodash/get'

const FeatureGrid = ({ gridItems }) => {
  return (
    <div className="columns is-multiline">
      {gridItems.map((item) => {
        return (
          <div key={item.text} className="column is-6">
            <section className="section">
              <div className="has-text-centered">
                <div
                  style={{
                    width: "240px",
                    display: "inline-block",
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                  {/* <CompareImage leftImage={get(item, 'leftImage.childImageSharp.fluid.src', '')} rightImage={get(item,'rightImage.childImageSharp.fluid.src', '')} /> */}
                </div>
              </div>
              <p className="has-text-centered">{item.text}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
