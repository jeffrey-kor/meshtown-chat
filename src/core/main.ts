import Express from "express";

const app = Express();

app.use("/", (req, res, next) => {
  res.status(200).send({ message: "Connection to server..." });
  next();
})


app.listen(4500, () => {
  console.log(`Meshtown chat server is running on ${4500}..`);
});