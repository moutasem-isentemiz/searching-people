## Getting Started

First, run:

```bash
docker-compose up -d --build
```

Then inside the container make sure to run this command to bring up the json-server (acts like a backend api using the db.json file)

```bash
npx json-server --watch db.json --port 3001 -H 0.0.0.0
```
