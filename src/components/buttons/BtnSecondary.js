function BtnSecondary(props) {
    const { btnText, btnLink } = props;
    return (
        <a
            href={btnLink}
            className="text-[18px] border-sky-500 border-2 text-sky-500 px-6 py-2 inline-block capitalize "
        >
            {btnText}
        </a>
    );
}

export default BtnSecondary;
