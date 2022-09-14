/* eslint-disable react/jsx-key */
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from '../style';
import SingleSkill from './SingleSkill';

const Skill = () => {
    return (
        <section id="skill" className="skill">
            <Tabs>
                <div className="skill-area">
                    <div className={`${styles.container}`}>
                        <div className="about-content grid grid-cols-12 gap-4 content-center items-center">
                            <div className="col-span-12 content-center">
                                <div className="skills-box">
                                    <div className="skill-button-box mb-8">
                                        <TabList className="flex justify-start items-center">
                                            {['Web', 'Programming', 'Tools'].map((tabTitle) => (
                                                <Tab className="dark:text-white text-[20px] text-sky-500 border-2 border-sky-500 cursor-pointer px-5 rounded-md py-1 mr-2">
                                                    {tabTitle}
                                                </Tab>
                                            ))}
                                        </TabList>
                                    </div>

                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="React"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Next.JS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="ExpressJS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="MySQL"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="Getsby"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="NodeJS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="MongoDB"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="JavaScript"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="C++"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Java"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="C"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Python"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="React"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Next.JS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="ExpressJS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="MySQL"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                            <div className="col-span-6">
                                                <SingleSkill
                                                    title="Getsby"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="NodeJS"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="MongoDB"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                            <div className="col-span-6 content-center">
                                <div className="skills-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        </section>
    );
};

export default Skill;
