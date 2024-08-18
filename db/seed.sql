\c seconds_db;

INSERT INTO
    restaurants (
        name,
        img,
        cuisine,
        street1,
        street2,
        city,
        state,
        zipcode
    )
VALUES
    (
        'KFC',
        'https://www.travelandleisure.com/thmb/eJe84vLpPt0daIHdrEEuvfkK6qE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/carne-mare-interior-dining-TLEDNYCEATS0721-68a50493a8a644efa68ad9513d7af3c1.jpg','Mexican',   '123 broadway',    '',     'San Diego',     'CA',     92101   
    ), (
        'The Greenhouse',
        'https://example.com/images/the-greenhouse-interior.jpg',
        'Vegetarian',
        '456 Elm Street',
        '',
        'Portland',
        'OR',
        97201
    ),
    (
        'Taco Bell',
        'https://example.com/images/taco-bell-interior.jpg',
        'Mexican',
        '789 Maple Avenue',
        '',
        'Austin',
        'TX',
        73301
    ),
    (
        'Sushi World',
        'https://example.com/images/sushi-world-interior.jpg',
        'Japanese',
        '101 Pine Lane',
        '',
        'Seattle',
        'WA',
        98101
    ),
    (
        'Pasta Paradise',
        'https://example.com/images/pasta-paradise-interior.jpg',
        'Italian',
        '202 Oak Drive',
        '',
        'Miami',
        'FL',
        33101
    ),
    (
        'Burger Haven',
        'https://example.com/images/burger-haven-interior.jpg',
        'American',
        '303 Birch Road',
        '',
        'Denver',
        'CO',
        80201
    );

INSERT INTO food (name,restaurant_food_id,rating,seconds,img,restaurant_id)
VALUES
    ('Chicken Sandwich', '1', 5, true, 'https://dynl.mktgcdn.com/p/rlMTM2pluTIrXMa_PmXTCsqqlOdvERi-oXVWQbTt0IQ/619x619.jpg', 1),
        ('Veggie Burger', '2', 6, true, 'https://example.com/images/veggie-burger.jpg', 2),
    ('Spicy Tacos', '3', 7, false, 'https://example.com/images/spicy-tacos.jpg', 1),
    ('Caesar Salad', '4', 8, true, 'https://example.com/images/caesar-salad.jpg', 3),
    ('BBQ Ribs', '5', 12, true, 'https://example.com/images/bbq-ribs.jpg', 2),
    ('Cheesecake', '6', 4, true, 'https://example.com/images/cheesecake.jpg', 4);
   