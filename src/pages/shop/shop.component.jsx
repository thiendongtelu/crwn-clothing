import React from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';


class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            colections: ShopData
        };
    }


    render(){
        const {colections} = this.state;
        return (<div className='shop-page'>
            {
                colections.map(({id, ...other}) => (
                    <CollectionPreview key = {id} {...other} />
                ))
            }
        </div>)
    }
}

export default ShopPage;