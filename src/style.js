const styles = {
    boxWidth: 'xl:max-w-[1200px] w-full',
    section: 'py-[80px]',
    container: 'container w-full mx-auto xl:max-w-[1200px] w-full',

    heading1:
        'font-lato font-bold xs:text-[72px] text-[40px] tracking-wide dark:text-sky-500 xs:leading-[86.8px] leading-[66.8px] w-full',
    heading2:
        'font-lato font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',

    heading3:
        'font-lato font-semibold xs:text-[32px] text-[26px] dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full',

    paragraph: 'text-[16px] font-normal dark:text-white leading-[30.8px]',

    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',

    navLink:
        'hover:text-sky-500 dark:hover:text-sky-400 uppercase font-medium text-[16px] upercase dark:text-white',
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
