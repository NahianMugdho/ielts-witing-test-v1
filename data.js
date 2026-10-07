/* =====================================================================
   data.js — এই ফাইলেই সব প্রশ্ন-উত্তর। app.js বা index.html ছুঁতে হবে না।
   ---------------------------------------------------------------------
   ✍️ নতুন WRITING TASK যোগ করতে: নিচে TASKS তালিকার ঠিক শুরুতে (">>> এখানে" লেখা জায়গায়) এই ফরম্যাটে পেস্ট করুন:

   {id:'unique-id',            // প্রতিটার আলাদা নাম (ইংরেজি, স্পেস ছাড়া)
    type:1,                    // 1 = Task 1, 2 = Task 2
    title:'টাইটেল',
    prompt:`প্রশ্ন এখানে`,
    vocab:[['phrase','বাংলা অর্থ']],   // ঐচ্ছিক: টিউটোরিয়ালে টেবিল আসবে
    answer:`অনুচ্ছেদ ১

    অনুচ্ছেদ ২ (মাঝে ফাঁকা লাইন)`},    // শেষে কমা দিতে ভুলবেন না

   ➕ ঐচ্ছিক ফিল্ড: kind:'Agree/Disagree' (ট্যাগে দেখায়), tips:['টিপস লাইন'] (টিউটোরিয়ালের উপরে দেখায়)

   🧩 Fill in the gaps: answer-এ যে শব্দ/ফ্রেজ ফাঁকা করতে চান তা {{ }} এর ভেতরে লিখুন, যেমন {{alarming surge}}।
      কোনো {{ }} না দিলে সাইট নিজে থেকে বড় শব্দগুলো ফাঁকা করবে (সহজ/মাঝারি/কঠিন বাছা যায়)।

   📚 নতুন VOCABULARY যোগ করতে: নিচে VOCAB তালিকার শুরুতে ">>> এখানে" লেখা জায়গায় যোগ করুন।
      ex-এর বাক্যে ফাঁকা করার শব্দ {{ }} এর ভেতরে দিন।
   ===================================================================== */

// DP_VOCAB: Capital Punishment essay-র key words (Task টেবিলে দেখায়)
const DP_VOCAB=[['Alarming surge','উদ্বেগজনক বৃদ্ধি'],['Heinous crime','জঘন্য ও নৃশংস অপরাধ'],['Gruesome rape-murders','ভয়াবহ ধর্ষণ-হত্যা'],['Public safety','জননিরাপত্তা'],['Significantly undermined','মারাত্মকভাবে ক্ষুণ্ণ হচ্ছে'],['Indispensable','অপরিহার্য'],['Vital instrument','অত্যন্ত গুরুত্বপূর্ণ হাতিয়ার'],['Potent deterrent','খুব শক্তিশালী প্রতিরোধক'],['Hesitate','দ্বিধা করা'],['Public catharsis','জনগণের মানসিক শোধন'],['Gross injustice','চরম অন্যায়'],['Irredeemable criminals','যাদের সংশোধন সম্ভব নয়'],['Take precedence over','অগ্রাধিকার পাওয়া'],['Rein in','নিয়ন্ত্রণ করা'],['Restore public confidence','জনগণের আস্থা ফিরিয়ে আনা']];

