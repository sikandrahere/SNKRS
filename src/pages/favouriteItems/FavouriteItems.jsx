import React, { useContext } from 'react'
import './FavouriteItems.css'
import { productContext } from '../../context/ProductProvider'
import { Item, categoryItems } from '../../components/index'

const FavouriteItems = () => {

    const { favouriteItems,removeFromFavourite } = useContext(productContext)
    const hasItemsInFav = () => {
        return favouriteItems.length > 0;
    };
    return (
        <div className='favourite-items'>
            <h1>Favourite Items</h1>
            <div className='favourite-items-list'>
                {hasItemsInFav() ? (
                    categoryItems.map((item) => {
                        if (favouriteItems.includes(item.id)) {
                            return (
                                <Item key={item.id}
                                    id={item.id}
                                    image={item.img}
                                    name={item.name}
                                    type={item.type}
                                    text={"Remove"}
                                    onClick={() => removeFromFavourite(item.id)}
                                  

                                />
                            );
                        }
                        return null; // Explicitly return null if the condition is not met
                    })
                ) : (
                    <p>No Favourite Items</p>
                )}


            </div>
        </div>
    )
}

export default FavouriteItems