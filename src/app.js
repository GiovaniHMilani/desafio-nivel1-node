const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, techs, url } = request.body;

  const newRepository = { id: uuid(), title, techs, url, likes: 0 };
  repositories.push(newRepository);

  return response.status(201).json(newRepository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, techs, url } = request.body;

  const repositoriesIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoriesIndex < 0) {
    return response.status(400).json({ eror: "Repository not found" });
  }
  const updatedRepository = {
    id,
    title,
    techs,
    url,
    likes: repositories[repositoriesIndex].likes,
  };

  repositories[repositoriesIndex] = updatedRepository;

  return response.json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoriesIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoriesIndex < 0) {
    return response.status(400).json({ eror: "Repository not found" });
  }
  repositories.splice(repositoriesIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoriesIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoriesIndex < 0) {
    return response.status(400).json({ eror: "Repository not found" });
  }

  const updatedRepository = {
    ...repositories[repositoriesIndex],
    likes: repositories[repositoriesIndex].likes + 1,
  };
  repositories[repositoriesIndex] = updatedRepository;

  return response.json(updatedRepository);
});

module.exports = app;
