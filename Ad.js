import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAds, addAds, delAds, updateAds } from '../actions';
import { combineData } from '../reducers';

class Ad extends Component {
  AddAd = () => {
    const payload = {
      id: this.props.adsResult.length + 1,
      title: '多肉植物',
      description: '我会一朵🌺 ，可爱的🌺 。',
      image: 'http://api.handsomehan.cn:10013/media/20111009043132953_4NWLIlb.jpg',
      page_view: 0,
    }

    this.props.addAds(payload)
  }

  delAd = item => {
    this.props.delAds(item)
  }

  updateAd = item => {
    const payload = {
      id: item.id,
      title: '睡莲',
      description: '我会一朵🌺 ，可爱的🌺 。',
      image: 'http://api.handsomehan.cn:10013/media/20111009043132953_4NWLIlb.jpg',
      page_view: 0,
    }

    this.props.updateAds(payload)
  }

  render() {
    const { adsResult, adsEntities } = this.props
    const ads = combineData(adsResult, adsEntities)

    return (
      <div>
        {
          ads.map(item => {
            return (
              <div key={item.id}>
                <div>
                  {item.title}
                  {item.description}
                </div>
                <img style={{ height: 180, width: 300 }} src={item.image} alt={item.title} />
                <button onClick={() => this.delAd(item)}>删除</button>
                <button onClick={() => this.updateAd(item)}>更新</button>
              </div>
            )
          })
        }
        <button onClick={this.AddAd}>添加广告</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adsResult: state.result.ads,
    adsEntities: state.entities.ads,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAds,
    addAds,
    delAds,
    updateAds,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad)
