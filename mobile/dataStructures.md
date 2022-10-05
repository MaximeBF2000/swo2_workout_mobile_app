# DataStructure

1. Exercices by dates

```json
[
  {
    "date": "01/01/2000",
    "exercices": [
      {
        "title": "exercice title",
        "series": [
          {
            "reps": 10,
            "weight": "PDC",
            "note": "some note",
            "spotted": false
          }
        ]
      }
    ]
  }
]
```

2. Series by exercices

```json
[
  {
    "exercice": { "id": "exerciceId", "name": "exercice name" },
    "dates": [
      {
        "date": "01/01/2000",
        "series": [
          {
            "reps": 10,
            "weight": "PDC",
            "note": "some note",
            "spotted": false
          }
        ]
      }
    ]
  }
]
```

3. Exercices by categories

```json
{
  "category": { "id": "categoryId", "name": "category name" },
  "exercices": [{ "id": "exerciceId", "name": "exercice name" }]
}
```

4. Trainings by user / Sessions by training / Exercices by session

```json
{
  "user": { "id": "userId" },
  "trainings": [
    {
      "title": "Training title",
      "description": "Training description"
    }
  ]
}
```
