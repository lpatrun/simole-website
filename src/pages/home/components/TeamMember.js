// {imageURL,imageAlt,teamMember,jobPosition}
export default function TeamMember(props) {
    return (
        <div className="teamMember">
            <img
                src={props.imageURL}
                alt={props.imageAlt}
                width="160"
                height="160"
            />
            <h3>{props.teamMember}</h3>
            <p>{props.jobPosition}</p>
        </div>
    )
}
