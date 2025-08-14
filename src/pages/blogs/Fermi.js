import React from 'react';
import TextPageBase from './TextPageBase';

const Fermi = () => {
    return (
        <TextPageBase
            title="A Continuing List of Grounding Fermi Problems (and how to solve them)"
            date="August 2025"
            chips={["tool", "academic"]}
            backgroundImage="fermi.png"
        >

    <p>A <i>Fermi estimation</i> question is a question that can be solved by combining smaller pieces of information to arrive at rough estimate of larger, otherwise difficult-to-estimate quantities. A “good” Fermi question (and I’d like to thank Eric for this definition) is one where “a reasonable human can be {'>'}1 order of magnitude (= multiple of 10) off”. Below I show some original solutions to what I consider solid&mdash;and quite insightful&mdash;Fermi problems + the summary of general tips at the end.</p>
                <div className="spacer"></div>
    <div className="section-header">
        <b>Q#1:</b> On an average day in 2025, how many flights worldwide land safely?
    </div>

    <p>~5 billion passengers fly per year <a href="https://www.telegraph.co.uk/travel/travel-truths/how-many-planes-are-there-in-the-world/" target="_blank">[1]</a>, which is ~13,700,000 per day. Now smaller planes like Boeing 737 used on domestic flights typically hold 150-200 passengers and planes like Boeing 777 used on long haul flights hold 200-400 passengers at a time. However, it is also reasonable to assume that this curve is skewed by the vast majority of short-haul flights <a href="https://www.researchgate.net/figure/Flight-length-and-duration-for-short-haul-and-long-haul-flights_tbl7_267927654" target="_blank">[2]</a> as well as that most flights are only ~90% full at best, and so let's count with an average 135 passengers per flight. When 13,700,000 passengers get divided by 135, we arrive at ~101,500, only a few thousands away from the actual answer of <b>103,573</b> <a href="https://www.oag.com/airline-frequency-and-capacity-statistics" target="_blank">[3]</a>.</p>

     <div className="section-header">
        <b>Q#2:</b> As of 2024, what was the value, in USD, of the total outstanding federal student loan balance in the US? 
    </div>

    <p>The USA has a population of ~340 million people. Assuming that roughly every seventh American has student loan debt, we have 48 million people in debt. If we assume an average debt of $40,000 (balancing the overwhelming majority of local colleges with only a few thousands in tuition and living costs per semester with fewer but disproportionately more expensive private colleges and graduate degrees), we arrive at ~1.94 trillion, pennies away from the actual answer of <b>1.7 trillion</b> <a href="https://educationdata.org/student-loan-debt-statistics" target="_blank">[4]</a>.</p>

    <div className="section-header">
        <b>Q#3:</b> How many trees are in the Amazon rainforest?
    </div>

    <p>We know that the US have an area of almost 10 million square kilometres. Now the Amazon Rainforest spans across much of the northern belt of South America, which can be reasonably estimated to be more than a half but less than the full size of the US, let's call it 7.5 million square kilometres (it's actually a bit less than that, around 6.7 million<a href="https://www.wwf.org.uk/learn/fascinating-facts/amazon#:~:text=1.,the%20side%20of%20the%20UK!" target="_blank">[5]</a>; also, it may appear that the {'>'}50% size of the US is a bit ambitious, but it’s important to note that the US are a bit further away from the equator, making the area seem bigger than it realistically is. {'>'}50% is a safe estimate.). Let's say that one tree needs 25 square metres of living space (my estimate is between 1 and 5 metres on the x and y axes, but I'm choosing the pessimistic end to compensate for bodies of water, rocky areas, and other spaces where trees may not grow); this means that ~40,000 trees will fit in 1 square kilometre. 7.5 million square kilometres times ~40,000 trees brings us to 300 billion trees, which is relatively close to the actual <b>340 billion</b> 
    <a href="https://www.nature.com/articles/s41586-023-06820-z" target="_blank">[6]</a>.</p>

    <div className="section-header">
        <b>Q#4:</b> How many people became the citizens of the US by naturalisation in 2024? 
    </div>

    <p>The US has ~340 million citizens, of which 10 to 15% can be reasonably assumed to be foreign-born (it's 15.8% <a href="https://cis.org/Report/ForeignBorn-Number-and-Share-US-Population-AllTime-Highs-January-2025" target="_blank">[7]</a>). May the average life expectancy in the US be ~70 years (77<a href="https://www.cdc.gov/nchs/fastats/life-expectancy.htm" target="_blank">[8]</a>, whoops). This means that these 34 to 51 million people could've become the US citizens any time between now and 52 years ago (as the eligibility for citizenship acquisition by naturalisation is only allowed for 18+<a href="https://www.usa.gov/naturalization" target="_blank">[9]</a>). This brings us to ~650,000 to ~980,000 citizens per year (naively assuming uniform distribution, which has actually risen significantly over the past few decades). Anyway, the answer of <b>818,500</b><a href="https://www.uscis.gov/citizenship-resource-center/naturalization-statistics" target="_blank">[10]</a> is within that range.</p>

    <div className="section-header">
        <b>Q#5:</b> How many people in the US speak Native North American languages at home?
    </div>

    <p>Once again, the US has ~340 million citizens. We can reasonably assume that, of these ~340 million, only 1 to 2% are of the Indigenous heritage<a href="https://en.wikipedia.org/wiki/Race_and_ethnicity_in_the_United_States" target="_blank">[11]</a>. That said, {'>'}90% are likely schooled or employed in the English-speaking environment and are therefore disincentivised from building homes and relationships within their linguistic communities. By doing a pessimistic estimate of the number of Native American people and an optimistic estimate of the ratio that continues to use Indigenous languages in daily life, we arrive at 340,000—not too far off the actual <b>372,000</b><a href='https://languagemagazine.com/census-shows-native-languages-count/' target='_blank'>[12]</a>.</p>

    <div className='spacer'></div>
    
    <p><b>General Thoughts:</b> Beside the general advice of "break down each question into more manageable subproblems" and "use information you know to estimate a range of information you don't know", I find it quite helpful to work with endpoints of estimated ranges and balance out the number of optimistic and pessimistic values per chain of thought (rather than work with the averages of ranges). Suppose you're working out the value of x from the estimated ranges for subproblems y and z: select one endpoint for y according to relevant externalities, but make a conscious choice to go with the other endpoint when unsure on z. It helps offset compounding errors and prevents systemic bias.</p>
    
    <div className='spacer'></div>
    <p>Send my way any Fermi problems you believe could fit this collection and would like to see worked out!</p>
    </TextPageBase>            
    );
};

export default Fermi;
