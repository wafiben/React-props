
import MyImg from '../images/img.JPG';
import PropTypes from "prop-types";
const styleProfile = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 150,
    },

    styleText: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '5px solid #dbd3ea',
        boxShadow: '0 8px 10px 0 rgba(255, 0, 0, 0.2), 0 10px 20px 0 rgba(255, 0, 0, 0.19)',
        textAlign: 'center',
        borderRadius: '1%',

    },

    fullName: {
        color: 'salmon',
        fontSize: 50,
        margin: 20,
        fontFamily: 'Geogia',
    },

    bio: {
        color: '#1D4E56',
        fontSize: 30,
        margin: 20,
        fontFamily: 'Times New Roman',
    },
    profession: {
        color: '#9C5934',
        fontSize: 25,
        margin: 20,
        fontFamily: 'Times New Roman',
    },

    img: {
        width: 350,
        height: 450,
        marginRight: 100,
        border: '5px solid #dbd3ea',
        boxShadow: '0 8px 10px 0 rgba(255, 0, 0, 0.2), 0 10px 20px 0 rgba(255, 0, 0, 0.19)',
        padding: 10,
        borderRadius: '1%',


    }
}

const Profile = (props) => {

    return (
        <div style={styleProfile.container}>
            <>
                <img src={props.pic} style={styleProfile.img} />
                {props.children}
            </>
            <div style={styleProfile.styleText}>
                <div style={styleProfile.fullName}>{props.fullName}</div>
                <div style={styleProfile.bio}>{props.bio}</div>
                <div style={styleProfile.profession}>{props.profession}</div>
            </div>
            {props.handleName(props.fullName)}
        </div>
    )
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};

Profile.defaultProps = {
    fullName: "wafi benjeddoyu",
    bio: "Student at GoMyCode",
    profession: "front-end developer",
    pic: MyImg
};
export default Profile;