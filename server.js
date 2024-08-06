const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  posts: 640,
});

app.use(rules);
app.use(auth);
app.use(router);
app.listen(8080, () => console.log("app running at http://localhost:8080"));
