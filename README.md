Description
Backend for Nuvem Shop

@ GET / - Get all heroes

@ GET /:id - Get hero by ID

@ POST / - Post hero data. 

Example for POST /
{
    "nickname": "Test Hero",
    "real_name": "Test Testovich",
    "origin_description": "Rogers' battle experience and military training make him an expert tactician and field commander, with his teammates frequently deferring        to his orders in battle. The Avengers, X-Men, Fantastic Four, and other heroes choose Rogers as their leader during the Secret Wars",
    "superpowers": "Enhanced strength, speed, stamina, durability, agility, reflexes, senses, and mental processing via the super soldier serum",
    "catch_phrase": "I'm supertester!”",
    "Images": "http://pm1.narvii.com/6393/d838e445f4b5e469450c48ef0d74fa9fd879df5b_00.jpg"
}

@ DELETE /:id - Delete hero by ID

@PATCH /:id - Update hero data by ID

