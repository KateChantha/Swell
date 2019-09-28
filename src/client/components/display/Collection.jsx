import React, { Component } from 'react';
import collectionsController from '../../controllers/collectionsController';
import Trashcan from '../../../assets/img/Trashcan.png'

class Collection extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    this.deleteCollection = this.deleteCollection.bind(this);
    this.addCollectionToReqResContainer = this.addCollectionToReqResContainer.bind(this);
  }

  addCollectionToReqResContainer() {
    this.props.collectionToReqRes(this.props.content.reqResArray)
  }

  deleteCollection(e) {
    this.props.deleteFromCollection(this.props.content); //a function we need to make in the container
    collectionsController.deleteCollectionFromIndexedDb(e.target.id);
  }

  render() {
    return (
      <div className={'collection-container'}>
        <div className={'collection-text-container'} onClick={this.addCollectionToReqResContainer}>
          <div className={'collection-name'}> {this.props.content.name}
        </div>
        <div className="collection-export collection-text-container">
          <button onClick={() => collectionsController.exportCollection(this.props.content.id)}>Export</button>
        </div>
        </div>
        <div className='collection-delete-container'>
          <div className='collection-delete-fade'>
          </div>
          <div className={'collection-delete-button'} onClick={this.deleteCollection}>
            <img className='collection-delete-image' src={Trashcan} id={this.props.content.id} ></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Collection;