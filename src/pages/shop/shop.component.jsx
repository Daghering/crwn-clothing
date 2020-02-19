import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections_overview/collections-overview.component.jsx";
import CollectionPage from "../collection/collection.component.jsx";


const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:CollectionId`} component={CollectionPage} />

  </div>
);



export default ShopPage;
