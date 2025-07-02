import React from 'react';
import TextPageBase from './TextPageBase';

const CrushesPage = () => {
    return (
        <TextPageBase 
            title="Crushes"
            date="March 2024"
            chips={["personal", "art"]}
            backgroundImage="canada-trip.jpg"
        >

       <div className="song">
    <span className="song-text">
        All our troubles, we'll lay to rest, and
        <br />
        We'll wish we could come back to these days.
    </span>
    <span className="song-author">Rudimental, These Days</span>
</div>
            <p>
                <b>The Perfect Night.</b> Let me just point out that I never meant to get this close. All I wanted was to catch a ferry to Ward’s Island and take some cheap pictures with Toronto’s nighttime skyline, but the ferry wouldn’t come, so I turned around and walked up to Nathan Phillips Square, only to find out that they rented ice skates for $10. How could I say no to that?
            </p>

            <p>That a girl could hockey stop impressed all the boys at the ice rink, though I didn’t care. I already had a date. I said I wanted dinner and you said okay, but the nearby markets were too crowded. We snuck out and found ourselves this table under the fairy lights, and you whispered to me to get this food-truck poutine. Though I was sceptical at first, my heart melted alongside the cheese curds.</p>
        
            <p>A couple of Indian kids asked to join, for there was nowhere else left to sit. They talked me into trying paneer sometime, and I made their eyes light up by mentioning that their mother tongue was kind of dope. By then, my phone had run out of charge, but it didn’t matter because I knew my way back to my hotel room. I got strangely comfortable with be-ing all by myself in the middle of a big city, in the middle of a splendid frozen night.</p>

            <p><b>Mastering Waterbending.</b> Fine nightlife is not all there is to you, though, is it? I hat-ed that Niagara Falls had a bit too many flashing neon signs and only ghosts to advertise to, but the ambient sound I heard after my headset fell off drew an unforeseen awed ‘wow’ from my lips. Note to self: the power of water strikes the ear much more clearly than it does the eye.</p>
        
            <p>I climbed the fence and had this passing German tourist take a few borderline illegal pic-tures. For the record: I didn’t realise it was illegal at the time of taking the pictures, but chances are that even if I did know, I would’ve done it anyway. For a brief moment I felt like I was bending water at the edge of that cliff, and it brought this cheeky grin to my face that I hadn’t experienced in a while.</p>
        
            <p><b>The Wall.</b> Once I returned to the city, just before I headed to the airport, you grabbed my hand and pulled me to this alley covered in graffiti. You knew that it’d remind me of this street artist I used to know, didn’t you? You knew I needed to sit through my own grief over lost friendships, so you escorted me to a nearby bench and had the northern breeze wipe away my tears. But you also knew to keep your distance. I already had a home, after all.</p>

            <p><b>Home.</b> You left me alone but not lonely, although you knew I’d be gone soon. I didn’t cry on the plane. I cuddled the plushie racoon I bought for the Boy and thought to myself that I now understand why he remembers you with so much admiration, almost longing. Hey Canada, you made me love you more than Toronto loves hockey—and that is a lot. Are we going to see each other again or was this just a drive-by? </p>
        </TextPageBase>
    );
};

export default CrushesPage;