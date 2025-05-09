import img1 from "/src/assets/Background.png";
import "../index.css";
const Smain = () => {
    return (
        <>
           
            <div className="container p-5 text-center " style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="d-flex justify-content-center text-center">
                <div className="d-flex align-items-center w-25">
                    <hr className="flex-grow-1" />
                    <h5 className="mx-2 text-muted">Tailored Workflows</h5>
                    <hr className="flex-grow-1" />

                </div>
                </div>
                <h1 className="animateHeading ">
                    Map your product journey
                </h1>
                <h5 style={{ color: '#707ba4' }}>
                    Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.
                </h5>

            </div>
        </>
    );
};

export default Smain;
