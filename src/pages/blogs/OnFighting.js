import React from 'react';
import TextPageBase from './TextPageBase';

const OnFighting = () => {
    return (
        <TextPageBase
            title="Fight Classy"
            date="August 2025"
            chips={["tool", "personal"]}
            backgroundImage="suit.jpg"
        >

            <p>I hear people complain that telling kids to merely ‘say sorry’ when they wrong someone is not teaching them actual empathy, but I think the overarching issue is that they never learn to resolve conflict—only to handle it, at best. Now I’ve never studied conflict resolution itself, but I have read my fair share of papers about the human mind, which I’ve found helpful in connecting the dots in real-world scenarios. My today’s contribution is a few tips on resolving conflict that help me resolve ~90% of my problems, most of which work across settings—from work and friendships, to dating and family. Hope some of it helps.</p>
            <div className="section-header">
                <b>No. 1: </b>  Assume Good Intentions.
            </div>
            <p>What if arguments weren’t competitive but rather collaborative games? The thing is, in general, few people enter arguments with actual ill intentions. I mean, <i>very</i> few. Some do; we normally identify them with subgenres of anti-social personality disorders, and there’s a grand total of ~1%<a href="https://www.apa.org/monitor/2022/03/ce-corner-psychopathy" target="_blank" rel="noreferrer">[1]</a> of them amongst us (out of which many are already locked up in prison and/or otherwise institutionalised). It’s generally safe to assume that your conversation partners have at least justifiable and potentially altruistic intentions. With that in mind, a lot of fights will de-escalate by getting everyone’s on the same page.</p>   
            <p>To do so, look for a crux: Why is it that they believe they’re right? Is this a fair game regarding the information available? (By which I also mean: Have you shared relevant information including but not limited to feelings and experiences, and have <i>you</i> shared it using language accessible to the other party?) If you’re even on information, maybe your respective values or priorities differ? You could throw the phrase around as is, but I swear there’s something contagiously peaceful about being able to genuinely say, ‘I see where you’re coming from,’ and your partner will notice.</p>      
                  
                  <div className="section-header">
                <b>No. 2: </b> Double-Click on Your Memories.
            </div>

<p>A lot of the time people are willing to burn bridges, it is because they’re CONVINCED they remember exactly how an event in question happened (“you did Y but we agreed to do X”, “you said Z”, etc.). The issue is that your conversation partner is likely just as CONVINCED they also remember exactly what happened (and their version still somehow doesn’t match yours). This is because the human memory sucks. We remember what didn’t happen and we forget what did. We fill in the blanks. We “skim read” the past. Our brains are designed to be consistent and helpful, who needs accurate?
</p>
<p>
    To tackle this, simply assume a margin of error for your own memory and cut some slack to that of your conversation partner. (If you find yourself dismissing too many of your own memories too often, it may point to other toxic patterns, but it’s generally rational to revisit memories with a degree of scepticism.) Concurrently, even if you somehow “have a screenshot” proving you’re right, you need to note that you’ve just pulled a rug from underneath your conversation partner’s feet—they had built a world around memories they reasonably assumed to be true. Just give them a minute man. 
</p>
<div className="section-header">
                <b>No. 3: </b>  Pick on People Your Own Size.
            </div>
<p>
    People consistently overestimate their abilities, including the ability to resolve conflict rationally under the influence of physical factors such as hunger, tiredness, and/or anger (which also turns physical at a certain point<a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0078503#:~:text=revealed%20similar%20results%2C%20compared%20to,concluded%20that%20%E2%80%98persons%20high' target='_blank' rel="noreferrer">[3]</a><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC7661405/#:~:text=Core%20structures%20of%20the%20brain%E2%80%99s,of%20more%20distant%20or%20possibly' target='_blank' rel="noreferrer">[4]</a>). The same applies to others: you’ll always get an argument out of hungry, tired, and angry people. Too bad you’ll rarely reach a resolution. Physical discomfort makes people irritable. Irritable people can’t think straight enough to defend themselves. Then irritable-to-begin-with people are even more irritable for their bodies work against their better judgement. It’s just not fair game. 
</p>
<p>
    Instead, hit pause and check in on everyone before fighting. Literally ask yourself: ‘Is this how I would feel about and react to the present situation if I were closer to optimal on the above axes? How about the other parties?’ It all boils down to being honest about whether everyone’s fit to chat <i>right now</i> or we need to postpone. Also, you want to correct for overestimating your fitness to fight—so, when in doubt, postpone. Finally, some pros will be able to continue a conversation <i>right now</i> even if they conclude it’d be better to postpone, continuously correcting for everyone’s physical limitations (but I don’t recommend).
</p>
                <div className="spacer"></div>
        <p>Now the above drills are not difficult to execute; the real hard bit is to catch yourself falling for any of the traps in the heat of the moment. The good news is that the self-awareness it takes not to is a trainable skill. The bad news is it won’t come to you unless you practice (and fail many times before getting it right). And finally, get into the habit of saying ‘I love you’ after a storm—which, for the record, comes in many different shapes (e.g. ‘I respect you’, ‘I still care’, ‘I’m lucky to have you’). It’ll just make everyone so much less anxious to be around you, leave alone the social futures you’ll earn for any interaction to come.</p>
        </TextPageBase>
    );
};

export default OnFighting;
