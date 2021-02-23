// src/server.ts
import { app } from "./app";

app.listen(app.get('port'), () =>
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
);