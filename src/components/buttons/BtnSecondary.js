function BtnSecondary(props) {
    const { btnText, btnLink } = props;
    return (
        <a
            href={btnLink}
            className="text-[18px] border-primary border-2 text-primary px-6 py-2 inline-block capitalize rounded-md"
        >
            {btnText}
        </a>
    );
}

export default BtnSecondary;
