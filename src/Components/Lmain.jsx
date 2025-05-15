import img1 from "/src/assets/Background.png";

export const Lmain = () => {
    return (
        <div className="container p-5 text-center " style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h1 className='animateHeading'>
                Don't take our word for it
            </h1>
            <p style={{ color: '#707ba4' }} className="fs-5">
                We provide tech-first solutions that empower decision-makers to build healthier and happier workspaces from anywhere in the world.
            </p>
        </div>
    )
}
