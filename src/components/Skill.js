/* eslint-disable react/jsx-key */
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from '../style';
import SectionTitle from './SectionTitle';
import SingleSkill from './SingleSkill';

const Skill = () => {
    return (
        <section id="skill" className={`skill ${styles.section}`}>
            <Tabs>
                <div className="skill-area">
                    <div className={`${styles.container}`}>
                        <SectionTitle title="Skills" />
                        <div className="about-content grid grid-cols-12 gap-4 content-center items-center">
                            <div className="col-span-12 content-center">
                                <div className="skills-box">
                                    <div className="skill-button-box mb-8">
                                        <TabList className="flex justify-start items-center">
                                            {['Web', 'Programming', 'Tools'].map((tabTitle) => (
                                                <Tab className="dark:text-white sm:text-[20px] text-primary border-2 border-primary cursor-pointer px-5 rounded-md py-1 mr-2 outline-none">
                                                    {tabTitle}
                                                </Tab>
                                            ))}
                                        </TabList>
                                    </div>

                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="React"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                                <SingleSkill
                                                    title="HTML"
                                                    width="w-[98%]"
                                                    percent="98%"
                                                />
                                                <SingleSkill
                                                    title="CSS"
                                                    width="w-[95%]"
                                                    percent="95%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Bootstrap"
                                                    width="w-[95%]"
                                                    percent="95%"
                                                />
                                                <SingleSkill
                                                    title="Material UI"
                                                    width="w-[70%]"
                                                    percent="70%"
                                                />
                                                <SingleSkill
                                                    title="Tailwind"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="JavaScript"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                                <SingleSkill
                                                    title="jQuery"
                                                    width="w-[70%]"
                                                    percent="70%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="C"
                                                    width="w-[70%]"
                                                    percent="70%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid grid-cols-12 gap-4 justify-between">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Git"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Photoshop"
                                                    width="w-[30%]"
                                                    percent="30%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Visual Studio"
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
