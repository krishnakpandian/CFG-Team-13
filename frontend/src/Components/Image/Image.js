const Image = (imageName) => {
    const images = {
        "": require(""),
    }
    return images[imageName];
}

export default Image;