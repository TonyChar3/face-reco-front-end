

const Rank = ({name , rank}) => {
    return(
        <div>
            <div className="white f3">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f1">
                {`${rank}`}
            </div>
        </div>
    );
}

export default Rank;