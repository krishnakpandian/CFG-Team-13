const Image = (imageName) => {
    const images = {
        "diversity": require("../../Assets/Quinn_Diversity.jpeg"),
        "environment": require("../../Assets/environmental_quinn.jpg"),
        "covid": require("../../Assets/Quinn_COVID.jpg")
    }
    return images[imageName];
}

export default Image;
