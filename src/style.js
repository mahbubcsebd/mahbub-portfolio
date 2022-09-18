const styles = {
    boxWidth: 'xl:max-w-[1200px] w-full',
    section: 'pb-[20px] md:pb-[30px] md:pb-[80px]',
    container: 'container w-full mx-auto md:max-w-[1200px] xl:max-w-[1300px] w-full',

    heading1:
        'font-nunito font-bold text-[35px] xs:text-[40px] ss:text-[55px] sm:text-[43px]  md:text-[62px] lg:text-[67px] tracking-wide text-primary w-full',
    heading2:
        'font-nunito text-primary font-semibold ss:text-[48px] xs:text-[40px] text-[35px] xs:leading-[76.8px] leading-[66.8px] w-full',

    heading3: 'font-nunito font-semibold xs:text-[28px] text-[26px] dark:text-white w-full',

    paragraph:
        'text-[16px] sm:text-[18px] font-normal dark:text-white tracking-wide leading-[35px]',

    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',

    navLink:
        'hover:text-primary dark:hover:text-primary font-semibold uppercase text-[16px] upercase dark:text-white',
    link: 'text-[16px] font-normal text-slate-500',

    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',

    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
