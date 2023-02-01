export const VALID_PARAMS = {

        "type": "object",
        "default": {},
        "title": "Root Schema",
        "required": [
            "page",
            "per_page",
            "total",
            "total_pages",
            "data",
            "support"
        ],
        "properties": {
            "page": {
                "type": "integer",
                "default": 0,
                "title": "The page Schema",
                "examples": [
                    2
                ]
            },
            "per_page": {
                "type": "integer",
                "default": 0,
                "title": "The per_page Schema",
                "examples": [
                    6
                ]
            },
            "total": {
                "type": "integer",
                "default": 0,
                "title": "The total Schema",
                "examples": [
                    12
                ]
            },
            "total_pages": {
                "type": "integer",
                "default": 0,
                "title": "The total_pages Schema",
                "examples": [
                    2
                ]
            },
            "data": {
                "type": "array",
                "default": [],
                "title": "The data Schema",
                "items": {
                    "type": "object",
                    "title": "A Schema",
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ],
                    "properties": {
                        "id": {
                            "type": "integer",
                            "title": "The id Schema",
                            "examples": [
                                7,
                                8,
                                9,
                                10,
                                11,
                                12
                            ]
                        },
                        "email": {
                            "type": "string",
                            "title": "The email Schema",
                            "examples": [
                                "michael.lawson@reqres.in",
                                "lindsay.ferguson@reqres.in",
                                "tobias.funke@reqres.in",
                                "byron.fields@reqres.in",
                                "george.edwards@reqres.in",
                                "rachel.howell@reqres.in"
                            ]
                        },
                        "first_name": {
                            "type": "string",
                            "title": "The first_name Schema",
                            "examples": [
                                "Michael",
                                "Lindsay",
                                "Tobias",
                                "Byron",
                                "George",
                                "Rachel"
                            ]
                        },
                        "last_name": {
                            "type": "string",
                            "title": "The last_name Schema",
                            "examples": [
                                "Lawson",
                                "Ferguson",
                                "Funke",
                                "Fields",
                                "Edwards",
                                "Howell"
                            ]
                        },
                        "avatar": {
                            "type": "string",
                            "title": "The avatar Schema",
                            "examples": [
                                "https://reqres.in/img/faces/7-image.jpg",
                                "https://reqres.in/img/faces/8-image.jpg",
                                "https://reqres.in/img/faces/9-image.jpg",
                                "https://reqres.in/img/faces/10-image.jpg",
                                "https://reqres.in/img/faces/11-image.jpg",
                                "https://reqres.in/img/faces/12-image.jpg"
                            ]
                        }
                    },
                    "examples": [{
                        "id": 7,
                        "email": "michael.lawson@reqres.in",
                        "first_name": "Michael",
                        "last_name": "Lawson",
                        "avatar": "https://reqres.in/img/faces/7-image.jpg"
                    },
                    {
                        "id": 8,
                        "email": "lindsay.ferguson@reqres.in",
                        "first_name": "Lindsay",
                        "last_name": "Ferguson",
                        "avatar": "https://reqres.in/img/faces/8-image.jpg"
                    },
                    {
                        "id": 9,
                        "email": "tobias.funke@reqres.in",
                        "first_name": "Tobias",
                        "last_name": "Funke",
                        "avatar": "https://reqres.in/img/faces/9-image.jpg"
                    },
                    {
                        "id": 10,
                        "email": "byron.fields@reqres.in",
                        "first_name": "Byron",
                        "last_name": "Fields",
                        "avatar": "https://reqres.in/img/faces/10-image.jpg"
                    },
                    {
                        "id": 11,
                        "email": "george.edwards@reqres.in",
                        "first_name": "George",
                        "last_name": "Edwards",
                        "avatar": "https://reqres.in/img/faces/11-image.jpg"
                    },
                    {
                        "id": 12,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",
                        "last_name": "Howell",
                        "avatar": "https://reqres.in/img/faces/12-image.jpg"
                    }]
                },
                "examples": [
                    [{
                        "id": 7,
                        "email": "michael.lawson@reqres.in",
                        "first_name": "Michael",
                        "last_name": "Lawson",
                        "avatar": "https://reqres.in/img/faces/7-image.jpg"
                    },
                    {
                        "id": 8,
                        "email": "lindsay.ferguson@reqres.in",
                        "first_name": "Lindsay",
                        "last_name": "Ferguson",
                        "avatar": "https://reqres.in/img/faces/8-image.jpg"
                    },
                    {
                        "id": 9,
                        "email": "tobias.funke@reqres.in",
                        "first_name": "Tobias",
                        "last_name": "Funke",
                        "avatar": "https://reqres.in/img/faces/9-image.jpg"
                    },
                    {
                        "id": 10,
                        "email": "byron.fields@reqres.in",
                        "first_name": "Byron",
                        "last_name": "Fields",
                        "avatar": "https://reqres.in/img/faces/10-image.jpg"
                    },
                    {
                        "id": 11,
                        "email": "george.edwards@reqres.in",
                        "first_name": "George",
                        "last_name": "Edwards",
                        "avatar": "https://reqres.in/img/faces/11-image.jpg"
                    },
                    {
                        "id": 12,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",
                        "last_name": "Howell",
                        "avatar": "https://reqres.in/img/faces/12-image.jpg"
                    }]
                ]
            },
            "support": {
                "type": "object",
                "default": {},
                "title": "The support Schema",
                "required": [
                    "url",
                    "text"
                ],
                "properties": {
                    "url": {
                        "type": "string",
                        "default": "",
                        "title": "The url Schema",
                        "examples": [
                            "https://reqres.in/#support-heading"
                        ]
                    },
                    "text": {
                        "type": "string",
                        "default": "",
                        "title": "The text Schema",
                        "examples": [
                            "To keep ReqRes free, contributions towards server costs are appreciated!"
                        ]
                    }
                },
                "examples": [{
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }]
            }
        },
        "examples": [{
            "page": 2,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
            "data": [{
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }],
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }]
    }