const TASKS=[
// >>> এখানে নতুন Writing Task যোগ করুন (উপরের ফরম্যাটে) <<<
{id:'t1-gdp',type:1,title:'Bar Chart — UK GDP from IT & Service Industry (1992-2000)',
prompt:`The chart shows components of GDP in the UK from 1992 to 2000.
Summarize the information by selecting and reporting the main features and make comparisons where relevant.`,
tips:['Para 1 = Introduction + Overview (graph কী দেখাচ্ছে + মূল বিষয়)','Para 2 = Body 1 (১৯৯২–১৯৯৬)','Para 3 = Body 2 (বিপরীত প্যাটার্ন, ১৯৯৬–২০০০)','Para 4 = Conclusion (শেষ তুলনা)'],
answer:`The bar chart illustrates the gross domestic product generated from the IT and Service Industry in the UK from 1992 to 2000. It is measured in percentages. Overall, it can be seen that both increased as a percentage of GDP, but IT remained at a higher rate throughout this time.

At the beginning of the period, in 1992, the Service Industry accounted for 4 percent of GDP, whereas IT exceeded this, at just over 6 percent. Over the next four years, the levels became more similar, with both components standing between 6 and just over 8 percent. IT was still higher overall, though it dropped slightly from 1994 to 1996.

However, over the following four years, the patterns of the two components were noticeably different. The percentage of GDP from IT increased quite sharply to 12 in 1998 and then nearly 15 in 2000, while the Service Industry stayed nearly the same, increasing to only 8 percent.

At the end of the period, the percentage of GDP from IT was almost twice that of the Service Industry.`},
{id:'t1-stokeford',type:1,title:'Maps — Village of Stokeford (1930 & 2010)',
prompt:`The maps below show the village of Stokeford in 1930 and 2010.
Summarise the information by selecting, and reporting the main features and make comparisons where relevant.
Write at least 150 words.`,
tips:['Map verbs: demolished, replaced, renovated, built, constructed, extended, expanded, relocated, converted, modernized','Direction: north, south, east, west ব্যবহার করুন'],
answer:`The two maps illustrate how the village of Stokeford, situated on the east bank of the River Stoke, changed over an 80 year period from 1930 to 2010. There was considerable development of the settlement over these years and it was gradually transformed from a small rural village into a largely residential area.

The most notable change is the presence of housing in 2010 on the areas that were farmland back in 1930. New roads were constructed on this land and many residential properties built. In response to the considerable increase in population, the primary school was extended to around double the size of the previous building.

Whilst the post office remained as a village amenity, the two shops that can be seen to the north-west of the school in 1930, no longer existed by 2010, having been replaced by houses. They also used to be an extensive property standing in its own large gardens situated to the southeast of the school. At some time between 1930 and 2010, this was extended and converted into a retirement home. This was another significant transformation for the village.

Therefore, it is seen that the infrastructure of Stokeford looked a lot different in 2010 than it looked in 1930.`},
{id:'t1-bricks',type:1,title:'Process — How Bricks Are Manufactured',
prompt:`The diagram below shows the process by which bricks are manufactured for the building industry.
Summarise the information by selecting, and reporting the main features and make comparisons where relevant.
Write at least 150 words.`,
tips:['Process: ধাপগুলো পরপর লিখুন — To begin, Following this, Next, In the subsequent stage, Finally'],
answer:`The diagram explains the way in which bricks are made for the building industry. Overall, there are seven stages in the process, beginning with the digging up of clay and culminating in delivery.

To begin, the clay used to make the bricks is dug up from the ground by a large digger. This clay is then placed onto a metal grid, which is used to break up the clay into smaller pieces. A roller assists in this process. Following this, sand and water are added to the clay, and this mixture is turned into bricks by either placing it into a mould or using a wire cutter. Next, these bricks are placed in an oven to dry for 24 - 48 hours.

In the subsequent stage, the bricks go through a heating and cooling process. They are heated in a kiln at a moderate and then a high temperature (ranging from 200c to 1300c), followed by a cooling process in a chamber for 2 - 3 days.

Finally, the bricks are packed and delivered to their destinations.`},
{id:'t2-community',type:2,kind:'Agree/Disagree',title:'Compulsory Community Service in High School',
prompt:`Some people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighbourhood or teaching sports to younger children).
Do you agree or disagree?`,
tips:['Agree/Disagree: Intro (paraphrase + thesis) → Body 1 (topic sentence, explain, example) → Body 2 → Conclusion'],
answer:`It is argued that volunteering should be made part of the school curriculum. This essay agrees with that suggestion completely because it helps students develop soft skills and helps them gain much-needed work experience.

Education should not be limited to strictly academic pursuits and those in education should also develop life skills, such as teamwork, empathy and self-discipline, and one of the best ways to hone these aptitudes is through community service. Serving those less fortunate than ourselves teaches us many lessons including how to work with people from other backgrounds and the value of hard work, thus enabling us to hone these skills before becoming an adult. For example, many young people from wealthier countries take a gap year and help those less fortunate than themselves to increase their gratitude for what they have and improve their work ethic.

Many colleges and companies are also increasingly looking for this type of experience. Most school leavers have the same grades and charitable works can help set you apart from other students when making college applications. For example, Cambridge and Oxford receive thousands of applications from straight-A students every year and can only accept a small percentage of applicants. What you have done outside the classroom is often the thing that differentiates you from everyone else and gets you that coveted spot.

In conclusion, teenagers should be made to partake in unpaid work as part of their schooling because it will help them learn things they wouldn't ordinarily learn from their teachers and it will also boost their chances of getting into the third level education.`},
{id:'t2-edtech-ad',type:2,kind:'Advantage/Disadvantage',title:'Technology in Education — Advantages & Disadvantages',
prompt:`Technology is being used more and more in education. Discuss the advantages and disadvantages.`,
tips:['Adv/Disadv: Intro (paraphrase + মূল points) → Body 1 (২টা advantage + example) → Body 2 (২টা disadvantage + example) → Conclusion'],
answer:`It is argued that technology is playing an ever-increasing role in schools and universities. Increased access to information and student freedom are the main advantages, whereas dependency on technology and decreasing levels of face-to-face contact is the main disadvantage.

Having access to more information and student autonomy are the principal advantages of an increase in the use of electronic devices in education. With the internet, students can access all the information available about any topic, regardless of what books and other resources are available in the school. Furthermore, students have the freedom to focus on whatever topic or subject they want and study it in depth.

A prime example of this is the number of online university courses available to students, covering a myriad of subjects, that up until recently were unavailable to most learners. This has resulted in more people studying third level degrees than ever before, at a pace and schedule that suits them.

The main disadvantages associated with the increasing use of technology in education is the dependency on this technology and the decrease in face-to-face interaction between students. With many students now using the internet as their primary source of information, they often struggle to use other academic resources to find what they're looking for.

As well as this, students spend more time looking at computer screens by themselves than interacting with each other, and this is thought to lead to lower levels of emotional intelligence. For instance, the recent explosion in smartphone use has been at the expense of genuine human interaction. This results in soft skills, such as verbal communication and empathy, being affected.

In conclusion, the benefits technology brings to education, such as unrestricted access to information and student autonomy must be weighed against the drawbacks, such as dependency on this technology and the negative effects on human interaction.`},
{id:'t2-edtech-cause',type:2,kind:'Cause/Solution',title:'Reliance on Technology — Problems & Solutions',
prompt:`Students are becoming more and more reliant on technology. What are some of the problems associated with reliance on computers, and what are some of the possible solutions?`,
tips:['Problem/Solution: Intro (paraphrase + outline) → Body 1 (problems + example) → Body 2 (solutions + example) → Conclusion'],
answer:`Learners are becoming ever more dependent on technology, such as the Internet and mobile devices. This essay believes the main problems associated with dependence on computers is the lack of original thought and copying original work from others and suggests critical thinking classes and writing analysis software as the most viable solutions.

The principal problems with over-reliance on technology are people not being able to think for themselves and plagiarism. With access to so much information, students often rely on other people's opinions instead of forming their own. As well as this, they often use search engines to answer a question and simply copy the text from a website, rather than thinking about the question. This practice is not only prohibited in schools and universities but also stunts a student's intellectual development because they will never truly think for themselves, which is what university is supposed to really be for. For example, many teachers complain that students copy web pages straight from Wikipedia word for word rather than giving a reasoned answer to their questions.

Solutions to these worrying problems are special classes to focus on critical thinking and teachers using anti-plagiarism software to detect copying. If teachers create situations where students have to infer meaning and express opinions based on a small amount of information, this will ensure that students have an opportunity to develop these skills. Also, if students know that their assignments are being checked for plagiarism, this will be enough to deter them from doing so. For instance, many universities already use this kind of software to scan course work for plagiarism and it could be extended to include all homework, by learners in both secondary and tertiary education.

In conclusion, the main problems with overuse of technology in education are the lack of original thought and plagiarism and these can be solved through special classes that teach students analytical skills and the use of plagiarism detection software.`},
{id:'t2-edtech-disc',type:2,kind:'Discussion',title:'Technology in Education — Discuss Both Views',
prompt:`Technology is being used more and more in education. Some people say that this is a positive trend, while others argue that it is leading to negative consequences.
Discuss both sides of this argument and then give your own opinion.`,
tips:['Discussion: Intro (both views + thesis) → Body 1 (view 1 + তোমার মত + example) → Body 2 (view 2) → Conclusion (কোন view better)'],
answer:`There is an ever-increasing use of technology, such as tablets and laptops, in the classroom. It is often argued that this is a positive development, whilst others disagree and think it will lead to adverse ramifications. This essay agrees that an increase in technology is beneficial to students and teachers.

It is clear that the Internet has provided students with access to more information than ever before. This has given learners the ability to research and learn about any subject at the touch of a button. It is therefore agreed that technology is a very worthwhile tool for education. Wikipedia is a prime example, where students can simply type in any keyword and gain access to in-depth knowledge quickly and easily.

However, many disagree and feel that technology deprives people of real human interaction. Human interaction teaches people valuable skills such as discourse, debate and empathy. Without these soft skills, many people find it difficult to become successful in work and their personal lives. Despite this, human interaction is still possible through the internet and this essay disagrees that technology should be dismissed for this reason. For instance, Skype and Facebook make it possible for people to interact in ways that were never before possible.

While the benefits of technology, particularly the internet, allow students to tap into limitless sources of information, some still feel that people should be wary of this new phenomena and not allow it to curb face to face interaction. However, as long as we are careful to keep in mind the importance of human interaction in education, the educational benefits are clearly positive.`},
{id:'t2-job',type:2,kind:'Direct Question',title:'Job Satisfaction — Direct Questions',
prompt:`As most people spend a major part of their adult life at work, job satisfaction is an important element of individual wellbeing.
What factor contributes to job satisfaction?
How realistic is the expectation of job satisfaction for all workers?`,
tips:['Direct question: Intro (paraphrase + thesis + outline) → Body 1 (প্রথম প্রশ্নের সরাসরি উত্তর + reasoning + example) → Body 2 (দ্বিতীয় প্রশ্ন) → Conclusion'],
answer:`As the majority of adults spend most of their time at work, being content with your career is a crucial part of a person's health and happiness. This essay will first suggest fair pay as a key element leading to job satisfaction and it will then state that it is not very likely that everyone can be happy with their job.

The most important thing that leads to someone being satisfied at work is being compensated fairly. If those more senior than you respect you as a person and the job you are doing then you feel like you are valued. A fair salary and benefits are important marks of respect and if you feel you are being underpaid you will either resent your bosses or look for another job. These two factors came top of a recent job satisfaction survey conducted by Monster.com, that found that 72% of people were pleased with their current role if their superiors regularly told them they were appreciated.

With regards to the question of happiness for all workers, I think this is and always will be highly unlikely. The vast majority of people fail to reach their goals and end up working in a post they don't really care about in return for a salary. This money is just enough to pay their living expenses which often means they are trapped in a cycle of disenchantment. For example, The Times recently reported that 89% of office workers would leave their jobs if they did not need the money.

In conclusion, being satisfied with your trade or profession is an important part of one's well-being and respect from one's colleagues and fair pay can improve your level of happiness, however, job satisfaction of all workers is an unrealistic prospect.`},
{id:'l-semi',type:1,kind:'Letter (Semi-formal)',title:'Letter to Manager — Request Time Off',
prompt:`You are working for a company. You need to take some time off and want to ask your manager about this.
Write a letter to your manager. In your letter
- explain why you want to take time off
- give details of the amount of time you need
- suggest how your work could be covered while you are away.`,
tips:['Semi-formal: নাম দিয়ে চেনা professional সম্পর্ক — Dear Mr. Jones; contractions ব্যবহার নয়'],
answer:`Dear Mr. Jones,

I am writing to request a few days of unpaid leave in March.

It is my parents' wedding anniversary on 22nd March and they are planning to celebrate their special day with their children and grandchildren in a cottage, which they have rented to accommodate all the family.

To participate in this special occasion I would need to be away from work for four days, from Tuesday 19th to Friday 22nd. My schedule for that week is relatively light apart from two meetings with clients. Anna would be able to attend the meetings in my place, as she has dealt with both of these clients in the past. I have no other meetings nor any other urgent work that needs to be completed at that time.

I would be very grateful if you could allow me to take these four days off as it is very important to my parents that I attend and I would appreciate it if you could let me know by the end of the week.

Kind regards,
Tom Watson`},
{id:'l-informal',type:1,kind:'Letter (Informal)',title:'Letter to a Friend — New Job',
prompt:`You have recently started work in a new company.
Write a letter to an English-speaking friend. In your letter
- explain why you changed jobs
- describe your new job
- tell him/her your other news`,
tips:['Informal: "letter to your friend" হলেই informal — contractions ব্যবহার করুন (I\'m, wasn\'t)'],
answer:`Dear Tom,

I'm just writing to let you know I quit my old job and found something new.

I was really fed up with being a brain surgeon because it wasn't really much of a challenge anymore. You know me; if I'm not learning new tricks, I get bored too easily and have to find something new.

I'm now teaching English as a foreign language in Vietnam and it suits me down to the ground. I teach two adult classes and a kindergarten class, which is not only challenging but also rewarding too. Can you believe it?

I also have some other amazing news- I'm getting married. She was one of my first ever students and I guess it was love at first sight for both of us. Make sure you keep the first weekend in July free, so you can come and celebrate with us.

Keep in touch.
Yours ever
Chris.`},
{id:'book-dp-top',type:2,title:'Capital Punishment & Violence (Band 8.5+ · Top-notch Model) — বই থেকে',
prompt:`Without capital punishment (the death penalty), our lives are less secure and violent crimes increase. Capital punishment is essential to control violence in society.
To what extent do you agree or disagree?`,
vocab:DP_VOCAB,
answer:`In recent years, countries like Bangladesh have witnessed an {{alarming surge}} in {{heinous}} and brutal crimes, particularly {{gruesome}} rape-murders and organized gang violence. I totally {{concur}} with the opinion that without capital punishment, {{public safety}} is {{significantly undermined}} and violent offences tend to escalate. From my perspective, the death penalty is {{indispensable}} as a powerful deterrent and a {{vital instrument}} for delivering justice in a society {{plagued by}} such {{rampant brutality}}.

First and foremost, capital punishment serves as a {{potent deterrent}} against heinous crimes. When potential offenders are aware that committing a {{barbaric act}} could result in the loss of their own life, they are far more likely to {{hesitate}} before acting. In Bangladesh, the {{horrific surge}} in cases such as the rape and murder of young girls in various districts has {{sparked widespread public outrage}}. Many citizens strongly believe that the slow judicial process and lenient sentences have {{emboldened}} criminals. Societies that consistently enforce the death penalty for the most serious offences often report a greater sense of security among {{law-abiding}} people. Therefore, retaining capital punishment is absolutely essential to {{curbing}} the escalating culture of violence in the country.

Furthermore, capital punishment provides a form of {{public catharsis}} for the victims' families by delivering a {{profound sense of closure}} and {{moral satisfaction}}. It not only helps them heal from their {{unimaginable emotional trauma}} but also ensures that the most dangerous and {{irredeemable}} criminals are {{permanently removed}} from society, thereby stopping them from committing further {{heinous atrocities}}.

{{Admittedly}}, some argue that the death penalty is {{inhumane}} and carries the {{irreversible risk}} of executing innocent individuals. While these concerns are not somehow invalid, I do believe that with improved investigation processes, better forensic science, and faster judicial processes, such risks can be {{substantially minimized}}. In a country like Bangladesh, where violent crimes are {{rising alarmingly}}, the safety and security of innocent citizens must {{take precedence over}} the rights of {{convicted offenders}}.

Overall, I strongly agree that capital punishment is {{indispensable}} to {{rein in}} violence and maintain social order. In the Bangladeshi context, where brutal crimes have become a {{grave concern}}, the death penalty is not merely a form of punishment - it is a necessary and effective measure to {{safeguard}} the lives of law-abiding citizens and {{restore public confidence}} in the justice system.`},
{id:'book-dp-easy',type:2,title:'Capital Punishment & Violence (Easier Model) — বই থেকে',
prompt:`Without capital punishment (the death penalty), our lives are less secure and violent crimes increase. Capital punishment is essential to control violence in society.
To what extent do you agree or disagree?`,
vocab:DP_VOCAB,
answer:`In recent years, some countries like Bangladesh have witnessed a {{disturbing rise}} in brutal crimes, particularly rape-murders and gang violence. I completely agree with the view that without capital punishment, our lives are less secure and violent crimes tend to increase. In my opinion, the death penalty is essential as a strong deterrent and a tool for delivering justice in a society like ours.

First of all, capital punishment sends a powerful message to potential criminals. When a person knows that committing a {{heinous crime}} could cost them their own life, they are more likely to {{think twice}} before acting. In Bangladesh, after several {{shocking incidents}} such as the rape and murder of young girls in different districts, {{public outrage}} has repeatedly demanded the highest punishment. Many believe that the slow pace of justice and lighter sentences have emboldened criminals. Countries and societies that actively implement the death penalty for the most serious offences often experience a stronger sense of security among citizens. Therefore, retaining capital punishment is necessary to control the growing culture of violence.

Furthermore, the death penalty serves the purpose of justice for the victims and their families. When a person commits an extremely cruel and inhuman crime, such as torturing and killing a child, giving them only imprisonment feels like an injustice to the victim's family. In Bangladesh, where many families of rape-murder victims protest on the streets demanding justice, capital punishment provides a {{sense of closure}} and moral satisfaction. It also ensures that the most dangerous criminals are {{permanently removed}} from society, preventing them from repeating such crimes.

Admittedly, some argue that the death penalty is inhumane and there is a risk of executing innocent people. While these concerns are not somehow invalid, I do believe that with improved investigation processes, better forensic science, and faster trials, the chances of error can be minimized. The safety and security of innocent citizens should be {{given priority over}} the rights of convicted criminals.

To wind up, I strongly agree that capital punishment is indispensable to control severe crimes and maintain security in society. In the context of Bangladesh, where violent crimes are {{increasing alarmingly}}, the death penalty is not just a punishment - it is a {{crucial measure}} to protect the lives of law-abiding citizens.`},
{id:'t1-jobs',type:1,title:'Number of Jobs in Four US Economic Sectors (1960-2020)',
prompt:`The graph below gives information about the number of jobs in four sectors of the economy in the US between 1960 and 2020.
Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
Write at least 150 words.`,
answer:`The line graph illustrates changes in employment levels (in millions) across four key economic sectors in the United States - Manufacturing, Retail, Agriculture, and Healthcare - from 1960 to 2020.

Overall, manufacturing and agriculture experienced a long-term decline in jobs, while healthcare showed consistent growth. Retail employment rose steadily until around 2000 before plateauing and slightly declining thereafter.

In 1960, manufacturing was the largest employer among the four sectors, with approximately 15 million jobs. It peaked at around 20 million in 1980, after which it declined steadily to roughly 13 million by 2020. In contrast, agriculture started with about 6 million jobs in 1960 and fell sharply to just under 2 million by 2020 - a reduction of over two-thirds.

Healthcare began with the fewest jobs (around 2 million) in 1960 but demonstrated uninterrupted growth, rising to approximately 16 million by 2020 - surpassing manufacturing as the largest sector by the end of the period. Retail employment grew from about 6 million in 1960 to 15 million in 2020, though its trajectory was not linear: it increased steadily until 2000 (reaching ~15 million), then levelled off and dipped slightly to 15.5 million by 2020 - still higher than in 1960 but marginally below its 2000 peak.

Notably, healthcare overtook retail around 2010 and surpassed manufacturing by 2020, reflecting a structural shift toward service- and care-based employment in the US economy over the six decades.`},
{id:'t2-tall',type:2,title:'Building Tall Apartment Blocks to Provide Enough Homes in Large Cities',
prompt:`The best way to provide enough homes in large cities is to build tall apartment blocks.
To what extent do you agree or disagree with this statement?
Give reasons for your answer and include any relevant examples from your own knowledge or experience.
Write at least 250 words.`,
answer:`The assertion that constructing high-rise apartment blocks is the optimal solution to urban housing shortages is widely debated. While vertical development is undeniably necessary in densely populated metropolises, I only partially agree with this statement, as it overlooks critical social and infrastructural dimensions of sustainable urban living.

Admittedly, tall buildings offer a pragmatic response to land scarcity. In cities like Tokyo or Singapore, where horizontal expansion is geographically or economically unfeasible, high-density residential towers maximise limited space and can accommodate thousands within a small footprint. Furthermore, concentrating populations vertically can improve the efficiency of public transport and utility networks, reducing per-capita infrastructure costs and curbing urban sprawl that consumes agricultural land.

However, labeling high-rises as the "best" solution is reductive. Sole reliance on vertical density often exacerbates social isolation, inadequate natural light, and strain on local services such as schools and hospitals. More importantly, housing adequacy encompasses not just quantity but also affordability, community cohesion, and long-term livability. Alternative or complementary strategies - such as adaptive reuse of industrial buildings, incentivising medium-density "missing middle" housing, and reforming zoning laws to allow mixed-use neighbourhoods - can address supply gaps while fostering more resilient communities. Additionally, without robust rent controls and inclusionary zoning, new high-rises frequently cater to investors rather than low- and middle-income residents, worsening inequality.

In conclusion, while tall apartment blocks are a vital component of urban housing strategy, they are insufficient alone. A truly effective approach must integrate diverse housing typologies with equitable policies and holistic urban planning to ensure cities are not only housed but also humane and sustainable.`},
{id:'t1-cafe',type:1,title:'Redesign of a College Café Layout',
prompt:`The plans below show a college café before it was redesigned and how it looks now.
Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
Write at least 150 words.`,
answer:`The two diagrams illustrate the layout changes in a college cafe before and after its redesign.

Overall, the cafe has been reconfigured to improve functionality and customer flow, with a shift from staff-focused spaces to more diverse customer services and expanded outdoor seating.

In the original layout, the kitchen was adjacent to a single serving area handling all food and drink, while staff dining rooms occupied a central position near the main seating zone. Toilets and a bin were placed at opposite ends.

After redesign, the serving area is replaced by specialised zones: a hot meals counter, a salad bar, a coffee bar, and a dedicated take-away food section - indicating a move toward self-service and efficiency. The staff dining rooms are eliminated entirely. A new barbecue area is added outside, and outdoor seating is significantly expanded (five sets shown, versus none previously). Additionally, the bin is replaced by a clearly labelled recycling bin, reflecting updated environmental practices.

Crucially, the main tables-and-chairs area remains central but is now more open and accessible, supporting both indoor and outdoor dining integration.`},
{id:'t2-cinema',type:2,title:'The Importance of Theatres and Cinemas in the Digital Age',
prompt:`Some people say that in the digital age, theatres and cinemas are no longer important as people can watch all the entertainment they want online. Others argue that theatres and cinemas are still important both economically and culturally.
Discuss both these views and give your own opinion.
Give reasons for your answer and include any relevant examples from your own knowledge or experience.
Write at least 250 words.`,
answer:`The proliferation of streaming platforms has led some to contend that physical theatres and cinemas are obsolete, as digital content offers unparalleled convenience. However, others maintain that these venues retain indispensable economic and cultural value. I firmly align with the latter view, believing that while online entertainment dominates daily consumption, physical venues fulfill irreplaceable societal functions.

Critics of traditional venues rightly highlight the advantages of digital access. Streaming services provide vast libraries of content at minimal cost, accessible anytime without geographical or temporal constraints. For many, this has rendered occasional cinema trips or theatre visits seem redundant, especially when high-quality productions are available on personal screens. The pandemic further accelerated this shift, normalising home-based entertainment and reducing footfall in cultural districts. Consequently, from a purely utilitarian perspective, physical venues appear less essential than they once were.

Nevertheless, theatres and cinemas remain vital for reasons beyond mere content delivery. Culturally, they serve as communal spaces where shared emotional experiences foster social cohesion - an aspect algorithms cannot replicate. The collective laughter in a comedy club or the hushed tension during a live play creates a sense of belonging that solitary viewing lacks. Economically, these venues anchor local ecosystems: they generate employment not only for performers and technicians but also for adjacent hospitality and retail businesses. A thriving theatre district attracts tourism and stimulates urban regeneration, whereas streaming revenue rarely circulates within local communities. Moreover, live performance preserves intangible cultural heritage, nurturing artistic innovation through direct audience feedback - a dynamic absent in pre-recorded digital content.

In my view, digital and physical entertainment are complementary rather than competitive. While streaming satisfies individual convenience, theatres and cinemas sustain the communal, economic, and cultural fabric of society. Their continued relevance lies not in competing with screens, but in offering what screens fundamentally cannot: embodied human connection and place-based cultural vitality. Therefore, supporting these venues remains crucial even in the digital age.`},
{id:'t1-desert',type:1,title:'Formation of a Rain-Shadow Desert',
prompt:`The diagram below shows how one type of desert, known as a rain-shadow desert, is formed.
Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
Write at least 150 words.`,
answer:`The diagram illustrates the step-by-step process by which a rain-shadow desert forms on the leeward side of a mountain range, as moist air from the sea is intercepted and depleted of moisture.

Overall, the formation involves seven sequential stages: moist maritime air is forced upward over mountains, leading to condensation, rainfall on the windward slope, and subsequent drying of the air as it descends the opposite side - creating arid conditions inland.

Initially, winds carrying moisture approach the coast (1) and are pushed upward along the mountain’s windward slope (2). As the air rises, it cools adiabatically, causing water vapour to condense into clouds (3 to 4). This results in heavy precipitation on the windward side (5), saturating the atmosphere. By contrast, the now-dry air continues over the mountain crest (6) and descends the leeward slope, warming and absorbing moisture from the land below. Consequently, the inland areas receive little to no rainfall, forming a rain-shadow desert (7), located thousands of kilometres from the coast.

Notably, the stark contrast between the wet windward side and the arid leeward side highlights the orographic effect’s decisive role in regional climate differentiation.`},
{id:'t2-abroad',type:2,title:'Study Abroad or Work Placement for All Undergraduates',
prompt:`All university undergraduate courses should include a period of time spent studying abroad or doing a work placement.
Do you think the advantages of this would outweigh the disadvantages?
Give reasons for your answer and include any relevant examples from your own knowledge or experience.
Write at least 250 words.`,
answer:`The proposal to mandate international study or work placements for all undergraduates is increasingly advocated as a means to enhance graduate employability and global awareness. While such requirements entail significant logistical and financial challenges, I believe the long-term educational and professional benefits substantially outweigh these drawbacks, provided institutions implement equitable support mechanisms.

Admittedly, compulsory mobility programmes present notable disadvantages. Financially, they risk exacerbating inequality; students from low-income backgrounds may struggle with travel, accommodation, or lost part-time income, potentially forcing them into debt or discouraging enrolment altogether. Academically, integrating external placements into rigid curricula can disrupt course coherence, particularly in specialised fields like medicine or engineering where sequential learning is critical. Additionally, administrative burdens on universities - such as securing quality host organisations and ensuring academic credit transfer - can strain resources and compromise programme standards if scaled universally without adequate funding.

Nevertheless, the advantages are profound and multifaceted. Professionally, immersive experiences cultivate adaptability, cross-cultural communication, and problem-solving skills that classroom learning rarely replicates. Employers consistently value graduates with real-world exposure, as evidenced by higher employment rates and starting salaries among mobile students. Educationally, studying or working abroad fosters intellectual independence and exposes learners to diverse pedagogical or industry practices, enriching their disciplinary understanding. On a societal level, widespread mobility promotes intercultural empathy and global citizenship - qualities essential in an interconnected world facing transnational challenges like climate change and public health crises. Crucially, these benefits align with the core mission of higher education: to develop well-rounded individuals capable of contributing beyond national borders.

In conclusion, while mandatory placements pose implementation hurdles, their transformative impact on student development and societal progress justifies their inclusion. The key lies not in abandoning the idea due to its challenges, but in designing inclusive frameworks - through scholarships, flexible scheduling, and virtual alternatives - that ensure equity without sacrificing quality. Thus, the advantages decisively outweigh the disadvantages when approached thoughtfully.`},
{id:'t1-library',type:1,title:'University Library User Survey Results: Chart and Table Summary',
prompt:`The chart and table below show the results of a survey of library users at a university.
Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
Write at least 150 words.`,
answer:`The two diagrams present information about the composition of library users and their levels of satisfaction with various services.

Overall, full-time undergraduates constitute the largest user group (44%), while academic staff are the smallest (7%). In terms of satisfaction, users are most pleased with staff helpfulness (95% very satisfied) and library opening hours (65% very satisfied), whereas journal availability and wi-fi reliability receive the lowest approval ratings.

Specifically, among user categories, full-time postgraduates account for 25%, followed by part-time postgraduates (16%) and distance learners (8%). The relatively small proportion of academic staff (7%) contrasts sharply with the dominance of undergraduate students.

Regarding satisfaction, the staff's helpfulness stands out as exceptionally well-regarded, with virtually all users (95%) reporting high satisfaction and none expressing dissatisfaction. Conversely, journal availability elicits the most negative response: only 45% are very satisfied, while 20% are not satisfied - a significantly higher dissatisfaction rate than for any other service. Similarly, wi-fi reliability shows notable discontent (19% not satisfied), despite nearly half (48%) being very satisfied. Book availability receives moderate feedback (50% very satisfied, 10% not satisfied), suggesting room for improvement but less urgency than journals or wi-fi.`},
{id:'t2-primary',type:2,title:'Formal Learning and Play in Primary Education',
prompt:`Some people argue that primary schools focus too much on formal learning.
To what extent do you agree with this opinion?
How important do you think it is for children to play as well as learn in the primary school classroom?
Give reasons for your answer and include any relevant examples from your own knowledge or experience.
Write at least 250 words.`,
answer:`The contention that primary education places excessive emphasis on formal academic instruction is one I largely endorse. While foundational literacy and numeracy are undeniably essential, an overemphasis on structured learning often marginalises play, which is equally critical for holistic child development. I believe integrating purposeful play into the classroom is not merely beneficial but fundamental to effective early education.

Admittedly, formal learning provides necessary cognitive scaffolding. Standardised curricula ensure children acquire core knowledge and skills required for future academic success, particularly in increasingly competitive educational landscapes. However, when schools prioritise test scores and rigid timetables over experiential learning, they risk stifling creativity, social-emotional growth, and intrinsic motivation. Young children learn best through active engagement, yet many primary classrooms now resemble secondary ones, with prolonged seated instruction replacing hands-on exploration. This misalignment with developmental psychology can lead to disengagement, anxiety, and superficial understanding - outcomes that undermine the very goals formal education seeks to achieve.

Play, by contrast, serves as a vital pedagogical tool rather than a frivolous diversion. Through guided and unstructured play, children develop executive functions such as problem-solving, self-regulation, and collaboration. For instance, role-playing scenarios foster empathy and language skills, while construction activities enhance spatial reasoning and resilience through trial and error. Moreover, play accommodates diverse learning styles and paces, allowing children to internalise concepts at their own rhythm. Crucially, it nurtures curiosity and joy in learning - dispositions that sustain long-term academic engagement far more effectively than rote memorisation. Research consistently shows that play-rich environments correlate with stronger social competence, emotional well-being, and even improved academic outcomes in later years.

In my view, the dichotomy between "learning" and "play" is false; in early childhood, play is learning. Primary schools should therefore recalibrate their approach by embedding play-based methodologies within the curriculum - not as an add-on, but as a core instructional strategy. This does not mean abandoning academic rigour, but rather recognising that young minds require varied, embodied experiences to thrive. Ultimately, a balanced primary education that values play as much as formal instruction better prepares children not only for school, but for life.`},
];

