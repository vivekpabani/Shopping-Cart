//----------------------------------------------------------------
// store (contains the products)
//

function store() {
    this.products = [
        new product("iphone2g", "Iphone 2G", "Quad-band GSM cellular connectivity with GPRS and EDGE support for data transfer.", 135),
        new product("iphone3g", "Iphone 3G", " Hardware features, such as GPS, 3G data and tri-band UMTS/HSDPA", 199),
        new product("iphone3gs", "Iphone 3GS", "3GS features iOS, Apple's mobile operating system. The user interface of iOS is based on the concept of direct manipulation, using multi-touch gestures.", 219),
        new product("iphone4s", "Iphone 4G", "	1 GHz (Underclocked to 800 MHz) single core 32-bit ARM Cortex-A8 Hummingbird.", 359),
        new product("iphone5s", "Iphone 5s", "Retina display 4-inch (diagonal) LED-backlit widescreen Multi-Touch display with IPS technology", 599),
        new product("iphone6", "Iphone 6", "1/3'' sensor size, 1.5µm pixel size, geo-tagging, simultaneous HD video and image recording, touch focus, face/smile detection, HDR (photo/panorama)", 799),
        new product("XperiaZ4", "Sony Xperia Z4", "Sony Xperia Z4 smartphone with 5.20-inch 1080x1920 display powered by 1.5GHz processor alongside 3GB RAM and 20.7-megapixel rear camera.", 799),
        new product("galaxyS6edge", "Galaxy S6 Edge", " Samsung Galaxy S6 Edge With its dual-curve glass display.Hardware features, such as GPS, 3G data and tri-band UMTS/HSDPA", 899),
    ];

}
store.prototype.getProduct = function (stock) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].stock == stock)
            return this.products[i];
    }
    return null;
}
