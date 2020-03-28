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
            console.log(data.data[0])
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
                <div className={"row d-flex justify-content-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" style={{height: "30px", fill: "#ffeee6"}}><path d="M1279.37,29.3l-.85-.42c-2.06,0-4-1.27-5.89-1.89a53.68,53.68,0,0,0-8.07-1.53c-1.78-.3-3.54-.69-5.29-1.13l-7.89-.41-1.64-.09-20.23-1.16L1217.7,22c-17.48-1-35-1.92-52.39-3-16.23-1-32.35-2.05-48.55-3-15.68-1-31.45-1.84-47.16-2.79-11-.67-21.95-1.39-33-2.06-15.66-1-31.37-1.87-46.43-2.76-2.45.19-4.35.36-6.31.49-1.49.1-3.09.18-4.65.2a31.46,31.46,0,0,0-4.64.3,16.86,16.86,0,0,1-2.2.06,65.51,65.51,0,0,0-6.58.08,6.37,6.37,0,0,1-1.15,0A31.74,31.74,0,0,0,958.76,9a4.63,4.63,0,0,1-.77-.2,28.93,28.93,0,0,0-7.15-.23,40.41,40.41,0,0,1-4.92.1,10.85,10.85,0,0,0-5,.49c-.6.27-1.14.65-1.76.89a7.08,7.08,0,0,1-2.24.39,59.67,59.67,0,0,1-6.27-.17c-.53,0-1.09,0-1.56-.09l-6.41-.62c-.25,0-.74.07-1.07.05-1.71-.05-3.45-.09-5-.21a4.11,4.11,0,0,1-1.27-.43,2.41,2.41,0,0,0-.55-.15c-1.79.12-1.38-.24-2-.38-.39-.08-.85-.16-1.35-.23-1.46.26-2.92.51-4.43.68-3.42.39-6.79-.19-10.21-.39a20.38,20.38,0,0,1-3.28-.69l-.29.06-4.8-1c-.41-.08-.89.15-1.29.06-.91-.22-1.06-.82-2-.4a11.33,11.33,0,0,1-3.4.33c-3.46.33-6.84-.66-10.2-1.32-2,0-4,0-5.67,0l-1.71-.78c-.35-.16-1.49.22-1.89.28l-1.9.29c-2,.28-3.91-.43-5.89-.07a7.63,7.63,0,0,1-1.79-.1,16.39,16.39,0,0,1-2.32.11l-2.64-.45-2.28.25c-.54-.09-1-.2-1.49-.24-1.44-.13-2.92-.22-4.35-.34-2.08.17-4.16.4-6.24.66a17.39,17.39,0,0,1-5.77,1.7c-10.71,1.26-21-1-31.5-2.37-2.21-.19-4.41-.38-6.62-.54a5.7,5.7,0,0,1-2.12-.12l-.39-.06c-2.45-.17-4.91-.31-7.36-.45h-.11c-11.25-.15-22.63.73-33.81,1-24.61.61-49.24,4.27-73.83,1.5-4.54-.51-9.08-1.12-13.62-1.69a80.31,80.31,0,0,1-15.93,1.45c-3-.09-6-.35-8.9-.73-4.6,1.15-9.23,2.34-14,3.2-15.47,2.79-30.49-1.24-45.91-.13-7.29.53-15.25,1.6-22.75.69-8-.18-16-.79-24.07-1.42Q518.09,6.51,509.54,6h0a6.35,6.35,0,0,1-1.74-.11l-2.16-.11-1.55.08c-1.11,0-2.37,0-3.32.12a15.72,15.72,0,0,1-4.37.39c-2-.31-4,.19-5.92.34a21.65,21.65,0,0,1-3.22-.08c-3.32-.25-6.56-.52-10.08-.64a53.83,53.83,0,0,0-9.41.17c-1.23.17-2.47.1-3.68.34a20.12,20.12,0,0,1-4.84.15c-1.24-.06-2.4-.16-3.64-.11-2.69.12-5.38.21-8.06.17a94.49,94.49,0,0,0-9.67,0c-2.88.25-5.74.9-8.64.67s-5.77-.09-8.65-.39a38.21,38.21,0,0,0-15.19.38,19.19,19.19,0,0,1-5.86.16c-1.92-.16-3.83.36-5.75.51-4.1.33-8.23-.4-12.33.06a26.16,26.16,0,0,1-4.51.39c-3.5-.22-6.94-.65-10.46-.69-3.32,0-6.65.06-10,.3s-6.22.94-9.36,1.3a41.55,41.55,0,0,1-8.56-.27,47.42,47.42,0,0,0-5.06-.11l-2.73.65L327,9.9a5.86,5.86,0,0,1-2.23-.18,101.88,101.88,0,0,1-12.05.74,10.66,10.66,0,0,1-1.45.12,3.86,3.86,0,0,0-2.12.47l-1.93-.34a6.68,6.68,0,0,1-2.83.12,20,20,0,0,0-4.05,0,17.34,17.34,0,0,1-5.79-.2l-1.89.64c-.76,0-1.51-.12-2.12-.08-1.14.05-2.22.16-3.31.27-3.73.38-4.35.35-7.39-.34l-.19,0c-3,.4-6,.94-9.06,1.37-4.05.56-8.08-.55-12.12-.49a.84.84,0,0,1-.33-.06c-2.49.26-4.89,1.19-7.42,1a37.44,37.44,0,0,1-4-.6,9,9,0,0,0-.91.09c-1,.15-2.25.24-3.43.34-.59.06-1.41,0-1.89.11a30.87,30.87,0,0,1-4.76.49c-1.31.06-2.66.19-3.76.35-1.66.25-3.13.56-4.32.78-1.44-.09-2.91-.27-3.28-.2-2,.39-4.81.19-6.86.52l-1.31-.38-2.53.37-2-.22a15.33,15.33,0,0,1-4.38.23,3.87,3.87,0,0,0-1.06.08c-1.06.48-1.54-.09-2.5-.05a6.28,6.28,0,0,1-1.32.33A15.42,15.42,0,0,0,198,16a10.11,10.11,0,0,1-2,.16,3.75,3.75,0,0,1-.93-.24,27.65,27.65,0,0,1-5.63.33,12.78,12.78,0,0,1-2.18.42c-2.71,0-5.57.31-8.13-.13a10.9,10.9,0,0,0-1.57-.06c-1.52,0-3,.15-4.52.15a20.35,20.35,0,0,0-4.24.19,3.87,3.87,0,0,1-.9,0,5.63,5.63,0,0,0-3.12.34,47.17,47.17,0,0,0-5.08-.38c-2.28.07-4-.16-6.11-.22a41.16,41.16,0,0,1-8.38.5,29.44,29.44,0,0,0-3.05.26c-.62,0-1.3.07-1.93.07s-1.42-.1-2.11-.09c-3.24.07-6.54,0-9.72.2a3.53,3.53,0,0,1-.57,0c-2.49-.41-4,.12-6,.26a18.29,18.29,0,0,0-4.79,0,42.74,42.74,0,0,1-7.52.73,6.75,6.75,0,0,0-.79.11,37.3,37.3,0,0,1-7.29.26,21.64,21.64,0,0,0-2.75.09c-1.08.07-2.09.17-3.06.25l-1.77-.69c-1,.1-1.69.19-2.47.26a22.57,22.57,0,0,1-3,.22,14.58,14.58,0,0,0-2.76,0,16.44,16.44,0,0,1-1.84.11,23.36,23.36,0,0,0-6.28.32c-2.42.33-5.46.32-7.88.68a20,20,0,0,1-2.87.08c-1.3,0-2.68-.07-3.83-.18a19.46,19.46,0,0,0-4.65.05,27.36,27.36,0,0,1-3.09.11c-1.87,0-3.71-.19-5.6-.23a25.68,25.68,0,0,1-5.57.82c-.7,0-1.39,0-2.07-.06H42c-5.27.13-10.12.21-15.29,1.49A115.62,115.62,0,0,0,12.9,26.71c-1.44.55-2.79,1.17-4.22.93a28.82,28.82,0,0,1-4.11,1.17L4.23,29h0a1.14,1.14,0,0,1-.42.35,5.77,5.77,0,0,1-1.5.08,3.88,3.88,0,0,0-.76.12l-.34.09-.33.07a.43.43,0,0,0-.21.11.55.55,0,0,1-.18.13A1.36,1.36,0,0,1,0,30H1280C1280,29.86,1279.7,29.57,1279.37,29.3Z"></path></svg>
                </div>
                <section className={"row d-flex justify-content-center"} id={"moreFromShopContainer"} style={{
                    backgroundColor: "#ffeee6",
                    paddingBottom: "48px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "24px",
                    maxWidth: "1400px",
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
                        <img className={"col my-3"} src={this.state.adItemInformation[0].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[0].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[0].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[1].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[1].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[1].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[2].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[2].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[2].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[3].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[3].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[3].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[4].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[4].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[4].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[5].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[5].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[5].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[6].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[6].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[6].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[7].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[7].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[7].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[8].image}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[8].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[8].price}</span>
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
                        <img className={"col my-3"} src={this.state.adItemInformation[9].image}></img>
                        <span></span>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.adItemInformation[9].name}</p>
                                        <span>$</span>
                                        <span>{this.state.adItemInformation[9].price}</span>
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