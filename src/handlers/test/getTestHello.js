const getTestHello = async (req, res) => {
    try {
        res.send("Hello World !");
    } catch (error) { }
};
export default getTestHello;
