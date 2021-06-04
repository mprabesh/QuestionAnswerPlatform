const express = require("express");
const app = express();
const cors = require("cors");
const port = 1234;
const getinfo = require("./routes/getRequest");
const data = require("./testData");
const authenticate = require("./authenticate");
const handlePost = require("./routes/uploadPost");
const handleMongoDB = require("./routes/handelQuestionupload");
const getSpecific = require("./routes/getPostSpecific");
const handleAnswer = require("./routes/uploadAnswer");
const getAnswers = require("./routes/getAnswers");
const searchBar = require("./routes/search");
const AddnewRequest = require("./routes/NewRequest");
const ConfirmRequest = require("./routes/userRegister");
const rmvNew = require("./routes/removeNewRequest");
const verifyToken = require("./routes/verifyToken");

app.use(cors());
app.use(express.json());

app.get("/requests", getinfo);
app.post("/login", authenticate, (req, res) => {
  console.log("COmpleted");
});

app.post("/beep", (req, res) => {
  console.log(req.body.values);
  handleMongoDB(req.body.values);
  res.end();
});

app.get("/", authenticate, (req, res) => {
  res.send(data);
});

app.use("/search", (req, res) => {
  searchBar()
    .then((a) => {
      res.send(a);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/getPostData", (req, res) => {
  handlePost()
    .then((a) => {
      res.send(a);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/getAnswers/:id", (req, res) => {
  const val = req.params.id;
  getAnswers(val)
    .then((a) => {
      res.send(a);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/specific/:name", (req, res) => {
  const d = req.params.name;
  getSpecific(d)
    .then((a) => {
      res.send(a);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post(
  "/postAnswer",
  verifyToken,

  (req, res) => {
    handleAnswer(req.body.values);
    res.end();
  }
);

app.post("/userRegister", (req, res) => {
  AddnewRequest(req.body.userInfo);
  res.end();
});

//This API is for the admin.
app.post("/confirmRegister", verifyToken, (req, res) => {
  const data = {
    firstname: req.body.a.Firstname,
    lastname: req.body.a.Lastname,
    email: req.body.a.Email,
    gender: req.body.a.Gender,
    password: req.body.a.Password,
  };
  ConfirmRequest(data);
  rmvNew(data);
});

app.post("/deleteRequest", verifyToken, (req, res) => {
  const data = {
    firstname: req.body.a.Firstname,
    lastname: req.body.a.Lastname,
    email: req.body.a.Email,
    gender: req.body.a.Gender,
    password: req.body.a.Password,
  };
  rmvNew(data);
});
//##########################----###_--#_
app.listen(port, () => {
  console.log("listening to port 1234");
});
