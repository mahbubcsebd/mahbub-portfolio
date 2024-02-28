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
                        <div className="grid items-center content-center grid-cols-12 gap-4 about-content">
                            <div className="content-center col-span-12">
                                <div className="skills-box">
                                    <div className="mb-8 skill-button-box">
                                        <TabList className="flex items-center justify-start">
                                            {['Web', 'Programming', 'Tools'].map((tabTitle) => (
                                                <Tab className="dark:text-white sm:text-[20px] text-primary border-2 border-primary cursor-pointer px-5 rounded-md py-1 mr-2 outline-none">
                                                    {tabTitle}
                                                </Tab>
                                            ))}
                                        </TabList>
                                    </div>

                                    <TabPanel>
                                        <div className="grid justify-between grid-cols-12 gap-4">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="React"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Next.JS"
                                                    width="w-[70%]"
                                                    percent="70%"
                                                />
                                                <SingleSkill
                                                    title="Vue JS"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                                <SingleSkill
                                                    title="MongoDB"
                                                    width="w-[30%]"
                                                    percent="30%"
                                                />
                                                <SingleSkill
                                                    title="Tailwind"
                                                    width="w-[90%]"
                                                    percent="90%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Nuxt.JS"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                                <SingleSkill
                                                    title="Node JS"
                                                    width="w-[30%]"
                                                    percent="30%"
                                                />
                                                <SingleSkill
                                                    title="Express JS"
                                                    width="w-[50%]"
                                                    percent="50%"
                                                />
                                                <SingleSkill
                                                    title="Mongoose"
                                                    width="w-[30%]"
                                                    percent="30%"
                                                />
                                                <SingleSkill
                                                    title="Bootstrap"
                                                    width="w-[90%]"
                                                    percent="90%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid justify-between grid-cols-12 gap-4">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="JavaScript"
                                                    width="w-[75%]"
                                                    percent="75%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="C"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid justify-between grid-cols-12 gap-4">
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Git"
                                                    width="w-[80%]"
                                                    percent="80%"
                                                />
                                                <SingleSkill
                                                    title="Figma"
                                                    width="w-[60%]"
                                                    percent="60%"
                                                />
                                            </div>
                                            <div className="col-span-12 ss:col-span-6">
                                                <SingleSkill
                                                    title="Visual Studio"
                                                    width="w-[90%]"
                                                    percent="90%"
                                                />

                                                <SingleSkill
                                                    title="Photoshop"
                                                    width="w-[30%]"
                                                    percent="30%"
                                                />
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                            <div className="content-center col-span-6">
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
