const Image = (imageName) => {
    const images = {
        "diversity": require("../../Assets/Quinn_Diversity.jpeg"),
        "environment": require("../../Assets/environmental_quinn.jpg"),
        "covid": require("../../Assets/Quinn_COVID.jpg"),
        // "image": require("../../Assets/image.jpeg"),
        // "image2": require("../../Assets/image1.jpg"),
        // "image3": require("../../Assets/image2.jpg")
    }
    return images[imageName];
}

export default Image;
