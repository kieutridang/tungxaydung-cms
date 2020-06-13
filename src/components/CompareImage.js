import ReactCompareImage from 'react-compare-image'
import React from 'react'

class CompareImage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { leftImage, rightImage } = this.props
    return <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />
  }
}

export default CompareImage