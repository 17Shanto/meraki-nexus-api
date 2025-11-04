# Reademe file is updating...
# Miraki Nexus Api - Backend

This repository contains the backend service for an innovative e-commerce platform dedicated to buying and selling artwork.
The core of this project is a **custom AI model** trained to **automatically evaluate and classify** uploaded artwork into **21 distinct categories**. This backend manages user authentication, artwork uploads, marketplace listings, and secure payment processing.

---

## ✨ Key Features

* **AI-Powered Classification:** Integrates a custom-trained machine learning model to automatically categorize all uploaded artwork.
* **Marketplace Functionality:** Full API support for users to **upload, browse, buy, and sell** digital or physical art pieces.
* **Web3 Integration:** All transactions are securely handled using **MetaMask**, allowing users to connect their wallets easily.
* **Cryptocurrency Payments:** The platform uses **Ethereum (ETH)** as its exclusive currency for all transactions.
* **Database Management:** Manages all user data, artwork details, classification results, and transaction records.

---

## The live server will be available at https://meraki-nexus-api.vercel.app/

---

### API Reference

**Base URL:** `https://meraki-nexus-api.vercel.app/meraki-nexus-api`

### Nexuses

#### Create a Nexus
**POST** `/nexus`  

**Body**
```json
{
      "title": "Blue Dreams Onion",
      "artist": "Chloe Dubois",
      "image_url": "https://media.istockphoto.com/id/856679760/vector/wax-crayon-like-childs-hand-drawn-house-grass-colorful-flowers-and-sun.jpg?s=612x612&w=0&k=20&c=rF16DSl_muUTAdkB3TjaLsBBWxQwJUaAvu2sI6WfqLg=",
      "art_value_usd": 17200,
      "created_year": "2023",
      "medium": "Digital",
      "user":"68fefc8277cd045e82e43567",
      "available":10,
      "price_per_unit":0.00001
}

```

**Response 201**
```json
{
    "success": true,
    "statusCode": 201,
    "message": "Nexus created successfully",
    "data": {
        "title": "Blue Dreams Onion",
        "artist": "Chloe Dubois",
        "image_url": "https://media.istockphoto.com/id/856679760/vector/wax-crayon-like-childs-hand-drawn-house-grass-colorful-flowers-and-sun.jpg?s=612x612&w=0&k=20&c=rF16DSl_muUTAdkB3TjaLsBBWxQwJUaAvu2sI6WfqLg=",
        "art_value_usd": 17200,
        "created_year": "2023",
        "medium": "Digital",
        "tags": [
            {
                "class_name": "pop_art",
                "confidence": 0.9999403953552246
            },
            {
                "class_name": "cubism",
                "confidence": 0.9671164751052856
            },
            {
                "class_name": "symbolism",
                "confidence": 0.7939183712005615
            },
            {
                "class_name": "art_nouveau",
                "confidence": 0.7777096629142761
            },
            {
                "class_name": "abstract_expressionism",
                "confidence": 0.49437543749809265
            }
        ],
        "user": "68fefc8277cd045e82e43567",
        "available": 10,
        "price_per_unit": 0.00001,
        "_id": "690a4ce707c768e1889c9423",
        "createdAt": "2025-11-04T18:58:47.221Z",
        "updatedAt": "2025-11-04T18:58:47.221Z"
    }
}
```

---
