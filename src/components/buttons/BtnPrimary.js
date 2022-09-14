function BtnPrimary(props) {
    const { btnText, btnLink } = props;
    return (
        <a
            href={btnLink}
            className="text-[18px] border-sky-500 border-2 text-white px-6 py-2 inline-block capitalize bg-sky-500 mr-4"
        >
            {btnText}
        </a>
    );
}

export default BtnPrimary;