const VOCAB=[
// >>> নতুন Vocabulary সেট এখানে (তালিকার শুরুতে) যোগ করুন — ফরম্যাট উপরের মন্তব্যে দেখুন <<<
{id:'v-ubiq',title:'Ubiquitous',topic:'Social Media & Internet',words:[
 {w:'Ubiquitous',m:'সর্বত্র বিরাজমান',s:'rife, pervasive, prevalent, omnipresent, wide-ranging',ex:[
  "The {{ubiquitous}} influence of social media is evident in how it shapes our opinions.",
  "The {{ubiquitous}} presence of smartphones has changed the way we interact with the world.",
  "With {{ubiquitous}} access to the internet, remote work has become a common practice."]}]},
{id:'v-seamless',title:'Seamless',topic:'Online Business + Mobile banking',words:[
 {w:'Seamless',m:'নিরবচ্ছিন্ন; বিরামহীন',s:'smooth and continuous, without interruptions',ex:[
  "In Bangladesh, social media's {{seamless}} service has connected rural communities with the world.",
  "Online business relies on {{seamless}} integration of payment systems for customer satisfaction.",
  "Online business has benefited from {{seamless}} transitions to digital platforms."]}]},
{id:'v-fuel',title:'Fuel misunderstandings',topic:'Social Media & Relationships',words:[
 {w:'Fuel misunderstandings',m:'ভুল বোঝাবুঝিকে তীব্র করা',s:'intensify, exacerbate, worsen, amplify, deepen, stir up, breed',ex:[
  "Social media often {{exacerbates}} misunderstandings because people only see one side of the story.",
  "One major drawback of relying heavily on mobile phones for communication is that it can {{amplify}} misunderstandings.",
  "Overreliance on platforms like Facebook can also {{fuel}} misunderstandings, as curated posts don't always reflect reality."]}]},
{id:'v-bootstrap',title:'Bootstrap',topic:'Online Business',words:[
 {w:'Bootstrap',m:'অল্প পুঁজি, নিজের সামর্থ্যে ব্যবসা শুরু করা',s:'start from scratch, build from the ground up, self-funded',ex:[
  "Platforms like Daraz and Facebook have lowered the barrier to entry, making it easy for anyone with a smartphone to {{bootstrap}} a business.",
  "She started from {{scratch}} and built a successful online shop with very limited capital.",
  "Young entrepreneurs often build their ventures from the {{ground up}} using minimal resources."]}]},
{id:'v-easy',title:'A breeze / a cinch (খুব সহজ)',topic:'Easy expressions',words:[
 {w:'A breeze; a cinch',m:'খুব সহজ',s:'a piece of cake, child\'s play, straightforward, effortless, a walk in the park, no sweat',ex:[
  "Using bKash is a {{piece of cake}}.",
  "Setting up a Facebook shop is a {{breeze}}.",
  "For experienced users, navigating apps is a {{walk in the park}}.",
  "Learning basic digital skills is no {{sweat}}."]}]},
{id:'v-hustle',title:'Slow their hustle',topic:'Obstacles to effort',words:[
 {w:'Slow their hustle',m:'উদ্যমী প্রচেষ্টাকে ধীর করে দেয়',s:'hinder, hamper, dampen, impede, undermine, stifle, curb',ex:[
  "Too much time spent on social media can {{stifle}} their hustle and negatively affect young people's ambitions.",
  "Overuse of mobile phones can put a {{damper}} on their hustle and reduce productivity.",
  "Rural entrepreneurs often face hurdles like patchy internet, which can {{slow}} their hustle."]}]},
{id:'v-pushback',title:'Pushback & Catalyst for change',topic:'Women\'s empowerment',words:[
 {w:'Pushback; catalyst; taking off',m:'প্রতিরোধ; অনুঘটক; দ্রুত বৃদ্ধি পাচ্ছে',s:'plain sailing = easy, effortless',ex:[
  "Challenges like low digital literacy and cultural {{pushback}} can slow this progress, so it's not all {{plain sailing}}.",
  "In my view, digital platforms are a {{catalyst}} for change, amplifying women's voices.",
  "Women's empowerment through digital platforms is {{taking off}} in Bangladesh."]}]},
{id:'v-pace',title:'Fast-paced & Pace',topic:'Lifestyle',words:[
 {w:'Fast-paced; hectic',m:'দ্রুতগতির; ব্যস্ত',s:'rapid, fast-moving, brisk, dynamic; step up / set / keep / break the pace',ex:[
  "In today's {{fast-paced}} world, the ability to adapt quickly has become essential for success.",
  "The {{hectic}} pace of modern life often leads to stress and burnout among young professionals.",
  "A dynamic and fast-paced lifestyle offers many opportunities, but it can also take a {{toll}} on mental health."]}]},
{id:'v-remote',title:'Remote Jobs phrases',topic:'Remote Jobs',words:[
 {w:'all the rage; toy with; stay on top of; bring to the table',m:'রিমোট জব-এর দরকারি ফ্রেজ',s:'end up, catching on, churn out, crack down on, keep an eye on, carve out',ex:[
  "Remote jobs are {{all the rage}} now, and I've {{toyed with}} the idea of freelancing online.",
  "You've got to {{stay on top of}} your tasks, or you might end up procrastinating.",
  "Remote jobs {{bring a lot to the table}}, like cutting down on commuting time and offering unparalleled flexibility.",
  "The downside is you need to {{crack down on}} distractions to meet deadlines."]}]},
{id:'v-game',title:'Upping the game & Pull out all the stops',topic:'Cybersecurity / IELTS preparation',words:[
 {w:'Upping the game; pull out all the stops',m:'নিজের মান উন্নত করা; সব রকম চেষ্টা করা',s:'raise your game, step up your game, level up, raise the bar, roll out, team up',ex:[
  "With cybercriminals constantly {{upping their game}}, governments need to {{pull out all the stops}} to safeguard sensitive data.",
  "Governments should crack down on cybercriminals by enforcing stricter laws and {{rolling out}} awareness campaigns.",
  "If you want better IELTS scores, you need to {{raise your game}} in vocabulary and fluency."]}]}
];

