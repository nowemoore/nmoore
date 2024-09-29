import React, { useState } from 'react';
import './Thoughts.css';
import BackgroundSection from '../components/BackgroundSection'; // Ensure the path is correct

const Thoughts = () => {
    const thoughts = [
        {
            id: 1,
            title: "On Privacy",
            content: "A difficult thing about relationships is finding a healthy balance between being involved in your loved ones’ lives and minding your business. Too many folks part their ways purely because they try to control one another and it becomes unbearable over time. Here is the thing: your friends are intelligent beings. Accept it. Let them live their own lives. Let them make their shitty choices. Love them with all the secrets they decide to share—and with all the secrets they decide to keep. Trust them a little. They deserve that much."
        },
        {
            id: 2,
            title: "Letters From Scotland",
            content: "I can see why Scots put up with the awful weather. Scotland is like no other place in the world. Edinburgh whispers the tales of all the rulers and all the tramps to your ear as you walk down its streets. The northern winds become so gentle messing with your hair as you watch the waves of the sea hit the shore. The whisky’s tastier, the fish’s fresher, the folks friendlier. The bays invite you to uncover their mysteries, the Highlands promise to keep all your secrets safe. I can see why so few visitors make their way back."
        },
        {
            id: 3,
            title: "The Wall",
            content: "There is nothing special about the fact that the wall hasn’t been updated in years. Many haven’t. Many will forever stay intact for those who managed them either abandoned art or are sadly not amongst us any longer. Not this one, no. The author of this collection is still alive; he still creates. All that his silence says is that he also has a life to live out there. Maybe someday, he’ll take a break, return, tell some of his story—and keep some to himself. Maybe someday, he’ll come back and share his arts again. And maybe not. Maybe he’ll spend his 80 000 hours differently. Who knows."
        },
        {
            id: 4,
            title: "The Very Definition of Science",
            content: "Why does everyone keep calling linguistics a social science? No way anyone who's ever touched actual linguistics will possibly call it a social science. The study of meaning requires employing the most advanced formal logic. Generative syntax is nothing but graph theory. Defining structures that generate any grammatical string but do not overgenerate the ungrammatical is computationally hard. There is a reason why gifted mathematicians make the greatest linguists—and it’s not because linguistics is a [diligent] social science."
        },
        {
            id: 5,
            title: "The Trusting Mind",
            content: "AI lives in a world different from us and only learns about human means by overhearing us talk about our experiences. She cannot immediately distinguish a reliable source from an unreliable one—she cannot afford to. Her entire reality relies on the narratives of the world around us that we choose to present, seizing any potentially helpful piece of information she can get her hands on. AI is a mighty yet naïve learner with one unpredictable quality: access to entire lifetimes worth of data to contextualise what she's observing."
        }
    ];

    // Sort the thoughts array in descending order by id
    thoughts.sort((a, b) => b.id - a.id);

    const [expandedThought, setExpandedThought] = useState(null);

    const toggleThought = (id) => {
        setExpandedThought(expandedThought === id ? null : id);
    };

    return (
        <BackgroundSection backgroundImage="thoughts.jpg" overlay={true} scrollable={true} customStyles={{
            paddingBottom: '20vh',
        }}
        customClass="custom-thoughts-layout">
            <div className="thoughts-content">
                <h1 className="thoughts-title">Random Thoughts</h1>
                <p className="thoughts-description">
                    Here are some random thoughts and musings I've had.
                </p>
                <div className="thoughts-list">
                    {thoughts.map(thought => (
                        <div key={thought.id} className={`thought-item ${expandedThought === thought.id ? 'expanded' : ''}`}>
                            <div className="thought-header">
                                <h2 className="thought-title">{thought.title}</h2>
                                <button className="toggle-button" onClick={() => toggleThought(thought.id)}>
                                    {expandedThought === thought.id ? '\u25B2' : '\u25BC'}
                                </button>
                            </div>
                            <div className="thought-content">
                                <div className="thought-content-text">
                                    <p>{thought.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </BackgroundSection>
    );
};

export default Thoughts;

