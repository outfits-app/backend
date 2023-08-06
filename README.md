# Init project

```

  $ npm install

  $ npm run dev


```

# Build project

```

  $ npm run build

```

## Endpoints

- api: https://backend-ot4e.onrender.com

### all colors

GET - /api/colors 

```
  [
    {
      "color": "name",  
      "id": "1"
    } 
  ]

```

### create color

POST - /api/colors

```

  {
    "color": "name",  
  } 

```

### all categories

GET - /api/categories

```
  [
    {
      "category": "name",  
      "id": "1"
    } 
  ]

```

### create category

POST - /api/categories

```

  {
    "category": "name",  
  } 

```

### all clothings

GET - /api/clothings?category=1&color=1

```

  [
    {
      "name": "name", 
      "category": {
        "category": "name",  
        "id": "1"
      },
      "color": {
        "color": "name",  
        "id": "1"
      },
      "img_url": "url",
      "id": "1"
    } 
  ]

```

### clothing by id

GET - /api/clothings/:id

```
 
  {
    "name": "name", 
    "category": {
      "category": "name",  
      "id": "1"
    },
    "color": {
      "color": "name",  
      "id": "1"
    },
    "img_url": "url",
    "id": "1"
  }  

```

### add image to clothing

POST - /api/clothings/image/:id

- image must be sent as form-data request (no is a JSON) with the following

request: 

```

  form-data: {
    my_file: "image"
  }

```

response: 

```
  {
      "name": "name", 
      "category": {
        "category": "name",  
        "id": "1"
      },
      "color": {
        "color": "name",  
        "id": "1"
      },
      "img_url": "url",
      "id": "1"
    } 
```

### create clothing

POST - /api/clothings

```

  {
    "name": "name", 
    "category": 1,
    "color": 1
  } 

```



### delete clothing

DELETE - /api/clothings/:id

### all outfits

GET - /api/outfits?category=1&color=1

```
  [
    {
      "name": "name",
      clothings: [
        {
          "name": "name", 
          "category": {
            "category": "name",  
            "id": "1"
          },
          "color": {
            "color": "name",  
            "id": "1"
          },
          "img_url": "url",
          "id": "1"
        } 
      ],
      "id": "1"
    } 
  ]
```

### outfit by id

GET - /api/outfits/:id

```
    {
      "name": "name",
      clothings: [
        {
          "name": "name", 
          "category": {
            "category": "name",  
            "id": "1"
          },
          "color": {
            "color": "name",  
            "id": "1"
          },
          "img_url": "url",
          "id": "1"
        } 
      ],
      "id": "1"
    } 
```

### delete outfit

DELETE - /api/outfits/:id

### create outfit

POST - /api/outfits

```

  {
    "name": "name", 
    "clothings": [id_1, id_2, id_3]
  } 

```

### update outfit

PUT - /api/outfits/:id

```

  {
    "name": "name", 
    "clothings": [id_1, id_2, id_3]
  } 

```




