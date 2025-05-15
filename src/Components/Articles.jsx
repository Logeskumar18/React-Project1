import img1 from "/src/assets/Background.png";
import {
    BsFillPinAngleFill,
    BsFillPeopleFill,
    BsSearch,
    BsBarChartFill,
    BsDiagram3Fill,
    BsClockHistory
} from "react-icons/bs";

const Articles = () => {
    const cardData = [
        { icon: <BsFillPinAngleFill />, title: "Project Milestones", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." },
        { icon: <BsFillPeopleFill />, title: "Team Views", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." },
        { icon: <BsSearch />, title: "Advanced Search", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." },
        { icon: <BsBarChartFill />, title: "Strategic Initiatives", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." },
        { icon: <BsDiagram3Fill />, title: "Flexible Workflows", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." },
        { icon: <BsClockHistory />, title: "Unified Timeline", Para: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security." }
    ];

    return (
        <div className='p-5 border-bottom border-secondary' style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="row g-3">
                {cardData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="p-3  rounded shadow-sm h-100">
                            <div className="fs-2 text-primary mb-2">{item.icon}</div>
                            <h5 className="fw-bold">{item.title}</h5>
                            <p>{item.Para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
