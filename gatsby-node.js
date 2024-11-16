const path = require("path");
const fs = require("fs-extra");

exports.onPostBuild = async () => {
    const source = path.join(__dirname, "src/assets");
    const destination = path.join(__dirname, "public/assets");

    try {
        await fs.copy(source, destination);
        console.log("Images copied to public folder");
    } catch (err) {
        console.error("Error copying images to public folder:", err);
    }
};

exports.onCreateDevServer = async () => {
    const source = path.join(__dirname, "src/assets");
    const destination = path.join(__dirname, "public/assets");

    try {
        await fs.copy(source, destination);
        console.log("Images copied to public folder (development)");
    } catch (err) {
        console.error("Error copying images to public folder (development):", err);
    }
};
