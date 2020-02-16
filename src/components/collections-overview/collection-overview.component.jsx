import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../preview-collection/preview-collection.component";

import "./collection-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {console.log(collections)}
    {collections.map(({ id, ...other }) => (
      <CollectionPreview key={id} {...other} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
