import React from 'react';

const SingleSkill = (props) => {
    const { title, percent, width } = props;
    return (
        <div className="skill-box bg-sky-400 px-5 py-4 rounded-lg mb-4">
            <div className="skill-top flex justify-between items-center  mb-2">
                <h3 className="heading-3 capitalize text-[24px] font-semibold">{title}</h3>
                <p>{percent}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-purple-600 h-2.5 rounded-full ${width}`}></div>
            </div>
        </div>
    );
};

export default SingleSkill;
