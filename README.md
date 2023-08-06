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

### all colors

GET - /api/colors 

```
  [
    {
      "name": "name",  
      "id": "1"
    } 
  ]

```

### create color

POST - /api/colors

```

  {
    "name": "name",  
  } 

```

### all categories

GET - /api/categories

```
  [
    {
      "name": "name",  
      "id": "1"
    } 
  ]

```

### create category

POST - /api/categories

```

  {
    "name": "name",  
  } 

```

### all clothings

GET - /api/clothings?category=1&color=1

```

  [
    {
      "name": "name", 
      "category": {
        "name": "name",  
        "id": "1"
      },
      "color": {
        "name": "name",  
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
      "name": "name",  
      "id": "1"
    },
    "color": {
      "name": "name",  
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
    "name": "Camisa roja",
    "color": "64ca77265cf35ef21b7ece3f",
    "category": "64ca77ce5cf35ef21b7ece58",
    "image_url": "http://res.cloudinary.com/duuc0zmxs/auto/upload/64ca785c5cf35ef21b7ece60",
    "id": "64ca785c5cf35ef21b7ece60"
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
            "name": "name",  
            "id": "1"
          },
          "color": {
            "name": "name",  
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
            "name": "name",  
            "id": "1"
          },
          "color": {
            "name": "name",  
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




