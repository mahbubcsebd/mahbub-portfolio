import React from 'react';

const SingleSkill = (props) => {
    const { title, percent, width } = props;
    return (
        <div className="skill-box bg-[#1d293a] px-5 py-4 rounded-lg mb-5">
            <div className="skill-top flex justify-between items-center mb-5">
                <h3 className="capitalize text-[24px] text-white font-bold">{title}</h3>
                <p className="p-1 text-[18px] font-semibold bg-primary text-white rounded-sm">
                    {percent}
                </p>
            </div>
            <div className="w-full rounded-full h-2.5 bg-gray-700">
                <div className={`bg-primary h-2.5 rounded-full ${width}`}></div>
            </div>
        </div>
    );
};

export default SingleSkill;