const GUIDE=[
// >>> এখানে নতুন Guide যোগ করুন: {id,title,topic,sections:[['শিরোনাম',['লাইন','- বুলেট লাইন','{{বোল্ড}} শব্দ']]]},
{id:'g-format',title:'IELTS Writing — Format of the Test',topic:'শুরুতেই জানুন',sections:[
['সময় ও নম্বর',['মোট সময়: {{৬০ মিনিট}} · স্কোর ৯ এর মধ্যে','- Task 1: Graph / Diagram / Map — {{২০ মিনিট}} · 150-180 words','- Task 2: Argumentative Essay — {{৪০ মিনিট}} · 250-300 words','Overall score = {{(X + 2Y) / 3}} (X = Task 1, Y = Task 2) — তাই Task 2 এর গুরুত্ব দ্বিগুণ']],
['Marking Criteria (৪টি)',['- Task Achievement','- Coherence and Cohesion','- Lexical Resource','- Grammatical Range and Accuracy']]]},
{id:'g-t1',title:'Task 1 — Structure (Graph / Chart)',topic:'Task 1',sections:[
['কাঠামো',['- Para 1: {{Introduction + Overview}}','- Para 2: Body Paragraph 1','- Para 3: Body Paragraph 2','- Para 4: Conclusion (দুটি body দরকার না হলে মোট ৩ প্যারা)']],
['Introduction + Overview',['- প্রশ্নটা নিজের ভাষায় {{paraphrase}} করুন (shows → illustrates)','- কী ধরনের graph/chart তা উল্লেখ করুন (bar, line, pie, table, mixed)','- সবচেয়ে গুরুত্বপূর্ণ তথ্য ১-২ লাইনে {{Overview}} হিসেবে দিন']],
['Body Paragraphs',['- তথ্য বিশদে লিখুন, নির্দিষ্ট সংখ্যা যোগ করুন','- বিপরীত ধরনের তথ্য আলাদা body-তে রাখা যায়']],
['মনে রাখুন',['{{ব্যক্তিগত মতামত কখনও নয়}} — শুধু graph/diagram এর তথ্য দিন']]]},
{id:'g-maps',title:'Task 1 — Maps',topic:'Task 1',sections:[
['তিন ধরনের Map প্রশ্ন',['- One map in the present day','- Two maps — present + future','- Two maps — past + present']],
['পরিবর্তনের শব্দ',['- Buildings: demolished, knocked-down, flattened, replaced, renovated, built, constructed, reconstructed, developed, extended, expanded, relocated, converted, modernized','- Trees & Forests: cleared, cut down, removed, planted','- Roads, Bridges & Railway Lines: constructed, built, extended, expanded, removed','- Leisure Facilities: opened up, set up, developed']],
['Location বোঝাতে',['‘to the left / right’ এর চেয়ে ভালো: {{north, south, east, west}} (যেমন: to the north-west of the school)']]]},
{id:'g-process',title:'Task 1 — Diagram / Process',topic:'Task 1',sections:[
['কৌশল',['- সর্বোচ্চ {{২০ মিনিট}} দিন','- Intro: প্রক্রিয়াটা paraphrase করুন + Overview-তে মোট ধাপ সংখ্যা ও শুরু-শেষ বলুন (seven stages, beginning with … culminating in …)','- Body: ধাপগুলো পরপর লিখুন','- Sequencing words: {{To begin, Following this, Next, In the subsequent stage, Finally}}']]]},
{id:'g-t2',title:'Task 2 — Structure & Tips',topic:'Task 2',sections:[
['কাঠামো',['- Para 1: Introduction','- Para 2: Body Paragraph 1','- Para 3: Body Paragraph 2','- Para 4: Conclusion','প্রয়োজনে বেশি body হতে পারে, তবে মোট প্যারা {{৫টির বেশি নয়}}। লেখা শুরুর আগে প্রশ্ন ভালো করে পড়ে {{plan}} করুন।']],
['Paraphrasing',['একই কথা ভিন্নভাবে বলা: synonym বা বিকল্প phrase দিয়ে। যেমন decrease → reduce, drop, decline, diminish, dwindle']],
['Sentence Structure',['Simple + compound + complex + compound-complex মিশিয়ে লিখুন','- Simple: I waited for the train.','- Compound: I waited for the train, but the train was late.','- Complex: I realized the train was late while waiting at the station.']],
['Topic Sentence ও শেষ কথা',['- {{Topic sentence}}: প্রতি প্যারার শুরুতে সারকথা','- {{Conclusive summary}}: প্যারার শেষে সারাংশ','- শেষে অন্তত {{৫ মিনিট}} proofread (grammar/spelling) করুন']]]},
{id:'g-essays',title:'Task 2 — ৫ ধরনের Essay',topic:'Task 2',sections:[
['১. Agree/Disagree',['Question: Do you agree or disagree? / To what extent do you agree?','- Intro: প্রশ্ন paraphrase + {{Thesis Statement}} (আপনার মত)','- Body 1 ও 2: topic sentence → ব্যাখ্যা → উদাহরণ','- Conclusion: মূল কথার সারাংশ']],
['২. Advantage/Disadvantage',['Question: Discuss the advantages and disadvantages.','- Intro: paraphrase + মূল points','- Body 1: ২টি {{advantage}} + উদাহরণ','- Body 2: ২টি {{disadvantage}} + উদাহরণ','- Conclusion: সারাংশ']],
['৩. Cause/Problem & Solution',['- Intro: paraphrase + outline sentence','- Body 1: {{Problems}} — প্রতিটা ব্যাখ্যা + উদাহরণ','- Body 2: {{Solutions}} — প্রতিটা ব্যাখ্যা + উদাহরণ','- Conclusion: সারাংশ']],
['৪. Discussion',['Question: Discuss both points of view and give your opinion.','- Intro: দুটি viewpoint + thesis + outline','- Body 1: প্রথম viewpoint + আপনি একমত/দ্বিমত কেন + উদাহরণ','- Body 2: দ্বিতীয় viewpoint একইভাবে','- Conclusion: সারাংশ + কোন viewpoint better']],
['৫. Direct Question',['একটি statement-এর পর দুটি আলাদা প্রশ্ন।','- Intro: paraphrase + thesis + outline','- Body 1: প্রথম প্রশ্নের {{সরাসরি উত্তর}} + reasoning + উদাহরণ','- Body 2: দ্বিতীয় প্রশ্ন একইভাবে','- Conclusion: সারাংশ']]]},
{id:'g-linkers',title:'Linking Words (Task 2)',topic:'Task 2',sections:[
['সম্মতি / মিল',['Likewise, Similarly, In the same way, Identically, Of course'],],
['অতিরিক্ত তথ্য',['Additionally, Furthermore, Moreover, In addition, Also']],
['মতভেদ / বিপরীত',['Although, However, But, In contrast, Conversely, On the other hand, On the contrary']],
['উদাহরণ / জোর',['For example, For instance, Notably, Namely, Chiefly, Especially, Specifically, To demonstrate']],
['ফলাফল',['As a result, Consequently, For this reason, In effect, Thus, Hence, Therefore']],
['সমাপ্তি',['In summary, In conclusion, In brief, To sum up, All in all, Overall']]]},
{id:'g-letter',title:'General Training — Letter (Task 1)',topic:'Letter',sections:[
['কাঠামো',['- Greeting (Dear Sir/Madam, Dear John, Dear Mr. Smith)','- Opening statement — লেখার কারণ','- Body A, B, C — প্রতিটায় একটি point + detail','- Closing statement (প্রয়োজনে)','- Sign off (Yours sincerely, Warm regards) + নাম','{{কোনো address লেখার দরকার নেই}}']],
['তিন ধরনের Letter',['- {{Formal}}: অচেনা ব্যক্তি/প্রতিষ্ঠান, official বিষয় (complaint, application, resignation)','- {{Semi-formal}}: নামে চেনা professional সম্পর্ক (teacher, manager, landlord) — Dear Mr. Jones','- {{Informal}}: শুধু "to your friend" লেখা থাকলে। বাকি সব ক্ষেত্রে formal/semi-formal','Formal ও semi-formal এ contraction নয়; informal এ contraction ভালো']],
['Formal phrases',['- I am writing this letter with regard to… / to bring to your attention… / to express my dissatisfaction with…','- I would be grateful if you would… / I was wondering if it would be at all possible to…','- I look forward to hearing from you. / Please respond at the earliest convenience.']],
['Semi-formal phrases',['- Thank you for your letter','- I am sorry but I will not be able to come to… / Please accept my apologies for…','- I was wondering if you could / would…? / Could you please…?','- I would like to remind you that… / I am sorry for inconveniencing you']],
['Informal phrases',['- I\'m just writing to let you know that… / I\'m writing to tell you about…','- I\'m very sorry about… / I\'d like to apologise for…','- I\'d be really grateful if you could… / I was wondering if you would do me a favour','- I was over the moon to hear about… / I\'m afraid I\'ve a bit of bad news for you','- All the best. / Keep in touch']],
['Letter-এর ধরন ও style',['- Complaints, applications/resignations: usually formal','- Invitations, explanations: informal বা semi-formal','- Requests, apologies: যেকোনো style','- Informative: mostly semi-formal/informal']]]}
];
