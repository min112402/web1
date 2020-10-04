import React from 'react'


class Shop extends React.Component {
    componentDidMount() {
        fetch("/api/goods/")
            .then(
                response =>response.json()
            )
    }

    renderGoods(){
        return this.GoodsList.map((Goods) => {
            return <li key={Goods.id}></li>
        })
    }


    render(){
        

        return(
        <div> Shop</div>
        )
    }
}

export default Shop
