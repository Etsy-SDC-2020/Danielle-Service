import React from "react";
import axios from "axios";



class RelatedItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shopInformation: {
                name: "",
                totalItemsForSale: 20,
                totalSales: 0,
                onEtsySince: "",
                basedIn: "",
                logoUrl: "",
                relatedImages: []
            },
            itemInformation: [
                {
                    name: "",
                    price: ""
                },
                {
                    name: "",
                    price: ""
                },
                {
                    name: "",
                    price: ""
                },
                {
                    name: "",
                    price: ""
                },
                {
                    name: "",
                    price: ""
                },
                {
                    name: "",
                    price: ""
                }
            ],
            adItemInformation: [
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                },
                {
                    name: "",
                    price: "",
                    image: "https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"
                }
            ]
        };

        document.addEventListener('onNavigate', ({id}) => {
            console.log("change pages to: ", id);
            axios.get(`http://fecrelateditems-env.eba-unfwxp3i.us-east-2.elasticbeanstalk.com/items/${id}`)//the passed in itemId}})
        .then((data) => {
            this.setState({
                shopInformation: {
                    name: data.data[0].storeName,
                    totalSales: data.data[0].shopTotalSales,
                    onEtsySince: data.data[0].shopStartYear,
                    basedIn: data.data[0].shopCountry,
                    logoUrl: data.data[0].shopLogo,
                    relatedImages: [
                        data.data[0].relatedItemImage,
                        data.data[1].relatedItemImage,
                        data.data[2].relatedItemImage,
                        data.data[3].relatedItemImage,
                        data.data[4].relatedItemImage,
                        data.data[5].relatedItemImage,
                        data.data[6].relatedItemImage,
                        data.data[7].relatedItemImage,
                        data.data[8].relatedItemImage,
                        data.data[9].relatedItemImage,
                        data.data[10].relatedItemImage,
                        data.data[11].relatedItemImage,
                        data.data[12].relatedItemImage,
                        data.data[13].relatedItemImage,
                        data.data[14].relatedItemImage,
                        data.data[15].relatedItemImage,
                        data.data[16].relatedItemImage,
                        data.data[17].relatedItemImage,
                        data.data[18].relatedItemImage,
                        data.data[19].relatedItemImage,
                    ]
                },
                itemInformation: [
                    {
                        name: data.data[12].itemName,
                        price: data.data[12].singlePrice
                    },
                    {
                        name: data.data[7].itemName,
                        price: data.data[7].singlePrice
                    },
                    {
                        name: data.data[11].itemName,
                        price: data.data[11].singlePrice
                    },
                    {
                        name: data.data[4].itemName,
                        price: data.data[4].singlePrice
                    },
                    {
                        name: data.data[18].itemName,
                        price: data.data[18].singlePrice
                    },
                    {
                        name: data.data[9].itemName,
                        price: data.data[9].singlePrice
                    }
                ]
            })
        })
        .catch((err) => {
            console.error("there was an error on the client side:" + err)
        })
            //change view based off of id
            //setState to render new item
        });

    }

    componentDidMount() {
        axios.get(`http://fecrelateditems-env.eba-unfwxp3i.us-east-2.elasticbeanstalk.com/items/64`)//the passed in itemId}})
        .then((data) => {
            this.setState({
                shopInformation: {
                    name: data.data[0].storeName,
                    totalSales: data.data[0].shopTotalSales,
                    onEtsySince: data.data[0].shopStartYear,
                    basedIn: data.data[0].shopCountry,
                    logoUrl: data.data[0].shopLogo,
                    relatedImages: [
                        data.data[0].relatedItemImage,
                        data.data[1].relatedItemImage,
                        data.data[2].relatedItemImage,
                        data.data[3].relatedItemImage,
                        data.data[4].relatedItemImage,
                        data.data[5].relatedItemImage,
                        data.data[6].relatedItemImage,
                        data.data[7].relatedItemImage,
                        data.data[8].relatedItemImage,
                        data.data[9].relatedItemImage,
                        data.data[10].relatedItemImage,
                        data.data[11].relatedItemImage,
                        data.data[12].relatedItemImage,
                        data.data[13].relatedItemImage,
                        data.data[14].relatedItemImage,
                        data.data[15].relatedItemImage,
                        data.data[16].relatedItemImage,
                        data.data[17].relatedItemImage,
                        data.data[18].relatedItemImage,
                        data.data[19].relatedItemImage,
                    ]
                },
                itemInformation: [
                    {
                        name: data.data[12].itemName,
                        price: data.data[12].singlePrice
                    },
                    {
                        name: data.data[7].itemName,
                        price: data.data[7].singlePrice
                    },
                    {
                        name: data.data[11].itemName,
                        price: data.data[11].singlePrice
                    },
                    {
                        name: data.data[4].itemName,
                        price: data.data[4].singlePrice
                    },
                    {
                        name: data.data[18].itemName,
                        price: data.data[18].singlePrice
                    },
                    {
                        name: data.data[9].itemName,
                        price: data.data[9].singlePrice
                    }
                ]
            })
        })
        .catch((err) => {
            console.error("there was an error on the client side:" + err)
        })

    axios.get("http://fecrelateditems-env.eba-unfwxp3i.us-east-2.elasticbeanstalk.com/ads")
        .then((data) => {
            console.log(data)
            this.setState({
                adItemInformation: [
                    {
                        name: data.data[0].itemName,
                        price: data.data[0].singlePrice,
                        image: data.data[0].relatedItemImage
                    },
                    {
                        name: data.data[1].itemName,
                        price: data.data[1].singlePrice,
                        image: data.data[1].relatedItemImage
                    },
                    {
                        name: data.data[2].itemName,
                        price: data.data[2].singlePrice,
                        image: data.data[2].relatedItemImage
                    },
                    {
                        name: data.data[3].itemName,
                        price: data.data[3].singlePrice,
                        image: data.data[3].relatedItemImage
                    },
                    {
                        name: data.data[4].itemName,
                        price: data.data[4].singlePrice,
                        image: data.data[4].relatedItemImage
                    },
                    {
                        name: data.data[5].itemName,
                        price: data.data[5].singlePrice,
                        image: data.data[5].relatedItemImage
                    },
                    {
                        name: data.data[6].itemName,
                        price: data.data[6].singlePrice,
                        image: data.data[6].relatedItemImage
                    },
                    {
                        name: data.data[7].itemName,
                        price: data.data[7].singlePrice,
                        image: data.data[7].relatedItemImage
                    },
                    {
                        name: data.data[8].itemName,
                        price: data.data[8].singlePrice,
                        image: data.data[8].relatedItemImage
                    },
                    {
                        name: data.data[9].itemName,
                        price: data.data[9].singlePrice,
                        image: data.data[9].relatedItemImage
                    }
                ]
            });
        })
        .catch((err) => {
            console.error("error pulling random sample data from server and database:" + err)
        })
    }

    render() {
        if (this.state.shopInformation.relatedImages.length === 0) {
            return null;
        } else {
        return(
            <div className={"container-fluid"}>
                <section className={"row"} id={"moreFromShopContainer"} style={{
                    backgroundColor: "#ffeee6",
                    paddingBottom: "48px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "24px",
                    maxWidth: "100%",
                    // margin: "0 auto"
                    marginBottom: "36px"

                }}>
                <div className={"col-md-3"}>
                    <div className={"embed-responsive embed-responsive-1by1 w-50"} style={{backgroundColor: "white", borderRadius: "6px"}}>
                         <img className={"shopLogo embed-responsive-item"} src={this.state.shopInformation.logoUrl} height={"140px"} width={"140px"} style={{
                         backgroundSize: "container",
                        //  maxWidth: "100%",
                        //  maxHeight: "auto",

                        }}></img>
                    </div>
                    {/* <div id={"shopLogoContainer"} style={{
                        // flexGrow: "1",
                        // maxWidth:"145px",
                        // maxHeight:"145px",
                        backgroundColor: "white",
                        borderRadius: "6px"
                    }}>
                     </div> */}
                    <div id={"moreFromSellerInfo"}style={{
                        // padding: "10px",
                        // flexGrow: "1",
                        
                    }}>
                        <p style={{ fontSize: "0.95em", marginTop: "1em" }}>More from</p>
                        <p style={{
                            fontSize: "1.3em",
                            fontWeight: "lighter",
                            fontFamily: "roboto"
                        }} id={"shopName"}>{this.state.shopInformation.name}</p>
                        <div id={"seeMoreItems"} style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            

                        }}>
                        <span className={"seeAllSpan"}>See all 20 items</span>
                        <span id={"arrow"}></span>
                        </div>
                    </div>

                    <div className={"row mt-4"}>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>Sales</h6>
                        </div>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>On Etsy Since</h6>
                        </div>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>Based In</h6>
                        </div>
                    </div>
                    <div className={"row"}>
                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.totalSales}</h4>
                            </div>

                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.onEtsySince}</h4>
                            </div>

                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.basedIn}</h4>
                            </div>
                    </div>
                </div>

                <div className={"col-sm-9"} /*style={{backgroundColor: "red"}}*/>

                    <div className={"row mb-2 ml-2"}>

                        <div id={"imgBox"} className={"col"} /*style={{backgroundColor: "blue"}}*/>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[12]}></img>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[0].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[0].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={"imgBox"} className={"col"}>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[7]}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[1].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[1].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={"imgBox"} className={"col"}>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[11]}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[2].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[2].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row mb-2 ml-2"}>

                    <div id={"imgBox"} className={"col"}>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[4]}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[3].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[3].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={"imgBox"} className={"col"}>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[18]}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[4].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[4].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={"imgBox"} className={"col"}>
                        <img className={"col my-3"} src={this.state.shopInformation.relatedImages[9]}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation[5].name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation[5].price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </div>

                </div>
               
                </section>

                <section className={"row"}>
                    <div className={"row"}>
                    <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                    <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"imgBox"} className={"col"}>
                        <span className={"adOverlay"}></span>
                        <span className={"adText"}>Ad</span>
                        <img className={"col my-3"} src={this.state.adItemInformation.image}></img>
                        <span></span>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    };
    };
};

export default RelatedItems;